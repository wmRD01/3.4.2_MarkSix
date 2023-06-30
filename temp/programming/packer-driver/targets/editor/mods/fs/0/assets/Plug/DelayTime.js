System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, EventMng, CommandType, WebSocketEvent, DelayTime, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Script/Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../Script/Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../Script/Enum/WebSocketEvent", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMng = _unresolved_3.default;
    }, function (_unresolved_4) {
      CommandType = _unresolved_4.CommandType;
    }, function (_unresolved_5) {
      WebSocketEvent = _unresolved_5.WebSocketEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "689e3IffX5KWZ9WHxExD4yY", "DelayTime", undefined);

      //#endregion
      _export("default", DelayTime = class DelayTime extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "connetDelay", []);

          _defineProperty(this, "HeartrateNum", 0);
        }

        async StartDT(_time) {
          // console.log(this.connetDelay);
          return new Promise((resolve, reject) => {
            let DtID = setTimeout(() => {
              resolve();
              clearTimeout(DtID); // for (let index = 0; index < this.connetDelay.length; index++) {

              let index = this.connetDelay.indexOf(DtID);

              if (index != -1) {
                this.connetDelay.splice(index - 1, index);
              } // }

            }, _time * 1000);
            this.connetDelay.push(DtID);
          });
        }

        async StartDT_NotClear(_time) {
          // console.log(this.connetDelay);
          return new Promise((resolve, reject) => {
            let DtID = setTimeout(() => {
              resolve();
              clearTimeout(DtID); // for (let index = 0; index < this.connetDelay.length; index++) {

              let index = this.connetDelay.indexOf(DtID);

              if (index != -1) {
                this.connetDelay.splice(index - 1, index);
              } // }

            }, _time * 1000);
          });
        }

        StopAllDT() {
          let count = this.connetDelay.length;

          for (let index = 0; index < count; index++) {
            let DtID = this.connetDelay.shift();
            clearTimeout(DtID);
          }
        }

        SetGameHeartrate(setSecond) {
          // console.error("送心跳????????????");
          this.HeartrateNum = setInterval(() => {
            // console.error("送心跳");
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
              error: Error()
            }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).sschk, {});
          }, setSecond * 1000);
        }

        StopGameHeartrate() {
          clearInterval(this.HeartrateNum);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DelayTime.js.map