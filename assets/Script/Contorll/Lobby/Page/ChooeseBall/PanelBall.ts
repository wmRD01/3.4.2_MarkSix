import { Button, color, EventTouch, instantiate, Label, Layout, Node, Prefab, random, Sprite, Vec3, _decorator } from 'cc';
import DelayTime from '../../../../../Plug/DelayTime';
import { AssetType } from '../../../../Enum/AssetType';
import { CheckLoadingType } from '../../../../Enum/CheckLoadingType';
import { CommandType } from '../../../../Enum/CommandType';
import { LangType } from '../../../../Enum/LangType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import { WebSocketEvent } from '../../../../Enum/WebSocketEvent';
import AssetMng from '../../../../Manager/AssetMng';
import ButtonMng from '../../../../Manager/ButtonMng';
import BallData from '../../../../Model/BallData';
import CheckLoading from '../../../../Model/CheckLoading';
import BaseComponent from '../../../../Model/ComponentBase';
import SocketSetting from '../../../../Socket/SocketSetting';
import * as RP from '../../../Api/ResponeCommand';
import { bet } from '../../../Api/SendCommand';
import PanelLoading from '../../../NoClearNode/PanelLoading';
import PanelSystemMessage from '../../../NoClearNode/PanelSystemMessage';
const { ccclass, property } = _decorator;
@ccclass('PanelBall')
export default class PanelBall extends BaseComponent {
    @property(Node)
    HorLayout: Node;
    @property(Node)
    labelContent: Node;
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


    async start() {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.labelState.node.active = true;
        this.tipBox.active = false;
        this.remide.active = false;
        this.labelContent.removeAllChildren()
        this.HorLayout.removeAllChildren()
        let isEnd = false
        this.labelState.string = SocketSetting.t("041", LangType.Game).replace("$0", this.MaxCount.toString())
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
                _class.init(count).cancel()
                ButtonMng.addEvent(this, "onChooeseBall", _class.button, count.toString())
                this.labelContent.addChild(_class.label.node)
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
        this.eventEmit(LobbyStateEvent.ChangeBallButtonState, true)
        this.eventEmit(LobbyStateEvent.ChangeConfirmState, false)
        this.setEvent(LobbyStateEvent.UpDateBall, this.reProcessing)
        this.setEvent(LobbyStateEvent.AttackBall, this.onConfirmAttack)
        this.setEvent(LobbyStateEvent.NextIssueID, this.reset)
    }
    onEnable() {
        this.eventEmit(LobbyStateEvent.ChangeConfirmState, false)
        this.eventEmit(WebSocketEvent.StartConnect)

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
                this.labelState.string = SocketSetting.t("041", LangType.Game).replace("$0", this.MaxCount.toString())
            else
                this.labelState.string = SocketSetting.t("042", LangType.Game).replace("$0", this.tempChoose.length.toString())
            return
        }
        /**如果選號已滿 */
        if (this.tempChoose.length >= this.MaxCount) return
        /**紀錄球號 */
        this.tempChoose.push(convert)
        this.mapBallNumber.get(convert).choose()
        this.labelState.string = SocketSetting.t("042", LangType.Game).replace("$0", this.tempChoose.length.toString())
        if (this.tempChoose.length === this.MaxCount) {
            this.isFullBall = true;
            this.tipBox.active = true;
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
        this.labelState.string = SocketSetting.t("041", LangType.Game).replace("$0", this.MaxCount.toString())
    }
    async Attack() {
        if (this.isConfirm) {
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t("038", LangType.Game))
            return
        }
        if (this.tempChoose.length < this.MaxCount) {
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t("039", LangType.Game))
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

        for (let index = 0; index < this.isChoose.length; index++) {
            this.mapBallNumber.get(this.isChoose[index]).cancel()
            this.eventEmit(LobbyStateEvent.BallChooeseAction, this.mapBallNumber.get(this.isChoose[index]).node, index)
            await DelayTime.getInstance.StartDT(.1);
        }


        /**打leo的com */
        this.tempChoose = []
        this.isConfirm = true
    }
    onSendCheckAttack(e?: EventTouch, customEventData?: string) {
        const _bet = new bet()
        _bet.betCode = this.tempChoose
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.bet, _bet)
    }
    onConfirmAttack(e?: EventTouch, customEventData?: string) {
        this.eventEmit(LobbyStateEvent.ChangeBallButtonState, false)
        this.Attack()
        PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t("037", LangType.Game))
    }
    fullResetBallColor(bool: boolean) {
        this.mapBallNumber.forEach(element => {
            element.enabledBall(bool)
        })
        this.isFullBall = !bool;
    }
    watiWebSocket() {
        return new Promise<void>((resolve, reject) => {
            if (CheckLoading.getInstance.checkState(CheckLoadingType.isWebSocketOpen)) {
                resolve()
                return
            }
            let inter = setInterval(() => {
                if (CheckLoading.getInstance.checkState(CheckLoadingType.isWebSocketOpen)) {
                    clearInterval(inter)
                    resolve()
                }
            }, 100)
        })
    }

    reProcessing(data: RP.ln | RP.bet) {
        console.log(data);
        this.onResetChooese(null)
        if (data.betCode != null) {
            if (this.isFullBall) {
                PanelLoading.instance.closeLoading()
                return
            }
            for (let index = 0; index < data.betCode.length; index++) {
                this.onChooeseBall(null, data.betCode[index].toString())
            }
            this.Attack()
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t("038", LangType.Game))
            this.eventEmit(LobbyStateEvent.ChangeBallButtonState, false)
        }
        this.labelIssueID.string = `第${data.drawIssue}期`;
        PanelLoading.instance.closeLoading()
    }

}
