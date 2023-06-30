import { Button, Color, color, Component, find, Label, Node, Sprite, Tween, tween, UIOpacity, v3, Vec3 } from "cc";
import BaseComponent from "../../../Model/ComponentBase";
import PublicModel from "../../../Model/PublicModel";


export default class DataSoundSet extends BaseComponent {
    map_Item: Map<SoundType, SoundItem.Item> = new Map()
    buttonClose: Button;
    buttonBlockBG: Button;

    // 1. 顏色漸變
    // 2. no off文字透明度與文字變化

    // tween(this.node.getComponent(Sprite))
    //     .to(.2,{ color: new Color().fromHEX("") })
}

export enum SoundType {
    Music,
    Effect
}

export namespace SoundItem {
    export class Item {
        button: Button;
        private title: Label;
        private state: Label;
        private nodeSwitch: Node;
        private spriteSwitchBG: Sprite;
        //private bindPanel: Panel_SoundSet;
        private type: SoundType;
        private isAction: boolean;
        private actionTime: number = .5;
        private distanceLable: number = 15;
        private distanceSprite: number = 30;
        private uiOpacityStateLabel: UIOpacity;
        private buttonConvertStringPosition: Vec3;

        // this.bindPanel = _bindPanel
        constructor(_bindPanel: Panel_SoundSet, _type: SoundType) {
            this.type = _type;
            //像是SoundType[SoundType.Music] 可以直接取Key
            this.button = find(SoundType[_type] + "/btn", _bindPanel.node).getComponent(Button)
            this.spriteSwitchBG = this.button.getComponent(Sprite)
            this.nodeSwitch = find("switch_round", this.button.node)
            this.title = find("label_" + SoundType[_type] + "Title", _bindPanel.node).getComponent(Label)
            this.state = find("label_" + SoundType[_type] + "State", _bindPanel.node).getComponent(Label)
            this.uiOpacityStateLabel = this.state.getComponent(UIOpacity)
            this.buttonConvertStringPosition = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.state.node, this.button.node.parent)
            // bindPanel.node
            //@ts-ignore
            ButtonMng.addEvent(_bindPanel, "switchEevent", this.button, this.type.toString())
        }
        setTitle(str: string) {
            this.title.string = str
        }
        getType() {
            return this.type
        }
        init(getbool: boolean) {
            if (getbool) {
                this.state.string = "ON"
                this.state.node.position = v3(this.buttonConvertStringPosition.x - this.distanceLable, this.state.node.position.y, this.state.node.position.z)
                this.spriteSwitchBG.color = color(0, 0, 0, 255).fromHEX("#EA1337")
                this.nodeSwitch.position = v3(this.distanceSprite, this.nodeSwitch.position.y, this.nodeSwitch.position.y)
            }
            else {
                this.state.string = "OFF"
                this.state.node.position = v3(this.buttonConvertStringPosition.x + this.distanceLable, this.state.node.position.y, this.state.node.position.z)
                this.nodeSwitch.position = v3(-this.distanceSprite, this.nodeSwitch.position.y, this.nodeSwitch.position.y)
                this.spriteSwitchBG.color = color(0, 0, 0, 255).fromHEX("#494a4d")
            }

        }
        action(getbool: boolean) {
            if (getbool) {
                // tween(this.sprite_SwitchBG)
                //     .set({ color: color(0, 0, 0, 255) })
                //     // .to(this.actionTime / 2, { color: color().fromHEX("#EA1337") })
                //     .to(this.actionTime / 2, { color: color(234, 19, 55, 255) })
                //     .start()
                Tween.stopAllByTarget(this.state.node)
                Tween.stopAllByTarget(this.uiOpacityStateLabel)
                Tween.stopAllByTarget(this.spriteSwitchBG)
                Tween.stopAllByTarget(this.nodeSwitch)

                tween(this.state.node)
                    .to(this.actionTime / 2, { position: v3(this.buttonConvertStringPosition.x + (this.distanceLable * 2), this.state.node.position.y, this.state.node.position.z) })
                    .call(() => {
                        this.state.node.position = v3(this.buttonConvertStringPosition.x + (-this.distanceLable * 2), this.state.node.position.y, this.state.node.position.z)
                    })
                    .to(this.actionTime / 2, { position: v3(this.buttonConvertStringPosition.x - this.distanceLable, this.state.node.position.y, this.state.node.position.z) })
                    .start()
                tween(this.uiOpacityStateLabel)
                    .to(this.actionTime / 2, { opacity: 0 })
                    .call(() => {
                        this.state.string = "ON"
                    })
                    .to(this.actionTime / 2, { opacity: 255 })
                    .start()
                tween(this.spriteSwitchBG)
                    .to(this.actionTime * 2, {}, {
                        onUpdate: (target: Sprite, ration: number) => {
                            target.color = Color.lerp(new Color(), target.color, color().fromHEX("#EA1337"), ration);
                        }
                    })
                    .start()
                tween(this.nodeSwitch)
                    .to(this.actionTime, { position: v3(this.distanceSprite, 0, 0) })

                    .start()
            }
            else {
                tween(this.state.node)
                    .to(this.actionTime / 2, { position: v3(this.buttonConvertStringPosition.x + (-this.distanceLable * 2), this.state.node.position.y, this.state.node.position.z) })
                    .call(() => {
                        this.state.node.position = v3(this.buttonConvertStringPosition.x + (this.distanceLable * 2), this.state.node.position.y, this.state.node.position.z)
                    })
                    .to(this.actionTime / 2, { position: v3(this.buttonConvertStringPosition.x + this.distanceLable, this.state.node.position.y, this.state.node.position.z) })
                    .start()
                tween(this.uiOpacityStateLabel)
                    .to(this.actionTime / 2, { opacity: 0 })
                    .call(() => {
                        this.state.string = "OFF"
                    })
                    .to(this.actionTime / 2, { opacity: 255 })
                    .start()
                tween(this.spriteSwitchBG)
                    .to(this.actionTime * 2, {}, {
                        onUpdate: (target: Sprite, ration: number) => {
                            target.color = Color.lerp(new Color(), target.color, color().fromHEX("#494a4d"), ration);
                        }
                    })
                    // .repeat(this.actionTime * 30, tween()
                    //     .call((e: Sprite) => {
                    //         e.color = this.LerpRGB(e.color, color().fromHEX("#494a4d"), .1)
                    //     })
                    //     .delay(this.actionTime / 30)
                    // )
                    // .set({ color: color().fromHEX("#494a4d") })
                    .start()
                tween(this.nodeSwitch)
                    .to(this.actionTime, { position: v3(-this.distanceSprite, 0, 0) })
                    .start()
            }

            // let sprite = this.node.getComponent(Sprite) as Sprite;
            // sprite.color = new Color(255, 255, 255, 255);
            // let color = new Color(255, 255, 255, 0);
            // let curColor = new Color();
            // let tween = new Tween(sprite);
            // tween
            //   .to(1, {}, {
            //     onUpdate: (target, ratio: number) => {
            //       sprite.color = Color.lerp(curColor, Color.WHITE, color, ratio);
            //     }
            //   })
            //   .call(() => {
            //     this.node.active = false;
            //   })
            //   .start();

        }

        public LerpRGB(a: Color, b: Color, t: number) {
            return new Color
                (
                    a.r + (b.r - a.r) * t,
                    a.g + (b.g - a.g) * t,
                    a.b + (b.b - a.b) * t,
                    a.a + (b.a - a.a) * t
                );
        }

    }
}
