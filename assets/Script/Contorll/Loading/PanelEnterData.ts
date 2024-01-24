import { Button, _decorator } from 'cc';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
import { MyEditBox } from '../../../Plug/MyEditBox';
import { LangType } from '../../Enum/LangType';
import Player from '../../Model/Player';
import PublicData from '../../Model/PublicData';
import PublicModel from '../../Model/PublicModel';
import SocketSetting from '../../Socket/SocketSetting';
import { RequestGPG } from '../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../Api/GPGAPI/ResponseGPG';
import PanelSystemMessage from '../NoClearNode/PanelSystemMessage';
const { ccclass, property } = _decorator;
@ccclass('PanelEnterData')
export default class PanelEnterData extends BaseSingletonComponent<PanelEnterData>() {
    @property(Button)
    btnSendVerification: Button;
    @property(MyEditBox)
    labelData: MyEditBox;
    isPhone: boolean = null;
    data: string;
    show() {
        super.show()
        this.data = ''
        this.labelData.string = ''
        this.btnSendVerification.interactable = true
    }
    //#region ///////登入///////////
    async onSendVerificationClient(e?: Event) {
        this.isPhone = null;
        let checkStr = this.labelData.string.replace(/ /g, '')
        if (!PublicModel.getInstance.checkPhoneRegular(checkStr.replace(/^0/, "+886")) &&
            !PublicModel.getInstance.checkEmailRegular(checkStr)) {
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t("028", LangType.Game))
            return
        }
        if (checkStr == "") {
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t("029", LangType.Game))
            return
        }
        this.requestValidateContactInfo(checkStr)
    }
    async requestValidateContactInfo(str: string) {
        const body = new RequestGPG.Body.NotNeedToken.ValidateContactInfo()
        if (PublicModel.getInstance.checkEmailRegular(str)) {
            body.Email = str
            this.data = str
        }
        else {
            body.Phone = str.replace(/ /g, '').replace(/^0/, "+886")
            this.data = body.Phone
            this.isPhone = true
        }
        console.log(body);
        this.btnSendVerification.interactable = false
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setBody(JSON.stringify(body))
            .setToken(Player.getInstance.gpgToken)
            .SwitchGetData(`${PublicData.getInstance.gpgUrlids}${RequestGPG.API.ValidateContactInfo}`, this.responseValidateContactInfo.bind(this))
    }

    async responseValidateContactInfo(response?: ResponseGPG.ValidateContactInfo.DataClass) {
        if (response.Status.Code == "0") {
            /**代表此已經綁定過不可以綁定! */
            const body = new RequestGPG.Body.NotNeedToken.SendLoginVerification()
            this.isPhone ? body.Phone = this.data : body.Email = this.data
            await new RequestGPG.Request()
                .setMethod(RequestGPG.Method.POST)
                .setBody(JSON.stringify(body))
                .SwitchGetData(`${PublicData.getInstance.gpgUrlids}${RequestGPG.API.SendLoginVerification}`, this.responseSendLoginVerification.bind(this))
        }
        else if (response.Status.Code == "1032") {
            console.log("恭喜信箱不存在，可繼續註冊");
            const body = new RequestGPG.Body.NotNeedToken.SendRegisterVerification()
            this.isPhone ? body.Phone = this.data : body.Email = this.data
            await new RequestGPG.Request()
                .setMethod(RequestGPG.Method.POST)
                .setBody(JSON.stringify(body))
                .SwitchGetData(`${PublicData.getInstance.gpgUrlids}${RequestGPG.API.SendRegisterVerification}`, this.responseSendRegisterVerification.bind(this))
        }
        else {
            this.isPhone = null
        }
    }
    responseSendLoginVerification(response: ResponseGPG.SendLoginVerification.DataClass) {
        const body = new RequestGPG.Body.NotNeedToken.GetToken()
        body.grant_type = 'mk_phone'
        this.isPhone ? body.phone = this.data : body.email = this.data
        this.isPhone ? delete body.email : delete body.phone
        this.btnSendVerification.interactable = true
        if (response.Status.Code == "0" || response.Status.Code == "1006") {
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t(response.Status.Code == "0" ? "035" : "048", LangType.Game))
            this.eventEmit('showEnterVerification', body)
            console.log("送出驗證碼囉");
        }
        else {
            PanelSystemMessage.instance.showSingleConfirm(response.Status.Message)
        }
    }
    responseSendRegisterVerification(response: ResponseGPG.SendRegisterVerification.DataClass) {
        const body = new RequestGPG.Body.NotNeedToken.GetToken()
        body.grant_type = 'mk_register'
        this.isPhone ? body.phone = this.data : body.email = this.data
        this.isPhone ? delete body.email : delete body.phone
        this.btnSendVerification.interactable = true
        if (response.Status.Code == "0" || response.Status.Code == "1006") {
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t(response.Status.Code == "0" ? "035" : "048", LangType.Game))
            this.eventEmit('showEnterVerification', body)
            console.log("送出驗證碼囉");
        }
        else {
            PanelSystemMessage.instance.showSingleConfirm(response.Status.Message)
        }
    }


    //#endregion

}

