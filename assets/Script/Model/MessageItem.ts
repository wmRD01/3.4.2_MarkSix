import { Label, Sprite, tween, UIOpacity, UITransform, v3, Vec3, _decorator } from "cc";
import BaseComponent from "./ComponentBase";
import PublicModel from "./PublicModel";
const { ccclass, property } = _decorator;
@ccclass('MessageItem')
export default class MessageItem extends BaseComponent {
    @property(Sprite)
    sprite: Sprite;
    @property(Label)
    label: Label;
    spriteOpacity: UIOpacity
    labelOpacity: UIOpacity
    delayFadeTime: number = 2;
    isFade: boolean = false
    start() {
        this.spriteOpacity = this.sprite.getComponent(UIOpacity)
        this.labelOpacity = this.label.getComponent(UIOpacity)

    }

    moveUp() {
        if (this.isFade) return
        let pos = this.node.getPosition()
        console.log(this.sprite.getComponent(UITransform).height);

        pos.y = pos.y + this.sprite.getComponent(UITransform).height
        this.node.setPosition(pos)

    }
    outFade() {

        tween(this)
            .delay(this.delayFadeTime)
            .call(() => {
                this.isFade = true
                tween(this.node)
                    .parallel(
                        tween()
                            .by(.5, { position: v3(0, 50, 0) })
                        ,
                        tween()
                            .call(() => {
                                tween(this.spriteOpacity)
                                    .to(.5, { opacity: 0 }, { onComplete: this.destroyItem.bind(this) })
                                    .start()
                            })
                    )
                    .start()
            })
            .start()
    }

    destroyItem() {
        this.label.node.destroy()
        this.node.destroy()
        this.destroy()
    }

    update() {
        if (!this.label.node.position.equals(PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.label.node, this.node)))
            this.label.node.position = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.label.node, this.node)
        if (this.labelOpacity.opacity != this.spriteOpacity.opacity)
            this.labelOpacity.opacity = this.spriteOpacity.opacity
    }
}