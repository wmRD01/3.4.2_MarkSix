System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, VerificationTimer, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("VerificationTimer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "963c0+6yD9EXYk5pXl5Fl3c", "VerificationTimer", undefined);

      _export("VerificationTimer", VerificationTimer = class VerificationTimer {
        constructor(_label, _button, _time) {
          _defineProperty(this, "time", 5);

          var rememberOrgStr = _label.string;
          _button.interactable = false;
          this.time = _time ? _time : this.time;
          _label.string = this.time.toString() + "s";
          var loop = setInterval(() => {
            this.time--;

            if (this.time < 0) {
              _button.interactable = true;
              _label.string = rememberOrgStr;
              clearInterval(loop);
              return;
            }

            _label.string = this.time.toString() + "s";
          }, 1000);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=VerificationTimer.js.map