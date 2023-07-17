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
          !function (r, t) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else if ("object" == typeof exports) exports.JsCrypto = t();else {
              var n = t();

              for (var e in r.JsCrypto = r.JsCrypto || {}, n) {
                r.JsCrypto[e] = n[e];
              }
            }
          }(this, function () {
            return function () {
              "use strict";

              var r = {
                d: function d(t, n) {
                  for (var e in n) {
                    r.o(n, e) && !r.o(t, e) && Object.defineProperty(t, e, {
                      enumerable: !0,
                      get: n[e]
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
              }(), r.o = function (r, t) {
                return Object.prototype.hasOwnProperty.call(r, t);
              }, r.r = function (r) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(r, "t", {
                  value: !0
                });
              };
              var t = {};
              r.r(t), r.d(t, {
                CipherParams: function CipherParams() {
                  return y;
                }
              });

              var n,
                  e = function e(r) {
                for (var t = r.nSigBytes, n = r.words, e = [], i = 0; i < t; i++) {
                  var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                }

                return e.join("");
              },
                  i = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                  o = (n = parseInt((/msie (\d+)/.exec(i) || [])[1], 10), isNaN(n) ? (n = parseInt((/trident\/.*; rv:(\d+)/.exec(i) || [])[1], 10), !isNaN(n) && n) : n);

              for (var a = function () {
                if ("undefined" != typeof window) {
                  var t = window.crypto || window.msCrypto;

                  if (!t) {
                    if (function (r, t) {
                      return !1 !== o && (!t || ("<" === r ? o < t : "<=" === r ? o <= t : ">" === r ? o > t : ">=" === r ? o >= t : o === t));
                    }("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
                      return Math.floor(512 * Math.random()) % 256;
                    };
                    throw new Error("Crypto module not found");
                  }

                  return function () {
                    return t.getRandomValues(new Uint32Array(1))[0];
                  };
                }

                return void 0 !== r.g && r.g.crypto ? function () {
                  return r.g.crypto.randomBytes(4).readInt32LE();
                } : function () {
                  return require("crypto").randomBytes(4).readInt32LE();
                };
              }(), f = function () {
                function r(t, n) {
                  if (Array.isArray(t) || !t) return this.i = Array.isArray(t) ? t : [], void (this.u = "number" == typeof n ? n : 4 * this.i.length);
                  if (t instanceof r) return this.i = t.words.slice(), void (this.u = t.nSigBytes);
                  var e;

                  try {
                    t instanceof ArrayBuffer ? e = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
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
                  for (var r = this.i, t = this.u, n = new Uint8Array(t), e = 0; e < t; e++) {
                    n[e] = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                  }

                  return n;
                }, r.prototype.concat = function (r) {
                  var t = r.words.slice(),
                      n = r.nSigBytes;
                  if (this.clamp(), this.u % 4) for (var e = 0; e < n; e++) {
                    var i = t[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    this.i[this.u + e >>> 2] |= i << 24 - (this.u + e) % 4 * 8;
                  } else for (e = 0; e < n; e += 4) {
                    this.i[this.u + e >>> 2] = t[e >>> 2];
                  }
                  return this.u += n, this;
                }, r.prototype.clamp = function () {
                  var r = this.u;
                  this.i[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, this.i.length = Math.ceil(r / 4);
                }, r.prototype.clone = function () {
                  return new r(this.i.slice(), this.u);
                }, r.random = function (t) {
                  for (var n = [], e = 0; e < t; e += 4) {
                    n.push(a());
                  }

                  return new r(n, t);
                }, r;
              }(), u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = [], c = 0; c < u.length; c++) {
                s[u.charCodeAt(c)] = c;
              }

              var h = {
                stringify: function stringify(r) {
                  var t = r.words,
                      n = r.nSigBytes;
                  r.clamp();

                  for (var e = [], i = 0; i < n; i += 3) {
                    for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
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
                  var t = r.length,
                      n = u.charAt(64);

                  if (n) {
                    var e = r.indexOf(n);
                    -1 !== e && (t = e);
                  }

                  for (var i = [], o = 0, a = 0; a < t; a++) {
                    if (a % 4) {
                      var c = s[r.charCodeAt(a - 1)] << a % 4 * 2 | s[r.charCodeAt(a)] >>> 6 - a % 4 * 2;
                      i[o >>> 2] |= c << 24 - o % 4 * 8, o++;
                    }
                  }

                  return new f(i, o);
                }
              },
                  v = {
                stringify: function stringify(r) {
                  var t = r.cipherText,
                      n = r.salt;
                  return t ? n ? new f([1398893684, 1701076831]).concat(n).concat(t).toString(h) : t.toString(h) : "";
                },
                parse: function parse(r) {
                  var t,
                      n = h.parse(r),
                      e = n.words;
                  return 1398893684 === e[0] && 1701076831 === e[1] && (t = new f(e.slice(2, 4)), e.splice(0, 4), n.nSigBytes -= 16), new y({
                    cipherText: n,
                    salt: t
                  });
                }
              },
                  y = function () {
                function r(r) {
                  this.formatter = v, r && (this.cipherText = r.cipherText, this.key = r.key, this.iv = r.iv, this.salt = r.salt, this.Algorithm = r.Algorithm, this.mode = r.mode, this.padding = r.padding, this.blockSize = r.blockSize, this.formatter = r.formatter || v);
                }

                return r.prototype.toString = function (r) {
                  return (r || this.formatter).stringify(this);
                }, r;
              }();

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
//# sourceMappingURL=CipherParams.js.map