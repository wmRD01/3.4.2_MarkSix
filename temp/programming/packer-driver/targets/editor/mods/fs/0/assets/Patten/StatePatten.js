System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, State, Context, GameState, LobbyState, PlayerState, ViewState, MessageState, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "./Singleton/BaseSingleton", _context.meta, extras);
  }

  _export({
    State: void 0,
    GameState: void 0,
    LobbyState: void 0,
    PlayerState: void 0,
    ViewState: void 0,
    MessageState: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38c6eAp4etK5qb4MNoZOtKn", "StatePatten", undefined);

      _export("State", State = class State {
        constructor() {
          _defineProperty(this, "context", void 0);
        }

        setContext(context) {
          this.context = context;
        }

        stayState(data) {
          this.changeState(data);
        }

      });

      Context = class Context extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "state", void 0);

          _defineProperty(this, "data", void 0);
        }

        // public isStateing: boolean;
        clearState() {
          this.state = null;
          this.data = null;
        }

        checkState() {
          return this.state == undefined ? false : true;
        }
        /**
         * The Context allows changing the State object at runtime.
        */


        transitionTo(_class, data) {
          if (!(this.state instanceof _class)) {
            this.data = data ? data : null;
            let newT = new _class();
            this.state = newT;
            this.state.setContext(this);
            this.requestChange();
          } else {
            this.requestStay(data);
          }
        }
        /**
         * 舊方法
         */


        transitionTo_Old(state, data) {
          // if (this.state != null && MainModel.getClassName(<any>state) == MainModel.getClassName(this.state)) {
          //     console.log(`Context: NowState ${(this.state).constructor.name}.`);
          //     this.isStateing = true
          //     return
          // }
          // this.isStateing = false
          // console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
          this.data = data ? data : null;
          this.state = state; // this.setMainScript()

          this.state.setContext(this);
          return this;
        }
        /**
         * The Context delegates part of its behavior to the current State object.
         */


        requestChange() {
          // console.log(`requestChange to ${js.getClassName(this.state)}`);
          this.state.changeState(this.data);
        }

        requestStay(data) {
          this.data = data ? data : null;
          this.state.stayState(data);
        } //打包後變數會被混淆，導致無法知道誰是誰，因此就只能先這樣，等待可以找到被混淆後的js明子再說，暫時先放著了
        // public setMainScript() {
        //     /**想不到更好寫法 先暫時這樣定義單利，雖然多佔2x5個記憶體空間，但目前先這樣 */
        //     if (!(this.state as MainGameState).main && MainGame.instance) {
        //         (this.state as MainGameState).main = MainGame.instance
        //     }
        //     if (!(this.state as MainLobbyState).main && MainLobby.instance) {
        //         (this.state as MainLobbyState).main = MainLobby.instance
        //     }
        //     if (!(this.state as MainLoadingState).main && MainLoading.instance) {
        //         (this.state as MainLoadingState).main = MainLoading.instance
        //     }
        //     // console.log(`main:${(this.state as MainGameState).main}`);
        //     // console.log(`lobby:${(this.state as MainLobbyState).main}`);
        //     // console.log(`loading:${(this.state as MainLoadingState).main}`);
        // }


      };

      _export("GameState", GameState = class GameState extends Context {});

      ;

      _export("LobbyState", LobbyState = class LobbyState extends Context {});

      ;

      _export("PlayerState", PlayerState = class PlayerState extends Context {});

      ;

      _export("ViewState", ViewState = class ViewState extends Context {});

      ;

      _export("MessageState", MessageState = class MessageState extends Context {});

      ; // export const GameState = new Context();
      // export const LobbyState = new Context();
      // export const PlayerState = new Context();
      // export const ViewState = new Context();
      // export const MessageState = new Context();
      // export const TestState = new Context();
      // export default new Context();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StatePatten.js.map