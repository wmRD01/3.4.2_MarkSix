System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PasswordBasedCipher, SerializableCipher, RC4, RC4Drop, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCipherProps(extras) {
    _reporterNs.report("CipherProps", "./lib/algorithm/cipher/Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropsWithKey(extras) {
    _reporterNs.report("PropsWithKey", "./lib/algorithm/cipher/Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
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

  function _reportPossibleCrUseOfRC(extras) {
    _reporterNs.report("RC4", "./RC4", _context.meta, extras);
  }

  _export("RC4Drop", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      PasswordBasedCipher = _unresolved_2.PasswordBasedCipher;
    }, function (_unresolved_3) {
      SerializableCipher = _unresolved_3.SerializableCipher;
    }, function (_unresolved_4) {
      RC4 = _unresolved_4.RC4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d12a4CpC3JMLKid1TLt5hcv", "RC4Drop", undefined);

      _export("RC4Drop", RC4Drop = class RC4Drop extends (_crd && RC4 === void 0 ? (_reportPossibleCrUseOfRC({
        error: Error()
      }), RC4) : RC4) {
        constructor(props) {
          super(props);

          _defineProperty(this, "drop", 192);

          this._props = props;

          if (props && typeof props.drop === "number") {
            this.drop = props.drop;
          }

          this._doReset();
        }

        _doReset() {
          super._doReset(); // Drop


          for (let i = this.drop; i > 0; i--) {
            this.generateKeyStreamWord();
          }
        }
        /**
         * Creates this cipher in encryption mode.
         *
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *   var cipher = RC4Drop.createEncryptor(keyWordArray);
         */


        static createEncryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new RC4Drop({ ...props,
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
         *   var cipher = RC4Drop.createDecryptor(keyWordArray, { iv: ivWordArray });
         */


        static createDecryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new RC4Drop({ ...props,
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
         *   var encryptedMessage = RC4Drop.encrypt("test", "pass");
         */


        static encrypt(message, key, props) {
          if (typeof key === "string") {
            return (_crd && PasswordBasedCipher === void 0 ? (_reportPossibleCrUseOfPasswordBasedCipher({
              error: Error()
            }), PasswordBasedCipher) : PasswordBasedCipher).encrypt(RC4Drop, message, key, props);
          }

          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).encrypt(RC4Drop, message, key, props);
        }
        /**
         * Encrypt a encrypted message with key
         *
         * @param {CipherParams} cipherText
         * @param {Word32Array|string} key
         * @param {Partial<AESProps>?} props
         * @example
         *   var encryptedMessage = RC4Drop.decrypt(cipherProps, "pass");
         */


        static decrypt(cipherText, key, props) {
          if (typeof key === "string") {
            return (_crd && PasswordBasedCipher === void 0 ? (_reportPossibleCrUseOfPasswordBasedCipher({
              error: Error()
            }), PasswordBasedCipher) : PasswordBasedCipher).decrypt(RC4Drop, cipherText, key, props);
          }

          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).decrypt(RC4Drop, cipherText, key, props);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RC4Drop.js.map