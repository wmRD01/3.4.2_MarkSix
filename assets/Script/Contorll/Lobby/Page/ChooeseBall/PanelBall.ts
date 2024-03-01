import { EventTouch, instantiate, Label, Layout, Node, Prefab, _decorator } from 'cc';
import { DEV } from 'cc/env';
import DelayTime from '../../../../../Plug/DelayTime';
import { AssetType } from '../../../../Enum/AssetType';
import { LangType } from '../../../../Enum/LangType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import { WebSocketEvent } from '../../../../Enum/WebSocketEvent';
import AssetMng from '../../../../Manager/AssetMng';
import ButtonMng from '../../../../Manager/ButtonMng';
import LanguageManager from '../../../../Manager/LanguageManager';
import BallData from '../../../../Model/BallData';
import BaseComponent from '../../../../Model/ComponentBase';
import Player from '../../../../Model/Player';
import PublicData from '../../../../Model/PublicData';
import PublicModel from '../../../../Model/PublicModel';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import * as RP from '../../../Api/ResponeCommand';
import PanelLoading from '../../../NoClearNode/PanelLoading';
import PanelSystemMessage from '../../../NoClearNode/PanelSystemMessage';
const { ccclass, property } = _decorator;
@ccclass('PanelBall')
export default class PanelBall extends BaseComponent {
    @property(Node)
    HorLayout: Node;
    @property(Node)
    labelContent: Node;
    @property(Node)
    buttonContent: Node;
    @property(Node)
    shadowContent: Node;
    @property(Node)
    effectContent: Node;
    @property(Prefab)
    layoutItem: Prefab;
    @property(Prefab)
    ballItem: Prefab;
    @property(Label)
    labelIssueID: Label
    @property(Label)
    labelState: Label
    @property(Node)
    tipBox: Node
    @property(Node)
    remide: Node



    Halign: number = 10;
    Valign: number = 5;
    totalCount: number = 49
    mapBallNumber: Map<number, BallData> = new Map()

    isChoose: number[] = []
    tempChoose: number[] = []
    /**選擇球數最大值 */
    MaxCount: number = 6
    isConfirm: boolean;
    isFullBall: boolean;
    websocket: Node;

    tipTimer: Timer


    async onLoad() {
        super.onLoad()
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.labelState.node.active = true;
        this.tipBox.active = false;
        this.remide.active = false;
        this.labelContent.removeAllChildren()
        this.HorLayout.removeAllChildren()
        let isEnd = false
        this.labelState.string = LanguageManager.getInstance.t("041", LangType.Game).replace("$0", this.MaxCount.toString())
        for (let V = 0; V < this.Valign; V++) {
            let layout = instantiate(this.layoutItem)
            this.HorLayout.addChild(layout)
            for (let H = 1; H <= this.Halign; H++) {
                let count = (V * this.Halign) + H
                if (count > this.totalCount) {
                    isEnd = true
                    break;
                }
                let _node = instantiate(this.ballItem)
                let _class = _node.getComponent(BallData)
                this.mapBallNumber.set(count, _class)
                layout.addChild(_node)
                _class.init(count)
                    .cancel()
                    .setButtonAuto()
                    .setEffectAuto()
                    .setShadowAuto();
                ButtonMng.addEvent(this, "onChooeseBall", _class.button, count.toString())
                this.labelContent.addChild(_class.label.node)
                this.buttonContent.addChild(_class.button.node)
                this.shadowContent.addChild(_class.shoadow.node)
                this.effectContent.addChild(_class.opacityEffect.node)
            }

        }
        await DelayTime.getInstance.StartDT(.016)
        for (let index = 0; index < this.HorLayout.children.length; index++) {
            //球往上飛所以不能讓他自動排版
            this.HorLayout.children[index].getComponent(Layout).enabled = false

        }
        this.mapBallNumber.forEach(element => {
            element.getOrg()
        });
        this.tipTimer = this.tipBox.addComponent(Timer)
        this.eventEmit(LobbyStateEvent.ChangeBallButtonState, true)
        this.eventEmit(LobbyStateEvent.ChangeConfirmState, false)
        this.setEvent(LobbyStateEvent.UpDateBall, this.reProcessing)
        this.setEvent(LobbyStateEvent.AttackBall, this.confirmAttack)
        this.setEvent(LobbyStateEvent.NextIssueID, this.reset)
    }
    async onEnable() {
        this.eventEmit(LobbyStateEvent.ChangeConfirmState, false)
        await this.requesBetlog()
        // this.eventEmit(WebSocketEvent.StartConnect)

    }
    onDisable() {
        this.eventEmit(WebSocketEvent.CloseWebSocket)
    }
    async reset() {
        this.eventEmit(WebSocketEvent.CloseWebSocket)
        this.onTestReset(null)
        await DelayTime.getInstance.StartDT(.5);
        this.eventEmit(WebSocketEvent.StartConnect)
    }

    onRandomNumber(e: EventTouch, customEventData?: string) {
        this.onResetChooese(null)
        let arr = []
        while (arr.length < this.MaxCount) {
            let random = 1 + Math.floor((Math.random() * (this.totalCount)))
            if (arr.indexOf(random) == -1) {
                this.onChooeseBall(null, random.toString())
                arr.push(random)
            }
        }
    }
    onChooeseBall(e: EventTouch, customEventData?: string) {
        if (this.isConfirm) return
        let convert = Number(customEventData)
        /**如果已經被選過的球 */
        if (this.tempChoose.indexOf(convert) > -1) {
            this.tempChoose.splice(this.tempChoose.indexOf(convert), 1)[0];
            this.mapBallNumber.get(convert).cancel()
            if (this.isFullBall) {

                this.tipBox.active = false
                this.fullResetBallColor(true)
                this.eventEmit(LobbyStateEvent.ChangeConfirmState, false)
            }
            if (this.tempChoose.length == 0)
                this.labelState.string = LanguageManager.getInstance.t("041", LangType.Game).replace("$0", this.MaxCount.toString())
            else
                this.labelState.string = LanguageManager.getInstance.t("042", LangType.Game).replace("$0", this.tempChoose.length.toString())
            return
        }
        /**如果選號已滿 */
        if (this.tempChoose.length >= this.MaxCount) return
        /**紀錄球號 */
        this.tempChoose.push(convert)
        this.mapBallNumber.get(convert).choose()
        this.labelState.string = LanguageManager.getInstance.t("042", LangType.Game).replace("$0", this.tempChoose.length.toString())
        if (this.tempChoose.length === this.MaxCount) {
            this.isFullBall = true;
            this.tipBox.active = true;
            this.tipTimer.setAction(3)
            this.eventEmit(LobbyStateEvent.ChangeConfirmState, true)
            this.mapBallNumber.forEach(element => {
                //代表沒被選種
                if (this.tempChoose.indexOf(element.ballNumber) == -1) {
                    element.enabledBall(false)
                }
            })
        }

    }
    onTestReset(e: EventTouch, customEventData?: string) {
        this.eventEmit(LobbyStateEvent.ChangeBallButtonState, true)
        this.isChoose = []
        this.tempChoose = []
        /**選擇球數最大值 */
        this.isConfirm = false
        this.isFullBall = false
        this.mapBallNumber.forEach(element => {
            element.cancel()
            element.backPosition()
        })

    }
    onResetChooese(e: EventTouch, customEventData?: string) {
        if (this.isConfirm) return
        if (this.tempChoose.length === this.MaxCount) {
            this.mapBallNumber.forEach(element => {
                element.cancel()
            })
        }
        else {
            for (let index = 0; index < this.tempChoose.length; index++) {
                this.mapBallNumber.get(this.tempChoose[index]).cancel()
            }
        }
        this.tempChoose = []
        this.eventEmit(LobbyStateEvent.ChangeConfirmState, false)
        this.tipBox.active = false
        this.labelState.string = LanguageManager.getInstance.t("041", LangType.Game).replace("$0", this.MaxCount.toString())
    }
    async Attack() {
        if (this.isConfirm) {
            PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("038", LangType.Game))
            return
        }
        if (this.tempChoose.length < this.MaxCount) {
            PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("039", LangType.Game))
            return
        }
        this.labelState.node.active = false;
        this.tipBox.active = false
        this.remide.active = true;
        let len = this.tempChoose.length
        for (let index = 0; index < len; index++) {
            this.isChoose.push(this.tempChoose.shift())
        }
        this.isChoose.sort((a, b) => a - b)
        /**沒辦法 得先關閉全部特效在座飛上去動作 */
        for (let index = 0; index < this.isChoose.length; index++) {
            this.mapBallNumber.get(this.isChoose[index]).cancel()
        }

        for (let index = 0; index < this.isChoose.length; index++) {
            this.mapBallNumber.get(this.isChoose[index]).cancel()
            this.eventEmit(LobbyStateEvent.BallChooeseAction, this.mapBallNumber.get(this.isChoose[index]).node, index)
            await DelayTime.getInstance.StartDT(.1);
        }
        /**打leo的com */
        this.tempChoose = []
        this.isConfirm = true
    }
    async requestBetWrite(e?: EventTouch, customEventData?: string) {
        this.eventEmit(LobbyStateEvent.ChangeConfirmState, false)
        const body = new RequestGPG.Body.NotNeedToken.BetWrite()
        body.memberID = Player.getInstance.gpgInfo.data.memberID
        body.issueID = PublicData.getInstance.curIssueID
        body.betCode = this.tempChoose;
        body.betTime = PublicModel.getInstance.convertDateToGPGServerTime()
        body.gameID = 50003;
        await new RequestGPG.Request(PublicModel.getInstance.checkApp())
            .setMethod(RequestGPG.Method.POST)
            .setToken(Player.getInstance.gpgToken)
            .setBody(JSON.stringify(body))
            .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.BetWrite}`, this.responseBetWrite.bind(this))
    }
    responseBetWrite(response?: ResponseGPG.BetWrite.DataClass) {
        if (response?.Status?.Code == '0') this.confirmAttack()
        /**請注意這邊是走GPG的error Code不是走Game的 */
        else {
            if (!response)
                PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("520", LangType.ServerAPI))
            else
                PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t(response.Status.Code, LangType.ServerAPI))
        }


    }
    confirmAttack(e?: EventTouch, customEventData?: string) {
        this.eventEmit(LobbyStateEvent.ChangeBallButtonState, false)
        this.Attack()
        PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("037", LangType.Game))
    }
    fullResetBallColor(bool: boolean) {
        this.mapBallNumber.forEach(element => {
            element.enabledBall(bool)
        })
        this.isFullBall = !bool;
    }

    reProcessing(data: RP.ln | RP.bet) {
        console.log(data);
        this.onResetChooese(null)
        if (data.betCode != null) {
            if (this.isFullBall) {
                if (DEV)
                    this.onTestReset(null)
                else {
                    PanelLoading.instance.closeLoading()
                    return
                }
            }
            for (let index = 0; index < data.betCode.length; index++) {
                this.onChooeseBall(null, data.betCode[index].toString())
            }
            this.Attack()
            PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("038", LangType.Game))
            this.eventEmit(LobbyStateEvent.ChangeBallButtonState, false)
        }
        this.labelIssueID.string = `第${data.drawIssue}期`;
        PanelLoading.instance.closeLoading()
    }
    async requesBetlog() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.Betlog()
            body.sDate = PublicData.getInstance.today.split("T")[0]
            body.eDate = PublicData.getInstance.today.split("T")[0]
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.Betlog, PublicData.getInstance.gpgApiKey)
            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            await new RequestGPG.Request(PublicModel.getInstance.checkApp())
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.Betlog}?${convert}`, this.responseBetlog.bind(this))
            resolve()
        })
    }
    responseBetlog(response?: ResponseGPG.Betlog.DataClass) {
        this.onResetChooese(null)
        if (response.data.length != 0) {
            if (this.isFullBall) {
                if (DEV)
                    this.onTestReset(null)
                else {
                    PanelLoading.instance.closeLoading()
                    return
                }
            }
            for (let index = 0; index < response.data[0].betCode.length; index++) {
                this.onChooeseBall(null, response.data[0].betCode[index].toString())
            }
            this.Attack()
            PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("038", LangType.Game))
            this.eventEmit(LobbyStateEvent.ChangeBallButtonState, false)
        }
        this.labelIssueID.string = `第${PublicData.getInstance.curIssueID}期`;
        PanelLoading.instance.closeLoading()
    }

}
class Timer extends BaseComponent {
    isAction: boolean
    time: number
    setAction(s: number) {
        this.isAction = true;
        this.time = s
        // console.error("原神起痛");

    }
    stopAction() {
        this.isAction = false
    }
    update(dt) {
        if (this.isAction) {
            this.time -= dt
            if (this.time < 0) {
                this.node.active = false;
                this.stopAction()
            }
        }
    }
}
