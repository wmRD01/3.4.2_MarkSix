System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, CoinType, GameType, GameData, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinType(extras) {
    _reporterNs.report("CoinType", "../Enum/CoinType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../Enum/GameType", _context.meta, extras);
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
      GameType = _unresolved_4.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75883gl9QZEX7b2DpTC0I/V", "GameData", undefined);

      _export("default", GameData = class GameData extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor() {
          super(...arguments);

          _defineProperty(this, "gameID", 50003);

          _defineProperty(this, "contentId", "10");

          _defineProperty(this, "roomNo", 1001);

          _defineProperty(this, "coinType", (_crd && CoinType === void 0 ? (_reportPossibleCrUseOfCoinType({
            error: Error()
          }), CoinType) : CoinType).Gold);

          _defineProperty(this, "gameType", (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).Normal);

          _defineProperty(this, "exChangeLib", ["1000", "5000", "MAX"]);

          _defineProperty(this, "wallet", void 0);

          _defineProperty(this, "language", void 0);

          _defineProperty(this, "currentChip", 0);

          _defineProperty(this, "isFastInGame", true);

          _defineProperty(this, "bankerPeekSeatID", void 0);

          _defineProperty(this, "playerPeekSeatID", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameData.js.map