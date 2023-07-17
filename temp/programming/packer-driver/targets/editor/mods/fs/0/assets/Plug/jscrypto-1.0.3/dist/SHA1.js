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

              for (var i in n.JsCrypto = n.JsCrypto || {}, r) n.JsCrypto[i] = r[i];
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

                  var i = r(5720),
                      e = r(9054),
                      o = function () {
                    function n(t, r) {
                      if (Array.isArray(t) || !t) return this.t = Array.isArray(t) ? t : [], void (this.i = "number" == typeof r ? r : 4 * this.t.length);
                      if (t instanceof n) return this.t = t.words.slice(), void (this.i = t.nSigBytes);
                      var i;

                      try {
                        t instanceof ArrayBuffer ? i = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (i = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
                      } catch (n) {
                        throw new Error("Invalid argument");
                      }

                      if (!i) throw new Error("Invalid argument");

                      for (var e = i.byteLength, o = [], u = 0; u < e; u++) o[u >>> 2] |= i[u] << 24 - u % 4 * 8;

                      this.t = o, this.i = e;
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
                      return n ? n.stringify(this) : i.p.stringify(this);
                    }, n.prototype.toUint8Array = function () {
                      for (var n = this.t, t = this.i, r = new Uint8Array(t), i = 0; i < t; i++) r[i] = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;

                      return r;
                    }, n.prototype.concat = function (n) {
                      var t = n.words.slice(),
                          r = n.nSigBytes;
                      if (this.clamp(), this.i % 4) for (var i = 0; i < r; i++) {
                        var e = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        this.t[this.i + i >>> 2] |= e << 24 - (this.i + i) % 4 * 8;
                      } else for (i = 0; i < r; i += 4) this.t[this.i + i >>> 2] = t[i >>> 2];
                      return this.i += r, this;
                    }, n.prototype.clamp = function () {
                      var n = this.i;
                      this.t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.t.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.t.slice(), this.i);
                    }, n.random = function (t) {
                      for (var r = [], i = 0; i < t; i += 4) r.push((0, e.M)());

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

                  var i = r(3354),
                      e = r(4768),
                      o = function () {
                    function n(n) {
                      this.u = 0, this.h = 0, this.v = n, this.l = n && void 0 !== n.data ? n.data.clone() : new i.e(), this.A = n && "number" == typeof n.nBytes ? n.nBytes : 0;
                    }

                    return Object.defineProperty(n.prototype, "blockSize", {
                      get: function () {
                        return this.h;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.reset = function (n, t) {
                      this.l = void 0 !== n ? n.clone() : new i.e(), this.A = "number" == typeof t ? t : 0;
                    }, n.prototype.j = function (n) {
                      var t = "string" == typeof n ? e.d.parse(n) : n;
                      this.l.concat(t), this.A += t.nSigBytes;
                    }, n.prototype.O = function (n) {
                      var t,
                          r = this.l.words,
                          e = this.l.nSigBytes,
                          o = this.h,
                          u = e / (4 * this.h),
                          f = (u = n ? Math.ceil(u) : Math.max((0 | u) - this.u, 0)) * o,
                          c = Math.min(4 * f, e);

                      if (f) {
                        for (var a = 0; a < f; a += o) this.I(r, a);

                        t = r.splice(0, f), this.l.nSigBytes -= c;
                      }

                      return new i.e(t, c);
                    }, n.prototype.I = function (n, t) {
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

                  var i,
                      e = r(7211),
                      o = (i = function (n, t) {
                    return (i = Object.setPrototypeOf || {
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

                    i(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
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
                      return this.j(n), this.O(), this;
                    }, t.prototype.finalize = function (n) {
                      return n && this.j(n), this._();
                    }, t.prototype.U = function () {
                      throw new Error("Not implemented");
                    }, t.prototype._ = function () {
                      throw new Error("Not implemented");
                    }, t;
                  }(e.C);
                },
                1756: function (n, t, r) {
                  r.d(t, {
                    w: function () {
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
                5720: function (n, t, r) {
                  r.d(t, {
                    p: function () {
                      return e;
                    }
                  });
                  var i = r(3354),
                      e = {
                    stringify: function (n) {
                      for (var t = n.nSigBytes, r = n.words, i = [], e = 0; e < t; e++) {
                        var o = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                        i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
                      }

                      return i.join("");
                    },
                    parse: function (n) {
                      var t = n.length;
                      if (t % 2 != 0) throw new Error("Hex string count must be even");
                      if (!/^[a-fA-F0-9]+$/.test(n)) throw new Error("Invalid Hex string: " + n);

                      for (var r = [], e = 0; e < t; e += 2) r[e >>> 3] |= parseInt(n.substr(e, 2), 16) << 24 - e % 8 * 4;

                      return new i.e(r, t / 2);
                    }
                  };
                },
                8702: function (n, t, r) {
                  r.d(t, {
                    m: function () {
                      return e;
                    }
                  });
                  var i = r(3354),
                      e = {
                    stringify: function (n) {
                      for (var t = n.nSigBytes, r = n.words, i = [], e = 0; e < t; e++) {
                        var o = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                        i.push(String.fromCharCode(o));
                      }

                      return i.join("");
                    },
                    parse: function (n) {
                      for (var t = n.length, r = [], e = 0; e < t; e++) r[e >>> 2] |= (255 & n.charCodeAt(e)) << 24 - e % 4 * 8;

                      return new i.e(r, t);
                    }
                  };
                },
                4768: function (n, t, r) {
                  r.d(t, {
                    d: function () {
                      return e;
                    }
                  });
                  var i = r(8702),
                      e = {
                    stringify: function (n) {
                      try {
                        return decodeURIComponent(escape(i.m.stringify(n)));
                      } catch (n) {
                        throw new Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function (n) {
                      return i.m.parse(unescape(encodeURIComponent(n)));
                    }
                  };
                },
                9054: function (n, t, r) {
                  r.d(t, {
                    M: function () {
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
                for (var i in t) r.o(t, i) && !r.o(n, i) && Object.defineProperty(n, i, {
                  enumerable: !0,
                  get: t[i]
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
              var i = {};
              return function () {
                r.r(i), r.d(i, {
                  SHA1: function () {
                    return f;
                  }
                });

                var n,
                    t = r(1868),
                    e = r(3354),
                    o = (n = function (t, r) {
                  return (n = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function (n, t) {
                    n.__proto__ = t;
                  } || function (n, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                  })(t, r);
                }, function (t, r) {
                  function i() {
                    this.constructor = t;
                  }

                  n(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
                }),
                    u = [],
                    f = function (n) {
                  function t(t) {
                    var r = n.call(this, t) || this;
                    return r.N = new e.e([1732584193, 4023233417, 2562383102, 271733878, 3285377520]), r.v = t, t && void 0 !== t.hash && (r.N = t.hash.clone()), r;
                  }

                  return o(t, n), t.prototype.U = function () {
                    this.N = new e.e([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                  }, t.prototype.I = function (n, t) {
                    for (var r = this.N.words, i = r[0], e = r[1], o = r[2], f = r[3], c = r[4], a = 0; a < 80; a++) {
                      if (a < 16) u[a] = 0 | n[t + a];else {
                        var s = u[a - 3] ^ u[a - 8] ^ u[a - 14] ^ u[a - 16];
                        u[a] = s << 1 | s >>> 31;
                      }
                      var h = (i << 5 | i >>> 27) + c + u[a];
                      h += a < 20 ? 1518500249 + (e & o | ~e & f) : a < 40 ? 1859775393 + (e ^ o ^ f) : a < 60 ? (e & o | e & f | o & f) - 1894007588 : (e ^ o ^ f) - 899497514, c = f, f = o, o = e << 30 | e >>> 2, e = i, i = h;
                    }

                    r[0] = r[0] + i | 0, r[1] = r[1] + e | 0, r[2] = r[2] + o | 0, r[3] = r[3] + f | 0, r[4] = r[4] + c | 0;
                  }, t.prototype._ = function () {
                    var n = this.l.words,
                        t = 8 * this.A,
                        r = 8 * this.l.nSigBytes;
                    return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = Math.floor(t / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = t, this.l.nSigBytes = 4 * n.length, this.O(), this.N;
                  }, t.prototype.clone = function () {
                    return new t({
                      hash: this.N,
                      blockSize: this.h,
                      data: this.l,
                      nBytes: this.A
                    });
                  }, t.hash = function (n, r) {
                    return new t(r).finalize(n);
                  }, t;
                }(t.P);
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
//# sourceMappingURL=SHA1.js.map