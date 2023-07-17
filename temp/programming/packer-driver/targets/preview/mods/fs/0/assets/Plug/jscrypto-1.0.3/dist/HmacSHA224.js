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

              for (var i in n.JsCrypto = n.JsCrypto || {}, r) {
                n.JsCrypto[i] = r[i];
              }
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                6367: function _(n, t, r) {
                  r.d(t, {
                    Hmac: function Hmac() {
                      return e;
                    }
                  });

                  var i = r(4768),
                      e = function () {
                    function n(n, t) {
                      this.t = n, "string" == typeof t && (t = i.d.parse(t));
                      var r = n.blockSize,
                          e = 4 * r;
                      t.nSigBytes > e && (t = n.finalize(t)), t.clamp();

                      for (var o = this.i = t.clone(), u = this.u = t.clone(), f = o.words, c = u.words, s = 0; s < r; s++) {
                        f[s] ^= 1549556828, c[s] ^= 909522486;
                      }

                      u.nSigBytes = e, o.nSigBytes = e, this.reset();
                    }

                    return n.prototype.reset = function () {
                      this.t.reset(), this.t.update(this.u);
                    }, n.prototype.update = function (n) {
                      return this.t.update(n), this;
                    }, n.prototype.finalize = function (n) {
                      var t = this.t.finalize(n);
                      return this.t.reset(), this.t.finalize(this.i.clone().concat(t));
                    }, n;
                  }();
                },
                766: function _(n, t, r) {
                  r.d(t, {
                    SHA224: function SHA224() {
                      return f;
                    }
                  });

                  var _i,
                      e = r(3354),
                      o = r(5561),
                      u = (_i = function i(n, t) {
                    return (_i = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (n, t) {
                      n.__proto__ = t;
                    } || function (n, t) {
                      for (var r in t) {
                        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                      }
                    })(n, t);
                  }, function (n, t) {
                    function r() {
                      this.constructor = n;
                    }

                    _i(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
                  }),
                      f = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.h = new e.e([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]), r.v = t, t && void 0 !== t.hash && (r.h = t.hash.clone()), r;
                    }

                    return u(t, n), t.prototype.l = function () {
                      this.h = new e.e([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
                    }, t.prototype.A = function () {
                      var t = n.prototype.A.call(this);
                      return t.nSigBytes -= 4, t;
                    }, t.prototype.clone = function () {
                      return new t({
                        hash: this.h,
                        blockSize: this.j,
                        data: this.O,
                        nBytes: this._
                      });
                    }, t.hash = function (n, r) {
                      return new t(r).finalize(n);
                    }, t;
                  }(o.SHA256);
                },
                5561: function _(n, t, r) {
                  r.d(t, {
                    SHA256: function SHA256() {
                      return v;
                    }
                  });

                  var _i2,
                      e = r(1868),
                      o = r(3354),
                      u = (_i2 = function i(n, t) {
                    return (_i2 = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (n, t) {
                      n.__proto__ = t;
                    } || function (n, t) {
                      for (var r in t) {
                        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                      }
                    })(n, t);
                  }, function (n, t) {
                    function r() {
                      this.constructor = n;
                    }

                    _i2(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
                  }),
                      f = [],
                      c = [];

                  function s(n) {
                    for (var t = Math.sqrt(n), r = 2; r <= t; r++) {
                      if (!(n % r)) return !1;
                    }

                    return !0;
                  }

                  function a(n) {
                    return 4294967296 * (n - (0 | n)) | 0;
                  }

                  !function () {
                    for (var n = 2, t = 0; t < 64;) {
                      s(n) && (t < 8 && (f[t] = a(Math.pow(n, .5))), c[t] = a(Math.pow(n, 1 / 3)), t++), n++;
                    }
                  }();

                  var h = [],
                      v = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.h = new o.e(f.slice(0)), r.v = t, t && void 0 !== t.hash && (r.h = t.hash.clone()), r;
                    }

                    return u(t, n), t.prototype.l = function () {
                      this.h = new o.e(f.slice(0));
                    }, t.prototype.I = function (n, t) {
                      for (var r = this.h.words, i = r[0], e = r[1], o = r[2], u = r[3], f = r[4], s = r[5], a = r[6], v = r[7], w = 0; w < 64; w++) {
                        if (w < 16) h[w] = 0 | n[t + w];else {
                          var d = h[w - 15],
                              l = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                              y = h[w - 2],
                              b = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
                          h[w] = l + h[w - 7] + b + h[w - 16];
                        }
                        var p = i & e ^ i & o ^ e & o,
                            m = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                            g = v + ((f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25)) + (f & s ^ ~f & a) + c[w] + h[w];
                        v = a, a = s, s = f, f = u + g | 0, u = o, o = e, e = i, i = g + (m + p) | 0;
                      }

                      r[0] = r[0] + i | 0, r[1] = r[1] + e | 0, r[2] = r[2] + o | 0, r[3] = r[3] + u | 0, r[4] = r[4] + f | 0, r[5] = r[5] + s | 0, r[6] = r[6] + a | 0, r[7] = r[7] + v | 0;
                    }, t.prototype.A = function () {
                      var n = this.O.words,
                          t = 8 * this._,
                          r = 8 * this.O.nSigBytes;
                      return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = Math.floor(t / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = t, this.O.nSigBytes = 4 * n.length, this.S(), this.h;
                    }, t.prototype.clone = function () {
                      return new t({
                        hash: this.h,
                        blockSize: this.j,
                        data: this.O,
                        nBytes: this._
                      });
                    }, t.hash = function (n, r) {
                      return new t(r).finalize(n);
                    }, t;
                  }(e.P);
                },
                3354: function _(n, t, r) {
                  r.d(t, {
                    e: function e() {
                      return o;
                    }
                  });

                  var i = r(5720),
                      e = r(9054),
                      o = function () {
                    function n(t, r) {
                      if (Array.isArray(t) || !t) return this.U = Array.isArray(t) ? t : [], void (this.H = "number" == typeof r ? r : 4 * this.U.length);
                      if (t instanceof n) return this.U = t.words.slice(), void (this.H = t.nSigBytes);
                      var i;

                      try {
                        t instanceof ArrayBuffer ? i = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (i = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
                      } catch (n) {
                        throw new Error("Invalid argument");
                      }

                      if (!i) throw new Error("Invalid argument");

                      for (var e = i.byteLength, o = [], u = 0; u < e; u++) {
                        o[u >>> 2] |= i[u] << 24 - u % 4 * 8;
                      }

                      this.U = o, this.H = e;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function get() {
                        return this.H;
                      },
                      set: function set(n) {
                        this.H = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function get() {
                        return this.U;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.toString = function (n) {
                      return n ? n.stringify(this) : i.p.stringify(this);
                    }, n.prototype.toUint8Array = function () {
                      for (var n = this.U, t = this.H, r = new Uint8Array(t), i = 0; i < t; i++) {
                        r[i] = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                      }

                      return r;
                    }, n.prototype.concat = function (n) {
                      var t = n.words.slice(),
                          r = n.nSigBytes;
                      if (this.clamp(), this.H % 4) for (var i = 0; i < r; i++) {
                        var e = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        this.U[this.H + i >>> 2] |= e << 24 - (this.H + i) % 4 * 8;
                      } else for (i = 0; i < r; i += 4) {
                        this.U[this.H + i >>> 2] = t[i >>> 2];
                      }
                      return this.H += r, this;
                    }, n.prototype.clamp = function () {
                      var n = this.H;
                      this.U[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.U.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.U.slice(), this.H);
                    }, n.random = function (t) {
                      for (var r = [], i = 0; i < t; i += 4) {
                        r.push((0, e.M)());
                      }

                      return new n(r, t);
                    }, n;
                  }();
                },
                7211: function _(n, t, r) {
                  r.d(t, {
                    C: function C() {
                      return o;
                    }
                  });

                  var i = r(3354),
                      e = r(4768),
                      o = function () {
                    function n(n) {
                      this.N = 0, this.j = 0, this.v = n, this.O = n && void 0 !== n.data ? n.data.clone() : new i.e(), this._ = n && "number" == typeof n.nBytes ? n.nBytes : 0;
                    }

                    return Object.defineProperty(n.prototype, "blockSize", {
                      get: function get() {
                        return this.j;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.reset = function (n, t) {
                      this.O = void 0 !== n ? n.clone() : new i.e(), this._ = "number" == typeof t ? t : 0;
                    }, n.prototype.F = function (n) {
                      var t = "string" == typeof n ? e.d.parse(n) : n;
                      this.O.concat(t), this._ += t.nSigBytes;
                    }, n.prototype.S = function (n) {
                      var t,
                          r = this.O.words,
                          e = this.O.nSigBytes,
                          o = this.j,
                          u = e / (4 * this.j),
                          f = (u = n ? Math.ceil(u) : Math.max((0 | u) - this.N, 0)) * o,
                          c = Math.min(4 * f, e);

                      if (f) {
                        for (var s = 0; s < f; s += o) {
                          this.I(r, s);
                        }

                        t = r.splice(0, f), this.O.nSigBytes -= c;
                      }

                      return new i.e(t, c);
                    }, n.prototype.I = function (n, t) {
                      throw new Error("Not implemented");
                    }, n;
                  }();
                },
                1868: function _(n, t, r) {
                  r.d(t, {
                    P: function P() {
                      return u;
                    }
                  });

                  var _i3,
                      e = r(7211),
                      o = (_i3 = function i(n, t) {
                    return (_i3 = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (n, t) {
                      n.__proto__ = t;
                    } || function (n, t) {
                      for (var r in t) {
                        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                      }
                    })(n, t);
                  }, function (n, t) {
                    function r() {
                      this.constructor = n;
                    }

                    _i3(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
                  }),
                      u = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.j = 16, r.v = t, t && "number" == typeof t.blockSize && (r.j = t.blockSize), r.reset(t ? t.data : void 0, t ? t.nBytes : void 0), r;
                    }

                    return o(t, n), Object.defineProperty(t.prototype, "blockSize", {
                      get: function get() {
                        return this.j;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.reset = function (t, r) {
                      n.prototype.reset.call(this, t, r), this.l();
                    }, t.prototype.update = function (n) {
                      return this.F(n), this.S(), this;
                    }, t.prototype.finalize = function (n) {
                      return n && this.F(n), this.A();
                    }, t.prototype.l = function () {
                      throw new Error("Not implemented");
                    }, t.prototype.A = function () {
                      throw new Error("Not implemented");
                    }, t;
                  }(e.C);
                },
                1756: function _(n, t, r) {
                  r.d(t, {
                    w: function w() {
                      return u;
                    }
                  });
                  var i,
                      e = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                      o = (i = parseInt((/msie (\d+)/.exec(e) || [])[1], 10), isNaN(i) ? (i = parseInt((/trident\/.*; rv:(\d+)/.exec(e) || [])[1], 10), !isNaN(i) && i) : i);

                  function u(n, t) {
                    return !1 !== o && (!t || ("<" === n ? o < t : "<=" === n ? o <= t : ">" === n ? o > t : ">=" === n ? o >= t : o === t));
                  }
                },
                5720: function _(n, t, r) {
                  r.d(t, {
                    p: function p() {
                      return e;
                    }
                  });
                  var i = r(3354),
                      e = {
                    stringify: function stringify(n) {
                      for (var t = n.nSigBytes, r = n.words, i = [], e = 0; e < t; e++) {
                        var o = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                        i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
                      }

                      return i.join("");
                    },
                    parse: function parse(n) {
                      var t = n.length;
                      if (t % 2 != 0) throw new Error("Hex string count must be even");
                      if (!/^[a-fA-F0-9]+$/.test(n)) throw new Error("Invalid Hex string: " + n);

                      for (var r = [], e = 0; e < t; e += 2) {
                        r[e >>> 3] |= parseInt(n.substr(e, 2), 16) << 24 - e % 8 * 4;
                      }

                      return new i.e(r, t / 2);
                    }
                  };
                },
                8702: function _(n, t, r) {
                  r.d(t, {
                    m: function m() {
                      return e;
                    }
                  });
                  var i = r(3354),
                      e = {
                    stringify: function stringify(n) {
                      for (var t = n.nSigBytes, r = n.words, i = [], e = 0; e < t; e++) {
                        var o = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                        i.push(String.fromCharCode(o));
                      }

                      return i.join("");
                    },
                    parse: function parse(n) {
                      for (var t = n.length, r = [], e = 0; e < t; e++) {
                        r[e >>> 2] |= (255 & n.charCodeAt(e)) << 24 - e % 4 * 8;
                      }

                      return new i.e(r, t);
                    }
                  };
                },
                4768: function _(n, t, r) {
                  r.d(t, {
                    d: function d() {
                      return e;
                    }
                  });
                  var i = r(8702),
                      e = {
                    stringify: function stringify(n) {
                      try {
                        return decodeURIComponent(escape(i.m.stringify(n)));
                      } catch (n) {
                        throw new Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function parse(n) {
                      return i.m.parse(unescape(encodeURIComponent(n)));
                    }
                  };
                },
                9054: function _(n, t, r) {
                  r.d(t, {
                    M: function M() {
                      return e;
                    }
                  });
                  var i = r(1756);

                  var e = function () {
                    if ("undefined" != typeof window) {
                      var n = window.crypto || window.msCrypto;

                      if (!n) {
                        if ((0, i.w)("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
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
                  }();
                }
              },
                  t = {};

              function r(i) {
                var e = t[i];
                if (void 0 !== e) return e.exports;
                var o = t[i] = {
                  exports: {}
                };
                return n[i](o, o.exports, r), o.exports;
              }

              r.d = function (n, t) {
                for (var i in t) {
                  r.o(t, i) && !r.o(n, i) && Object.defineProperty(n, i, {
                    enumerable: !0,
                    get: t[i]
                  });
                }
              }, r.g = function () {
                if ("object" == typeof globalThis) return globalThis;

                try {
                  return this || new Function("return this")();
                } catch (n) {
                  if ("object" == typeof window) return window;
                }
              }(), r.o = function (n, t) {
                return Object.prototype.hasOwnProperty.call(n, t);
              }, r.r = function (n) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(n, "k", {
                  value: !0
                });
              };
              var i = {};
              return function () {
                r.r(i), r.d(i, {
                  HmacSHA224: function HmacSHA224() {
                    return e;
                  }
                });
                var n = r(6367),
                    t = r(766);

                function e(r, i) {
                  return new n.Hmac(new t.SHA224(), i).finalize(r);
                }
              }(), i;
            }();
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=HmacSHA224.js.map