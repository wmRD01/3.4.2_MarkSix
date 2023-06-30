System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CASTCommandType, GameEvent, EventMng, CASTAPI, Pakege, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCASTCommandType(extras) {
    _reporterNs.report("CASTCommandType", "../../Enum/CASTCommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../../Manager/EventMng", _context.meta, extras);
  }

  _export("CASTAPI", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CASTCommandType = _unresolved_2.CASTCommandType;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50247r6CFFIFZ9VfbelR/c2", "CASTAPI", undefined);

      _export("CASTAPI", CASTAPI = class CASTAPI {
        connet() {
          window.addEventListener("message", this.onReceiveMessage, false);
        }

        send(cmd, data) {
          console.log(cmd, data); // console.error("傳送封包喔", Packet);

          window.parent.postMessage(new Pakege(cmd, data), "*");
        }

        onReceiveMessage(event) {
          switch (event.cmd) {
            case (_crd && CASTCommandType === void 0 ? (_reportPossibleCrUseOfCASTCommandType({
              error: Error()
            }), CASTCommandType) : CASTCommandType).Guest:
              break;

            case (_crd && CASTCommandType === void 0 ? (_reportPossibleCrUseOfCASTCommandType({
              error: Error()
            }), CASTCommandType) : CASTCommandType).Orientation:
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).SetOrientation, event.data.orientation);
              break;
          }
        }

      });

      Pakege = class Pakege {
        constructor(_cmd, _data) {
          _defineProperty(this, "cmd", void 0);

          _defineProperty(this, "data", void 0);

          this.cmd = _cmd;
          this.data = _data;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CASTAPI.js.map