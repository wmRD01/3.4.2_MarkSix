import { Button, color, EventTouch, instantiate, Label, Node, Prefab, Sprite, Vec3, _decorator } from 'cc';
import { AssetType } from '../../Enum/AssetType';
import AssetMng from '../../Manager/AssetMng';
import ButtonMng from '../../Manager/ButtonMng';
import BallData from '../../Model/BallData';
import BaseComponent from '../../Model/ComponentBase';
import LabelAutoFollow from '../../Model/LabelAutoFollow';

import PublicModel from '../../Model/PublicModel';
const { ccclass, property } = _decorator;
@ccclass('PanelBall')
export default class PanelBall extends BaseComponent {
    @property(Node)
    spriteLayout: Node;
    @property(Node)
    labelContent: Node;
    @property(Prefab)
    layoutItem: Prefab;
    @property(Prefab)
    ballItem: Prefab;
    Halign: number = 7;
    Valign: number = 7;
    totalCount: number = 49
    mapBallNumber: Map<number, BallData> = new Map()

    isChoose: number[] = []
    tempChoose: number[] = []
    MaxCount: number = 6
    isConfirm: boolean;

    @property(Label)
    templabel: Label
    async onLoad() {
        AssetMng.startLoad()
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.labelContent.removeAllChildren()
        this.spriteLayout.removeAllChildren()
        this.templabel.string = `已選擇 0 / ${this.MaxCount} 個數字`
        for (let V = 0; V < this.Valign; V++) {
            let layout = instantiate(this.layoutItem)
            this.spriteLayout.addChild(layout)
            for (let H = 1; H <= this.Halign; H++) {
                let count = (V * this.Halign) + H
                let temp = instantiate(this.ballItem)
                let _class = temp.addComponent(BallData)
                this.mapBallNumber.set(count, _class)
                layout.addChild(temp)
                _class.init(count).cancel()
                ButtonMng.addEvent(this, "onChooeseBall", _class.button, count.toString())
                this.labelContent.addChild(_class.label.node)
            }
        }
    }
    onChooeseBall(e: EventTouch, customEventData?: string) {
        if (this.isConfirm) return
        let convert = Number(customEventData)
        if ((this.tempChoose.indexOf(convert) > -1 || this.isChoose.indexOf(convert) > -1) || this.tempChoose.length + this.isChoose.length >= this.MaxCount) return
        this.tempChoose.push(convert)
        this.mapBallNumber.get(convert).choose()
        this.templabel.string = `已選擇 ${this.tempChoose.length} / ${this.MaxCount} 個數字`
    }
    onResetChooese(e: EventTouch, customEventData?: string) {
        if (this.isConfirm) return
        for (let index = 0; index < this.tempChoose.length; index++) {
            this.mapBallNumber.get(this.tempChoose[index]).cancel()
        }
        this.tempChoose = []
        this.templabel.string = `已選擇 0 / ${this.MaxCount} 個數字`
    }
    onConfirmAttack(e: EventTouch, customEventData?: string) {
        if (this.isConfirm) return
        if (this.tempChoose.length < this.MaxCount) {
            return
        }
        for (let index = 0; index < this.tempChoose.length; index++) {
            this.isChoose.push(this.tempChoose.shift())
        }
        this.tempChoose = []

        this.isConfirm = true
        /**推波訊息 */
    }
    scheduleOnce
}
