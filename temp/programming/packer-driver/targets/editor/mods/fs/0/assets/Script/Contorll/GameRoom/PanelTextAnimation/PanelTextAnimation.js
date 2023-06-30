System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Label, Layout, Node, Prefab, Sprite, Tween, tween, UIOpacity, v3, Vec3, _decorator, AssetType, GameEvent, GameStateEvent, TextAnimationType, AssetMng, BaseComponent, TextData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, PanelTextAnimation;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../../../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTextAnimationType(extras) {
    _reporterNs.report("TextAnimationType", "../../../Enum/TextAnimationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTextData(extras) {
    _reporterNs.report("TextData", "./TextData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AssetType = _unresolved_2.AssetType;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      GameStateEvent = _unresolved_4.GameStateEvent;
    }, function (_unresolved_5) {
      TextAnimationType = _unresolved_5.TextAnimationType;
    }, function (_unresolved_6) {
      AssetMng = _unresolved_6.default;
    }, function (_unresolved_7) {
      BaseComponent = _unresolved_7.default;
    }, function (_unresolved_8) {
      TextData = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c50ab/9fANB2p14zH8kehjK", "PanelTextAnimation", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelTextAnimation = (_dec = ccclass('PanelTextAnimation'), _dec2 = property(_crd && TextData === void 0 ? (_reportPossibleCrUseOfTextData({
        error: Error()
      }), TextData) : TextData), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Layout), _dec(_class = (_class2 = (_temp = class PanelTextAnimation extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "textData", _descriptor, this);

          _initializerDefineProperty(this, "content", _descriptor2, this);

          _initializerDefineProperty(this, "item", _descriptor3, this);

          _initializerDefineProperty(this, "spriteBG", _descriptor4, this);

          _initializerDefineProperty(this, "spriteStar", _descriptor5, this);

          _initializerDefineProperty(this, "textLayout", _descriptor6, this);

          _defineProperty(this, "nodeOpacity", void 0);

          _defineProperty(this, "getText", void 0);

          _defineProperty(this, "defaultSpacing", 8);
        }

        onLoad() {
          this.nodeOpacity = this.node.getComponent(UIOpacity);
        }

        onEnable() {
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView, this.reset);
          this.setEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).TextAnimation, this.actionProcess);
        }

        start() {// this.actionProcess(TextAnimationType.FINISH)
        }

        onDisable() {
          this.deletEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView, this.reset);
          this.deletEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).TextAnimation, this.actionProcess);
        }

        reset() {
          this.textLayout.enabled = true;
          this.spriteBG.node.active = false;
          this.content.removeAllChildren();
          this.nodeOpacity.opacity = 0;
          Tween.stopAllByTarget(this.node);
          Tween.stopAllByTarget(this.nodeOpacity);
          return this;
        }

        fadeOut(_node, callback) {
          let _tween = tween().to(1, {
            opacity: 0
          });

          if (callback) _tween.call(callback.bind(this)).clone(this.nodeOpacity).start();else _tween.clone(this.nodeOpacity).start();
        }

        actionProcess(str, callback) {
          this.reset();
          this.actionDoBefore(str);
          tween(this.node).delay(.15).call(() => {
            this.textLayout.enabled = false;

            switch (str) {
              case (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
                error: Error()
              }), TextAnimationType) : TextAnimationType).START:
                this.startAction(callback);
                break;

              case (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
                error: Error()
              }), TextAnimationType) : TextAnimationType).FINISH:
                this.finishAction(callback);
                break;

              case (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
                error: Error()
              }), TextAnimationType) : TextAnimationType).WAITING:
                this.waitingAction(callback);
                break;

              default:
                console.warn("尚未新增請新增");
            }
          }).start();
        }

        actionDoBefore(str) {
          this.nodeOpacity.opacity = 255;
          this.getText = str;
          let splitText = this.getText.split("");
          this.spriteBG.node.active = true;
          this.spriteStar.node.active = str == (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
            error: Error()
          }), TextAnimationType) : TextAnimationType).FINISH ? false : true;
          this.chooseBG();

          for (let index = 0; index < splitText.length; index++) {
            let item = instantiate(this.item);
            item.getComponent(UIOpacity).opacity = 0;
            item.getComponent(Label).string = splitText[index];
            item.name = splitText[index];
            item.getComponent(Label).font = str == (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
              error: Error()
            }), TextAnimationType) : TextAnimationType).FINISH ? this.textData.font_silver_alpha : this.textData.font_gold;
            this.content.addChild(item);
          }
        }

        startAction(callback) {
          let timeindex = 0;
          this.content.position = Vec3.ZERO;

          for (let index = 0; index < this.content.children.length; index++) {
            let initX = this.content.children[index].position.x + 50;
            this.content.children[index].getComponent(UIOpacity).opacity = 0;
            tween(this.content.children[index]).set({
              position: v3(initX, 0)
            }).delay(timeindex * 0.1).parallel(tween().by(0.3, {
              position: v3(-50, 0)
            }), tween().call(e => {
              tween(e.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            })).delay(1).call(() => {
              if (index == this.content.children.length - 1 && callback) this.fadeOut(this.node, callback);else this.fadeOut(this.node);
            }).start();
            timeindex++;
          }
        }

        finishAction(callback) {
          let timeindex = 0;
          this.content.position = v3(0, 30);

          for (let index = 0; index < this.content.children.length; index++) {
            let initY = index % 2 == 0 ? 50 : -50;
            this.content.children[index].getComponent(UIOpacity).opacity = 0;
            tween(this.content.children[index]).set({
              position: v3(this.content.children[index].position.x, initY)
            }).delay(timeindex * 0.08).parallel(tween().to(0.3, {
              position: v3(this.content.children[index].position.x, 0)
            }), tween().call(e => {
              tween(e.getComponent(UIOpacity)).to(0.4, {
                opacity: 255
              }).start();
            })).delay(0.1).call(_node => {
              _node.getComponent(Label).font = this.textData.font_silver;
            }) // .delay(2)
            // .call(() => {
            //     if (index == this.content.children.length - 1 && callback) this.fadeOut(this.node, callback)
            //     else this.fadeOut(this.node)
            // })
            .start();
            timeindex++;
          }
        }

        waitingAction(callback) {
          let timeindex = 0;

          for (let index = 0; index < this.content.children.length; index++) {
            let initY = index % 2 == 0 ? 50 : -50;
            this.content.children[index].getComponent(UIOpacity).opacity = 0;
            tween(this.content.children[index]).set({
              position: v3(this.content.children[index].position.x, initY)
            }).delay(timeindex * 0.08).parallel(tween().to(0.3, {
              position: v3(this.content.children[index].position.x, 0)
            }), tween().call(e => {
              tween(e.getComponent(UIOpacity)).to(0.4, {
                opacity: 255
              }).start();
            })).start();
            timeindex++;
          }
        }

        chooseBG() {
          if (!(_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).isAllOK) return;
          let spriteStr = this.getText == (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
            error: Error()
          }), TextAnimationType) : TextAnimationType).FINISH ? "finish_bg" : "start_bg";
          this.spriteBG.spriteFrame = (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite).data.get(spriteStr);
        }

        AddSpacing() {
          let tempSpacing = this.defaultSpacing;

          for (let index = 0; index < this.content.children.length; index++) {
            /**第一個文字不用增加間距 */
            if (index = 0) continue;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "textData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spriteBG", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteStar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "textLayout", [_dec7], {
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
//# sourceMappingURL=PanelTextAnimation.js.map