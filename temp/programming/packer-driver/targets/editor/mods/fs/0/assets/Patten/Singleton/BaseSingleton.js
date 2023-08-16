System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SingletManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function BaseSingleton() {
    class BaseSingleton {
      static get getInstance() {
        if (!this.instance) {
          this.instance = new this();

          if (this.name != "SingletManager") {
            (_crd && SingletManager === void 0 ? (_reportPossibleCrUseOfSingletManager({
              error: Error()
            }), SingletManager) : SingletManager).instance.set(this.instance);
          } else {
            const singletManager = this.instance;
            singletManager.set(this.instance);
          }
        }

        return this.instance;
      }

      constructor() {}
      /**
       * 清除單例物件
       */


      clear() {
        this._instance = null;
      }

    }

    _defineProperty(BaseSingleton, "instance", void 0);

    return BaseSingleton;
  }

  function _reportPossibleCrUseOfIBaseSingleton(extras) {
    _reporterNs.report("IBaseSingleton", "./IBaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletManager(extras) {
    _reporterNs.report("SingletManager", "./SingletonManger", _context.meta, extras);
  }

  _export("default", BaseSingleton);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SingletManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3f42IQL0JF86rRmQC7uxw3", "BaseSingleton", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BaseSingleton.js.map