System.register(["crypto", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _req, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_crypto) {
      _req = _crypto.__cjsMetaURL;
    }, function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "crypto": _req
        }, _require);

        (function () {
          !function (n, t) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else if ("object" == typeof exports) exports.JsCrypto = t();else {
              var r = t();

              for (var e in n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.pad = n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.pad, r) {
                n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.pad[e] = r[e];
              }
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                d: function d(t, r) {
                  for (var e in r) {
                    n.o(r, e) && !n.o(t, e) && Object.defineProperty(t, e, {
                      enumerable: !0,
                      get: r[e]
                    });
                  }
                }
              };
              n.g = function () {
                if ("object" == typeof globalThis) return globalThis;

                try {
                  return this || new Function("return this")();
                } catch (n) {
                  if ("object" == typeof window) return window;
                }
              }(), n.o = function (n, t) {
                return Object.prototype.hasOwnProperty.call(n, t);
              }, n.r = function (n) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(n, "t", {
                  value: !0
                });
              };
              var t = {};
              n.r(t), n.d(t, {
                Pkcs7: function Pkcs7() {
                  return f;
                }
              });

              var r,
                  e = function e(n) {
                for (var t = n.nSigBytes, r = n.words, e = [], i = 0; i < t; i++) {
                  var o = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                }

                return e.join("");
              },
                  i = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                  o = (r = parseInt((/msie (\d+)/.exec(i) || [])[1], 10), isNaN(r) ? (r = parseInt((/trident\/.*; rv:(\d+)/.exec(i) || [])[1], 10), !isNaN(r) && r) : r);

              var a = function () {
                if ("undefined" != typeof window) {
                  var t = window.crypto || window.msCrypto;

                  if (!t) {
                    if (function (n, t) {
                      return !1 !== o && (!t || ("<" === n ? o < t : "<=" === n ? o <= t : ">" === n ? o > t : ">=" === n ? o >= t : o === t));
                    }("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
                      return Math.floor(512 * Math.random()) % 256;
                    };
                    throw new Error("Crypto module not found");
                  }

                  return function () {
                    return t.getRandomValues(new Uint32Array(1))[0];
                  };
                }

                return void 0 !== n.g && n.g.crypto ? function () {
                  return n.g.crypto.randomBytes(4).readInt32LE();
                } : function () {
                  return require("crypto").randomBytes(4).readInt32LE();
                };
              }(),
                  u = function () {
                function n(t, r) {
                  if (Array.isArray(t) || !t) return this.i = Array.isArray(t) ? t : [], void (this.u = "number" == typeof r ? r : 4 * this.i.length);
                  if (t instanceof n) return this.i = t.words.slice(), void (this.u = t.nSigBytes);
                  var e;

                  try {
                    t instanceof ArrayBuffer ? e = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
                  } catch (n) {
                    throw new Error("Invalid argument");
                  }

                  if (!e) throw new Error("Invalid argument");

                  for (var i = e.byteLength, o = [], a = 0; a < i; a++) {
                    o[a >>> 2] |= e[a] << 24 - a % 4 * 8;
                  }

                  this.i = o, this.u = i;
                }

                return Object.defineProperty(n.prototype, "nSigBytes", {
                  get: function get() {
                    return this.u;
                  },
                  set: function set(n) {
                    this.u = n;
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(n.prototype, "words", {
                  get: function get() {
                    return this.i;
                  },
                  enumerable: !1,
                  configurable: !0
                }), n.prototype.toString = function (n) {
                  return n ? n.stringify(this) : e(this);
                }, n.prototype.toUint8Array = function () {
                  for (var n = this.i, t = this.u, r = new Uint8Array(t), e = 0; e < t; e++) {
                    r[e] = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                  }

                  return r;
                }, n.prototype.concat = function (n) {
                  var t = n.words.slice(),
                      r = n.nSigBytes;
                  if (this.clamp(), this.u % 4) for (var e = 0; e < r; e++) {
                    var i = t[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    this.i[this.u + e >>> 2] |= i << 24 - (this.u + e) % 4 * 8;
                  } else for (e = 0; e < r; e += 4) {
                    this.i[this.u + e >>> 2] = t[e >>> 2];
                  }
                  return this.u += r, this;
                }, n.prototype.clamp = function () {
                  var n = this.u;
                  this.i[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.i.length = Math.ceil(n / 4);
                }, n.prototype.clone = function () {
                  return new n(this.i.slice(), this.u);
                }, n.random = function (t) {
                  for (var r = [], e = 0; e < t; e += 4) {
                    r.push(a());
                  }

                  return new n(r, t);
                }, n;
              }();

              var f = {
                pad: function pad(n, t) {
                  for (var r = 4 * t, e = r - n.nSigBytes % r, i = e << 24 | e << 16 | e << 8 | e, o = [], a = 0; a < e; a += 4) {
                    o.push(i);
                  }

                  var f = new u(o, e);
                  n.concat(f);
                },
                unpad: function unpad(n) {
                  var t = 255 & n.words[n.nSigBytes - 1 >>> 2];
                  n.nSigBytes -= t;
                }
              };
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
//# sourceMappingURL=Pkcs7.js.map