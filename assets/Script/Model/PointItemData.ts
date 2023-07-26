import { instantiate, Label, Node, Prefab, _decorator } from 'cc';
import BallData from './BallData';
import BaseComponent from './ComponentBase';
import AutoFollow from './AutoFollow';
import PublicModel from './PublicModel';
const { ccclass, property } = _decorator;
@ccclass('PointItemData')
export default class PointItemData extends BaseComponent {
    @property(Prefab)
    prefabBallItem: Prefab;
    @property(Label)
    labelMyChooeseNumber: Label;
    @property(Label)
    labelOpenNumberTitle: Label;
    @property(Label)
    labelPoint: Label;
    @property(Label)
    labelOpenNumber: Label[] = []
    maxNumberCount: number = 6
    @property(Label)
    labelDayData: Label;
    @property(Node)
    clientPointLayout: Node
    labelContent: Node
    outlineContent: Node;

    onLoad() {
        this.clientPointLayout.removeAllChildren()
    }
    setLabelContent(_node: Node) {
        this.labelContent = _node
        return this;
    }
    setOutlineContent(_node: Node) {
        this.outlineContent = _node
        return this;
    }
    /**
     * 
     * @param day 日期 
     * @param issueID 期號
     */
    setDayData(day: string, issueID: number) {
        this.labelDayData.string = `${PublicModel.getInstance.convertDateDay(day)} 第${issueID.toString()}期`
        this.labelDayData.addComponent(AutoFollow).createNewTarget()
        this.labelContent.addChild(this.labelDayData.node)
        return this
    }
    setOpenNumber(numbers: string[]) {
        for (let index = 0; index < numbers.length; index++) {
            if (index == this.maxNumberCount) break;
            let _node = instantiate(this.prefabBallItem)
            this.clientPointLayout.addChild(_node)
            let _class = _node.getComponent(BallData)
            _class.init(this.randomBall())
            this.labelContent.addChild(_class.label.node)
            this.labelOpenNumber[index].string = numbers[index]
            this.labelOpenNumber[index].node.addComponent(AutoFollow).setTarget(this.labelOpenNumber[index].node.parent)
            this.labelContent.addChild(this.labelOpenNumber[index].node)
        }
        return this
    }
    init() {
        this.labelOpenNumberTitle.addComponent(AutoFollow).createNewTarget()
        this.labelContent.addChild(this.labelOpenNumberTitle.node)
        this.labelMyChooeseNumber.addComponent(AutoFollow).createNewTarget()
        this.outlineContent.addChild(this.labelMyChooeseNumber.node)
        this.labelPoint.string = `+ ${Math.floor(Math.random() * 200)}`
        this.labelPoint.addComponent(AutoFollow).createNewTarget()
        this.labelContent.addChild(this.labelPoint.node)
        return this
    }
    /**測試用 */
    randomBall() {
        return 1 + (Math.floor(Math.random() * 49))
    }
}