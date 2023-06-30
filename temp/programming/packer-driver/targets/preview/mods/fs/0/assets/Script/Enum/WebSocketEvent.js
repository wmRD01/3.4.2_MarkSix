System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, WebSocketEvent;

  _export("WebSocketEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3ef0uZxFFHy7owD08wQGyx", "WebSocketEvent", undefined);

      (function (WebSocketEvent) {
        WebSocketEvent["Login"] = "Login";
        WebSocketEvent["WebSocketSendCommand"] = "WebSocketSendCommand";
        WebSocketEvent["BackHome"] = "BackHome";
        WebSocketEvent["CloseWindow"] = "CloseWindow";
        WebSocketEvent["ViewRecord"] = "ViewRecord";
        WebSocketEvent["StaoredValue"] = "StaoredValue";
      })(WebSocketEvent || _export("WebSocketEvent", WebSocketEvent = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=WebSocketEvent.js.map