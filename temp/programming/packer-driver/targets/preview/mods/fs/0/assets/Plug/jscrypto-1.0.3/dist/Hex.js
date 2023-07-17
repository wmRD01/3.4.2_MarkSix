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
          !function (n, r) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = r();else if ("function" == typeof define && define.amd) define([], r);else if ("object" == typeof exports) exports.JsCrypto = r();else {
              var t = r();

              for (var e in n.JsCrypto = n.JsCrypto || {}, t) {
                n.JsCrypto[e] = t[e];
              }
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                d: function d(r, t) {
                  for (var e in t) {
                    n.o(t, e) && !n.o(r, e) && Object.defineProperty(r, e, {
                      enumerable: !0,
                      get: t[e]
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
              }(), n.o = function (n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
              }, n.r = function (n) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(n, "t", {
                  value: !0
                });
              };
              var r = {};
              n.r(r), n.d(r, {
                Hex: function Hex() {
                  return f;
                }
              });
              var t,
                  e = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                  i = (t = parseInt((/msie (\d+)/.exec(e) || [])[1], 10), isNaN(t) ? (t = parseInt((/trident\/.*; rv:(\d+)/.exec(e) || [])[1], 10), !isNaN(t) && t) : t);

              var o = function () {
                if ("undefined" != typeof window) {
                  var r = window.crypto || window.msCrypto;

                  if (!r) {
                    if (function (n, r) {
                      return !1 !== i && (!r || ("<" === n ? i < r : "<=" === n ? i <= r : ">" === n ? i > r : ">=" === n ? i >= r : i === r));
                    }("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
                      return Math.floor(512 * Math.random()) % 256;
                    };
                    throw new Error("Crypto module not found");
                  }

                  return function () {
                    return r.getRandomValues(new Uint32Array(1))[0];
                  };
                }

                return void 0 !== n.g && n.g.crypto ? function () {
                  return n.g.crypto.randomBytes(4).readInt32LE();
                } : function () {
                  return require("crypto").randomBytes(4).readInt32LE();
                };
              }(),
                  a = function () {
                function n(r, t) {
                  if (Array.isArray(r) || !r) return this.i = Array.isArray(r) ? r : [], void (this.u = "number" == typeof t ? t : 4 * this.i.length);
                  if (r instanceof n) return this.i = r.words.slice(), void (this.u = r.nSigBytes);
                  var e;

                  try {
                    r instanceof ArrayBuffer ? e = new Uint8Array(r) : (r instanceof Uint8Array || r instanceof Int8Array || r instanceof Uint8ClampedArray || r instanceof Int16Array || r instanceof Uint16Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Float32Array || r instanceof Float64Array) && (e = new Uint8Array(r.buffer, r.byteOffset, r.byteLength));
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
                  return n ? n.stringify(this) : f.stringify(this);
                }, n.prototype.toUint8Array = function () {
                  for (var n = this.i, r = this.u, t = new Uint8Array(r), e = 0; e < r; e++) {
                    t[e] = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                  }

                  return t;
                }, n.prototype.concat = function (n) {
                  var r = n.words.slice(),
                      t = n.nSigBytes;
                  if (this.clamp(), this.u % 4) for (var e = 0; e < t; e++) {
                    var i = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    this.i[this.u + e >>> 2] |= i << 24 - (this.u + e) % 4 * 8;
                  } else for (e = 0; e < t; e += 4) {
                    this.i[this.u + e >>> 2] = r[e >>> 2];
                  }
                  return this.u += t, this;
                }, n.prototype.clamp = function () {
                  var n = this.u;
                  this.i[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.i.length = Math.ceil(n / 4);
                }, n.prototype.clone = function () {
                  return new n(this.i.slice(), this.u);
                }, n.random = function (r) {
                  for (var t = [], e = 0; e < r; e += 4) {
                    t.push(o());
                  }

                  return new n(t, r);
                }, n;
              }(),
                  f = {
                stringify: function stringify(n) {
                  for (var r = n.nSigBytes, t = n.words, e = [], i = 0; i < r; i++) {
                    var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                  }

                  return e.join("");
                },
                parse: function parse(n) {
                  var r = n.length;
                  if (r % 2 != 0) throw new Error("Hex string count must be even");
                  if (!/^[a-fA-F0-9]+$/.test(n)) throw new Error("Invalid Hex string: " + n);

                  for (var t = [], e = 0; e < r; e += 2) {
                    t[e >>> 3] |= parseInt(n.substr(e, 2), 16) << 24 - e % 8 * 4;
                  }

                  return new a(t, r / 2);
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
//# sourceMappingURL=Hex.js.map