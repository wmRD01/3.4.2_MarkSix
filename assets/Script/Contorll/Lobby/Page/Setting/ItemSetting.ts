import { EventTouch, Label, Sprite, _decorator } from 'cc';
import { AssetType } from '../../../../Enum/AssetType';
import AssetMng from '../../../../Manager/AssetMng';
import MusicMng from '../../../../Manager/MusicMng';
import BaseComponent from '../../../../Model/ComponentBase';
import PublicModel from '../../../../Model/PublicModel';
const { ccclass, property } = _decorator;
@ccclass('ItemSetting')
export default class ItemSetting extends BaseComponent {

    @property(Sprite)
    spriteBG: Sprite
    @property(Sprite)
    spriteIcon: Sprite;
    @property(Label)
    labelName: Label;
    @property(Label)
    lableState: Label;
    nowState: Active = Active.on;
    type: Type
    init() {

        this.type = PublicModel.getInstance.getEnumValueFromString(this.node.name.split("Setting")[0], Type)
        console.log(this.type);

        switch (this.type) {
            case Type.Music:
                this.labelName.string = "音樂"
                MusicMng.getMusicState() ? this.nowState = Active.on : this.nowState = Active.off

                break;
            case Type.Effect:
                this.labelName.string = "音效"
                MusicMng.getEffectState() ? this.nowState = Active.on : this.nowState = Active.off
                break;
            case Type.Notification:
                this.labelName.string = "推波"

                // MusicMng.getMusicState() ? this.lableState.string = Active.on : this.lableState.string = Active.off
                break;
        }
        this.activeChange()
    }
    activeChange() {
        this.lableState.string = this.nowState
        let getSprite = this.nowState == Active.on ? "Setup_button01" : "Setup_button00"
        console.log(AssetMng.AssetClass.get(AssetType.Sprite).data.get(getSprite));

        this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(getSprite);

    }
    onChangeState(e: EventTouch, customEventData?: string) {
        switch (this.type) {
            case Type.Music:
                MusicMng.switchMusic();
                MusicMng.getMusicState() ? this.nowState = Active.on : this.nowState = Active.off
                break;
            case Type.Effect:
                MusicMng.switchEffect()
                MusicMng.getEffectState() ? this.nowState = Active.on : this.nowState = Active.off
                break;
            case Type.Notification:
                this.lableState.string == Active.on ? this.nowState = Active.off : this.nowState = Active.on
                // MusicMng.getMusicState() ? this.lableState.string = Active.on : this.lableState.string = Active.off
                break;
        }
        this.activeChange()
    }

}


enum Type {
    Music,
    Effect,
    Notification,
}
enum Active {
    on = "turn on",
    off = "turn off",
}