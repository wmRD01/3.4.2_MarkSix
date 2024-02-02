import { resources, SpriteAtlas, SpriteFrame } from "cc";
import { GameEvent } from "../Enum/GameEvent";
import { NotificationType } from "../Enum/NotificationType";
import IAsset from "../Interface/IAsset";
import EventMng from "../Manager/EventMng";


class SpriteAtlasAsset implements IAsset {
    data: Map<string, SpriteFrame> = new Map();
    checkAssetState: boolean;
    typePath: string = "SpriteAtlas/";
    filePath: string[] = [
    ];
    urlPath: string[] = [
        "http://10.20.13.202/JaiJaiTest/Remote/planets",
    ];


    loadAsset() {

        let formatArr = []
        for (let index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index])
        }

        resources.load(formatArr, SpriteAtlas, (err, data: Array<SpriteAtlas>) => {
            // console.log(err);
            // console.log(data);

            data.forEach(_SpriteAtlas => {
                _SpriteAtlas.getSpriteFrames().forEach(_spriteFrame => {
                    // console.log(_spriteFrame);
                    this.data.set(_spriteFrame.name, _spriteFrame)
                })
            });
            // console.log(this.data);

            this.checkAssetState = true;

        })
        return this
    }
    loadLogo(lang: string) {
        let formatArr = []
        formatArr.push(this.typePath + "Lang/" + lang)
        resources.load(formatArr, SpriteAtlas, (err, data: Array<SpriteAtlas>) => {

            data.forEach(_SpriteAtlas => {
                _SpriteAtlas.getSpriteFrames().forEach(_spriteFrame => {
                    this.data.set(_spriteFrame.name, _spriteFrame)
                })
            });
            // CheckLoading.getInstance.changeState(CheckLoadingType.isLogo, true)
            console.log(this.data);

            EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(GameEvent.SetLogo, this.data.get("logo"))
        })
        return this
    }

}
export default new SpriteAtlasAsset();