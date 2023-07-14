import { Button, color, EventTouch, instantiate, Label, Layout, Node, Prefab, random, Sprite, Vec3, _decorator } from 'cc';
import DelayTime from '../../../../../Plug/DelayTime';
import { AssetType } from '../../../../Enum/AssetType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import AssetMng from '../../../../Manager/AssetMng';
import ButtonMng from '../../../../Manager/ButtonMng';
import BallData from '../../../../Model/BallData';
import BaseComponent from '../../../../Model/ComponentBase';
import { InRoomLevel } from '../../../../State/LobbyState';
const { ccclass, property } = _decorator;
@ccclass('PanelBall')
export default class PanelBall extends BaseComponent {
    @property(Node)
    HorLayout: Node;
    @property(Node)
    labelContent: Node;
    @property(Prefab)
    layoutItem: Prefab;
    @property(Prefab)
    ballItem: Prefab;
    
    Halign: number = 10;
    Valign: number = 5;
    totalCount: number = 49
    mapBallNumber: Map<number, BallData> = new Map()

    isChoose: number[] = []
    tempChoose: number[] = []
    /**選擇球數最大值 */
    MaxCount: number = 6
    isConfirm: boolean;
    isFullBall: boolean;

    async start() {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.labelContent.removeAllChildren()
        this.HorLayout.removeAllChildren()
        let isEnd = false
        for (let V = 0; V < this.Valign; V++) {
            let layout = instantiate(this.layoutItem)
            this.HorLayout.addChild(layout)
            for (let H = 1; H <= this.Halign; H++) {
                let count = (V * this.Halign) + H
                if (count > 49) {
                    isEnd = true
                    break;
                }
                let _node = instantiate(this.ballItem)
                let _class = _node.getComponent(BallData)
                this.mapBallNumber.set(count, _class)
                layout.addChild(_node)
                _class.init(count).cancel()
                ButtonMng.addEvent(this, "onChooeseBall", _class.button, count.toString())
                this.labelContent.addChild(_class.label.node)
            }

        }
        await DelayTime.getInstance.StartDT(.016)
        for (let index = 0; index < this.HorLayout.children.length; index++) {
            //球往上飛所以不能讓他自動排版
            this.HorLayout.children[index].getComponent(Layout).enabled = false

        }
        this.mapBallNumber.forEach(element => {
            element.getOrg()
        });
    }
    onRandomNumber(e: EventTouch, customEventData?: string) {
        this.onResetChooese(null)
        let arr = []
        while (arr.length < this.MaxCount) {
            let random = 1 + Math.floor((Math.random() * (this.totalCount)))
            if (arr.indexOf(random) == -1) {
                this.onChooeseBall(null, random.toString())
                arr.push(random)
            }
        }
    }
    onChooeseBall(e: EventTouch, customEventData?: string) {
        if (this.isConfirm) return
        let convert = Number(customEventData)
        if (this.tempChoose.indexOf(convert) > -1) {
            this.tempChoose.splice(this.tempChoose.indexOf(convert), 1)[0];
            this.mapBallNumber.get(convert).cancel()
            if (this.isFullBall)
                this.fullResetBallColor(true)
            return
        }
        if (this.tempChoose.length >= this.MaxCount) return
        this.tempChoose.push(convert)
        this.mapBallNumber.get(convert).choose()
        if (this.tempChoose.length === this.MaxCount) {
            this.isFullBall = true;
            this.mapBallNumber.forEach(element => {
                //代表沒被選種
                if (this.tempChoose.indexOf(element.ballNumber) == -1) {
                    element.enabledBall(false)
                }
            })
        }

    }
    onTestReset(e: EventTouch, customEventData?: string) {

        this.isChoose = []
        this.tempChoose = []
        /**選擇球數最大值 */
        this.MaxCount = 6
        this.isConfirm = false
        this.isFullBall = false
        this.mapBallNumber.forEach(element => {
            element.cancel()
            element.backPosition()
        })
    }
    onResetChooese(e: EventTouch, customEventData?: string) {
        if (this.isConfirm) return
        if (this.tempChoose.length === this.MaxCount) {
            this.mapBallNumber.forEach(element => {
                element.cancel()
            })
        }

        else {
            for (let index = 0; index < this.tempChoose.length; index++) {
                this.mapBallNumber.get(this.tempChoose[index]).cancel()
            }
        }

        this.tempChoose = []
    }
    async onConfirmAttack(e: EventTouch, customEventData?: string) {
        if (this.isConfirm) return
        if (this.tempChoose.length < this.MaxCount) {
            return
        }
        let len = this.tempChoose.length
        for (let index = 0; index < len; index++) {
            this.isChoose.push(this.tempChoose.shift())
        }
        this.isChoose.sort((a, b) => a - b)

        for (let index = 0; index < this.isChoose.length; index++) {
            this.eventEmit(LobbyStateEvent.BallChooeseAction, this.mapBallNumber.get(this.isChoose[index]).node, index)
            await DelayTime.getInstance.StartDT(.1);
        }
        this.tempChoose = []

        this.isConfirm = true
        /**推波訊息 */
    }
    fullResetBallColor(bool: boolean) {
        this.mapBallNumber.forEach(element => {
            element.enabledBall(bool)
        })
        this.isFullBall = !bool;
    }
    reProcessing() {

    }
}
