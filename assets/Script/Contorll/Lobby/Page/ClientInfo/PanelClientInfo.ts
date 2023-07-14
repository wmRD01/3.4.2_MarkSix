import { assetManager, ImageAsset, Label, Sprite, SpriteFrame, sys, _decorator } from 'cc';
import BaseComponent from '../../../../Model/ComponentBase';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
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
    start() {
        this.isData = false;
        this.isLoading = false;
        console.log(sys.browserType, sys.os);

    } async onEnable() {
        if (this.isData || this.isLoading) return;
        this.isLoading = true

        await new RequestGPG.Request()
            .setToken("Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODkxMjkzNjEsImV4cCI6MTY5MTcyMTM2MSwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY4OTEyOTM2MSwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiI3RkNCM0QzQ0NDOUE3MjRGOUQ5M0YwNDZDMjNGODA1NCIsImlhdCI6MTY4OTEyOTM2MSwic2NvcGUiOlsibWVtYmVyLmluZm8udXNlciJdLCJhbXIiOlsibWtfcGhvbmUiXX0.agzZ_DHtp_dQQKfa1fRhJRwQAh8NnLk98jmqspD8RrnRq5TNqE-dTaf-53d61BraahHl2IO6qwPRk7wJr_RP6nuWYcoiVj4k3WGYG1qnpjuYA5vlq1Iyq2pPIr4eNq2pRV9mJAdKzsMVi1zVi5s7tz38sjpr470xa4QL4zXLluGIg-562pqnSAOtKiPQhCoCAzPSixI16BM3Ite90kw3a3gTcP_m7jA-ELfZxwS-pTHHSqQzhBTqCeMQk9uC3Rcuook_SseYN7cJoYOi_oc0wnNoMhalyLMbdhZKcktAMJ6ExuN0fj_RIxvAJT4lJrQictihPBE43qe7djkWV9uRUQ")
            .fetchData("https://play-api.ceis.tw/Member/MyInfo?sign=47b436c2cad162edc9a8035afc3c673f", this.responseMyInfo.bind(this))
        this.onValidateContactInfo()
        this.isLoading = false
    }
    onDisable() {

    }
    /**進行發送驗證碼時，必須先通過確認手機是否被註冊過，確認沒有驗證過就會SendLog */
    async onValidateContactInfo() {
        /** */
        let body = new RequestGPG.Body.ValidateContactInfo()
        body.Email = "wm.rd01@gmail.com"
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .fetchData("https://ids.ceis.tw/Token/ValidateContactInfo", this.responseValidateContactInfo.bind(this))

    }
    /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */
    async onCertification() {
        const body = new RequestGPG.Body.Certification()
        body.Email = "wm.rd01@gmail.com"
        body.VerifyCode = "123124"
        body.sign = "47b436c2cad162edc9a8035afc3c673f"
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .fetchData("https://ids.ceis.tw/Member/Certification", this.responseSendLoginVerification.bind(this))
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
            const sendBody = new RequestGPG.Body.SendLoginVerification()
            sendBody.Email = "wm.rd01@gmail.com"
            await new RequestGPG.Request()
                .setMethod(RequestGPG.Method.POST)
                .setBody(JSON.stringify(sendBody))
                .fetchData("https://ids.ceis.tw/Token/SendLoginVerification", this.responseSendLoginVerification.bind(this))
        }

    }
    async responseMyInfo(response: ResponseGPG.MyInfo.DataClass) {
        console.log("MyInfo", response)
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
        console.log("SendLoginVerification", response)
        if (response.Status.Code == "0") {
            console.log("過關惹");

        }
    }
}