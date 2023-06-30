import { Button, Color, color, find, Label, Layout, Sprite, _decorator } from "cc";
import DataFunctionMenu from "../Data/Panel/DataFunctionMenu";
import { GameEvent } from "../../Enum/GameEvent";
import { LangType } from "../../Enum/LangType";
import ButtonMng from "../../Manager/ButtonMng";
import SocketSetting from "../../Socket/SocketSetting";
import { excr } from "../Api/SendCommand";
import { CommandType } from "../../Enum/CommandType";
import { ServerGameSenceType } from "../../Enum/ServerGameSenceType";
import { WebSocketEvent } from "../../Enum/WebSocketEvent";
import GameData from "../../Model/GameData";
import PublicModel from "../../Model/PublicModel";
const { ccclass, property } = _decorator;
@ccclass('PanelFunctionMenu')
export default class PanelFunctionMenu extends DataFunctionMenu {
    arr_Btn: Array<Button> = new Array
    isRefresh: boolean
    tempGameSence: string;
    onLoad() {
        super.onLoad();
        this.contentButton = find("con_Btn", this.node)
        this.contentBG = find("con_BG", this.node)
        this.buttonBlockBG = find("BlockBG", this.node).getComponent(Button);
        this.arr_Btn.push(this.buttonMusic = find("btn_Music", this.contentButton).getComponent(Button));
        this.arr_Btn.push(this.buttonRecord = find("btn_Record", this.contentButton).getComponent(Button));
        this.arr_Btn.push(this.buttonExchange = find("btn_Exchange", this.contentButton).getComponent(Button));
        this.arr_Btn.push(this.buttonChangeNickname = find("btn_ChangeNickname", this.contentButton).getComponent(Button));
        this.arr_Btn.push(this.buttonBackHome = find("btn_BackHome", this.contentButton).getComponent(Button));
        this.labelChangeNickname = find("Label", this.buttonChangeNickname.target).getComponent(Label)

        this.setEvent(GameEvent.OpenMenu, this.show)

        ButtonMng.addEvent(this, "hide", this.buttonBlockBG, "")
        ButtonMng.addEvent(this, "onMusic", this.buttonMusic, "")
        ButtonMng.addEvent(this, "onRecode", this.buttonRecord, "")
        ButtonMng.addEvent(this, "onExChange", this.buttonExchange, "")
        ButtonMng.addEvent(this, "onChangeNickname", this.buttonChangeNickname, "")
        this.viewInit();


    }
    update() {

    }
    viewInit() {
        super.viewInit()
        this.moveBG()
        this.hideBtn(this.buttonBackHome);

    }
    show() {
        super.show()

        if (!this.isRefresh)
            this.refreshLayout()
    }
    setLanguage() {
        this.labelChangeNickname.string = SocketSetting.t("023", LangType.Game)
        find("Label", this.buttonExchange.target).getComponent(Label).string = SocketSetting.t("001", LangType.Game)
        find("Label", this.buttonMusic.target).getComponent(Label).string = SocketSetting.t("002", LangType.Game)
        find("Label", this.buttonRecord.target).getComponent(Label).string = SocketSetting.t("003", LangType.Game)
        find("Label", this.buttonBackHome.target).getComponent(Label).string = SocketSetting.t("004", LangType.Game)
    }
    moveBG() {
        for (let index = 0; index < this.arr_Btn.length; index++) {
            this.contentBG.addChild(this.arr_Btn[index].target)
        }
    }
    onExChange(e: Event, customEventData?: string) {
        this.hide()
        let _excr = new excr()
        _excr.coinType = GameData.getInstance.coinType
        this.eventEmit(GameEvent.ShowExchange)
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.excr, _excr)
    }
    onMusic(e: Event, customEventData: string) {
        this.hide()
        this.eventEmit(GameEvent.ShowSoundSet)
    }
    onRecode(e: Event, customEventData?: string) {
        this.eventEmit(WebSocketEvent.ViewRecord)
    }
    onChangeNickname(e: Event, customEventData?: string) {
        this.hide()
        this.eventEmit(GameEvent.ShowChangeNickname)

    }
    betEvent(e: Event, customEventData: string) {

    }
    backHomeEvent() {
    }
    // onOpenMenu() {
    //     this.show()
    // }
    async enableBtn(isBoolean: boolean) {

    }

    checkBet(e?: Event, customEventData?: string) {


    }
    refreshLayout() {
        this.contentButton.getComponent(Layout).updateLayout()
        for (let index = 0; index < this.arr_Btn.length; index++) {
            let getword = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.arr_Btn[index].node, this.arr_Btn[index].target)
            this.arr_Btn[index].target.position = getword
        }
    }

    hideBtn(_btn: Button) {
        //關閉Line線
        this.contentButton.children[_btn.node.getSiblingIndex() - 1].active = false
        _btn.node.active = false
        _btn.target.active = false

    }

}
