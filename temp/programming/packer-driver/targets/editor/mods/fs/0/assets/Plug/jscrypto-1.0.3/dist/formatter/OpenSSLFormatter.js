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
        let require = _loader.createRequireWithReqMap({
          "crypto": _req
        }, _require);

        (function () {
          !function (t, r) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = r();else if ("function" == typeof define && define.amd) define([], r);else if ("object" == typeof exports) exports.JsCrypto = r();else {
              var n = r();

              for (var e in t.JsCrypto = t.JsCrypto || {}, t.JsCrypto.formatter = t.JsCrypto = t.JsCrypto || {}, t.JsCrypto.formatter, n) t.JsCrypto = t.JsCrypto || {}, t.JsCrypto.formatter[e] = n[e];
            }
          }(this, function () {
            return function () {
              "use strict";

              var t = {
                d: function (r, n) {
                  for (var e in n) t.o(n, e) && !t.o(r, e) && Object.defineProperty(r, e, {
                    enumerable: !0,
                    get: n[e]
                  });
                }
              };
              t.g = function () {
                if ("object" == typeof globalThis) return globalThis;

                try {
                  return this || new Function("return this")();
                } catch (t) {
                  if ("object" == typeof window) return window;
                }
              }(), t.o = function (t, r) {
                return Object.prototype.hasOwnProperty.call(t, r);
              }, t.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(t, "t", {
                  value: !0
                });
              };
              var r = {};
              t.r(r), t.d(r, {
                OpenSSLFormatter: function () {
                  return y;
                }
              });

              var n,
                  e = function () {
                function t(t) {
                  this.formatter = y, t && (this.cipherText = t.cipherText, this.key = t.key, this.iv = t.iv, this.salt = t.salt, this.Algorithm = t.Algorithm, this.mode = t.mode, this.padding = t.padding, this.blockSize = t.blockSize, this.formatter = t.formatter || y);
                }

                return t.prototype.toString = function (t) {
                  return (t || this.formatter).stringify(this);
                }, t;
              }(),
                  i = function (t) {
                for (var r = t.nSigBytes, n = t.words, e = [], i = 0; i < r; i++) {
                  var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                }

                return e.join("");
              },
                  o = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                  f = (n = parseInt((/msie (\d+)/.exec(o) || [])[1], 10), isNaN(n) ? (n = parseInt((/trident\/.*; rv:(\d+)/.exec(o) || [])[1], 10), !isNaN(n) && n) : n);

              for (var a = function () {
                if ("undefined" != typeof window) {
                  var r = window.crypto || window.msCrypto;

                  if (!r) {
                    if (function (t, r) {
                      return !1 !== f && (!r || ("<" === t ? f < r : "<=" === t ? f <= r : ">" === t ? f > r : ">=" === t ? f >= r : f === r));
                    }("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
                      return Math.floor(512 * Math.random()) % 256;
                    };
                    throw new Error("Crypto module not found");
                  }

                  return function () {
                    return r.getRandomValues(new Uint32Array(1))[0];
                  };
                }

                return void 0 !== t.g && t.g.crypto ? function () {
                  return t.g.crypto.randomBytes(4).readInt32LE();
                } : function () {
                  return require("crypto").randomBytes(4).readInt32LE();
                };
              }(), u = function () {
                function t(r, n) {
                  if (Array.isArray(r) || !r) return this.i = Array.isArray(r) ? r : [], void (this.u = "number" == typeof n ? n : 4 * this.i.length);
                  if (r instanceof t) return this.i = r.words.slice(), void (this.u = r.nSigBytes);
                  var e;

                  try {
                    r instanceof ArrayBuffer ? e = new Uint8Array(r) : (r instanceof Uint8Array || r instanceof Int8Array || r instanceof Uint8ClampedArray || r instanceof Int16Array || r instanceof Uint16Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Float32Array || r instanceof Float64Array) && (e = new Uint8Array(r.buffer, r.byteOffset, r.byteLength));
                  } catch (t) {
                    throw new Error("Invalid argument");
                  }

                  if (!e) throw new Error("Invalid argument");

                  for (var i = e.byteLength, o = [], f = 0; f < i; f++) o[f >>> 2] |= e[f] << 24 - f % 4 * 8;

                  this.i = o, this.u = i;
                }

                return Object.defineProperty(t.prototype, "nSigBytes", {
                  get: function () {
                    return this.u;
                  },
                  set: function (t) {
                    this.u = t;
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(t.prototype, "words", {
                  get: function () {
                    return this.i;
                  },
                  enumerable: !1,
                  configurable: !0
                }), t.prototype.toString = function (t) {
                  return t ? t.stringify(this) : i(this);
                }, t.prototype.toUint8Array = function () {
                  for (var t = this.i, r = this.u, n = new Uint8Array(r), e = 0; e < r; e++) n[e] = t[e >>> 2] >>> 24 - e % 4 * 8 & 255;

                  return n;
                }, t.prototype.concat = function (t) {
                  var r = t.words.slice(),
                      n = t.nSigBytes;
                  if (this.clamp(), this.u % 4) for (var e = 0; e < n; e++) {
                    var i = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    this.i[this.u + e >>> 2] |= i << 24 - (this.u + e) % 4 * 8;
                  } else for (e = 0; e < n; e += 4) this.i[this.u + e >>> 2] = r[e >>> 2];
                  return this.u += n, this;
                }, t.prototype.clamp = function () {
                  var t = this.u;
                  this.i[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, this.i.length = Math.ceil(t / 4);
                }, t.prototype.clone = function () {
                  return new t(this.i.slice(), this.u);
                }, t.random = function (r) {
                  for (var n = [], e = 0; e < r; e += 4) n.push(a());

                  return new t(n, r);
                }, t;
              }(), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = [], h = 0; h < s.length; h++) c[s.charCodeAt(h)] = h;

              var v = {
                stringify: function (t) {
                  var r = t.words,
                      n = t.nSigBytes;
                  t.clamp();

                  for (var e = [], i = 0; i < n; i += 3) for (var o = (r[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (r[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | r[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, f = 0; f < 4 && i + .75 * f < n; f++) e.push(s.charAt(o >>> 6 * (3 - f) & 63));

                  var a = s.charAt(64);
                  if (a) for (; e.length % 4;) e.push(a);
                  return e.join("");
                },
                parse: function (t) {
                  var r = t.length,
                      n = s.charAt(64);

                  if (n) {
                    var e = t.indexOf(n);
                    -1 !== e && (r = e);
                  }

                  for (var i = [], o = 0, f = 0; f < r; f++) if (f % 4) {
                    var a = c[t.charCodeAt(f - 1)] << f % 4 * 2 | c[t.charCodeAt(f)] >>> 6 - f % 4 * 2;
                    i[o >>> 2] |= a << 24 - o % 4 * 8, o++;
                  }

                  return new u(i, o);
                }
              },
                  y = {
                stringify: function (t) {
                  var r = t.cipherText,
                      n = t.salt;
                  return r ? n ? new u([1398893684, 1701076831]).concat(n).concat(r).toString(v) : r.toString(v) : "";
                },
                parse: function (t) {
                  var r,
                      n = v.parse(t),
                      i = n.words;
                  return 1398893684 === i[0] && 1701076831 === i[1] && (r = new u(i.slice(2, 4)), i.splice(0, 4), n.nSigBytes -= 16), new e({
                    cipherText: n,
                    salt: r
                  });
                }
              };
              return r;
            }();
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=OpenSSLFormatter.js.map