import { instantiate, Label, log, Node, Prefab, Size, Sprite, UITransform, _decorator } from 'cc';
import BallData from './BallData';
import BaseComponent from './ComponentBase';
import AutoFollow from './AutoFollow';
import PublicModel from './PublicModel';
const { ccclass, property } = _decorator;
//TODO 缺乏優化DrawCode
@ccclass('PointItemData')
export default class PointItemData extends BaseComponent {
    @property(UITransform)
    ui: UITransform;
    @property(UITransform)
    UIbg: UITransform;
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
    buttonBGContent: Node;
    shadowContent: Node;

    drawCode: string[] = [];

    itemSize: Size;

    onLoad() {
        this.clientPointLayout.removeAllChildren();
        this.openDrawCodeLayout.removeAllChildren();
        this.ui = this.node.getComponent(UITransform);
        this.itemSize = new Size(this.UIbg.contentSize.width, this.UIbg.contentSize.height)
        this.itemState(false)
    }
    setLabelContent(_node: Node) {
        this.labelContent = _node
        return this;
    }
    setOutlineContent(_node: Node) {
        this.outlineContent = _node
        return this;
    }
    setButtonBGContent(_node: Node) {
        this.buttonBGContent = _node
        return this;
    }
    setShadowContent(_node: Node) {
        this.shadowContent = _node
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
        console.log(`當期號碼${numbers}`);

        this.drawCode = numbers;
        for (let index = 0; index < numbers.length; index++) {
            let _node: Node;
            if (index == this.maxNumberCount) _node = this.specialBallItem;
            else {
                _node = instantiate(this.prefabBallItem)
                _node.setScale(PublicModel.getInstance.oneSclaeVec3(.6))
                this.openDrawCodeLayout.addChild(_node)
            }
            let _class = _node.getComponent(BallData)
            _class.init(Number(numbers[index]))
                .setButtonAuto()
                .setShadowAuto()
            this.labelContent.addChild(_class.label.node)
            this.buttonBGContent.addChild(_class.button.node)
            this.shadowContent.addChild(_class.shoadow.node)
        }
        return this
    }
    setSelfNumber(numbers: number[]) {
        if (this.clientPointLayout.children.length >= this.maxNumberCount) return;
        this.itemState(true)
        for (let index = 0; index < numbers.length; index++) {
            let _node = instantiate(this.prefabBallItem)
            this.clientPointLayout.addChild(_node)
            let _class = _node.getComponent(BallData)
            _class.init(numbers[index])
                .setShadowAuto()
                .setButtonAuto()
            this.labelContent.addChild(_class.label.node)
            this.buttonBGContent.addChild(_class.button.node)
            this.shadowContent.addChild(_class.shoadow.node)
            if (this.drawCode.indexOf(numbers[index].toString()) != -1) {
                _class.setEffect(true);
                _class.changeEffectColor();
            }
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

    itemState(bool: boolean) {
        if (bool) {
            console.log(this.itemSize.height);

            this.ui.setContentSize(this.itemSize)
            this.UIbg.setContentSize(this.itemSize)
        }
        else {
            let halfSize = new Size(this.itemSize.width, this.itemSize.height / 2)

            this.ui.setContentSize(halfSize)
            this.UIbg.setContentSize(halfSize)
        }
        this.clientPointLayout.active = bool;
        this.labelMyChooeseNumber.node.active = bool;
    }
    /**測試用 */
    randomBall() {
        return 1 + (Math.floor(Math.random() * 49))
    }
}