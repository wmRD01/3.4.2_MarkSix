import { Label, sys, _decorator } from 'cc';
import BaseComponent from '../../Model/ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('PanelSystem')
export default class PanelSystem extends BaseComponent {
    @property(Label)
    platform: Label
    @property(Label)
    os: Label
    start() {
        this.os.string = `系統：${sys.os}`
        this.platform.string = `平台：${sys.platform}`
    }
}