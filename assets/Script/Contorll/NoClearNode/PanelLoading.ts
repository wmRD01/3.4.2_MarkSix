import { find, Label, Node, sp, Tween, tween, _decorator } from 'cc';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
const { ccclass, property } = _decorator;

@ccclass('PanelLoading')
export default class PanelLoading extends BaseSingletonComponent<PanelLoading>() {
    contentText: Node;
    labelText: Label;
    labelDot: Label;
    spineET: sp.Skeleton; isloading: boolean;
    isLeftDicection: boolean;
    isLeftDicection_r: boolean;
    isLeftDicection_g: boolean;
    isLeftDicection_b: boolean;
    onLoad() {
        super.onLoad()
        this.contentText = find("ContentText", this.node)
        this.labelText = find("LabelText", this.contentText).getComponent(Label)
        this.labelDot = find("LabelDot", this.contentText).getComponent(Label)
        this.hide()
    }
    openLoading(title?: string) {
        this.show()
        // this.label_Dot.string = ""
        // this.spineET.color = Color.WHITE;
        Tween.stopAllByTarget(this.labelDot)
        // Tween.stopAllByTarget(this.spineET)
        if (title)
            this.labelText.string = title
        else
            this.labelText.string = "Loading"
        this.dotAction();
        this.isloading = true
        this.isLeftDicection = false
        this.isLeftDicection_r = false
        this.isLeftDicection_g = false;
        this.isLeftDicection_b = false

    }
    closeLoading() {
        this.hide()
    }
    dotAction() {
        tween(this.labelDot)
            .repeatForever(tween()
                .delay(1)
                .call(() => {
                    if (this.labelDot.string.length > 5) this.labelDot.string = ""
                    else this.labelDot.string = this.labelDot.string + "."
                }))
            .start()
    }
    // colorAction() {
    //     let getTarget = this.randonRGB()
    //     tween(this.spine_ET)
    //         .by(1, { color: getTarget })
    //         // .call(this.colorAction.bind(this))
    //         .start()
    // }
    // randonRGB() {
    //     let r = Math.floor(Math.floor(random() * 255))
    //     let g = Math.floor(Math.floor(random() * 255))
    //     let b = Math.floor(Math.floor(random() * 255))
    //     return new Color(r, g, b)
    // }

    // update(dt) {
    //     // console.log(`R:${this.spine_ET.color.r},G:${this.spine_ET.color.g},B:${this.spine_ET.color.b}`);
    //     if (this.isloading) {
    //         //#region 顏色管理
    //         //控管R
    //         if (this.spine_ET.color.r <= 10 && this.isLeftDicection_r) {
    //             this.isLeftDicection_r = false
    //         }
    //         if (this.spine_ET.color.r >= 250 && !this.isLeftDicection_r) {
    //             this.isLeftDicection_r = true
    //         }

    //         if (this.isLeftDicection_r) {
    //             this.changeColor("r", "<", dt);
    //         }
    //         else {
    //             this.changeColor("r", ">", dt);
    //         }
    //         //控管G
    //         if (this.spine_ET.color.g <= 10 && this.isLeftDicection_g) {
    //             this.isLeftDicection_g = false
    //         }
    //         if (this.spine_ET.color.g >= 250 && !this.isLeftDicection_g) {
    //             this.isLeftDicection_g = true
    //         }
    //         if (this.isLeftDicection_g) {
    //             this.changeColor("g", "<", dt);
    //         }
    //         else {
    //             this.changeColor("g", ">", dt);
    //         }
    //         //控管B
    //         if (this.spine_ET.color.b <= 10 && this.isLeftDicection_b) {
    //             this.isLeftDicection_b = false
    //         }
    //         if (this.spine_ET.color.b >= 250 && !this.isLeftDicection_b) {
    //             this.isLeftDicection_b = true
    //         }
    //         if (this.isLeftDicection_b) {
    //             this.changeColor("b", "<", dt);
    //         }
    //         else {
    //             this.changeColor("b", ">", dt);
    //         }
    //         //#endregion
    //     }
    //     // else if ()
    // }
    // changeColor(rgbString: string, direction: string, dt: number) {
    //     let getValue = 0
    //     switch (rgbString) {
    //         case "r":
    //             getValue = direction == ">" ? MyMath.add(this.spine_ET.color.r, dt * 400) : MyMath.minus(this.spine_ET.color.r, dt * 400)
    //             this.spine_ET.color = new Color(getValue, this.spine_ET.color.g, this.spine_ET.color.b)
    //             break;
    //         case "g":
    //             getValue = direction == ">" ? MyMath.add(this.spine_ET.color.g, dt * 200) : MyMath.minus(this.spine_ET.color.g, dt * 200)
    //             this.spine_ET.color = new Color(this.spine_ET.color.r, getValue, this.spine_ET.color.b)
    //             break;
    //         case "b":
    //             getValue = direction == ">" ? MyMath.add(this.spine_ET.color.b, dt * 300) : MyMath.minus(this.spine_ET.color.b, dt * 300)
    //             this.spine_ET.color = new Color(this.spine_ET.color.r, this.spine_ET.color.g, getValue)
    //             break;
    //     }

    // }
}