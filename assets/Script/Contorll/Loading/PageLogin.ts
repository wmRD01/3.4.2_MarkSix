import { _decorator } from 'cc';
import { LangType } from '../../Enum/LangType';
import BaseComponent from '../../Model/ComponentBase';
import PublicModel from '../../Model/PublicModel';
import SocketSetting from '../../Socket/SocketSetting';
import { RequestGPG as RequestGPG } from '../Api/GPGAPI/RequestGPG';
import PanelLoading from '../NoClearNode/PanelLoading';
import PanelEnterData from './PanelEnterData';
import PanelEnterVerification from './PanelEnterVerification';
const { ccclass, property } = _decorator;


@ccclass('PanelLogin')
export default class PageLogin extends BaseComponent {

    onLoad() {
        super.onLoad()
        this.setEvent('showEnterData', this.showEnterData)
        this.setEvent('showEnterVerification', this.showEnterVerification)
    }
    async start() {
        if (PublicModel.getInstance.checkApp()) {
            PanelLoading.instance.show()
            await SocketSetting.getInstance.checkLanguage(LangType.Game)
            PanelLoading.instance.hide()
            this.showEnterData()
        }

    }
    showEnterData() {
        PanelEnterData.instance.show();
        PanelEnterVerification.instance.hide();
    }
    showEnterVerification(data: RequestGPG.Body.NotNeedToken.GetToken) {
        PanelEnterVerification.instance.show(data)
        PanelEnterData.instance.hide()
    }

}
