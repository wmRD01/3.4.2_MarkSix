System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RP, PublicData, State, DelayTime, CommandType, EventMng, MusicMng, WebSocketEvent, PanelLoading, PublicModel, GameEvent, RoomData, GameStateEvent, ServerGameSenceType, MyMath, GameSenceText, SocketSetting, LangType, CheckLoading, CheckLoadingType, GetGameRoomData, PlayerInRoom, PlayerExitRoom, RefreshPlayerBetList, RefreshBankerBetList, LobbyCloseView, LobbyOpenView, GameCloseView, GameOpenView, _crd;

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayTime(extras) {
    _reporterNs.report("DelayTime", "../../Plug/DelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicMng(extras) {
    _reporterNs.report("MusicMng", "../Manager/MusicMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../Contorll/NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomData(extras) {
    _reporterNs.report("RoomData", "../Model/RoomData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerGameSenceType(extras) {
    _reporterNs.report("ServerGameSenceType", "../Enum/ServerGameSenceType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyMath(extras) {
    _reporterNs.report("MyMath", "../../Plug/MyMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSenceText(extras) {
    _reporterNs.report("GameSenceText", "../Model/GameSenceText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoading(extras) {
    _reporterNs.report("CheckLoading", "../Model/CheckLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoadingType(extras) {
    _reporterNs.report("CheckLoadingType", "../Enum/CheckLoadingType", _context.meta, extras);
  }

  _export({
    GetGameRoomData: void 0,
    PlayerInRoom: void 0,
    PlayerExitRoom: void 0,
    RefreshPlayerBetList: void 0,
    RefreshBankerBetList: void 0,
    LobbyCloseView: void 0,
    LobbyOpenView: void 0,
    GameCloseView: void 0,
    GameOpenView: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RP = _unresolved_2;
    }, function (_unresolved_3) {
      PublicData = _unresolved_3.default;
    }, function (_unresolved_4) {
      State = _unresolved_4.State;
    }, function (_unresolved_5) {
      DelayTime = _unresolved_5.default;
    }, function (_unresolved_6) {
      CommandType = _unresolved_6.CommandType;
    }, function (_unresolved_7) {
      EventMng = _unresolved_7.default;
    }, function (_unresolved_8) {
      MusicMng = _unresolved_8.default;
    }, function (_unresolved_9) {
      WebSocketEvent = _unresolved_9.WebSocketEvent;
    }, function (_unresolved_10) {
      PanelLoading = _unresolved_10.default;
    }, function (_unresolved_11) {
      PublicModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      GameEvent = _unresolved_12.GameEvent;
    }, function (_unresolved_13) {
      RoomData = _unresolved_13.default;
    }, function (_unresolved_14) {
      GameStateEvent = _unresolved_14.GameStateEvent;
    }, function (_unresolved_15) {
      ServerGameSenceType = _unresolved_15.ServerGameSenceType;
    }, function (_unresolved_16) {
      MyMath = _unresolved_16.default;
    }, function (_unresolved_17) {
      GameSenceText = _unresolved_17.default;
    }, function (_unresolved_18) {
      SocketSetting = _unresolved_18.default;
    }, function (_unresolved_19) {
      LangType = _unresolved_19.LangType;
    }, function (_unresolved_20) {
      CheckLoading = _unresolved_20.default;
    }, function (_unresolved_21) {
      CheckLoadingType = _unresolved_21.CheckLoadingType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "067db3RHFhLB7ktAyLj2m9e", "ViewState", undefined);

      /**更新房間狀態 */
      _export("GetGameRoomData", GetGameRoomData = class GetGameRoomData extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.TwoClassCheckData((_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance, data);

          let getbuffer = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance._base64ToBytes(data.records); // // console.log(getbuffer);ㄐ
          // let getbuffer = PublicModel.getInstance._base64ToBytes("AQMB")
          // let getbuffer = PublicModel.getInstance._base64ToBytes("AgECAwIDAgEBAgMDAQYDAwIBAwcBBQIJAgIBAgECAQEGAgECAgUBAQYCAQYBAgEBAgECAgEBAQECAQIC")
          // let map = new Map<number, GameRoundResult>()
          // for (let index = 0; index < getbuffer.length; index++) {
          //     /**先將Byte轉乘Binary，再判斷結果，最後把結果存起來 */
          //     map.set(index, new GameRoundResult(PublicModel.getInstance.convertByteToBinary(getbuffer[index])))
          // }
          // console.log(map);
          // console.log(byts);


          (_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.records = [];

          for (let index = 0; index < getbuffer.length; index++) {}

          console.log("開始處理Sence");
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isResetView = false;
          this.senceProcessing(data);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).ReProcessing, data);
          console.log("結束處理Sence");
          /**畫面更新完成，關閉重製畫面判斷 */
        }

        senceProcessing(data) {
          /**避免推波事件時造成程序卡住，不可為Null與undifind */
          let changeData = {};
          console.log(`當前狀態：${data.nowStage}`);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdataSence, new (_crd && GameSenceText === void 0 ? (_reportPossibleCrUseOfGameSenceText({
            error: Error()
          }), GameSenceText) : GameSenceText)().change(data.nowStage));

          switch (data.nowStage) {
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs1:
              changeData = new RP.ggs();
              changeData.time = data.roomTime;
              changeData.status = data.roomStatus;
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).ControllSandCommend, (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
                error: Error()
              }), ServerGameSenceType) : ServerGameSenceType).ggs, changeData);
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).ControllSandCommend, data.nowStage, changeData);
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs8:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs9:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs10:
              break;

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs11:
              changeData = new RP.gs11();
              changeData.betTime = (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
                error: Error()
              }), MyMath) : MyMath).divide(data.remainTime, 1000);
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).ControllSandCommend, data.nowStage, changeData);
              break;

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
            }), ServerGameSenceType) : ServerGameSenceType).gs18:
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs19:
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
              // console.error("開始還原喔");
              break;

            default:
              console.log(`當前少處理到?：${data.nowStage}`);
              break;
          }

          console.warn("EventSence", data.nowStage, changeData);
          console.warn("推波結束");
        }

      });
      /**其他玩家入房 */


      _export("PlayerInRoom", PlayerInRoom = class PlayerInRoom extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });
      /**其他玩家離開房 */


      _export("PlayerExitRoom", PlayerExitRoom = class PlayerExitRoom extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });
      /**更新閒家下注排行 */


      _export("RefreshPlayerBetList", RefreshPlayerBetList = class RefreshPlayerBetList extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });
      /**更新莊家下注排行 */


      _export("RefreshBankerBetList", RefreshBankerBetList = class RefreshBankerBetList extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });

      _export("LobbyCloseView", LobbyCloseView = class LobbyCloseView extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {// DelayTime.getInstance.StopGameHeartrate()
          // if (PublicData.getInstance.isSystemDis || !PublicData.getInstance.isInGameRoom) return;
          // EventMng.emit(GameEvent.ResetView)
          // MusicMng.effectStopAll();
          // PanelLoading.instance.openLoading()
          // PublicData.getInstance.isResetView = true;
          // // console.log("跳窗");
          // DelayTime.getInstance.StopAllDT()
          // //把所有計時器與畫面全部關掉
        }

      });

      _export("LobbyOpenView", LobbyOpenView = class LobbyOpenView extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        async changeState(data) {// if (PublicData.getInstance.isSystemDis || !PublicData.getInstance.isInGameRoom) return;
          // console.log("載資料")
          // EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.gori)
        }

      });

      _export("GameCloseView", GameCloseView = class GameCloseView extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
            error: Error()
          }), DelayTime) : DelayTime).getInstance.StopGameHeartrate();
          if (!(_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen) || !(_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isGameSence)) return;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView);
          (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).effectStopAll();
          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.openLoading((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("E_0004", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game));
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isResetProcessing = true;
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isResetView = true; // console.log("跳窗");

          (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
            error: Error()
          }), DelayTime) : DelayTime).getInstance.StopAllDT(); //把所有計時器與畫面全部關掉
        }

      });

      _export("GameOpenView", GameOpenView = class GameOpenView extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        async changeState(data) {
          if (!(_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen) || !(_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isGameSence)) return;
          console.log("載資料");
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gori);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ViewState.js.map