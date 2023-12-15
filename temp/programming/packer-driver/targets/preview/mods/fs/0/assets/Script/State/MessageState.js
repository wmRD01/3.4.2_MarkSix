System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, State, PanelSystemMessage, GameStateEvent, NotificationType, WebSocketEvent, EventMng, ShowConfirmMessage, BackHomeMessage, DefaultlMessage, _crd;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelSystemMessage(extras) {
    _reporterNs.report("PanelSystemMessage", "../Contorll/NoClearNode/PanelSystemMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
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
    }, function (_unresolved_2) {
      State = _unresolved_2.State;
    }, function (_unresolved_3) {
      PanelSystemMessage = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameStateEvent = _unresolved_4.GameStateEvent;
    }, function (_unresolved_5) {
      NotificationType = _unresolved_5.NotificationType;
    }, function (_unresolved_6) {
      WebSocketEvent = _unresolved_6.WebSocketEvent;
    }, function (_unresolved_7) {
      EventMng = _unresolved_7.default;
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
            //引用會有循環問題
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm(caption, () => {
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).getInstance.emit((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
                error: Error()
              }), NotificationType) : NotificationType).Pulic, (_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
                error: Error()
              }), WebSocketEvent) : WebSocketEvent).CloseWindow);
            });
          }
        }

      });

      _export("DefaultlMessage", DefaultlMessage = class DefaultlMessage extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(caption) {
          (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
            error: Error()
          }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm(caption);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MessageState.js.map