System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hasher, Word32Array, RIPEMD160, _crd, _zl, _zr, _sl, _sr, _hl, _hr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function f1(x, y, z) {
    return x ^ y ^ z;
  }

  function f2(x, y, z) {
    return x & y | ~x & z;
  }

  function f3(x, y, z) {
    return (x | ~y) ^ z;
  }

  function f4(x, y, z) {
    return x & z | y & ~z;
  }

  function f5(x, y, z) {
    return x ^ (y | ~z);
  }

  function rotl(x, n) {
    return x << n | x >>> 32 - n;
  }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasherProps(extras) {
    _reporterNs.report("HasherProps", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("RIPEMD160", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Hasher = _unresolved_2.Hasher;
    }, function (_unresolved_3) {
      Word32Array = _unresolved_3.Word32Array;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1f9d1wklxFr7MvO0RBkhcH", "RIPEMD160", undefined);

      // Constants table
      _zl = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
        error: Error()
      }), Word32Array) : Word32Array)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
      _zr = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
        error: Error()
      }), Word32Array) : Word32Array)([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
      _sl = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
        error: Error()
      }), Word32Array) : Word32Array)([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
      _sr = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
        error: Error()
      }), Word32Array) : Word32Array)([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
      _hl = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
        error: Error()
      }), Word32Array) : Word32Array)([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
      _hr = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
        error: Error()
      }), Word32Array) : Word32Array)([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

      _export("RIPEMD160", RIPEMD160 = class RIPEMD160 extends (_crd && Hasher === void 0 ? (_reportPossibleCrUseOfHasher({
        error: Error()
      }), Hasher) : Hasher) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_hash", new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]));

          this._props = props;

          if (props && typeof props.hash !== "undefined") {
            this._hash = props.hash.clone();
          }
        }

        _doReset() {
          this._hash = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
        }

        _doProcessBlock(words, offset) {
          // Swap endian
          for (let i = 0; i < 16; i++) {
            // Shortcuts
            const offsetI = offset + i;
            const wordsOffsetI = words[offsetI]; // Swap

            words[offsetI] = (wordsOffsetI << 8 | wordsOffsetI >>> 24) & 0x00ff00ff | (wordsOffsetI << 24 | wordsOffsetI >>> 8) & 0xff00ff00;
          } // Shortcut


          const H = this._hash.words;
          const hl = _hl.words;
          const hr = _hr.words;
          const zl = _zl.words;
          const zr = _zr.words;
          const sl = _sl.words;
          const sr = _sr.words; // Working variables

          let al;
          let bl;
          let cl;
          let dl;
          let el;
          let ar;
          let br;
          let cr;
          let dr;
          let er;
          ar = al = H[0];
          br = bl = H[1];
          cr = cl = H[2];
          dr = dl = H[3];
          er = el = H[4]; // Computation

          let t;

          for (let i = 0; i < 80; i += 1) {
            t = al + words[offset + zl[i]] | 0;

            if (i < 16) {
              t += f1(bl, cl, dl) + hl[0];
            } else if (i < 32) {
              t += f2(bl, cl, dl) + hl[1];
            } else if (i < 48) {
              t += f3(bl, cl, dl) + hl[2];
            } else if (i < 64) {
              t += f4(bl, cl, dl) + hl[3];
            } else {
              // if (i<80) {
              t += f5(bl, cl, dl) + hl[4];
            }

            t = t | 0;
            t = rotl(t, sl[i]);
            t = t + el | 0;
            al = el;
            el = dl;
            dl = rotl(cl, 10);
            cl = bl;
            bl = t;
            t = ar + words[offset + zr[i]] | 0;

            if (i < 16) {
              t += f5(br, cr, dr) + hr[0];
            } else if (i < 32) {
              t += f4(br, cr, dr) + hr[1];
            } else if (i < 48) {
              t += f3(br, cr, dr) + hr[2];
            } else if (i < 64) {
              t += f2(br, cr, dr) + hr[3];
            } else {
              // if (i<80) {
              t += f1(br, cr, dr) + hr[4];
            }

            t = t | 0;
            t = rotl(t, sr[i]);
            t = t + er | 0;
            ar = er;
            er = dr;
            dr = rotl(cr, 10);
            cr = br;
            br = t;
          } // Intermediate hash value


          t = H[1] + cl + dr | 0;
          H[1] = H[2] + dl + er | 0;
          H[2] = H[3] + el + ar | 0;
          H[3] = H[4] + al + br | 0;
          H[4] = H[0] + bl + cr | 0;
          H[0] = t;
        }

        _doFinalize() {
          // Shortcuts
          const data = this._data;
          const dataWords = data.words;
          const nBitsTotal = this._nBytes * 8;
          const nBitsLeft = data.nSigBytes * 8; // Add padding

          dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;
          data.nSigBytes = (dataWords.length + 1) * 4; // Hash final blocks

          this._process(); // Shortcuts


          const hash = this._hash;
          const H = hash.words; // Swap endian

          for (let i = 0; i < 5; i++) {
            // Shortcut
            const Hi = H[i]; // Swap

            H[i] = (Hi << 8 | Hi >>> 24) & 0x00ff00ff | (Hi << 24 | Hi >>> 8) & 0xff00ff00;
          } // Return final computed hash


          return hash;
        }

        clone() {
          const props = {
            hash: this._hash,
            blockSize: this._blockSize,
            data: this._data,
            nBytes: this._nBytes
          };
          return new RIPEMD160(props);
        }

        static hash(message, props) {
          return new RIPEMD160(props).finalize(message);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RIPEMD160.js.map