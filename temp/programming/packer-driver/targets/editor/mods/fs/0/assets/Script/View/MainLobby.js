System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, random, _decorator, DEV, BaseSingletonComponent, lbll, lbrl, lbsr, PanelLoading, CommandType, GameSceneName, WebSocketEvent, EventMng, GameData, Player, PublicData, RoomData, CreatorRoomData, _dec, _class, _crd, ccclass, property, MainLobby;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingletonComponent(extras) {
    _reporterNs.report("BaseSingletonComponent", "../../Patten/Singleton/BaseSingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOflbll(extras) {
    _reporterNs.report("lbll", "../Contorll/Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOflbrl(extras) {
    _reporterNs.report("lbrl", "../Contorll/Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOflbsr(extras) {
    _reporterNs.report("lbsr", "../Contorll/Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../Contorll/NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneName(extras) {
    _reporterNs.report("GameSceneName", "../Enum/GameSenceName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Model/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Model/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomData(extras) {
    _reporterNs.report("RoomData", "../Model/RoomData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      random = _cc.random;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }, function (_unresolved_2) {
      BaseSingletonComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      lbll = _unresolved_3.lbll;
      lbrl = _unresolved_3.lbrl;
      lbsr = _unresolved_3.lbsr;
    }, function (_unresolved_4) {
      PanelLoading = _unresolved_4.default;
    }, function (_unresolved_5) {
      CommandType = _unresolved_5.CommandType;
    }, function (_unresolved_6) {
      GameSceneName = _unresolved_6.GameSceneName;
    }, function (_unresolved_7) {
      WebSocketEvent = _unresolved_7.WebSocketEvent;
    }, function (_unresolved_8) {
      EventMng = _unresolved_8.default;
    }, function (_unresolved_9) {
      GameData = _unresolved_9.default;
    }, function (_unresolved_10) {
      Player = _unresolved_10.default;
    }, function (_unresolved_11) {
      PublicData = _unresolved_11.default;
    }, function (_unresolved_12) {
      RoomData = _unresolved_12.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "653bbdPZ3RDmKpDCzluqRM3", "MainLobby", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MainLobby = (_dec = ccclass('MainLobby'), _dec(_class = class MainLobby extends (_crd && BaseSingletonComponent === void 0 ? (_reportPossibleCrUseOfBaseSingletonComponent({
        error: Error()
      }), BaseSingletonComponent) : BaseSingletonComponent)() {
        onLoad() {
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.currentScene = (_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).Lobby;
          super.onLoad();
        }

        start() {
          if (!DEV) (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.openLoading();else (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.closeLoading(); // this.inLobby()
        }

        inLobby() {
          let _lbll = new (_crd && lbll === void 0 ? (_reportPossibleCrUseOflbll({
            error: Error()
          }), lbll) : lbll)();

          _lbll.contentId = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.contentId;
          _lbll.type = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.gameType;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).lbll, _lbll);
        }

        inRoomLevel() {
          let _lbrl = new (_crd && lbrl === void 0 ? (_reportPossibleCrUseOflbrl({
            error: Error()
          }), lbrl) : lbrl)();

          _lbrl.contentId = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.contentId;
          _lbrl.type = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.gameType;
          _lbrl.level = 1;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).lbrl, _lbrl);
        }

        inGame(roomNo) {
          console.log("開始送?");

          let _lbsr = new (_crd && lbsr === void 0 ? (_reportPossibleCrUseOflbsr({
            error: Error()
          }), lbsr) : lbsr)();

          _lbsr.roomNo = roomNo == undefined || roomNo == null ? (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.roomNo : roomNo; //先寫死，到時候再做活

          _lbsr.contentId = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.contentId;
          _lbsr.seatNo = (_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.seatNo;
          _lbsr.password = (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.password;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).lbsr, _lbsr);
        }

        creatorRoom() {
          let data = new CreatorRoomData();
          data.playMinute = 1;
          data.roomName = Math.floor(random() * 100000).toString();
          data.betMin = 10;
          data.betMin = 10000;
          data.betOptions = [10, 200, 500, 1000, 10000];
          data.thinkSecond = 1;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).vlcr, data);
        }

      }) || _class));

      CreatorRoomData = class CreatorRoomData {
        constructor() {
          _defineProperty(this, "contentId", "10");

          _defineProperty(this, "roomType", 1);

          _defineProperty(this, "roomLevel", 1);

          _defineProperty(this, "roomName", "");

          _defineProperty(this, "currency", 0);

          _defineProperty(this, "modeNonComm", false);

          _defineProperty(this, "playMinute", 0);

          _defineProperty(this, "charge", 0);

          _defineProperty(this, "enableBothBet", false);

          _defineProperty(this, "betMin", 0);

          _defineProperty(this, "betMax", 0);

          _defineProperty(this, "betOptions", null);

          _defineProperty(this, "seat", 100);

          _defineProperty(this, "thinkSecond", 0);
        } // 下注思考時間.單位:秒


      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainLobby.js.map