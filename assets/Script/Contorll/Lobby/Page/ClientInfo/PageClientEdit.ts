import { Button, EventTouch, Label, Node, Sprite, SpriteFrame, _decorator } from 'cc';
import { NotificationType } from '../../../../Enum/NotificationType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import EventMng from '../../../../Manager/EventMng';
import BaseComponent from '../../../../Model/ComponentBase';
import Player from '../../../../Model/Player';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import { MyEditBox } from '../../../../../Plug/MyEditBox';
import PublicModel from '../../../../Model/PublicModel';
import PanelLoading from '../../../NoClearNode/PanelLoading';
import ButtonMng from '../../../../Manager/ButtonMng';
import { EditMenu } from '../../../../Enum/EditMenu';
import PanelSystemMessage from '../../../NoClearNode/PanelSystemMessage';
import SocketSetting from '../../../../Socket/SocketSetting';
import { LangType } from '../../../../Enum/LangType';
import { VerificationTimer } from '../../../../Model/VerificationTimer';
import PublicData from '../../../../Model/PublicData';
const { ccclass, property } = _decorator;
@ccclass('PanelClientEdit')
export default class PanelClientEdit extends BaseComponent {
    @property(MyEditBox)
    editNicName: MyEditBox;
    @property(MyEditBox)
    editPhone: MyEditBox;
    @property(MyEditBox)
    editEmail: MyEditBox;
    @property(MyEditBox)
    editVerificationCode: MyEditBox;

    @property(Button)
    buttonVerificationCode: Button

    @property(Button)
    buttonConfirm: Button

    @property(Node)
    btnsFunction: Node
    @property(Label)
    labelVerificationCode: Label;

    onLoad() {
        EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).on(LobbyStateEvent.EditNickname, this.onEditNickname, this)
        EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).on(LobbyStateEvent.EditPhone, this.onEditPhone, this)
        EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).on(LobbyStateEvent.EditEmail, this.onEditEmail, this)
        this.editNicName.string = ""
        this.editEmail.string = ""
        this.editPhone.string = ""
        this.reset()
        super.onLoad()
    }
    onDisable() {
        this.reset()
    }
    //#region  Nickname
    /**送出修改NickName */
    private onEditNickname() {
        this.editNicName.spriteBG.node.active = true
        this.editNicName.textLabel.node.parent.active = true;
        this.btnsFunction.active = true
        ButtonMng.addEvent(this, "motifyNickName", this.buttonConfirm)
    }

    async motifyNickName() {
        if (!this.checkName(this.editNicName.string)) return;
        PanelLoading.instance.openLoading("資料更新中")
        const body = new RequestGPG.Body.NeedToken.Nickname()
        body.nickname = this.editNicName.string
        body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.Nickname)
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .setToken(Player.getInstance.gpgToken)
            .fetchData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.Nickname}`, this.responseNickname.bind(this))
    }
    /**驗證碼發送是否成功 */
    responseNickname(response: ResponseGPG.Nickname.DataClass) {
        console.log("Nickname", response)

        if (response.Status.Code == "0") {
            EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).emit(LobbyStateEvent.EditUpdate, this.editNicName.string, EditMenu.Nickname)
            ButtonMng.clearEvent(this.buttonConfirm);
            this.reset()
        }
        else {
            PanelLoading.instance.closeLoading()
            console.error("資料有問題");
        }
    }
    //#endregion
    //#region ValidateContactInfo
    /**進行發送驗證碼時，必須先通過確認手機是否被註冊過 */
    async onValidateContactInfoPhone() {
        /**確認信箱 */
        //TODO 製作手機驗證(整理好後再回頭製作)
        const body = new RequestGPG.Body.NotNeedToken.ValidateContactInfo()
        body.Phone = this.editPhone.string;
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .fetchData(`${RequestGPG.APIUrl.ids}${RequestGPG.API.ValidateContactInfo}`, this.responseValidateContactInfo.bind(this))
    }
    async onValidateContactInfoEmail() {
        /**確認信箱格式 */
        if (!this.checkEmail(this.editEmail.string)) return;
        const body = new RequestGPG.Body.NotNeedToken.ValidateContactInfo()
        body.Email = this.editEmail.string;
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .fetchData(`${RequestGPG.APIUrl.ids}${RequestGPG.API.ValidateContactInfo}`, this.responseValidateContactInfo.bind(this))
    }
    async responseValidateContactInfo(response: ResponseGPG.ValidateContactInfo.DataClass) {
        console.log("ValidateContactInfo", response)
        /**代表此已經綁定過不可以綁定! */
        if (response.Status.Code == "0") {
            console.log("已存在請重新換組");
            return;
        }
        else {

            console.log("恭喜信箱不存在，可繼續註冊");
            //*要改成手動送驗證碼
            const sendBody = new RequestGPG.Body.NotNeedToken.SendRegisterVerification()
            if (this.editEmail.string != "")
                sendBody.Email = this.editEmail.string
            if (this.editPhone.string != "")
                sendBody.Phone = this.editPhone.string
            await new RequestGPG.Request()
                .setMethod(RequestGPG.Method.POST)
                .setBody(JSON.stringify(sendBody))
                .fetchData(`${RequestGPG.APIUrl.ids}${RequestGPG.API.SendRegisterVerification}`, this.responseSendRegisterVerification.bind(this))
        }

    }
    /**驗證碼發送是否成功 */
    responseSendRegisterVerification(response: ResponseGPG.SendRegisterVerification.DataClass) {
        console.log("SendRegisterVerification", response)
        if (response.Status.Code == "0") {
            new VerificationTimer(this.labelVerificationCode, this.buttonVerificationCode, 180)
            console.log("送出驗證碼囉");
        }

    }
    //#endregion
    //#region Phone
    private onEditPhone() {
        this.editPhone.spriteBG.node.active = true
        this.editPhone.textLabel.node.parent.active = true;
        this.activeVerificationCode(true)
        this.btnsFunction.active = true
        ButtonMng.addEvent(this, "onValidateContactInfoPhone", this.buttonVerificationCode)
        ButtonMng.addEvent(this, "創立修改手機的", this.buttonConfirm)
    }
    //TODO 修改手機的方法
    //#endregion
    //#region Email

    private onEditEmail() {
        this.editEmail.spriteBG.node.active = true
        this.editEmail.textLabel.node.parent.active = true;
        this.activeVerificationCode(true)
        this.btnsFunction.active = true
        ButtonMng.addEvent(this, "onValidateContactInfoEmail", this.buttonVerificationCode)
        ButtonMng.addEvent(this, "certifiedEmall", this.buttonConfirm)


    }
    /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */
    async certifiedEmall() {
        if (!this.checkVerification(this.editVerificationCode.string)) return;
        if (!this.checkEmail(this.editEmail.string)) return;
        /**確認信箱格式 */
        const body = new RequestGPG.Body.NeedToken.CertifiedEmail()
        body.email = this.editEmail.string
        body.verifyCode = this.editVerificationCode.string
        body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.CertifiedEmail)
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setToken(Player.getInstance.gpgToken)
            .setBody(JSON.stringify(body))
            .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.CertifiedEmall}`, this.responseCertifiedEmall.bind(this))
    }

    /**是否修改信箱成功 */
    responseCertifiedEmall(response: ResponseGPG.CertifiedEmall.DataClass) {
        console.log("CertifiedEmall", response)
        if (response.Status.Code == "0") {
            console.log("過關惹");
            EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).emit(LobbyStateEvent.EditUpdate, this.editEmail.string, EditMenu.Email)
            ButtonMng.clearEvent(this.buttonConfirm);
            this.reset()
        }
        else {
            //TODO顯示錯誤訊息
            PanelSystemMessage.instance.messageInit(SocketSetting.t(response.Status.Code, LangType.ServerAPI))
            PanelSystemMessage.instance.showSingleConfirm()
            PanelLoading.instance.closeLoading()
        }
    }
    //#endregion
    private activeVerificationCode(bool: boolean) {
        this.editVerificationCode.spriteBG.node.active = bool
        this.editVerificationCode.textLabel.node.parent.active = bool;
        this.buttonVerificationCode.node.active = bool

        // if (!bool)
        // this.btnsFunction.position = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.btnsFunction, this.editEmail.spriteBG.node)
    }
    private reset() {
        this.editNicName.spriteBG.node.active = false
        this.editNicName.textLabel.node.parent.active = false;
        this.editEmail.spriteBG.node.active = false
        this.editEmail.textLabel.node.parent.active = false;
        this.editPhone.spriteBG.node.active = false
        this.editPhone.textLabel.node.parent.active = false;
        this.activeVerificationCode(false)
        this.btnsFunction.active = false;
        this.buttonVerificationCode.node.active = false;
        this.editEmail.string = "";
        this.editNicName.string = "";
        this.editNicName.string = "";
        this.editVerificationCode.string = "";
    }
    /**確認信箱格式 */
    checkEmailRegular(_string: string) {
        //please input the test email to see is valid
        var strEmail = _string;

        //Regular expression Testing
        var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

        //validate ok or not
        if (strEmail.search(emailRule) != -1) {
            return true
        } else {
            return false
        }
    }
    checkName(str: string) {
        if (str.length == 0) {
            console.error("請輸入文字");
            return false;
        }
        if (/\s/.test(str)) {
            console.error("文字有空白");
            return false;
        }
        if (PublicModel.getInstance.checkNicknameCondition(str)) {
            console.error("出現非法文字");
            return false;
        }
        if (str.length < 2 || str.length > 16) {
            console.error("長度須為2~16");
            return false;;
        }
        return true
    }
    /**
     * 
     * @param str 信箱
     */
    checkEmail(str: string) {
        if (str.length == 0) {
            console.error("請輸入文字");
            return false;
        }
        if (/\s/.test(str)) {
            console.error("文字有空白");
            return false;
        }
        if (!this.checkEmailRegular(str)) {
            console.error("出現非法文字");
            return false;
        }
        return true
    }
    /**
     * @param verification 驗證碼  
     */
    checkVerification(str: string) {
        if (str.length == 0) {
            console.error("請輸入數字");
            return false;
        }
        if (/\s/.test(str)) {
            console.error("文字有空白");
            return false;
        }
        if (str.length != 6) {
            console.error("驗證碼最少六碼");
            return false;
        }
        return true
    }
}


