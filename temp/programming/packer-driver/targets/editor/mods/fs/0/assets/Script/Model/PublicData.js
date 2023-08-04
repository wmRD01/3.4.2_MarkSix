System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, GameSceneName, CheckLoading, PublicData, _crd, GPGAPI;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneName(extras) {
    _reporterNs.report("GameSceneName", "../Enum/GameSenceName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoading(extras) {
    _reporterNs.report("CheckLoading", "./CheckLoading", _context.meta, extras);
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
      GameSceneName = _unresolved_3.GameSceneName;
    }, function (_unresolved_4) {
      CheckLoading = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67508AN1upBBYMFLK8wQfsS", "PublicData", undefined);

      _export("default", PublicData = class PublicData extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "arr_ComponentBaseClass", new Array());

          _defineProperty(this, "BaseViewWidth", 720);

          _defineProperty(this, "BaseViewHeight", 1280);

          _defineProperty(this, "gameVersion", "0.1.6");

          _defineProperty(this, "onlineVersion", "0.1.6");

          _defineProperty(this, "checkLoading", new (_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading)());

          _defineProperty(this, "isResetView", void 0);

          _defineProperty(this, "isResetProcessing", void 0);

          _defineProperty(this, "heartTime", 15);

          _defineProperty(this, "currentScene", (_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).Loading);

          _defineProperty(this, "recodeUrl", void 0);

          _defineProperty(this, "backHomeUrl", void 0);

          _defineProperty(this, "staoredValueUrl", void 0);

          _defineProperty(this, "language", void 0);

          _defineProperty(this, "isLandscape", false);

          _defineProperty(this, "isClickScreen", false);

          _defineProperty(this, "today", void 0);

          _defineProperty(this, "gpgApi", GPGAPI.QA);
        }

        isChageOnline() {
          this.gpgApi = GPGAPI.Online;
        }

      });

      (function (GPGAPI) {
        GPGAPI["QA"] = "5gh394D";
        GPGAPI["Online"] = "4fypra!c!?";
      })(GPGAPI || (GPGAPI = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PublicData.js.map