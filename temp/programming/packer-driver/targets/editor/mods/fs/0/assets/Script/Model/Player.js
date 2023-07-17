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

          _defineProperty(this, "gppInfo", void 0);

          _defineProperty(this, "gpgToken", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODkxMjkzNjEsImV4cCI6MTY5MTcyMTM2MSwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY4OTEyOTM2MSwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiI3RkNCM0QzQ0NDOUE3MjRGOUQ5M0YwNDZDMjNGODA1NCIsImlhdCI6MTY4OTEyOTM2MSwic2NvcGUiOlsibWVtYmVyLmluZm8udXNlciJdLCJhbXIiOlsibWtfcGhvbmUiXX0.agzZ_DHtp_dQQKfa1fRhJRwQAh8NnLk98jmqspD8RrnRq5TNqE-dTaf-53d61BraahHl2IO6qwPRk7wJr_RP6nuWYcoiVj4k3WGYG1qnpjuYA5vlq1Iyq2pPIr4eNq2pRV9mJAdKzsMVi1zVi5s7tz38sjpr470xa4QL4zXLluGIg-562pqnSAOtKiPQhCoCAzPSixI16BM3Ite90kw3a3gTcP_m7jA-ELfZxwS-pTHHSqQzhBTqCeMQk9uC3Rcuook_SseYN7cJoYOi_oc0wnNoMhalyLMbdhZKcktAMJ6ExuN0fj_RIxvAJT4lJrQictihPBE43qe7djkWV9uRUQ");
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