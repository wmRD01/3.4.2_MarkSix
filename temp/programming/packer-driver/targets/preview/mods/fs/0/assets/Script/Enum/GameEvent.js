System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameEvent;

  _export("GameEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32947as8rhDaYY7h+8WIgQ/", "GameEvent", undefined);

      (function (GameEvent) {
        GameEvent["CloseGameLoad"] = "CloseGameLoad";
        GameEvent["OpenMenu"] = "OpenMenu";
        GameEvent["ShowSoundSet"] = "ShowSoundSet";
        GameEvent["ShowChangeNickname"] = "ShowChangeNickname";
        GameEvent["ShowExchange"] = "ShowExchange";
        GameEvent["InGameRoom"] = "InGameRoom";
        GameEvent["SetLogo"] = "SetLogo";
        GameEvent["SystemMessage"] = "SystemMessage";
        GameEvent["SetLanguage"] = "SetLanguage";
        GameEvent["ResetView"] = "ResetView";
        GameEvent["ControllSandCommend"] = "ControllSandCommend";
        GameEvent["SetOrientation"] = "SetOrientation";
        GameEvent["Test"] = "Test";
      })(GameEvent || _export("GameEvent", GameEvent = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameEvent.js.map