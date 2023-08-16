System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseComponent, DataFunctionMenu, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../Model/ComponentBase", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7ea2IYRCJOX4zEVmLSR+Hv", "DataFunctionMenu", undefined);

      _export("default", DataFunctionMenu = class DataFunctionMenu extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "buttonBlockBG", void 0);

          _defineProperty(this, "contentButton", void 0);

          _defineProperty(this, "contentBG", void 0);

          _defineProperty(this, "buttonMusic", void 0);

          _defineProperty(this, "buttonRecord", void 0);

          _defineProperty(this, "buttonExchange", void 0);

          _defineProperty(this, "buttonGameInfo", void 0);

          _defineProperty(this, "buttonChangeNickname", void 0);

          _defineProperty(this, "buttonBackHome", void 0);

          _defineProperty(this, "labelChangeNickname", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataFunctionMenu.js.map