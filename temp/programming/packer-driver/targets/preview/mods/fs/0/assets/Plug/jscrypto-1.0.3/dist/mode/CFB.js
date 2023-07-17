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
        var require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          !function (t, n) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = n();else if ("function" == typeof define && define.amd) define([], n);else if ("object" == typeof exports) exports.JsCrypto = n();else {
              var e = n();

              for (var i in t.JsCrypto = t.JsCrypto || {}, t.JsCrypto.mode = t.JsCrypto = t.JsCrypto || {}, t.JsCrypto.mode, e) {
                t.JsCrypto = t.JsCrypto || {}, t.JsCrypto.mode[i] = e[i];
              }
            }
          }(this, function () {
            return function () {
              "use strict";

              var t = {
                d: function d(n, e) {
                  for (var i in e) {
                    t.o(e, i) && !t.o(n, i) && Object.defineProperty(n, i, {
                      enumerable: !0,
                      get: e[i]
                    });
                  }
                },
                o: function o(t, n) {
                  return Object.prototype.hasOwnProperty.call(t, n);
                },
                r: function r(t) {
                  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                  }), Object.defineProperty(t, "t", {
                    value: !0
                  });
                }
              },
                  n = {};
              t.r(n), t.d(n, {
                CFB: function CFB() {
                  return r;
                }
              });

              var _e,
                  i = function () {
                function t(t) {
                  this.i = t, this.u = t.cipher, this.h = t.iv;
                }

                return t.prototype.processBlock = function (t, n) {}, t.createEncryptor = function (t) {
                  throw new Error("Not implemented yet");
                }, t.createDecryptor = function (t) {
                  throw new Error("Not implemented yet");
                }, t;
              }(),
                  o = (_e = function e(t, n) {
                return (_e = Object.setPrototypeOf || {
                  __proto__: []
                } instanceof Array && function (t, n) {
                  t.__proto__ = n;
                } || function (t, n) {
                  for (var e in n) {
                    Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                  }
                })(t, n);
              }, function (t, n) {
                function i() {
                  this.constructor = t;
                }

                _e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
              }),
                  r = function (t) {
                function n(n) {
                  var e = t.call(this, n) || this;
                  return e.l = [], e;
                }

                return o(n, t), n.prototype.generateKeyStreamAndEncrypt = function (t, n, e, i) {
                  var o,
                      r = this.h;
                  r ? (o = r.words.slice(0), this.h = void 0) : o = this.l, i.encryptBlock(o, 0);

                  for (var u = 0; u < e; u++) {
                    t[n + u] ^= o[u];
                  }
                }, n.createEncryptor = function (t) {
                  return new n.Encryptor(t);
                }, n.createDecryptor = function (t) {
                  return new n.Decryptor(t);
                }, n.Encryptor = function (t) {
                  function n() {
                    return null !== t && t.apply(this, arguments) || this;
                  }

                  return o(n, t), n.prototype.processBlock = function (t, n) {
                    this.generateKeyStreamAndEncrypt(t, n, this.u.blockSize, this.u), this.l = t.slice(n, n + this.u.blockSize);
                  }, n;
                }(n), n.Decryptor = function (t) {
                  function n() {
                    return null !== t && t.apply(this, arguments) || this;
                  }

                  return o(n, t), n.prototype.processBlock = function (t, n) {
                    var e = t.slice(n, n + this.u.blockSize);
                    this.generateKeyStreamAndEncrypt(t, n, this.u.blockSize, this.u), this.l = e;
                  }, n;
                }(n), n;
              }(i);

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
//# sourceMappingURL=CFB.js.map