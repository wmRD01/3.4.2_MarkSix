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
                670: function _(n, t, r) {
                  r.d(t, {
                    MD5: function MD5() {
                      return v;
                    }
                  });

                  var _i,
                      e = r(3354),
                      o = r(1868),
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
                      f = [];

                  function c(n, t, r, i, e, o, u) {
                    var f = n + (t & r | ~t & i) + e + u;
                    return (f << o | f >>> 32 - o) + t;
                  }

                  function a(n, t, r, i, e, o, u) {
                    var f = n + (t & i | r & ~i) + e + u;
                    return (f << o | f >>> 32 - o) + t;
                  }

                  function s(n, t, r, i, e, o, u) {
                    var f = n + (t ^ r ^ i) + e + u;
                    return (f << o | f >>> 32 - o) + t;
                  }

                  function h(n, t, r, i, e, o, u) {
                    var f = n + (r ^ (t | ~i)) + e + u;
                    return (f << o | f >>> 32 - o) + t;
                  }

                  !function () {
                    for (var n = 0; n < 64; n++) {
                      f[n] = 4294967296 * Math.abs(Math.sin(n + 1)) | 0;
                    }
                  }();

                  var v = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.t = new e.e([1732584193, 4023233417, 2562383102, 271733878]), t && void 0 !== t.hash && (r.t = t.hash.clone()), r;
                    }

                    return u(t, n), t.prototype.i = function () {
                      this.t = new e.e([1732584193, 4023233417, 2562383102, 271733878]);
                    }, t.prototype.u = function (n, t) {
                      for (var r = 0; r < 16; r++) {
                        var i = t + r,
                            e = n[i];
                        n[i] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8);
                      }

                      var o = this.t.words,
                          u = n[t],
                          v = n[t + 1],
                          w = n[t + 2],
                          d = n[t + 3],
                          l = n[t + 4],
                          y = n[t + 5],
                          b = n[t + 6],
                          p = n[t + 7],
                          m = n[t + 8],
                          g = n[t + 9],
                          j = n[t + 10],
                          A = n[t + 11],
                          O = n[t + 12],
                          E = n[t + 13],
                          M = n[t + 14],
                          _ = n[t + 15],
                          I = o[0],
                          U = o[1],
                          N = o[2],
                          S = o[3];
                      I = c(I, U, N, S, u, 7, f[0]), S = c(S, I, U, N, v, 12, f[1]), N = c(N, S, I, U, w, 17, f[2]), U = c(U, N, S, I, d, 22, f[3]), I = c(I, U, N, S, l, 7, f[4]), S = c(S, I, U, N, y, 12, f[5]), N = c(N, S, I, U, b, 17, f[6]), U = c(U, N, S, I, p, 22, f[7]), I = c(I, U, N, S, m, 7, f[8]), S = c(S, I, U, N, g, 12, f[9]), N = c(N, S, I, U, j, 17, f[10]), U = c(U, N, S, I, A, 22, f[11]), I = c(I, U, N, S, O, 7, f[12]), S = c(S, I, U, N, E, 12, f[13]), N = c(N, S, I, U, M, 17, f[14]), I = a(I, U = c(U, N, S, I, _, 22, f[15]), N, S, v, 5, f[16]), S = a(S, I, U, N, b, 9, f[17]), N = a(N, S, I, U, A, 14, f[18]), U = a(U, N, S, I, u, 20, f[19]), I = a(I, U, N, S, y, 5, f[20]), S = a(S, I, U, N, j, 9, f[21]), N = a(N, S, I, U, _, 14, f[22]), U = a(U, N, S, I, l, 20, f[23]), I = a(I, U, N, S, g, 5, f[24]), S = a(S, I, U, N, M, 9, f[25]), N = a(N, S, I, U, d, 14, f[26]), U = a(U, N, S, I, m, 20, f[27]), I = a(I, U, N, S, E, 5, f[28]), S = a(S, I, U, N, w, 9, f[29]), N = a(N, S, I, U, p, 14, f[30]), I = s(I, U = a(U, N, S, I, O, 20, f[31]), N, S, y, 4, f[32]), S = s(S, I, U, N, m, 11, f[33]), N = s(N, S, I, U, A, 16, f[34]), U = s(U, N, S, I, M, 23, f[35]), I = s(I, U, N, S, v, 4, f[36]), S = s(S, I, U, N, l, 11, f[37]), N = s(N, S, I, U, p, 16, f[38]), U = s(U, N, S, I, j, 23, f[39]), I = s(I, U, N, S, E, 4, f[40]), S = s(S, I, U, N, u, 11, f[41]), N = s(N, S, I, U, d, 16, f[42]), U = s(U, N, S, I, b, 23, f[43]), I = s(I, U, N, S, g, 4, f[44]), S = s(S, I, U, N, O, 11, f[45]), N = s(N, S, I, U, _, 16, f[46]), I = h(I, U = s(U, N, S, I, w, 23, f[47]), N, S, u, 6, f[48]), S = h(S, I, U, N, p, 10, f[49]), N = h(N, S, I, U, M, 15, f[50]), U = h(U, N, S, I, y, 21, f[51]), I = h(I, U, N, S, O, 6, f[52]), S = h(S, I, U, N, d, 10, f[53]), N = h(N, S, I, U, j, 15, f[54]), U = h(U, N, S, I, v, 21, f[55]), I = h(I, U, N, S, m, 6, f[56]), S = h(S, I, U, N, _, 10, f[57]), N = h(N, S, I, U, b, 15, f[58]), U = h(U, N, S, I, E, 21, f[59]), I = h(I, U, N, S, l, 6, f[60]), S = h(S, I, U, N, A, 10, f[61]), N = h(N, S, I, U, w, 15, f[62]), U = h(U, N, S, I, g, 21, f[63]), o[0] = o[0] + I | 0, o[1] = o[1] + U | 0, o[2] = o[2] + N | 0, o[3] = o[3] + S | 0;
                    }, t.prototype.h = function () {
                      var n = this.v,
                          t = n.words,
                          r = 8 * this.l,
                          i = 8 * n.nSigBytes;
                      t[i >>> 5] |= 128 << 24 - i % 32;
                      var e = Math.floor(r / 4294967296),
                          o = r;
                      t[15 + (i + 64 >>> 9 << 4)] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8), t[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n.nSigBytes = 4 * (t.length + 1), this.j();

                      for (var u = this.t, f = u.words, c = 0; c < 4; c++) {
                        var a = f[c];
                        f[c] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                      }

                      return u;
                    }, t.prototype.clone = function () {
                      return new t({
                        hash: this.t,
                        blockSize: this.A,
                        data: this.v,
                        nBytes: this.l
                      });
                    }, t.hash = function (n) {
                      return new t().finalize(n);
                    }, t;
                  }(o.P);
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
                      if (Array.isArray(t) || !t) return this.O = Array.isArray(t) ? t : [], void (this._ = "number" == typeof r ? r : 4 * this.O.length);
                      if (t instanceof n) return this.O = t.words.slice(), void (this._ = t.nSigBytes);
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

                      this.O = o, this._ = e;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function get() {
                        return this._;
                      },
                      set: function set(n) {
                        this._ = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function get() {
                        return this.O;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.toString = function (n) {
                      return n ? n.stringify(this) : i.p.stringify(this);
                    }, n.prototype.toUint8Array = function () {
                      for (var n = this.O, t = this._, r = new Uint8Array(t), i = 0; i < t; i++) {
                        r[i] = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                      }

                      return r;
                    }, n.prototype.concat = function (n) {
                      var t = n.words.slice(),
                          r = n.nSigBytes;
                      if (this.clamp(), this._ % 4) for (var i = 0; i < r; i++) {
                        var e = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        this.O[this._ + i >>> 2] |= e << 24 - (this._ + i) % 4 * 8;
                      } else for (i = 0; i < r; i += 4) {
                        this.O[this._ + i >>> 2] = t[i >>> 2];
                      }
                      return this._ += r, this;
                    }, n.prototype.clamp = function () {
                      var n = this._;
                      this.O[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.O.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.O.slice(), this._);
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
                      this.I = 0, this.A = 0, this.U = n, this.v = n && void 0 !== n.data ? n.data.clone() : new i.e(), this.l = n && "number" == typeof n.nBytes ? n.nBytes : 0;
                    }

                    return Object.defineProperty(n.prototype, "blockSize", {
                      get: function get() {
                        return this.A;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.reset = function (n, t) {
                      this.v = void 0 !== n ? n.clone() : new i.e(), this.l = "number" == typeof t ? t : 0;
                    }, n.prototype.N = function (n) {
                      var t = "string" == typeof n ? e.d.parse(n) : n;
                      this.v.concat(t), this.l += t.nSigBytes;
                    }, n.prototype.j = function (n) {
                      var t,
                          r = this.v.words,
                          e = this.v.nSigBytes,
                          o = this.A,
                          u = e / (4 * this.A),
                          f = (u = n ? Math.ceil(u) : Math.max((0 | u) - this.I, 0)) * o,
                          c = Math.min(4 * f, e);

                      if (f) {
                        for (var a = 0; a < f; a += o) {
                          this.u(r, a);
                        }

                        t = r.splice(0, f), this.v.nSigBytes -= c;
                      }

                      return new i.e(t, c);
                    }, n.prototype.u = function (n, t) {
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

                  var _i2,
                      e = r(7211),
                      o = (_i2 = function i(n, t) {
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
                      u = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.A = 16, r.U = t, t && "number" == typeof t.blockSize && (r.A = t.blockSize), r.reset(t ? t.data : void 0, t ? t.nBytes : void 0), r;
                    }

                    return o(t, n), Object.defineProperty(t.prototype, "blockSize", {
                      get: function get() {
                        return this.A;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.reset = function (t, r) {
                      n.prototype.reset.call(this, t, r), this.i();
                    }, t.prototype.update = function (n) {
                      return this.N(n), this.j(), this;
                    }, t.prototype.finalize = function (n) {
                      return n && this.N(n), this.h();
                    }, t.prototype.i = function () {
                      throw new Error("Not implemented");
                    }, t.prototype.h = function () {
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
                }), Object.defineProperty(n, "S", {
                  value: !0
                });
              };
              var i = {};
              return function () {
                r.r(i), r.d(i, {
                  EvpKDF: function EvpKDF() {
                    return f;
                  }
                });

                var _n,
                    t = r(670),
                    e = r(3354),
                    o = function () {
                  function n(n) {
                    this.U = n;
                  }

                  return n.prototype.compute = function (n, t) {
                    throw new Error("Not implemented");
                  }, n.getKey = function (n, t, r) {
                    throw new Error("Not implemented");
                  }, n;
                }(),
                    u = (_n = function n(t, r) {
                  return (_n = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function (n, t) {
                    n.__proto__ = t;
                  } || function (n, t) {
                    for (var r in t) {
                      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    }
                  })(t, r);
                }, function (t, r) {
                  function i() {
                    this.constructor = t;
                  }

                  _n(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
                }),
                    f = function (n) {
                  function r(r) {
                    var i = n.call(this, r) || this;
                    return i.F = 4, i.k = t.MD5, i.B = 1, r && (i.F = void 0 !== r.keySize ? r.keySize : i.F, i.k = void 0 !== r.Hasher ? r.Hasher : i.k, i.B = void 0 !== r.iterations ? r.iterations : i.B), i;
                  }

                  return u(r, n), r.prototype.compute = function (n, t) {
                    for (var r, i = new this.k(), o = new e.e(), u = o.words, f = this.F, c = this.B; u.length < f;) {
                      r && i.update(r), r = i.update(n).finalize(t), i.reset();

                      for (var a = 1; a < c; a++) {
                        r = i.finalize(r), i.reset();
                      }

                      o.concat(r);
                    }

                    return o.nSigBytes = 4 * f, o;
                  }, r.getKey = function (n, t, i) {
                    return new r(i).compute(n, t);
                  }, r;
                }(o);
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
//# sourceMappingURL=EvpKDF.js.map