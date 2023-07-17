System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SerializableCipher, BlockCipher, Cipher, DES, Word32Array, PasswordBasedCipher, DES3, _crd;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSerializableCipher(extras) {
    _reporterNs.report("SerializableCipher", "./lib/algorithm/cipher/SerializableCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipher(extras) {
    _reporterNs.report("BlockCipher", "./lib/algorithm/cipher/BlockCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherProps(extras) {
    _reporterNs.report("BlockCipherProps", "./lib/algorithm/cipher/BlockCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipher(extras) {
    _reporterNs.report("Cipher", "./lib/algorithm/cipher/Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherProps(extras) {
    _reporterNs.report("CipherProps", "./lib/algorithm/cipher/Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropsWithKey(extras) {
    _reporterNs.report("PropsWithKey", "./lib/algorithm/cipher/Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDES(extras) {
    _reporterNs.report("DES", "./DES", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPasswordBasedCipher(extras) {
    _reporterNs.report("PasswordBasedCipher", "./lib/algorithm/cipher/PasswordBasedCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherParams(extras) {
    _reporterNs.report("CipherParams", "./lib/algorithm/cipher/CipherParams", _context.meta, extras);
  }

  _export("DES3", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SerializableCipher = _unresolved_2.SerializableCipher;
    }, function (_unresolved_3) {
      BlockCipher = _unresolved_3.BlockCipher;
    }, function (_unresolved_4) {
      Cipher = _unresolved_4.Cipher;
    }, function (_unresolved_5) {
      DES = _unresolved_5.DES;
    }, function (_unresolved_6) {
      Word32Array = _unresolved_6.Word32Array;
    }, function (_unresolved_7) {
      PasswordBasedCipher = _unresolved_7.PasswordBasedCipher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2bd62cFqStLFpRgujKN9Msa", "DES3", undefined);

      _export("DES3", DES3 = class DES3 extends (_crd && BlockCipher === void 0 ? (_reportPossibleCrUseOfBlockCipher({
        error: Error()
      }), BlockCipher) : BlockCipher) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_blockSize", 64 / 32);

          _defineProperty(this, "_des1", void 0);

          _defineProperty(this, "_des2", void 0);

          _defineProperty(this, "_des3", void 0);

          this._props = props;

          var TripleDES = this._get3DES(); // Create DES instances


          this._des1 = TripleDES[0];
          this._des2 = TripleDES[1];
          this._des3 = TripleDES[2];
        }

        _get3DES() {
          // Shortcuts
          var key = this._key;
          var keyWords = key.words; // Make sure the key length is valid (64, 128 or >= 192 bit)

          if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
            throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
          } // Extend the key according to the keying options defined in 3DES standard


          var key1 = keyWords.slice(0, 2);
          var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
          var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6); // Create DES instances

          var des1 = (_crd && DES === void 0 ? (_reportPossibleCrUseOfDES({
            error: Error()
          }), DES) : DES).createEncryptor(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(key1));
          var des2 = (_crd && DES === void 0 ? (_reportPossibleCrUseOfDES({
            error: Error()
          }), DES) : DES).createEncryptor(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(key2));
          var des3 = (_crd && DES === void 0 ? (_reportPossibleCrUseOfDES({
            error: Error()
          }), DES) : DES).createEncryptor(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(key3));
          return [des1, des2, des3];
        }

        _doReset() {
          var TripleDES = this._get3DES(); // Create DES instances


          this._des1 = TripleDES[0];
          this._des2 = TripleDES[1];
          this._des3 = TripleDES[2];
        }

        encryptBlock(words, offset) {
          this._des1.encryptBlock(words, offset);

          this._des2.decryptBlock(words, offset);

          this._des3.encryptBlock(words, offset);
        }

        decryptBlock(words, offset) {
          this._des3.decryptBlock(words, offset);

          this._des2.encryptBlock(words, offset);

          this._des1.decryptBlock(words, offset);
        }
        /**
         * Creates this cipher in encryption mode.
         *
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *   var cipher = DES3.createEncryptor(keyWordArray, { iv: ivWordArray });
         */


        static createEncryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new DES3(_extends({}, props, {
            key,
            transformMode: (_crd && Cipher === void 0 ? (_reportPossibleCrUseOfCipher({
              error: Error()
            }), Cipher) : Cipher).ENC_TRANSFORM_MODE
          }));
        }
        /**
         * Creates this cipher in decryption mode.
         *
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *   var cipher = DES3.createDecryptor(keyWordArray, { iv: ivWordArray });
         */


        static createDecryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new DES3(_extends({}, props, {
            key,
            transformMode: (_crd && Cipher === void 0 ? (_reportPossibleCrUseOfCipher({
              error: Error()
            }), Cipher) : Cipher).DEC_TRANSFORM_MODE
          }));
        }
        /**
         * Encrypt a message with key
         *
         * @param {Word32Array|string} message
         * @param {Word32Array|string} key
         * @param {Partial<AESProps>?} props
         * @example
         *   var encryptedMessage = DES3.encrypt("test", "pass");
         */


        static encrypt(message, key, props) {
          if (typeof key === "string") {
            return (_crd && PasswordBasedCipher === void 0 ? (_reportPossibleCrUseOfPasswordBasedCipher({
              error: Error()
            }), PasswordBasedCipher) : PasswordBasedCipher).encrypt(DES3, message, key, props);
          }

          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).encrypt(DES3, message, key, props);
        }
        /**
         * Encrypt a encrypted message with key
         *
         * @param {CipherParams} cipherText
         * @param {Word32Array|string} key
         * @param {Partial<AESProps>?} props
         * @example
         *   var encryptedMessage = DES3.decrypt(cipherProps, "pass");
         */


        static decrypt(cipherText, key, props) {
          if (typeof key === "string") {
            return (_crd && PasswordBasedCipher === void 0 ? (_reportPossibleCrUseOfPasswordBasedCipher({
              error: Error()
            }), PasswordBasedCipher) : PasswordBasedCipher).decrypt(DES3, cipherText, key, props);
          }

          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).decrypt(DES3, cipherText, key, props);
        }

      });

      _defineProperty(DES3, "keySize", 192 / 32);

      _defineProperty(DES3, "ivSize", 64 / 32);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DES3.js.map