System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NodePool, sys, DataMusic, _crd, ItemType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      NodePool = _cc.NodePool;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b809ZIAJ1Gq6KMPjpuYeRm", "DataMusic", undefined);

      (function (ItemType) {
        ItemType["MusicBoolean"] = "_MusicBoolean";
        ItemType["EffectBoolean"] = "_EffectBoolean";
        ItemType["MusicVolume"] = "_MusicVolume";
        ItemType["EffectVolume"] = "_EffectVolume";
      })(ItemType || (ItemType = {}));

      _export("default", DataMusic = class DataMusic {
        constructor() {
          _defineProperty(this, "audioSourcePool", new NodePool());

          _defineProperty(this, "audio_Music", void 0);

          _defineProperty(this, "audio_Effect", new Map());

          _defineProperty(this, "gameString", void 0);

          _defineProperty(this, "_is_open_music", true);

          _defineProperty(this, "_is_open_effect", true);

          _defineProperty(this, "_volMusic", .8);

          _defineProperty(this, "_volEffect", .3);
        }

        get is_open_music() {
          return this._is_open_music;
        }

        set is_open_music(value) {
          this._is_open_music = value; // console.error(value);

          sys.localStorage.setItem(this.gameString + ItemType.MusicBoolean, String(this._is_open_music));
        }

        get is_open_effect() {
          return this._is_open_effect;
        }

        set is_open_effect(value) {
          this._is_open_effect = value;
          sys.localStorage.setItem(this.gameString + ItemType.EffectBoolean, String(this._is_open_effect));
        }

        get volMusic() {
          return this._volMusic;
        }

        set volMusic(value) {
          this._volMusic = value;
          sys.localStorage.setItem(this.gameString + ItemType.MusicVolume, this._volMusic.toString());
        }

        get volEffect() {
          return this._volEffect;
        }

        set volEffect(value) {
          this._volEffect = value;
          sys.localStorage.setItem(this.gameString + ItemType.EffectVolume, this._volEffect.toString());
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataMusic.js.map