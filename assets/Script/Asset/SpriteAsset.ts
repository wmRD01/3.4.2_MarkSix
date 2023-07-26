import { resources, SpriteAtlas, SpriteFrame } from "cc";
import { NotificationType } from "../Enum/NotificationType";
import { GameEvent } from "../Enum/GameEvent";
import IAsset from "../Interface/IAsset";
import EventMng from "../Manager/EventMng";

class SpriteAsset implements IAsset {
    data: Map<string, SpriteFrame> = new Map();
    checkAssetState: boolean;
    typePath: string = "Sprite/";

    loadAsset() {
        resources.loadDir(this.typePath, SpriteFrame, (err, data: Array<SpriteFrame>) => {
            data.forEach(_SprtieFrame => {
                this.data.set(_SprtieFrame.name, _SprtieFrame)
            });
            this.checkAssetState = true;
            // console.log(data);
        })
        resources.load("Sprite/Test", SpriteAtlas, (err, data) => {
            // console.log(data);

            // data.forEach(_SprtieFrame => {
            //     this.data.set(_SprtieFrame.name, _SprtieFrame)
            // });
            // this.checkAssetState = true;
            // console.log(data);
        })

        return this
    }
    loadLogo(lang: string) {
        let formatArr = []
        // lang = "cn"
        formatArr.push(this.typePath + "Lang/" + lang)
        resources.load(formatArr, SpriteAtlas, (err, data: Array<SpriteAtlas>) => {
            if (err) {
                this.loadLogo("en")
                return
            }
            // console.log(data);

            data.forEach(_SpriteAtlas => {
                _SpriteAtlas.getSpriteFrames().forEach(_spriteFrame => {
                    // console.log(_spriteFrame);
                    this.data.set(_spriteFrame.name, _spriteFrame)
                })
            });
            console.log(this.data);

            EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(GameEvent.SetLogo, this.data.get("logo"))

        })
        return this
    }

}
export default new SpriteAsset();