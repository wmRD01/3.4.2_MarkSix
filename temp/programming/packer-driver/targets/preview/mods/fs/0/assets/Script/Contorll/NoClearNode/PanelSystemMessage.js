System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, find, Label, UITransform, v3, _decorator, ButtonMng, MyMath, GameEvent, SocketSetting, LangType, WebSocketEvent, BaseSingletonComponent, _dec, _class, _temp, _crd, ccclass, property, PanelSystemMessage;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyMath(extras) {
    _reporterNs.report("MyMath", "../../../Plug/MyMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSingletonComponent(extras) {
    _reporterNs.report("BaseSingletonComponent", "../../../Patten/Singleton/BaseSingletonComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      find = _cc.find;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ButtonMng = _unresolved_2.default;
    }, function (_unresolved_3) {
      MyMath = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      SocketSetting = _unresolved_5.default;
    }, function (_unresolved_6) {
      LangType = _unresolved_6.LangType;
    }, function (_unresolved_7) {
      WebSocketEvent = _unresolved_7.WebSocketEvent;
    }, function (_unresolved_8) {
      BaseSingletonComponent = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bad31+lIVHXb1T0huoxdlc", "PanelSystemMessage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelSystemMessage = (_dec = ccclass('PanelSystemMessage'), _dec(_class = (_temp = class PanelSystemMessage extends (_crd && BaseSingletonComponent === void 0 ? (_reportPossibleCrUseOfBaseSingletonComponent({
        error: Error()
      }), BaseSingletonComponent) : BaseSingletonComponent)() {
        constructor() {
          super(...arguments);

          _defineProperty(this, "nodeFrame", void 0);

          _defineProperty(this, "labelCaption", void 0);

          _defineProperty(this, "buttonConfirm", void 0);

          _defineProperty(this, "labelConfirm", void 0);

          _defineProperty(this, "buttonCancel", void 0);

          _defineProperty(this, "labelCancel", void 0);

          _defineProperty(this, "twoBtnPositionX", void 0);
        }

        onLoad() {
          super.onLoad();
          this.nodeFrame = find("Frame", this.node);
          this.countPosition();
          this.buttonConfirm = find("ButtonConfirm", this.nodeFrame).getComponent(Button);
          this.labelConfirm = find("LabelConfirm", this.nodeFrame).getComponent(Label);
          this.buttonCancel = find("ButtonCancel", this.nodeFrame).getComponent(Button);
          this.labelCancel = find("LabelCancel", this.nodeFrame).getComponent(Label);
          this.labelCaption = find("LabelCaption", this.nodeFrame).getComponent(Label);
          this.hide();
        }

        onEnable() {
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SystemMessage, this.onSystemMessage);
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SetLanguage, this.setLanguage);
        }

        update() {
          if (this.buttonConfirm.node.active) {
            this.labelConfirm.node.position = this.buttonConfirm.node.position;
            var getScale = (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
              error: Error()
            }), MyMath) : MyMath).multiply(this.buttonConfirm.node.scale.x, 0.5);
            this.labelConfirm.node.scale = v3(getScale, getScale, getScale);
          }

          if (this.buttonCancel.node.active) {
            this.labelCancel.node.position = this.buttonCancel.node.position;

            var _getScale = (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
              error: Error()
            }), MyMath) : MyMath).multiply(this.buttonCancel.node.scale.x, 0.5);

            this.labelCancel.node.scale = v3(_getScale, _getScale, _getScale);
          }
        }

        setLanguage() {
          this.labelConfirm.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("1000", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          this.labelCancel.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("1001", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          super.setLanguage();
        }

        showSingleConfirm(confirm) {
          this.buttonConfirm.node.setPosition(0, -128);
          if (confirm) (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(confirm.target, confirm.callback, this.buttonConfirm, confirm.callbackValue ? confirm.callbackValue : null);else {
            (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
              error: Error()
            }), ButtonMng) : ButtonMng).clearEvent(this.buttonConfirm);
            (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
              error: Error()
            }), ButtonMng) : ButtonMng).addEvent(this, "closeMessage", this.buttonConfirm);
          }

          if (!this.buttonConfirm.node.active) {
            this.buttonConfirm.node.active = true;
            this.labelConfirm.node.active = true;
          }
        }

        showSingleCancel(confirm) {
          //取消按鈕
          this.buttonCancel.node.setPosition(0, -128);
          if (confirm) (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(confirm.target, confirm.callback, this.buttonConfirm, confirm.callbackValue ? confirm.callbackValue : null);else {
            (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
              error: Error()
            }), ButtonMng) : ButtonMng).clearEvent(this.buttonCancel);
            (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
              error: Error()
            }), ButtonMng) : ButtonMng).addEvent(this, "closeMessage", this.buttonCancel);
          }

          if (!this.buttonCancel.node.active) {
            this.buttonCancel.node.active = true;
            this.labelCancel.node.active = true;
          }
        }

        showDoubleButton(confirm) {
          // 確定按鈕
          this.buttonConfirm.node.setPosition(this.twoBtnPositionX, -128);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).clearEvent(this.buttonConfirm);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(confirm.target, confirm.callback, this.buttonConfirm, confirm.callbackValue ? confirm.callbackValue : null); //取消按鈕

          this.buttonCancel.node.setPosition(-this.twoBtnPositionX, -128);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).clearEvent(this.buttonCancel);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "closeMessage", this.buttonCancel);

          if (!this.buttonCancel.node.active) {
            this.buttonCancel.node.active = true;
            this.labelCancel.node.active = true;
          }

          if (!this.buttonConfirm.node.active) {
            this.buttonConfirm.node.active = true;
            this.labelConfirm.node.active = true;
          }
        } //暫時開通


        onSystemMessage(caption, _buttonFunctionApi) {
          this.messageInit(caption);
          this.showSingleConfirm(_buttonFunctionApi);
        }

        closeMessage(caption, _buttonFunctionApi) {
          this.hide();
        }

        closeWindow() {
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).CloseWindow);
        }

        setCaption(caption) {
          this.labelCaption.string = caption;
        }

        messageInit(caption) {
          this.buttonCancel.node.active = false;
          this.labelCancel.node.active = false;
          this.buttonConfirm.node.active = false;
          this.labelConfirm.node.active = false;
          this.setCaption(caption);
          this.show();
        }

        countPosition() {
          //計算間距
          var spacing = (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).divide(find("SpriteBG", this.nodeFrame).getComponent(UITransform).width, 2 + 1); //需要+1原因是要計算一個範圍內的平均值，去切割的話要+1才可得出
          //計算圖片的一半

          var half = (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).divide(find("SpriteBG", this.nodeFrame).getComponent(UITransform).width, 2);
          this.twoBtnPositionX = half - spacing; // console.log(this.twoBtnPositionX, spacing, half);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelSystemMessage.js.map