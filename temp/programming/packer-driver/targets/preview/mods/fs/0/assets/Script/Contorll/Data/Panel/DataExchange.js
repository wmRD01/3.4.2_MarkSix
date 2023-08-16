System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, color, BaseComponent, DataExchange, _crd, PointBtn;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../Model/ComponentBase", _context.meta, extras);
  }

  _export({
    default: void 0,
    PointBtn: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      color = _cc.color;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ef38Kgt0tJgJw7y0viKxZ6", "DataExchange", undefined);

      _export("default", DataExchange = class DataExchange extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "buttonBlock", void 0);

          _defineProperty(this, "buttonClose", void 0);

          _defineProperty(this, "buttonConfirm", void 0);

          _defineProperty(this, "buttonCanelText", void 0);

          _defineProperty(this, "buttonRefreshView", void 0);

          _defineProperty(this, "buttongoStaoredValue", void 0);

          _defineProperty(this, "contentBntton", void 0);

          _defineProperty(this, "arrayPointButton", new Array());

          _defineProperty(this, "labelConfirm", void 0);

          _defineProperty(this, "labelTitle", void 0);

          _defineProperty(this, "labelWalletHave_Title", void 0);

          _defineProperty(this, "labelWalletHaveNumber", void 0);

          _defineProperty(this, "labelChangeScaleTitle", void 0);

          _defineProperty(this, "labelChangeScaleNumber", void 0);

          _defineProperty(this, "labelClinetHaveTitle", void 0);

          _defineProperty(this, "labelClinetHaveNumber", void 0);

          _defineProperty(this, "editBoxEnterNumber", void 0);

          _defineProperty(this, "defaultPlaceholderLabel", void 0);

          _defineProperty(this, "wallet", 0);

          _defineProperty(this, "clinetHave", 0);
        }

      });

      (function (_PointBtn) {
        class Btn {
          constructor() {
            _defineProperty(this, "btn", void 0);

            _defineProperty(this, "spriteButtonBG", void 0);

            _defineProperty(this, "labelNumber", void 0);
          }

          setState(isbool) {
            // console.log(isbool);
            this.btn.interactable = isbool;
            var btnBGClolor = isbool ? "#384D8A" : "#353741";
            var btnLableClolor = isbool ? "#FFFFFF" : "#525565";
            this.spriteButtonBG.color = color().fromHEX(btnBGClolor);
            this.labelNumber.color = color().fromHEX(btnLableClolor);
          }

          setNum(str) {
            this.labelNumber.string = str;
          }

        }

        _PointBtn.Btn = Btn;
      })(PointBtn || _export("PointBtn", PointBtn = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataExchange.js.map