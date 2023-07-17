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

              for (var e in n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode = n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode, r) {
                n.JsCrypto = n.JsCrypto || {}, n.JsCrypto.mode[e] = r[e];
              }
            }
          }(this, function () {
            return function () {
              "use strict";

              var n = {
                d: function d(t, r) {
                  for (var e in r) {
                    n.o(r, e) && !n.o(t, e) && Object.defineProperty(t, e, {
                      enumerable: !0,
                      get: r[e]
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
              }(), n.o = function (n, t) {
                return Object.prototype.hasOwnProperty.call(n, t);
              }, n.r = function (n) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(n, "t", {
                  value: !0
                });
              };
              var t = {};
              n.r(t), n.d(t, {
                CCM: function CCM() {
                  return w;
                }
              });

              var r,
                  e = function () {
                function n(n) {
                  this.i = n, this.u = n.cipher, this.h = n.iv;
                }

                return n.prototype.processBlock = function (n, t) {}, n.createEncryptor = function (n) {
                  throw new Error("Not implemented yet");
                }, n.createDecryptor = function (n) {
                  throw new Error("Not implemented yet");
                }, n;
              }(),
                  i = function i(n) {
                for (var t = n.nSigBytes, r = n.words, e = [], i = 0; i < t; i++) {
                  var o = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
                }

                return e.join("");
              },
                  o = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                  u = (r = parseInt((/msie (\d+)/.exec(o) || [])[1], 10), isNaN(r) ? (r = parseInt((/trident\/.*; rv:(\d+)/.exec(o) || [])[1], 10), !isNaN(r) && r) : r);

              var f = function () {
                if ("undefined" != typeof window) {
                  var t = window.crypto || window.msCrypto;

                  if (!t) {
                    if (function (n, t) {
                      return !1 !== u && (!t || ("<" === n ? u < t : "<=" === n ? u <= t : ">" === n ? u > t : ">=" === n ? u >= t : u === t));
                    }("<", 11)) return console.warn("IE <= 10 uses insecure random generator. Please consider to use IE11 or another modern browser"), function () {
                      return Math.floor(512 * Math.random()) % 256;
                    };
                    throw new Error("Crypto module not found");
                  }

                  return function () {
                    return t.getRandomValues(new Uint32Array(1))[0];
                  };
                }

                return void 0 !== n.g && n.g.crypto ? function () {
                  return n.g.crypto.randomBytes(4).readInt32LE();
                } : function () {
                  return require("crypto").randomBytes(4).readInt32LE();
                };
              }(),
                  a = function () {
                function n(t, r) {
                  if (Array.isArray(t) || !t) return this.v = Array.isArray(t) ? t : [], void (this.l = "number" == typeof r ? r : 4 * this.v.length);
                  if (t instanceof n) return this.v = t.words.slice(), void (this.l = t.nSigBytes);
                  var e;

                  try {
                    t instanceof ArrayBuffer ? e = new Uint8Array(t) : (t instanceof Uint8Array || t instanceof Int8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
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
                  for (var n = this.v, t = this.l, r = new Uint8Array(t), e = 0; e < t; e++) {
                    r[e] = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                  }

                  return r;
                }, n.prototype.concat = function (n) {
                  var t = n.words.slice(),
                      r = n.nSigBytes;
                  if (this.clamp(), this.l % 4) for (var e = 0; e < r; e++) {
                    var i = t[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    this.v[this.l + e >>> 2] |= i << 24 - (this.l + e) % 4 * 8;
                  } else for (e = 0; e < r; e += 4) {
                    this.v[this.l + e >>> 2] = t[e >>> 2];
                  }
                  return this.l += r, this;
                }, n.prototype.clamp = function () {
                  var n = this.l;
                  this.v[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, this.v.length = Math.ceil(n / 4);
                }, n.prototype.clone = function () {
                  return new n(this.v.slice(), this.l);
                }, n.random = function (t) {
                  for (var r = [], e = 0; e < t; e += 4) {
                    r.push(f());
                  }

                  return new n(r, t);
                }, n;
              }();

              function s(n, t) {
                for (var r = n.nSigBytes - t, e = [], i = 0; i < t; i++) {
                  var o = i >>> 2,
                      u = r + i,
                      f = u >>> 2,
                      s = n.words[f] >>> 24 - u % 4 * 8 & 255;
                  e[o] = 0 | e[o] | s << 24 - i % 4 * 8;
                }

                var c = new a(e, t);
                return c.clamp(), c;
              }

              var _c,
                  h = (_c = function c(n, t) {
                return (_c = Object.setPrototypeOf || {
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

                _c(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
              }),
                  w = function (n) {
                function t(t) {
                  var r = n.call(this, t) || this;
                  r.p = 1;
                  var e = t.cipher,
                      i = t.iv;
                  if (4 !== e.blockSize) throw new Error("In CCM, cipher block size must be 128bit");
                  if (i && (i.nSigBytes > 13 || i.nSigBytes < 7)) throw new Error("Byte size of iv must be between 7 and 13");
                  return r.m = i || new a([0, 0], 8), r.A = 15 - r.m.nSigBytes, r;
                }

                return h(t, n), t.getB0 = function (n, t, r, e) {
                  if (r.nSigBytes + e.nSigBytes !== 15) throw new Error("LEN(Q)+LEN(N) must be 15");
                  var i = 255 & (0 | (n ? 1 : 0) << 6 | (t - 2) / 2 << 3 | r.nSigBytes - 1),
                      o = e.clone().concat(r);
                  return new a([i << 24], 1).concat(o);
                }, t.formatAssociatedDataAndPayload = function (n, t) {
                  var r,
                      e = n.nSigBytes;
                  if (0 === e) r = new a([0], 0);else if (e < Math.pow(2, 16) - Math.pow(2, 8)) r = new a([e << 16], 2);else {
                    if (!(e < Math.pow(2, 32))) throw new Error("LEN(A) larger than 2**32-1 is not supported");
                    r = new a([4294836224], 2).concat(new a([e], 4));
                  }

                  for (var i = Math.floor(n.nSigBytes / 4), o = 0; o < i; o++) {
                    r.concat(new a([n.words[o]], 4));
                  }

                  n.nSigBytes % 4 && (r.concat(new a([n.words[i]], n.nSigBytes % 4)), r.concat(new a([0], 4 - n.nSigBytes % 4))), r.nSigBytes % 16 && r.concat(new a([0], 16 - r.nSigBytes % 16));
                  var u = Math.floor(t.nSigBytes / 4);

                  for (o = 0; o < u; o++) {
                    r.concat(new a([t.words[o]], 4));
                  }

                  return t.nSigBytes % 4 && (r.concat(new a([t.words[u]], t.nSigBytes % 4)), r.concat(new a([0], 4 - t.nSigBytes % 4))), r.nSigBytes % 16 && r.concat(new a([0], 16 - r.nSigBytes % 16)), r;
                }, t.genCtr = function (n, t, r) {
                  if (t.nSigBytes + n !== 15) throw new Error("LEN(Q)+LEN(N) must be 15");

                  for (var e = new a([(n - 1 & 7) << 24], 1), i = new a([], 0), o = Math.floor(n / 4), u = 0; u < o - 1; u++) {
                    i.concat(new a([0], 4));
                  }

                  return n % 4 ? n > 4 ? (i.concat(new a([0], n % 4)), i.concat(new a([r], 4))) : i.concat(new a([r << 32 - 8 * n], n)) : i.concat(new a([r], 4)), e.concat(t).concat(i);
                }, t.mac = function (n, r, e, i, o, u) {
                  var f = new n({
                    key: r,
                    iv: e
                  });
                  if (4 !== f.blockSize) throw new Error("In CCM, cipher block size must be 128bit");
                  if (e && (e.nSigBytes > 13 || e.nSigBytes < 7)) throw new Error("Byte size of iv must be between 7 and 13");
                  var c = e || new a([0, 0], 8),
                      h = (null == i ? void 0 : i.clone()) || new a(),
                      w = h.nSigBytes,
                      v = (null == o ? void 0 : o.clone()) || new a(),
                      l = v.nSigBytes;
                  if (l >>> 0 > 4294967295) throw new Error("Byte length of Payload(plainText) larger than 2^32-1 (4,294,967,295byte) is not supported at this time.");
                  var d = 15 - c.nSigBytes,
                      y = s(new a([0, l], 8), d),
                      b = u || 16,
                      p = t.getB0(Boolean(w), b, y, c),
                      m = t.formatAssociatedDataAndPayload(h, v),
                      E = p.words.slice();
                  f.encryptBlock(E, 0);

                  for (var g = m.nSigBytes / 16, A = m.words, j = E, M = 0; M < g; M++) {
                    var N = [A[4 * M] ^ j[0], A[4 * M + 1] ^ j[1], A[4 * M + 2] ^ j[2], A[4 * M + 3] ^ j[3]];
                    f.encryptBlock(N, 0), j = N;
                  }

                  var I = new a(j, b),
                      O = t.genCtr(d, c, 0);
                  f.encryptBlock(O.words, 0);

                  for (M = 0; M < 4; M++) {
                    I.words[M] ^= O.words[M];
                  }

                  return I.clamp(), I;
                }, t.combineCipherTextAndAuthTag = function (n, t) {
                  return n.clone().concat(t);
                }, t.splitCipherTextAndAuthTag = function (n, t) {
                  var r,
                      e,
                      i = t || 16;
                  return {
                    cipherText: (r = n, e = n.nSigBytes - i, new a(r.words.slice(), e)),
                    authTag: s(n, i)
                  };
                }, t.createEncryptor = function (n) {
                  return new t.Encryptor(n);
                }, t.createDecryptor = function (n) {
                  return new t.Decryptor(n);
                }, t.Encryptor = function (n) {
                  function r() {
                    return null !== n && n.apply(this, arguments) || this;
                  }

                  return h(r, n), r.prototype.processBlock = function (n, r) {
                    var e = this.u,
                        i = e.blockSize,
                        o = t.genCtr(this.A, this.m, this.p);
                    e.encryptBlock(o.words, 0);

                    for (var u = 0; u < i; u++) {
                      n[r + u] ^= o.words[u];
                    }

                    this.p++;
                  }, r;
                }(t), t.Decryptor = function (n) {
                  function r() {
                    return null !== n && n.apply(this, arguments) || this;
                  }

                  return h(r, n), r.prototype.processBlock = function (n, r) {
                    var e = this.u,
                        i = e.blockSize,
                        o = t.genCtr(this.A, this.m, this.p);
                    e.encryptBlock(o.words, 0);

                    for (var u = 0; u < i; u++) {
                      n[r + u] ^= o.words[u];
                    }

                    this.p++;
                  }, r;
                }(t), t;
              }(e);

              return t;
            }();
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=CCM.js.map