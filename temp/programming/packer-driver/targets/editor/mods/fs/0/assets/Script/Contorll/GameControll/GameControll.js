System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CommandType, GameEvent, EventMng, PublicData, GameState, LobbyState, MessageState, PlayerState, ViewState, AccountLogIn, ChangeNickname, InGame, InLobby, InRoomLevel, BackBet, ClearBet, OwnerBet, ReferLastBet, SquintEnd, SquintProcess, UpdateCoin, GameCloseView, GameOpenView, LobbyCloseView, LobbyOpenView, PlayerInRoom, PlayerExitRoom, RefreshBankerBetList, RefreshPlayerBetList, GetGameRoomData, BackHomeMessage, ShowConfirmMessage, MessageCommend, LangType, ServerGameSenceType, BaseSingleton, SocketSetting, CloseBet, OpenNewGame, PlayerSendCardSquintStart, PlayerSendCardSquintEnd, ReadyBet, SendCards, ShuffleCrads, WaitOrEnd, BankerSendCardSquintStart, BankerSendCardSquintEnd, PlayerRepairCard, PlayerRepairCardSquintStart, PlayerRepairCardSquintEnd, BankerRepairCard, BankerRepairCardSquintStart, BankerRepairCardSquintEnd, ShowResoult, EndRound, EndBoot, StartBoot, RefreshRoomState, RefreshTabelData, Game, game, GameSceneName, RoomData, PanelLoading, GameStateEvent, GameSenceText, GameData, CheckLoading, CheckLoadingType, GameControll, _crd;

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

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../Patten/StatePatten", _context.meta, extras);
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

  function _reportPossibleCrUseOfViewState(extras) {
    _reporterNs.report("ViewState", "../../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAccountLogIn(extras) {
    _reporterNs.report("AccountLogIn", "../../State/LobbyState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeNickname(extras) {
    _reporterNs.report("ChangeNickname", "../../State/LobbyState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInGame(extras) {
    _reporterNs.report("InGame", "../../State/LobbyState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInLobby(extras) {
    _reporterNs.report("InLobby", "../../State/LobbyState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInRoomLevel(extras) {
    _reporterNs.report("InRoomLevel", "../../State/LobbyState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackBet(extras) {
    _reporterNs.report("BackBet", "../../State/PlayState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClearBet(extras) {
    _reporterNs.report("ClearBet", "../../State/PlayState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOwnerBet(extras) {
    _reporterNs.report("OwnerBet", "../../State/PlayState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReferLastBet(extras) {
    _reporterNs.report("ReferLastBet", "../../State/PlayState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSquintEnd(extras) {
    _reporterNs.report("SquintEnd", "../../State/PlayState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSquintProcess(extras) {
    _reporterNs.report("SquintProcess", "../../State/PlayState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpdateCoin(extras) {
    _reporterNs.report("UpdateCoin", "../../State/PlayState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCloseView(extras) {
    _reporterNs.report("GameCloseView", "../../State/ViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameOpenView(extras) {
    _reporterNs.report("GameOpenView", "../../State/ViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyCloseView(extras) {
    _reporterNs.report("LobbyCloseView", "../../State/ViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyOpenView(extras) {
    _reporterNs.report("LobbyOpenView", "../../State/ViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInRoom(extras) {
    _reporterNs.report("PlayerInRoom", "../../State/ViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerExitRoom(extras) {
    _reporterNs.report("PlayerExitRoom", "../../State/ViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRefreshBankerBetList(extras) {
    _reporterNs.report("RefreshBankerBetList", "../../State/ViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRefreshPlayerBetList(extras) {
    _reporterNs.report("RefreshPlayerBetList", "../../State/ViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetGameRoomData(extras) {
    _reporterNs.report("GetGameRoomData", "../../State/ViewState", _context.meta, extras);
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

  function _reportPossibleCrUseOfServerGameSenceType(extras) {
    _reporterNs.report("ServerGameSenceType", "../../Enum/ServerGameSenceType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCloseBet(extras) {
    _reporterNs.report("CloseBet", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenNewGame(extras) {
    _reporterNs.report("OpenNewGame", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSendCardSquintStart(extras) {
    _reporterNs.report("PlayerSendCardSquintStart", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSendCardSquintEnd(extras) {
    _reporterNs.report("PlayerSendCardSquintEnd", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReadyBet(extras) {
    _reporterNs.report("ReadyBet", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendCards(extras) {
    _reporterNs.report("SendCards", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShuffleCrads(extras) {
    _reporterNs.report("ShuffleCrads", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitOrEnd(extras) {
    _reporterNs.report("WaitOrEnd", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankerSendCardSquintStart(extras) {
    _reporterNs.report("BankerSendCardSquintStart", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankerSendCardSquintEnd(extras) {
    _reporterNs.report("BankerSendCardSquintEnd", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerRepairCard(extras) {
    _reporterNs.report("PlayerRepairCard", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerRepairCardSquintStart(extras) {
    _reporterNs.report("PlayerRepairCardSquintStart", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerRepairCardSquintEnd(extras) {
    _reporterNs.report("PlayerRepairCardSquintEnd", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankerRepairCard(extras) {
    _reporterNs.report("BankerRepairCard", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankerRepairCardSquintStart(extras) {
    _reporterNs.report("BankerRepairCardSquintStart", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankerRepairCardSquintEnd(extras) {
    _reporterNs.report("BankerRepairCardSquintEnd", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowResoult(extras) {
    _reporterNs.report("ShowResoult", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEndRound(extras) {
    _reporterNs.report("EndRound", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEndBoot(extras) {
    _reporterNs.report("EndBoot", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartBoot(extras) {
    _reporterNs.report("StartBoot", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRefreshRoomState(extras) {
    _reporterNs.report("RefreshRoomState", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRefreshTabelData(extras) {
    _reporterNs.report("RefreshTabelData", "../../State/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneName(extras) {
    _reporterNs.report("GameSceneName", "../../Enum/GameSenceName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomData(extras) {
    _reporterNs.report("RoomData", "../../Model/RoomData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSenceText(extras) {
    _reporterNs.report("GameSenceText", "../../Model/GameSenceText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Model/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoading(extras) {
    _reporterNs.report("CheckLoading", "../../Model/CheckLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoadingType(extras) {
    _reporterNs.report("CheckLoadingType", "../../Enum/CheckLoadingType", _context.meta, extras);
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
      GameState = _unresolved_6.GameState;
      LobbyState = _unresolved_6.LobbyState;
      MessageState = _unresolved_6.MessageState;
      PlayerState = _unresolved_6.PlayerState;
      ViewState = _unresolved_6.ViewState;
    }, function (_unresolved_7) {
      AccountLogIn = _unresolved_7.AccountLogIn;
      ChangeNickname = _unresolved_7.ChangeNickname;
      InGame = _unresolved_7.InGame;
      InLobby = _unresolved_7.InLobby;
      InRoomLevel = _unresolved_7.InRoomLevel;
    }, function (_unresolved_8) {
      BackBet = _unresolved_8.BackBet;
      ClearBet = _unresolved_8.ClearBet;
      OwnerBet = _unresolved_8.OwnerBet;
      ReferLastBet = _unresolved_8.ReferLastBet;
      SquintEnd = _unresolved_8.SquintEnd;
      SquintProcess = _unresolved_8.SquintProcess;
      UpdateCoin = _unresolved_8.UpdateCoin;
    }, function (_unresolved_9) {
      GameCloseView = _unresolved_9.GameCloseView;
      GameOpenView = _unresolved_9.GameOpenView;
      LobbyCloseView = _unresolved_9.LobbyCloseView;
      LobbyOpenView = _unresolved_9.LobbyOpenView;
      PlayerInRoom = _unresolved_9.PlayerInRoom;
      PlayerExitRoom = _unresolved_9.PlayerExitRoom;
      RefreshBankerBetList = _unresolved_9.RefreshBankerBetList;
      RefreshPlayerBetList = _unresolved_9.RefreshPlayerBetList;
      GetGameRoomData = _unresolved_9.GetGameRoomData;
    }, function (_unresolved_10) {
      BackHomeMessage = _unresolved_10.BackHomeMessage;
      ShowConfirmMessage = _unresolved_10.ShowConfirmMessage;
    }, function (_unresolved_11) {
      MessageCommend = _unresolved_11.MessageCommend;
    }, function (_unresolved_12) {
      LangType = _unresolved_12.LangType;
    }, function (_unresolved_13) {
      ServerGameSenceType = _unresolved_13.ServerGameSenceType;
    }, function (_unresolved_14) {
      BaseSingleton = _unresolved_14.default;
    }, function (_unresolved_15) {
      SocketSetting = _unresolved_15.default;
    }, function (_unresolved_16) {
      CloseBet = _unresolved_16.CloseBet;
      OpenNewGame = _unresolved_16.OpenNewGame;
      PlayerSendCardSquintStart = _unresolved_16.PlayerSendCardSquintStart;
      PlayerSendCardSquintEnd = _unresolved_16.PlayerSendCardSquintEnd;
      ReadyBet = _unresolved_16.ReadyBet;
      SendCards = _unresolved_16.SendCards;
      ShuffleCrads = _unresolved_16.ShuffleCrads;
      WaitOrEnd = _unresolved_16.WaitOrEnd;
      BankerSendCardSquintStart = _unresolved_16.BankerSendCardSquintStart;
      BankerSendCardSquintEnd = _unresolved_16.BankerSendCardSquintEnd;
      PlayerRepairCard = _unresolved_16.PlayerRepairCard;
      PlayerRepairCardSquintStart = _unresolved_16.PlayerRepairCardSquintStart;
      PlayerRepairCardSquintEnd = _unresolved_16.PlayerRepairCardSquintEnd;
      BankerRepairCard = _unresolved_16.BankerRepairCard;
      BankerRepairCardSquintStart = _unresolved_16.BankerRepairCardSquintStart;
      BankerRepairCardSquintEnd = _unresolved_16.BankerRepairCardSquintEnd;
      ShowResoult = _unresolved_16.ShowResoult;
      EndRound = _unresolved_16.EndRound;
      EndBoot = _unresolved_16.EndBoot;
      StartBoot = _unresolved_16.StartBoot;
      RefreshRoomState = _unresolved_16.RefreshRoomState;
      RefreshTabelData = _unresolved_16.RefreshTabelData;
    }, function (_unresolved_17) {
      GameSceneName = _unresolved_17.GameSceneName;
    }, function (_unresolved_18) {
      RoomData = _unresolved_18.default;
    }, function (_unresolved_19) {
      PanelLoading = _unresolved_19.default;
    }, function (_unresolved_20) {
      GameStateEvent = _unresolved_20.GameStateEvent;
    }, function (_unresolved_21) {
      GameSenceText = _unresolved_21.default;
    }, function (_unresolved_22) {
      GameData = _unresolved_22.default;
    }, function (_unresolved_23) {
      CheckLoading = _unresolved_23.default;
    }, function (_unresolved_24) {
      CheckLoadingType = _unresolved_24.CheckLoadingType;
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
          }), EventMng) : EventMng).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
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
            }), CommandType) : CommandType).gori:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).grre:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).grrl:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbop:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbob:
              this.viewState(cmd, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).ln:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).lbll:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).lbrl:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).lbsr:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).goin:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).ucnn:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).vlcr:
              this.lobbyState(cmd, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gonm:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbet:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbbk:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbcl:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbrt:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gpp:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gpe:
              if ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                error: Error()
              }), PublicData) : PublicData).getInstance.isResetView) return;
              this.playerState(cmd, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).ggs:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gbal:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs1:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs8:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs9:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs10:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs11:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs12:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs13:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs14:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs15:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs16:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs17:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs19:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs18:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs20:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs21:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs22:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs23:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs24:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs25:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs30:
              // console.log("???uisReaaset?");
              // console.log(PublicData.getInstance.isResetView);
              if ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                error: Error()
              }), PublicData) : PublicData).getInstance.isResetView) return;

              if (!(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                error: Error()
              }), PublicData) : PublicData).getInstance.isResetView && (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                error: Error()
              }), PublicData) : PublicData).getInstance.isResetProcessing) {
                (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
                  error: Error()
                }), PanelLoading) : PanelLoading).instance.closeLoading();
                (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.isResetProcessing = false;
              }

              this.gameState(cmd, data);
              break;
          }
        }

        viewState(cmd, data) {
          switch (cmd) {
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gori:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && GetGameRoomData === void 0 ? (_reportPossibleCrUseOfGetGameRoomData({
                error: Error()
              }), GetGameRoomData) : GetGameRoomData, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).grre:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && PlayerInRoom === void 0 ? (_reportPossibleCrUseOfPlayerInRoom({
                error: Error()
              }), PlayerInRoom) : PlayerInRoom, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).grrl:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && PlayerExitRoom === void 0 ? (_reportPossibleCrUseOfPlayerExitRoom({
                error: Error()
              }), PlayerExitRoom) : PlayerExitRoom, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbop:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && RefreshPlayerBetList === void 0 ? (_reportPossibleCrUseOfRefreshPlayerBetList({
                error: Error()
              }), RefreshPlayerBetList) : RefreshPlayerBetList, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbob:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && RefreshBankerBetList === void 0 ? (_reportPossibleCrUseOfRefreshBankerBetList({
                error: Error()
              }), RefreshBankerBetList) : RefreshBankerBetList, data);
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

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).lbsr:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).goin:
              (_crd && LobbyState === void 0 ? (_reportPossibleCrUseOfLobbyState({
                error: Error()
              }), LobbyState) : LobbyState).getInstance.transitionTo(_crd && InGame === void 0 ? (_reportPossibleCrUseOfInGame({
                error: Error()
              }), InGame) : InGame, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).lbll:
              (_crd && LobbyState === void 0 ? (_reportPossibleCrUseOfLobbyState({
                error: Error()
              }), LobbyState) : LobbyState).getInstance.transitionTo(_crd && InLobby === void 0 ? (_reportPossibleCrUseOfInLobby({
                error: Error()
              }), InLobby) : InLobby, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).lbrl:
              (_crd && LobbyState === void 0 ? (_reportPossibleCrUseOfLobbyState({
                error: Error()
              }), LobbyState) : LobbyState).getInstance.transitionTo(_crd && InRoomLevel === void 0 ? (_reportPossibleCrUseOfInRoomLevel({
                error: Error()
              }), InRoomLevel) : InRoomLevel, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).ucnn:
              (_crd && LobbyState === void 0 ? (_reportPossibleCrUseOfLobbyState({
                error: Error()
              }), LobbyState) : LobbyState).getInstance.transitionTo(_crd && ChangeNickname === void 0 ? (_reportPossibleCrUseOfChangeNickname({
                error: Error()
              }), ChangeNickname) : ChangeNickname, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).vlcr:
              (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).getInstance.roomNo = data.roomNo;
              (_crd && LobbyState === void 0 ? (_reportPossibleCrUseOfLobbyState({
                error: Error()
              }), LobbyState) : LobbyState).getInstance.transitionTo(_crd && InLobby === void 0 ? (_reportPossibleCrUseOfInLobby({
                error: Error()
              }), InLobby) : InLobby, data);
              break;
          }
        }

        playerState(cmd, data) {
          // console.log(cmd);
          switch (cmd) {
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gonm:
              (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
                error: Error()
              }), PlayerState) : PlayerState).getInstance.transitionTo(_crd && UpdateCoin === void 0 ? (_reportPossibleCrUseOfUpdateCoin({
                error: Error()
              }), UpdateCoin) : UpdateCoin, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbet:
              (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
                error: Error()
              }), PlayerState) : PlayerState).getInstance.transitionTo(_crd && OwnerBet === void 0 ? (_reportPossibleCrUseOfOwnerBet({
                error: Error()
              }), OwnerBet) : OwnerBet, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbbk:
              (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
                error: Error()
              }), PlayerState) : PlayerState).getInstance.transitionTo(_crd && BackBet === void 0 ? (_reportPossibleCrUseOfBackBet({
                error: Error()
              }), BackBet) : BackBet, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbcl:
              (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
                error: Error()
              }), PlayerState) : PlayerState).getInstance.transitionTo(_crd && ClearBet === void 0 ? (_reportPossibleCrUseOfClearBet({
                error: Error()
              }), ClearBet) : ClearBet, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbrt:
              (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
                error: Error()
              }), PlayerState) : PlayerState).getInstance.transitionTo(_crd && ReferLastBet === void 0 ? (_reportPossibleCrUseOfReferLastBet({
                error: Error()
              }), ReferLastBet) : ReferLastBet, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gpp:
              (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
                error: Error()
              }), PlayerState) : PlayerState).getInstance.transitionTo(_crd && SquintProcess === void 0 ? (_reportPossibleCrUseOfSquintProcess({
                error: Error()
              }), SquintProcess) : SquintProcess, data);
              break;

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gpe:
              (_crd && PlayerState === void 0 ? (_reportPossibleCrUseOfPlayerState({
                error: Error()
              }), PlayerState) : PlayerState).getInstance.transitionTo(_crd && SquintEnd === void 0 ? (_reportPossibleCrUseOfSquintEnd({
                error: Error()
              }), SquintEnd) : SquintEnd, data);
              break;
          }
        }

        gameState(cmd, data) {
          //紀錄場景
          (_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.nowStage = cmd;
          let senceText = new (_crd && GameSenceText === void 0 ? (_reportPossibleCrUseOfGameSenceText({
            error: Error()
          }), GameSenceText) : GameSenceText)().change(cmd); // console.log(senceText);

          if (senceText != undefined) (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdataSence, senceText);

          switch (cmd) {
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).ggs:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && RefreshRoomState === void 0 ? (_reportPossibleCrUseOfRefreshRoomState({
                error: Error()
              }), RefreshRoomState) : RefreshRoomState, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gbal:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && RefreshTabelData === void 0 ? (_reportPossibleCrUseOfRefreshTabelData({
                error: Error()
              }), RefreshTabelData) : RefreshTabelData, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs1:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && WaitOrEnd === void 0 ? (_reportPossibleCrUseOfWaitOrEnd({
                error: Error()
              }), WaitOrEnd) : WaitOrEnd, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs8:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && StartBoot === void 0 ? (_reportPossibleCrUseOfStartBoot({
                error: Error()
              }), StartBoot) : StartBoot, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs9:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && ShuffleCrads === void 0 ? (_reportPossibleCrUseOfShuffleCrads({
                error: Error()
              }), ShuffleCrads) : ShuffleCrads, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs10:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && OpenNewGame === void 0 ? (_reportPossibleCrUseOfOpenNewGame({
                error: Error()
              }), OpenNewGame) : OpenNewGame, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs11:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && ReadyBet === void 0 ? (_reportPossibleCrUseOfReadyBet({
                error: Error()
              }), ReadyBet) : ReadyBet, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs12:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && CloseBet === void 0 ? (_reportPossibleCrUseOfCloseBet({
                error: Error()
              }), CloseBet) : CloseBet, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs13:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && SendCards === void 0 ? (_reportPossibleCrUseOfSendCards({
                error: Error()
              }), SendCards) : SendCards, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs14:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && PlayerSendCardSquintStart === void 0 ? (_reportPossibleCrUseOfPlayerSendCardSquintStart({
                error: Error()
              }), PlayerSendCardSquintStart) : PlayerSendCardSquintStart, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs15:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && PlayerSendCardSquintEnd === void 0 ? (_reportPossibleCrUseOfPlayerSendCardSquintEnd({
                error: Error()
              }), PlayerSendCardSquintEnd) : PlayerSendCardSquintEnd, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs16:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && BankerSendCardSquintStart === void 0 ? (_reportPossibleCrUseOfBankerSendCardSquintStart({
                error: Error()
              }), BankerSendCardSquintStart) : BankerSendCardSquintStart, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs17:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && BankerSendCardSquintEnd === void 0 ? (_reportPossibleCrUseOfBankerSendCardSquintEnd({
                error: Error()
              }), BankerSendCardSquintEnd) : BankerSendCardSquintEnd, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs18:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && PlayerRepairCard === void 0 ? (_reportPossibleCrUseOfPlayerRepairCard({
                error: Error()
              }), PlayerRepairCard) : PlayerRepairCard, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs19:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && PlayerRepairCardSquintStart === void 0 ? (_reportPossibleCrUseOfPlayerRepairCardSquintStart({
                error: Error()
              }), PlayerRepairCardSquintStart) : PlayerRepairCardSquintStart, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs20:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && PlayerRepairCardSquintEnd === void 0 ? (_reportPossibleCrUseOfPlayerRepairCardSquintEnd({
                error: Error()
              }), PlayerRepairCardSquintEnd) : PlayerRepairCardSquintEnd, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs21:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && BankerRepairCard === void 0 ? (_reportPossibleCrUseOfBankerRepairCard({
                error: Error()
              }), BankerRepairCard) : BankerRepairCard, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs22:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && BankerRepairCardSquintStart === void 0 ? (_reportPossibleCrUseOfBankerRepairCardSquintStart({
                error: Error()
              }), BankerRepairCardSquintStart) : BankerRepairCardSquintStart, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs23:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && BankerRepairCardSquintEnd === void 0 ? (_reportPossibleCrUseOfBankerRepairCardSquintEnd({
                error: Error()
              }), BankerRepairCardSquintEnd) : BankerRepairCardSquintEnd, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs24:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && ShowResoult === void 0 ? (_reportPossibleCrUseOfShowResoult({
                error: Error()
              }), ShowResoult) : ShowResoult, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs25:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && EndRound === void 0 ? (_reportPossibleCrUseOfEndRound({
                error: Error()
              }), EndRound) : EndRound, data);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs30:
              (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).getInstance.transitionTo(_crd && EndBoot === void 0 ? (_reportPossibleCrUseOfEndBoot({
                error: Error()
              }), EndBoot) : EndBoot, data);
              break;
          } // if (!GameState.isStateing)
          // else
          //     GameState.requestStay()

        }

        checkError(cmd, data) {
          let message;
          message = this.serverErrorCode(data.code);

          switch (cmd) {
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).ssdis:
              //系統踢出
              (_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
                error: Error()
              }), CheckLoading) : CheckLoading).getInstance.resetState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
                error: Error()
              }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen);
              break; // case CommandType.ssntf://系統通知
              //     // Panel_Message.showConfirm(this, 0, message)
              //     break;
              // case CommandType.sschk://逾時檢查
              //     break;
              // default:
              //     message = this.serverErrorCode(data.code)

              break;
          }

          this.messaggeState(cmd, message);
        }

        messaggeState(cmd = "", caption) {
          // console.log(caption, cmd);
          let transformStr = this.serverErrorCode(caption); //error code代碼轉換文字

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

            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).excr:
            case (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).excc:
              (_crd && MessageState === void 0 ? (_reportPossibleCrUseOfMessageState({
                error: Error()
              }), MessageState) : MessageState).getInstance.transitionTo_Old(new (_crd && ShowConfirmMessage === void 0 ? (_reportPossibleCrUseOfShowConfirmMessage({
                error: Error()
              }), ShowConfirmMessage) : ShowConfirmMessage)(), transformStr).requestChange();
              (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
                error: Error()
              }), PanelLoading) : PanelLoading).instance.closeLoading();
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
          }), PublicData) : PublicData).getInstance.currentScene) {
            case (_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
              error: Error()
            }), GameSceneName) : GameSceneName).Lobby:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && LobbyCloseView === void 0 ? (_reportPossibleCrUseOfLobbyCloseView({
                error: Error()
              }), LobbyCloseView) : LobbyCloseView);
              break;

            case (_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
              error: Error()
            }), GameSceneName) : GameSceneName).GameRoom:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && GameCloseView === void 0 ? (_reportPossibleCrUseOfGameCloseView({
                error: Error()
              }), GameCloseView) : GameCloseView);
              break;
          }
        }

        resetWait() {
          switch ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.currentScene) {
            case (_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
              error: Error()
            }), GameSceneName) : GameSceneName).Lobby:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && LobbyOpenView === void 0 ? (_reportPossibleCrUseOfLobbyOpenView({
                error: Error()
              }), LobbyOpenView) : LobbyOpenView);
              break;

            case (_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
              error: Error()
            }), GameSceneName) : GameSceneName).GameRoom:
              (_crd && ViewState === void 0 ? (_reportPossibleCrUseOfViewState({
                error: Error()
              }), ViewState) : ViewState).getInstance.transitionTo(_crd && GameOpenView === void 0 ? (_reportPossibleCrUseOfGameOpenView({
                error: Error()
              }), GameOpenView) : GameOpenView);
              break;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameControll.js.map