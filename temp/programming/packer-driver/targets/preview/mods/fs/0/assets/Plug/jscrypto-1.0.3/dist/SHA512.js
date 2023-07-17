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
              var e = t();

              for (var r in n.JsCrypto = n.JsCrypto || {}, e) {
                n.JsCrypto[r] = e[r];
              }
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                3354: function _(n, t, e) {
                  e.d(t, {
                    e: function e() {
                      return o;
                    }
                  });

                  var r = e(5720),
                      i = e(9054),
                      o = function () {
                    function n(t, e) {
                      if (Array.isArray(t) || !t) return this.t = Array.isArray(t) ? t : [], void (this.i = "number" == typeof e ? e : 4 * this.t.length);
                      if (t instanceof n) return this.t = t.words.slice(), void (this.i = t.nSigBytes);
                      var r;

                      try {
                        t instanceof ArrayBuffer ? r = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
                      } catch (n) {
                        throw new Error("Invalid argument");
                      }

                      if (!r) throw new Error("Invalid argument");

                      for (var i = r.byteLength, o = [], u = 0; u < i; u++) {
                        o[u >>> 2] |= r[u] << 24 - u % 4 * 8;
                      }

                      this.t = o, this.i = i;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function get() {
                        return this.i;
                      },
                      set: function set(n) {
                        this.i = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function get() {
                        return this.t;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.toString = function (n) {
                      return n ? n.stringify(this) : r.p.stringify(this);
                    }, n.prototype.toUint8Array = function () {
                      for (var n = this.t, t = this.i, e = new Uint8Array(t), r = 0; r < t; r++) {
                        e[r] = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                      }

                      return e;
                    }, n.prototype.concat = function (n) {
                      var t = n.words.slice(),
                          e = n.nSigBytes;
                      if (this.clamp(), this.i % 4) for (var r = 0; r < e; r++) {
                        var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        this.t[this.i + r >>> 2] |= i << 24 - (this.i + r) % 4 * 8;
                      } else for (r = 0; r < e; r += 4) {
                        this.t[this.i + r >>> 2] = t[r >>> 2];
                      }
                      return this.i += e, this;
                    }, n.prototype.clamp = function () {
                      var n = this.i;
                      this.t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.t.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.t.slice(), this.i);
                    }, n.random = function (t) {
                      for (var e = [], r = 0; r < t; r += 4) {
                        e.push((0, i.M)());
                      }

                      return new n(e, t);
                    }, n;
                  }();
                },
                6957: function _(n, t, e) {
                  e.d(t, {
                    r: function r() {
                      return o;
                    },
                    m: function m() {
                      return u;
                    }
                  });

                  var r = e(5720),
                      i = e(3354),
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
                      this.t = n || [], this.i = "number" == typeof t ? t : 8 * this.t.length;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function get() {
                        return this.i;
                      },
                      set: function set(n) {
                        this.i = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function get() {
                        return this.t;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.to32 = function () {
                      for (var n = [], t = 0; t < this.t.length; t++) {
                        var e = this.t[t];
                        n.push(e.high), n.push(e.low);
                      }

                      return new i.e(n, this.i);
                    }, n.prototype.toString = function (n) {
                      return n ? n.stringify(this.to32()) : r.p.stringify(this.to32());
                    }, n.prototype.clone = function () {
                      for (var t = this.t.slice(), e = 0; e < t.length; e++) {
                        t[e] = t[e].clone();
                      }

                      return new n(t, this.i);
                    }, n;
                  }();
                },
                7211: function _(n, t, e) {
                  e.d(t, {
                    C: function C() {
                      return o;
                    }
                  });

                  var r = e(3354),
                      i = e(4768),
                      o = function () {
                    function n(n) {
                      this.u = 0, this.h = 0, this.v = n, this.l = n && void 0 !== n.data ? n.data.clone() : new r.e(), this.j = n && "number" == typeof n.nBytes ? n.nBytes : 0;
                    }

                    return Object.defineProperty(n.prototype, "blockSize", {
                      get: function get() {
                        return this.h;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.reset = function (n, t) {
                      this.l = void 0 !== n ? n.clone() : new r.e(), this.j = "number" == typeof t ? t : 0;
                    }, n.prototype.A = function (n) {
                      var t = "string" == typeof n ? i.d.parse(n) : n;
                      this.l.concat(t), this.j += t.nSigBytes;
                    }, n.prototype.O = function (n) {
                      var t,
                          e = this.l.words,
                          i = this.l.nSigBytes,
                          o = this.h,
                          u = i / (4 * this.h),
                          f = (u = n ? Math.ceil(u) : Math.max((0 | u) - this.u, 0)) * o,
                          c = Math.min(4 * f, i);

                      if (f) {
                        for (var s = 0; s < f; s += o) {
                          this.I(e, s);
                        }

                        t = e.splice(0, f), this.l.nSigBytes -= c;
                      }

                      return new r.e(t, c);
                    }, n.prototype.I = function (n, t) {
                      throw new Error("Not implemented");
                    }, n;
                  }();
                },
                1868: function _(n, t, e) {
                  e.d(t, {
                    P: function P() {
                      return u;
                    }
                  });

                  var _r,
                      i = e(7211),
                      o = (_r = function r(n, t) {
                    return (_r = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (n, t) {
                      n.__proto__ = t;
                    } || function (n, t) {
                      for (var e in t) {
                        Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                      }
                    })(n, t);
                  }, function (n, t) {
                    function e() {
                      this.constructor = n;
                    }

                    _r(n, t), n.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
                  }),
                      u = function (n) {
                    function t(t) {
                      var e = n.call(this, t) || this;
                      return e.h = 16, e.v = t, t && "number" == typeof t.blockSize && (e.h = t.blockSize), e.reset(t ? t.data : void 0, t ? t.nBytes : void 0), e;
                    }

                    return o(t, n), Object.defineProperty(t.prototype, "blockSize", {
                      get: function get() {
                        return this.h;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.reset = function (t, e) {
                      n.prototype.reset.call(this, t, e), this.U();
                    }, t.prototype.update = function (n) {
                      return this.A(n), this.O(), this;
                    }, t.prototype.finalize = function (n) {
                      return n && this.A(n), this.S();
                    }, t.prototype.U = function () {
                      throw new Error("Not implemented");
                    }, t.prototype.S = function () {
                      throw new Error("Not implemented");
                    }, t;
                  }(i.C);
                },
                1756: function _(n, t, e) {
                  e.d(t, {
                    w: function w() {
                      return u;
                    }
                  });
                  var r,
                      i = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                      o = (r = parseInt((/msie (\d+)/.exec(i) || [])[1], 10), isNaN(r) ? (r = parseInt((/trident\/.*; rv:(\d+)/.exec(i) || [])[1], 10), !isNaN(r) && r) : r);

                  function u(n, t) {
                    return !1 !== o && (!t || ("<" === n ? o < t : "<=" === n ? o <= t : ">" === n ? o > t : ">=" === n ? o >= t : o === t));
                  }
                },
                5720: function _(n, t, e) {
                  e.d(t, {
                    p: function p() {
                      return i;
                    }
                  });
                  var r = e(3354),
                      i = {
                    stringify: function stringify(n) {
                      for (var t = n.nSigBytes, e = n.words, r = [], i = 0; i < t; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
                      }

                      return r.join("");
                    },
                    parse: function parse(n) {
                      var t = n.length;
                      if (t % 2 != 0) throw new Error("Hex string count must be even");
                      if (!/^[a-fA-F0-9]+$/.test(n)) throw new Error("Invalid Hex string: " + n);

                      for (var e = [], i = 0; i < t; i += 2) {
                        e[i >>> 3] |= parseInt(n.substr(i, 2), 16) << 24 - i % 8 * 4;
                      }

                      return new r.e(e, t / 2);
                    }
                  };
                },
                8702: function _(n, t, e) {
                  e.d(t, {
                    m: function m() {
                      return i;
                    }
                  });
                  var r = e(3354),
                      i = {
                    stringify: function stringify(n) {
                      for (var t = n.nSigBytes, e = n.words, r = [], i = 0; i < t; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push(String.fromCharCode(o));
                      }

                      return r.join("");
                    },
                    parse: function parse(n) {
                      for (var t = n.length, e = [], i = 0; i < t; i++) {
                        e[i >>> 2] |= (255 & n.charCodeAt(i)) << 24 - i % 4 * 8;
                      }

                      return new r.e(e, t);
                    }
                  };
                },
                4768: function _(n, t, e) {
                  e.d(t, {
                    d: function d() {
                      return i;
                    }
                  });
                  var r = e(8702),
                      i = {
                    stringify: function stringify(n) {
                      try {
                        return decodeURIComponent(escape(r.m.stringify(n)));
                      } catch (n) {
                        throw new Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function parse(n) {
                      return r.m.parse(unescape(encodeURIComponent(n)));
                    }
                  };
                },
                9054: function _(n, t, e) {
                  e.d(t, {
                    M: function M() {
                      return i;
                    }
                  });
                  var r = e(1756);

                  var i = function () {
                    if ("undefined" != typeof window) {
                      var n = window.crypto || window.msCrypto;

                      if (!n) {
                        if ((0, r.w)("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
                          return Math.floor(512 * Math.random()) % 256;
                        };
                        throw new Error("Crypto module not found");
                      }

                      return function () {
                        return n.getRandomValues(new Uint32Array(1))[0];
                      };
                    }

                    return void 0 !== e.g && e.g.crypto ? function () {
                      return e.g.crypto.randomBytes(4).readInt32LE();
                    } : function () {
                      return require("crypto").randomBytes(4).readInt32LE();
                    };
                  }();
                }
              },
                  t = {};

              function e(r) {
                var i = t[r];
                if (void 0 !== i) return i.exports;
                var o = t[r] = {
                  exports: {}
                };
                return n[r](o, o.exports, e), o.exports;
              }

              e.d = function (n, t) {
                for (var r in t) {
                  e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: t[r]
                  });
                }
              }, e.g = function () {
                if ("object" == typeof globalThis) return globalThis;

                try {
                  return this || new Function("return this")();
                } catch (n) {
                  if ("object" == typeof window) return window;
                }
              }(), e.o = function (n, t) {
                return Object.prototype.hasOwnProperty.call(n, t);
              }, e.r = function (n) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(n, "_", {
                  value: !0
                });
              };
              var r = {};
              return function () {
                e.r(r), e.d(r, {
                  SHA512: function SHA512() {
                    return c;
                  }
                });

                var _n,
                    t = e(1868),
                    i = e(6957),
                    o = (_n = function n(t, e) {
                  return (_n = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function (n, t) {
                    n.__proto__ = t;
                  } || function (n, t) {
                    for (var e in t) {
                      Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                    }
                  })(t, e);
                }, function (t, e) {
                  function r() {
                    this.constructor = t;
                  }

                  _n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
                }),
                    u = [new i.r(1116352408, 3609767458), new i.r(1899447441, 602891725), new i.r(3049323471, 3964484399), new i.r(3921009573, 2173295548), new i.r(961987163, 4081628472), new i.r(1508970993, 3053834265), new i.r(2453635748, 2937671579), new i.r(2870763221, 3664609560), new i.r(3624381080, 2734883394), new i.r(310598401, 1164996542), new i.r(607225278, 1323610764), new i.r(1426881987, 3590304994), new i.r(1925078388, 4068182383), new i.r(2162078206, 991336113), new i.r(2614888103, 633803317), new i.r(3248222580, 3479774868), new i.r(3835390401, 2666613458), new i.r(4022224774, 944711139), new i.r(264347078, 2341262773), new i.r(604807628, 2007800933), new i.r(770255983, 1495990901), new i.r(1249150122, 1856431235), new i.r(1555081692, 3175218132), new i.r(1996064986, 2198950837), new i.r(2554220882, 3999719339), new i.r(2821834349, 766784016), new i.r(2952996808, 2566594879), new i.r(3210313671, 3203337956), new i.r(3336571891, 1034457026), new i.r(3584528711, 2466948901), new i.r(113926993, 3758326383), new i.r(338241895, 168717936), new i.r(666307205, 1188179964), new i.r(773529912, 1546045734), new i.r(1294757372, 1522805485), new i.r(1396182291, 2643833823), new i.r(1695183700, 2343527390), new i.r(1986661051, 1014477480), new i.r(2177026350, 1206759142), new i.r(2456956037, 344077627), new i.r(2730485921, 1290863460), new i.r(2820302411, 3158454273), new i.r(3259730800, 3505952657), new i.r(3345764771, 106217008), new i.r(3516065817, 3606008344), new i.r(3600352804, 1432725776), new i.r(4094571909, 1467031594), new i.r(275423344, 851169720), new i.r(430227734, 3100823752), new i.r(506948616, 1363258195), new i.r(659060556, 3750685593), new i.r(883997877, 3785050280), new i.r(958139571, 3318307427), new i.r(1322822218, 3812723403), new i.r(1537002063, 2003034995), new i.r(1747873779, 3602036899), new i.r(1955562222, 1575990012), new i.r(2024104815, 1125592928), new i.r(2227730452, 2716904306), new i.r(2361852424, 442776044), new i.r(2428436474, 593698344), new i.r(2756734187, 3733110249), new i.r(3204031479, 2999351573), new i.r(3329325298, 3815920427), new i.r(3391569614, 3928383900), new i.r(3515267271, 566280711), new i.r(3940187606, 3454069534), new i.r(4118630271, 4000239992), new i.r(116418474, 1914138554), new i.r(174292421, 2731055270), new i.r(289380356, 3203993006), new i.r(460393269, 320620315), new i.r(685471733, 587496836), new i.r(852142971, 1086792851), new i.r(1017036298, 365543100), new i.r(1126000580, 2618297676), new i.r(1288033470, 3409855158), new i.r(1501505948, 4234509866), new i.r(1607167915, 987167468), new i.r(1816402316, 1246189591)],
                    f = [];

                !function () {
                  for (var n = 0; n < 80; n++) {
                    f[n] = new i.r(0, 0);
                  }
                }();

                var c = function (n) {
                  function t(t) {
                    var e = n.call(this, t) || this;
                    return e.h = 32, e.N = new i.m([new i.r(1779033703, 4089235720), new i.r(3144134277, 2227873595), new i.r(1013904242, 4271175723), new i.r(2773480762, 1595750129), new i.r(1359893119, 2917565137), new i.r(2600822924, 725511199), new i.r(528734635, 4215389547), new i.r(1541459225, 327033209)]), e.v = t, t && void 0 !== t.hash && (e.N = t.hash.clone()), e;
                  }

                  return o(t, n), t.prototype.U = function () {
                    this.N = new i.m([new i.r(1779033703, 4089235720), new i.r(3144134277, 2227873595), new i.r(1013904242, 4271175723), new i.r(2773480762, 1595750129), new i.r(1359893119, 2917565137), new i.r(2600822924, 725511199), new i.r(528734635, 4215389547), new i.r(1541459225, 327033209)]);
                  }, t.prototype.I = function (n, t) {
                    for (var e = this.N.words, r = e[0], i = e[1], o = e[2], c = e[3], s = e[4], w = e[5], a = e[6], h = e[7], v = r.high, d = r.low, l = i.high, b = i.low, y = o.high, p = o.low, m = c.high, g = c.low, j = s.high, A = s.low, O = w.high, I = w.low, E = a.high, M = a.low, U = h.high, S = h.low, _ = v, N = d, x = l, C = b, F = y, B = p, k = m, z = g, H = j, T = A, P = O, R = I, q = E, $ = M, D = U, G = S, J = 0; J < 80; J++) {
                      var K = void 0,
                          L = void 0,
                          Q = f[J];
                      if (J < 16) L = Q.high = 0 | n[t + 2 * J], K = Q.low = 0 | n[t + 2 * J + 1];else {
                        var V = f[J - 15],
                            W = V.high,
                            X = V.low,
                            Y = (W >>> 1 | X << 31) ^ (W >>> 8 | X << 24) ^ W >>> 7,
                            Z = (X >>> 1 | W << 31) ^ (X >>> 8 | W << 24) ^ (X >>> 7 | W << 25),
                            nn = f[J - 2],
                            tn = nn.high,
                            en = nn.low,
                            rn = (tn >>> 19 | en << 13) ^ (tn << 3 | en >>> 29) ^ tn >>> 6,
                            on = (en >>> 19 | tn << 13) ^ (en << 3 | tn >>> 29) ^ (en >>> 6 | tn << 26),
                            un = f[J - 7],
                            fn = un.high,
                            cn = un.low,
                            sn = f[J - 16],
                            wn = sn.high,
                            an = sn.low;
                        L = (L = (L = Y + fn + ((K = Z + cn) >>> 0 < Z >>> 0 ? 1 : 0)) + rn + ((K += on) >>> 0 < on >>> 0 ? 1 : 0)) + wn + ((K += an) >>> 0 < an >>> 0 ? 1 : 0), Q.high = L, Q.low = K;
                      }
                      var hn = H & P ^ ~H & q,
                          vn = T & R ^ ~T & $,
                          dn = _ & x ^ _ & F ^ x & F,
                          ln = N & C ^ N & B ^ C & B,
                          bn = (_ >>> 28 | N << 4) ^ (_ << 30 | N >>> 2) ^ (_ << 25 | N >>> 7),
                          yn = (N >>> 28 | _ << 4) ^ (N << 30 | _ >>> 2) ^ (N << 25 | _ >>> 7),
                          pn = (H >>> 14 | T << 18) ^ (H >>> 18 | T << 14) ^ (H << 23 | T >>> 9),
                          mn = (T >>> 14 | H << 18) ^ (T >>> 18 | H << 14) ^ (T << 23 | H >>> 9),
                          gn = u[J],
                          jn = gn.high,
                          An = gn.low,
                          On = G + mn,
                          In = D + pn + (On >>> 0 < G >>> 0 ? 1 : 0),
                          En = yn + ln;
                      D = q, G = $, q = P, $ = R, P = H, R = T, H = k + (In = (In = (In = In + hn + ((On += vn) >>> 0 < vn >>> 0 ? 1 : 0)) + jn + ((On += An) >>> 0 < An >>> 0 ? 1 : 0)) + L + ((On += K) >>> 0 < K >>> 0 ? 1 : 0)) + ((T = z + On | 0) >>> 0 < z >>> 0 ? 1 : 0) | 0, k = F, z = B, F = x, B = C, x = _, C = N, _ = In + (bn + dn + (En >>> 0 < yn >>> 0 ? 1 : 0)) + ((N = On + En | 0) >>> 0 < On >>> 0 ? 1 : 0) | 0;
                    }

                    d = r.low = d + N, r.high = v + _ + (d >>> 0 < N >>> 0 ? 1 : 0), b = i.low = b + C, i.high = l + x + (b >>> 0 < C >>> 0 ? 1 : 0), p = o.low = p + B, o.high = y + F + (p >>> 0 < B >>> 0 ? 1 : 0), g = c.low = g + z, c.high = m + k + (g >>> 0 < z >>> 0 ? 1 : 0), A = s.low = A + T, s.high = j + H + (A >>> 0 < T >>> 0 ? 1 : 0), I = w.low = I + R, w.high = O + P + (I >>> 0 < R >>> 0 ? 1 : 0), M = a.low = M + $, a.high = E + q + (M >>> 0 < $ >>> 0 ? 1 : 0), S = h.low = S + G, h.high = U + D + (S >>> 0 < G >>> 0 ? 1 : 0);
                  }, t.prototype.S = function () {
                    var n = this.l,
                        t = n.words,
                        e = 8 * this.j,
                        r = 8 * n.nSigBytes;
                    return t[r >>> 5] |= 128 << 24 - r % 32, t[30 + (r + 128 >>> 10 << 5)] = Math.floor(e / 4294967296), t[31 + (r + 128 >>> 10 << 5)] = e, n.nSigBytes = 4 * t.length, this.O(), this.N.to32();
                  }, t.prototype.clone = function () {
                    return new t({
                      hash: this.N,
                      blockSize: this.h,
                      data: this.l,
                      nBytes: this.j
                    });
                  }, t.hash = function (n, e) {
                    return new t(e).finalize(n);
                  }, t;
                }(t.P);
              }(), r;
            }();
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=SHA512.js.map