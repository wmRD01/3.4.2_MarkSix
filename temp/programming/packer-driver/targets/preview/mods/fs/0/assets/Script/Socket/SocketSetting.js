System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LangType, SocketSetting, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../Enum/LangType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LangType = _unresolved_2.LangType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3040cNHmwJIMbgvgBFEAo6y", "SocketSetting", undefined);

      SocketSetting = class SocketSetting {
        constructor() {
          _defineProperty(this, "UserLanguage", void 0);

          _defineProperty(this, "IsMessage", void 0);

          _defineProperty(this, "ClientSetObject", {});

          _defineProperty(this, "setboolean", false);

          _defineProperty(this, "ServerReturnData", {});

          _defineProperty(this, "Language", "");

          _defineProperty(this, "gameData", new Object());

          _defineProperty(this, "serverData", new Object());

          _defineProperty(this, "isGame", void 0);

          _defineProperty(this, "isServer", void 0);
        }

        setLang(language) {
          this.Language = language;
          return this;
        }

        init(_data, _type) {
          // console.log(_type, _data);
          var data = _type == (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game ? this.gameData : this.serverData;

          for (var key in _data) {
            if (!Object.prototype.hasOwnProperty.call(data, key)) {
              data[key] = _data[key];
            }
          }

          _type == (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game ? this.isGame = true : this.isServer = true;
          return this; //@ts-ignore
          // this.data = data;
          // console.log(language);
        }

        t(option, _type) {
          var data = _type == (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game ? this.gameData : this.serverData; // console.log(option);
          // console.log(data);

          if (data == null) {
            return option;
          }

          return data[option] == null ? option : data[option];
        }

        checkSetLang() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              if (_this.Language != "") resolve();
              var checkLoop = setInterval(() => {
                var isbool = _this.Language == "" ? true : false;

                if (!isbool) {
                  resolve();
                  clearInterval(checkLoop);
                }
              }, 100);
            });
          })();
        }

        checkLanguage(_type) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              if (_type == (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game && _this2.isGame) resolve();
              if (_type == (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Server && _this2.isServer) resolve();
              var checkLoop = setInterval(() => {
                var isbool = _type == (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                  error: Error()
                }), LangType) : LangType).Game ? _this2.isGame : _this2.isServer;

                if (isbool) {
                  // console.log(SocketSetting.data);
                  resolve();
                  clearInterval(checkLoop);
                }
              }, 100);
            });
          })();
        }

      };

      _export("default", new SocketSetting());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SocketSetting.js.map