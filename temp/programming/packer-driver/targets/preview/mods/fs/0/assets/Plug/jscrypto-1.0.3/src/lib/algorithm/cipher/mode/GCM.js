System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockCipherMode, Word32Array, msb, padTo128m, GCM, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBlockCipherMode(extras) {
    _reporterNs.report("BlockCipherMode", "./BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherModeProps(extras) {
    _reporterNs.report("BlockCipherModeProps", "./BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipher(extras) {
    _reporterNs.report("BlockCipher", "../BlockCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsb(extras) {
    _reporterNs.report("msb", "./commonLib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpadTo128m(extras) {
    _reporterNs.report("padTo128m", "./commonLib", _context.meta, extras);
  }

  _export("GCM", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BlockCipherMode = _unresolved_2.BlockCipherMode;
    }, function (_unresolved_3) {
      Word32Array = _unresolved_3.Word32Array;
    }, function (_unresolved_4) {
      msb = _unresolved_4.msb;
      padTo128m = _unresolved_4.padTo128m;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ff5aa0ex1OQIPgtgPyZVm8", "GCM", undefined);

      /**
       * Galois Counter Mode
       */
      _export("GCM", GCM = class GCM extends (_crd && BlockCipherMode === void 0 ? (_reportPossibleCrUseOfBlockCipherMode({
        error: Error()
      }), BlockCipherMode) : BlockCipherMode) {
        // Counter Block
        constructor(props) {
          super(props);

          _defineProperty(this, "_H", []);

          _defineProperty(this, "_J0", []);

          _defineProperty(this, "_CB", []);

          if (props.cipher.blockSize !== 128 / 32) {
            throw new Error("In GCM block cipher mode, cipher block size must be 128bit");
          }

          var {
            cipher,
            iv
          } = props;
          var H = [0, 0, 0, 0];
          cipher.encryptBlock(H, 0);
          this._H = H; // iv should be array of 32bit int

          this._J0 = GCM.getJ0(H, iv === null || iv === void 0 ? void 0 : iv.words);
          this._CB = this._J0.slice();
        }
        /**
         * Initialize Initial Counter Block J0.
         * @param {[number, number, number, number]} H - 128bit(4word) block
         * @param {number[]} iv - Initializing Vector which must be multiple of 32bit(4byte)
         */


        static getJ0(H, iv) {
          var J0;

          if (!iv || iv.length === 0) {
            J0 = [0, 0, 0, 1];
          } else if (iv.length === 3) {
            J0 = [iv[0], iv[1], iv[2], 1];
          } else {
            var remainderOf4Word = iv.length % 4 > 0 ? 4 - iv.length % 4 : 0;
            var iv2 = iv.slice();

            for (var i = 0; i < remainderOf4Word + 2; i++) {
              iv2.push(0); // append 32bit 0
            } // This should be upper 32bit of len(iv),
            // But iv.length > 4294967295(0xffffffff, unsigned 32bit int max) is not supported for now.


            iv2.push(0);
            iv2.push(iv.length * 32); // An element of `iv` is 4byte = 32bit.

            J0 = GCM.GHASH(H, iv2);
          }

          return J0;
        }
        /**
         * https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf
         * 6.2 Incrementing Function  
         * inc(s=32, X) = MSB(len(X)-s, X) || [int(LSB(s, X)+1 mod 2^s]
         * 
         * @param {number[]} X - [32bit int, 32bit int, 32bit int, 32bit int].
         * @example
         *   inc32([0,0,0,0]) = [0,0,0,1]
         *   inc32([0,0,0,1]) = [0,0,0,2]
         *   inc32([0,0,0,0xffffffff]) = [0,0,1,0]
         *   inc32([0,0,0xffffffff,0xffffffff]) = [0,1,0,0]
         *   inc32([0,0xffffffff,0xffffffff,0xffffffff]) = [0,0,0,0]
         */


        static inc32(X) {
          var A = X.slice();
          var unsignedX3 = A[3] >>> 0;
          var carry3 = unsignedX3 + 1 >>> 0 < unsignedX3;
          A[3] = A[3] + 1 | 0;

          if (carry3) {
            var unsignedX2 = A[2] >>> 0;
            var carry2 = unsignedX2 + 1 >>> 0 < unsignedX2;
            A[2] = A[2] + 1 | 0;

            if (carry2) {
              A[1] = A[1] + 1 | 0;
            }
          }

          return A;
        }
        /**
         * https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf
         * 6.3 Multiplication Operation on Blocks
         *
         * @param {number[]} X - [32bit int, 32bit int, 32bit int, 32bit int], 128bit block.
         * @param {number[]} Y - [32bit int, 32bit int, 32bit int, 32bit int], 128bit block.
         * @returns 128bit block
         */


        static mul(X, Y) {
          var R = [0xe1000000, 0, 0, 0];
          var Z = [0, 0, 0, 0];
          var V = Y.slice();

          for (var i = 0; i < 128; i++) {
            var xIndex = i >>> 5;
            var xi = X[xIndex] >>> 31 - i % 32 & 1;

            if (xi > 0) {
              Z[0] = Z[0] ^ V[0];
              Z[1] = Z[1] ^ V[1];
              Z[2] = Z[2] ^ V[2];
              Z[3] = Z[3] ^ V[3];
            }

            var LSBVi = (V[3] & 1) >>> 0;
            var carry0 = (V[0] & 1) >>> 0;
            var carry1 = (V[1] & 1) >>> 0;
            var carry2 = (V[2] & 1) >>> 0;
            V[0] = V[0] >>> 1;
            V[1] = V[1] >>> 1 | (carry0 ? 0x80000000 : 0);
            V[2] = V[2] >>> 1 | (carry1 ? 0x80000000 : 0);
            V[3] = V[3] >>> 1 | (carry2 ? 0x80000000 : 0);

            if (LSBVi > 0) {
              V[0] ^= R[0];
              V[1] ^= R[1];
              V[2] ^= R[2];
              V[3] ^= R[3];
            }
          }

          return Z;
        }
        /**
         * https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf
         * 6.4 GHASH Function
         * 
         * @param {number[]} H - The hash sub key block of 128bit.
         * @param {number[]} X - X.length must be multiple of 4. (multiple of 128bit)
         * @returns 128bit block
         */


        static GHASH(H, X) {
          if (H.length % 4 !== 0) {
            throw new Error("Length of 32bit word array 'H' must be multiple of 4(128bit)");
          } else if (X.length % 4 !== 0) {
            throw new Error("Length of 32bit word array 'X' must be multiple of 4(128bit)");
          }

          var m = X.length;
          var Y = [0, 0, 0, 0];

          for (var i = 0; i < m; i += 4) {
            Y[0] = Y[0] ^ X[i];
            Y[1] = Y[1] ^ X[i + 1];
            Y[2] = Y[2] ^ X[i + 2];
            Y[3] = Y[3] ^ X[i + 3];
            Y = GCM.mul(Y, H);
          }

          return Y;
        }
        /**
         * https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf
         * 6.5 GCTR Function
         * 
         * @param {BlockCipher} cipher
         * @param {number[]} ICB - Initial Code Block. Required to be 128bit(4word).
         * @param {Word32Array} X - Arbitrary length block
         */


        static GCTR(cipher, ICB, X) {
          if (X.nSigBytes === 0) {
            return X.clone();
          }

          if (ICB.length !== 4) {
            throw new Error("Initial Counter Block size must be 128bit");
          }

          var words = X.words;
          var n = Math.ceil(X.nSigBytes / 16);
          var CB = [ICB.slice()];

          for (var i = 1; i < n; i++) {
            var CBi = GCM.inc32(CB[i - 1]);
            CB.push(CBi);
          }

          var Y = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)();

          for (var _i = 0; _i < n; _i++) {
            cipher.encryptBlock(CB[_i], 0);
            var remainderOf16Bytes = X.nSigBytes % 16;

            if (_i < n - 1 ||
            /* i === n-1 && */
            remainderOf16Bytes === 0) {
              var Yi0 = words[_i * 4] ^ CB[_i][0];
              var Yi1 = words[_i * 4 + 1] ^ CB[_i][1];
              var Yi2 = words[_i * 4 + 2] ^ CB[_i][2];
              var Yi3 = words[_i * 4 + 3] ^ CB[_i][3];
              var Yi = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
                error: Error()
              }), Word32Array) : Word32Array)([Yi0, Yi1, Yi2, Yi3]);
              Y.concat(Yi);
              continue;
            } // i === n-1


            var w = [];
            var nSigBytes = 0;
            var nMaxAligned = Math.floor(remainderOf16Bytes / 4);

            for (var k = 0; k < nMaxAligned; k++) {
              var Ynk = words[_i * 4 + k] ^ CB[_i][k];
              w.push(Ynk);
              nSigBytes += 4;
            }

            var remaining0to3Bytes = remainderOf16Bytes % 4;

            if (remaining0to3Bytes > 0) {
              var Ynr = words[_i * 4 + nMaxAligned] << 32 - 8 * remaining0to3Bytes ^ CB[_i][nMaxAligned];
              w.push(Ynr);
              nSigBytes += remaining0to3Bytes;
            }

            var Yn = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)(w, nSigBytes);
            Y.concat(Yn);
          }

          Y.nSigBytes = X.nSigBytes;
          Y.clamp();
          return Y;
        }
        /**
         * Calculate Message Authentication Code with GCM
         *
         * @param {typeof BlockCipher} Cipher - 128 bit block Cipher i.e. AES
         * @param {Word32Array} key - key
         * @param {Word32Array} iv - iv should be 12byte length. i.e. `new Word32Array([0x11223344, 0x55667788, 0x99aabbcc], 12);`
         * @param {Word32Array?} aad - Additional Authenticated Data
         * @param {Word32Array?} cipherText - encrypted text
         * @param {number?} tagLength - authTag size in octet length. If omitted, tagLength will be set to 16byte.
         */


        static mac(Cipher, key, iv, aad, cipherText, tagLength) {
          var cipher = new Cipher({
            key,
            iv
          });
          var H = [0, 0, 0, 0];
          cipher.encryptBlock(H, 0);
          var J0 = GCM.getJ0(H, iv.words);
          var A = (aad === null || aad === void 0 ? void 0 : aad.clone()) || new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)();
          var lenA = [0, A.nSigBytes * 8];
          var C = (cipherText === null || cipherText === void 0 ? void 0 : cipherText.clone()) || new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)();
          var lenC = [0, C.nSigBytes * 8];
          var lenT = tagLength || 16; // Pad

          (_crd && padTo128m === void 0 ? (_reportPossibleCrUseOfpadTo128m({
            error: Error()
          }), padTo128m) : padTo128m)(A);
          (_crd && padTo128m === void 0 ? (_reportPossibleCrUseOfpadTo128m({
            error: Error()
          }), padTo128m) : padTo128m)(C);
          var s = A.words.concat(C.words).concat(lenA).concat(lenC);
          var S = GCM.GHASH(H, s);
          var MAC = GCM.GCTR(cipher, J0, new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(S));
          return (_crd && msb === void 0 ? (_reportPossibleCrUseOfmsb({
            error: Error()
          }), msb) : msb)(MAC, lenT);
        }
        /**
         * CTR encryptor.
         */


        /**
         * Creates this mode for encryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CTR.createEncryptor(cipher, iv.words);
         */
        static createEncryptor(props) {
          return new GCM.Encryptor(props);
        }
        /**
         * Creates this mode for decryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CTR.createDecryptor(cipher, iv.words);
         */


        static createDecryptor(props) {
          return new GCM.Decryptor(props);
        }

      });

      _defineProperty(GCM, "Encryptor", class Encryptor extends GCM {
        /**
         * Processes the data block at offset.
         *
         * @param {number[]} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         * @example
         *   mode.processBlock(data.words, offset);
         */
        processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize; // Encrypt with CTR mode

          this._CB = GCM.inc32(this._CB);
          var plainText = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(words.slice(offset, offset + blockSize));
          var C = GCM.GCTR(this._cipher, this._CB, plainText);

          for (var i = 0; i < blockSize; i++) {
            words[offset + i] = C.words[i];
          }
        }

      });

      _defineProperty(GCM, "Decryptor", class Decryptor extends GCM {
        /**
         * Processes the data block at offset.
         *
         * @param {number[]} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         * @example
         *   mode.processBlock(data.words, offset);
         */
        processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize; // Decrypt with CTR mode

          this._CB = GCM.inc32(this._CB);
          var C = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(words.slice(offset, offset + blockSize));
          var P = GCM.GCTR(this._cipher, this._CB, C);

          for (var i = 0; i < blockSize; i++) {
            words[offset + i] = P.words[i];
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GCM.js.map