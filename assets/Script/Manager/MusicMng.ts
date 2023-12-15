import { AudioClip, AudioSource, Node, random, sys } from "cc";
import DataMusic from "../Contorll/Data/DataMusic";
import { AssetType } from "../Enum/AssetType";
import { CheckLoadingType } from "../Enum/CheckLoadingType";
import { EffectType } from "../Enum/EffectType";
import CheckLoading from "../Model/CheckLoading";
import GameData from "../Model/GameData";
import PublicData from "../Model/PublicData";
import AssetMng from "./AssetMng";

enum ItemType {
    MusicBoolean = "_MusicBoolean",
    EffectBoolean = "_EffectBoolean",
    MusicVolume = "_MusicVolume",
    EffectVolume = "_EffectVolume",

}

class MusicMng extends DataMusic {

    async init() {
        await AssetMng.waitStateCheck(AssetType.Music)
        this.gameString = GameData.getInstance.gameID + "_" + GameData.getInstance.contentId
        this.audio_Music = new Node().addComponent(AudioSource);
        this.initValue();
        CheckLoading.getInstance.endWork(CheckLoadingType.isMusic)
        // console.log(this.getEffectState());
    }
    // async init(): Promise<void> {
    //     return new Promise<void>(async (resolve, reject) => {

    //         await AssetMng.waitStateCheck(AssetType.Music)
    //         this.gameString = GameData.getInstance.gameID + "_" + GameData.getInstance.contentId
    //         this.audio_Music = new Node().addComponent(AudioSource);
    //         this.initValue();

    //         resolve()
    //         // console.log(this.getEffectState());

    //     })
    // }

    private initValue() {
        //聲音布林初始化
        if (sys.localStorage.getItem(this.gameString + ItemType.MusicBoolean) != null)
            this.is_open_music = sys.localStorage.getItem(this.gameString + ItemType.MusicBoolean) == String(true) ? true : false
        else
            sys.localStorage.setItem(this.gameString + ItemType.MusicBoolean, String(this.is_open_music))
        //音效布林初始化
        if (sys.localStorage.getItem(this.gameString + ItemType.EffectBoolean) != null)
            this.is_open_effect = sys.localStorage.getItem(this.gameString + ItemType.EffectBoolean) == String(true) ? true : false
        else
            sys.localStorage.setItem(this.gameString + ItemType.EffectBoolean, String(this.is_open_effect))
        //聲音初始化
        if (sys.localStorage.getItem(this.gameString + ItemType.MusicVolume) != null)
            this.volMusic = Number(sys.localStorage.getItem(this.gameString + ItemType.MusicVolume))
        else
            sys.localStorage.setItem(this.gameString + ItemType.MusicVolume, this.volMusic.toString())
        //音效初始化
        if (sys.localStorage.getItem(this.gameString + ItemType.EffectVolume) != null)
            this.volEffect = Number(sys.localStorage.getItem(this.gameString + ItemType.EffectVolume))
        else
            sys.localStorage.setItem(this.gameString + ItemType.EffectVolume, this.volEffect.toString())

        this.switchEffect(this.is_open_effect)
        this.switchMusic(this.is_open_music)
        this.musicVolSet(this.volMusic)
        this.effectVolSet(this.volEffect)

    }
    private getClip(name: string): AudioClip {
        return AssetMng.AssetClass.get(AssetType.Music).data.get(name);
    }

    switchMusic(_boolean?: boolean): boolean {
        this.is_open_music = _boolean != null ? _boolean : !this.is_open_music;
        this.musicVolSet();
        return this.getMusicState();
    }

    musicPlay(musicName: string, playLoop = true): void {
        if (!PublicData.getInstance.isClickScreen) return


        if (this.audio_Music.state === 1 && musicName === this.audio_Music.clip.name) return
        this.musicStop();
        this.audio_Music.clip = this.getClip(musicName);
        this.audio_Music.loop = playLoop;
        this.audio_Music.play()
        // console.log(this.audio_Music.clip.name);

    }

    musicStop(): void {
        this.audio_Music.stop();
    }

    musicVolSet(vol?: number): void {
        if (vol) {
            this._volMusic = vol;
        }
        this.audio_Music.volume = this.getMusicState() ? this._volMusic : 0;
    }

    getMusicState(): boolean {
        return this.is_open_music;
    }


    switchEffect(_boolean?: boolean): boolean {
        this.is_open_effect = _boolean != null ? _boolean : !this.is_open_effect
        this.effectVolSet();
        return this.getEffectState();
    }


    async sequenceEffectPlay(array: Array<EffectType>) {
        if (!PublicData.getInstance.isClickScreen) return
        for (let index = 0; index < array.length; index++) {
            await this.sequenceEffect(array[index])
        }
    }
    private async sequenceEffect(effectName: string) {
        return new Promise<void>((resolve, reject) => {
            let getRandom = this.checkEffectRandom(effectName, random())
            let audio: AudioSource = this.getAudioSourcePool()
            audio.node.targetOff(audio.node)
            audio.clip = this.getClip(effectName)
            audio.volume = this.getEffectState() ? this._volEffect : 0
            audio.play()
            let formatName = `${effectName}:${getRandom}`
            audio.node.once(AudioSource.EventType.ENDED, () => {
                this.putAudioSourcePool(audio, formatName)
                resolve()
            }, this)
        })
    }
    effectPlay(effectName: string, playLoop: boolean = false): void {
        if (!PublicData.getInstance.isClickScreen) return
        //撥放音樂
        let getRandom = this.checkEffectRandom(effectName, random())
        let audio: AudioSource = this.getAudioSourcePool()
        audio.node.targetOff(audio.node)
        audio.loop = playLoop
        audio.clip = this.getClip(effectName)
        audio.volume = this.getEffectState() ? this._volEffect : 0
        audio.play()
        let formatName = `${effectName}:${getRandom}`
        //資料儲存
        this.audio_Effect.set(formatName, audio)
        if (!playLoop)
            audio.node.once(AudioSource.EventType.ENDED, () => { this.putAudioSourcePool(audio, formatName) }, this)

    }

    effectStopAll(): void {
        this.audio_Effect.forEach((audioSource, _effectName) => {
            this.putAudioSourcePool(audioSource, _effectName)
        })
        this.audio_Effect.clear();//確認清乾淨
    }

    effectStop(effectName: string): void {
        this.audio_Effect.forEach((audioSource, _effectName) => {
            if (_effectName.split(":")[0] == effectName) {
                this.putAudioSourcePool(audioSource, _effectName)
            }
        })
    }

    effectVolSet(vol?: number): void {
        if (vol) {
            this._volEffect = vol;
        }
        this.audio_Effect.forEach(audioSource => {
            audioSource.volume = this.getEffectState() ? this._volEffect : 0;
        });
    }

    getEffectState(): boolean {
        return this.is_open_effect;
    }

    private checkEffectRandom(effectName: string, number: number) {
        if (this.audio_Effect.has(`${effectName}:${number}}`))
            return this.checkEffectRandom(effectName, random())
        else
            return number
    }

    private getAudioSourcePool() {
        if (this.audioSourcePool.size() > 0) {
            return this.audioSourcePool.get().getComponent(AudioSource);
        }
        else {
            return new Node().addComponent(AudioSource)
        }
    }
    private putAudioSourcePool(_audioSource: AudioSource, _effectName: string) {
        _audioSource.stop()
        this.audioSourcePool.put(_audioSource.node)
        this.audio_Effect.delete(_effectName)
    }

}

export default new MusicMng();

enum onType {

}