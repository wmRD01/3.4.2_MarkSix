System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseComponent, PublicModel, _dec, _class, _temp, _crd, ccclass, property, LabelAutoFollow;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "./PublicModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicModel = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f47748PGehI/YDVO+K9Soxj", "LabelAutoFollow", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", LabelAutoFollow = (_dec = ccclass('LabelAutoFollow'), _dec(_class = (_temp = class LabelAutoFollow extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "target", void 0);
        }

        setTarget(_node) {
          this.target = _node;
        }

        update() {
          if (this.node.position.equals((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target))) return;
          console.log("改座標");
          this.node.scale = this.node.scale;
          this.node.position = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LabelAutoFollow.js.map