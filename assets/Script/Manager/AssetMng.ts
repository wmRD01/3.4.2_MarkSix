import IAsset from "../Interface/IAsset";
import MusicAsset from "../Asset/MusicAsset";
import SpriteAsset from "../Asset/SpriteAsset";
import SpriteAtlasAsset from "../Asset/SpriteAtlasAsset";
import { AssetType } from "../Enum/AssetType";
import PrefabAsset from "../Asset/PrefabAsset";

class AssetMng {
    AssetClass: Map<AssetType, IAsset> = new Map();
    // AssetClass: Array<IAsset> = []
    isAllOK: boolean;
    startLoad() {
        this.AssetClass.set(AssetType.Sprite, SpriteAsset.loadAsset());
        this.AssetClass.set(AssetType.Music, MusicAsset.loadAsset());
        return
        this.AssetClass.set(AssetType.SpriteAtlast, SpriteAtlasAsset.loadAsset());
        this.AssetClass.set(AssetType.Prefab, PrefabAsset.loadAsset());
        // resources.load()
    }

    loadLogoAsset(lang: string) {
        SpriteAsset.loadLogo(lang)
    }
    checkState(type: AssetType) {
        // console.log(type);
        // console.log(this.AssetClass);
        try {
            return this.AssetClass.get(type).checkAssetState
        } catch (error) {
            return undefined
        }
    }

    //避免發生位初始化時就尋訪參數
    waitInit(type: AssetType): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this.AssetClass.get(type) != undefined) return resolve()
            let check = false
            let repet = setInterval(() => {
                if (this.AssetClass.get(type) != undefined) check = true
                if (check) {
                    clearInterval(repet);
                    resolve();
                }
            }, 16)
        })
    }
    waitStateCheck(type: AssetType): Promise<void> {
        return new Promise<void>((resolve: Function) => {
            let getClass = this.AssetClass.get(type)
            if (getClass.checkAssetState) return resolve()
            let check = false;
            let repet = setInterval(() => {
                if (getClass.checkAssetState) check = true
                if (check) {
                    clearInterval(repet);
                    resolve();
                }
            }, 16)
        })
    }

}
export default new AssetMng();