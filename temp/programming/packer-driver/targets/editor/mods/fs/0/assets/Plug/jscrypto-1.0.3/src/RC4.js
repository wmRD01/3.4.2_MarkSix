System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StreamCipher, PasswordBasedCipher, SerializableCipher, RC4, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPropsWithKey(extras) {
    _reporterNs.report("PropsWithKey", "./lib/algorithm/cipher/Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStreamCipher(extras) {
    _reporterNs.report("StreamCipher", "./lib/algorithm/cipher/StreamCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStreamCipherProps(extras) {
    _reporterNs.report("StreamCipherProps", "./lib/algorithm/cipher/StreamCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPasswordBasedCipher(extras) {
    _reporterNs.report("PasswordBasedCipher", "./lib/algorithm/cipher/PasswordBasedCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSerializableCipher(extras) {
    _reporterNs.report("SerializableCipher", "./lib/algorithm/cipher/SerializableCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherParams(extras) {
    _reporterNs.report("CipherParams", "./lib/algorithm/cipher/CipherParams", _context.meta, extras);
  }

  _export("RC4", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      StreamCipher = _unresolved_2.StreamCipher;
    }, function (_unresolved_3) {
      PasswordBasedCipher = _unresolved_3.PasswordBasedCipher;
    }, function (_unresolved_4) {
      SerializableCipher = _unresolved_4.SerializableCipher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87bd8eiBKpFjorqsTGA8v6S", "RC4", undefined);

      _export("RC4", RC4 = class RC4 extends (_crd && StreamCipher === void 0 ? (_reportPossibleCrUseOfStreamCipher({
        error: Error()
      }), StreamCipher) : StreamCipher) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "S", []);

          _defineProperty(this, "i", 0);

          _defineProperty(this, "j", 0);

          this._props = props;

          this._doReset();
        }

        _doReset() {
          // Shortcuts
          const key = this._key;
          const keyWords = key.words;
          const keySigBytes = key.nSigBytes; // Init sbox

          this.S = [];

          for (let i = 0; i < 256; i++) {
            this.S[i] = i;
          } // Key setup


          for (let i = 0, j = 0; i < 256; i++) {
            const keyByteIndex = i % keySigBytes;
            const keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;
            j = (j + this.S[i] + keyByte) % 256; // Swap

            const t = this.S[i];
            this.S[i] = this.S[j];
            this.S[j] = t;
          } // Counters


          this.i = this.j = 0;
        }

        _doProcessBlock(words, offset) {
          words[offset] ^= this.generateKeyStreamWord();
        }

        generateKeyStreamWord() {
          // Shortcuts
          const S = this.S;
          let i = this.i;
          let j = this.j; // Generate keyStream word

          let keyStreamWord = 0;

          for (let n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256; // Swap

            const t = S[i];
            S[i] = S[j];
            S[j] = t;
            keyStreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
          } // Update counters


          this.i = i;
          this.j = j;
          return keyStreamWord;
        }
        /**
         * Creates this cipher in encryption mode.
         *
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *   var cipher = RC4.createEncryptor(keyWordArray);
         */


        static createEncryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new RC4({ ...props,
            key
          });
        }
        /**
         * Creates this cipher in decryption mode.
         *
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *   var cipher = RC4.createDecryptor(keyWordArray, { iv: ivWordArray });
         */


        static createDecryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new RC4({ ...props,
            key
          });
        }
        /**
         * Encrypt a message with key
         * 
         * @param {Word32Array|string} message
         * @param {Word32Array|string} key
         * @param {Partial<AESProps>?} props
         * @example
         *   var encryptedMessage = RC4.encrypt("test", "pass");
         */


        static encrypt(message, key, props) {
          if (typeof key === "string") {
            return (_crd && PasswordBasedCipher === void 0 ? (_reportPossibleCrUseOfPasswordBasedCipher({
              error: Error()
            }), PasswordBasedCipher) : PasswordBasedCipher).encrypt(RC4, message, key, props);
          }

          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).encrypt(RC4, message, key, props);
        }
        /**
         * Encrypt a encrypted message with key
         *
         * @param {CipherParams} cipherText
         * @param {Word32Array|string} key
         * @param {Partial<AESProps>?} props
         * @example
         *   var encryptedMessage = RC4.decrypt(cipherProps, "pass");
         */


        static decrypt(cipherText, key, props) {
          if (typeof key === "string") {
            return (_crd && PasswordBasedCipher === void 0 ? (_reportPossibleCrUseOfPasswordBasedCipher({
              error: Error()
            }), PasswordBasedCipher) : PasswordBasedCipher).decrypt(RC4, cipherText, key, props);
          }

          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).decrypt(RC4, cipherText, key, props);
        }

      });

      _defineProperty(RC4, "ivSize", 0);

      _defineProperty(RC4, "keySize", 256 / 32);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RC4.js.map