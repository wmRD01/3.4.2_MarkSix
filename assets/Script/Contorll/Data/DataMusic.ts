import { AudioSource, NodePool, sys } from "cc";
enum ItemType {
    MusicBoolean = "_MusicBoolean",
    EffectBoolean = "_EffectBoolean",
    MusicVolume = "_MusicVolume",
    EffectVolume = "_EffectVolume",

}
export default class DataMusic {
    protected audioSourcePool: NodePool = new NodePool();
    protected audio_Music: AudioSource;
    protected audio_Effect: Map<string, AudioSource> = new Map();
    protected gameString: string

    protected _is_open_music: boolean = true;
    protected get is_open_music() {
        return this._is_open_music;
    }
    protected set is_open_music(value: boolean) {
        this._is_open_music = value
        // console.error(value);
        sys.localStorage.setItem(this.gameString + ItemType.MusicBoolean, String(this._is_open_music))
    }
    protected _is_open_effect: boolean = true;
    protected get is_open_effect() {
        return this._is_open_effect;
    }
    protected set is_open_effect(value: boolean) {
        this._is_open_effect = value
        sys.localStorage.setItem(this.gameString + ItemType.EffectBoolean, String(this._is_open_effect))
    }

    protected _volMusic: number = .8;
    public get volMusic() {
        return this._volMusic;
    }
    protected set volMusic(value: number) {
        this._volMusic = value
        sys.localStorage.setItem(this.gameString + ItemType.MusicVolume, this._volMusic.toString())
    }
    protected _volEffect: number = .3;
    public get volEffect() {
        return this._volEffect;
    }
    protected set volEffect(value: number) {
        this._volEffect = value
        sys.localStorage.setItem(this.gameString + ItemType.EffectVolume, this._volEffect.toString())
    }
}