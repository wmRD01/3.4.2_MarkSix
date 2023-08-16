import { Prefab, resources } from "cc";
import IAsset from "../Interface/IAsset";

class PrefabAsset implements IAsset {
    data: Map<string, Prefab> = new Map();
    checkAssetState: boolean = false;
    typePath: string = "Prefab/";
    loadAsset() {
        resources.loadDir(this.typePath, Prefab, (err, data: Array<Prefab>) => {
            data.forEach(_Prefab => {
                // console.log(_Prefab.data.name);

                // console.log(_Prefab.name);

                this.data.set(_Prefab.data._name, _Prefab);
            });
            this.checkAssetState = true;
            // console.log("Prefab完成");

        })
        return this
    }

}
export default new PrefabAsset();