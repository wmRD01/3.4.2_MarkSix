System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MarkSixCommandType, MarkSix, Pakege, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMarkSixCommandType(extras) {
    _reporterNs.report("MarkSixCommandType", "../../Enum/MarkSixCommandType", _context.meta, extras);
  }

  _export("MarkSix", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MarkSixCommandType = _unresolved_2.MarkSixCommandType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5da67aKhq5MoZD8HGRa6jcR", "MarkSix", undefined);

      _export("MarkSix", MarkSix = class MarkSix {
        connet() {
          window.addEventListener("message", this.onReceiveMessage, false);
        }

        send(cmd, data) {
          console.log(cmd, data); // console.error("傳送封包喔", Packet);

          window.parent.postMessage(new Pakege(cmd, data), "*");
        }

        onReceiveMessage(event) {
          switch (event.cmd) {
            case (_crd && MarkSixCommandType === void 0 ? (_reportPossibleCrUseOfMarkSixCommandType({
              error: Error()
            }), MarkSixCommandType) : MarkSixCommandType).contact:
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
//# sourceMappingURL=MarkSix.js.map