System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameWinerResult;

  _export("GameWinerResult", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a2cbobuntMs5L1deT/h8dD", "GameWinerResult", undefined);

      (function (GameWinerResult) {
        GameWinerResult[GameWinerResult["Player"] = 0] = "Player";
        GameWinerResult[GameWinerResult["Banker"] = 1] = "Banker";
        GameWinerResult[GameWinerResult["Tie"] = 2] = "Tie";
        GameWinerResult[GameWinerResult["Null"] = 99] = "Null";
      })(GameWinerResult || _export("GameWinerResult", GameWinerResult = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameWinerResult.js.map