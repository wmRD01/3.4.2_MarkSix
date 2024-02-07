import { _decorator } from 'cc';
import BaseComponent from '../../Model/ComponentBase';
import PublicModel from '../../Model/PublicModel';
import { RequestGPG as RequestGPG } from '../Api/GPGAPI/RequestGPG';
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
    start() {
        PanelEnterData.instance.hide();
        PanelEnterVerification.instance.hide();
        if (PublicModel.getInstance.checkApp()) {
            this.showEnterData()
        }

    }
    callback(e) {
        console.error(e);

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
