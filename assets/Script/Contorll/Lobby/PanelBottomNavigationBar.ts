import { Button, Node, Sprite, UITransform, v3, Vec3, _decorator } from "cc";
import { AssetType } from "../../Enum/AssetType";
import { NotificationType } from "../../Enum/NotificationType";
import { PageAction } from "../../Enum/PageAction";
import { PageMenu } from "../../Enum/PageMenu";
import AssetMng from "../../Manager/AssetMng";
import EventMng from "../../Manager/EventMng";
import BaseComponent from "../../Model/ComponentBase";
import PublicData from "../../Model/PublicData";
import PublicModel from "../../Model/PublicModel";

const { ccclass, property } = _decorator;
@ccclass('PanelBottomNavigationBar')
export default class PanelBottomNavigationBar extends BaseComponent {
    @property(Button)
    btns: Button[] = []

    @property(Node)
    btnLayout: Node;
    @property(Node)
    nodeCircle: Node;
    circleY: number;
    mapButton: Map<number, Page> = new Map()
    currentIndex: number = -1
    lastIndex: number = -1

    //#region 動畫參數
    isAction: boolean = false
    actionDic: ActionDic = ActionDic.縮;
    @property
    speed: number = 3
    goTarget: Vec3;
    getCircleScale: number
    //#endregion
    async onLoad() {
        super.onLoad()
        // console.log("誰搶誰");

        // PageControll.instance.pageEvnet.on(PageAction.ChangeTo, this.onMoveCircle, this)
        await AssetMng.waitStateCheck(AssetType.Sprite)
        for (let index = 0; index < this.btns.length; index++) {
            let _page = new Page(this.btns[index], index)
            _page.getButton().interactable = false
            this.mapButton.set(index, _page)
        }

        this.circleY = -(PublicData.getInstance.BaseViewHeight / 2) + (this.nodeCircle.getComponent(UITransform).height / 2)

        for (let index = 0; index < this.btns.length; index++) {
            this.mapButton.get(index).getButton().interactable = true
            this.mapButton.get(index).change(false)
        }
    }
    onEnable() {
        EventMng.getInstance.mapEvnet.get(NotificationType.Page).on(PageAction.ChangeTo, this.onMoveCircle, this)
    }
    onDisable() {
        EventMng.getInstance.mapEvnet.get(NotificationType.Page).off(PageAction.ChangeTo, this.onMoveCircle, this)
    }

    async onEmitMoveCircle(e: Event, customEventData?: string) {
        if (this.currentIndex == Number(customEventData)) return;
        EventMng.getInstance.mapEvnet.get(NotificationType.Page).emit(PageAction.ChangeTo, Number(customEventData))
    }
    async onMoveCircle(index: PageMenu) {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.lastIndex = this.currentIndex
        this.currentIndex = Number(index)
        if (this.mapButton.size == 0)
            await this.waitButton()
        let getX = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.nodeCircle, this.getButton(this.currentIndex).node).x
        this.goTarget = v3(getX, this.circleY)
        this.startAction()

    }

    getButton(index: number) {
        return this.mapButton.get(index).getButton()
    }
    async waitButton() {

        return new Promise<void>((resolve, reject) => {
            let inter = setInterval(() => {
                if (this.mapButton.size != 0) {
                    resolve()
                    clearInterval(inter)
                }
            }, 500)
        })
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
                        /**初始畫會是-1 就不做事情 */
                        if (this.mapButton.has(this.lastIndex)) this.mapButton.get(this.lastIndex).change(false)
                        this.mapButton.get(this.currentIndex).change(true)
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

class Page {
    private button: Button
    private BG: Sprite
    private type: PageMenu
    private spriteData: string[] = ["icon_home", "icon_rank", "icon_bet", "icon_user", "icon_setting"]
    constructor(_btn: Button, _type: number) {
        this.button = _btn;
        this.BG = this.button.getComponentInChildren(Sprite);
        this.type = _type
    }
    change(bool: boolean) {
        let sprite: string = this.spriteData[this.type]
        if (bool) sprite = sprite + "_act"
        this.BG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(sprite)
    }
    getButton() {
        return this.button
    }
}
