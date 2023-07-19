System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "cc/env", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PublicData, State, EventMng, GameData, Player, director, random, GameSceneName, DelayTime, MainLobby, lbsr, RoomData, WebSocketEvent, CommandType, DEV, PublicModel, EvnetType, AccountLogIn, InLobby, InRoomLevel, InGame, CreatorRoomData, ChangeNickname, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Patten/StatePatten", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameSceneName(extras) {
    _reporterNs.report("GameSceneName", "../Enum/GameSenceName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayTime(extras) {
    _reporterNs.report("DelayTime", "../../Plug/DelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainLobby(extras) {
    _reporterNs.report("MainLobby", "../View/MainLobby", _context.meta, extras);
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

  function _reportPossibleCrUseOfRoomData(extras) {
    _reporterNs.report("RoomData", "../Model/RoomData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvnetType(extras) {
    _reporterNs.report("EvnetType", "../Enum/EvnetType", _context.meta, extras);
  }

  _export({
    AccountLogIn: void 0,
    InLobby: void 0,
    InRoomLevel: void 0,
    InGame: void 0,
    ChangeNickname: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
      random = _cc.random;
    }, function (_unresolved_2) {
      PublicData = _unresolved_2.default;
    }, function (_unresolved_3) {
      State = _unresolved_3.State;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      GameData = _unresolved_5.default;
    }, function (_unresolved_6) {
      Player = _unresolved_6.default;
    }, function (_unresolved_7) {
      GameSceneName = _unresolved_7.GameSceneName;
    }, function (_unresolved_8) {
      DelayTime = _unresolved_8.default;
    }, function (_unresolved_9) {
      MainLobby = _unresolved_9.default;
    }, function (_unresolved_10) {
      lbsr = _unresolved_10.lbsr;
    }, function (_unresolved_11) {
      RoomData = _unresolved_11.default;
    }, function (_unresolved_12) {
      WebSocketEvent = _unresolved_12.WebSocketEvent;
    }, function (_unresolved_13) {
      CommandType = _unresolved_13.CommandType;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }, function (_unresolved_14) {
      PublicModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      EvnetType = _unresolved_15.EvnetType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddf10hE++JHjrkNbub+CYoR", "LobbyState", undefined);

      /**登入 */
      _export("AccountLogIn", AccountLogIn = class AccountLogIn extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          /**連線成功設定心跳 */
          (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
            error: Error()
          }), DelayTime) : DelayTime).getInstance.SetGameHeartrate((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.heartTime); // console.log(PublicData.getInstance);
          // console.log(GameData.getInstance.isFastInGame);

          /**更新部分資料 */

          (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.TwoClassCheckData((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance, data);

          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.isFastInGame) {
            director.preloadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
              error: Error()
            }), GameSceneName) : GameSceneName).GameRoom, () => {
              let _lbsr = new (_crd && lbsr === void 0 ? (_reportPossibleCrUseOflbsr({
                error: Error()
              }), lbsr) : lbsr)();

              _lbsr.roomNo = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).getInstance.roomNo;
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
              }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && EvnetType === void 0 ? (_reportPossibleCrUseOfEvnetType({
                error: Error()
              }), EvnetType) : EvnetType).Pulic).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
                error: Error()
              }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
                error: Error()
              }), CommandType) : CommandType).lbsr, _lbsr);
            });
          } else {
            director.preloadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
              error: Error()
            }), GameSceneName) : GameSceneName).Lobby, () => {
              director.loadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
                error: Error()
              }), GameSceneName) : GameSceneName).Lobby);
            });
          } // EventMng.getInstance.mapEvnet.get(EvnetType.Pulic).emit(GameEvent.CloseGameLoad)
          // //如果Server通知幣別時更新，如無則預設或者適應舊系統
          // if (data.coinType) GameData.getInstance.coinType = data.coinType
          // let getWallet = data.coinType == CoinType.Gold ? data.pointGold : data.pointSilver
          // this.mainGame.panel_UI.ui_Wallet.add(GameData.getInstance.coinType).setColor(GameData.getInstance.coinType).setNum(getWallet);
          // this.mainGame.panel_UI.ui_Settlement.setPlayName(data.nickname)
          // PublicModel.getInstance.TwoClassCheckData(Player.getInstance, data)
          // // console.log(MainModel);
          // if (window.isEditor) {
          // }
          // else {
          //     this.mainGame.panel_View_BG.view0_BG.outView()
          //     this.mainGame.panel_Exchange.show()

        }
        /**快速入房的關係，因此得放在這邊 */


      });
      /**進入大廳 */


      _export("InLobby", InLobby = class InLobby extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          /**顯示房間 */
          // if (GameData.getInstance.isFastInGame)
          // director.preloadScene(GameSenceName.Lobby, () => {
          //     director.loadScene(GameSenceName.Lobby)
          // })
          // EventMng.getInstance.mapEvnet.get(EvnetType.Pulic).emit(WebSocketEvent.SendCommand, CommandType.lbrl)
        }

      });
      /**進入房間級別 */


      _export("InRoomLevel", InRoomLevel = class InRoomLevel extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          /**顯示Level */
          // MainLobby.instance.inRoomLevel()
          // EventMng.getInstance.mapEvnet.get(EvnetType.Pulic).emit(WebSocketEvent.SendCommand, CommandType.lbsr)
          if (DEV) {
            (_crd && MainLobby === void 0 ? (_reportPossibleCrUseOfMainLobby({
              error: Error()
            }), MainLobby) : MainLobby).instance.inGame(data.rooms[0].roomNo);
          }
        }

      });
      /**進入遊戲 */


      _export("InGame", InGame = class InGame extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          if (data.code > 0) {
            if (!DEV) return;
            let data = new CreatorRoomData();
            data.playMinute = 1;
            data.roomName = Math.floor(random() * 100000).toString();
            data.betMin = 10;
            data.betMax = 10000;
            data.betOptions = [10, 200, 500, 1000, 10000];
            data.thinkSecond = 10;
            data.playMinute = 1440;
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && EvnetType === void 0 ? (_reportPossibleCrUseOfEvnetType({
              error: Error()
            }), EvnetType) : EvnetType).Pulic).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
              error: Error()
            }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).vlcr, data);
          } else {
            director.loadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
              error: Error()
            }), GameSceneName) : GameSceneName).GameRoom);
            console.log("成功進入遊戲");
          } // if (!GameData.getInstance.isFastInGame) {
          // }
          // throw new Error("Method not implemented.");

        }

      });

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

      _export("ChangeNickname", ChangeNickname = class ChangeNickname extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.nickname = data.nickname; // this.mainGame.panel_UI.ui_Settlement.setPlayName(data.nickname)
          // this.mainGame.panel_Loading.hide()
          // this.mainGame.panel_ChangeNickname.hide()
          // this.mainGame.panel_Message.show()
          // this.mainGame.panel_Message.messageInit(SocketSetting.t("026", LangType.Game))
          // this.mainGame.panel_Message.showSingleConfirm()
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LobbyState.js.map