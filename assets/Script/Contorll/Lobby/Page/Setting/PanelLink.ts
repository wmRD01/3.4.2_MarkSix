import { _decorator } from 'cc';
import BaseComponent from '../../../../Model/ComponentBase';
import ItemLink from './ItemLink';
const { ccclass, property } = _decorator;
@ccclass('PanelLink')
export default class PanelLink extends BaseComponent {
    @property(ItemLink)
    linkItem: ItemLink[] = []
    start() {
        for (let index = 0; index < this.linkItem.length; index++) {
            this.linkItem[index].init()
        }
    }
}