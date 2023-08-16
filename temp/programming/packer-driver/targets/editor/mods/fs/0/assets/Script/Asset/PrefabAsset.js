System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Prefab, resources, PrefabAsset, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfIAsset(extras) {
    _reporterNs.report("IAsset", "../Interface/IAsset", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48b29Len4dMKLYmU8ELpqnk", "PrefabAsset", undefined);

      PrefabAsset = class PrefabAsset {
        constructor() {
          _defineProperty(this, "data", new Map());

          _defineProperty(this, "checkAssetState", false);

          _defineProperty(this, "typePath", "Prefab/");
        }

        loadAsset() {
          resources.loadDir(this.typePath, Prefab, (err, data) => {
            data.forEach(_Prefab => {
              // console.log(_Prefab.data.name);
              // console.log(_Prefab.name);
              this.data.set(_Prefab.data._name, _Prefab);
            });
            this.checkAssetState = true; // console.log("Prefab完成");
          });
          return this;
        }

      };

      _export("default", new PrefabAsset());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PrefabAsset.js.map