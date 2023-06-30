System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ln, ucnn, excr, excc, usdis, sschk, ssntf, ssdis, gonm, lbll, lbrl, lbsr, pwlby, goin, gori, grre, grrl, gbet, gbal, gbbk, gbcl, gbrt, gbcf, gbop, gbob, gpp, gpe, ggs, gs0, gs1, gs8, gs9, gs10, gs11, gs12, gs13, gs14, gs15, gs16, gs17, gs18, gs19, gs20, gs21, gs22, gs23, gs24, gs25, gs30, LevelList, RoomNo, Orders, Owner, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
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
    gbal: void 0,
    gbbk: void 0,
    gbcl: void 0,
    gbrt: void 0,
    gbcf: void 0,
    gbop: void 0,
    gbob: void 0,
    gpp: void 0,
    gpe: void 0,
    ggs: void 0,
    gs0: void 0,
    gs1: void 0,
    gs8: void 0,
    gs9: void 0,
    gs10: void 0,
    gs11: void 0,
    gs12: void 0,
    gs13: void 0,
    gs14: void 0,
    gs15: void 0,
    gs16: void 0,
    gs17: void 0,
    gs18: void 0,
    gs19: void 0,
    gs20: void 0,
    gs21: void 0,
    gs22: void 0,
    gs23: void 0,
    gs24: void 0,
    gs25: void 0,
    gs30: void 0,
    LevelList: void 0,
    RoomNo: void 0,
    Orders: void 0,
    Owner: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0956aFZs/FNnI9Kf7TbeJrM", "ResponeCommand", undefined);

      //#region 大廳封包 
      _export("ln", ln = class ln {
        constructor() {
          _defineProperty(this, "memberId", void 0);

          _defineProperty(this, "nickname", void 0);

          _defineProperty(this, "photoID", void 0);

          _defineProperty(this, "photoPath", void 0);

          _defineProperty(this, "coinType", void 0);

          _defineProperty(this, "pointGold", void 0);

          _defineProperty(this, "pointSilver", void 0);

          _defineProperty(this, "spreadCode", void 0);

          _defineProperty(this, "roomNo", void 0);
        }

      });

      _export("ucnn", ucnn = class ucnn {
        constructor() {
          _defineProperty(this, "nickname", void 0);
        }

      });

      _export("excr", excr = class excr {
        constructor() {
          _defineProperty(this, "code", void 0);

          _defineProperty(this, "coinType", void 0);

          _defineProperty(this, "amount", void 0);

          _defineProperty(this, "nowPoint", void 0);
        }

      });

      _export("excc", excc = class excc {
        constructor() {
          _defineProperty(this, "code", void 0);

          _defineProperty(this, "coinType", void 0);

          _defineProperty(this, "monney", void 0);

          _defineProperty(this, "amount", void 0);

          _defineProperty(this, "nowPoint", void 0);
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


      _export("gonm", gonm = class gonm {
        constructor() {
          _defineProperty(this, "money", void 0);
        }

      });

      _export("lbll", lbll = class lbll {
        constructor() {
          _defineProperty(this, "contentId", void 0);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "levelList", void 0);
        }

      });

      _export("lbrl", lbrl = class lbrl {
        constructor() {
          _defineProperty(this, "contentId", void 0);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "level", void 0);

          _defineProperty(this, "rooms", void 0);
        }

      });

      _export("lbsr", lbsr = class lbsr {
        constructor() {
          _defineProperty(this, "code", void 0);
        }

      });

      _export("pwlby", pwlby = class pwlby {
        constructor() {
          _defineProperty(this, "code", void 0);

          _defineProperty(this, "pointGold", void 0);

          _defineProperty(this, "pointSilver", void 0);
        }

      });

      _export("goin", goin = class goin {});

      _export("gori", gori = class gori {
        constructor() {
          _defineProperty(this, "roomNo", void 0);

          _defineProperty(this, "name", void 0);

          _defineProperty(this, "coinType", void 0);

          _defineProperty(this, "gameType", void 0);

          _defineProperty(this, "sequenceID", void 0);

          _defineProperty(this, "inningID", void 0);

          _defineProperty(this, "roomStatus", void 0);

          _defineProperty(this, "roomTime", void 0);

          _defineProperty(this, "nowStage", void 0);

          _defineProperty(this, "stageTime", void 0);

          _defineProperty(this, "remainTime", void 0);

          _defineProperty(this, "totalCards", void 0);

          _defineProperty(this, "totalRemain", void 0);

          _defineProperty(this, "redCutIndex", void 0);

          _defineProperty(this, "shoeLen", void 0);

          _defineProperty(this, "playerCards", void 0);

          _defineProperty(this, "playerPoint", void 0);

          _defineProperty(this, "bankerCards", void 0);

          _defineProperty(this, "bankerPoint", void 0);

          _defineProperty(this, "records", void 0);

          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "credit", void 0);

          _defineProperty(this, "betMin", void 0);

          _defineProperty(this, "betMax", void 0);

          _defineProperty(this, "chipOptions", void 0);

          _defineProperty(this, "bets", void 0);

          _defineProperty(this, "manTotal", void 0);

          _defineProperty(this, "betTotal", void 0);
        }

      });

      _export("grre", grre = class grre {
        constructor() {
          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "memberID", void 0);

          _defineProperty(this, "nickname", void 0);

          _defineProperty(this, "photoPath", void 0);
        }

      });

      _export("grrl", grrl = class grrl {
        constructor() {
          _defineProperty(this, "seatID", void 0);
        }

      });

      _export("gbet", gbet = class gbet {
        constructor() {
          _defineProperty(this, "code", void 0);

          _defineProperty(this, "kind", void 0);

          _defineProperty(this, "chip", void 0);

          _defineProperty(this, "bets", void 0);

          _defineProperty(this, "credit", void 0);

          _defineProperty(this, "manTotal", void 0);

          _defineProperty(this, "betTotal", void 0);
        }

      });

      _export("gbal", gbal = class gbal {
        constructor() {
          _defineProperty(this, "manTotal", void 0);

          _defineProperty(this, "betTotal", void 0);
        }

      });

      _export("gbbk", gbbk = class gbbk {
        constructor() {
          _defineProperty(this, "kind", void 0);

          _defineProperty(this, "chip", void 0);

          _defineProperty(this, "bets", void 0);

          _defineProperty(this, "credit", void 0);

          _defineProperty(this, "manTotal", void 0);

          _defineProperty(this, "betTotal", void 0);
        }

      });

      _export("gbcl", gbcl = class gbcl {
        constructor() {
          _defineProperty(this, "code", void 0);

          _defineProperty(this, "credit", void 0);
        }

      });

      _export("gbrt", gbrt = class gbrt {
        constructor() {
          _defineProperty(this, "code", void 0);

          _defineProperty(this, "bets", void 0);

          _defineProperty(this, "credit", void 0);
        }

      });

      _export("gbcf", gbcf = class gbcf {
        constructor() {
          _defineProperty(this, "code", void 0);
        }

      });

      _export("gbop", gbop = class gbop {
        constructor() {
          _defineProperty(this, "orders", void 0);
        }

      });

      _export("gbob", gbob = class gbob {
        constructor() {
          _defineProperty(this, "orders", void 0);
        }

      });

      _export("gpp", gpp = class gpp {
        constructor() {
          _defineProperty(this, "info", void 0);
        }

      });

      _export("gpe", gpe = class gpe {});

      _export("ggs", ggs = class ggs {
        constructor() {
          _defineProperty(this, "status", void 0);

          _defineProperty(this, "time", void 0);
        }

      });

      _export("gs0", gs0 = class gs0 {});

      _export("gs1", gs1 = class gs1 {});

      _export("gs8", gs8 = class gs8 {
        constructor() {
          _defineProperty(this, "sequenceID", void 0);

          _defineProperty(this, "redCutIndex", void 0);
        }

      });

      _export("gs9", gs9 = class gs9 {
        constructor() {
          _defineProperty(this, "redCutIndex", void 0);

          _defineProperty(this, "totalCards", void 0);

          _defineProperty(this, "serverTime", void 0);
        }

      });

      _export("gs10", gs10 = class gs10 {
        constructor() {
          _defineProperty(this, "sequenceID", void 0);

          _defineProperty(this, "inningID", void 0);

          _defineProperty(this, "shoeLen", void 0);

          _defineProperty(this, "totalRemain", void 0);

          _defineProperty(this, "serverTime", void 0);
        }

      });

      _export("gs11", gs11 = class gs11 {
        constructor() {
          _defineProperty(this, "betTime", void 0);

          _defineProperty(this, "serverTime", void 0);
        }

      });

      _export("gs12", gs12 = class gs12 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "manTotal", void 0);

          _defineProperty(this, "betTotal", void 0);
        }

      });

      _export("gs13", gs13 = class gs13 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "bankerPeekSeatID", void 0);

          _defineProperty(this, "playerPeekSeatID", void 0);

          _defineProperty(this, "redCard", void 0);
        }

      });

      _export("gs14", gs14 = class gs14 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "cards", void 0);

          _defineProperty(this, "peekSec", void 0);
        }

      });

      _export("gs15", gs15 = class gs15 {
        constructor() {
          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "cards", void 0);

          _defineProperty(this, "playerPoint", void 0);
        }

      });

      _export("gs16", gs16 = class gs16 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "cards", void 0);

          _defineProperty(this, "peekSec", void 0);
        }

      });

      _export("gs17", gs17 = class gs17 {
        constructor() {
          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "cards", void 0);

          _defineProperty(this, "bankerPoint", void 0);
        }

      });

      _export("gs18", gs18 = class gs18 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "playerPeekSeatID", void 0);

          _defineProperty(this, "redCard", void 0);
        }

      });

      _export("gs19", gs19 = class gs19 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "card", void 0);

          _defineProperty(this, "peekSec", void 0);
        }

      });

      _export("gs20", gs20 = class gs20 {
        constructor() {
          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "card", void 0);

          _defineProperty(this, "bankerPoint", void 0);
        }

      });

      _export("gs21", gs21 = class gs21 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "playerPeekSeatID", void 0);

          _defineProperty(this, "redCard", void 0);
        }

      });

      _export("gs22", gs22 = class gs22 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "cards", void 0);

          _defineProperty(this, "peekSec", void 0);
        }

      });

      _export("gs23", gs23 = class gs23 {
        constructor() {
          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "cards", void 0);

          _defineProperty(this, "bankerPoint", void 0);
        }

      });

      _export("gs24", gs24 = class gs24 {
        constructor() {
          _defineProperty(this, "serverTime", void 0);

          _defineProperty(this, "playerCards", void 0);

          _defineProperty(this, "bankerCards", void 0);

          _defineProperty(this, "playerPoint", void 0);

          _defineProperty(this, "bankerPoint", void 0);

          _defineProperty(this, "result", void 0);

          _defineProperty(this, "record", void 0);

          _defineProperty(this, "owner", void 0);
        }

      });

      _export("gs25", gs25 = class gs25 {});

      _export("gs30", gs30 = class gs30 {});
      /**封包Object */


      _export("LevelList", LevelList = class LevelList {
        constructor() {
          _defineProperty(this, "levelID", void 0);

          _defineProperty(this, "betMin", void 0);

          _defineProperty(this, "betMax", void 0);
        }

      });

      _export("RoomNo", RoomNo = class RoomNo {
        constructor() {
          _defineProperty(this, "roomNo", void 0);

          _defineProperty(this, "name", void 0);

          _defineProperty(this, "betMin", void 0);

          _defineProperty(this, "betMax", void 0);

          _defineProperty(this, "playCount", void 0);

          _defineProperty(this, "records", void 0);
        }

      });

      _export("Orders", Orders = class Orders {
        constructor() {
          _defineProperty(this, "seatID", void 0);

          _defineProperty(this, "memberID", void 0);

          _defineProperty(this, "nickname", void 0);

          _defineProperty(this, "photoPath", void 0);

          _defineProperty(this, "bets", void 0);
        }

      });

      _export("Owner", Owner = class Owner {
        constructor() {
          _defineProperty(this, "wins", void 0);

          _defineProperty(this, "totalBet", void 0);

          _defineProperty(this, "totalWins", void 0);

          _defineProperty(this, "credit", void 0);
        }

      }); //#endregion


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResponeCommand.js.map