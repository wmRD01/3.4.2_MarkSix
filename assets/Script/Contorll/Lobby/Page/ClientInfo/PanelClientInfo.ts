import { assetManager, ImageAsset, Label, Sprite, SpriteFrame, sys, _decorator } from 'cc';
import BaseComponent from '../../../../Model/ComponentBase';
import Player from '../../../../Model/Player';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import CryptoES from 'crypto-es';
const { ccclass, property } = _decorator;
@ccclass('PanelClientInfo')
export default class PanelClientInfo extends BaseComponent {
    isData: boolean = false;
    isLoading: boolean = false;
    @property(Sprite)
    spritePlayer: Sprite;
    @property(Label)
    labelPlayerName: Label
    @property(Label)
    labelNickName: Label
    @property(Label)
    tempText: Label;

    start() {

        this.isData = false;
        this.isLoading = false;

        // console.log(sys.browserType, sys.os);
        // console.log(md5("12315235"));

    } async onEnable() {
        if (this.isData || this.isLoading) return;
        this.isLoading = true

        await new RequestGPG.Request()
            .setToken(Player.getInstance.gpgToken)
            .fetchData("https://play-api.ceis.tw/Member/MyInfo?sign=47b436c2cad162edc9a8035afc3c673f", this.responseMyInfo.bind(this))
        this.onValidateContactInfo()
        this.isLoading = false
    }
    onDisable() {

    }
    /**進行發送驗證碼時，必須先通過確認手機是否被註冊過，確認沒有驗證過就會SendLog */
    async onValidateContactInfo() {
        /** */
        let body = new RequestGPG.Body.NotNeedToken.ValidateContactInfo()
        body.Email = "wm.rd01@gmail.com"
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .fetchData("https://ids.ceis.tw/Token/ValidateContactInfo", this.responseValidateContactInfo.bind(this))

    }
    /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */
    async onCertification() {
        const body = new RequestGPG.Body.NeedToken.CertifiedEmail()
        body.email = "wm.rd01@gmail.com"
        body.verifyCode = this.tempText.string
        // 合併 data 和 apiKey
        const _temp = new RequestGPG.Body.NeedToken.temp()
        _temp.email = "wm.rd01@gmail.com"
        _temp.verifyCode = this.tempText.string
        const dataWithApiKey = new URLSearchParams(_temp).toString() + "5gh394D";
        console.log(dataWithApiKey);
        console.log(CryptoES.MD5(dataWithApiKey).toString());
        body.sign = CryptoES.MD5(dataWithApiKey).toString()
        console.log(body);

        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setToken(Player.getInstance.gpgToken)
            .setBody(JSON.stringify(body))
            .fetchData("https://play-api.ceis.tw/Member/CertifiedEmail", this.responseSendLoginVerification.bind(this))

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
            const sendBody = new RequestGPG.Body.NotNeedToken.SendLoginVerification()
            sendBody.Email = "wm.rd01@gmail.com"
            await new RequestGPG.Request()
                .setMethod(RequestGPG.Method.POST)
                .setBody(JSON.stringify(sendBody))
                .fetchData("https://ids.ceis.tw/Token/SendRegisterVerification", this.responseSendLoginVerification.bind(this))
        }

    }
    async responseMyInfo(response: ResponseGPG.MyInfo.DataClass) {
        console.log("MyInfo", response)
        Player.getInstance.gppInfo = response;
        // response.data.photo
        assetManager.loadRemote("https://img.ceis.tw/Member/Avatar/2.jpg", (err, image: ImageAsset) => {
            if (err) {
                console.error(err.message);
                return
            }
            this.spritePlayer.spriteFrame = SpriteFrame.createWithImage(image)
            // this.labelNickName.string= response.data.nickName
            // this.labelPlayerName.string= response.data.
            this.isData = true;
        })

    }
    /**驗證碼發送是否成功 */
    responseSendLoginVerification(response: ResponseGPG.SendLoginVerification.DataClass) {
        console.log("SendRegisterVerification", response)
        if (response.Status.Code == "0") {
            console.log("過關惹");

        }
    }

}

