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

          _defineProperty(this, "gpgToken", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTAxNzAxODIsImV4cCI6MTY5Mjc2MjE4MiwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY5MDE3MDE4MiwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiJBNDlCMzAyNUQxMTQ3M0MxNERFQ0I4QkNDNjBFNUYyMiIsImlhdCI6MTY5MDE3MDE4Miwic2NvcGUiOlsibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiXSwiYW1yIjpbIm1rX3Bob25lIl19.N1iOb6EpmOCDWC9NebkYsOpXNNygXJH4qK5JtOEvr-GhJ6WZDi0RVnQF9svHRFXNL_xCzUXbJZbQhuxqLTcSffIy5-1h2hHYDoOUIa4I0nIbWyBT0-L-K1p2t_COaCiKrgFjE1qIhDFmSnGF6_XjMsCLYsL5ZASy-SnIz28tgGCNmKlpvsIM_rlvkwoQut3h66PrxVNToZ7HsUM3-8tuSWGFqnbgHBdnGPMH74LP3pesf7KWHIYp7fNj6u9mvo2SL5Y_8dmUKWF-0cHgwDLM-UC0PrjARv1eECTKVZFXnLhcp_uqCFm8-UHRA5hjIT5myvzYRQpGCsrBR7jYT-VAFg");
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