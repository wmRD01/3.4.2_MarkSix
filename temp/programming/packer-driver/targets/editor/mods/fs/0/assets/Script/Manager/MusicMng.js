System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioSource, Node, random, sys, DataMusic, AssetType, CheckLoadingType, CheckLoading, GameData, PublicData, AssetMng, MusicMng, _crd, ItemType, onType;

  function _reportPossibleCrUseOfDataMusic(extras) {
    _reporterNs.report("DataMusic", "../Contorll/Data/DataMusic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoadingType(extras) {
    _reporterNs.report("CheckLoadingType", "../Enum/CheckLoadingType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../Enum/EffectType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoading(extras) {
    _reporterNs.report("CheckLoading", "../Model/CheckLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Model/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "./AssetMng", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
      random = _cc.random;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      DataMusic = _unresolved_2.default;
    }, function (_unresolved_3) {
      AssetType = _unresolved_3.AssetType;
    }, function (_unresolved_4) {
      CheckLoadingType = _unresolved_4.CheckLoadingType;
    }, function (_unresolved_5) {
      CheckLoading = _unresolved_5.default;
    }, function (_unresolved_6) {
      GameData = _unresolved_6.default;
    }, function (_unresolved_7) {
      PublicData = _unresolved_7.default;
    }, function (_unresolved_8) {
      AssetMng = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16081chWbBKOa9aYNjzSuR6", "MusicMng", undefined);

      (function (ItemType) {
        ItemType["MusicBoolean"] = "_MusicBoolean";
        ItemType["EffectBoolean"] = "_EffectBoolean";
        ItemType["MusicVolume"] = "_MusicVolume";
        ItemType["EffectVolume"] = "_EffectVolume";
      })(ItemType || (ItemType = {}));

      MusicMng = class MusicMng extends (_crd && DataMusic === void 0 ? (_reportPossibleCrUseOfDataMusic({
        error: Error()
      }), DataMusic) : DataMusic) {
        async init() {
          await (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Music);
          this.gameString = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.gameID + "_" + (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.contentId;
          this.audio_Music = new Node().addComponent(AudioSource);
          this.initValue();
          (_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.endWork((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isMusic); // console.log(this.getEffectState());
        } // async init(): Promise<void> {
        //     return new Promise<void>(async (resolve, reject) => {
        //         await AssetMng.waitStateCheck(AssetType.Music)
        //         this.gameString = GameData.getInstance.gameID + "_" + GameData.getInstance.contentId
        //         this.audio_Music = new Node().addComponent(AudioSource);
        //         this.initValue();
        //         resolve()
        //         // console.log(this.getEffectState());
        //     })
        // }


        initValue() {
          //聲音布林初始化
          if (sys.localStorage.getItem(this.gameString + ItemType.MusicBoolean) != null) this.is_open_music = sys.localStorage.getItem(this.gameString + ItemType.MusicBoolean) == String(true) ? true : false;else sys.localStorage.setItem(this.gameString + ItemType.MusicBoolean, String(this.is_open_music)); //音效布林初始化

          if (sys.localStorage.getItem(this.gameString + ItemType.EffectBoolean) != null) this.is_open_effect = sys.localStorage.getItem(this.gameString + ItemType.EffectBoolean) == String(true) ? true : false;else sys.localStorage.setItem(this.gameString + ItemType.EffectBoolean, String(this.is_open_effect)); //聲音初始化

          if (sys.localStorage.getItem(this.gameString + ItemType.MusicVolume) != null) this.volMusic = Number(sys.localStorage.getItem(this.gameString + ItemType.MusicVolume));else sys.localStorage.setItem(this.gameString + ItemType.MusicVolume, this.volMusic.toString()); //音效初始化

          if (sys.localStorage.getItem(this.gameString + ItemType.EffectVolume) != null) this.volEffect = Number(sys.localStorage.getItem(this.gameString + ItemType.EffectVolume));else sys.localStorage.setItem(this.gameString + ItemType.EffectVolume, this.volEffect.toString());
          this.switchEffect(this.is_open_effect);
          this.switchMusic(this.is_open_music);
          this.musicVolSet(this.volMusic);
          this.effectVolSet(this.volEffect);
        }

        getClip(name) {
          return (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Music).data.get(name);
        }

        switchMusic(_boolean) {
          this.is_open_music = _boolean != null ? _boolean : !this.is_open_music;
          this.musicVolSet();
          return this.getMusicState();
        }

        musicPlay(musicName, playLoop = true) {
          if (!(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isClickScreen) return;
          if (this.audio_Music.state === 1 && musicName === this.audio_Music.clip.name) return;
          this.musicStop();
          this.audio_Music.clip = this.getClip(musicName);
          this.audio_Music.loop = playLoop;
          this.audio_Music.play(); // console.log(this.audio_Music.clip.name);
        }

        musicStop() {
          this.audio_Music.stop();
        }

        musicVolSet(vol) {
          if (vol) {
            this._volMusic = vol;
          }

          this.audio_Music.volume = this.getMusicState() ? this._volMusic : 0;
        }

        getMusicState() {
          return this.is_open_music;
        }

        switchEffect(_boolean) {
          this.is_open_effect = _boolean != null ? _boolean : !this.is_open_effect;
          this.effectVolSet();
          return this.getEffectState();
        }

        async sequenceEffectPlay(array) {
          if (!(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isClickScreen) return;

          for (let index = 0; index < array.length; index++) {
            await this.sequenceEffect(array[index]);
          }
        }

        async sequenceEffect(effectName) {
          return new Promise((resolve, reject) => {
            let getRandom = this.checkEffectRandom(effectName, random());
            let audio = this.getAudioSourcePool();
            audio.node.targetOff(audio.node);
            audio.clip = this.getClip(effectName);
            audio.volume = this.getEffectState() ? this._volEffect : 0;
            audio.play();
            let formatName = `${effectName}:${getRandom}`;
            audio.node.once(AudioSource.EventType.ENDED, () => {
              this.putAudioSourcePool(audio, formatName);
              resolve();
            }, this);
          });
        }

        effectPlay(effectName, playLoop = false) {
          if (!(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isClickScreen) return; //撥放音樂

          let getRandom = this.checkEffectRandom(effectName, random());
          let audio = this.getAudioSourcePool();
          audio.node.targetOff(audio.node);
          audio.loop = playLoop;
          audio.clip = this.getClip(effectName);
          audio.volume = this.getEffectState() ? this._volEffect : 0;
          audio.play();
          let formatName = `${effectName}:${getRandom}`; //資料儲存

          this.audio_Effect.set(formatName, audio);
          if (!playLoop) audio.node.once(AudioSource.EventType.ENDED, () => {
            this.putAudioSourcePool(audio, formatName);
          }, this);
        }

        effectStopAll() {
          this.audio_Effect.forEach((audioSource, _effectName) => {
            this.putAudioSourcePool(audioSource, _effectName);
          });
          this.audio_Effect.clear(); //確認清乾淨
        }

        effectStop(effectName) {
          this.audio_Effect.forEach((audioSource, _effectName) => {
            if (_effectName.split(":")[0] == effectName) {
              this.putAudioSourcePool(audioSource, _effectName);
            }
          });
        }

        effectVolSet(vol) {
          if (vol) {
            this._volEffect = vol;
          }

          this.audio_Effect.forEach(audioSource => {
            audioSource.volume = this.getEffectState() ? this._volEffect : 0;
          });
        }

        getEffectState() {
          return this.is_open_effect;
        }

        checkEffectRandom(effectName, number) {
          if (this.audio_Effect.has(`${effectName}:${number}}`)) return this.checkEffectRandom(effectName, random());else return number;
        }

        getAudioSourcePool() {
          if (this.audioSourcePool.size() > 0) {
            return this.audioSourcePool.get().getComponent(AudioSource);
          } else {
            return new Node().addComponent(AudioSource);
          }
        }

        putAudioSourcePool(_audioSource, _effectName) {
          _audioSource.stop();

          this.audioSourcePool.put(_audioSource.node);
          this.audio_Effect.delete(_effectName);
        }

      };

      _export("default", new MusicMng());

      (function (onType) {})(onType || (onType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MusicMng.js.map