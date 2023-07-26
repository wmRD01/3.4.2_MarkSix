System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, State, PanelSystemMessage, NotificationType, GameStateEvent, EventMng, ButtonFunctionApi, ShowConfirmMessage, BackHomeMessage, DefaultlMessage, _crd;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelSystemMessage(extras) {
    _reporterNs.report("PanelSystemMessage", "../Contorll/NoClearNode/PanelSystemMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonFunctionApi(extras) {
    _reporterNs.report("ButtonFunctionApi", "../Model/ButtonFunctionApi", _context.meta, extras);
  }

  _export({
    ShowConfirmMessage: void 0,
    BackHomeMessage: void 0,
    DefaultlMessage: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
    }, function (_unresolved_2) {
      State = _unresolved_2.State;
    }, function (_unresolved_3) {
      PanelSystemMessage = _unresolved_3.default;
    }, function (_unresolved_4) {
      NotificationType = _unresolved_4.NotificationType;
    }, function (_unresolved_5) {
      GameStateEvent = _unresolved_5.GameStateEvent;
    }, function (_unresolved_6) {
      EventMng = _unresolved_6.default;
    }, function (_unresolved_7) {
      ButtonFunctionApi = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b743atOBlRCka7Kn6ziGiwA", "MessageState", undefined);

      _export("ShowConfirmMessage", ShowConfirmMessage = class ShowConfirmMessage extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(caption) {
          // if (PanelSystemMessage.instance.node.active) PanelSystemMessage.instance.setCaption(caption)
          // else {
          // PanelSystemMessage.instance.messageInit(caption)
          // PanelSystemMessage.instance.showSingleConfirm();
          // 在這轉彎成Gamemessage 就得不用了
          // }
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Pulic).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).GameMessage, caption);
        }

      });

      _export("BackHomeMessage", BackHomeMessage = class BackHomeMessage extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(caption) {
          console.log((_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
            error: Error()
          }), PanelSystemMessage) : PanelSystemMessage).instance);
          if ((_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
            error: Error()
          }), PanelSystemMessage) : PanelSystemMessage).instance.node.active) (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
            error: Error()
          }), PanelSystemMessage) : PanelSystemMessage).instance.setCaption(caption);else {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.messageInit(caption); //引用會有循環問題

            var confirmBtn = new (_crd && ButtonFunctionApi === void 0 ? (_reportPossibleCrUseOfButtonFunctionApi({
              error: Error()
            }), ButtonFunctionApi) : ButtonFunctionApi)();
            confirmBtn.target = find("GameWebSocekt").getComponent("GameWebSocket");
            confirmBtn.callback = "onCloseWindow";
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm(confirmBtn);
          }
        }

      });

      _export("DefaultlMessage", DefaultlMessage = class DefaultlMessage extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(caption) {
          (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
            error: Error()
          }), PanelSystemMessage) : PanelSystemMessage).instance.messageInit(caption);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MessageState.js.map