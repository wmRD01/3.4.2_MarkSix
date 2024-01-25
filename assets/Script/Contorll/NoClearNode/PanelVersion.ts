import { find, Label, _decorator } from 'cc';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
import PublicData from '../../Model/PublicData';
const { ccclass, property } = _decorator;
@ccclass('PanelVersion')
export default class PanelVersion extends BaseSingletonComponent<PanelVersion>() {
    labelVersion: Label;
    onLoad() {
        super.onLoad()
        this.labelVersion = find("LabelVersion", this.node).getComponent(Label)
        if (window.isEditor || window.isBuildSelf)
            this.labelVersion.string = "beta_" + PublicData.getInstance.gameVersion;
        else
            this.labelVersion.string = PublicData.getInstance.onlineVersion;

    }
}