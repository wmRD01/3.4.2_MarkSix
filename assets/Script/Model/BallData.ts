import { Button, Color, color, Label, Node, Sprite, Tween, tween, v3, Vec3, _decorator } from 'cc';
import { AssetType } from '../Enum/AssetType';
import AssetMng from '../Manager/AssetMng';
import { colorTest } from '../test/colorTest';
import BaseComponent from './ComponentBase';
import AutoFollow from './AutoFollow';
import PublicModel from './PublicModel';
const { ccclass, property } = _decorator;
@ccclass('BallData')
export default class BallData extends BaseComponent {
    /**comp */
    @property(Label)
    label: Label;
    @property(Button)
    button: Button;
    @property(Sprite)
    spriteBG: Sprite;
    /**data */
    @property(Node)
    nodeEffect: Node;
    ballNumber: number = 0;
    type: number = 0;
    orgV3: Vec3;
    init(_ballNumber: number) {
        // console.log(_ballNumber);

        this.ballNumber = _ballNumber
        this.node.position = Vec3.ZERO
        this.type = _ballNumber % 6
        this.label.addComponent(AutoFollow).setTarget(this.node)
        this.label.string = this.ballNumber.toString()
        this.label.color = color().fromHEX(this.getColor())
        // console.log(AssetMng.AssetClass.get(AssetType.Sprite).data.get(this.getBGData()));

        this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(this.getBGData())
        this.setEffect(false)


        return this
    }
    getOrg() {
        this.orgV3 = new Vec3(this.node.position)

    }
    // reset() {

    // }
    choose() {
        // this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(this.getBGData())
        // this.spriteBG.color = Color.WHITE
        this.node.setScale(PublicModel.getInstance.oneSclaeVec3(1.2))
        // let rotai = tween()
        //     .set({ angle: 0 })
        //     .to(5, { angle: -360 })
        tween(this.node)
            .repeatForever(tween()
                .set({ angle: 0 })
                .to(5, { angle: -360 }))
            .start()
    }
    cancel() {
        // this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(SpirteData.空白)
        // this.spriteBG.color = color().fromHEX(this.getColor())
        this.node.setScale(PublicModel.getInstance.oneSclaeVec3(1))
        this.node.eulerAngles = Vec3.ZERO
        Tween.stopAllByTarget(this.node)
        this.enabledBall(true)
    }
    backPosition() {
        Tween.stopAllByTarget(this.node)
        console.log(this.node.position);

        this.node.position = this.orgV3
        console.log(this.node.position, this.orgV3);

    }
    enabledBall(bool: boolean) {
        this.spriteBG.color = bool ? color().fromHEX(ColorType.白) : color().fromHEX(ColorType.灰);
    }
    setEffect(bool: boolean) {
        this.nodeEffect.active = bool
    }
    private getColor() {

        return ColorType.黑
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
    灰 = "#797979FD",
    白 = "#FFFFFF",
    黑 = "#000000",

}
enum SpirteData {
    紅 = "Challenge_RedBall",
    藍 = "Challenge_BlueBall",
    綠 = "Challenge_GreenBall",
    空白 = "Challenge_Frame"
}