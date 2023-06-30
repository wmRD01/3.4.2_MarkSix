System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Label, Vec3, _decorator, CommandType, LangType, WebSocketEvent, ButtonMng, BaseComponent, SocketSetting, gbbk, gbcl, gbrt, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, UIBetFunctionButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../../../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../../../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../../../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgbbk(extras) {
    _reporterNs.report("gbbk", "../../Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgbcl(extras) {
    _reporterNs.report("gbcl", "../../Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgbrt(extras) {
    _reporterNs.report("gbrt", "../../Api/SendCommand", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CommandType = _unresolved_2.CommandType;
    }, function (_unresolved_3) {
      LangType = _unresolved_3.LangType;
    }, function (_unresolved_4) {
      WebSocketEvent = _unresolved_4.WebSocketEvent;
    }, function (_unresolved_5) {
      ButtonMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      BaseComponent = _unresolved_6.default;
    }, function (_unresolved_7) {
      SocketSetting = _unresolved_7.default;
    }, function (_unresolved_8) {
      gbbk = _unresolved_8.gbbk;
      gbcl = _unresolved_8.gbcl;
      gbrt = _unresolved_8.gbrt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "125537lRHhD2L1NGhuXGmQT", "UIBetFunctionButton", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", UIBetFunctionButton = (_dec = ccclass('UIBetFunctionButton'), _dec2 = property(Label), _dec3 = property(Button), _dec4 = property(Button), _dec(_class = (_class2 = (_temp = class UIBetFunctionButton extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelClear", _descriptor, this);

          _initializerDefineProperty(this, "buttonBackBet", _descriptor2, this);

          _initializerDefineProperty(this, "buttonReferLastBet", _descriptor3, this);
        }

        onEnable() {
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onBackBet", this.buttonBackBet);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onReferLastBet", this.buttonReferLastBet);
        }

        start() {
          this.adaptiveControlFrame();
        }

        onDisable() {
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).clearEvent(this.buttonBackBet);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).clearEvent(this.buttonReferLastBet);
        }

        setLanguage() {
          this.labelClear.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("008", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          super.setLanguage();
        }

        onBackBet() {
          let _gbbk = new (_crd && gbbk === void 0 ? (_reportPossibleCrUseOfgbbk({
            error: Error()
          }), gbbk) : gbbk)();

          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gbbk, _gbbk);
        }

        onClearBet() {
          let _gbcl = new (_crd && gbcl === void 0 ? (_reportPossibleCrUseOfgbcl({
            error: Error()
          }), gbcl) : gbcl)();

          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gbcl, _gbcl);
        }

        onReferLastBet() {
          let _gbrt = new (_crd && gbrt === void 0 ? (_reportPossibleCrUseOfgbrt({
            error: Error()
          }), gbrt) : gbrt)();

          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gbrt, _gbrt);
        }

        adaptiveControlFrame() {
          if (!window.isPhone) {// this.node.setScale(.9, .9, .9)
            // this.node.setPosition(Vec3.ZERO)
          } else {
            this.node.setScale(Vec3.ONE);
            this.node.setPosition(0, -220, 0);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelClear", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonBackBet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buttonReferLastBet", [_dec4], {
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
//# sourceMappingURL=UIBetFunctionButton.js.map