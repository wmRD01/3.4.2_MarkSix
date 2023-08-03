System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ln, bet, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    ln: void 0,
    bet: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0956aFZs/FNnI9Kf7TbeJrM", "ResponeCommand", undefined);

      //#region 大廳封包 
      _export("ln", ln = class ln {
        constructor() {
          _defineProperty(this, "betCode", void 0);

          _defineProperty(this, "drawDateTime", void 0);

          _defineProperty(this, "drawIssue", void 0);

          _defineProperty(this, "memberId", void 0);
        }

      });

      _export("bet", bet = class bet {
        constructor() {
          _defineProperty(this, "code", void 0);

          _defineProperty(this, "betCode", void 0);

          _defineProperty(this, "drawIssue", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResponeCommand.js.map