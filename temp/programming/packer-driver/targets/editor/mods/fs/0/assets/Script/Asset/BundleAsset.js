System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BundleAsset, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfIAsset(extras) {
    _reporterNs.report("IAsset", "../Interface/IAsset", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98d61Ov1OxIjKxfup7Mfxvw", "BundleAsset", undefined);

      BundleAsset = class BundleAsset {
        constructor() {
          _defineProperty(this, "data", new Map());

          _defineProperty(this, "checkAssetState", void 0);

          _defineProperty(this, "bundleNames", ["PokerCard"]);
        }

        loadAsset() {// for (let index = 0; index < this.bundleNames.length; index++) {
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

      };

      _export("default", new BundleAsset());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BundleAsset.js.map