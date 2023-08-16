System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LangType, ServerGameSenceType, SocketSetting, RoomData, GameSenceText, _crd;

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerGameSenceType(extras) {
    _reporterNs.report("ServerGameSenceType", "../Enum/ServerGameSenceType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomData(extras) {
    _reporterNs.report("RoomData", "./RoomData", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LangType = _unresolved_2.LangType;
    }, function (_unresolved_3) {
      ServerGameSenceType = _unresolved_3.ServerGameSenceType;
    }, function (_unresolved_4) {
      SocketSetting = _unresolved_4.default;
    }, function (_unresolved_5) {
      RoomData = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67eea+RqmtJipuD13MJGx9x", "GameSenceText", undefined);

      _export("default", GameSenceText = class GameSenceText {
        change(cmd) {
          switch (cmd) {
            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs1:
              switch ((_crd && RoomData === void 0 ? (_reportPossibleCrUseOfRoomData({
                error: Error()
              }), RoomData) : RoomData).getInstance.roomStatus) {
                case 0:
                case 1:
                  return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                    error: Error()
                  }), SocketSetting) : SocketSetting).t("029", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                    error: Error()
                  }), LangType) : LangType).Game);

                case 2:
                  return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                    error: Error()
                  }), SocketSetting) : SocketSetting).t("030", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                    error: Error()
                  }), LangType) : LangType).Game);
              }

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs8:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("010", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs9:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("011", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs10:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("012", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs11:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("013", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs12:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("014", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs13:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("015", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs14:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("016", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs15:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("017", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs16:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("018", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs17:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("019", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs18:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("020", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs19:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("021", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs20:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("022", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs21:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("023", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs22:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("024", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs23:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("025", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs24:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("026", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs25:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("027", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);

            case (_crd && ServerGameSenceType === void 0 ? (_reportPossibleCrUseOfServerGameSenceType({
              error: Error()
            }), ServerGameSenceType) : ServerGameSenceType).gs30:
              return (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("028", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameSenceText.js.map