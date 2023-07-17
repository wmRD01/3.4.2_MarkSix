System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ua, IEVer;

  function isIE(op, ver) {
    if (IEVer === false) return false;
    if (!ver) return true;
    if (op === "<") return IEVer < ver;
    if (op === "<=") return IEVer <= ver;
    if (op === ">") return IEVer > ver;
    if (op === ">=") return IEVer >= ver;
    if (op === "=") return IEVer === ver;
    return IEVer === ver;
  }

  _export("isIE", isIE);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddff0GC76tMmLJhu0UVKXIz", "browser", undefined);

      ua = typeof navigator !== "undefined" && navigator.userAgent ? navigator.userAgent.toLowerCase() : "";

      IEVer = (() => {
        var ver = parseInt((/msie (\d+)/.exec(ua) || [])[1], 10);

        if (isNaN(ver)) {
          ver = parseInt((/trident\/.*; rv:(\d+)/.exec(ua) || [])[1], 10);

          if (isNaN(ver)) {
            return false;
          }

          return ver;
        }

        return ver;
      })();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=browser.js.map