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

                      for (var o = this.i = t.clone(), u = this.u = t.clone(), f = o.words, c = u.words, a = 0; a < r; a++) {
                        f[a] ^= 1549556828, c[a] ^= 909522486;
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
                      return r.h = new e.e([1732584193, 4023233417, 2562383102, 271733878]), t && void 0 !== t.hash && (r.h = t.hash.clone()), r;
                    }

                    return u(t, n), t.prototype.v = function () {
                      this.h = new e.e([1732584193, 4023233417, 2562383102, 271733878]);
                    }, t.prototype.l = function (n, t) {
                      for (var r = 0; r < 16; r++) {
                        var i = t + r,
                            e = n[i];
                        n[i] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8);
                      }

                      var o = this.h.words,
                          u = n[t],
                          v = n[t + 1],
                          w = n[t + 2],
                          d = n[t + 3],
                          l = n[t + 4],
                          b = n[t + 5],
                          y = n[t + 6],
                          p = n[t + 7],
                          m = n[t + 8],
                          g = n[t + 9],
                          j = n[t + 10],
                          O = n[t + 11],
                          A = n[t + 12],
                          _ = n[t + 13],
                          E = n[t + 14],
                          M = n[t + 15],
                          S = o[0],
                          U = o[1],
                          I = o[2],
                          x = o[3];
                      S = c(S, U, I, x, u, 7, f[0]), x = c(x, S, U, I, v, 12, f[1]), I = c(I, x, S, U, w, 17, f[2]), U = c(U, I, x, S, d, 22, f[3]), S = c(S, U, I, x, l, 7, f[4]), x = c(x, S, U, I, b, 12, f[5]), I = c(I, x, S, U, y, 17, f[6]), U = c(U, I, x, S, p, 22, f[7]), S = c(S, U, I, x, m, 7, f[8]), x = c(x, S, U, I, g, 12, f[9]), I = c(I, x, S, U, j, 17, f[10]), U = c(U, I, x, S, O, 22, f[11]), S = c(S, U, I, x, A, 7, f[12]), x = c(x, S, U, I, _, 12, f[13]), I = c(I, x, S, U, E, 17, f[14]), S = a(S, U = c(U, I, x, S, M, 22, f[15]), I, x, v, 5, f[16]), x = a(x, S, U, I, y, 9, f[17]), I = a(I, x, S, U, O, 14, f[18]), U = a(U, I, x, S, u, 20, f[19]), S = a(S, U, I, x, b, 5, f[20]), x = a(x, S, U, I, j, 9, f[21]), I = a(I, x, S, U, M, 14, f[22]), U = a(U, I, x, S, l, 20, f[23]), S = a(S, U, I, x, g, 5, f[24]), x = a(x, S, U, I, E, 9, f[25]), I = a(I, x, S, U, d, 14, f[26]), U = a(U, I, x, S, m, 20, f[27]), S = a(S, U, I, x, _, 5, f[28]), x = a(x, S, U, I, w, 9, f[29]), I = a(I, x, S, U, p, 14, f[30]), S = s(S, U = a(U, I, x, S, A, 20, f[31]), I, x, b, 4, f[32]), x = s(x, S, U, I, m, 11, f[33]), I = s(I, x, S, U, O, 16, f[34]), U = s(U, I, x, S, E, 23, f[35]), S = s(S, U, I, x, v, 4, f[36]), x = s(x, S, U, I, l, 11, f[37]), I = s(I, x, S, U, p, 16, f[38]), U = s(U, I, x, S, j, 23, f[39]), S = s(S, U, I, x, _, 4, f[40]), x = s(x, S, U, I, u, 11, f[41]), I = s(I, x, S, U, d, 16, f[42]), U = s(U, I, x, S, y, 23, f[43]), S = s(S, U, I, x, g, 4, f[44]), x = s(x, S, U, I, A, 11, f[45]), I = s(I, x, S, U, M, 16, f[46]), S = h(S, U = s(U, I, x, S, w, 23, f[47]), I, x, u, 6, f[48]), x = h(x, S, U, I, p, 10, f[49]), I = h(I, x, S, U, E, 15, f[50]), U = h(U, I, x, S, b, 21, f[51]), S = h(S, U, I, x, A, 6, f[52]), x = h(x, S, U, I, d, 10, f[53]), I = h(I, x, S, U, j, 15, f[54]), U = h(U, I, x, S, v, 21, f[55]), S = h(S, U, I, x, m, 6, f[56]), x = h(x, S, U, I, M, 10, f[57]), I = h(I, x, S, U, y, 15, f[58]), U = h(U, I, x, S, _, 21, f[59]), S = h(S, U, I, x, l, 6, f[60]), x = h(x, S, U, I, O, 10, f[61]), I = h(I, x, S, U, w, 15, f[62]), U = h(U, I, x, S, g, 21, f[63]), o[0] = o[0] + S | 0, o[1] = o[1] + U | 0, o[2] = o[2] + I | 0, o[3] = o[3] + x | 0;
                    }, t.prototype.j = function () {
                      var n = this.O,
                          t = n.words,
                          r = 8 * this.A,
                          i = 8 * n.nSigBytes;
                      t[i >>> 5] |= 128 << 24 - i % 32;
                      var e = Math.floor(r / 4294967296),
                          o = r;
                      t[15 + (i + 64 >>> 9 << 4)] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8), t[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n.nSigBytes = 4 * (t.length + 1), this.S();

                      for (var u = this.h, f = u.words, c = 0; c < 4; c++) {
                        var a = f[c];
                        f[c] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                      }

                      return u;
                    }, t.prototype.clone = function () {
                      return new t({
                        hash: this.h,
                        blockSize: this.U,
                        data: this.O,
                        nBytes: this.A
                      });
                    }, t.hash = function (n) {
                      return new t().finalize(n);
                    }, t;
                  }(o.P);
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

                  function a(n) {
                    for (var t = Math.sqrt(n), r = 2; r <= t; r++) {
                      if (!(n % r)) return !1;
                    }

                    return !0;
                  }

                  function s(n) {
                    return 4294967296 * (n - (0 | n)) | 0;
                  }

                  !function () {
                    for (var n = 2, t = 0; t < 64;) {
                      a(n) && (t < 8 && (f[t] = s(Math.pow(n, .5))), c[t] = s(Math.pow(n, 1 / 3)), t++), n++;
                    }
                  }();

                  var h = [],
                      v = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.h = new o.e(f.slice(0)), r.I = t, t && void 0 !== t.hash && (r.h = t.hash.clone()), r;
                    }

                    return u(t, n), t.prototype.v = function () {
                      this.h = new o.e(f.slice(0));
                    }, t.prototype.l = function (n, t) {
                      for (var r = this.h.words, i = r[0], e = r[1], o = r[2], u = r[3], f = r[4], a = r[5], s = r[6], v = r[7], w = 0; w < 64; w++) {
                        if (w < 16) h[w] = 0 | n[t + w];else {
                          var d = h[w - 15],
                              l = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                              b = h[w - 2],
                              y = (b << 15 | b >>> 17) ^ (b << 13 | b >>> 19) ^ b >>> 10;
                          h[w] = l + h[w - 7] + y + h[w - 16];
                        }
                        var p = i & e ^ i & o ^ e & o,
                            m = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                            g = v + ((f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25)) + (f & a ^ ~f & s) + c[w] + h[w];
                        v = s, s = a, a = f, f = u + g | 0, u = o, o = e, e = i, i = g + (m + p) | 0;
                      }

                      r[0] = r[0] + i | 0, r[1] = r[1] + e | 0, r[2] = r[2] + o | 0, r[3] = r[3] + u | 0, r[4] = r[4] + f | 0, r[5] = r[5] + a | 0, r[6] = r[6] + s | 0, r[7] = r[7] + v | 0;
                    }, t.prototype.j = function () {
                      var n = this.O.words,
                          t = 8 * this.A,
                          r = 8 * this.O.nSigBytes;
                      return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = Math.floor(t / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = t, this.O.nSigBytes = 4 * n.length, this.S(), this.h;
                    }, t.prototype.clone = function () {
                      return new t({
                        hash: this.h,
                        blockSize: this.U,
                        data: this.O,
                        nBytes: this.A
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
                      if (Array.isArray(t) || !t) return this.N = Array.isArray(t) ? t : [], void (this.B = "number" == typeof r ? r : 4 * this.N.length);
                      if (t instanceof n) return this.N = t.words.slice(), void (this.B = t.nSigBytes);
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

                      this.N = o, this.B = e;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function get() {
                        return this.B;
                      },
                      set: function set(n) {
                        this.B = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function get() {
                        return this.N;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.toString = function (n) {
                      return n ? n.stringify(this) : i.p.stringify(this);
                    }, n.prototype.toUint8Array = function () {
                      for (var n = this.N, t = this.B, r = new Uint8Array(t), i = 0; i < t; i++) {
                        r[i] = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                      }

                      return r;
                    }, n.prototype.concat = function (n) {
                      var t = n.words.slice(),
                          r = n.nSigBytes;
                      if (this.clamp(), this.B % 4) for (var i = 0; i < r; i++) {
                        var e = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        this.N[this.B + i >>> 2] |= e << 24 - (this.B + i) % 4 * 8;
                      } else for (i = 0; i < r; i += 4) {
                        this.N[this.B + i >>> 2] = t[i >>> 2];
                      }
                      return this.B += r, this;
                    }, n.prototype.clamp = function () {
                      var n = this.B;
                      this.N[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.N.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.N.slice(), this.B);
                    }, n.random = function (t) {
                      for (var r = [], i = 0; i < t; i += 4) {
                        r.push((0, e.M)());
                      }

                      return new n(r, t);
                    }, n;
                  }();
                },
                6957: function _(n, t, r) {
                  r.d(t, {
                    r: function r() {
                      return o;
                    },
                    m: function m() {
                      return u;
                    }
                  });

                  var i = r(5720),
                      e = r(3354),
                      o = function () {
                    function n(n, t) {
                      this.high = n, this.low = t;
                    }

                    return n.prototype.clone = function () {
                      return new n(this.high, this.low);
                    }, n;
                  }(),
                      u = function () {
                    function n(n, t) {
                      this.N = n || [], this.B = "number" == typeof t ? t : 8 * this.N.length;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function get() {
                        return this.B;
                      },
                      set: function set(n) {
                        this.B = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function get() {
                        return this.N;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.to32 = function () {
                      for (var n = [], t = 0; t < this.N.length; t++) {
                        var r = this.N[t];
                        n.push(r.high), n.push(r.low);
                      }

                      return new e.e(n, this.B);
                    }, n.prototype.toString = function (n) {
                      return n ? n.stringify(this.to32()) : i.p.stringify(this.to32());
                    }, n.prototype.clone = function () {
                      for (var t = this.N.slice(), r = 0; r < t.length; r++) {
                        t[r] = t[r].clone();
                      }

                      return new n(t, this.B);
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
                      this.F = 0, this.U = 0, this.I = n, this.O = n && void 0 !== n.data ? n.data.clone() : new i.e(), this.A = n && "number" == typeof n.nBytes ? n.nBytes : 0;
                    }

                    return Object.defineProperty(n.prototype, "blockSize", {
                      get: function get() {
                        return this.U;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.reset = function (n, t) {
                      this.O = void 0 !== n ? n.clone() : new i.e(), this.A = "number" == typeof t ? t : 0;
                    }, n.prototype.k = function (n) {
                      var t = "string" == typeof n ? e.d.parse(n) : n;
                      this.O.concat(t), this.A += t.nSigBytes;
                    }, n.prototype.S = function (n) {
                      var t,
                          r = this.O.words,
                          e = this.O.nSigBytes,
                          o = this.U,
                          u = e / (4 * this.U),
                          f = (u = n ? Math.ceil(u) : Math.max((0 | u) - this.F, 0)) * o,
                          c = Math.min(4 * f, e);

                      if (f) {
                        for (var a = 0; a < f; a += o) {
                          this.l(r, a);
                        }

                        t = r.splice(0, f), this.O.nSigBytes -= c;
                      }

                      return new i.e(t, c);
                    }, n.prototype.l = function (n, t) {
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
                      return r.U = 16, r.I = t, t && "number" == typeof t.blockSize && (r.U = t.blockSize), r.reset(t ? t.data : void 0, t ? t.nBytes : void 0), r;
                    }

                    return o(t, n), Object.defineProperty(t.prototype, "blockSize", {
                      get: function get() {
                        return this.U;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.reset = function (t, r) {
                      n.prototype.reset.call(this, t, r), this.v();
                    }, t.prototype.update = function (n) {
                      return this.k(n), this.S(), this;
                    }, t.prototype.finalize = function (n) {
                      return n && this.k(n), this.j();
                    }, t.prototype.v = function () {
                      throw new Error("Not implemented");
                    }, t.prototype.j = function () {
                      throw new Error("Not implemented");
                    }, t;
                  }(e.C);
                },
                2505: function _(n, t, r) {
                  r.d(t, {
                    Q: function Q() {
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
                1232: function _(n, t, r) {
                  r.d(t, {
                    w: function w() {
                      return u;
                    }
                  });
                  var i = r(2505),
                      e = r(3354),
                      o = r(1773),
                      u = {
                    stringify: function stringify(n) {
                      var t = n.cipherText,
                          r = n.salt;
                      return t ? r ? new e.e([1398893684, 1701076831]).concat(r).concat(t).toString(o.D) : t.toString(o.D) : "";
                    },
                    parse: function parse(n) {
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
                2214: function _(n, t, r) {
                  r.d(t, {
                    s: function s() {
                      return f;
                    }
                  });

                  var i = r(3354),
                      e = r(2505),
                      o = r(7008),
                      _u = function u() {
                    return (_u = Object.assign || function (n) {
                      for (var t, r = 1, i = arguments.length; r < i; r++) {
                        for (var e in t = arguments[r]) {
                          Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                        }
                      }

                      return n;
                    }).apply(this, arguments);
                  },
                      f = {
                    execute: function execute(n, t, r, f, c) {
                      f || (f = i.e.random(8));
                      var a = c && c.kdfModule || o.E,
                          s = c ? {
                        Hasher: c.kdfHasher,
                        iterations: c.kdfIterations
                      } : {},
                          h = a.getKey(n, f, _u(_u({}, s), {
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
                7008: function _(n, t, r) {
                  r.d(t, {
                    E: function E() {
                      return a;
                    }
                  });

                  var _i4,
                      e = r(5561),
                      o = r(6367),
                      u = r(3354),
                      f = r(9541),
                      c = (_i4 = function i(n, t) {
                    return (_i4 = Object.setPrototypeOf || {
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

                    _i4(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
                  }),
                      a = function (n) {
                    function t(t) {
                      var r = n.call(this, t) || this;
                      return r.H = 4, r.T = e.SHA256, r.K = 1e4, t && (r.H = void 0 !== t.keySize ? t.keySize : r.H, r.T = void 0 !== t.Hasher ? t.Hasher : r.T, r.K = void 0 !== t.iterations ? t.iterations : r.K), r;
                    }

                    return c(t, n), t.prototype.compute = function (n, t) {
                      for (var r = new o.Hmac(new this.T(), n), i = new u.e(), e = new u.e([1]), f = i.words, c = e.words, a = this.H, s = this.K; f.length < a;) {
                        var h = r.update(t).finalize(e);
                        r.reset();

                        for (var v = h.words, w = v.length, d = h, l = 1; l < s; l++) {
                          d = r.finalize(d), r.reset();

                          for (var b = d.words, y = 0; y < w; y++) {
                            v[y] ^= b[y];
                          }
                        }

                        i.concat(h), c[0]++;
                      }

                      return i.nSigBytes = 4 * a, i;
                    }, t.getKey = function (n, r, i) {
                      return new t(i).compute(n, r);
                    }, t;
                  }(f._);
                },
                9541: function _(n, t, r) {
                  r.d(t, {
                    _: function _() {
                      return i;
                    }
                  });

                  var i = function () {
                    function n(n) {
                      this.I = n;
                    }

                    return n.prototype.compute = function (n, t) {
                      throw new Error("Not implemented");
                    }, n.getKey = function (n, t, r) {
                      throw new Error("Not implemented");
                    }, n;
                  }();
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
                1773: function _(n, t, r) {
                  r.d(t, {
                    D: function D() {
                      return f;
                    }
                  });

                  for (var i = r(3354), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = [], u = 0; u < e.length; u++) {
                    o[e.charCodeAt(u)] = u;
                  }

                  var f = {
                    stringify: function stringify(n) {
                      var t = n.words,
                          r = n.nSigBytes;
                      n.clamp();

                      for (var i = [], o = 0; o < r; o += 3) {
                        for (var u = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, f = 0; f < 4 && o + .75 * f < r; f++) {
                          i.push(e.charAt(u >>> 6 * (3 - f) & 63));
                        }
                      }

                      var c = e.charAt(64);
                      if (c) for (; i.length % 4;) {
                        i.push(c);
                      }
                      return i.join("");
                    },
                    parse: function parse(n) {
                      var t = n.length,
                          r = e.charAt(64);

                      if (r) {
                        var u = n.indexOf(r);
                        -1 !== u && (t = u);
                      }

                      for (var f = [], c = 0, a = 0; a < t; a++) {
                        if (a % 4) {
                          var s = o[n.charCodeAt(a - 1)] << a % 4 * 2 | o[n.charCodeAt(a)] >>> 6 - a % 4 * 2;
                          f[c >>> 2] |= s << 24 - c % 4 * 8, c++;
                        }
                      }

                      return new i.e(f, c);
                    }
                  };
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
                }), Object.defineProperty(n, "L", {
                  value: !0
                });
              };
              var i = {};
              return function () {
                r.r(i), r.d(i, {
                  Base64: function Base64() {
                    return u.D;
                  },
                  EvpKDF: function EvpKDF() {
                    return g;
                  },
                  Hex: function Hex() {
                    return a.p;
                  },
                  Latin1: function Latin1() {
                    return c.m;
                  },
                  OpenSSLKDF: function OpenSSLKDF() {
                    return l.s;
                  },
                  PBKDF2: function PBKDF2() {
                    return b.E;
                  },
                  Utf16: function Utf16() {
                    return d;
                  },
                  Utf16BE: function Utf16BE() {
                    return s;
                  },
                  Utf16LE: function Utf16LE() {
                    return w;
                  },
                  Utf8: function Utf8() {
                    return f.d;
                  },
                  Word32Array: function Word32Array() {
                    return t.e;
                  },
                  Word64: function Word64() {
                    return e.r;
                  },
                  Word64Array: function Word64Array() {
                    return e.m;
                  },
                  isIE: function isIE() {
                    return o.w;
                  },
                  random: function random() {
                    return n.M;
                  }
                });
                var n = r(9054),
                    t = r(3354),
                    e = r(6957),
                    o = r(1756),
                    u = r(1773),
                    f = r(4768),
                    c = r(8702),
                    a = r(5720),
                    s = {
                  stringify: function stringify(n) {
                    for (var t = n.words, r = n.nSigBytes, i = [], e = 0; e < r; e += 2) {
                      var o = t[e >>> 2] >>> 16 - e % 4 * 8 & 65535;
                      i.push(String.fromCharCode(o));
                    }

                    return i.join("");
                  },
                  parse: function parse(n) {
                    for (var r = n.length, i = [], e = 0; e < r; e++) {
                      i[e >>> 1] |= n.charCodeAt(e) << 16 - e % 2 * 16;
                    }

                    return new t.e(i, 2 * r);
                  }
                };

                function h(n) {
                  return n << 8 & 4278255360 | n >>> 8 & 16711935;
                }

                var _v,
                    w = {
                  stringify: function stringify(n) {
                    for (var t = n.words, r = n.nSigBytes, i = [], e = 0; e < r; e += 2) {
                      var o = h(t[e >>> 2] >>> 16 - e % 4 * 8 & 65535);
                      i.push(String.fromCharCode(o));
                    }

                    return i.join("");
                  },
                  parse: function parse(n) {
                    for (var r = n.length, i = [], e = 0; e < r; e++) {
                      i[e >>> 1] |= h(n.charCodeAt(e) << 16 - e % 2 * 16);
                    }

                    return new t.e(i, 2 * r);
                  }
                },
                    d = s,
                    l = r(2214),
                    b = r(7008),
                    y = r(670),
                    p = r(9541),
                    m = (_v = function v(n, t) {
                  return (_v = Object.setPrototypeOf || {
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

                  _v(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
                }),
                    g = function (n) {
                  function r(t) {
                    var r = n.call(this, t) || this;
                    return r.H = 4, r.T = y.MD5, r.K = 1, t && (r.H = void 0 !== t.keySize ? t.keySize : r.H, r.T = void 0 !== t.Hasher ? t.Hasher : r.T, r.K = void 0 !== t.iterations ? t.iterations : r.K), r;
                  }

                  return m(r, n), r.prototype.compute = function (n, r) {
                    for (var i, e = new this.T(), o = new t.e(), u = o.words, f = this.H, c = this.K; u.length < f;) {
                      i && e.update(i), i = e.update(n).finalize(r), e.reset();

                      for (var a = 1; a < c; a++) {
                        i = e.finalize(i), e.reset();
                      }

                      o.concat(i);
                    }

                    return o.nSigBytes = 4 * f, o;
                  }, r.getKey = function (n, t, i) {
                    return new r(i).compute(n, t);
                  }, r;
                }(p._);
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
//# sourceMappingURL=lib.js.map