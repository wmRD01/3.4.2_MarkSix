System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, EventMng, CommandType, WebSocketEvent, NotificationType, DelayTime, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../Script/Enum/NotificationType", _context.meta, extras);
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
    }, function (_unresolved_6) {
      NotificationType = _unresolved_6.NotificationType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "689e3IffX5KWZ9WHxExD4yY", "DelayTime", undefined);

      //#endregion
      _export("default", DelayTime = class DelayTime extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor() {
          super(...arguments);

          _defineProperty(this, "connetDelay", []);

          _defineProperty(this, "HeartrateNum", 0);
        }

        StartDT(_time) {
          var _this = this;

          return _asyncToGenerator(function* () {
            // console.log(this.connetDelay);
            return new Promise((resolve, reject) => {
              var DtID = setTimeout(() => {
                resolve();
                clearTimeout(DtID); // for (let index = 0; index < this.connetDelay.length; index++) {

                var index = _this.connetDelay.indexOf(DtID);

                if (index != -1) {
                  _this.connetDelay.splice(index - 1, index);
                } // }

              }, _time * 1000);

              _this.connetDelay.push(DtID);
            });
          })();
        }

        StartDT_NotClear(_time) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // console.log(this.connetDelay);
            return new Promise((resolve, reject) => {
              var DtID = setTimeout(() => {
                resolve();
                clearTimeout(DtID); // for (let index = 0; index < this.connetDelay.length; index++) {

                var index = _this2.connetDelay.indexOf(DtID);

                if (index != -1) {
                  _this2.connetDelay.splice(index - 1, index);
                } // }

              }, _time * 1000);
            });
          })();
        }

        StopAllDT() {
          var count = this.connetDelay.length;

          for (var index = 0; index < count; index++) {
            var DtID = this.connetDelay.shift();
            clearTimeout(DtID);
          }
        }

        SetGameHeartrate(setSecond) {
          // console.error("送心跳????????????");
          this.HeartrateNum = setInterval(() => {
            // console.error("送心跳");
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
              error: Error()
            }), NotificationType) : NotificationType).Pulic).emit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
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