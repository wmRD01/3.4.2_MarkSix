
import { _decorator, Component, Node, EditBox, Label, VerticalTextAlignment, Size, Sprite } from 'cc';
const { ccclass, property } = _decorator;
const LEFT_PADDING = 2;
@ccclass('MyEditBox')
export class MyEditBox extends EditBox {
    @property(Sprite)
    spriteBG:Sprite;
    @property
    isAutoOff: boolean = true;
    protected _updateLabelPosition(size: Size): void {
        if (!this.isAutoOff) return
        const trans = this.node._uiProps.uiTransformComp!;
        const offX = -trans.anchorX * trans.width;
        const offY = -trans.anchorY * trans.height;

        const placeholderLabel = this._placeholderLabel;
        const textLabel = this._textLabel;
        if (textLabel) {
            textLabel.node._uiProps.uiTransformComp!.setContentSize(size.width - LEFT_PADDING, size.height);
            textLabel.node.setPosition(offX + LEFT_PADDING, offY + size.height, textLabel.node.position.z);
            if (this._inputMode === 0) {
                // textLabel.verticalAlign = VerticalTextAlignment.TOP;
            }
            // textLabel.enableWrapText = this._inputMode === InputMode.ANY;
            textLabel.enableWrapText = this._inputMode === 0;
        }

        if (placeholderLabel) {
            placeholderLabel.node._uiProps.uiTransformComp!.setContentSize(size.width - LEFT_PADDING, size.height);
            placeholderLabel.lineHeight = size.height;
            placeholderLabel.node.setPosition(offX + LEFT_PADDING, offY + size.height, placeholderLabel.node.position.z);
            // placeholderLabel.enableWrapText = this._inputMode === InputMode.ANY;
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


}

