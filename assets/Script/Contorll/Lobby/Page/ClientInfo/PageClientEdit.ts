import { Button, EventTouch, Label, Node, Sprite, SpriteFrame, _decorator } from 'cc';
import { NotificationType } from '../../../../Enum/NotificationType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import EventMng from '../../../../Manager/EventMng';
import BaseComponent from '../../../../Model/ComponentBase';
import Player from '../../../../Model/Player';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import CryptoES from 'crypto-es';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import { MyEditBox } from '../../../../../Plug/MyEditBox';
import PublicModel from '../../../../Model/PublicModel';
import CreateFileSprite from '../../../../Model/CreateFileSprite';
import PublicData from '../../../../Model/PublicData';
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

    onLoad() {
        super.onLoad()
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).on(LobbyStateEvent.ActivePanelClientEdit, this.activePanel, this)
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).on(LobbyStateEvent.ChangePlayerPicture, this.onChangePlayerPicture, this)
        this.hide()
    }
    start() {
        this.editEmail.string = ""
        this.editNicName.string = ""
        this.editVerificationCode.string = ""
    }
    onEnable() {
        // this.onValidateContactInfo()
        this.isChangePicture = false
        return
        if (Player.getInstance.gpgInfo.data.email != "" || Player.getInstance.gpgInfo.data.email != null || Player.getInstance.gpgInfo.data.email != undefined)
            this.activeVerificationCode(false)
        else
            this.activeVerificationCode(true)

    }

    activePanel(bool: boolean) {
        bool ? this.show() : this.hide()
    }
    async onTestNickName() {
        const body = new RequestGPG.Body.NeedToken.Nickname()
        body.nickname = "我修改拉"
        body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.Nickname)
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .setToken(Player.getInstance.gpgToken)
            .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.Nickname}`, this.responseSendLoginVerification.bind(this))
    }
    responetest(response) {
        console.log(response);

    }
    onSelectPhoto() {
        new CreateFileSprite(this.onChangePlayerPicture.bind(this))
    }

    onActivePanel(e: EventTouch, customEventData?: string) {
        this.hide()
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.ActivePanelClientInfo, true)
    }
    activeVerificationCode(bool: boolean) {
        this.editVerificationCode.spriteBG.node.active = bool
        this.editEmail.spriteBG.node.active = bool
        this.NodeEmail.active = bool
        this.NodeVerificationCode.active = bool
        this.btnVerificationCode.node.active = bool
        if (!bool)
            this.btnsFunction.position = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.btnsFunction, this.editEmail.spriteBG.node)
    }
    onChangePlayerPicture(_spriteFrame: SpriteFrame) {
        this.spritePlayer.spriteFrame = _spriteFrame
        this.isChangePicture = true;
    }
    /**ClientEdit */

    /**進行發送驗證碼時，必須先通過確認手機是否被註冊過，確認沒有驗證過就會SendLog */
    async onValidateContactInfo() {
        /**確認是否有需要驗證戲箱 */
        if (this.editEmail.string == "") {
            console.error("信箱不可空白");
            return
        }
        if (!this.checkEmailRegular(this.editEmail.string)) {
            console.error("信箱格式不正確");
            return
        }
        /** */
        const body = new RequestGPG.Body.NotNeedToken.ValidateContactInfo()
        body.Email = this.editEmail.string;

        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .fetchData(`${RequestGPG.APIUrl.ids}${RequestGPG.API.ValidateContactInfo}`, this.responseValidateContactInfo.bind(this))

    }
    /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */
    async onCertification() {
        const body = new RequestGPG.Body.NeedToken.CertifiedEmail()
        body.email = this.editEmail.string
        body.verifyCode = this.editVerificationCode.string
        body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.CertifiedEmail)
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setToken(Player.getInstance.gpgToken)
            .setBody(JSON.stringify(body))
            .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.ValidateContactInfo}`, this.responseSendLoginVerification.bind(this))

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
                .fetchData(`${RequestGPG.APIUrl.ids}${RequestGPG.API.SendRegisterVerification}`, this.responseSendLoginVerification.bind(this))
        }

    }

    /**驗證碼發送是否成功 */
    responseSendLoginVerification(response: ResponseGPG.SendRegisterVerification.DataClass) {
        console.log("SendRegisterVerification", response)
        if (response.Status.Code == "0") {
            console.log("過關惹");

        }
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
    onCheckMotify() {
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.UpDataPlayer)
        this.onActivePanel(null)
        return
        if (this.editNicName.string == Player.getInstance.nickname) {
            console.error("會員資料與之前相同");
            return
        }

        /**確認是否有需要驗證戲箱 */
        if (this.NodeEmail.active) {
            if (!this.checkEmailRegular(this.editEmail.string)) {
                console.error("信箱格式不正確]");
                return
            }
            this.onValidateContactInfo();
        }


        if (this.isChangePicture)
            EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.ChangePlayerPicture, this.spritePlayer.spriteFrame)
    }

    /**排序物件順序並且queryString */

}
