import { Button, Color, color, Label, Sprite, Tween, tween, Vec3, _decorator } from 'cc';
import { AssetType } from '../Enum/AssetType';
import AssetMng from '../Manager/AssetMng';
import BaseComponent from './ComponentBase';
import LabelAutoFollow from './LabelAutoFollow';
const { ccclass, property } = _decorator;
@ccclass('BallData')
export default class BallData extends BaseComponent {
    /**compo */
    label: Label;
    button: Button;
    spriteBG: Sprite;
    /**data */
    ballNumber: number;
    type: number;
    init(_ballNumber: number) {
        this.ballNumber = _ballNumber
        this.node.position = Vec3.ZERO
        this.type = _ballNumber % 6
        this.spriteBG = this.node.getComponent(Sprite)
        this.button = this.node.getComponent(Button)
        this.label = this.node.children[0].getComponent(Label)
        this.label.addComponent(LabelAutoFollow).setTarget(this.node)
        this.label.string = this.ballNumber.toString()
        this.label.color = color().fromHEX(this.getColor())
        return this
    }
    // reset() {

    // }
    choose() {
        this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(this.getBGData())
        this.spriteBG.color = Color.WHITE
        tween(this.node)
            .repeatForever(tween()
                .set({ angle: 0 })
                .to(5, { angle: -360 }))
            .start()
    }
    cancel() {
        this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(SpirteData.空白)
        this.spriteBG.color = color().fromHEX(this.getColor())
        Tween.stopAllByTarget(this.node)
    }
    private getColor() {
        switch (this.type) {
            case 0:
            case 5:
                return ColorType.綠
            case 1:
            case 2:
                return ColorType.紅
            case 3:
            case 4:
                return ColorType.藍
        }
    }
    private getBGData() {
        switch (this.type) {
            case 0:
            case 5:
                return SpirteData.綠
            case 1:
            case 2:
                return SpirteData.紅
            case 3:
            case 4:
                return SpirteData.藍
        }
    }
}
enum ColorType {
    紅 = "#FF3D3D",
    藍 = "#334BD3",
    綠 = "#61BFAD",
    灰 = "#969696",
}
enum SpirteData {
    紅 = "Challenge_RedBall",
    藍 = "Challenge_BlueBall",
    綠 = "Challenge_GreenBall",
    空白 = "Challenge_Frame"
}