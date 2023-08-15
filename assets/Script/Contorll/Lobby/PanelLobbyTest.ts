import { Node, _decorator } from 'cc';
import { DEV } from 'cc/env';
import BaseComponent from '../../Model/ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('PanelLobbyTest')
export default class PanelLobbyTest extends BaseComponent {
    @property(Node)
    resetBall: Node;
    onLoad() {
        // this.resetBall.active = DEV;
    }
}