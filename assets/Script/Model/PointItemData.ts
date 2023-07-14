import { instantiate, Label, Node, Prefab, _decorator } from 'cc';
import BallData from './BallData';
import BaseComponent from './ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('PointItemData')
export default class PointItemData extends BaseComponent {
    @property(Prefab)
    prefabBallItem: Prefab;
    @property(Label)
    labelPoint: Label;
    @property(Label)
    labelOpenNumber: Label[] = []
    @property(Node)
    clientPointLayout: Node
    @property(Label)
    labelDayData: Label;
    @property(Node)
    labelContent: Node
    onLoad() {
        this.clientPointLayout.removeAllChildren()
    }
    init(data) {
        this.labelDayData.string = `112/4/9(一) 第123456789期`
        this.labelPoint.string = `+ ${Math.floor(Math.random() * 200)}`

        for (let index = 0; index < this.labelOpenNumber.length; index++) {
            let _node = instantiate(this.prefabBallItem)
            this.clientPointLayout.addChild(_node)
            let _class = _node.getComponent(BallData)
            _class.init(this.randomBall())
            this.labelContent.addChild(_class.label.node)
            this.labelOpenNumber[index].string = this.randomBall().toString()
        }
    }
    /**測試用 */
    randomBall() {
        return 1 + (Math.floor(Math.random() * 49))
    }
}