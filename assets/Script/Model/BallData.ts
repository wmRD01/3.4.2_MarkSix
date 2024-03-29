import { Button, Color, color, Label, Node, Sprite, Tween, tween, UIOpacity, v3, Vec3, _decorator } from 'cc';
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
    @property(Sprite)
    shoadow: Sprite;

    @property(UIOpacity)
    opacityEffect: UIOpacity;
    ballNumber: number = 0;
    type: number = 0;
    orgV3: Vec3;
    labelAuto: AutoFollow;
    btnBGAuto: AutoFollow;
    shadowAuto: AutoFollow;
    effectAuto: AutoFollow;
    // onDisable() {
    //     console.log("我消失了?");
    // }

    onDestroy() {
        // console.log(this.label);
        try {

            this.label.node.destroy();
        } catch (error) {

        }
    }
    init(_ballNumber: number, isResetPos: boolean = false) {
        // console.log(_ballNumber);

        this.ballNumber = _ballNumber
        if (isResetPos)
            this.node.position = Vec3.ZERO
        /**一般規則 */
        // this.type = _ballNumber % 6
        /**符合香港規則 */
        this.type = (_ballNumber + (Math.floor(_ballNumber / 10))) % 6
        if (_ballNumber % 10 === 0)
            this.type -= 1
        this.labelAuto = this.label.addComponent(AutoFollow).setTarget(this.node)
        this.label.string = this.ballNumber.toString()
        this.label.color = color().fromHEX(this.getColor())
        // console.log(AssetMng.AssetClass.get(AssetType.Sprite).data.get(this.getBGData()));

        this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(this.getBGData())
        this.setEffect(false)


        // const color = ['red', 'red', 'blue', 'blue', 'green', 'green']

        // const result = []
        // var add = 0
        // for (let num = 1; num <= 50; num++) {

        //     if (num % 10 === 1) {
        //         add = Math.floor(num / 10)
        //     }
        //     result.push(num.toString() + color[(num - 1 + add) % 6])

        // }
        // console.log(result)



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
        this.setEffect(true)
        // let rotai = tween()
        //     .set({ angle: 0 })
        //     .to(5, { angle: -360 })
        tween(this.opacityEffect)
            .repeatForever(tween()
                .to(1, { opacity: 0 })
                .to(1, { opacity: 255 }))
            .start()
        return this
    }
    cancel() {
        // this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(SpirteData.空白)
        // this.spriteBG.color = color().fromHEX(this.getColor())

        this.node.setScale(PublicModel.getInstance.oneSclaeVec3(1))
        this.spriteBG.node.eulerAngles = Vec3.ZERO
        this.setEffect(false)
        Tween.stopAllByTarget(this.spriteBG.node)
        this.enabledBall(true)
        return this
    }
    backPosition() {
        Tween.stopAllByTarget(this.spriteBG.node)
        // console.log(this.node.position);

        this.node.position = this.orgV3
        // console.log(this.node.position, this.orgV3);
        return this
    }
    setLabelAutoScale() {
        this.labelAuto.setAutoScale(true)
    }
    setButtonAuto() {
        this.btnBGAuto = this.button.addComponent(AutoFollow).setTarget(this.node)
        return this
    }
    setEffectAuto() {
        this.effectAuto = this.opacityEffect.addComponent(AutoFollow).setTarget(this.node)
        return this
    }
    setShadowAuto() {
        this.shadowAuto = this.shoadow.addComponent(AutoFollow).createNewTarget()
        return this
    }

    enabledBall(bool: boolean) {
        if (bool) {
            this.label.color = Color.BLACK
            this.spriteBG.color = Color.WHITE
        }

        else {

            this.spriteBG.color = new Color(255, 255, 255, 100)
            this.label.color = new Color(0, 0, 0, 100)
        }
    }
    setEffect(bool: boolean) {
        this.opacityEffect.opacity = 255
        this.opacityEffect.node.active = bool

    }
    changeEffectColor() {
        this.opacityEffect.node.getComponent(Sprite).color = color().fromHEX("#FFB700")
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