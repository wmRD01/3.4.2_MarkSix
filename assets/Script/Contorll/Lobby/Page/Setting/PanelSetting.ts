import { Sprite, _decorator } from 'cc';
import { AssetType } from '../../../../Enum/AssetType';
import AssetMng from '../../../../Manager/AssetMng';
import BaseComponent from '../../../../Model/ComponentBase';
import ItemLink from './ItemLink';
import ItemSetting from './ItemSetting';
const { ccclass, property } = _decorator;
@ccclass('PanelSetting')
export default class PanelSetting extends BaseComponent {
    @property(ItemSetting)
    settingItem: ItemSetting[] = []

    async start() {
        await AssetMng.waitStateCheck(AssetType.Sprite);
        for (let index = 0; index < this.settingItem.length; index++) {
            this.settingItem[index].init()
        }
    }
}