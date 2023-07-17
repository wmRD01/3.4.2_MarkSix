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
              var t = n();

              for (var o in e.JsCrypto = e.JsCrypto || {}, e.JsCrypto.pad = e.JsCrypto = e.JsCrypto || {}, e.JsCrypto.pad, t) e.JsCrypto = e.JsCrypto || {}, e.JsCrypto.pad[o] = t[o];
            }
          }(this, function () {
            return function () {
              "use strict";

              var e = {
                d: function (n, t) {
                  for (var o in t) e.o(t, o) && !e.o(n, o) && Object.defineProperty(n, o, {
                    enumerable: !0,
                    get: t[o]
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
                NoPadding: function () {
                  return t;
                }
              });
              var t = {
                pad: function (e, n) {},
                unpad: function (e) {}
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
//# sourceMappingURL=NoPadding.js.map