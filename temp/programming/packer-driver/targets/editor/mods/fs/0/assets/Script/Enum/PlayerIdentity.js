System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, PlayerIdentity;

  _export("PlayerIdentity", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca181cGtzVHGpttPiO8qH2R", "PlayerIdentity", undefined);

      (function (PlayerIdentity) {
        PlayerIdentity[PlayerIdentity["Member"] = 0] = "Member";
        PlayerIdentity[PlayerIdentity["Guest"] = 1] = "Guest";
      })(PlayerIdentity || _export("PlayerIdentity", PlayerIdentity = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerIdentity.js.map