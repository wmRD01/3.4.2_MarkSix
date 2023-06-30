System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Node, EditBox, Label, _dec, _class, _crd, ccclass, property, MyEditBox;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3fea3jutK5EJ4aTH4/RuCLS", "MyEditBox", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MyEditBox", MyEditBox = (_dec = ccclass('MyEditBox'), _dec(_class = class MyEditBox extends EditBox {
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MyEditBox.js.map