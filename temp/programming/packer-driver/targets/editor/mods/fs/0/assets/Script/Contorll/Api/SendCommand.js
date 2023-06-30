System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, URLVlaue, ln, ucnn, excr, excc, usdis, sschk, ssntf, ssdis, gonm, lbll, lbrl, lbsr, pwlby, goin, gori, grre, grrl, gbet, gbbk, gbcl, gbrt, gbcf, gbop, gbob, gpp, gpe, gs1, gs8, gs9, gs10, gs11, gs12, gs13, gs14, gs15, gs17, gs18, gs20, gs21, gs23, gs24, gs25, gs30, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    URLVlaue: void 0,
    ln: void 0,
    ucnn: void 0,
    excr: void 0,
    excc: void 0,
    usdis: void 0,
    sschk: void 0,
    ssntf: void 0,
    ssdis: void 0,
    gonm: void 0,
    lbll: void 0,
    lbrl: void 0,
    lbsr: void 0,
    pwlby: void 0,
    goin: void 0,
    gori: void 0,
    grre: void 0,
    grrl: void 0,
    gbet: void 0,
    gbbk: void 0,
    gbcl: void 0,
    gbrt: void 0,
    gbcf: void 0,
    gbop: void 0,
    gbob: void 0,
    gpp: void 0,
    gpe: void 0,
    gs1: void 0,
    gs8: void 0,
    gs9: void 0,
    gs10: void 0,
    gs11: void 0,
    gs12: void 0,
    gs13: void 0,
    gs14: void 0,
    gs15: void 0,
    gs17: void 0,
    gs18: void 0,
    gs20: void 0,
    gs21: void 0,
    gs23: void 0,
    gs24: void 0,
    gs25: void 0,
    gs30: void 0
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
          _defineProperty(this, "loginType", void 0);

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

      _export("ucnn", ucnn = class ucnn {
        constructor() {
          _defineProperty(this, "nickname", void 0);
        }

      });

      _export("excr", excr = class excr {
        constructor() {
          _defineProperty(this, "coinType", void 0);
        }

      });

      _export("excc", excc = class excc {
        constructor() {
          _defineProperty(this, "coinType", void 0);

          _defineProperty(this, "money", void 0);
        }

      }); //#endregion
      //#region 房內共用封包
      //#endregion
      //#region 系統封包


      _export("usdis", usdis = class usdis {});

      _export("sschk", sschk = class sschk {});

      _export("ssntf", ssntf = class ssntf {});

      _export("ssdis", ssdis = class ssdis {}); //#endregion
      //#region 遊戲封包


      _export("gonm", gonm = class gonm {});

      _export("lbll", lbll = class lbll {
        constructor() {
          _defineProperty(this, "contentId", void 0);

          _defineProperty(this, "type", void 0);
        }

      });

      _export("lbrl", lbrl = class lbrl {
        constructor() {
          _defineProperty(this, "contentId", void 0);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "level", void 0);
        }

      });

      _export("lbsr", lbsr = class lbsr {
        constructor() {
          _defineProperty(this, "contentId", void 0);

          _defineProperty(this, "roomNo", void 0);

          _defineProperty(this, "seatNo", 0);

          _defineProperty(this, "password", "");
        }

      });

      _export("pwlby", pwlby = class pwlby {});

      _export("goin", goin = class goin {});

      ;

      _export("gori", gori = class gori {});

      _export("grre", grre = class grre {});

      _export("grrl", grrl = class grrl {});

      _export("gbet", gbet = class gbet {
        constructor() {
          _defineProperty(this, "kind", void 0);

          _defineProperty(this, "chip", void 0);
        }

      });

      _export("gbbk", gbbk = class gbbk {});

      _export("gbcl", gbcl = class gbcl {});

      _export("gbrt", gbrt = class gbrt {});

      _export("gbcf", gbcf = class gbcf {});

      _export("gbop", gbop = class gbop {});

      _export("gbob", gbob = class gbob {});

      _export("gpp", gpp = class gpp {
        constructor() {
          _defineProperty(this, "info", void 0);
        }

      });

      _export("gpe", gpe = class gpe {});

      _export("gs1", gs1 = class gs1 {});

      _export("gs8", gs8 = class gs8 {});

      _export("gs9", gs9 = class gs9 {});

      _export("gs10", gs10 = class gs10 {});

      _export("gs11", gs11 = class gs11 {});

      _export("gs12", gs12 = class gs12 {});

      _export("gs13", gs13 = class gs13 {});

      _export("gs14", gs14 = class gs14 {});

      _export("gs15", gs15 = class gs15 {});

      _export("gs17", gs17 = class gs17 {});

      _export("gs18", gs18 = class gs18 {});

      _export("gs20", gs20 = class gs20 {});

      _export("gs21", gs21 = class gs21 {});

      _export("gs23", gs23 = class gs23 {});

      _export("gs24", gs24 = class gs24 {});

      _export("gs25", gs25 = class gs25 {});

      _export("gs30", gs30 = class gs30 {}); //#endregion


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SendCommand.js.map