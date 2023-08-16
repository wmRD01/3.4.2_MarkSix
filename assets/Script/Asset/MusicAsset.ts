import { AudioClip, resources } from "cc";
import IAsset from "../Interface/IAsset";

class MusicAsset implements IAsset {
    data: Map<string, AudioClip> = new Map();
    checkAssetState: boolean = false;
    typePath: string = "Music/";
    loadAsset() {
        resources.loadDir(this.typePath, AudioClip, (err, data: Array<AudioClip>) => {
            // console.log(data);

            data.forEach(_AudioClip => {
                this.data.set(_AudioClip.name, _AudioClip);
            });


            this.checkAssetState = true;


        })
        return this
    }

}
export default new MusicAsset();