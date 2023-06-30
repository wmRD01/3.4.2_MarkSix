System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, State, GameStateEvent, EventMng, OwnerBet, ClearBet, BackBet, ReferLastBet, SquintProcess, SquintEnd, UpdateCoin, _crd;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Patten/StatePatten", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
  }

  _export({
    OwnerBet: void 0,
    ClearBet: void 0,
    BackBet: void 0,
    ReferLastBet: void 0,
    SquintProcess: void 0,
    SquintEnd: void 0,
    UpdateCoin: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      State = _unresolved_2.State;
    }, function (_unresolved_3) {
      GameStateEvent = _unresolved_3.GameStateEvent;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
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
      _export("OwnerBet", OwnerBet = class OwnerBet extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          if (data.code == 0) {
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
              error: Error()
            }), GameStateEvent) : GameStateEvent).UpdateCoin, data.credit);
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
              error: Error()
            }), GameStateEvent) : GameStateEvent).ClientBet, data);
          }
        }

      });
      /**下注清除 */


      _export("ClearBet", ClearBet = class ClearBet extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).BetClear);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdateCoin, data.credit);
        }

      });
      /**還原下注 */


      _export("BackBet", BackBet = class BackBet extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          if (data.kind == -1) return;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).BackBet, data);
        }

      });
      /**參照上一局下注 */


      _export("ReferLastBet", ReferLastBet = class ReferLastBet extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });
      /**瞇牌過程 */


      _export("SquintProcess", SquintProcess = class SquintProcess extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });
      /**瞇牌結束 */


      _export("SquintEnd", SquintEnd = class SquintEnd extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {}

      });

      _export("UpdateCoin", UpdateCoin = class UpdateCoin extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).emit((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdateCoin, data.money);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayState.js.map