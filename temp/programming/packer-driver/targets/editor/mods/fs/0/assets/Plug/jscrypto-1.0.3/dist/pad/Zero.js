System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        let require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          !function (e, n) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = n();else if ("function" == typeof define && define.amd) define([], n);else if ("object" == typeof exports) exports.JsCrypto = n();else {
              var o = n();

              for (var t in e.JsCrypto = e.JsCrypto || {}, e.JsCrypto.pad = e.JsCrypto = e.JsCrypto || {}, e.JsCrypto.pad, o) e.JsCrypto = e.JsCrypto || {}, e.JsCrypto.pad[t] = o[t];
            }
          }(this, function () {
            return function () {
              "use strict";

              var e = {
                d: function (n, o) {
                  for (var t in o) e.o(o, t) && !e.o(n, t) && Object.defineProperty(n, t, {
                    enumerable: !0,
                    get: o[t]
                  });
                },
                o: function (e, n) {
                  return Object.prototype.hasOwnProperty.call(e, n);
                },
                r: function (e) {
                  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                  }), Object.defineProperty(e, "t", {
                    value: !0
                  });
                }
              },
                  n = {};
              e.r(n), e.d(n, {
                Zero: function () {
                  return o;
                }
              });
              var o = {
                pad: function (e, n) {
                  var o = 4 * n;
                  e.clamp(), e.nSigBytes += o - (e.nSigBytes % o || o);
                },
                unpad: function (e) {
                  for (var n = e.words, o = e.nSigBytes - 1; o >= 0; o--) if (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) {
                    e.nSigBytes = o + 1;
                    break;
                  }
                }
              };
              return n;
            }();
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=Zero.js.map