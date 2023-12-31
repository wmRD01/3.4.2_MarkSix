System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, LobbyStateEvent;

  _export("LobbyStateEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e292dLNhjBCRIU7NnS0O9y+", "LobbyStateEvent", undefined);

      (function (LobbyStateEvent) {
        LobbyStateEvent["BallChooeseAction"] = "BallChooeseAction";
        LobbyStateEvent["ChangePointPage"] = "ChangePointPage";
        LobbyStateEvent["UpDateBall"] = "UpDateBall";
        LobbyStateEvent["AttackBall"] = "AttackBall";
        LobbyStateEvent["EditNickname"] = "EditNickname";
        LobbyStateEvent["EditPhone"] = "EditPhone";
        LobbyStateEvent["EditEmail"] = "EditEmail";
        LobbyStateEvent["EditUpdate"] = "EditUpdate";
        LobbyStateEvent["ChangeBallButtonState"] = "ChangeBallButtonState";
        LobbyStateEvent["ChangeConfirmState"] = "ChangeConfirmState";
        LobbyStateEvent["NextIssueID"] = "NextIssueID";
      })(LobbyStateEvent || _export("LobbyStateEvent", LobbyStateEvent = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LobbyStateEvent.js.map