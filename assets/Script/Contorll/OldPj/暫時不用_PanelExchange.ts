import { Button, EditBox, find, Label, Sprite, _decorator } from "cc";
import { LisnerEditBox } from "../../Enum/LisnerEditBox";
import ButtonMng from "../../Manager/ButtonMng";
import EditBoxMng from "../../Manager/EditBoxMng";
import PublicData from "../../Model/PublicData";
import { GameEvent } from "../../Enum/GameEvent";
import SocketSetting from "../../Socket/SocketSetting";
import { LangType } from "../../Enum/LangType";
import MyMath from "../../../Plug/MyMath";
import { CommandType } from "../../Enum/CommandType";
import { excc, excr } from "../Api/SendCommand";
import { WebSocketEvent } from "../../Enum/WebSocketEvent";
import GameData from "../../Model/GameData";
import PublicModel from "../../Model/PublicModel";
import PanelLoading from "../NoClearNode/PanelLoading";
import CheckLoading from "../../Model/CheckLoading";
import { CheckLoadingType } from "../../Enum/CheckLoadingType";
import DataExchange, { PointBtn } from "../Data/Panel/DataExchange";
const { ccclass, property } = _decorator;
@ccclass('PanelExchange')
export default class PanelExchange extends DataExchange {
    protected onLoad() {
        super.onLoad()
        this.editBoxEnterNumber = find("editBox_EnterNum", this.node).getComponent(EditBox)
        this.contentBntton = find("con_Btn", this.node)
        this.buttonClose = find("btn_Close", this.node).getComponent(Button)
        this.buttonBlock = find("BlockBG", this.node).getComponent(Button)
        this.buttonConfirm = find("btn_Confirm", this.node).getComponent(Button)
        this.buttonRefreshView = find("btn_RefreshView", this.node).getComponent(Button)
        this.buttongoStaoredValue = find("btn_goStaoredValue", this.node).getComponent(Button)
        this.buttonCanelText = find("btn_CanelText", this.editBoxEnterNumber.node).getComponent(Button)
        this.labelConfirm = find("label_Confirm", this.buttonConfirm.node).getComponent(Label)
        this.labelTitle = find("label_Title", this.node).getComponent(Label)
        this.labelWalletHave_Title = find("label_WalletHave_Title", this.node).getComponent(Label)
        this.labelWalletHaveNumber = find("label_WalletHave_Num", this.node).getComponent(Label)
        this.labelChangeScaleTitle = find("label_ChangeScale_Title", this.node).getComponent(Label)
        this.labelChangeScaleNumber = find("label_ChangeScale_Num", this.node).getComponent(Label)
        this.labelClinetHaveTitle = find("label_ClinetHave_Title", this.node).getComponent(Label)
        this.labelClinetHaveNumber = find("label_ClinetHave_Num", this.node).getComponent(Label)

        for (let index = 0; index < this.contentBntton.children.length; index++) {
            let btn = new PointBtn.Btn()
            btn.btn = this.contentBntton.children[index].getComponent(Button)
            btn.spriteButtonBG = this.contentBntton.children[index].getComponent(Sprite)
            btn.labelNumber = find("label_Num", this.contentBntton.children[index]).getComponent(Label)
            if (index == this.contentBntton.children.length - 1)
                btn.labelNumber.string = GameData.getInstance.exChangeLib[index]
            else
                btn.labelNumber.string = Intl.NumberFormat().format(Number(GameData.getInstance.exChangeLib[index])).toString()
            this.arrayPointButton.push(btn)
        }
        this.setEvent(GameEvent.ShowExchange, this.show)
        this.setEditboxEevent();
        this.setButtonEvent()
        this.viewInit()
    }
    start() {
    }


    hide() {
        super.hide()
        if (!CheckLoading.getInstance.checkState(CheckLoadingType.isGameSence))
            this.eventEmit(GameEvent.InGameRoom)
    }
    show() {
        super.show()
        this.refreshWallet("-")
        this.refreshClinetHave("-")
        this.editBoxEnterNumber.string = ""
        this.onRefreshClintMoney();
        if (PublicData.getInstance.staoredValueUrl == "" || PublicData.getInstance.staoredValueUrl == undefined)
            this.buttongoStaoredValue.node.active = false

        // if (window.isEditor)
        //     this.endRefresh(300, 10000)
    }
    requestMoney() {
        PanelLoading.instance.openLoading()
        let _excr = new excr()
        _excr.coinType = GameData.getInstance.coinType
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.excr, _excr)
    }
    updataMoney(_wallet: number, _clinetHave: number, isClearEdit?: boolean) {
        this.wallet = _wallet
        this.clinetHave = _clinetHave
        this.refreshClinetHave(Intl.NumberFormat().format(_clinetHave))
        this.refreshWallet(Intl.NumberFormat().format(_wallet))
        this.refreshEditBoxState(0)
        this.editBoxEnterNumber.string = ""
        // let temp = this.editBox_EnterNum.string == "" ? 0 : Number(MainModel.filterNumberDot(this.editBox_EnterNum.string))
        // this.refreshClinetHave(Intl.NumberFormat().format(MyMath.minus(_clinetHave, temp)))
        // this.refreshWallet(Intl.NumberFormat().format(MyMath.add(_wallet, temp)))
        // this.refreshEditBoxState(temp)
        PanelLoading.instance.closeLoading()
    }

    setLanguage() {
        this.labelTitle.string = SocketSetting.t("001", LangType.Game)
        this.labelWalletHave_Title.string = SocketSetting.t("017", LangType.Game)
        this.labelClinetHaveTitle.string = SocketSetting.t("021", LangType.Game)
        this.labelChangeScaleTitle.string = SocketSetting.t("015", LangType.Game)
        this.labelConfirm.string = SocketSetting.t("018", LangType.Game)
        this.defaultPlaceholderLabel = SocketSetting.t("016", LangType.Game)
        this.editBoxEnterNumber.placeholderLabel.string = this.defaultPlaceholderLabel
    }
    private setButtonEvent() {
        ButtonMng.addEvent(this, "onClearEditBoxString", this.buttonCanelText)
        ButtonMng.addEvent(this, "onExChagne", this.buttonConfirm)
        ButtonMng.addEvent(this, "hide", this.buttonClose)
        ButtonMng.addEvent(this, "hide", this.buttonBlock)
        ButtonMng.addEvent(this, "onRefreshClintMoney", this.buttonRefreshView)
        ButtonMng.addEvent(this, "onGoStaoredValue", this.buttongoStaoredValue)

        for (let index = 0; index < this.arrayPointButton.length; index++) {
            ButtonMng.addEvent(
                this,
                "onAddPoint",
                this.arrayPointButton[index].btn,
                index.toString())
        }
    }
    private setEditboxEevent() {
        EditBoxMng.addEvent(
            this,
            "onEditBoxStart",
            this.editBoxEnterNumber,
            LisnerEditBox.EditBox_Start)
        EditBoxMng.addEvent(
            this,
            "onEditBoxEnd",
            this.editBoxEnterNumber,
            LisnerEditBox.EditBox_End)
        EditBoxMng.addEvent(
            this,
            "onEditBoxEditing",
            this.editBoxEnterNumber,
            LisnerEditBox.EditBox_Editing)
    }
    private onRefreshClintMoney(e?: Event, customEventData?: string) {
        this.requestMoney()
    }
    private onGoStaoredValue(e: Event, customEventData?: string) {
        this.eventEmit(WebSocketEvent.StaoredValue)
    }
    private onAddPoint(e: Event, customEventData?: string) {
        let getNum = Number(GameData.getInstance.exChangeLib[Number(customEventData)])

        if (isNaN(getNum)) {
            this.editBoxEnterNumber.string = Intl.NumberFormat().format(this.clinetHave)
            this.refreshEditBoxState(this.clinetHave);//最大值就是勝0元
            this.refreshNum(this.clinetHave)
            return;
        }
        // console.log(GameData.i().exChangeLib, getNum);


        let editWrite = Number(PublicModel.getInstance.filterNumberDot(this.editBoxEnterNumber.string))
        // editWrite = isNaN(editWrite) ? 0 : Number(editWrite)
        let count = MyMath.add(getNum, editWrite)
        this.editBoxEnterNumber.string = Intl.NumberFormat().format(count)
        this.refreshEditBoxState(count)
        this.refreshNum(count)
    }
    private onExChagne(e: Event, customEventData?: string) {
        let _excc = new excc()
        _excc.coinType = GameData.getInstance.coinType
        _excc.money = Number(PublicModel.getInstance.filterNumberDot(this.editBoxEnterNumber.string))
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.excc, _excc)
        PanelLoading.instance.openLoading()
        //傳給Server等他回應後再關閉，並更新錢包
    }
    /**
     * @param change 帶入異動的值
     */
    refreshEditBoxState(change: number) {
        let isOn = true
        for (let index = 0; index < this.arrayPointButton.length; index++) {
            let convertNumber = Number(GameData.getInstance.exChangeLib[index])
            if (isNaN(convertNumber)) {
                this.arrayPointButton[index].setState(true)
                return
            }
            if (!isNaN(convertNumber) && convertNumber > MyMath.minus(this.clinetHave, change)) isOn = false
            this.arrayPointButton[index].setState(isOn)
        }
    }
    refreshNum(change: number) {
        // if (isNaN(Number(Intl.NumberFormat().format(MyMath.minus(this.clinetHave, change))))
        this.labelClinetHaveNumber.string = Intl.NumberFormat().format(MyMath.minus(this.clinetHave, change))
        this.labelWalletHaveNumber.string = Intl.NumberFormat().format(MyMath.add(this.wallet, change))
    }

    private refreshChangeScale(num: number) {
        this.labelChangeScaleNumber.string = num.toString()
    }

    private refreshClinetHave(num: string) {
        this.labelClinetHaveNumber.string = num.toString()
    }

    private refreshWallet(num: string) {
        this.labelWalletHaveNumber.string = num.toString();
    }
    private onClearEditBoxString(e: Event, customEventData?: string) {
        this.editBoxEnterNumber.string = ""
        this.refreshNum(0)
        this.refreshEditBoxState(0)
    }

    private onEditBoxStart(e: EditBox, customEventData?: string) {
        console.log(e);
        e.placeholderLabel.string = ""
    }
    private onEditBoxEditing(e: string, customEventData?: string) {
        //判斷是否為空，空職如果不return會顯示0
        if (e == "") {
            return;
        }
        //初始coocs會設定type Number，再有小數點的時候會有問題
        if (document.getElementById("EditBoxId_1").type != "text")
            document.getElementById("EditBoxId_1").type = "text"

        //重新組合，不判斷長度，原因為如果玩家打非數字時，在轉換Intl.NumberFormat時會顯示非數值
        let getNum = Number(PublicModel.getInstance.filterNumberDot(e))
        if (getNum > this.clinetHave) getNum = this.clinetHave
        this.editBoxEnterNumber.string = Intl.NumberFormat().format(getNum)
        //暫時不知道怎抓，只能手動去看Editbox的名稱
        window.document.getElementById("EditBoxId_1").value = Intl.NumberFormat().format(getNum)
        // this.refreshEditBoxState(MyMath.minus(this.clinetHave, getNum))
        this.refreshEditBoxState(getNum)
    }

    private onEditBoxEnd(e: EditBox, customEventData?: string) {
        // console.log(e);
        e.placeholderLabel.string = this.defaultPlaceholderLabel
        let getNum = Number(PublicModel.getInstance.filterNumberDot(e.string))
        this.refreshNum(getNum)
    }



}

