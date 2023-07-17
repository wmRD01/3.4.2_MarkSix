System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventTarget, _decorator, BaseSingleton, PublicModel, _dec, _class, _temp, _crd, ccclass, property, EventMng, EvnetType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../Model/PublicModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      EventTarget = _cc.EventTarget;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicModel = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d413dsLzpN7IPSDEvYu6+H", "EventMng", undefined);

      // import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
      _export("default", new EventTarget()); // export default class EventMng extends BaseSingleton<EventMng>() {
      //     eventMng:EventTarget = new EventTarget()
      // }


      ({
        ccclass,
        property
      } = _decorator);

      _export("default", EventMng = (_dec = ccclass('EventMng'), _dec(_class = (_temp = class EventMng extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor() {
          super(...arguments);

          _defineProperty(this, "mapEvnet", new Map());
        }

        test() {
          for (var index = 0; index < Object.keys(EvnetType).length; index++) {
            this.mapEvnet.set(index, new EventTarget());
          }

          (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.getEnumValueFromString;
        }

      }, _temp)) || _class));

      (function (EvnetType) {
        EvnetType[EvnetType["Pulic"] = 0] = "Pulic";
        EvnetType[EvnetType["Page"] = 1] = "Page";
        EvnetType[EvnetType["Panel"] = 2] = "Panel";
      })(EvnetType || (EvnetType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventMng.js.map