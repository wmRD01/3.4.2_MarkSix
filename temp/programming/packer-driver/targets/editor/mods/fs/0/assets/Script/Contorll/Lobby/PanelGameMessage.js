System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, _decorator, GameEvent, GameStateEvent, BaseComponent, MessageItem, _dec, _dec2, _dec3, _dec4, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, PanelGameMessage;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageItem(extras) {
    _reporterNs.report("MessageItem", "../../Model/MessageItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GameEvent = _unresolved_2.GameEvent;
    }, function (_unresolved_3) {
      GameStateEvent = _unresolved_3.GameStateEvent;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      MessageItem = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e764dzmf5xK9r4RjSm9eHTf", "PanelGameMessage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelGameMessage = (_dec = ccclass('PanelGameMessage'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class2 = (_class3 = (_temp = class PanelGameMessage extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "item", _descriptor, this);

          _initializerDefineProperty(this, "spriteContent", _descriptor2, this);

          _initializerDefineProperty(this, "labelContent", _descriptor3, this);
        }

        onEnable() {
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView, this.allReset);
          this.setEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).GameMessage, this.onGameMessage);
        }

        start() {
          if (window.isPhone) this.phoneInit();
        }

        allReset() {
          this.spriteContent.removeAllChildren();
          this.labelContent.removeAllChildren();
        }

        onGameMessage(str) {
          let _node = instantiate(this.item);

          let _class = _node.getComponent(_crd && MessageItem === void 0 ? (_reportPossibleCrUseOfMessageItem({
            error: Error()
          }), MessageItem) : MessageItem);

          if (this.spriteContent.children.length > 0) for (let index = 0; index < this.spriteContent.children.length; index++) {
            this.spriteContent.children[index].getComponent(_crd && MessageItem === void 0 ? (_reportPossibleCrUseOfMessageItem({
              error: Error()
            }), MessageItem) : MessageItem).moveUp();
          }
          this.spriteContent.addChild(_node);
          this.labelContent.addChild(_class.label.node);
          _class.label.string = str;

          _class.outFade();
        }

        onDisable() {
          this.deletEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView, this.allReset);
          this.deletEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).GameMessage, this.onGameMessage);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "spriteContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "labelContent", [_dec4], {
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
//# sourceMappingURL=PanelGameMessage.js.map