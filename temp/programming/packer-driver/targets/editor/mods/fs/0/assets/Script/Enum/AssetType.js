System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, AssetType;

  _export("AssetType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0d1f7AZT1BdId/PqVrFOpS", "AssetType", undefined);

      (function (AssetType) {
        AssetType[AssetType["Music"] = 0] = "Music";
        AssetType[AssetType["Sprite"] = 1] = "Sprite";
        AssetType[AssetType["Spine"] = 2] = "Spine";
        AssetType[AssetType["Prefab"] = 3] = "Prefab";
        AssetType[AssetType["SpriteAtlast"] = 4] = "SpriteAtlast";
      })(AssetType || _export("AssetType", AssetType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AssetType.js.map