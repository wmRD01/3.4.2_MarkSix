System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MusicMng, State, GameData, EventMng, GameStateEvent, RoomData, GameEvent, TextAnimationType, EffectType, RefreshTabelData, RefreshRoomState, WaitOrEnd, StartBoot, ShuffleCrads, OpenNewGame, ReadyBet, CloseBet, SendCards, PlayerSendCardSquintStart, PlayerSendCardSquintEnd, BankerSendCardSquintStart, BankerSendCardSquintEnd, PlayerRepairCard, PlayerRepairCardSquintStart, PlayerRepairCardSquintEnd, BankerRepairCard, BankerRepairCardSquintStart, BankerRepairCardSquintEnd, ShowResoult, EndRound, EndBoot, _crd;

  function _reportPossibleCrUseOfMusicMng(extras) {
    _reporterNs.report("MusicMng", "../Manager/MusicMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Model/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomData(extras) {
    _reporterNs.report("RoomData", "../Model/RoomData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTextAnimationType(extras) {
    _reporterNs.report("TextAnimationType", "../Enum/TextAnimationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../Enum/EffectType", _context.meta, extras);
  }

  _export({
    RefreshTabelData: void 0,
    RefreshRoomState: void 0,
    WaitOrEnd: void 0,
    StartBoot: void 0,
    ShuffleCrads: void 0,
    OpenNewGame: void 0,
    ReadyBet: void 0,
    CloseBet: void 0,
    SendCards: void 0,
    PlayerSendCardSquintStart: void 0,
    PlayerSendCardSquintEnd: void 0,
    BankerSendCardSquintStart: void 0,
    BankerSendCardSquintEnd: void 0,
    PlayerRepairCard: void 0,
    PlayerRepairCardSquintStart: void 0,
    PlayerRepairCardSquintEnd: void 0,
    BankerRepairCard: void 0,
    BankerRepairCardSquintStart: void 0,
    BankerRepairCardSquintEnd: void 0,
    ShowResoult: void 0,
    EndRound: void 0,
    EndBoot: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MusicMng = _unresolved_2.default;
    }, function (_unresolved_3) {
      State = _unresolved_3.State;
    }, function (_unresolved_4) {
      GameData = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      GameStateEvent = _unresolved_6.GameStateEvent;
    }, function (_unresolved_7) {
      RoomData = _unresolved_7.default;
    }, function (_unresolved_8) {
      GameEvent = _unresolved_8.GameEvent;
    }, function (_unresolved_9) {
      TextAnimationType = _unresolved_9.TextAnimationType;
    }, function (_unresolved_10) {
      EffectType = _unresolved_10.EffectType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1f16gBXw1LWppRn03gRP67", "GameState", undefined);

      // var _mainGame: MainGame;
      _export("RefreshTabelData", RefreshTabelData = class RefreshTabelData extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdateTabelData, data);
        }

      });

      _export("RefreshRoomState", RefreshRoomState = class RefreshRoomState extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.roomStatus = data.status;
          (_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.roomTime = data.time;

          switch ((_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.roomStatus) {
            case 0:
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
                error: Error()
              }), GameStateEvent) : GameStateEvent).TextAnimation, (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
                error: Error()
              }), TextAnimationType) : TextAnimationType).WAITING);
              break;
            // case 1:
            //     EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.START)
            //     break;

            case 2:
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
                error: Error()
              }), GameStateEvent) : GameStateEvent).TextAnimation, (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
                error: Error()
              }), TextAnimationType) : TextAnimationType).FINISH);
              break;
          }
        }

      });

      _export("WaitOrEnd", WaitOrEnd = class WaitOrEnd extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView);

          switch ((_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.roomStatus) {
            case 0:
              (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
                error: Error()
              }), MusicMng) : MusicMng).effectPlay((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).AwaitingStart);
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
                error: Error()
              }), GameStateEvent) : GameStateEvent).TextAnimation, (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
                error: Error()
              }), TextAnimationType) : TextAnimationType).WAITING);
              break;
            // case 1:
            //     EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.START)
            //     break;

            case 2:
              (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
                error: Error()
              }), MusicMng) : MusicMng).effectPlay((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).GameOver);
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
                error: Error()
              }), GameStateEvent) : GameStateEvent).TextAnimation, (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
                error: Error()
              }), TextAnimationType) : TextAnimationType).FINISH);
              break;
          }
        }

      });
      /**一靴重啟 */


      _export("StartBoot", StartBoot = class StartBoot extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          /**無法使用監聽，避免玩家如果尚未開啟畫面導致無法清理畫面 */
          (_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.records = [];
          (_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
            error: Error()
          }), RoomData) : RoomData).getInstance.sequenceID = data.sequenceID;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView); // MainGame.instance.panelCardSequence.subDerailRoad.allClear()
          // MainGame.instance.panelCardSequence.subSimpleRoad.allClear()
        }

      });
      /**洗牌 */


      _export("ShuffleCrads", ShuffleCrads = class ShuffleCrads extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });

      _export("OpenNewGame", OpenNewGame = class OpenNewGame extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {//設定局號
        }

      });

      _export("ReadyBet", ReadyBet = class ReadyBet extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          console.log("進進了Ready", data);
          (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).effectPlay((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).StartBetting);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).TextAnimation, (_crd && TextAnimationType === void 0 ? (_reportPossibleCrUseOfTextAnimationType({
            error: Error()
          }), TextAnimationType) : TextAnimationType).START);
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.bankerPeekSeatID = 0;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.playerPeekSeatID = 0;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).OpenBet, data); // if (DEV)
          // setTimeout(() => {
          // let temp = new gbcf()
          // EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.gbcf, temp)
          // }, 3000);

          return;
          (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).musicPlay("bg_01");
          (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).effectPlay("new_round");
        }

      });

      _export("CloseBet", CloseBet = class CloseBet extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).effectPlay((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).StopBetting);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).CloseBet);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdateTabelData, data);
        }

      });
      /**發牌 */


      _export("SendCards", SendCards = class SendCards extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.bankerPeekSeatID = data.bankerPeekSeatID;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.playerPeekSeatID = data.playerPeekSeatID;
        }

      });

      _export("PlayerSendCardSquintStart", PlayerSendCardSquintStart = class PlayerSendCardSquintStart extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).SquintCard, data);
        }

      });

      _export("PlayerSendCardSquintEnd", PlayerSendCardSquintEnd = class PlayerSendCardSquintEnd extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).ShowdownCard, data);
        }

      });

      _export("BankerSendCardSquintStart", BankerSendCardSquintStart = class BankerSendCardSquintStart extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).SquintCard, data);
        }

      });

      _export("BankerSendCardSquintEnd", BankerSendCardSquintEnd = class BankerSendCardSquintEnd extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).ShowdownCard, data);
        }

      });

      _export("PlayerRepairCard", PlayerRepairCard = class PlayerRepairCard extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });

      _export("PlayerRepairCardSquintStart", PlayerRepairCardSquintStart = class PlayerRepairCardSquintStart extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).SquintCard, data);
        }

      });

      _export("PlayerRepairCardSquintEnd", PlayerRepairCardSquintEnd = class PlayerRepairCardSquintEnd extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).ShowdownCard, data);
        }

      });

      _export("BankerRepairCard", BankerRepairCard = class BankerRepairCard extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });

      _export("BankerRepairCardSquintStart", BankerRepairCardSquintStart = class BankerRepairCardSquintStart extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).SquintCard, data);
        }

      });

      _export("BankerRepairCardSquintEnd", BankerRepairCardSquintEnd = class BankerRepairCardSquintEnd extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).ShowdownCard, data);
        }

      });

      _export("ShowResoult", ShowResoult = class ShowResoult extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdateCoin, data.owner.credit);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).RoundResult, data);
        }

      });

      _export("EndRound", EndRound = class EndRound extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).EndRound);
        }

      });

      _export("EndBoot", EndBoot = class EndBoot extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).EndBoot);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameState.js.map