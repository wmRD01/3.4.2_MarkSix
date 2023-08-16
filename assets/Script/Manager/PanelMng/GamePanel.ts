import { _decorator } from 'cc';
import BaseComponent from '../../Model/ComponentBase';

import { PanelMng } from './PanelMng';
const { ccclass, property } = _decorator;
@ccclass('GamePanel')
export default class GamePanel extends PanelMng {
    settingValue() {
        this.mapPanel.forEach((value: BaseComponent, key, string) => {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                this[key] = this.mapPanel.get(key)
            }
        });
        // console.log(this);
    }
}