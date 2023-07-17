System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, isIE, _crd, random;

  function makeRandFunction() {
    if (typeof window !== "undefined") {
      var c = window.crypto || window.msCrypto;

      if (!c) {
        if ((_crd && isIE === void 0 ? (_reportPossibleCrUseOfisIE({
          error: Error()
        }), isIE) : isIE)("<", 11)) {
          console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser");
          return function rand() {
            return Math.floor(Math.random() * 512) % 256;
          };
        }

        throw new Error("Crypto module not found");
      }

      return function rand() {
        return c.getRandomValues(new Uint32Array(1))[0];
      };
    } else if (typeof global !== "undefined" && global.crypto) {
      return function rand() {
        return global.crypto.randomBytes(4).readInt32LE();
      };
    } else if (typeof require === "function") {
      return function rand() {
        // Prevent webpack to automatically require("crypto").
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return __non_webpack_require__("crypto").randomBytes(4).readInt32LE();
      };
    }

    throw new Error("Unable to find crypto module");
  }

  function _reportPossibleCrUseOfisIE(extras) {
    _reporterNs.report("isIE", "./browser", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      isIE = _unresolved_2.isIE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af4b3PjBrRO/bxYNhR8Q0Zs", "random", undefined);

      _export("random", random = makeRandFunction());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=random.js.map