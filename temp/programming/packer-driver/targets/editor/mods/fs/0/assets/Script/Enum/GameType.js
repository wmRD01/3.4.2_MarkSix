System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameType;

  _export("GameType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1334aMnnNtHObvztIV/d/9n", "GameType", undefined);

      (function (GameType) {
        GameType[GameType["Normal"] = 0] = "Normal";
        GameType[GameType["Free"] = 1] = "Free";
      })(GameType || _export("GameType", GameType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameType.js.map