import { instantiate, Label, Node, Prefab, _decorator } from 'cc';
import BallData from './BallData';
import BaseComponent from './ComponentBase';
import AutoFollow from './AutoFollow';
import PublicModel from './PublicModel';
const { ccclass, property } = _decorator;
//TODO 缺乏優化DrawCode
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
    maxNumberCount: number = 6
    @property(Label)
    labelDayData: Label;
    @property(Node)
    openDrawCodeLayout: Node
    @property(Node)
    clientPointLayout: Node
    @property(Node)
    specialBallItem: Node
    labelContent: Node
    outlineContent: Node;

    onLoad() {
        this.clientPointLayout.removeAllChildren();
        this.openDrawCodeLayout.removeAllChildren();
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
            let _node: Node;
            if (index == this.maxNumberCount) _node = this.specialBallItem;
            else {

                _node = instantiate(this.prefabBallItem)
                this.openDrawCodeLayout.addChild(_node)
            }
            let _class = _node.getComponent(BallData)
            _class.init(Number(numbers[index]))
            this.labelContent.addChild(_class.label.node)

            // _class.label.updateRenderData(true)
            _class.setLabelScale(this.openDrawCodeLayout.getScale().x)
        }
        return this
    }
    setSelfNumber(numbers: number[]) {
        if (this.clientPointLayout.children.length >= this.maxNumberCount) return;
        for (let index = 0; index < numbers.length; index++) {
            let _node = instantiate(this.prefabBallItem)
            this.clientPointLayout.addChild(_node)
            let _class = _node.getComponent(BallData)
            _class.init(numbers[index])
            this.labelContent.addChild(_class.label.node)

        }
    }
    setScore(num: number) {
        this.labelPoint.string = `+${num.toString()}`;
    }
    init() {
        this.labelOpenNumberTitle.addComponent(AutoFollow).createNewTarget()
        this.labelContent.addChild(this.labelOpenNumberTitle.node)
        this.labelMyChooeseNumber.addComponent(AutoFollow).createNewTarget()
        this.outlineContent.addChild(this.labelMyChooeseNumber.node)
        this.labelPoint.string = "+0"
        this.labelPoint.addComponent(AutoFollow).createNewTarget()
        this.labelContent.addChild(this.labelPoint.node)
        return this
    }
    /**測試用 */
    randomBall() {
        return 1 + (Math.floor(Math.random() * 49))
    }
}