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
          !function (n, t) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else if ("object" == typeof exports) exports.JsCrypto = t();else {
              var r = t();

              for (var e in n.JsCrypto = n.JsCrypto || {}, r) n.JsCrypto[e] = r[e];
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                3354: function (n, t, r) {
                  r.d(t, {
                    e: function () {
                      return o;
                    }
                  });

                  var e = r(5720),
                      i = r(9054),
                      o = function () {
                    function n(t, r) {
                      if (Array.isArray(t) || !t) return this.t = Array.isArray(t) ? t : [], void (this.i = "number" == typeof r ? r : 4 * this.t.length);
                      if (t instanceof n) return this.t = t.words.slice(), void (this.i = t.nSigBytes);
                      var e;

                      try {
                        t instanceof ArrayBuffer ? e = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
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
                      for (var n = this.t, t = this.i, r = new Uint8Array(t), e = 0; e < t; e++) r[e] = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;

                      return r;
                    }, n.prototype.concat = function (n) {
                      var t = n.words.slice(),
                          r = n.nSigBytes;
                      if (this.clamp(), this.i % 4) for (var e = 0; e < r; e++) {
                        var i = t[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                        this.t[this.i + e >>> 2] |= i << 24 - (this.i + e) % 4 * 8;
                      } else for (e = 0; e < r; e += 4) this.t[this.i + e >>> 2] = t[e >>> 2];
                      return this.i += r, this;
                    }, n.prototype.clamp = function () {
                      var n = this.i;
                      this.t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.t.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.t.slice(), this.i);
                    }, n.random = function (t) {
                      for (var r = [], e = 0; e < t; e += 4) r.push((0, i.M)());

                      return new n(r, t);
                    }, n;
                  }();
                },
                7211: function (n, t, r) {
                  r.d(t, {
                    C: function () {
                      return o;
                    }
                  });

                  var e = r(3354),
                      i = r(4768),
                      o = function () {
                    function n(n) {
                      this.u = 0, this.h = 0, this.v = n, this.l = n && void 0 !== n.data ? n.data.clone() : new e.e(), this.j = n && "number" == typeof n.nBytes ? n.nBytes : 0;
                    }

                    return Object.defineProperty(n.prototype, "blockSize", {
                      get: function () {
                        return this.h;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.reset = function (n, t) {
                      this.l = void 0 !== n ? n.clone() : new e.e(), this.j = "number" == typeof t ? t : 0;
                    }, n.prototype.A = function (n) {
                      var t = "string" == typeof n ? i.d.parse(n) : n;
                      this.l.concat(t), this.j += t.nSigBytes;
                    }, n.prototype.I = function (n) {
                      var t,
                          r = this.l.words,
                          i = this.l.nSigBytes,
                          o = this.h,
                          u = i / (4 * this.h),
                          f = (u = n ? Math.ceil(u) : Math.max((0 | u) - this.u, 0)) * o,
                          c = Math.min(4 * f, i);

                      if (f) {
                        for (var a = 0; a < f; a += o) this.O(r, a);

                        t = r.splice(0, f), this.l.nSigBytes -= c;
                      }

                      return new e.e(t, c);
                    }, n.prototype.O = function (n, t) {
                      throw new Error("Not implemented");
                    }, n;
                  }();
                },
                1868: function (n, t, r) {
                  r.d(t, {
                    P: function () {
                      return u;
                    }
                  });

                  var e,
                      i = r(7211),
                      o = (e = function (n, t) {
                    return (e = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (n, t) {
                      n.__proto__ = t;
                    } || function (n, t) {
                      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    })(n, t);
                  }, function (n, t) {
                    function r() {
                      this.constructor = n;
                    }

                    e(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
                  }),
                      u = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.h = 16, r.v = t, t && "number" == typeof t.blockSize && (r.h = t.blockSize), r.reset(t ? t.data : void 0, t ? t.nBytes : void 0), r;
                    }

                    return o(t, n), Object.defineProperty(t.prototype, "blockSize", {
                      get: function () {
                        return this.h;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.reset = function (t, r) {
                      n.prototype.reset.call(this, t, r), this.U();
                    }, t.prototype.update = function (n) {
                      return this.A(n), this.I(), this;
                    }, t.prototype.finalize = function (n) {
                      return n && this.A(n), this._();
                    }, t.prototype.U = function () {
                      throw new Error("Not implemented");
                    }, t.prototype._ = function () {
                      throw new Error("Not implemented");
                    }, t;
                  }(i.C);
                },
                1756: function (n, t, r) {
                  r.d(t, {
                    w: function () {
                      return u;
                    }
                  });
                  var e,
                      i = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                      o = (e = parseInt((/msie (\d+)/.exec(i) || [])[1], 10), isNaN(e) ? (e = parseInt((/trident\/.*; rv:(\d+)/.exec(i) || [])[1], 10), !isNaN(e) && e) : e);

                  function u(n, t) {
                    return !1 !== o && (!t || ("<" === n ? o < t : "<=" === n ? o <= t : ">" === n ? o > t : ">=" === n ? o >= t : o === t));
                  }
                },
                5720: function (n, t, r) {
                  r.d(t, {
                    p: function () {
                      return i;
                    }
                  });
                  var e = r(3354),
                      i = {
                    stringify: function (n) {
                      for (var t = n.nSigBytes, r = n.words, e = [], i = 0; i < t; i++) {
                        var o = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                      }

                      return e.join("");
                    },
                    parse: function (n) {
                      var t = n.length;
                      if (t % 2 != 0) throw new Error("Hex string count must be even");
                      if (!/^[a-fA-F0-9]+$/.test(n)) throw new Error("Invalid Hex string: " + n);

                      for (var r = [], i = 0; i < t; i += 2) r[i >>> 3] |= parseInt(n.substr(i, 2), 16) << 24 - i % 8 * 4;

                      return new e.e(r, t / 2);
                    }
                  };
                },
                8702: function (n, t, r) {
                  r.d(t, {
                    m: function () {
                      return i;
                    }
                  });
                  var e = r(3354),
                      i = {
                    stringify: function (n) {
                      for (var t = n.nSigBytes, r = n.words, e = [], i = 0; i < t; i++) {
                        var o = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        e.push(String.fromCharCode(o));
                      }

                      return e.join("");
                    },
                    parse: function (n) {
                      for (var t = n.length, r = [], i = 0; i < t; i++) r[i >>> 2] |= (255 & n.charCodeAt(i)) << 24 - i % 4 * 8;

                      return new e.e(r, t);
                    }
                  };
                },
                4768: function (n, t, r) {
                  r.d(t, {
                    d: function () {
                      return i;
                    }
                  });
                  var e = r(8702),
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
                9054: function (n, t, r) {
                  r.d(t, {
                    M: function () {
                      return i;
                    }
                  });
                  var e = r(1756);

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

                    return void 0 !== r.g && r.g.crypto ? function () {
                      return r.g.crypto.randomBytes(4).readInt32LE();
                    } : function () {
                      return require("crypto").randomBytes(4).readInt32LE();
                    };
                  }();
                }
              },
                  t = {};

              function r(e) {
                var i = t[e];
                if (void 0 !== i) return i.exports;
                var o = t[e] = {
                  exports: {}
                };
                return n[e](o, o.exports, r), o.exports;
              }

              r.d = function (n, t) {
                for (var e in t) r.o(t, e) && !r.o(n, e) && Object.defineProperty(n, e, {
                  enumerable: !0,
                  get: t[e]
                });
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
              var e = {};
              return function () {
                r.r(e), r.d(e, {
                  RIPEMD160: function () {
                    return p;
                  }
                });
                var n,
                    t = r(1868),
                    i = r(3354),
                    o = (n = function (t, r) {
                  return (n = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function (n, t) {
                    n.__proto__ = t;
                  } || function (n, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                  })(t, r);
                }, function (t, r) {
                  function e() {
                    this.constructor = t;
                  }

                  n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
                }),
                    u = new i.e([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                    f = new i.e([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                    c = new i.e([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                    a = new i.e([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                    s = new i.e([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                    h = new i.e([1352829926, 1548603684, 1836072691, 2053994217, 0]);

                function v(n, t, r) {
                  return n ^ t ^ r;
                }

                function w(n, t, r) {
                  return n & t | ~n & r;
                }

                function d(n, t, r) {
                  return (n | ~t) ^ r;
                }

                function l(n, t, r) {
                  return n & r | t & ~r;
                }

                function y(n, t, r) {
                  return n ^ (t | ~r);
                }

                function b(n, t) {
                  return n << t | n >>> 32 - t;
                }

                var p = function (n) {
                  function t(t) {
                    var r = n.call(this, t) || this;
                    return r.N = new i.e([1732584193, 4023233417, 2562383102, 271733878, 3285377520]), r.v = t, t && void 0 !== t.hash && (r.N = t.hash.clone()), r;
                  }

                  return o(t, n), t.prototype.U = function () {
                    this.N = new i.e([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                  }, t.prototype.O = function (n, t) {
                    for (var r = 0; r < 16; r++) {
                      var e = t + r,
                          i = n[e];
                      n[e] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    }

                    var o,
                        p,
                        m,
                        g,
                        j,
                        A,
                        I,
                        O,
                        E,
                        M,
                        U,
                        _ = this.N.words,
                        S = s.words,
                        N = h.words,
                        x = u.words,
                        C = f.words,
                        F = c.words,
                        k = a.words;
                    A = o = _[0], I = p = _[1], O = m = _[2], E = g = _[3], M = j = _[4];

                    for (r = 0; r < 80; r += 1) U = o + n[t + x[r]] | 0, U += r < 16 ? v(p, m, g) + S[0] : r < 32 ? w(p, m, g) + S[1] : r < 48 ? d(p, m, g) + S[2] : r < 64 ? l(p, m, g) + S[3] : y(p, m, g) + S[4], U = (U = b(U |= 0, F[r])) + j | 0, o = j, j = g, g = b(m, 10), m = p, p = U, U = A + n[t + C[r]] | 0, U += r < 16 ? y(I, O, E) + N[0] : r < 32 ? l(I, O, E) + N[1] : r < 48 ? d(I, O, E) + N[2] : r < 64 ? w(I, O, E) + N[3] : v(I, O, E) + N[4], U = (U = b(U |= 0, k[r])) + M | 0, A = M, M = E, E = b(O, 10), O = I, I = U;

                    U = _[1] + m + E | 0, _[1] = _[2] + g + M | 0, _[2] = _[3] + j + A | 0, _[3] = _[4] + o + I | 0, _[4] = _[0] + p + O | 0, _[0] = U;
                  }, t.prototype._ = function () {
                    var n = this.l,
                        t = n.words,
                        r = 8 * this.j,
                        e = 8 * n.nSigBytes;
                    t[e >>> 5] |= 128 << 24 - e % 32, t[14 + (e + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), n.nSigBytes = 4 * (t.length + 1), this.I();

                    for (var i = this.N, o = i.words, u = 0; u < 5; u++) {
                      var f = o[u];
                      o[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                    }

                    return i;
                  }, t.prototype.clone = function () {
                    return new t({
                      hash: this.N,
                      blockSize: this.h,
                      data: this.l,
                      nBytes: this.j
                    });
                  }, t.hash = function (n, r) {
                    return new t(r).finalize(n);
                  }, t;
                }(t.P);
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
//# sourceMappingURL=RIPEMD160.js.map