System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Node, EditBox, Label, Sprite, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, LEFT_PADDING, MyEditBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3fea3jutK5EJ4aTH4/RuCLS", "MyEditBox", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      LEFT_PADDING = 2;

      _export("MyEditBox", MyEditBox = (_dec = ccclass('MyEditBox'), _dec2 = property(Sprite), _dec(_class = (_class2 = (_temp = class MyEditBox extends EditBox {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spriteBG", _descriptor, this);

          _initializerDefineProperty(this, "isAutoOff", _descriptor2, this);
        }

        _updateLabelPosition(size) {
          if (!this.isAutoOff) return;
          const trans = this.node._uiProps.uiTransformComp;
          const offX = -trans.anchorX * trans.width;
          const offY = -trans.anchorY * trans.height;
          const placeholderLabel = this._placeholderLabel;
          const textLabel = this._textLabel;

          if (textLabel) {
            textLabel.node._uiProps.uiTransformComp.setContentSize(size.width - LEFT_PADDING, size.height);

            textLabel.node.setPosition(offX + LEFT_PADDING, offY + size.height, textLabel.node.position.z);

            if (this._inputMode === 0) {// textLabel.verticalAlign = VerticalTextAlignment.TOP;
            } // textLabel.enableWrapText = this._inputMode === InputMode.ANY;


            textLabel.enableWrapText = this._inputMode === 0;
          }

          if (placeholderLabel) {
            placeholderLabel.node._uiProps.uiTransformComp.setContentSize(size.width - LEFT_PADDING, size.height);

            placeholderLabel.lineHeight = size.height;
            placeholderLabel.node.setPosition(offX + LEFT_PADDING, offY + size.height, placeholderLabel.node.position.z); // placeholderLabel.enableWrapText = this._inputMode === InputMode.ANY;

            placeholderLabel.enableWrapText = this._inputMode === 0;
          }
        }

        _updateTextLabel() {
          let textLabel = this._textLabel; // If textLabel doesn't exist, create one.

          if (!textLabel) {
            let node = this.node.getChildByName('TEXT_LABEL');

            if (!node) {
              node = new Node('TEXT_LABEL');
              node.layer = this.node.layer;
            }

            textLabel = node.getComponent(Label);

            if (!textLabel) {
              textLabel = node.addComponent(Label);
            }

            textLabel.overflow = Label.Overflow.CLAMP;
            node.parent = this.node;
            this._textLabel = textLabel;
          } // update


          const transformComp = this._textLabel.node._uiProps.uiTransformComp;
          transformComp.setAnchorPoint(0, 1);

          if (this._inputMode === 0) {
            //   textLabel.verticalAlign = VerticalTextAlignment.TOP;
            textLabel.enableWrapText = true;
          } else {
            textLabel.enableWrapText = false;
          }

          textLabel.string = this._updateLabelStringStyle(this._string);
        }

        _updatePlaceholderLabel() {
          let placeholderLabel = this._placeholderLabel; // If placeholderLabel doesn't exist, create one.

          if (!placeholderLabel) {
            let node = this.node.getChildByName('PLACEHOLDER_LABEL');

            if (!node) {
              node = new Node('PLACEHOLDER_LABEL');
              node.layer = this.node.layer;
            }

            placeholderLabel = node.getComponent(Label);

            if (!placeholderLabel) {
              placeholderLabel = node.addComponent(Label);
            }

            placeholderLabel.overflow = Label.Overflow.CLAMP;
            node.parent = this.node;
            this._placeholderLabel = placeholderLabel;
          } // update


          const transform = this._placeholderLabel.node._uiProps.uiTransformComp;
          transform.setAnchorPoint(0, 1);

          if (this._inputMode === 0) {
            // placeholderLabel.verticalAlign = VerticalTextAlignment.TOP;
            placeholderLabel.enableWrapText = true;
          } else {
            placeholderLabel.enableWrapText = false;
          }

          placeholderLabel.string = this.placeholder;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteBG", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isAutoOff", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MyEditBox.js.map