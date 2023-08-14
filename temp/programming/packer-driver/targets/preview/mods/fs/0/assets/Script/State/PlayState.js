System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, State, NotificationType, EventMng, PanelSystemMessage, SocketSetting, LangType, LobbyStateEvent, ChooeseBall, _crd;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelSystemMessage(extras) {
    _reporterNs.report("PanelSystemMessage", "../Contorll/NoClearNode/PanelSystemMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../Enum/LobbyStateEvent", _context.meta, extras);
  }

  _export("ChooeseBall", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      State = _unresolved_2.State;
    }, function (_unresolved_3) {
      NotificationType = _unresolved_3.NotificationType;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      PanelSystemMessage = _unresolved_5.default;
    }, function (_unresolved_6) {
      SocketSetting = _unresolved_6.default;
    }, function (_unresolved_7) {
      LangType = _unresolved_7.LangType;
    }, function (_unresolved_8) {
      LobbyStateEvent = _unresolved_8.LobbyStateEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f58f91wh1xHM53SzpGFZ0Gd", "PlayState", undefined);

      // /**自己入房 */
      // export class OwnerInRoom extends State {
      //     public changeState(data: RP.goin): void {
      //     }
      // }

      /**自身下注 */
      _export("ChooeseBall", ChooeseBall = class ChooeseBall extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          console.log("BET", data);

          if (data.code == "0") {
            console.log("下注成功");
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
              error: Error()
            }), NotificationType) : NotificationType).Pulic).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
              error: Error()
            }), LobbyStateEvent) : LobbyStateEvent).AttackBall);
          } else {
            console.log(data.betCode);
            if (data.betCode != null) (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
              error: Error()
            }), NotificationType) : NotificationType).Pulic).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
              error: Error()
            }), LobbyStateEvent) : LobbyStateEvent).UpDateBall, data);
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t(data.code, (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Server));
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayState.js.map