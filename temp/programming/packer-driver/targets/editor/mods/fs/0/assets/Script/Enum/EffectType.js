System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EffectType;

  _export("EffectType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "693475NcW1HGJioH9wwstbA", "EffectType", undefined);

      (function (EffectType) {
        EffectType["AwaitingStart"] = "AwaitingStart";
        EffectType["BankerWin"] = "BankerWin";
        EffectType["BnakerPairWin"] = "BnakerPairWin";
        EffectType["GameOver"] = "GameOver";
        EffectType["PlayerPairWin"] = "PlayerPairWin";
        EffectType["PlayerWin"] = "PlayerWin";
        EffectType["StartBetting"] = "StartBetting";
        EffectType["StopBetting"] = "StopBetting";
        EffectType["Tie"] = "Tie";
      })(EffectType || _export("EffectType", EffectType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EffectType.js.map