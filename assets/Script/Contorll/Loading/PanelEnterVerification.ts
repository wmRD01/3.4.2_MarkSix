import { director, _decorator } from 'cc';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
import { MyEditBox } from '../../../Plug/MyEditBox';
import { GameSceneName } from '../../Enum/GameSenceName';
import { LangType } from '../../Enum/LangType';
import Player from '../../Model/Player';
import PublicData from '../../Model/PublicData';
import PublicModel from '../../Model/PublicModel';
import SocketSetting from '../../Socket/SocketSetting';
import { RequestGPG } from '../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../Api/GPGAPI/ResponseGPG';
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
        if (this.labelVerification.string.replace(/ /g, '').length == 0) {
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t("033", LangType.Game))
            return
        }
        this.requestLogIn();
    }
    async requestLogIn() {
        this.data.client_secret = PublicData.getInstance.gpgSecret
        this.data.verifycode = this.labelVerification.string
        await this.requestUrl()
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .setContentType(RequestGPG.ContentType.Form)
            .setBody(PublicModel.getInstance.convertObjectToWebParams(this.data))
            .SwitchGetData(this.url, this.responseLogIn.bind(this))
    }
    responseLogIn(response: ResponseGPG.GetToken.DataClass) {
        try {
            Player.getInstance.gpgToken = response.access_token
            PanelLoading.instance.openLoading()
            director.preloadScene(GameSceneName.Lobby, () => {
                director.loadScene(GameSceneName.Lobby)
            })
        } catch (error) {
            PanelSystemMessage.instance.showSingleConfirm('驗證碼可能過期，請再重新傳送')
        }
    }
    onBackEnterDate() {
        this.eventEmit('showEnterData')
    }

    async requestUrl() {
        await new RequestGPG.Request()
            .SwitchGetData(`${PublicData.getInstance.gpgUrlids}/.well-known/openid-configuration`, this.responseUrl.bind(this))
    }
    responseUrl(response) {
        // console.error(response.token_endpoint);
        this.url = response.token_endpoint
    }
}
