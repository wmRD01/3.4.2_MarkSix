System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, URLVlaue, ln, bet, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    URLVlaue: void 0,
    ln: void 0,
    bet: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d88cygJltPKb46KPzsRDMf", "SendCommand", undefined);

      //#region WebSocket
      _export("URLVlaue", URLVlaue = class URLVlaue {
        constructor() {
          _defineProperty(this, "token", void 0);

          _defineProperty(this, "record", void 0);

          _defineProperty(this, "dc", void 0);

          _defineProperty(this, "agentId", void 0);

          _defineProperty(this, "GGID", void 0);

          _defineProperty(this, "lang", void 0);

          _defineProperty(this, "forceExchange", void 0);

          _defineProperty(this, "providerlogo", void 0);

          _defineProperty(this, "playerId", "");

          _defineProperty(this, "browser", void 0);

          _defineProperty(this, "browserVersion", void 0);

          _defineProperty(this, "os", void 0);

          _defineProperty(this, "osVersion", void 0);

          _defineProperty(this, "isMobile", void 0);

          _defineProperty(this, "isFastInGameRoom", void 0);

          _defineProperty(this, "demo", void 0);

          _defineProperty(this, "roomNo", void 0);
        }

      }); //#endregion
      //#region 大廳封包


      _export("ln", ln = class ln {
        constructor() {
          _defineProperty(this, "gameId", void 0);

          _defineProperty(this, "account", void 0);

          _defineProperty(this, "ident", void 0);

          _defineProperty(this, "language", void 0);

          _defineProperty(this, "key", void 0);
        }

      });

      _export("bet", bet = class bet {
        constructor() {
          _defineProperty(this, "betCode", void 0);
        }

      }); // http://inpoker.best/H5Game/game50002/web-mobile/index.html?
      // token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0aW1lIjoxNjkwMzQ0MzA2NDA4LCJ1aWQiOiIyNTc4NSIsImRjIjoiR1BHIiwiYWdlbnRJZCI6ImxmUmVTM05CbmZ6eSIsImJyYW5kSWQiOiJHUEciLCJicmFuZFRpdGxlIjoiR1BHIiwiZ2FtZUlkIjoiNTAwMDIiLCJjdXJyZW5jeSI6IkdQR1MiLCJpYXQiOjE2OTAzNDQzMDYsImV4cCI6MTY5MDM0NzkwNn0.hYz6jh5N57lWpqqBw2Gb3kXI43-0mUlbgjeOnYlEQAr533qx_J_wMKGsOw4QtQ1jRpRUjppt0oJcaAaNnK8aXCiEndy5svQdThcHjvJ8PRxGXJez6s2SVrSJpyyf5GbKs38xXd6ImkQr_WsKz93tOCGjHCDGC9e7n4vkJ96tdkg
      // record=https://mkqa-backendsystem.ceis.tw/wList
      // dc=GPG
      // agentId=lfReS3NBnfzy
      // GGID=5
      // lang=tw
      // forceExchange=false
      // providerlogo=true
      // playerId=fxBXTbFmDrSdxWADghPWdV


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SendCommand.js.map