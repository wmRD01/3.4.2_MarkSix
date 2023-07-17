System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockCipherMode, Word32Array, lsb, msb, CCM, _crd;

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

  function _reportPossibleCrUseOflsb(extras) {
    _reporterNs.report("lsb", "./commonLib", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsb(extras) {
    _reporterNs.report("msb", "./commonLib", _context.meta, extras);
  }

  _export("CCM", void 0);

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
      lsb = _unresolved_4.lsb;
      msb = _unresolved_4.msb;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26961I/x19CB6NJyleOPcRx", "CCM", undefined);

      /**
       * Counter/CBC-MAC
       */
      _export("CCM", CCM = class CCM extends (_crd && BlockCipherMode === void 0 ? (_reportPossibleCrUseOfBlockCipherMode({
        error: Error()
      }), BlockCipherMode) : BlockCipherMode) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_N", void 0);

          _defineProperty(this, "_CBIndex", 1);

          _defineProperty(this, "_q", void 0);

          const {
            cipher,
            iv
          } = props;

          if (cipher.blockSize !== 128 / 32) {
            throw new Error("In CCM, cipher block size must be 128bit");
          } else if (iv && (iv.nSigBytes > 13 || iv.nSigBytes < 7)) {
            throw new Error("Byte size of iv must be between 7 and 13");
          }

          this._N = iv || new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0, 0], 8);
          this._q = 15 - this._N.nSigBytes;
        }
        /**
         * Generate first block of B.
         *
         * @param {boolean} hasAData - If payload has AData, true.
         * @param {number} t - Octet length of T(Auth tag)
         * @param {Word32Array} Q - Octet length of payload.
         * @param {Word32Array} N - Nonce.
         */


        static getB0(hasAData, t, Q, N) {
          if (Q.nSigBytes + N.nSigBytes !== 15) {
            throw new Error("LEN(Q)+LEN(N) must be 15");
          }

          const reservedBit = 0 << 7;
          const ADataBit = (hasAData ? 1 : 0) << 6;
          const tBit = (t - 2) / 2 << 3; // 3bits

          const qBit = Q.nSigBytes - 1; // 3bits

          const flags = (reservedBit | ADataBit | tBit | qBit) & 0x000000ff;
          const NQ = N.clone().concat(Q);
          const B00 = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([flags << 24], 1);
          return B00.concat(NQ);
        }
        /**
         * Format associated data
         * @param {Word32Array} A - Associated data
         * @param {Word32Array} P - Payload
         */


        static formatAssociatedDataAndPayload(A, P) {
          const a = A.nSigBytes;
          let ad;

          if (a === 0) {
            ad = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([0], 0);
          } else if (a < 2 ** 16 - 2 ** 8) {
            ad = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([a << 16], 2);
          } else if (a < 2 ** 32) {
            ad = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([0xfffe0000], 2).concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([a], 4));
          } else {
            throw new Error("LEN(A) larger than 2**32-1 is not supported");
          } // Format AdditionalData


          const nAd = Math.floor(A.nSigBytes / 4);

          for (let i = 0; i < nAd; i++) {
            ad.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([A.words[i]], 4));
          }

          if (A.nSigBytes % 4) {
            ad.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([A.words[nAd]], A.nSigBytes % 4));
            ad.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([0], 4 - A.nSigBytes % 4));
          } // Align to 16byte block


          if (ad.nSigBytes % 16) {
            ad.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([0], 16 - ad.nSigBytes % 16));
          } // Format Payload


          const nPayload = Math.floor(P.nSigBytes / 4);

          for (let i = 0; i < nPayload; i++) {
            ad.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([P.words[i]], 4));
          }

          if (P.nSigBytes % 4) {
            ad.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([P.words[nPayload]], P.nSigBytes % 4));
            ad.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([0], 4 - P.nSigBytes % 4));
          } // Align to 16byte block


          if (ad.nSigBytes % 16) {
            ad.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([0], 16 - ad.nSigBytes % 16));
          }

          return ad;
        }
        /**
         * Generate Counter Block
         * @param {number} q - LEN(Q)
         * @param {Word32Array} N - Nonce
         * @param {number} index - Block index of 32bit integer
         */


        static genCtr(q, N, index) {
          if (N.nSigBytes + q !== 15) {
            throw new Error("LEN(Q)+LEN(N) must be 15");
          }

          const flag = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([(q - 1 & 0x00000007) << 24], 1);
          const indexBytes = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([], 0);
          const nq = Math.floor(q / 4);

          for (let i = 0; i < nq - 1; i++) {
            indexBytes.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([0], 4));
          }

          if (q % 4) {
            if (q > 4) {
              indexBytes.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
                error: Error()
              }), Word32Array) : Word32Array)([0], q % 4));
              indexBytes.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
                error: Error()
              }), Word32Array) : Word32Array)([index], 4));
            } else {
              indexBytes.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
                error: Error()
              }), Word32Array) : Word32Array)([index << 32 - q * 8], q));
            }
          } else {
            indexBytes.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([index], 4));
          }

          return flag.concat(N).concat(indexBytes);
        }
        /**
         * Generate Message Authentication Code
         * 
         * @param {typeof BlockCipher} Cipher - 128 bit block Cipher i.e. AES
         * @param {Word32Array} key - Key
         * @param {Word32Array} iv - Nonce. iv less than or equal to 8byte(64bit) is supported.
         * @param {Word32Array?} authData - Associated data
         * @param {Word32Array?} plainText - Payload
         * @param {number?} tagLength - authTag size in octet length. If omitted, tagLength will be set to 16byte.
         */


        static mac(Cipher, key, iv, authData, plainText, tagLength) {
          const cipher = new Cipher({
            key,
            iv
          });

          if (cipher.blockSize !== 128 / 32) {
            throw new Error("In CCM, cipher block size must be 128bit");
          } else if (iv && (iv.nSigBytes > 13 || iv.nSigBytes < 7)) {
            throw new Error("Byte size of iv must be between 7 and 13");
          }

          const N = iv || new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0, 0], 8);
          const A = (authData === null || authData === void 0 ? void 0 : authData.clone()) || new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)();
          const a = A.nSigBytes;
          const P = (plainText === null || plainText === void 0 ? void 0 : plainText.clone()) || new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)();
          const p = P.nSigBytes;

          if (p >>> 0 > 4294967295) {
            throw new Error("Byte length of Payload(plainText) larger than 2^32-1 (4,294,967,295byte) is not supported at this time.");
          }

          const q = 15 - N.nSigBytes;
          const Q = (_crd && lsb === void 0 ? (_reportPossibleCrUseOflsb({
            error: Error()
          }), lsb) : lsb)(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0, p], 8), q);
          const t = tagLength || 16;
          const B0 = CCM.getB0(Boolean(a), t, Q, N);
          const Bi = CCM.formatAssociatedDataAndPayload(A, P);
          const Y0 = B0.words.slice();
          cipher.encryptBlock(Y0, 0);
          const n = Bi.nSigBytes / 16;
          const wordsBi = Bi.words;
          let Y = Y0;

          for (let i = 0; i < n; i++) {
            const Yi0 = wordsBi[i * 4] ^ Y[0];
            const Yi1 = wordsBi[i * 4 + 1] ^ Y[1];
            const Yi2 = wordsBi[i * 4 + 2] ^ Y[2];
            const Yi3 = wordsBi[i * 4 + 3] ^ Y[3];
            const Yi = [Yi0, Yi1, Yi2, Yi3];
            cipher.encryptBlock(Yi, 0);
            Y = Yi;
          }

          const T = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(Y, t);
          const ctr0 = CCM.genCtr(q, N, 0);
          cipher.encryptBlock(ctr0.words, 0);

          for (let i = 0; i < 4; i++) {
            T.words[i] ^= ctr0.words[i];
          }

          T.clamp();
          return T;
        }

        static combineCipherTextAndAuthTag(cipherText, authTag) {
          return cipherText.clone().concat(authTag);
        }

        static splitCipherTextAndAuthTag(cipherTextWithAuthTag, tLen) {
          const t = tLen || 16;
          const cipherText = (_crd && msb === void 0 ? (_reportPossibleCrUseOfmsb({
            error: Error()
          }), msb) : msb)(cipherTextWithAuthTag, cipherTextWithAuthTag.nSigBytes - t);
          const authTag = (_crd && lsb === void 0 ? (_reportPossibleCrUseOflsb({
            error: Error()
          }), lsb) : lsb)(cipherTextWithAuthTag, t);
          return {
            cipherText,
            authTag
          };
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
          return new CCM.Encryptor(props);
        }
        /**
         * Creates this mode for decryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CTR.createDecryptor(cipher, iv.words);
         */


        static createDecryptor(props) {
          return new CCM.Decryptor(props);
        }

      });

      _defineProperty(CCM, "Encryptor", class Encryptor extends CCM {
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
          const cipher = this._cipher;
          const blockSize = cipher.blockSize;
          const CBi = CCM.genCtr(this._q, this._N, this._CBIndex);
          cipher.encryptBlock(CBi.words, 0);

          for (let i = 0; i < blockSize; i++) {
            words[offset + i] ^= CBi.words[i];
          }

          this._CBIndex++;
        }

      });

      _defineProperty(CCM, "Decryptor", class Decryptor extends CCM {
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
          const cipher = this._cipher;
          const blockSize = cipher.blockSize;
          const CBi = CCM.genCtr(this._q, this._N, this._CBIndex);
          cipher.encryptBlock(CBi.words, 0);

          for (let i = 0; i < blockSize; i++) {
            words[offset + i] ^= CBi.words[i];
          }

          this._CBIndex++;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CCM.js.map