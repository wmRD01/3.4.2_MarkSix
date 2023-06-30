System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Label, Tween, _decorator, MyMath, GameEvent, GameStateEvent, BaseComponent, PublicModel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PanelTimer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyMath(extras) {
    _reporterNs.report("MyMath", "../../../Plug/MyMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgs(extras) {
    _reporterNs.report("gs11", "../Api/ResponeCommand", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Label = _cc.Label;
      Tween = _cc.Tween;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      MyMath = _unresolved_2.default;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      GameStateEvent = _unresolved_4.GameStateEvent;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      PublicModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5da5dNboMpC7ZHw9reouMyQ", "PanelTimer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelTimer = (_dec = ccclass('PanelTimer'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class PanelTimer extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelTime", _descriptor, this);

          _initializerDefineProperty(this, "labelState", _descriptor2, this);

          _defineProperty(this, "isStartTime", void 0);

          _defineProperty(this, "currentTime", void 0);
        }

        onEnable() {
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView, this.allReset);
          this.setEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).CloseBet, this.allReset);
          this.setEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).OpenBet, this.setTimer);
          this.setEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdataSence, this.changeState);
        }

        start() {
          if (window.isPhone) this.phoneInit();
        }

        update(dt) {
          if (this.labelTime.node.active) {
            this.currentTime = (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
              error: Error()
            }), MyMath) : MyMath).minus(this.currentTime, dt);
            let convetTime = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.formatSecond(this.currentTime);
            this.labelTime.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.formatSecond(this.currentTime);
            this.eventEmit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
              error: Error()
            }), GameStateEvent) : GameStateEvent).UpdateTime, convetTime);

            if ((_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
              error: Error()
            }), MyMath) : MyMath).minus(this.currentTime, dt) < 0) {
              this.eventEmit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
                error: Error()
              }), GameStateEvent) : GameStateEvent).UpdateTime, "0");
              this.labelTime.node.active = false;
            }
          }
        }

        onDisable() {
          this.deletEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).OpenBet, this.setTimer);
          this.deletEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).CloseBet, this.allReset);
          this.deletEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView, this.allReset);
          this.deletEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdataSence, this.changeState);
        }

        allReset() {
          this.labelTime.node.active = false;
          Tween.stopAllByTarget(this.labelTime);
        }

        changeState(str) {
          this.labelState.string = str;
        }

        setTimer(_gs11) {
          this.labelTime.node.active = true;
          console.log("time設定", _gs11.betTime);
          this.currentTime = _gs11.betTime;
          this.eventEmit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdateTime, this.currentTime.toString());
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelState", [_dec3], {
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
//# sourceMappingURL=PanelTimer.js.map