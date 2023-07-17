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
                6367: function (n, t, r) {
                  r.d(t, {
                    Hmac: function () {
                      return e;
                    }
                  });

                  var i = r(4768),
                      e = function () {
                    function n(n, t) {
                      this.u = n, "string" == typeof t && (t = i.d.parse(t));
                      var r = n.blockSize,
                          e = 4 * r;
                      t.nSigBytes > e && (t = n.finalize(t)), t.clamp();

                      for (var o = this.h = t.clone(), u = this.v = t.clone(), f = o.words, c = u.words, a = 0; a < r; a++) f[a] ^= 1549556828, c[a] ^= 909522486;

                      u.nSigBytes = e, o.nSigBytes = e, this.reset();
                    }

                    return n.prototype.reset = function () {
                      this.u.reset(), this.u.update(this.v);
                    }, n.prototype.update = function (n) {
                      return this.u.update(n), this;
                    }, n.prototype.finalize = function (n) {
                      var t = this.u.finalize(n);
                      return this.u.reset(), this.u.finalize(this.h.clone().concat(t));
                    }, n;
                  }();
                },
                4615: function (n, t, r) {
                  r.d(t, {
                    RC4: function () {
                      return a;
                    }
                  });

                  var i,
                      e = r(30),
                      o = r(5693),
                      u = r(9109),
                      f = (i = function (n, t) {
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
                      c = function () {
                    return (c = Object.assign || function (n) {
                      for (var t, r = 1, i = arguments.length; r < i; r++) for (var e in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);

                      return n;
                    }).apply(this, arguments);
                  },
                      a = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.S = [], r.i = 0, r.j = 0, r.l = t, r.O(), r;
                    }

                    return f(t, n), t.prototype.O = function () {
                      var n = this.A,
                          t = n.words,
                          r = n.nSigBytes;
                      this.S = [];

                      for (var i = 0; i < 256; i++) this.S[i] = i;

                      i = 0;

                      for (var e = 0; i < 256; i++) {
                        var o = i % r,
                            u = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        e = (e + this.S[i] + u) % 256;
                        var f = this.S[i];
                        this.S[i] = this.S[e], this.S[e] = f;
                      }

                      this.i = this.j = 0;
                    }, t.prototype.k = function (n, t) {
                      n[t] ^= this.generateKeyStreamWord();
                    }, t.prototype.generateKeyStreamWord = function () {
                      for (var n = this.S, t = this.i, r = this.j, i = 0, e = 0; e < 4; e++) {
                        r = (r + n[t = (t + 1) % 256]) % 256;
                        var o = n[t];
                        n[t] = n[r], n[r] = o, i |= n[(n[t] + n[r]) % 256] << 24 - 8 * e;
                      }

                      return this.i = t, this.j = r, i;
                    }, t.createEncryptor = function (n, r) {
                      return new t(c(c({}, r = void 0 === r ? {} : r), {
                        key: n
                      }));
                    }, t.createDecryptor = function (n, r) {
                      return new t(c(c({}, r = void 0 === r ? {} : r), {
                        key: n
                      }));
                    }, t.encrypt = function (n, r, i) {
                      return "string" == typeof r ? o.E.encrypt(t, n, r, i) : u.D.encrypt(t, n, r, i);
                    }, t.decrypt = function (n, r, i) {
                      return "string" == typeof r ? o.E.decrypt(t, n, r, i) : u.D.decrypt(t, n, r, i);
                    }, t.ivSize = 0, t.keySize = 8, t;
                  }(e.q);
                },
                5561: function (n, t, r) {
                  r.d(t, {
                    SHA256: function () {
                      return v;
                    }
                  });
                  var i,
                      e = r(1868),
                      o = r(3354),
                      u = (i = function (n, t) {
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
                      f = [],
                      c = [];

                  function a(n) {
                    for (var t = Math.sqrt(n), r = 2; r <= t; r++) if (!(n % r)) return !1;

                    return !0;
                  }

                  function s(n) {
                    return 4294967296 * (n - (0 | n)) | 0;
                  }

                  !function () {
                    for (var n = 2, t = 0; t < 64;) a(n) && (t < 8 && (f[t] = s(Math.pow(n, .5))), c[t] = s(Math.pow(n, 1 / 3)), t++), n++;
                  }();

                  var h = [],
                      v = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.I = new o.e(f.slice(0)), r.l = t, t && void 0 !== t.hash && (r.I = t.hash.clone()), r;
                    }

                    return u(t, n), t.prototype.O = function () {
                      this.I = new o.e(f.slice(0));
                    }, t.prototype.k = function (n, t) {
                      for (var r = this.I.words, i = r[0], e = r[1], o = r[2], u = r[3], f = r[4], a = r[5], s = r[6], v = r[7], w = 0; w < 64; w++) {
                        if (w < 16) h[w] = 0 | n[t + w];else {
                          var d = h[w - 15],
                              l = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                              y = h[w - 2],
                              b = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
                          h[w] = l + h[w - 7] + b + h[w - 16];
                        }
                        var p = i & e ^ i & o ^ e & o,
                            m = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                            j = v + ((f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25)) + (f & a ^ ~f & s) + c[w] + h[w];
                        v = s, s = a, a = f, f = u + j | 0, u = o, o = e, e = i, i = j + (m + p) | 0;
                      }

                      r[0] = r[0] + i | 0, r[1] = r[1] + e | 0, r[2] = r[2] + o | 0, r[3] = r[3] + u | 0, r[4] = r[4] + f | 0, r[5] = r[5] + a | 0, r[6] = r[6] + s | 0, r[7] = r[7] + v | 0;
                    }, t.prototype.N = function () {
                      var n = this.U.words,
                          t = 8 * this.F,
                          r = 8 * this.U.nSigBytes;
                      return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = Math.floor(t / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = t, this.U.nSigBytes = 4 * n.length, this.H(), this.I;
                    }, t.prototype.clone = function () {
                      return new t({
                        hash: this.I,
                        blockSize: this.T,
                        data: this.U,
                        nBytes: this.F
                      });
                    }, t.hash = function (n, r) {
                      return new t(r).finalize(n);
                    }, t;
                  }(e.P);
                },
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
                      if (Array.isArray(t) || !t) return this.R = Array.isArray(t) ? t : [], void (this.B = "number" == typeof r ? r : 4 * this.R.length);
                      if (t instanceof n) return this.R = t.words.slice(), void (this.B = t.nSigBytes);
                      var i;

                      try {
                        t instanceof ArrayBuffer ? i = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (i = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
                      } catch (n) {
                        throw new Error("Invalid argument");
                      }

                      if (!i) throw new Error("Invalid argument");

                      for (var e = i.byteLength, o = [], u = 0; u < e; u++) o[u >>> 2] |= i[u] << 24 - u % 4 * 8;

                      this.R = o, this.B = e;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function () {
                        return this.B;
                      },
                      set: function (n) {
                        this.B = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function () {
                        return this.R;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.toString = function (n) {
                      return n ? n.stringify(this) : i.p.stringify(this);
                    }, n.prototype.toUint8Array = function () {
                      for (var n = this.R, t = this.B, r = new Uint8Array(t), i = 0; i < t; i++) r[i] = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;

                      return r;
                    }, n.prototype.concat = function (n) {
                      var t = n.words.slice(),
                          r = n.nSigBytes;
                      if (this.clamp(), this.B % 4) for (var i = 0; i < r; i++) {
                        var e = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        this.R[this.B + i >>> 2] |= e << 24 - (this.B + i) % 4 * 8;
                      } else for (i = 0; i < r; i += 4) this.R[this.B + i >>> 2] = t[i >>> 2];
                      return this.B += r, this;
                    }, n.prototype.clamp = function () {
                      var n = this.B;
                      this.R[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.R.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.R.slice(), this.B);
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
                      this.G = 0, this.T = 0, this.l = n, this.U = n && void 0 !== n.data ? n.data.clone() : new i.e(), this.F = n && "number" == typeof n.nBytes ? n.nBytes : 0;
                    }

                    return Object.defineProperty(n.prototype, "blockSize", {
                      get: function () {
                        return this.T;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.reset = function (n, t) {
                      this.U = void 0 !== n ? n.clone() : new i.e(), this.F = "number" == typeof t ? t : 0;
                    }, n.prototype.J = function (n) {
                      var t = "string" == typeof n ? e.d.parse(n) : n;
                      this.U.concat(t), this.F += t.nSigBytes;
                    }, n.prototype.H = function (n) {
                      var t,
                          r = this.U.words,
                          e = this.U.nSigBytes,
                          o = this.T,
                          u = e / (4 * this.T),
                          f = (u = n ? Math.ceil(u) : Math.max((0 | u) - this.G, 0)) * o,
                          c = Math.min(4 * f, e);

                      if (f) {
                        for (var a = 0; a < f; a += o) this.k(r, a);

                        t = r.splice(0, f), this.U.nSigBytes -= c;
                      }

                      return new i.e(t, c);
                    }, n.prototype.k = function (n, t) {
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
                      return r.T = 16, r.l = t, t && "number" == typeof t.blockSize && (r.T = t.blockSize), r.reset(t ? t.data : void 0, t ? t.nBytes : void 0), r;
                    }

                    return o(t, n), Object.defineProperty(t.prototype, "blockSize", {
                      get: function () {
                        return this.T;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.reset = function (t, r) {
                      n.prototype.reset.call(this, t, r), this.O();
                    }, t.prototype.update = function (n) {
                      return this.J(n), this.H(), this;
                    }, t.prototype.finalize = function (n) {
                      return n && this.J(n), this.N();
                    }, t.prototype.O = function () {
                      throw new Error("Not implemented");
                    }, t.prototype.N = function () {
                      throw new Error("Not implemented");
                    }, t;
                  }(e.C);
                },
                9456: function (n, t, r) {
                  r.d(t, {
                    t: function () {
                      return f;
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
                      u = function () {
                    return (u = Object.assign || function (n) {
                      for (var t, r = 1, i = arguments.length; r < i; r++) for (var e in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);

                      return n;
                    }).apply(this, arguments);
                  },
                      f = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.K = 1, r.l = t, r.A = t.key, r.L = void 0 !== t.iv ? t.iv : r.L, r.K = void 0 !== t.transformMode ? t.transformMode : r.K, r;
                    }

                    return o(t, n), Object.defineProperty(t.prototype, "iv", {
                      get: function () {
                        return this.L;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.reset = function (t, r) {
                      n.prototype.reset.call(this, t, r), this.O();
                    }, t.prototype.process = function (n) {
                      return this.J(n), this.H();
                    }, t.prototype.finalize = function (n) {
                      return n && this.J(n), this.N();
                    }, t.prototype.O = function () {
                      throw new Error("Not implemented");
                    }, t.prototype.k = function (n, t) {
                      throw new Error("Not implemented");
                    }, t.prototype.N = function () {
                      throw new Error("Not implemented");
                    }, t.createEncryptor = function (n, r) {
                      return new t(u(u({}, r = void 0 === r ? {} : r), {
                        key: n,
                        transformMode: t.ENC_TRANSFORM_MODE
                      }));
                    }, t.createDecryptor = function (n, r) {
                      return new t(u(u({}, r = void 0 === r ? {} : r), {
                        key: n,
                        transformMode: t.DEC_TRANSFORM_MODE
                      }));
                    }, t.ENC_TRANSFORM_MODE = 1, t.DEC_TRANSFORM_MODE = 2, t.keySize = 4, t.ivSize = 4, t;
                  }(e.C);
                },
                2505: function (n, t, r) {
                  r.d(t, {
                    Q: function () {
                      return e;
                    }
                  });

                  var i = r(1232),
                      e = function () {
                    function n(n) {
                      this.formatter = i.w, n && (this.cipherText = n.cipherText, this.key = n.key, this.iv = n.iv, this.salt = n.salt, this.Algorithm = n.Algorithm, this.mode = n.mode, this.padding = n.padding, this.blockSize = n.blockSize, this.formatter = n.formatter || i.w);
                    }

                    return n.prototype.toString = function (n) {
                      return (n || this.formatter).stringify(this);
                    }, n;
                  }();
                },
                5693: function (n, t, r) {
                  r.d(t, {
                    E: function () {
                      return c;
                    }
                  });

                  var i = r(9109),
                      e = r(2214),
                      o = r(2505),
                      u = r(1232),
                      f = function () {
                    return (f = Object.assign || function (n) {
                      for (var t, r = 1, i = arguments.length; r < i; r++) for (var e in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);

                      return n;
                    }).apply(this, arguments);
                  },
                      c = {
                    encrypt: function (n, t, r, u) {
                      var c = u ? f({}, u) : {},
                          a = u && u.KDF ? u.KDF : e.s,
                          s = {};
                      u && u.kdfHasher && (s.kdfHasher = u.kdfHasher), u && u.kdfIterations && (s.kdfIterations = u.kdfIterations), u && u.kdfModule && (s.kdfModule = u.kdfModule);
                      var h = a.execute(r, n.keySize, n.ivSize, c.kdfSalt, s);
                      c.iv = h.iv;
                      var v = i.D.encrypt(n, t, h.key, c);
                      return new o.Q(f(f({}, v), {
                        key: h.key,
                        iv: h.iv,
                        salt: h.salt
                      }));
                    },
                    decrypt: function (n, t, r, o) {
                      var c = o ? f({}, o) : {},
                          a = c.KDF ? c.KDF : e.s,
                          s = c.formatter ? c.formatter : u.w,
                          h = (0, i.W)(t, s),
                          v = {};
                      o && o.kdfHasher && (v.kdfHasher = o.kdfHasher), o && o.kdfIterations && (v.kdfIterations = o.kdfIterations), o && o.kdfModule && (v.kdfModule = o.kdfModule);
                      var w = a.execute(r, n.keySize, n.ivSize, h.salt, v);
                      return c.iv = w.iv, i.D.decrypt(n, h, w.key, c);
                    }
                  };
                },
                9109: function (n, t, r) {
                  r.d(t, {
                    W: function () {
                      return o;
                    },
                    D: function () {
                      return u;
                    }
                  });
                  var i = r(1232),
                      e = r(2505);

                  function o(n, t) {
                    return "string" == typeof n ? t.parse(n) : n;
                  }

                  var u = {
                    encrypt: function (n, t, r, o) {
                      var u = n.createEncryptor(r, o),
                          f = u.finalize(t);
                      return new e.Q({
                        cipherText: f,
                        key: r,
                        iv: u.iv,
                        Algorithm: n,
                        mode: u.mode,
                        padding: u.padding,
                        blockSize: u.blockSize,
                        formatter: (null == o ? void 0 : o.formatter) || i.w
                      });
                    },
                    decrypt: function (n, t, r, e) {
                      var u = n.createDecryptor(r, e),
                          f = o(t, (null == e ? void 0 : e.formatter) || i.w);
                      return u.finalize(f.cipherText || "");
                    }
                  };
                },
                30: function (n, t, r) {
                  r.d(t, {
                    q: function () {
                      return u;
                    }
                  });

                  var i,
                      e = r(9456),
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
                      return r.T = 1, r;
                    }

                    return o(t, n), t.prototype.N = function () {
                      return this.H(!0);
                    }, t;
                  }(e.t);
                },
                1232: function (n, t, r) {
                  r.d(t, {
                    w: function () {
                      return u;
                    }
                  });
                  var i = r(2505),
                      e = r(3354),
                      o = r(1773),
                      u = {
                    stringify: function (n) {
                      var t = n.cipherText,
                          r = n.salt;
                      return t ? r ? new e.e([1398893684, 1701076831]).concat(r).concat(t).toString(o.D) : t.toString(o.D) : "";
                    },
                    parse: function (n) {
                      var t,
                          r = o.D.parse(n),
                          u = r.words;
                      return 1398893684 === u[0] && 1701076831 === u[1] && (t = new e.e(u.slice(2, 4)), u.splice(0, 4), r.nSigBytes -= 16), new i.Q({
                        cipherText: r,
                        salt: t
                      });
                    }
                  };
                },
                2214: function (n, t, r) {
                  r.d(t, {
                    s: function () {
                      return f;
                    }
                  });

                  var i = r(3354),
                      e = r(2505),
                      o = r(7008),
                      u = function () {
                    return (u = Object.assign || function (n) {
                      for (var t, r = 1, i = arguments.length; r < i; r++) for (var e in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);

                      return n;
                    }).apply(this, arguments);
                  },
                      f = {
                    execute: function (n, t, r, f, c) {
                      f || (f = i.e.random(8));
                      var a = c && c.kdfModule || o.E,
                          s = c ? {
                        Hasher: c.kdfHasher,
                        iterations: c.kdfIterations
                      } : {},
                          h = a.getKey(n, f, u(u({}, s), {
                        keySize: t + r
                      })),
                          v = new i.e(h.words.slice(t), 4 * r);
                      return h.nSigBytes = 4 * t, new e.Q({
                        key: h,
                        iv: v,
                        salt: f
                      });
                    }
                  };
                },
                7008: function (n, t, r) {
                  r.d(t, {
                    E: function () {
                      return a;
                    }
                  });

                  var i,
                      e = r(5561),
                      o = r(6367),
                      u = r(3354),
                      f = r(9541),
                      c = (i = function (n, t) {
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
                      a = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.V = 4, r.X = e.SHA256, r.Y = 1e4, t && (r.V = void 0 !== t.keySize ? t.keySize : r.V, r.X = void 0 !== t.Hasher ? t.Hasher : r.X, r.Y = void 0 !== t.iterations ? t.iterations : r.Y), r;
                    }

                    return c(t, n), t.prototype.compute = function (n, t) {
                      for (var r = new o.Hmac(new this.X(), n), i = new u.e(), e = new u.e([1]), f = i.words, c = e.words, a = this.V, s = this.Y; f.length < a;) {
                        var h = r.update(t).finalize(e);
                        r.reset();

                        for (var v = h.words, w = v.length, d = h, l = 1; l < s; l++) {
                          d = r.finalize(d), r.reset();

                          for (var y = d.words, b = 0; b < w; b++) v[b] ^= y[b];
                        }

                        i.concat(h), c[0]++;
                      }

                      return i.nSigBytes = 4 * a, i;
                    }, t.getKey = function (n, r, i) {
                      return new t(i).compute(n, r);
                    }, t;
                  }(f._);
                },
                9541: function (n, t, r) {
                  r.d(t, {
                    _: function () {
                      return i;
                    }
                  });

                  var i = function () {
                    function n(n) {
                      this.l = n;
                    }

                    return n.prototype.compute = function (n, t) {
                      throw new Error("Not implemented");
                    }, n.getKey = function (n, t, r) {
                      throw new Error("Not implemented");
                    }, n;
                  }();
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
                1773: function (n, t, r) {
                  r.d(t, {
                    D: function () {
                      return f;
                    }
                  });

                  for (var i = r(3354), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = [], u = 0; u < e.length; u++) o[e.charCodeAt(u)] = u;

                  var f = {
                    stringify: function (n) {
                      var t = n.words,
                          r = n.nSigBytes;
                      n.clamp();

                      for (var i = [], o = 0; o < r; o += 3) for (var u = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, f = 0; f < 4 && o + .75 * f < r; f++) i.push(e.charAt(u >>> 6 * (3 - f) & 63));

                      var c = e.charAt(64);
                      if (c) for (; i.length % 4;) i.push(c);
                      return i.join("");
                    },
                    parse: function (n) {
                      var t = n.length,
                          r = e.charAt(64);

                      if (r) {
                        var u = n.indexOf(r);
                        -1 !== u && (t = u);
                      }

                      for (var f = [], c = 0, a = 0; a < t; a++) if (a % 4) {
                        var s = o[n.charCodeAt(a - 1)] << a % 4 * 2 | o[n.charCodeAt(a)] >>> 6 - a % 4 * 2;
                        f[c >>> 2] |= s << 24 - c % 4 * 8, c++;
                      }

                      return new i.e(f, c);
                    }
                  };
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
                }), Object.defineProperty(n, "Z", {
                  value: !0
                });
              };
              var i = {};
              return function () {
                r.r(i), r.d(i, {
                  RC4Drop: function () {
                    return c;
                  }
                });

                var n,
                    t = r(5693),
                    e = r(9109),
                    o = r(4615),
                    u = (n = function (t, r) {
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
                    f = function () {
                  return (f = Object.assign || function (n) {
                    for (var t, r = 1, i = arguments.length; r < i; r++) for (var e in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);

                    return n;
                  }).apply(this, arguments);
                },
                    c = function (n) {
                  function r(t) {
                    var r = n.call(this, t) || this;
                    return r.drop = 192, r.l = t, t && "number" == typeof t.drop && (r.drop = t.drop), r.O(), r;
                  }

                  return u(r, n), r.prototype.O = function () {
                    n.prototype.O.call(this);

                    for (var t = this.drop; t > 0; t--) this.generateKeyStreamWord();
                  }, r.createEncryptor = function (n, t) {
                    return new r(f(f({}, t = void 0 === t ? {} : t), {
                      key: n
                    }));
                  }, r.createDecryptor = function (n, t) {
                    return new r(f(f({}, t = void 0 === t ? {} : t), {
                      key: n
                    }));
                  }, r.encrypt = function (n, i, o) {
                    return "string" == typeof i ? t.E.encrypt(r, n, i, o) : e.D.encrypt(r, n, i, o);
                  }, r.decrypt = function (n, i, o) {
                    return "string" == typeof i ? t.E.decrypt(r, n, i, o) : e.D.decrypt(r, n, i, o);
                  }, r;
                }(o.RC4);
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
//# sourceMappingURL=RC4Drop.js.map