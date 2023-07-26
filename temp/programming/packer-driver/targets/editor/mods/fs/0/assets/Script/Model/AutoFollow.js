System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Node, _decorator, BaseComponent, PublicModel, _dec, _class, _temp, _crd, ccclass, property, AutoFollow;

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
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicModel = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a8e8sCbJNI7pKpf34hxwW2", "AutoFollow", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", AutoFollow = (_dec = ccclass('LabelAutoFollow'), _dec(_class = (_temp = class AutoFollow extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "target", void 0);
        }

        setTarget(_node) {
          this.target = _node;
        }

        createNewTarget() {
          this.target = new Node();
          this.node.parent.addChild(this.target);
          this.target.setPosition(this.node.position);
          this.target.setScale(this.node.scale);
        }

        update() {
          if (this.node.position.equals((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target))) return; // console.log("改座標");

          this.node.scale = this.node.scale;
          this.node.position = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target);
          if (this.target.active != this.node.active) this.target.active = this.node.active;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AutoFollow.js.map