import { Button, Label, Vec3, _decorator } from "cc";
import { CommandType } from "../../../Enum/CommandType";
import { LangType } from "../../../Enum/LangType";
import { WebSocketEvent } from "../../../Enum/WebSocketEvent";
import ButtonMng from "../../../Manager/ButtonMng";
import BaseComponent from "../../../Model/ComponentBase";
import SocketSetting from "../../../Socket/SocketSetting";
import { gbbk, gbcl, gbrt } from "../../Api/SendCommand";
const { ccclass, property } = _decorator;
@ccclass('UIBetFunctionButton')
export default class UIBetFunctionButton extends BaseComponent {
    @property(Label)
    labelClear: Label
    @property(Button)
    buttonBackBet: Button;
    @property(Button)
    buttonReferLastBet: Button;
    onEnable() {
        ButtonMng.addEvent(this, "onBackBet", this.buttonBackBet)
        ButtonMng.addEvent(this, "onReferLastBet", this.buttonReferLastBet)
    }
    start() {
        this.adaptiveControlFrame()
    }


    onDisable() {
        ButtonMng.clearEvent(this.buttonBackBet)
        ButtonMng.clearEvent(this.buttonReferLastBet)
    }
    setLanguage() {
        this.labelClear.string = SocketSetting.t("008", LangType.Game)
        super.setLanguage()
    }
    onBackBet() {
        let _gbbk = new gbbk()
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gbbk, _gbbk)
    }
    onClearBet() {
        let _gbcl = new gbcl()
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gbcl, _gbcl)
    }
    onReferLastBet() {
        let _gbrt = new gbrt()
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gbrt, _gbrt)
    }
    adaptiveControlFrame() {
        if (!window.isPhone) {
            // this.node.setScale(.9, .9, .9)
            // this.node.setPosition(Vec3.ZERO)
        }
        else {
            this.node.setScale(Vec3.ONE)
            this.node.setPosition(0, -220, 0)
        }
    }
}