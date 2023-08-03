System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, CoinType, PlayerIdentity, GameData, Player, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponseGPG(extras) {
    _reporterNs.report("ResponseGPG", "../Contorll/Api/GPGAPI/ResponseGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinType(extras) {
    _reporterNs.report("CoinType", "../Enum/CoinType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerIdentity(extras) {
    _reporterNs.report("PlayerIdentity", "../Enum/PlayerIdentity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      CoinType = _unresolved_3.CoinType;
    }, function (_unresolved_4) {
      PlayerIdentity = _unresolved_4.PlayerIdentity;
    }, function (_unresolved_5) {
      GameData = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c06b1zhmUJLzJStl20CJD45", "Player", undefined);

      _export("default", Player = class Player extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "account", '');

          _defineProperty(this, "memberId", '');

          _defineProperty(this, "nickname", '');

          _defineProperty(this, "photoID", 1);

          _defineProperty(this, "photoPath", "");

          _defineProperty(this, "pointGold", 0);

          _defineProperty(this, "pointSilver", 0);

          _defineProperty(this, "password", "");

          _defineProperty(this, "identity", (_crd && PlayerIdentity === void 0 ? (_reportPossibleCrUseOfPlayerIdentity({
            error: Error()
          }), PlayerIdentity) : PlayerIdentity).Member);

          _defineProperty(this, "gpgInfo", void 0);

          _defineProperty(this, "gpgToken", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTA4ODUxMjIsImV4cCI6MTY5MzQ3NzEyMiwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY5MDg4NTEyMiwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiJEMkZBNjlCODU0MTg5RTU1RDgxRTZBM0YxMEIyQzczMiIsImlhdCI6MTY5MDg4NTEyMiwic2NvcGUiOlsibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiLCJyZXBvcnQucmVhZCIsInJlcG9ydC53cml0ZSJdLCJhbXIiOlsibWtfcGhvbmUiXX0.2rTfXZFUMqRBcU7gnEGg7WWYOEeb1w7XwBAnQR9SckDp4ksWgAO7wdqa7LDJnpqF3iHqPN2gYuXOgj75VXqkmkAewCAE-2CiszgftLVxIeviPPxO5qfhLslLamrqHYJKyF4BG7VTtrb_cr-efRBq-1h-3eMWnRSR-p3RVX_SvDtreVFAFQJ4azM-uI1-qi5xRLDKP9SIuEEqKJ2wMDc-_uShY1eu3lK0OutGOMc_BVYts74vVIMytEesW-IzFCKe02jStUcy-newFkxnHW_wqdWQF5U8v03CvU5nqo4ebu33838PpDmC5Pdo3M2xv7FjPp4UVUnIxxzg26GcvxL-VA");
        }

        /// 相關資訊.
        // totalGame :string= '';    // 遊戲總局數.
        // winGame :string= '';      // 勝局數.
        // maxPrize :string= '';     // 最大底池.
        // maxPType :string= '';     // 最大牌型.
        // maxPInfo :string= '';     // 最大牌資訊.
        // pos: number = -1;          // 玩家入座位置(0~8), -1為尚未入座.
        // credit: number = 0;        // 遊戲剩餘籌碼.
        // bets: number = 0;          // 已下注籌碼.
        getPoint() {
          return (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.coinType == (_crd && CoinType === void 0 ? (_reportPossibleCrUseOfCoinType({
            error: Error()
          }), CoinType) : CoinType).Gold ? this.pointGold : this.pointSilver;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Player.js.map