System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventTarget, _decorator, BaseSingleton, NotificationType, _dec, _class, _temp, _crd, ccclass, property, EventMng;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../Enum/NotificationType", _context.meta, extras);
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
      NotificationType = _unresolved_3.NotificationType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d413dsLzpN7IPSDEvYu6+H", "EventMng", undefined);

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

        init() {
          /**因為會包含Valude，所以直接/2就是整個Object的數量 */
          for (var index = 0; index < Object.keys(_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).length / 2; index++) {
            this.mapEvnet.set(index, new EventTarget());
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventMng.js.map