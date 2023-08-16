System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioClip, resources, MusicAsset, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfIAsset(extras) {
    _reporterNs.report("IAsset", "../Interface/IAsset", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AudioClip = _cc.AudioClip;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e7a4uHEXlAhZgi7sQysgAV", "MusicAsset", undefined);

      MusicAsset = class MusicAsset {
        constructor() {
          _defineProperty(this, "data", new Map());

          _defineProperty(this, "checkAssetState", false);

          _defineProperty(this, "typePath", "Music/");
        }

        loadAsset() {
          resources.loadDir(this.typePath, AudioClip, (err, data) => {
            // console.log(data);
            data.forEach(_AudioClip => {
              this.data.set(_AudioClip.name, _AudioClip);
            });
            this.checkAssetState = true;
          });
          return this;
        }

      };

      _export("default", new MusicAsset());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MusicAsset.js.map