import { director, _decorator } from 'cc';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
import { MyEditBox } from '../../../Plug/MyEditBox';
import { GameSceneName } from '../../Enum/GameSenceName';
import { LangType } from '../../Enum/LangType';
import LanguageManager from '../../Manager/LanguageManager';
import Player from '../../Model/Player';
import PublicData from '../../Model/PublicData';
import PublicModel from '../../Model/PublicModel';
import { RequestGPG } from '../Api/GPGAPI/RequestGPG';
import { OpenidConfiguration, ResponseGPG } from '../Api/GPGAPI/ResponseGPG';
import PanelLoading from '../NoClearNode/PanelLoading';
import PanelSystemMessage from '../NoClearNode/PanelSystemMessage';
const { ccclass, property } = _decorator;
@ccclass('PanelEnterVerification')
export default class PanelEnterVerification extends BaseSingletonComponent<PanelEnterVerification>() {
    data: RequestGPG.Body.NotNeedToken.GetToken
    @property(MyEditBox)
    labelVerification: MyEditBox;
    pulicToken: string;
    url: string
    show(_data: RequestGPG.Body.NotNeedToken.GetToken) {
        this.data = _data
        this.labelVerification.string = ''
        // console.error("歐齁齁你拿到資料喔", _data);
        super.show()
    }

    onLogIn(e?: Event) {
        if (this.labelVerification.string.replace(/ /g, '').length == 0 || this.labelVerification.string.replace(/ /g, '').length < 6) {
            PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("033", LangType.Game))
            return
        }
        this.requestLogIn();
    }
    async requestLogIn() {
        this.data.client_secret = PublicData.getInstance.gpgSecret
        this.data.verifycode = this.labelVerification.string
        await this.requestUrl()
        await new RequestGPG.Request(PublicModel.getInstance.checkApp())
            .setMethod(RequestGPG.Method.POST)
            .setContentType(RequestGPG.ContentType.Form)
            .setBody(PublicModel.getInstance.convertObjectToWebParams(this.data))
            .SwitchGetData(this.url, this.responseLogIn.bind(this))
    }
    responseLogIn(response: ResponseGPG.GetToken.DataClass) {
        if (response.error_description) {
            PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("000", LangType.Game))
        }
        else {
            Player.getInstance.gpgToken = response?.access_token
            PanelLoading.instance.openLoading()
            director.preloadScene(GameSceneName.Lobby, () => {
                director.loadScene(GameSceneName.Lobby)
            })
        }
    }
    onBackEnterDate() {
        this.eventEmit('showEnterData')
    }

    async requestUrl() {
        await new RequestGPG.Request(PublicModel.getInstance.checkApp())
            .SwitchGetData(`${PublicData.getInstance.gpgUrlids}/.well-known/openid-configuration`, this.responseUrl.bind(this))
    }
    responseUrl(response: OpenidConfiguration) {
        console.error(response);
        console.log(this);
        this.url = response.token_endpoint
    }
}
