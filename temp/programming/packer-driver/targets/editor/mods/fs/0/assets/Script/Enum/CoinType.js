System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CoinType;

  _export("CoinType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1c7fN56tFPd5An/vP6Rpi3", "CoinType", undefined);

      (function (CoinType) {
        CoinType[CoinType["Gold"] = 0] = "Gold";
        CoinType[CoinType["Silver"] = 1] = "Silver";
      })(CoinType || _export("CoinType", CoinType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CoinType.js.map