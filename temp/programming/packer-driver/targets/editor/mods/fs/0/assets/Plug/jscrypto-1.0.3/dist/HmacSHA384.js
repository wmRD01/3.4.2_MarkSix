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
              var e = t();

              for (var r in n.JsCrypto = n.JsCrypto || {}, e) n.JsCrypto[r] = e[r];
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                6367: function (n, t, e) {
                  e.d(t, {
                    Hmac: function () {
                      return i;
                    }
                  });

                  var r = e(4768),
                      i = function () {
                    function n(n, t) {
                      this.t = n, "string" == typeof t && (t = r.d.parse(t));
                      var e = n.blockSize,
                          i = 4 * e;
                      t.nSigBytes > i && (t = n.finalize(t)), t.clamp();

                      for (var o = this.i = t.clone(), u = this.u = t.clone(), f = o.words, c = u.words, s = 0; s < e; s++) f[s] ^= 1549556828, c[s] ^= 909522486;

                      u.nSigBytes = i, o.nSigBytes = i, this.reset();
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
                6324: function (n, t, e) {
                  e.d(t, {
                    SHA384: function () {
                      return f;
                    }
                  });

                  var r,
                      i = e(6957),
                      o = e(7491),
                      u = (r = function (n, t) {
                    return (r = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (n, t) {
                      n.__proto__ = t;
                    } || function (n, t) {
                      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                    })(n, t);
                  }, function (n, t) {
                    function e() {
                      this.constructor = n;
                    }

                    r(n, t), n.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
                  }),
                      f = function (n) {
                    function t(t) {
                      var e = n.call(this, t) || this;
                      return e.h = new i.m([new i.r(3418070365, 3238371032), new i.r(1654270250, 914150663), new i.r(2438529370, 812702999), new i.r(355462360, 4144912697), new i.r(1731405415, 4290775857), new i.r(2394180231, 1750603025), new i.r(3675008525, 1694076839), new i.r(1203062813, 3204075428)]), e.v = t, t && void 0 !== t.hash && (e.h = t.hash.clone()), e;
                    }

                    return u(t, n), t.prototype.l = function () {
                      this.h = new i.m([new i.r(3418070365, 3238371032), new i.r(1654270250, 914150663), new i.r(2438529370, 812702999), new i.r(355462360, 4144912697), new i.r(1731405415, 4290775857), new i.r(2394180231, 1750603025), new i.r(3675008525, 1694076839), new i.r(1203062813, 3204075428)]);
                    }, t.prototype.j = function () {
                      var t = n.prototype.j.call(this);
                      return t.nSigBytes -= 16, t;
                    }, t.prototype.clone = function () {
                      return new t({
                        hash: this.h,
                        blockSize: this.A,
                        data: this.O,
                        nBytes: this._
                      });
                    }, t.hash = function (n, e) {
                      return new t(e).finalize(n);
                    }, t;
                  }(o.SHA512);
                },
                7491: function (n, t, e) {
                  e.d(t, {
                    SHA512: function () {
                      return s;
                    }
                  });
                  var r,
                      i = e(1868),
                      o = e(6957),
                      u = (r = function (n, t) {
                    return (r = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (n, t) {
                      n.__proto__ = t;
                    } || function (n, t) {
                      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                    })(n, t);
                  }, function (n, t) {
                    function e() {
                      this.constructor = n;
                    }

                    r(n, t), n.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
                  }),
                      f = [new o.r(1116352408, 3609767458), new o.r(1899447441, 602891725), new o.r(3049323471, 3964484399), new o.r(3921009573, 2173295548), new o.r(961987163, 4081628472), new o.r(1508970993, 3053834265), new o.r(2453635748, 2937671579), new o.r(2870763221, 3664609560), new o.r(3624381080, 2734883394), new o.r(310598401, 1164996542), new o.r(607225278, 1323610764), new o.r(1426881987, 3590304994), new o.r(1925078388, 4068182383), new o.r(2162078206, 991336113), new o.r(2614888103, 633803317), new o.r(3248222580, 3479774868), new o.r(3835390401, 2666613458), new o.r(4022224774, 944711139), new o.r(264347078, 2341262773), new o.r(604807628, 2007800933), new o.r(770255983, 1495990901), new o.r(1249150122, 1856431235), new o.r(1555081692, 3175218132), new o.r(1996064986, 2198950837), new o.r(2554220882, 3999719339), new o.r(2821834349, 766784016), new o.r(2952996808, 2566594879), new o.r(3210313671, 3203337956), new o.r(3336571891, 1034457026), new o.r(3584528711, 2466948901), new o.r(113926993, 3758326383), new o.r(338241895, 168717936), new o.r(666307205, 1188179964), new o.r(773529912, 1546045734), new o.r(1294757372, 1522805485), new o.r(1396182291, 2643833823), new o.r(1695183700, 2343527390), new o.r(1986661051, 1014477480), new o.r(2177026350, 1206759142), new o.r(2456956037, 344077627), new o.r(2730485921, 1290863460), new o.r(2820302411, 3158454273), new o.r(3259730800, 3505952657), new o.r(3345764771, 106217008), new o.r(3516065817, 3606008344), new o.r(3600352804, 1432725776), new o.r(4094571909, 1467031594), new o.r(275423344, 851169720), new o.r(430227734, 3100823752), new o.r(506948616, 1363258195), new o.r(659060556, 3750685593), new o.r(883997877, 3785050280), new o.r(958139571, 3318307427), new o.r(1322822218, 3812723403), new o.r(1537002063, 2003034995), new o.r(1747873779, 3602036899), new o.r(1955562222, 1575990012), new o.r(2024104815, 1125592928), new o.r(2227730452, 2716904306), new o.r(2361852424, 442776044), new o.r(2428436474, 593698344), new o.r(2756734187, 3733110249), new o.r(3204031479, 2999351573), new o.r(3329325298, 3815920427), new o.r(3391569614, 3928383900), new o.r(3515267271, 566280711), new o.r(3940187606, 3454069534), new o.r(4118630271, 4000239992), new o.r(116418474, 1914138554), new o.r(174292421, 2731055270), new o.r(289380356, 3203993006), new o.r(460393269, 320620315), new o.r(685471733, 587496836), new o.r(852142971, 1086792851), new o.r(1017036298, 365543100), new o.r(1126000580, 2618297676), new o.r(1288033470, 3409855158), new o.r(1501505948, 4234509866), new o.r(1607167915, 987167468), new o.r(1816402316, 1246189591)],
                      c = [];
                  !function () {
                    for (var n = 0; n < 80; n++) c[n] = new o.r(0, 0);
                  }();

                  var s = function (n) {
                    function t(t) {
                      var e = n.call(this, t) || this;
                      return e.A = 32, e.h = new o.m([new o.r(1779033703, 4089235720), new o.r(3144134277, 2227873595), new o.r(1013904242, 4271175723), new o.r(2773480762, 1595750129), new o.r(1359893119, 2917565137), new o.r(2600822924, 725511199), new o.r(528734635, 4215389547), new o.r(1541459225, 327033209)]), e.v = t, t && void 0 !== t.hash && (e.h = t.hash.clone()), e;
                    }

                    return u(t, n), t.prototype.l = function () {
                      this.h = new o.m([new o.r(1779033703, 4089235720), new o.r(3144134277, 2227873595), new o.r(1013904242, 4271175723), new o.r(2773480762, 1595750129), new o.r(1359893119, 2917565137), new o.r(2600822924, 725511199), new o.r(528734635, 4215389547), new o.r(1541459225, 327033209)]);
                    }, t.prototype.I = function (n, t) {
                      for (var e = this.h.words, r = e[0], i = e[1], o = e[2], u = e[3], s = e[4], w = e[5], a = e[6], h = e[7], v = r.high, d = r.low, l = i.high, b = i.low, y = o.high, p = o.low, m = u.high, g = u.low, j = s.high, A = s.low, O = w.high, _ = w.low, I = a.high, S = a.low, E = h.high, M = h.low, U = v, H = d, N = l, x = b, B = y, C = p, F = m, k = g, z = j, T = A, P = O, R = _, q = I, $ = S, D = E, G = M, J = 0; J < 80; J++) {
                        var K = void 0,
                            L = void 0,
                            Q = c[J];
                        if (J < 16) L = Q.high = 0 | n[t + 2 * J], K = Q.low = 0 | n[t + 2 * J + 1];else {
                          var V = c[J - 15],
                              W = V.high,
                              X = V.low,
                              Y = (W >>> 1 | X << 31) ^ (W >>> 8 | X << 24) ^ W >>> 7,
                              Z = (X >>> 1 | W << 31) ^ (X >>> 8 | W << 24) ^ (X >>> 7 | W << 25),
                              nn = c[J - 2],
                              tn = nn.high,
                              en = nn.low,
                              rn = (tn >>> 19 | en << 13) ^ (tn << 3 | en >>> 29) ^ tn >>> 6,
                              on = (en >>> 19 | tn << 13) ^ (en << 3 | tn >>> 29) ^ (en >>> 6 | tn << 26),
                              un = c[J - 7],
                              fn = un.high,
                              cn = un.low,
                              sn = c[J - 16],
                              wn = sn.high,
                              an = sn.low;
                          L = (L = (L = Y + fn + ((K = Z + cn) >>> 0 < Z >>> 0 ? 1 : 0)) + rn + ((K += on) >>> 0 < on >>> 0 ? 1 : 0)) + wn + ((K += an) >>> 0 < an >>> 0 ? 1 : 0), Q.high = L, Q.low = K;
                        }

                        var hn = z & P ^ ~z & q,
                            vn = T & R ^ ~T & $,
                            dn = U & N ^ U & B ^ N & B,
                            ln = H & x ^ H & C ^ x & C,
                            bn = (U >>> 28 | H << 4) ^ (U << 30 | H >>> 2) ^ (U << 25 | H >>> 7),
                            yn = (H >>> 28 | U << 4) ^ (H << 30 | U >>> 2) ^ (H << 25 | U >>> 7),
                            pn = (z >>> 14 | T << 18) ^ (z >>> 18 | T << 14) ^ (z << 23 | T >>> 9),
                            mn = (T >>> 14 | z << 18) ^ (T >>> 18 | z << 14) ^ (T << 23 | z >>> 9),
                            gn = f[J],
                            jn = gn.high,
                            An = gn.low,
                            On = G + mn,
                            _n = D + pn + (On >>> 0 < G >>> 0 ? 1 : 0),
                            In = yn + ln;

                        D = q, G = $, q = P, $ = R, P = z, R = T, z = F + (_n = (_n = (_n = _n + hn + ((On += vn) >>> 0 < vn >>> 0 ? 1 : 0)) + jn + ((On += An) >>> 0 < An >>> 0 ? 1 : 0)) + L + ((On += K) >>> 0 < K >>> 0 ? 1 : 0)) + ((T = k + On | 0) >>> 0 < k >>> 0 ? 1 : 0) | 0, F = B, k = C, B = N, C = x, N = U, x = H, U = _n + (bn + dn + (In >>> 0 < yn >>> 0 ? 1 : 0)) + ((H = On + In | 0) >>> 0 < On >>> 0 ? 1 : 0) | 0;
                      }

                      d = r.low = d + H, r.high = v + U + (d >>> 0 < H >>> 0 ? 1 : 0), b = i.low = b + x, i.high = l + N + (b >>> 0 < x >>> 0 ? 1 : 0), p = o.low = p + C, o.high = y + B + (p >>> 0 < C >>> 0 ? 1 : 0), g = u.low = g + k, u.high = m + F + (g >>> 0 < k >>> 0 ? 1 : 0), A = s.low = A + T, s.high = j + z + (A >>> 0 < T >>> 0 ? 1 : 0), _ = w.low = _ + R, w.high = O + P + (_ >>> 0 < R >>> 0 ? 1 : 0), S = a.low = S + $, a.high = I + q + (S >>> 0 < $ >>> 0 ? 1 : 0), M = h.low = M + G, h.high = E + D + (M >>> 0 < G >>> 0 ? 1 : 0);
                    }, t.prototype.j = function () {
                      var n = this.O,
                          t = n.words,
                          e = 8 * this._,
                          r = 8 * n.nSigBytes;
                      return t[r >>> 5] |= 128 << 24 - r % 32, t[30 + (r + 128 >>> 10 << 5)] = Math.floor(e / 4294967296), t[31 + (r + 128 >>> 10 << 5)] = e, n.nSigBytes = 4 * t.length, this.S(), this.h.to32();
                    }, t.prototype.clone = function () {
                      return new t({
                        hash: this.h,
                        blockSize: this.A,
                        data: this.O,
                        nBytes: this._
                      });
                    }, t.hash = function (n, e) {
                      return new t(e).finalize(n);
                    }, t;
                  }(i.P);
                },
                3354: function (n, t, e) {
                  e.d(t, {
                    e: function () {
                      return o;
                    }
                  });

                  var r = e(5720),
                      i = e(9054),
                      o = function () {
                    function n(t, e) {
                      if (Array.isArray(t) || !t) return this.U = Array.isArray(t) ? t : [], void (this.H = "number" == typeof e ? e : 4 * this.U.length);
                      if (t instanceof n) return this.U = t.words.slice(), void (this.H = t.nSigBytes);
                      var r;

                      try {
                        t instanceof ArrayBuffer ? r = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
                      } catch (n) {
                        throw new Error("Invalid argument");
                      }

                      if (!r) throw new Error("Invalid argument");

                      for (var i = r.byteLength, o = [], u = 0; u < i; u++) o[u >>> 2] |= r[u] << 24 - u % 4 * 8;

                      this.U = o, this.H = i;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function () {
                        return this.H;
                      },
                      set: function (n) {
                        this.H = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function () {
                        return this.U;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.toString = function (n) {
                      return n ? n.stringify(this) : r.p.stringify(this);
                    }, n.prototype.toUint8Array = function () {
                      for (var n = this.U, t = this.H, e = new Uint8Array(t), r = 0; r < t; r++) e[r] = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;

                      return e;
                    }, n.prototype.concat = function (n) {
                      var t = n.words.slice(),
                          e = n.nSigBytes;
                      if (this.clamp(), this.H % 4) for (var r = 0; r < e; r++) {
                        var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        this.U[this.H + r >>> 2] |= i << 24 - (this.H + r) % 4 * 8;
                      } else for (r = 0; r < e; r += 4) this.U[this.H + r >>> 2] = t[r >>> 2];
                      return this.H += e, this;
                    }, n.prototype.clamp = function () {
                      var n = this.H;
                      this.U[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.U.length = Math.ceil(n / 4);
                    }, n.prototype.clone = function () {
                      return new n(this.U.slice(), this.H);
                    }, n.random = function (t) {
                      for (var e = [], r = 0; r < t; r += 4) e.push((0, i.M)());

                      return new n(e, t);
                    }, n;
                  }();
                },
                6957: function (n, t, e) {
                  e.d(t, {
                    r: function () {
                      return o;
                    },
                    m: function () {
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
                      this.U = n || [], this.H = "number" == typeof t ? t : 8 * this.U.length;
                    }

                    return Object.defineProperty(n.prototype, "nSigBytes", {
                      get: function () {
                        return this.H;
                      },
                      set: function (n) {
                        this.H = n;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), Object.defineProperty(n.prototype, "words", {
                      get: function () {
                        return this.U;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.to32 = function () {
                      for (var n = [], t = 0; t < this.U.length; t++) {
                        var e = this.U[t];
                        n.push(e.high), n.push(e.low);
                      }

                      return new i.e(n, this.H);
                    }, n.prototype.toString = function (n) {
                      return n ? n.stringify(this.to32()) : r.p.stringify(this.to32());
                    }, n.prototype.clone = function () {
                      for (var t = this.U.slice(), e = 0; e < t.length; e++) t[e] = t[e].clone();

                      return new n(t, this.H);
                    }, n;
                  }();
                },
                7211: function (n, t, e) {
                  e.d(t, {
                    C: function () {
                      return o;
                    }
                  });

                  var r = e(3354),
                      i = e(4768),
                      o = function () {
                    function n(n) {
                      this.N = 0, this.A = 0, this.v = n, this.O = n && void 0 !== n.data ? n.data.clone() : new r.e(), this._ = n && "number" == typeof n.nBytes ? n.nBytes : 0;
                    }

                    return Object.defineProperty(n.prototype, "blockSize", {
                      get: function () {
                        return this.A;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), n.prototype.reset = function (n, t) {
                      this.O = void 0 !== n ? n.clone() : new r.e(), this._ = "number" == typeof t ? t : 0;
                    }, n.prototype.B = function (n) {
                      var t = "string" == typeof n ? i.d.parse(n) : n;
                      this.O.concat(t), this._ += t.nSigBytes;
                    }, n.prototype.S = function (n) {
                      var t,
                          e = this.O.words,
                          i = this.O.nSigBytes,
                          o = this.A,
                          u = i / (4 * this.A),
                          f = (u = n ? Math.ceil(u) : Math.max((0 | u) - this.N, 0)) * o,
                          c = Math.min(4 * f, i);

                      if (f) {
                        for (var s = 0; s < f; s += o) this.I(e, s);

                        t = e.splice(0, f), this.O.nSigBytes -= c;
                      }

                      return new r.e(t, c);
                    }, n.prototype.I = function (n, t) {
                      throw new Error("Not implemented");
                    }, n;
                  }();
                },
                1868: function (n, t, e) {
                  e.d(t, {
                    P: function () {
                      return u;
                    }
                  });

                  var r,
                      i = e(7211),
                      o = (r = function (n, t) {
                    return (r = Object.setPrototypeOf || {
                      __proto__: []
                    } instanceof Array && function (n, t) {
                      n.__proto__ = t;
                    } || function (n, t) {
                      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                    })(n, t);
                  }, function (n, t) {
                    function e() {
                      this.constructor = n;
                    }

                    r(n, t), n.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
                  }),
                      u = function (n) {
                    function t(t) {
                      var e = n.call(this, t) || this;
                      return e.A = 16, e.v = t, t && "number" == typeof t.blockSize && (e.A = t.blockSize), e.reset(t ? t.data : void 0, t ? t.nBytes : void 0), e;
                    }

                    return o(t, n), Object.defineProperty(t.prototype, "blockSize", {
                      get: function () {
                        return this.A;
                      },
                      enumerable: !1,
                      configurable: !0
                    }), t.prototype.reset = function (t, e) {
                      n.prototype.reset.call(this, t, e), this.l();
                    }, t.prototype.update = function (n) {
                      return this.B(n), this.S(), this;
                    }, t.prototype.finalize = function (n) {
                      return n && this.B(n), this.j();
                    }, t.prototype.l = function () {
                      throw new Error("Not implemented");
                    }, t.prototype.j = function () {
                      throw new Error("Not implemented");
                    }, t;
                  }(i.C);
                },
                1756: function (n, t, e) {
                  e.d(t, {
                    w: function () {
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
                5720: function (n, t, e) {
                  e.d(t, {
                    p: function () {
                      return i;
                    }
                  });
                  var r = e(3354),
                      i = {
                    stringify: function (n) {
                      for (var t = n.nSigBytes, e = n.words, r = [], i = 0; i < t; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
                      }

                      return r.join("");
                    },
                    parse: function (n) {
                      var t = n.length;
                      if (t % 2 != 0) throw new Error("Hex string count must be even");
                      if (!/^[a-fA-F0-9]+$/.test(n)) throw new Error("Invalid Hex string: " + n);

                      for (var e = [], i = 0; i < t; i += 2) e[i >>> 3] |= parseInt(n.substr(i, 2), 16) << 24 - i % 8 * 4;

                      return new r.e(e, t / 2);
                    }
                  };
                },
                8702: function (n, t, e) {
                  e.d(t, {
                    m: function () {
                      return i;
                    }
                  });
                  var r = e(3354),
                      i = {
                    stringify: function (n) {
                      for (var t = n.nSigBytes, e = n.words, r = [], i = 0; i < t; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push(String.fromCharCode(o));
                      }

                      return r.join("");
                    },
                    parse: function (n) {
                      for (var t = n.length, e = [], i = 0; i < t; i++) e[i >>> 2] |= (255 & n.charCodeAt(i)) << 24 - i % 4 * 8;

                      return new r.e(e, t);
                    }
                  };
                },
                4768: function (n, t, e) {
                  e.d(t, {
                    d: function () {
                      return i;
                    }
                  });
                  var r = e(8702),
                      i = {
                    stringify: function (n) {
                      try {
                        return decodeURIComponent(escape(r.m.stringify(n)));
                      } catch (n) {
                        throw new Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function (n) {
                      return r.m.parse(unescape(encodeURIComponent(n)));
                    }
                  };
                },
                9054: function (n, t, e) {
                  e.d(t, {
                    M: function () {
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
                for (var r in t) e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, {
                  enumerable: !0,
                  get: t[r]
                });
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
                }), Object.defineProperty(n, "F", {
                  value: !0
                });
              };
              var r = {};
              return function () {
                e.r(r), e.d(r, {
                  HmacSHA384: function () {
                    return i;
                  }
                });
                var n = e(6367),
                    t = e(6324);

                function i(e, r) {
                  return new n.Hmac(new t.SHA384(), r).finalize(e);
                }
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
//# sourceMappingURL=HmacSHA384.js.map