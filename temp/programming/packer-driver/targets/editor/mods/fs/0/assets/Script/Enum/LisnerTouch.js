System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, LisnerTouch;

  _export("LisnerTouch", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "075d7X6wVlNna5EpZrJ2k15", "LisnerTouch", undefined);

      (function (LisnerTouch) {
        LisnerTouch["TouchEnd"] = "touch-end";
      })(LisnerTouch || _export("LisnerTouch", LisnerTouch = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LisnerTouch.js.map