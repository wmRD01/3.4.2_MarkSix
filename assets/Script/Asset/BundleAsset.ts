import { assetManager, AssetManager, resources, SpriteFrame } from "cc";
import IAsset from "../Interface/IAsset";

class BundleAsset implements IAsset {
    data: Map<string, AssetManager.Bundle> = new Map();
    checkAssetState: boolean;
    bundleNames: string[] = [
        "PokerCard"
    ];

    loadAsset() {
        // for (let index = 0; index < this.bundleNames.length; index++) {
        //     assetManager.loadBundle("PokerCard", (err, bundle) => {
        //         console.log(err, bundle);

        //         // bundle.load('xxx');
        //     });


        // }
        // assetManager.loadBundle("Image", (err, bundle: AssetManager.Bundle) => {
        //     console.error(err, bundle);
        //     bundle.load('auto-atlas', (err, data: SpriteAtlas) => {
        //         console.error(data.getSpriteFrame('p1'));

        //         // console.error(data.getSpriteFrames());

        //     })
        //     // bundle.load('xxx');
        // });
        // resources.loadDir(this.typePath, SpriteFrame, (err, data: Array<SpriteFrame>) => {
        //     data.forEach(_SprtieFrame => {
        //         this.data.set(_SprtieFrame.name, _SprtieFrame)
        //     });
        //     this.checkAssetState = true;
        //     console.log(data);
        // })


        // return this
    }

}
export default new BundleAsset();