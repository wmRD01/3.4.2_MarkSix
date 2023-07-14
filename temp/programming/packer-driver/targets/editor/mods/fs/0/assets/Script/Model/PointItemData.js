System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Label, Node, Prefab, _decorator, BallData, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, PointItemData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBallData(extras) {
    _reporterNs.report("BallData", "./BallData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BallData = _unresolved_2.default;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f131dV6MU9Isa+HHgysbVXA", "PointItemData", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PointItemData = (_dec = ccclass('PointItemData'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec(_class2 = (_class3 = (_temp = class PointItemData extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefabBallItem", _descriptor, this);

          _initializerDefineProperty(this, "labelPoint", _descriptor2, this);

          _initializerDefineProperty(this, "labelOpenNumber", _descriptor3, this);

          _initializerDefineProperty(this, "clientPointLayout", _descriptor4, this);

          _initializerDefineProperty(this, "labelDayData", _descriptor5, this);

          _initializerDefineProperty(this, "labelContent", _descriptor6, this);
        }

        onLoad() {
          this.clientPointLayout.removeAllChildren();
        }

        init(data) {
          this.labelDayData.string = `112/4/9(一) 第123456789期`;
          this.labelPoint.string = `+ ${Math.floor(Math.random() * 200)}`;

          for (let index = 0; index < this.labelOpenNumber.length; index++) {
            let _node = instantiate(this.prefabBallItem);

            this.clientPointLayout.addChild(_node);

            let _class = _node.getComponent(_crd && BallData === void 0 ? (_reportPossibleCrUseOfBallData({
              error: Error()
            }), BallData) : BallData);

            _class.init(this.randomBall());

            this.labelContent.addChild(_class.label.node);
            this.labelOpenNumber[index].string = this.randomBall().toString();
          }
        }
        /**測試用 */


        randomBall() {
          return 1 + Math.floor(Math.random() * 49);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "prefabBallItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "labelPoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "labelOpenNumber", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "clientPointLayout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "labelDayData", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "labelContent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PointItemData.js.map