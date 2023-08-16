System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MusicAsset, SpriteAsset, SpriteAtlasAsset, AssetType, PrefabAsset, AssetMng, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfIAsset(extras) {
    _reporterNs.report("IAsset", "../Interface/IAsset", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicAsset(extras) {
    _reporterNs.report("MusicAsset", "../Asset/MusicAsset", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteAsset(extras) {
    _reporterNs.report("SpriteAsset", "../Asset/SpriteAsset", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteAtlasAsset(extras) {
    _reporterNs.report("SpriteAtlasAsset", "../Asset/SpriteAtlasAsset", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabAsset(extras) {
    _reporterNs.report("PrefabAsset", "../Asset/PrefabAsset", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MusicAsset = _unresolved_2.default;
    }, function (_unresolved_3) {
      SpriteAsset = _unresolved_3.default;
    }, function (_unresolved_4) {
      SpriteAtlasAsset = _unresolved_4.default;
    }, function (_unresolved_5) {
      AssetType = _unresolved_5.AssetType;
    }, function (_unresolved_6) {
      PrefabAsset = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71a30au3mNFsYYrFyln7dHS", "AssetMng", undefined);

      AssetMng = class AssetMng {
        constructor() {
          _defineProperty(this, "AssetClass", new Map());

          _defineProperty(this, "isAllOK", void 0);
        }

        startLoad() {
          this.AssetClass.set((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite, (_crd && SpriteAsset === void 0 ? (_reportPossibleCrUseOfSpriteAsset({
            error: Error()
          }), SpriteAsset) : SpriteAsset).loadAsset());
          this.AssetClass.set((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Music, (_crd && MusicAsset === void 0 ? (_reportPossibleCrUseOfMusicAsset({
            error: Error()
          }), MusicAsset) : MusicAsset).loadAsset());
          return;
          this.AssetClass.set((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).SpriteAtlast, (_crd && SpriteAtlasAsset === void 0 ? (_reportPossibleCrUseOfSpriteAtlasAsset({
            error: Error()
          }), SpriteAtlasAsset) : SpriteAtlasAsset).loadAsset());
          this.AssetClass.set((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Prefab, (_crd && PrefabAsset === void 0 ? (_reportPossibleCrUseOfPrefabAsset({
            error: Error()
          }), PrefabAsset) : PrefabAsset).loadAsset()); // resources.load()
        }

        loadLogoAsset(lang) {
          (_crd && SpriteAsset === void 0 ? (_reportPossibleCrUseOfSpriteAsset({
            error: Error()
          }), SpriteAsset) : SpriteAsset).loadLogo(lang);
        }

        checkState(type) {
          // console.log(type);
          // console.log(this.AssetClass);
          try {
            return this.AssetClass.get(type).checkAssetState;
          } catch (error) {
            return undefined;
          }
        } //避免發生位初始化時就尋訪參數


        waitInit(type) {
          return new Promise((resolve, reject) => {
            if (this.AssetClass.get(type) != undefined) return resolve();
            let check = false;
            let repet = setInterval(() => {
              if (this.AssetClass.get(type) != undefined) check = true;

              if (check) {
                clearInterval(repet);
                resolve();
              }
            }, 16);
          });
        }

        waitStateCheck(type) {
          return new Promise(resolve => {
            let getClass = this.AssetClass.get(type);
            if (getClass.checkAssetState) return resolve();
            let check = false;
            let repet = setInterval(() => {
              if (getClass.checkAssetState) check = true;

              if (check) {
                clearInterval(repet);
                resolve();
              }
            }, 16);
          });
        }

      };

      _export("default", new AssetMng());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AssetMng.js.map