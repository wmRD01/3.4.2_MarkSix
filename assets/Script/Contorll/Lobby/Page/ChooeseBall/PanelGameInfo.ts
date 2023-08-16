import { _decorator } from 'cc';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import BaseComponent from '../../../../Model/ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('PanelGameInfo')
export default class PanelGameInfo extends BaseComponent {
    onLoad() {
        // this.setEvent(LobbyStateEvent.UpDateBall, this.hide)
    }
    onDisable() {
        this.hide()
    }
}