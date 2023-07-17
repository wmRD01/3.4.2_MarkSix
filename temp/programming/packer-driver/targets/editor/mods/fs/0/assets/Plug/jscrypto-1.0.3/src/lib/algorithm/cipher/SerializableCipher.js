System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, OpenSSLFormatter, CipherParams, _crd, SerializableCipher;

  /**
   * Converts serialized ciphertext to CipherParams,
   * else assumed CipherParams already and returns ciphertext unchanged.
   * @param {CipherParams|string} cipherTextParams The ciphertext.
   * @param {Formatter} formatter The formatting strategy to use to parse serialized ciphertext.
   * @return {CipherParams} The un-serialized ciphertext.
   * @example
   *   var ciphertextParams = SerializableCipher.parse(ciphertextStringOrParams, format);
   */
  function parseCipherText(cipherTextParams, formatter) {
    if (typeof cipherTextParams === "string") {
      return formatter.parse(cipherTextParams);
    }

    return cipherTextParams;
  }

  function _reportPossibleCrUseOfFormatter(extras) {
    _reporterNs.report("Formatter", "./formatter/type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenSSLFormatter(extras) {
    _reporterNs.report("OpenSSLFormatter", "./formatter/OpenSSLFormatter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipher(extras) {
    _reporterNs.report("BlockCipher", "./BlockCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherProps(extras) {
    _reporterNs.report("BlockCipherProps", "./BlockCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherParams(extras) {
    _reporterNs.report("CipherParams", "./CipherParams", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCipher(extras) {
    _reporterNs.report("BaseCipher", "./Cipher", _context.meta, extras);
  }

  _export("parseCipherText", parseCipherText);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      OpenSSLFormatter = _unresolved_2.OpenSSLFormatter;
    }, function (_unresolved_3) {
      CipherParams = _unresolved_3.CipherParams;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e969eJImZJTIsEhWxq9kjg", "SerializableCipher", undefined);

      _export("SerializableCipher", SerializableCipher = {
        /**
         * Encrypts a message.
         *
         * @param {typeof Cipher} Cipher The cipher algorithm to use.
         * @param {Word32Array|string} message The message to encrypt.
         * @param {Word32Array} key The key.
         * @param {Partial<SerializableCipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {CipherParams} A cipher params object.
         * @example
         *   var ciphertextParams = SerializableCipher.encrypt(AES, message, key);
         *   var ciphertextParams = SerializableCipher.encrypt(AES, message, key, { iv: iv });
         */
        encrypt(Cipher, message, key, props) {
          const encryptor = Cipher.createEncryptor(key, props);
          const cipherText = encryptor.finalize(message);
          return new (_crd && CipherParams === void 0 ? (_reportPossibleCrUseOfCipherParams({
            error: Error()
          }), CipherParams) : CipherParams)({
            cipherText,
            key,
            iv: encryptor.iv,
            Algorithm: Cipher,
            mode: encryptor.mode,
            padding: encryptor.padding,
            blockSize: encryptor.blockSize,
            formatter: (props === null || props === void 0 ? void 0 : props.formatter) || (_crd && OpenSSLFormatter === void 0 ? (_reportPossibleCrUseOfOpenSSLFormatter({
              error: Error()
            }), OpenSSLFormatter) : OpenSSLFormatter)
          });
        },

        /**
         * Decrypts serialized ciphertext.
         *
         * @param {typeof Cipher} Cipher The cipher algorithm to use.
         * @param {CipherParams|string} cipherParams The ciphertext to decrypt.
         * @param {Word32Array} key The key.
         * @param {Partial<SerializableCipherProps>} props (Optional) The configuration options to use for this operation.
         * @return {Word32Array} The plaintext.
         * @example
         *     var plaintext = SerializableCipher.decrypt(AES, formattedCiphertext, key, { iv: iv, format: OpenSSLFormatter });
         *     var plaintext = SerializableCipher.decrypt(AES, ciphertextParams, key, { iv: iv, format: OpenSSLFormatter });
         */
        decrypt(Cipher, cipherParams, key, props) {
          const decryptor = Cipher.createDecryptor(key, props);
          const cipherParamsObj = parseCipherText(cipherParams, (props === null || props === void 0 ? void 0 : props.formatter) || (_crd && OpenSSLFormatter === void 0 ? (_reportPossibleCrUseOfOpenSSLFormatter({
            error: Error()
          }), OpenSSLFormatter) : OpenSSLFormatter));
          return decryptor.finalize(cipherParamsObj.cipherText || "");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SerializableCipher.js.map