System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CommandType, GameEvent, EventMng, PublicData, LobbyState, MessageState, PlayerState, AccountLogIn, BackHomeMessage, ShowConfirmMessage, MessageCommend, LangType, BaseSingleton, SocketSetting, Game, game, NotificationType, ChooeseBall, GameControll, _crd;

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyState(extras) {
    _reporterNs.report("LobbyState", "../../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageState(extras) {
    _reporterNs.report("MessageState", "../../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerState(extras) {
    _reporterNs.report("PlayerState", "../../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAccountLogIn(extras) {
    _reporterNs.report("AccountLogIn", "../../State/LobbyState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackHomeMessage(extras) {
    _reporterNs.report("BackHomeMessage", "../../State/MessageState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowConfirmMessage(extras) {
    _reporterNs.report("ShowConfirmMessage", "../../State/MessageState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageCommend(extras) {
    _reporterNs.report("MessageCommend", "../../Enum/MessageCommend", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChooeseBall(extras) {
    _reporterNs.report("ChooeseBall", "../../State/PlayState", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Game = _cc.Game;
      game = _cc.game;
    }, function (_unresolved_2) {
      CommandType = _unresolved_2.CommandType;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      PublicData = _unresolved_5.default;
    }, function (_unresolved_6) {
      LobbyState = _unresolved_6.LobbyState;
      MessageState = _unresolved_6.MessageState;
      PlayerState = _unresolved_6.PlayerState;
    }, function (_unresolved_7) {
      AccountLogIn = _unresolved_7.AccountLogIn;
    }, function (_unresolved_8) {
      BackHomeMessage = _unresolved_8.BackHomeMessage;
      ShowConfirmMessage = _unresolved_8.ShowConfirmMessage;
    }, function (_unresolved_9) {
      MessageCommend = _unresolved_9.MessageCommend;
    }, function (_unresolved_10) {
      LangType = _unresolved_10.LangType;
    }, function (_unresolved_11) {
      BaseSingleton = _unresolved_11.default;
    }, function (_unresolved_12) {
      SocketSetting = _unresolved_12.default;
    }, function (_unresolved_13) {
      NotificationType = _unresolved_13.NotificationType;
    }, function (_unresolved_14) {
      ChooeseBall = _unresolved_14.ChooeseBall;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b470373RSlNh6GtFvKjJhta", "GameControll", undefined);

      _export("default", GameControll = class GameControll extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        //利用推波方式去call Function 
        setControllEvent() {
          game.on(Game.EVENT_HIDE, this.resetView.bind(this));
          game.on(Game.EVENT_SHOW, this.resetWait.bind(this));
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Pulic).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ControllSandCommend, this.serverRespond, this);
        }

        serverRespond(cmd, data) {
          // console.log(cmd, data);
          if (data.code && data.code != 0) {
            this.messaggeState(cmd, data.code); // if (data.code > 0)   // console.log("出現錯誤啦!!!!!!!!!!");
            //     return;
          } // console.log(cmd);
          // console.log(MainModel.isResetView);


          switch (cmd) {
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).ln:
              this.lobbyState(cmd, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).bet:
              this.playState(cmd, data);
              break;
          }
        }

        lobbyState(cmd, data) {
          switch (cmd) {
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).ln:
              (_crd && LobbyState === void 0 ? (_reportPossibleCrUseOfLobbyState({
                error: Error()
              }), LobbyState) : LobbyState).getInstance.transitionTo(_crd && AccountLogIn === void 0 ? (_reportPossibleCrUseOfAccountLogIn({
                error: Error()
              }), AccountLogIn) : AccountLogIn, data);
              break;
          }
        }

        playState(cmd, data) {
          switch (cmd) {
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).bet:
              (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
                error: Error()
              }), PlayerState) : PlayerState).getInstance.transitionTo(_crd && ChooeseBall === void 0 ? (_reportPossibleCrUseOfChooeseBall({
                error: Error()
              }), ChooeseBall) : ChooeseBall, data);
              break;
          }
        }

        checkError(cmd, data) {
          var message;
          message = this.serverErrorCode(data.code);

          switch (cmd) {}

          this.messaggeState(cmd, message);
        }

        messaggeState(cmd, caption) {
          if (cmd === void 0) {
            cmd = "";
          }

          // console.log(caption, cmd);
          var transformStr = this.serverErrorCode(caption); //error code代碼轉換文字

          switch (cmd) {
            case (_crd && MessageCommend === void 0 ? (_reportPossibleCrUseOfMessageCommend({
              error: Error()
            }), MessageCommend) : MessageCommend).BackHome:
              (_crd && MessageState === void 0 ? (_reportPossibleCrUseOfMessageState({
                error: Error()
              }), MessageState) : MessageState).getInstance.transitionTo_Old(new (_crd && BackHomeMessage === void 0 ? (_reportPossibleCrUseOfBackHomeMessage({
                error: Error()
              }), BackHomeMessage) : BackHomeMessage)(), transformStr).requestChange();
              break;

            default:
              (_crd && MessageState === void 0 ? (_reportPossibleCrUseOfMessageState({
                error: Error()
              }), MessageState) : MessageState).getInstance.transitionTo_Old(new (_crd && ShowConfirmMessage === void 0 ? (_reportPossibleCrUseOfShowConfirmMessage({
                error: Error()
              }), ShowConfirmMessage) : ShowConfirmMessage)(), transformStr).requestChange();
              break;
          }
        }

        serverErrorCode(code) {
          if (isNaN(Number(code))) return code;else return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t(code, (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Server);
        }

        resetView() {
          switch ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.currentScene) {}
        }

        resetWait() {
          switch ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.currentScene) {}
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameControll.js.map