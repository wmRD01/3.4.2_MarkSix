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

              for (var e in n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode = n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode, t) {
                n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode[e] = t[e];
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
                GCM: function GCM() {
                  return v;
                }
              });

              var t,
                  e = function () {
                function n(n) {
                  this.i = n, this.u = n.cipher, this.h = n.iv;
                }

                return n.prototype.processBlock = function (n, r) {}, n.createEncryptor = function (n) {
                  throw new Error("Not implemented yet");
                }, n.createDecryptor = function (n) {
                  throw new Error("Not implemented yet");
                }, n;
              }(),
                  i = function i(n) {
                for (var r = n.nSigBytes, t = n.words, e = [], i = 0; i < r; i++) {
                  var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                }

                return e.join("");
              },
                  o = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                  u = (t = parseInt((/msie (\d+)/.exec(o) || [])[1], 10), isNaN(t) ? (t = parseInt((/trident\/.*; rv:(\d+)/.exec(o) || [])[1], 10), !isNaN(t) && t) : t);

              var f = function () {
                if ("undefined" != typeof window) {
                  var r = window.crypto || window.msCrypto;

                  if (!r) {
                    if (function (n, r) {
                      return !1 !== u && (!r || ("<" === n ? u < r : "<=" === n ? u <= r : ">" === n ? u > r : ">=" === n ? u >= r : u === r));
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
                  if (Array.isArray(r) || !r) return this.v = Array.isArray(r) ? r : [], void (this.l = "number" == typeof t ? t : 4 * this.v.length);
                  if (r instanceof n) return this.v = r.words.slice(), void (this.l = r.nSigBytes);
                  var e;

                  try {
                    r instanceof ArrayBuffer ? e = new Uint8Array(r) : (r instanceof Uint8Array || r instanceof Int8Array || r instanceof Uint8ClampedArray || r instanceof Int16Array || r instanceof Uint16Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Float32Array || r instanceof Float64Array) && (e = new Uint8Array(r.buffer, r.byteOffset, r.byteLength));
                  } catch (n) {
                    throw new Error("Invalid argument");
                  }

                  if (!e) throw new Error("Invalid argument");

                  for (var i = e.byteLength, o = [], u = 0; u < i; u++) {
                    o[u >>> 2] |= e[u] << 24 - u % 4 * 8;
                  }

                  this.v = o, this.l = i;
                }

                return Object.defineProperty(n.prototype, "nSigBytes", {
                  get: function get() {
                    return this.l;
                  },
                  set: function set(n) {
                    this.l = n;
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(n.prototype, "words", {
                  get: function get() {
                    return this.v;
                  },
                  enumerable: !1,
                  configurable: !0
                }), n.prototype.toString = function (n) {
                  return n ? n.stringify(this) : i(this);
                }, n.prototype.toUint8Array = function () {
                  for (var n = this.v, r = this.l, t = new Uint8Array(r), e = 0; e < r; e++) {
                    t[e] = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                  }

                  return t;
                }, n.prototype.concat = function (n) {
                  var r = n.words.slice(),
                      t = n.nSigBytes;
                  if (this.clamp(), this.l % 4) for (var e = 0; e < t; e++) {
                    var i = r[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    this.v[this.l + e >>> 2] |= i << 24 - (this.l + e) % 4 * 8;
                  } else for (e = 0; e < t; e += 4) {
                    this.v[this.l + e >>> 2] = r[e >>> 2];
                  }
                  return this.l += t, this;
                }, n.prototype.clamp = function () {
                  var n = this.l;
                  this.v[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.v.length = Math.ceil(n / 4);
                }, n.prototype.clone = function () {
                  return new n(this.v.slice(), this.l);
                }, n.random = function (r) {
                  for (var t = [], e = 0; e < r; e += 4) {
                    t.push(f());
                  }

                  return new n(t, r);
                }, n;
              }();

              function s(n) {
                var r = n.nSigBytes % 16;

                if (0 !== r) {
                  for (var t = 16 - r, e = [], i = Math.floor(t / 4), o = 0; o < i; o++) {
                    e.push(0);
                  }

                  t % 4 > 0 && e.push(0), n.concat(new a(e, t));
                }
              }

              var _c,
                  h = (_c = function c(n, r) {
                return (_c = Object.setPrototypeOf || {
                  __proto__: []
                } instanceof Array && function (n, r) {
                  n.__proto__ = r;
                } || function (n, r) {
                  for (var t in r) {
                    Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t]);
                  }
                })(n, r);
              }, function (n, r) {
                function t() {
                  this.constructor = n;
                }

                _c(n, r), n.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());
              }),
                  v = function (n) {
                function r(t) {
                  var e = n.call(this, t) || this;
                  if (e.m = [], e.p = [], e.A = [], 4 !== t.cipher.blockSize) throw new Error("In GCM block cipher mode, cipher block size must be 128bit");
                  var i = t.cipher,
                      o = t.iv,
                      u = [0, 0, 0, 0];
                  return i.encryptBlock(u, 0), e.m = u, e.p = r.getJ0(u, null == o ? void 0 : o.words), e.A = e.p.slice(), e;
                }

                return h(r, n), r.getJ0 = function (n, t) {
                  var e;
                  if (t && 0 !== t.length) {
                    if (3 === t.length) e = [t[0], t[1], t[2], 1];else {
                      for (var i = t.length % 4 > 0 ? 4 - t.length % 4 : 0, o = t.slice(), u = 0; u < i + 2; u++) {
                        o.push(0);
                      }

                      o.push(0), o.push(32 * t.length), e = r.GHASH(n, o);
                    }
                  } else e = [0, 0, 0, 1];
                  return e;
                }, r.inc32 = function (n) {
                  var r = n.slice(),
                      t = r[3] >>> 0,
                      e = t + 1 >>> 0 < t;

                  if (r[3] = r[3] + 1 | 0, e) {
                    var i = r[2] >>> 0,
                        o = i + 1 >>> 0 < i;
                    r[2] = r[2] + 1 | 0, o && (r[1] = r[1] + 1 | 0);
                  }

                  return r;
                }, r.mul = function (n, r) {
                  for (var t = [3774873600, 0, 0, 0], e = [0, 0, 0, 0], i = r.slice(), o = 0; o < 128; o++) {
                    (n[o >>> 5] >>> 31 - o % 32 & 1) > 0 && (e[0] = e[0] ^ i[0], e[1] = e[1] ^ i[1], e[2] = e[2] ^ i[2], e[3] = e[3] ^ i[3]);
                    var u = (1 & i[3]) >>> 0,
                        f = (1 & i[0]) >>> 0,
                        a = (1 & i[1]) >>> 0,
                        s = (1 & i[2]) >>> 0;
                    i[0] = i[0] >>> 1, i[1] = i[1] >>> 1 | (f ? 2147483648 : 0), i[2] = i[2] >>> 1 | (a ? 2147483648 : 0), i[3] = i[3] >>> 1 | (s ? 2147483648 : 0), u > 0 && (i[0] ^= t[0], i[1] ^= t[1], i[2] ^= t[2], i[3] ^= t[3]);
                  }

                  return e;
                }, r.GHASH = function (n, t) {
                  if (n.length % 4 != 0) throw new Error("Length of 32bit word array 'H' must be multiple of 4(128bit)");
                  if (t.length % 4 != 0) throw new Error("Length of 32bit word array 'X' must be multiple of 4(128bit)");

                  for (var e = t.length, i = [0, 0, 0, 0], o = 0; o < e; o += 4) {
                    i[0] = i[0] ^ t[o], i[1] = i[1] ^ t[o + 1], i[2] = i[2] ^ t[o + 2], i[3] = i[3] ^ t[o + 3], i = r.mul(i, n);
                  }

                  return i;
                }, r.GCTR = function (n, t, e) {
                  if (0 === e.nSigBytes) return e.clone();
                  if (4 !== t.length) throw new Error("Initial Counter Block size must be 128bit");

                  for (var i = e.words, o = Math.ceil(e.nSigBytes / 16), u = [t.slice()], f = 1; f < o; f++) {
                    var s = r.inc32(u[f - 1]);
                    u.push(s);
                  }

                  var c = new a();

                  for (f = 0; f < o; f++) {
                    n.encryptBlock(u[f], 0);
                    var h = e.nSigBytes % 16;

                    if (f < o - 1 || 0 === h) {
                      var v = i[4 * f] ^ u[f][0],
                          l = i[4 * f + 1] ^ u[f][1],
                          w = i[4 * f + 2] ^ u[f][2],
                          d = i[4 * f + 3] ^ u[f][3],
                          y = new a([v, l, w, d]);
                      c.concat(y);
                    } else {
                      for (var b = [], m = 0, p = Math.floor(h / 4), A = 0; A < p; A++) {
                        var g = i[4 * f + A] ^ u[f][A];
                        b.push(g), m += 4;
                      }

                      var j = h % 4;

                      if (j > 0) {
                        var E = i[4 * f + p] << 32 - 8 * j ^ u[f][p];
                        b.push(E), m += j;
                      }

                      var I = new a(b, m);
                      c.concat(I);
                    }
                  }

                  return c.nSigBytes = e.nSigBytes, c.clamp(), c;
                }, r.mac = function (n, t, e, i, o, u) {
                  var f = new n({
                    key: t,
                    iv: e
                  }),
                      c = [0, 0, 0, 0];
                  f.encryptBlock(c, 0);
                  var h = r.getJ0(c, e.words),
                      v = (null == i ? void 0 : i.clone()) || new a(),
                      l = [0, 8 * v.nSigBytes],
                      w = (null == o ? void 0 : o.clone()) || new a(),
                      d = [0, 8 * w.nSigBytes],
                      y = u || 16;
                  s(v), s(w);
                  var b,
                      m = v.words.concat(w.words).concat(l).concat(d),
                      p = r.GHASH(c, m),
                      A = r.GCTR(f, h, new a(p));
                  return b = y, new a(A.words.slice(), b);
                }, r.createEncryptor = function (n) {
                  return new r.Encryptor(n);
                }, r.createDecryptor = function (n) {
                  return new r.Decryptor(n);
                }, r.Encryptor = function (n) {
                  function t() {
                    return null !== n && n.apply(this, arguments) || this;
                  }

                  return h(t, n), t.prototype.processBlock = function (n, t) {
                    var e = this.u.blockSize;
                    this.A = r.inc32(this.A);

                    for (var i = new a(n.slice(t, t + e)), o = r.GCTR(this.u, this.A, i), u = 0; u < e; u++) {
                      n[t + u] = o.words[u];
                    }
                  }, t;
                }(r), r.Decryptor = function (n) {
                  function t() {
                    return null !== n && n.apply(this, arguments) || this;
                  }

                  return h(t, n), t.prototype.processBlock = function (n, t) {
                    var e = this.u.blockSize;
                    this.A = r.inc32(this.A);

                    for (var i = new a(n.slice(t, t + e)), o = r.GCTR(this.u, this.A, i), u = 0; u < e; u++) {
                      n[t + u] = o.words[u];
                    }
                  }, t;
                }(r), r;
              }(e);

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
//# sourceMappingURL=GCM.js.map