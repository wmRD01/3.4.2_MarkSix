import { instantiate, Node, Prefab, Vec3, _decorator } from 'cc';
import DelayTime from '../../../../../Plug/DelayTime';
import BaseComponent from '../../../../Model/ComponentBase';
import PointItemData from '../../../../Model/PointItemData';
const { ccclass, property } = _decorator;
@ccclass('PanelPoint')
export default class PanelPoint extends BaseComponent {
    @property(Prefab)
    item: Prefab
    @property(Node)
    layoutContent: Node;


    start() {
        this.layoutContent.removeAllChildren()
        for (let index = 0; index < 3; index++) {
            this.onClientData(123)

        }
    }
    onClientData(data) {
        let _node = instantiate(this.item)
        let _class = _node.getComponent(PointItemData)
        _node.setPosition(Vec3.ZERO)
        this.layoutContent.addChild(_node)
        _class.init(123)

    }
}