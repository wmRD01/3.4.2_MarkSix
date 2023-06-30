System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Color, color, find, Label, Sprite, Tween, tween, UIOpacity, v3, BaseComponent, PublicModel, DataSoundSet, _crd, SoundType, SoundItem;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../Model/PublicModel", _context.meta, extras);
  }

  _export({
    default: void 0,
    SoundType: void 0,
    SoundItem: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Color = _cc.Color;
      color = _cc.color;
      find = _cc.find;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicModel = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bc06unvFtPcZE19bZJAJeU", "DataSoundSet", undefined);

      _export("default", DataSoundSet = class DataSoundSet extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "map_Item", new Map());

          _defineProperty(this, "buttonClose", void 0);

          _defineProperty(this, "buttonBlockBG", void 0);
        } // 1. 顏色漸變
        // 2. no off文字透明度與文字變化
        // tween(this.node.getComponent(Sprite))
        //     .to(.2,{ color: new Color().fromHEX("") })


      });

      (function (SoundType) {
        SoundType[SoundType["Music"] = 0] = "Music";
        SoundType[SoundType["Effect"] = 1] = "Effect";
      })(SoundType || _export("SoundType", SoundType = {}));

      (function (_SoundItem) {
        class Item {
          //private bindPanel: Panel_SoundSet;
          // this.bindPanel = _bindPanel
          constructor(_bindPanel, _type) {
            _defineProperty(this, "button", void 0);

            _defineProperty(this, "title", void 0);

            _defineProperty(this, "state", void 0);

            _defineProperty(this, "nodeSwitch", void 0);

            _defineProperty(this, "spriteSwitchBG", void 0);

            _defineProperty(this, "type", void 0);

            _defineProperty(this, "isAction", void 0);

            _defineProperty(this, "actionTime", .5);

            _defineProperty(this, "distanceLable", 15);

            _defineProperty(this, "distanceSprite", 30);

            _defineProperty(this, "uiOpacityStateLabel", void 0);

            _defineProperty(this, "buttonConvertStringPosition", void 0);

            this.type = _type; //像是SoundType[SoundType.Music] 可以直接取Key

            this.button = find(SoundType[_type] + "/btn", _bindPanel.node).getComponent(Button);
            this.spriteSwitchBG = this.button.getComponent(Sprite);
            this.nodeSwitch = find("switch_round", this.button.node);
            this.title = find("label_" + SoundType[_type] + "Title", _bindPanel.node).getComponent(Label);
            this.state = find("label_" + SoundType[_type] + "State", _bindPanel.node).getComponent(Label);
            this.uiOpacityStateLabel = this.state.getComponent(UIOpacity);
            this.buttonConvertStringPosition = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.state.node, this.button.node.parent); // bindPanel.node
            //@ts-ignore

            ButtonMng.addEvent(_bindPanel, "switchEevent", this.button, this.type.toString());
          }

          setTitle(str) {
            this.title.string = str;
          }

          getType() {
            return this.type;
          }

          init(getbool) {
            if (getbool) {
              this.state.string = "ON";
              this.state.node.position = v3(this.buttonConvertStringPosition.x - this.distanceLable, this.state.node.position.y, this.state.node.position.z);
              this.spriteSwitchBG.color = color(0, 0, 0, 255).fromHEX("#EA1337");
              this.nodeSwitch.position = v3(this.distanceSprite, this.nodeSwitch.position.y, this.nodeSwitch.position.y);
            } else {
              this.state.string = "OFF";
              this.state.node.position = v3(this.buttonConvertStringPosition.x + this.distanceLable, this.state.node.position.y, this.state.node.position.z);
              this.nodeSwitch.position = v3(-this.distanceSprite, this.nodeSwitch.position.y, this.nodeSwitch.position.y);
              this.spriteSwitchBG.color = color(0, 0, 0, 255).fromHEX("#494a4d");
            }
          }

          action(getbool) {
            if (getbool) {
              // tween(this.sprite_SwitchBG)
              //     .set({ color: color(0, 0, 0, 255) })
              //     // .to(this.actionTime / 2, { color: color().fromHEX("#EA1337") })
              //     .to(this.actionTime / 2, { color: color(234, 19, 55, 255) })
              //     .start()
              Tween.stopAllByTarget(this.state.node);
              Tween.stopAllByTarget(this.uiOpacityStateLabel);
              Tween.stopAllByTarget(this.spriteSwitchBG);
              Tween.stopAllByTarget(this.nodeSwitch);
              tween(this.state.node).to(this.actionTime / 2, {
                position: v3(this.buttonConvertStringPosition.x + this.distanceLable * 2, this.state.node.position.y, this.state.node.position.z)
              }).call(() => {
                this.state.node.position = v3(this.buttonConvertStringPosition.x + -this.distanceLable * 2, this.state.node.position.y, this.state.node.position.z);
              }).to(this.actionTime / 2, {
                position: v3(this.buttonConvertStringPosition.x - this.distanceLable, this.state.node.position.y, this.state.node.position.z)
              }).start();
              tween(this.uiOpacityStateLabel).to(this.actionTime / 2, {
                opacity: 0
              }).call(() => {
                this.state.string = "ON";
              }).to(this.actionTime / 2, {
                opacity: 255
              }).start();
              tween(this.spriteSwitchBG).to(this.actionTime * 2, {}, {
                onUpdate: (target, ration) => {
                  target.color = Color.lerp(new Color(), target.color, color().fromHEX("#EA1337"), ration);
                }
              }).start();
              tween(this.nodeSwitch).to(this.actionTime, {
                position: v3(this.distanceSprite, 0, 0)
              }).start();
            } else {
              tween(this.state.node).to(this.actionTime / 2, {
                position: v3(this.buttonConvertStringPosition.x + -this.distanceLable * 2, this.state.node.position.y, this.state.node.position.z)
              }).call(() => {
                this.state.node.position = v3(this.buttonConvertStringPosition.x + this.distanceLable * 2, this.state.node.position.y, this.state.node.position.z);
              }).to(this.actionTime / 2, {
                position: v3(this.buttonConvertStringPosition.x + this.distanceLable, this.state.node.position.y, this.state.node.position.z)
              }).start();
              tween(this.uiOpacityStateLabel).to(this.actionTime / 2, {
                opacity: 0
              }).call(() => {
                this.state.string = "OFF";
              }).to(this.actionTime / 2, {
                opacity: 255
              }).start();
              tween(this.spriteSwitchBG).to(this.actionTime * 2, {}, {
                onUpdate: (target, ration) => {
                  target.color = Color.lerp(new Color(), target.color, color().fromHEX("#494a4d"), ration);
                }
              }) // .repeat(this.actionTime * 30, tween()
              //     .call((e: Sprite) => {
              //         e.color = this.LerpRGB(e.color, color().fromHEX("#494a4d"), .1)
              //     })
              //     .delay(this.actionTime / 30)
              // )
              // .set({ color: color().fromHEX("#494a4d") })
              .start();
              tween(this.nodeSwitch).to(this.actionTime, {
                position: v3(-this.distanceSprite, 0, 0)
              }).start();
            } // let sprite = this.node.getComponent(Sprite) as Sprite;
            // sprite.color = new Color(255, 255, 255, 255);
            // let color = new Color(255, 255, 255, 0);
            // let curColor = new Color();
            // let tween = new Tween(sprite);
            // tween
            //   .to(1, {}, {
            //     onUpdate: (target, ratio: number) => {
            //       sprite.color = Color.lerp(curColor, Color.WHITE, color, ratio);
            //     }
            //   })
            //   .call(() => {
            //     this.node.active = false;
            //   })
            //   .start();

          }

          LerpRGB(a, b, t) {
            return new Color(a.r + (b.r - a.r) * t, a.g + (b.g - a.g) * t, a.b + (b.b - a.b) * t, a.a + (b.a - a.a) * t);
          }

        }

        _SoundItem.Item = Item;
      })(SoundItem || _export("SoundItem", SoundItem = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataSoundSet.js.map