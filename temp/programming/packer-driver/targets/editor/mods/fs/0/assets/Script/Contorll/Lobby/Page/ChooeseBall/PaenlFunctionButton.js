System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, _decorator, LobbyStateEvent, BaseComponent, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PaenlFunctionButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      LobbyStateEvent = _unresolved_2.LobbyStateEvent;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c40de3PQUBAg4gf4+D9nKTH", "PaenlFunctionButton", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PaenlFunctionButton = (_dec = ccclass('PaenlFunctionButton'), _dec2 = property({
        type: Button,
        tooltip: "0:重選,1:隨機選號,2:確認"
      }), _dec(_class = (_class2 = (_temp = class PaenlFunctionButton extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "buttons", _descriptor, this);
        }

        onLoad() {
          this.setEvent((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangeBallButtonState, this.changeButtonState);
          this.setEvent((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangeConfirmState, this.changeConfirmState);
        }

        changeButtonState(isbool) {
          console.log(this);

          for (let index = 0; index < this.buttons.length; index++) {
            this.buttons[index].interactable = isbool; // if (!isbool)
            //     this.buttons[index].getComponent(Sprite).color = color().fromHEX("#818181")
            // else
            //     this.buttons[index].getComponent(Sprite).color = Color.WHITE;
          }
        }

        changeConfirmState(isbool) {
          console.log("???");
          this.buttons[2].interactable = isbool;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PaenlFunctionButton.js.map