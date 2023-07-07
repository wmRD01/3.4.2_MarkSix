import { Button, Node, UITransform, v3, Vec3, _decorator } from "cc";
import { PageAction } from "../../Enum/PageAction";
import { PageMenu } from "../../Enum/PageMenu";
import ButtonMng from "../../Manager/ButtonMng";
import BaseComponent from "../../Model/ComponentBase";
import PublicData from "../../Model/PublicData";
import PublicModel from "../../Model/PublicModel";
import PageControll from "./PageControll";

const { ccclass, property } = _decorator;
@ccclass('PanelBottomNavigationBar')
export default class PanelBottomNavigationBar extends BaseComponent {
    @property(Button)
    btnHome: Button;
    @property(Button)
    btnPoint: Button;
    @property(Button)
    btnChooeseBall: Button;
    @property(Button)
    btnClientInfo: Button;
    @property(Button)
    btnSetting: Button;
    @property(Node)
    btnLayout: Node;
    @property(Node)
    nodeCircle: Node;
    circleY: number;
    mapButton: Map<number, Button> = new Map()
    currentIndex: number = 0

    //#region 動畫參數
    isAction: boolean = false
    actionDic: ActionDic = ActionDic.縮;
    @property
    speed: number = 3
    goTarget: Vec3;
    getCircleScale: number
    //#endregion
    onLoad() {
        // PageControll.instance.pageEvnet.on(PageAction.ChangeTo, this.onMoveCircle, this)

        this.mapButton.set(0, this.btnHome);
        this.mapButton.set(1, this.btnPoint);
        this.mapButton.set(2, this.btnChooeseBall);
        this.mapButton.set(3, this.btnClientInfo);
        this.mapButton.set(4, this.btnSetting);
        this.circleY = -(PublicData.getInstance.BaseViewHeight / 2) + (this.nodeCircle.getComponent(UITransform).height / 2)
    }
    start() {
        // for (let index = 0; index < this.btnLayout.children.length; index++) {
        //     ButtonMng.addEvent(this, "onMoveCircle", this.getButton(index), index.toString())
        // }
    }
    onMoveCircle(e: Event, customEventData?: string) {
        if (this.currentIndex == Number(customEventData)) return;
        this.currentIndex = Number(customEventData)
        let getX = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.nodeCircle, this.getButton(this.currentIndex).node).x
        this.goTarget = v3(getX, this.circleY)
        this.startAction()
        PageControll.instance.pageEvnet.emit(PageAction.ChangeTo, this.currentIndex)
    }
    getButton(index: number) {
        return this.mapButton.get(index)
    }
    startAction() {
        this.getCircleScale = this.nodeCircle.getScale().x
        this.actionDic = ActionDic.縮
        this.isAction = true
    }
    update(dt: number) {
        if (this.isAction) {
            switch (this.actionDic) {
                case ActionDic.縮:
                    this.getCircleScale = this.getCircleScale - (dt * this.speed)
                    if (this.getCircleScale < 0) {
                        this.getCircleScale = 0
                        this.actionDic = ActionDic.放;
                        this.nodeCircle.setPosition(this.goTarget)
                    }
                    break;
                case ActionDic.放:
                    this.getCircleScale = this.getCircleScale + (dt * this.speed)
                    if (this.getCircleScale > 1) {
                        this.getCircleScale = 1
                        this.isAction = false
                    }
                    break;
            }
            this.nodeCircle.setScale(PublicModel.getInstance.oneSclaeVec3(this.getCircleScale))
        }
    }
}
enum ActionDic {
    縮,
    放
}