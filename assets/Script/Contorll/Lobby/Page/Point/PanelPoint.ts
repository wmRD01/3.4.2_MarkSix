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
const { ccclass, property } = _decorator;
@ccclass('PanelPoint')
export default class PanelPoint extends BaseComponent {
    @property(Prefab)
    item: Prefab
    @property(Node)
    layoutContent: Node;
    @property(Node)
    labelContent: Node;
    @property(Node)
    OutlineContent: Node;
    maxCount: number = 30;
    /**一次取得最多頁數 */
    pageCount: number = 10;
    currentCount: number = 0;
    @property(ScrollView)
    scrollview: ScrollView;
    isAsync: boolean;
    isDateMax: boolean;
    async start() {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.layoutContent.removeAllChildren()
        this.scrollview.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.onViewBottom, this)
    }
    onEnable() {
        if (this.layoutContent.children.length > this.maxCount) return
        this.onViewBottom()
    }
    responseDrawHistory(response?: ResponseGPG.DrawHistory.DataClass) {
        if (this.currentCount == response.data.length) {
            this.isDateMax = true
            return
        }
        for (let index = this.currentCount; index < response.data.length; index++) {
            if (this.layoutContent.children.length > this.maxCount) break;
            this.ClientData(response.data[index])
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
            .setOutlineContent(this.OutlineContent)
            .setDayData(data.openDate, data.issueID)
            .setOpenNumber(data.drawCode)
            .init()

    }
    async onViewBottom(_scrollview?: ScrollView) {
        if (this.currentCount >= this.maxCount) return;
        if (this.isDateMax) return
        if (this.isAsync) return
        this.isAsync = true;
        /**新增請求筆數 */
        let tryGet = this.currentCount + this.pageCount
        const body = new RequestGPG.Body.NeedToken.DrawHistory()
        body.top = tryGet.toString()//目前固定10筆
        body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.DrawHistory)
        let convert = new URLSearchParams(body).toString()
        await new RequestGPG.Request()
            .setToken(Player.getInstance.gpgToken)
            .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.DrawHistory}?${convert}`, this.responseDrawHistory.bind(this))
        console.log("超過會走這?", this.currentCount);

        this.isAsync = false;
    }
}