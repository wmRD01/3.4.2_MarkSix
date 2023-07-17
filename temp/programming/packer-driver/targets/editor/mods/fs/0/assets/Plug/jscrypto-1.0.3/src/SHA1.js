System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hasher, Word32Array, SHA1, _crd, W;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasherProps(extras) {
    _reporterNs.report("HasherProps", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("SHA1", void 0);

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

      _cclegacy._RF.push({}, "89a2cZZch1FtKJ4Qyx6gBHn", "SHA1", undefined);

      // Reusable object
      W = [];

      _export("SHA1", SHA1 = class SHA1 extends (_crd && Hasher === void 0 ? (_reportPossibleCrUseOfHasher({
        error: Error()
      }), Hasher) : Hasher) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_hash", new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]));

          this._props = props;

          if (props && typeof props.hash !== "undefined") {
            this._hash = props.hash.clone();
          }
        }

        _doReset() {
          this._hash = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
        }

        _doProcessBlock(words, offset) {
          const H = this._hash.words; // Working variables

          let a = H[0];
          let b = H[1];
          let c = H[2];
          let d = H[3];
          let e = H[4]; // Computation

          for (let i = 0; i < 80; i++) {
            if (i < 16) {
              W[i] = words[offset + i] | 0;
            } else {
              const n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
              W[i] = n << 1 | n >>> 31;
            }

            let t = (a << 5 | a >>> 27) + e + W[i];

            if (i < 20) {
              t += (b & c | ~b & d) + 0x5a827999;
            } else if (i < 40) {
              t += (b ^ c ^ d) + 0x6ed9eba1;
            } else if (i < 60) {
              t += (b & c | b & d | c & d) - 0x70e44324;
            } else
              /* if (i < 80) */
              {
                t += (b ^ c ^ d) - 0x359d3e2a;
              }

            e = d;
            d = c;
            c = b << 30 | b >>> 2;
            b = a;
            a = t;
          } // Intermediate hash value


          H[0] = H[0] + a | 0;
          H[1] = H[1] + b | 0;
          H[2] = H[2] + c | 0;
          H[3] = H[3] + d | 0;
          H[4] = H[4] + e | 0;
        }

        _doFinalize() {
          // Shortcuts
          const dataWords = this._data.words;
          const nBitsTotal = this._nBytes * 8;
          const nBitsLeft = this._data.nSigBytes * 8; // Add padding

          dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
          this._data.nSigBytes = dataWords.length * 4; // Hash final blocks

          this._process(); // Return final computed hash


          return this._hash;
        }

        clone() {
          const props = {
            hash: this._hash,
            blockSize: this._blockSize,
            data: this._data,
            nBytes: this._nBytes
          };
          return new SHA1(props);
        }

        static hash(message, props) {
          return new SHA1(props).finalize(message);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SHA1.js.map