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
          !function (n, r) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = r();else if ("function" == typeof define && define.amd) define([], r);else if ("object" == typeof exports) exports.JsCrypto = r();else {
              var t = r();

              for (var e in n.JsCrypto = n.JsCrypto || {}, t) n.JsCrypto[e] = t[e];
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                3354: function (n, r, t) {
                  t.d(r, {
                    e: function () {
                      return o;
                    }
                  });

                  var e = t(5720),
                      i = t(9054),
                      o = function () {
                    function n(r, t) {
                      if (Array.isArray(r) || !r) return this.t = Array.isArray(r) ? r : [], void (this.i = "number" == typeof t ? t : 4 * this.t.length);
                      if (r instanceof n) return this.t = r.words.slice(), void (this.i = r.nSigBytes);
                      var e;

                      try {
                        r instanceof ArrayBuffer ? e = new Uint8Array(r) : (r instanceof Uint8Array || r instanceof Int8Array || r instanceof Uint8ClampedArray || r instanceof Int16Array || r instanceof Uint16Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Float32Array || r instanceof Float64Array) && (e = new Uint8Array(r.buffer, r.byteOffset, r.byteLength));
                      } catch (n) {
                        throw new Error("Invalid argument");
                      }

                      if (!e) throw new Error("Invalid argument");

                      for (var i = e.byteLength, o = [], u = 0; u < i; u++) o[u >>> 2] |= e[u] << 24 - u % 4 * 8;

                      this.t = o, this.i = i;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function () {
                        return this.i;
                      },
                      set: function (n) {
                        this.i = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function () {
                        return this.t;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.toString = function (n) {
                      return n ? n.stringify(this) : e.p.stringify(this);
                    }, n.prototype.toUint8Array = function () {
                      for (var n = this.t, r = this.i, t = new Uint8Array(r), e = 0; e < r; e++) t[e] = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;

                      return t;
                    }, n.prototype.concat = function (n) {
                      var r = n.words.slice(),
                          t = n.nSigBytes;
                      if (this.clamp(), this.i % 4) for (var e = 0; e < t; e++) {
                        var i = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                        this.t[this.i + e >>> 2] |= i << 24 - (this.i + e) % 4 * 8;
                      } else for (e = 0; e < t; e += 4) this.t[this.i + e >>> 2] = r[e >>> 2];
                      return this.i += t, this;
                    }, n.prototype.clamp = function () {
                      var n = this.i;
                      this.t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.t.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.t.slice(), this.i);
                    }, n.random = function (r) {
                      for (var t = [], e = 0; e < r; e += 4) t.push((0, i.M)());

                      return new n(t, r);
                    }, n;
                  }();
                },
                1756: function (n, r, t) {
                  t.d(r, {
                    w: function () {
                      return u;
                    }
                  });
                  var e,
                      i = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                      o = (e = parseInt((/msie (\d+)/.exec(i) || [])[1], 10), isNaN(e) ? (e = parseInt((/trident\/.*; rv:(\d+)/.exec(i) || [])[1], 10), !isNaN(e) && e) : e);

                  function u(n, r) {
                    return !1 !== o && (!r || ("<" === n ? o < r : "<=" === n ? o <= r : ">" === n ? o > r : ">=" === n ? o >= r : o === r));
                  }
                },
                5720: function (n, r, t) {
                  t.d(r, {
                    p: function () {
                      return i;
                    }
                  });
                  var e = t(3354),
                      i = {
                    stringify: function (n) {
                      for (var r = n.nSigBytes, t = n.words, e = [], i = 0; i < r; i++) {
                        var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                      }

                      return e.join("");
                    },
                    parse: function (n) {
                      var r = n.length;
                      if (r % 2 != 0) throw new Error("Hex string count must be even");
                      if (!/^[a-fA-F0-9]+$/.test(n)) throw new Error("Invalid Hex string: " + n);

                      for (var t = [], i = 0; i < r; i += 2) t[i >>> 3] |= parseInt(n.substr(i, 2), 16) << 24 - i % 8 * 4;

                      return new e.e(t, r / 2);
                    }
                  };
                },
                8702: function (n, r, t) {
                  t.d(r, {
                    m: function () {
                      return i;
                    }
                  });
                  var e = t(3354),
                      i = {
                    stringify: function (n) {
                      for (var r = n.nSigBytes, t = n.words, e = [], i = 0; i < r; i++) {
                        var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        e.push(String.fromCharCode(o));
                      }

                      return e.join("");
                    },
                    parse: function (n) {
                      for (var r = n.length, t = [], i = 0; i < r; i++) t[i >>> 2] |= (255 & n.charCodeAt(i)) << 24 - i % 4 * 8;

                      return new e.e(t, r);
                    }
                  };
                },
                4768: function (n, r, t) {
                  t.d(r, {
                    d: function () {
                      return i;
                    }
                  });
                  var e = t(8702),
                      i = {
                    stringify: function (n) {
                      try {
                        return decodeURIComponent(escape(e.m.stringify(n)));
                      } catch (n) {
                        throw new Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function (n) {
                      return e.m.parse(unescape(encodeURIComponent(n)));
                    }
                  };
                },
                9054: function (n, r, t) {
                  t.d(r, {
                    M: function () {
                      return i;
                    }
                  });
                  var e = t(1756);

                  var i = function () {
                    if ("undefined" != typeof window) {
                      var n = window.crypto || window.msCrypto;

                      if (!n) {
                        if ((0, e.w)("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
                          return Math.floor(512 * Math.random()) % 256;
                        };
                        throw new Error("Crypto module not found");
                      }

                      return function () {
                        return n.getRandomValues(new Uint32Array(1))[0];
                      };
                    }

                    return void 0 !== t.g && t.g.crypto ? function () {
                      return t.g.crypto.randomBytes(4).readInt32LE();
                    } : function () {
                      return require("crypto").randomBytes(4).readInt32LE();
                    };
                  }();
                }
              },
                  r = {};

              function t(e) {
                var i = r[e];
                if (void 0 !== i) return i.exports;
                var o = r[e] = {
                  exports: {}
                };
                return n[e](o, o.exports, t), o.exports;
              }

              t.d = function (n, r) {
                for (var e in r) t.o(r, e) && !t.o(n, e) && Object.defineProperty(n, e, {
                  enumerable: !0,
                  get: r[e]
                });
              }, t.g = function () {
                if ("object" == typeof globalThis) return globalThis;

                try {
                  return this || new Function("return this")();
                } catch (n) {
                  if ("object" == typeof window) return window;
                }
              }(), t.o = function (n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
              }, t.r = function (n) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(n, "u", {
                  value: !0
                });
              };
              var e = {};
              return function () {
                t.r(e), t.d(e, {
                  Hmac: function () {
                    return r;
                  }
                });

                var n = t(4768),
                    r = function () {
                  function r(r, t) {
                    this.h = r, "string" == typeof t && (t = n.d.parse(t));
                    var e = r.blockSize,
                        i = 4 * e;
                    t.nSigBytes > i && (t = r.finalize(t)), t.clamp();

                    for (var o = this.v = t.clone(), u = this.l = t.clone(), f = o.words, a = u.words, s = 0; s < e; s++) f[s] ^= 1549556828, a[s] ^= 909522486;

                    u.nSigBytes = i, o.nSigBytes = i, this.reset();
                  }

                  return r.prototype.reset = function () {
                    this.h.reset(), this.h.update(this.l);
                  }, r.prototype.update = function (n) {
                    return this.h.update(n), this;
                  }, r.prototype.finalize = function (n) {
                    var r = this.h.finalize(n);
                    return this.h.reset(), this.h.finalize(this.v.clone().concat(r));
                  }, r;
                }();
              }(), e;
            }();
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=Hmac.js.map