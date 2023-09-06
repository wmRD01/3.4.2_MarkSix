import { instantiate, Node, Prefab, ScrollView, Vec3, ViewGroup, _decorator } from 'cc';
import BaseComponent from '../../../../Model/ComponentBase';
import PointItemData from '../../../../Model/PointItemData';
import { AssetType } from '../../../../Enum/AssetType';
import AssetMng from '../../../../Manager/AssetMng';
import { NotificationType } from '../../../../Enum/NotificationType';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import Player from '../../../../Model/Player';
import PublicModel from '../../../../Model/PublicModel';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import PanelLoading from '../../../NoClearNode/PanelLoading';
import PublicData from '../../../../Model/PublicData';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
const { ccclass, property } = _decorator;
//TODO 優化如果未選號，自動縮欄位
@ccclass('PanelPoint')
export default class PanelPoint extends BaseComponent {
    @property(Prefab)
    item: Prefab
    @property(Node)
    layoutContent: Node;
    @property(Node)
    labelContent: Node;
    @property(Node)
    outlineContent: Node;
    @property(Node)
    buttonBGContent: Node;
    maxCount: number = 30;
    /**一次取得最多頁數 */
    pageCount: number = 10;
    currentCount: number = 0;
    @property(ScrollView)
    scrollview: ScrollView;
    isAsync: boolean;
    isDateMax: boolean;
    mapDate: Map<number, PointItemData> = new Map()
    async start() {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.layoutContent.removeAllChildren()


        this.scrollview.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.onViewBottom, this)
        this.setEvent(LobbyStateEvent.NextIssueID, this.reset)
    }
    onEnable() {

        if (this.layoutContent.children.length > this.maxCount) this.returnFunction()
        if (this.layoutContent.children.length == 0) {
            this.onViewBottom()
        }
        else this.returnFunction();
    }
    reset() {
        this.layoutContent.removeAllChildren()
        if (this.node.active) {
            this.onViewBottom()
        }
    }
    //#region History
    async requestHistory(count: number) {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.DrawHistory()
            body.top = count.toString()//目前固定10筆
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.DrawHistory)
            let convert = new URLSearchParams(body).toString()
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .fetchData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.DrawHistory}?${convert}`, this.responseDrawHistory.bind(this))
            resolve()
        })
    }
    responseDrawHistory(response?: ResponseGPG.DrawHistory.DataClass) {
        console.log("開獎紀錄", response);

        if (this.currentCount == response.data.length) {
            this.isDateMax = true
            return
        }
        for (let index = this.currentCount; index < response.data.length; index++) {
            if (this.layoutContent.children.length > this.maxCount) break;
            this.mapDate.set(Number(response.data[index].issueID), this.ClientData(response.data[index]))
        }
        this.currentCount = response.data.length;
    }
    ClientData(data: ResponseGPG.DrawHistory.History) {
        let _node = instantiate(this.item)
        let _class = _node.getComponent(PointItemData)

        _node.setPosition(Vec3.ZERO)
        this.layoutContent.addChild(_node)
        _class
            .setLabelContent(this.labelContent)
            .setOutlineContent(this.outlineContent)
            .setButtonBGContent(this.buttonBGContent)
            .setDayData(data.openDate, Number(data.issueID))
            .setOpenNumber(data.drawCode)
            .init()
        return _class
    }
    //#endregion

    //#region Betlog
    async requesBetlog(count: number) {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.Betlog()
            const getDate = PublicModel.getInstance.convertDateDiff(PublicData.getInstance.today, -(count))
            body.sDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-${getDate.getDate()}`
            body.eDate = PublicData.getInstance.today.split("T")[0]
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.Betlog)
            let convert = new URLSearchParams(body).toString()
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .fetchData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.Betlog}?${convert}`, this.responseBetlog.bind(this))
            resolve()
        })
    }
    responseBetlog(response?: ResponseGPG.Betlog.DataClass) {
        console.log("玩家紀錄", response);
        console.log(this.mapDate);

        for (let index = 0; index < response.data.length; index++) {
            if (!this.mapDate.has(Number(response.data[index].issueID))) continue;
            this.mapDate.get(Number(response.data[index].issueID)).setSelfNumber(response.data[index].betCode)
            this.mapDate.get(Number(response.data[index].issueID)).setScore(response.data[index].score)
        }
    }
    //#endregion

    async onViewBottom(_scrollview?: ScrollView) {
        if (this.currentCount >= this.maxCount) this.returnFunction()
        if (this.isDateMax) this.returnFunction()
        if (this.isAsync) this.returnFunction()
        this.isAsync = true;
        /**新增請求筆數 */
        let tryGet = this.currentCount + this.pageCount
        await this.requestHistory(tryGet)
        await this.requesBetlog(tryGet)

        // console.error("超過會走這?", this.currentCount);
        PanelLoading.instance.closeLoading()
        this.isAsync = false;
    }

    returnFunction() {
        PanelLoading.instance.closeLoading()
        return;
    }
}