System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Label, Sprite, tween, UIOpacity, UITransform, v3, _decorator, BaseComponent, PublicModel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, MessageItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicModel = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49203AAcnFFDaXi+8av2zsL", "MessageItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MessageItem = (_dec = ccclass('MessageItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class MessageItem extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          _initializerDefineProperty(this, "label", _descriptor2, this);

          _defineProperty(this, "spriteOpacity", void 0);

          _defineProperty(this, "labelOpacity", void 0);

          _defineProperty(this, "delayFadeTime", 2);

          _defineProperty(this, "isFade", false);
        }

        start() {
          this.spriteOpacity = this.sprite.getComponent(UIOpacity);
          this.labelOpacity = this.label.getComponent(UIOpacity);
        }

        moveUp() {
          if (this.isFade) return;
          var pos = this.node.getPosition();
          console.log(this.sprite.getComponent(UITransform).height);
          pos.y = pos.y + this.sprite.getComponent(UITransform).height;
          this.node.setPosition(pos);
        }

        outFade() {
          tween(this).delay(this.delayFadeTime).call(() => {
            this.isFade = true;
            tween(this.node).parallel(tween().by(.5, {
              position: v3(0, 50, 0)
            }), tween().call(() => {
              tween(this.spriteOpacity).to(.5, {
                opacity: 0
              }, {
                onComplete: this.destroyItem.bind(this)
              }).start();
            })).start();
          }).start();
        }

        destroyItem() {
          this.label.node.destroy();
          this.node.destroy();
          this.destroy();
        }

        update() {
          if (!this.label.node.position.equals((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.label.node, this.node))) this.label.node.position = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.label.node, this.node);
          if (this.labelOpacity.opacity != this.spriteOpacity.opacity) this.labelOpacity.opacity = this.spriteOpacity.opacity;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MessageItem.js.map