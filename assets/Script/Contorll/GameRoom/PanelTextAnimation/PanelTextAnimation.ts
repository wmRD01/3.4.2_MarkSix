import { find, instantiate, Label, Layout, macro, Node, Prefab, Sprite, Tween, tween, UIOpacity, v3, Vec3, warn, _decorator } from "cc";
import { AssetType } from "../../../Enum/AssetType";
import { GameEvent } from "../../../Enum/GameEvent";
import { GameStateEvent } from "../../../Enum/GameStateEvent";
import { TextAnimationType } from "../../../Enum/TextAnimationType";
import AssetMng from "../../../Manager/AssetMng";
import BaseComponent from "../../../Model/ComponentBase";
import TextData from "./TextData";
const { ccclass, property } = _decorator;
@ccclass('PanelTextAnimation')
export default class PanelTextAnimation extends BaseComponent {
    @property(TextData)
    textData: TextData;
    @property(Node)
    content: Node
    @property(Prefab)
    item: Prefab;
    @property(Sprite)
    spriteBG: Sprite;
    @property(Sprite)
    spriteStar: Sprite;
    @property(Layout)
    textLayout: Layout;

    nodeOpacity: UIOpacity

    getText: string
    defaultSpacing: number = 8

    protected onLoad(): void {
        this.nodeOpacity = this.node.getComponent(UIOpacity)

    }
    onEnable() {

        this.setEvent(GameEvent.ResetView, this.reset)
        this.setEvent(GameStateEvent.TextAnimation, this.actionProcess)
    }
    protected start(): void {
        // this.actionProcess(TextAnimationType.FINISH)
    }
    onDisable() {
        this.deletEvent(GameEvent.ResetView, this.reset)
        this.deletEvent(GameStateEvent.TextAnimation, this.actionProcess)
    }
    reset() {
        this.textLayout.enabled = true
        this.spriteBG.node.active = false;
        this.content.removeAllChildren();
        this.nodeOpacity.opacity = 0
        Tween.stopAllByTarget(this.node)
        Tween.stopAllByTarget(this.nodeOpacity)
        return this
    }

    fadeOut(_node: Node, callback?: Function) {
        let _tween = tween().to(1, { opacity: 0 })
        if (callback) _tween.call(callback.bind(this)).clone(this.nodeOpacity).start()
        else _tween.clone(this.nodeOpacity).start()

    }
    actionProcess(str: TextAnimationType | string, callback?: Function) {
        this.reset()
        this.actionDoBefore(str)
        tween(this.node)
            .delay(.15)
            .call(() => {
                this.textLayout.enabled = false
                switch (str) {
                    case TextAnimationType.START:
                        this.startAction(callback)
                        break;
                    case TextAnimationType.FINISH:
                        this.finishAction(callback);
                        break;
                    case TextAnimationType.WAITING:
                        this.waitingAction(callback)
                        break;
                    default:
                        console.warn("尚未新增請新增");

                }
            })
            .start()

    }
    private actionDoBefore(str: string | TextAnimationType) {
        this.nodeOpacity.opacity = 255
        this.getText = str
        let splitText = this.getText.split("");
        this.spriteBG.node.active = true
        this.spriteStar.node.active = str == TextAnimationType.FINISH ? false : true;
        this.chooseBG()
        for (let index = 0; index < splitText.length; index++) {
            let item = instantiate(this.item)
            item.getComponent(UIOpacity).opacity = 0
            item.getComponent(Label).string = splitText[index]
            item.name = splitText[index]
            item.getComponent(Label).font = str == TextAnimationType.FINISH ? this.textData.font_silver_alpha : this.textData.font_gold

            this.content.addChild(item)
        }
    }
    private startAction(callback?: Function) {
        let timeindex = 0
        this.content.position = Vec3.ZERO
        for (let index = 0; index < this.content.children.length; index++) {
            let initX = this.content.children[index].position.x + 50
            this.content.children[index].getComponent(UIOpacity).opacity = 0
            tween(this.content.children[index])
                .set({ position: v3(initX, 0) })
                .delay(timeindex * 0.1)
                .parallel(
                    tween()
                        .by(0.3, { position: v3(-50, 0) })
                    ,
                    tween()
                        .call((e: Node) => {
                            tween(e.getComponent(UIOpacity))
                                .to(0.2, { opacity: 255 })
                                .start()
                        })
                )
                .delay(1)
                .call(() => {
                    if (index == this.content.children.length - 1 && callback) this.fadeOut(this.node, callback)
                    else this.fadeOut(this.node)
                })
                .start()
            timeindex++
        }
    }
    private finishAction(callback?: Function) {
        let timeindex = 0
        this.content.position = v3(0, 30)
        for (let index = 0; index < this.content.children.length; index++) {
            let initY = index % 2 == 0 ? 50 : -50
            this.content.children[index].getComponent(UIOpacity).opacity = 0
            tween(this.content.children[index])
                .set({ position: v3(this.content.children[index].position.x, initY) })
                .delay(timeindex * 0.08)
                .parallel(
                    tween()
                        .to(0.3, { position: v3(this.content.children[index].position.x, 0) })
                    ,
                    tween()
                        .call((e: Node) => {
                            tween(e.getComponent(UIOpacity))
                                .to(0.4, { opacity: 255 })
                                .start()
                        })
                )
                .delay(0.1)
                .call((_node: Node) => {
                    _node.getComponent(Label).font = this.textData.font_silver
                })
                // .delay(2)
                // .call(() => {
                //     if (index == this.content.children.length - 1 && callback) this.fadeOut(this.node, callback)
                //     else this.fadeOut(this.node)
                // })
                .start()
            timeindex++
        }
    }
    private waitingAction(callback?: Function) {
        let timeindex = 0
        for (let index = 0; index < this.content.children.length; index++) {
            let initY = index % 2 == 0 ? 50 : -50
            this.content.children[index].getComponent(UIOpacity).opacity = 0
            tween(this.content.children[index])
                .set({ position: v3(this.content.children[index].position.x, initY) })
                .delay(timeindex * 0.08)
                .parallel(
                    tween()
                        .to(0.3, { position: v3(this.content.children[index].position.x, 0) })
                    ,
                    tween()
                        .call((e: Node) => {
                            tween(e.getComponent(UIOpacity))
                                .to(0.4, { opacity: 255 })
                                .start()
                        })
                )

                .start()
            timeindex++
        }
    }
    chooseBG() {
        if (!AssetMng.isAllOK) return
        let spriteStr = this.getText == TextAnimationType.FINISH ? "finish_bg" : "start_bg";
        this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(spriteStr)
    }
    AddSpacing() {
        let tempSpacing = this.defaultSpacing
        for (let index = 0; index < this.content.children.length; index++) {
            /**第一個文字不用增加間距 */
            if (index = 0) continue

        }
    }
}
