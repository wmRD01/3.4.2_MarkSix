import { assetManager, error, ImageAsset, JsonAsset, log, resources, SpriteAtlas, SpriteFrame, Texture2D } from "cc";
import Image from "../../Plug/Image";

import { GameEvent } from "../Enum/GameEvent";
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
        //遠端測試
        // let URL = "http://10.20.13.202/JaiJaiTest/Remote/planets"
        // assetManager.loadRemote(URL + ".plist", (err, plist: JsonAsset) => {
        //     if (err) {
        //         error(err.message)
        //         return
        //     }
        //     assetManager.loadRemote(URL + ".png", (err, image: ImageAsset) => {
        //         if (err) {
        //             error(err.message)
        //             return
        //         }
        //         let atlas = Image.transformTextureToSpriteAtlas(plist, image)
        //         atlas.getSpriteFrames().forEach(_spriteFrame => {
        //             console.log(_spriteFrame);
        //             _Asset.set(_spriteFrame.name, _spriteFrame)
        //         })
        //         this.checkAssetState = true;
        //     })
        // })
        for (let index = 0; index < this.urlPath.length; index++) {
            let URL = this.urlPath[index]
            assetManager.loadRemote(URL + ".plist", (err, plist: JsonAsset) => {
                if (err) {
                    error(err.message)
                    return
                }
                assetManager.loadRemote(URL + ".png", (err, image: ImageAsset) => {
                    if (err) {
                        error(err.message)
                        return
                    }
                    let atlas = Image.transformTextureToSpriteAtlas(plist, image)
                    atlas.getSpriteFrames().forEach(_spriteFrame => {
                        // console.log(_spriteFrame);
                        // _Asset.set(_spriteFrame.name, _spriteFrame)
                    })
                    // this.checkAssetState = true;
                })
            })

        }

    }
    loadLogo(lang: string) {
        let formatArr = []
        formatArr.push(this.typePath + "Lang/" + lang)
        resources.load(formatArr, SpriteAtlas, (err, data: Array<SpriteAtlas>) => {
            // console.log(err);
            // console.log(data);

            data.forEach(_SpriteAtlas => {
                _SpriteAtlas.getSpriteFrames().forEach(_spriteFrame => {
                    // console.log(_spriteFrame);
                    this.data.set(_spriteFrame.name, _spriteFrame)
                })
            });
            // CheckLoading.getInstance.changeState(CheckLoadingType.isLogo, true)
            console.log(this.data);

            EventMng.emit(GameEvent.SetLogo, this.data.get("logo"))
        })
        return this
    }

}
export default new SpriteAtlasAsset();