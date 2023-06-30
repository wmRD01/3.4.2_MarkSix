import { Button, find, js, view, _decorator } from "cc";
import { GameEvent } from "../../Enum/GameEvent";
import { LangType } from "../../Enum/LangType";
import ButtonMng from "../../Manager/ButtonMng";
import MusicMng from "../../Manager/MusicMng";
import SocketSetting from "../../Socket/SocketSetting";
import DataSoundSet, { SoundItem, SoundType } from "../Data/Panel/DataSoundSet";

const { ccclass, property } = _decorator;
@ccclass('PanelSoundSet')
export default class PanelSoundSet extends DataSoundSet {

    // #EA1337
    // #494a4d
    onLoad() {
        super.onLoad()
        this.setEvent(GameEvent.ShowSoundSet, this.show)
        this.map_Item.set(SoundType.Music, new SoundItem.Item(this, SoundType.Music))
        this.map_Item.set(SoundType.Effect, new SoundItem.Item(this, SoundType.Effect))
        this.buttonClose = find("btn_Close", this.node).getComponent(Button)
        this.buttonBlockBG = find("BlockBG", this.node).getComponent(Button)

        this.viewInit()

        ButtonMng.addEvent(this, "hide", this.buttonClose)
        ButtonMng.addEvent(this, "hide", this.buttonBlockBG)
    }

    setLanguage() {
        this.map_Item.get(SoundType.Effect).setTitle(SocketSetting.t("020", LangType.Game))
        this.map_Item.get(SoundType.Music).setTitle(SocketSetting.t("019", LangType.Game))
    }
    show() {
        super.show()
        this.map_Item.forEach(Item => {
            let getbool: boolean = Item.getType() == SoundType.Music ? MusicMng.getMusicState() : MusicMng.getEffectState()
            console.log(getbool);
            Item.init(getbool)
        });
    }
    switchEevent(e: Event, customEventData?: string) {
        let item = this.map_Item.get(Number(customEventData))
        let getbool: boolean = item.getType() == SoundType.Music ? MusicMng.switchMusic() : MusicMng.switchEffect()
        console.log(getbool);

        item.action(getbool)
    }
}