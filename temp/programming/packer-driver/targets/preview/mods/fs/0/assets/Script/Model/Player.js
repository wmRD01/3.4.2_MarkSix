System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, ResponseGPG, CoinType, PlayerIdentity, GameData, Player, _crd;

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
      ResponseGPG = _unresolved_3.ResponseGPG;
    }, function (_unresolved_4) {
      CoinType = _unresolved_4.CoinType;
    }, function (_unresolved_5) {
      PlayerIdentity = _unresolved_5.PlayerIdentity;
    }, function (_unresolved_6) {
      GameData = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c06b1zhmUJLzJStl20CJD45", "Player", undefined);

      _export("default", Player = class Player extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor() {
          super(...arguments);

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

          _defineProperty(this, "gpgInfo", new (_crd && ResponseGPG === void 0 ? (_reportPossibleCrUseOfResponseGPG({
            error: Error()
          }), ResponseGPG) : ResponseGPG).MyInfo.DataClass());

          _defineProperty(this, "gpgToken", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODk3NTg4NzMsImV4cCI6MTY5MjM1MDg3MywiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY4OTc1ODg3MywiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiIxMDM4QkU5QTcyMDJFNTA2RkMxRTNDQ0QyMjNBNDI5MSIsImlhdCI6MTY4OTc1ODg3Mywic2NvcGUiOlsibWVtYmVyLmluZm8udXNlciJdLCJhbXIiOlsibWtfcGhvbmUiXX0.SJ5XYSfZBlhuGtAeRgtwEapeJthw9Lx-Gskfd2k9vZ-eqmYzvezS9VYYRzxZEHmUPDYowVzTng5vGkIhax_RmiVfHbE74IEdJ3hKXd35TiXxWwiokBr8NsevlK9LueychO2sH0TVQx5MTMHMDoEzc_M3mdnkrxpEvmr5Wz2PZ-qPI5ZfHiGvGaPSMVB9RxN10ZmtCTwxonSUI7tQCJOaquEm0Cvjwub69s62MaSZJ9Rz8m4fthfaTEgtfRXdmHdS4deFjMzPKEJPT29IULdkVoHF9BOGJAJRhxJM75hmL59kIFptt1MOz_7x6q7Gv7w_y6BvTzQOtQ56NVARQ9JA5Q");
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