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
          !function (n, t) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else if ("object" == typeof exports) exports.JsCrypto = t();else {
              var e = t();

              for (var o in n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode = n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode, e) n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode[o] = e[o];
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                d: function (t, e) {
                  for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: e[o]
                  });
                },
                o: function (n, t) {
                  return Object.prototype.hasOwnProperty.call(n, t);
                },
                r: function (n) {
                  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                  }), Object.defineProperty(n, "t", {
                    value: !0
                  });
                }
              },
                  t = {};
              n.r(t), n.d(t, {
                ECB: function () {
                  return r;
                }
              });

              var e,
                  o = function () {
                function n(n) {
                  this.i = n, this.u = n.cipher, this.l = n.iv;
                }

                return n.prototype.processBlock = function (n, t) {}, n.createEncryptor = function (n) {
                  throw new Error("Not implemented yet");
                }, n.createDecryptor = function (n) {
                  throw new Error("Not implemented yet");
                }, n;
              }(),
                  i = (e = function (n, t) {
                return (e = Object.setPrototypeOf || {
                  __proto__: []
                } instanceof Array && function (n, t) {
                  n.__proto__ = t;
                } || function (n, t) {
                  for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                })(n, t);
              }, function (n, t) {
                function o() {
                  this.constructor = n;
                }

                e(n, t), n.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
              }),
                  r = function (n) {
                function t(t) {
                  return n.call(this, t) || this;
                }

                return i(t, n), t.createEncryptor = function (n) {
                  return new t.Encryptor(n);
                }, t.createDecryptor = function (n) {
                  return new t.Decryptor(n);
                }, t.Encryptor = function (n) {
                  function t() {
                    return null !== n && n.apply(this, arguments) || this;
                  }

                  return i(t, n), t.prototype.processBlock = function (n, t) {
                    this.u.encryptBlock(n, t);
                  }, t;
                }(t), t.Decryptor = function (n) {
                  function t() {
                    return null !== n && n.apply(this, arguments) || this;
                  }

                  return i(t, n), t.prototype.processBlock = function (n, t) {
                    this.u.decryptBlock(n, t);
                  }, t;
                }(t), t;
              }(o);

              return t;
            }();
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=ECB.js.map