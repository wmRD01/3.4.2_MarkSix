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
import CreateFileSprite from '../../../../Model/CreateFileSprite';

import PanelLoading from '../../../NoClearNode/PanelLoading';
const { ccclass, property } = _decorator;
@ccclass('PageClientEdit')
export default class PageClientEdit extends BaseComponent {
    @property(MyEditBox)
    editNicName: MyEditBox;
    @property(MyEditBox)
    editEmail: MyEditBox;
    @property(MyEditBox)
    editVerificationCode: MyEditBox;
    @property(Node)
    NodeEmail: Node
    @property(Node)
    NodeVerificationCode: Node

    @property(Button)
    btnVerificationCode: Button

    @property(Node)
    btnsFunction: Node
    @property(Sprite)
    spritePlayer: Sprite
    isChangePicture: boolean = false
    isCheckCertifiedEmall: boolean = false;
    isCheckNicename: boolean = false;
    isCheckuploadAvatar: boolean = false;
    imageFile: File = null

    onLoad() {
        super.onLoad()
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).on(LobbyStateEvent.ActivePanelClientEdit, this.activePanel, this)
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).on(LobbyStateEvent.ChangePlayerPicture, this.onChangePlayerPicture, this)
        this.hide()

    }

    onEnable() {
        this.editEmail.string = "";
        this.editNicName.string = "";
        this.editVerificationCode.string = "";
        // this.onValidateContactInfo()
        this.isChangePicture = false;
        this.isCheckCertifiedEmall = false;
        this.isCheckNicename = false;
        this.isCheckuploadAvatar = false;
        this.imageFile = null;
        if (Player.getInstance.gpgInfo.data.email == "" || Player.getInstance.gpgInfo.data.email == null || Player.getInstance.gpgInfo.data.email == undefined)
            this.activeVerificationCode(true)
        else
            this.activeVerificationCode(false)
        return

    }

    /**送出修改NickName */
    async motifyNickName() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.Nickname()
            body.nickname = this.editNicName.string
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.Nickname)
            console.log(body);
            await new RequestGPG.Request()
                .setMethod(RequestGPG.Method.POST)
                .setBody(JSON.stringify(body))
                .setToken(Player.getInstance.gpgToken)
                .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.Nickname}`, this.responseNickname.bind(this))

            resolve()
        })
    }
    /**驗證碼發送是否成功 */
    responseNickname(response: ResponseGPG.Nickname.DataClass) {
        console.log("Nickname", response)
        if (response.Status.Code == "0") {
            console.log("過關惹");
            this.isCheckNicename = true;
        }
    }

    /**進行發送驗證碼時，必須先通過確認手機是否被註冊過 */
    async onValidateContactInfo() {
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
            sendBody.Email = this.editEmail.string
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
            console.log("送出驗證碼囉");

        }
    }
    /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */
    async certifiedEmall() {
        /**確認信箱格式 */
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.CertifiedEmail()
            body.email = this.editEmail.string
            body.verifyCode = this.editVerificationCode.string
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.CertifiedEmail)
            await new RequestGPG.Request()
                .setMethod(RequestGPG.Method.POST)
                .setToken(Player.getInstance.gpgToken)
                .setBody(JSON.stringify(body))
                .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.CertifiedEmall}`, this.responseCertifiedEmall.bind(this))
            resolve()
        })

    }

    /**是否修改信箱成功 */
    responseCertifiedEmall(response: ResponseGPG.CertifiedEmall.DataClass) {
        console.log("CertifiedEmall", response)
        if (response.Status.Code == "0") {
            console.log("過關惹");
            this.isCheckCertifiedEmall = true;
        }
    }
    async uploadAvatar() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.UploadAvatar()
            body.File = this.imageFile
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.UploadAvatar)
            await new RequestGPG.Request()
                .setMethod(RequestGPG.Method.POST)
                .setBody(JSON.stringify(body))
                .setToken(Player.getInstance.gpgToken)
                .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.UploadAvatar}`, this.responseUploadAvatar.bind(this))
            resolve()
        })
    }
    responseUploadAvatar(response: ResponseGPG.UploadAvatar.DataClass) {
        console.log(response);

    }

    async onCheckMotify() {
        if (!this.checkName(this.editNicName.string)) return;
        if (!this.checkEmail(this.editEmail.string)) return;
        if (!this.checkVerification(this.editVerificationCode.string)) return;
        PanelLoading.instance.openLoading("資料更新中")
        this.isCheckNicename = false;
        this.isCheckCertifiedEmall = false;
        await this.certifiedEmall();
        if (!this.isCheckCertifiedEmall) return
        await this.motifyNickName();
        if (!this.isCheckNicename) return
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.UpDatePlayer)
        if (this.isChangePicture)
            EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.ChangePlayerPicture, this.spritePlayer.spriteFrame)
        this.onActivePanel(null)
        return
    }
    activePanel(bool: boolean) {
        bool ? this.show() : this.hide()
    }
    onSelectPhoto() {
        new CreateFileSprite(this.onChangePlayerPicture.bind(this))
    }
    onChangePlayerPicture(_spriteFrame: SpriteFrame, file: File) {
        this.spritePlayer.spriteFrame = _spriteFrame
        this.isChangePicture = true;
        this.imageFile = file

        this.uploadAvatar()
    }
    onActivePanel(e: EventTouch, customEventData?: string) {
        this.hide()
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.ActivePanelClientInfo, true)
    }
    activeVerificationCode(bool: boolean) {
        console.log(bool);

        this.editVerificationCode.spriteBG.node.active = bool
        this.editEmail.spriteBG.node.active = bool
        this.NodeEmail.active = bool
        this.NodeVerificationCode.active = bool
        this.btnVerificationCode.node.active = bool
        if (!bool)
            this.btnsFunction.position = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.btnsFunction, this.editEmail.spriteBG.node)
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
        if (!PublicModel.getInstance.checkNicknameCondition(str)) {
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
