System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, RoomData, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af74caj3I9IWZ8pRzIegrfT", "RoomData", undefined);

      _export("default", RoomData = class RoomData extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor() {
          super(...arguments);

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

          _defineProperty(this, "chipOptions", void 0);

          _defineProperty(this, "bets", void 0);

          _defineProperty(this, "seatNo", 0);

          _defineProperty(this, "bigEyeBoyRoadData", void 0);

          _defineProperty(this, "smallRoadData", void 0);

          _defineProperty(this, "cockroachRoadData", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RoomData.js.map