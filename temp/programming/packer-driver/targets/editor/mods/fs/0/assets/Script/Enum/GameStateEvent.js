System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameStateEvent;

  _export("GameStateEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e62c6onXvFOprJVT9jhdwzy", "GameStateEvent", undefined);

      (function (GameStateEvent) {
        GameStateEvent["UpdataSence"] = "UpdataSence";
        GameStateEvent["OpenBet"] = "OpenBet";
        GameStateEvent["UpdateTime"] = "UpdateTime";
        GameStateEvent["UpdateTabelData"] = "UpdateTabelData";
        GameStateEvent["CloseBet"] = "CloseBet";
        GameStateEvent["BackBet"] = "BackBet";
        GameStateEvent["ClientBet"] = "ClientBet";
        GameStateEvent["BetClear"] = "BetClear";
        GameStateEvent["ShowdownCard"] = "ShowdownCard";
        GameStateEvent["SquintCard"] = "SquintCard";
        GameStateEvent["RoundResult"] = "RoundResult";
        GameStateEvent["EndRound"] = "EndRound";
        GameStateEvent["EndBoot"] = "EndBoot";
        GameStateEvent["ReProcessing"] = "ReProcessing";
        GameStateEvent["GameMessage"] = "GameMessage";
        GameStateEvent["EnterHover"] = "EnterHover";
        GameStateEvent["ExitHover"] = "ExitHover";
        GameStateEvent["UpdateCoin"] = "UpdateCoin";
        GameStateEvent["UpdataCardSequence"] = "UpdataCardSequence";
        GameStateEvent["OpenRoad"] = "OpenRoad";
        GameStateEvent["CloseRoad"] = "CloseRoad";
        GameStateEvent["ClientTouchTable"] = "ClientTouchTable";
        GameStateEvent["TextAnimation"] = "TextAnimation";
        GameStateEvent["NotificationChip"] = "NotificationChip";
      })(GameStateEvent || _export("GameStateEvent", GameStateEvent = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameStateEvent.js.map