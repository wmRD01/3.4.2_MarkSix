System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, js, BaseComponent, SingletManager, _crd;

  function BaseSingletonComponent() {
    class BaseSingletonComponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
      error: Error()
    }), BaseComponent) : BaseComponent) {
      static get instance() {
        if (!(_crd && SingletManager === void 0 ? (_reportPossibleCrUseOfSingletManager({
          error: Error()
        }), SingletManager) : SingletManager).instance.get(js.getClassName(this))) {
          console.error("Adam \u7576\u524D" + js.getClassName(this) + " : \u9700\u6AA2\u67E5\u8A72Class\u7684\u521D\u59CB\u5316\u751F\u547D\u9031\u671F");
        }

        return (_crd && SingletManager === void 0 ? (_reportPossibleCrUseOfSingletManager({
          error: Error()
        }), SingletManager) : SingletManager).instance.get(js.getClassName(this));
      }

      onLoad() {
        super.onLoad();
        (_crd && SingletManager === void 0 ? (_reportPossibleCrUseOfSingletManager({
          error: Error()
        }), SingletManager) : SingletManager).instance.set(this);
        console.log((_crd && SingletManager === void 0 ? (_reportPossibleCrUseOfSingletManager({
          error: Error()
        }), SingletManager) : SingletManager).instance);
      }
      /**
       * 清除單例物件
       */


      clear() {}

    }

    return BaseSingletonComponent;
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Script/Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBaseSingleton(extras) {
    _reporterNs.report("IBaseSingleton", "./IBaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletManager(extras) {
    _reporterNs.report("SingletManager", "./SingletonManger", _context.meta, extras);
  }

  _export("default", BaseSingletonComponent);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      js = _cc.js;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      SingletManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3df9fXKjK5A1J5Lb3YUHn1m", "BaseSingletonComponent", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BaseSingletonComponent.js.map