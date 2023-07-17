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
          !function (r, n) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = n();else if ("function" == typeof define && define.amd) define([], n);else if ("object" == typeof exports) exports.JsCrypto = n();else {
              var t = n();

              for (var e in r.JsCrypto = r.JsCrypto || {}, t) {
                r.JsCrypto[e] = t[e];
              }
            }
          }(this, function () {
            return function () {
              "use strict";

              var r = {
                d: function d(n, t) {
                  for (var e in t) {
                    r.o(t, e) && !r.o(n, e) && Object.defineProperty(n, e, {
                      enumerable: !0,
                      get: t[e]
                    });
                  }
                }
              };
              r.g = function () {
                if ("object" == typeof globalThis) return globalThis;

                try {
                  return this || new Function("return this")();
                } catch (r) {
                  if ("object" == typeof window) return window;
                }
              }(), r.o = function (r, n) {
                return Object.prototype.hasOwnProperty.call(r, n);
              }, r.r = function (r) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(r, "t", {
                  value: !0
                });
              };
              var n = {};
              r.r(n), r.d(n, {
                Base64: function Base64() {
                  return h;
                }
              });

              var t,
                  e = function e(r) {
                for (var n = r.nSigBytes, t = r.words, e = [], i = 0; i < n; i++) {
                  var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                }

                return e.join("");
              },
                  i = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                  o = (t = parseInt((/msie (\d+)/.exec(i) || [])[1], 10), isNaN(t) ? (t = parseInt((/trident\/.*; rv:(\d+)/.exec(i) || [])[1], 10), !isNaN(t) && t) : t);

              for (var a = function () {
                if ("undefined" != typeof window) {
                  var n = window.crypto || window.msCrypto;

                  if (!n) {
                    if (function (r, n) {
                      return !1 !== o && (!n || ("<" === r ? o < n : "<=" === r ? o <= n : ">" === r ? o > n : ">=" === r ? o >= n : o === n));
                    }("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
                      return Math.floor(512 * Math.random()) % 256;
                    };
                    throw new Error("Crypto module not found");
                  }

                  return function () {
                    return n.getRandomValues(new Uint32Array(1))[0];
                  };
                }

                return void 0 !== r.g && r.g.crypto ? function () {
                  return r.g.crypto.randomBytes(4).readInt32LE();
                } : function () {
                  return require("crypto").randomBytes(4).readInt32LE();
                };
              }(), f = function () {
                function r(n, t) {
                  if (Array.isArray(n) || !n) return this.i = Array.isArray(n) ? n : [], void (this.u = "number" == typeof t ? t : 4 * this.i.length);
                  if (n instanceof r) return this.i = n.words.slice(), void (this.u = n.nSigBytes);
                  var e;

                  try {
                    n instanceof ArrayBuffer ? e = new Uint8Array(n) : (n instanceof Uint8Array || n instanceof Int8Array || n instanceof Uint8ClampedArray || n instanceof Int16Array || n instanceof Uint16Array || n instanceof Int32Array || n instanceof Uint32Array || n instanceof Float32Array || n instanceof Float64Array) && (e = new Uint8Array(n.buffer, n.byteOffset, n.byteLength));
                  } catch (r) {
                    throw new Error("Invalid argument");
                  }

                  if (!e) throw new Error("Invalid argument");

                  for (var i = e.byteLength, o = [], a = 0; a < i; a++) {
                    o[a >>> 2] |= e[a] << 24 - a % 4 * 8;
                  }

                  this.i = o, this.u = i;
                }

                return Object.defineProperty(r.prototype, "nSigBytes", {
                  get: function get() {
                    return this.u;
                  },
                  set: function set(r) {
                    this.u = r;
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(r.prototype, "words", {
                  get: function get() {
                    return this.i;
                  },
                  enumerable: !1,
                  configurable: !0
                }), r.prototype.toString = function (r) {
                  return r ? r.stringify(this) : e(this);
                }, r.prototype.toUint8Array = function () {
                  for (var r = this.i, n = this.u, t = new Uint8Array(n), e = 0; e < n; e++) {
                    t[e] = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                  }

                  return t;
                }, r.prototype.concat = function (r) {
                  var n = r.words.slice(),
                      t = r.nSigBytes;
                  if (this.clamp(), this.u % 4) for (var e = 0; e < t; e++) {
                    var i = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    this.i[this.u + e >>> 2] |= i << 24 - (this.u + e) % 4 * 8;
                  } else for (e = 0; e < t; e += 4) {
                    this.i[this.u + e >>> 2] = n[e >>> 2];
                  }
                  return this.u += t, this;
                }, r.prototype.clamp = function () {
                  var r = this.u;
                  this.i[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, this.i.length = Math.ceil(r / 4);
                }, r.prototype.clone = function () {
                  return new r(this.i.slice(), this.u);
                }, r.random = function (n) {
                  for (var t = [], e = 0; e < n; e += 4) {
                    t.push(a());
                  }

                  return new r(t, n);
                }, r;
              }(), u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = [], c = 0; c < u.length; c++) {
                s[u.charCodeAt(c)] = c;
              }

              var h = {
                stringify: function stringify(r) {
                  var n = r.words,
                      t = r.nSigBytes;
                  r.clamp();

                  for (var e = [], i = 0; i < t; i += 3) {
                    for (var o = (n[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (n[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | n[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < t; a++) {
                      e.push(u.charAt(o >>> 6 * (3 - a) & 63));
                    }
                  }

                  var f = u.charAt(64);
                  if (f) for (; e.length % 4;) {
                    e.push(f);
                  }
                  return e.join("");
                },
                parse: function parse(r) {
                  var n = r.length,
                      t = u.charAt(64);

                  if (t) {
                    var e = r.indexOf(t);
                    -1 !== e && (n = e);
                  }

                  for (var i = [], o = 0, a = 0; a < n; a++) {
                    if (a % 4) {
                      var c = s[r.charCodeAt(a - 1)] << a % 4 * 2 | s[r.charCodeAt(a)] >>> 6 - a % 4 * 2;
                      i[o >>> 2] |= c << 24 - o % 4 * 8, o++;
                    }
                  }

                  return new f(i, o);
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
//# sourceMappingURL=Base64.js.map