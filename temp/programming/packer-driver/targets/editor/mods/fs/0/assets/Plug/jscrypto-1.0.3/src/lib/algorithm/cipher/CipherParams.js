System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, OpenSSLFormatter, CipherParams, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherMode(extras) {
    _reporterNs.report("BlockCipherMode", "./mode/BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPad(extras) {
    _reporterNs.report("Pad", "./pad/type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFormatter(extras) {
    _reporterNs.report("Formatter", "./formatter/type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipher(extras) {
    _reporterNs.report("Cipher", "./Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenSSLFormatter(extras) {
    _reporterNs.report("OpenSSLFormatter", "./formatter/OpenSSLFormatter", _context.meta, extras);
  }

  _export("CipherParams", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      OpenSSLFormatter = _unresolved_2.OpenSSLFormatter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92a4e9Pp7FADomo41/RU9NQ", "CipherParams", undefined);

      /**
       * A collection of cipher parameters.
       *
       * @property {Word32Array} ciphertext The raw ciphertext.
       * @property {Word32Array} key The key to this ciphertext.
       * @property {Word32Array} iv The IV used in the ciphering operation.
       * @property {Word32Array} salt The salt used with a key derivation function.
       * @property {typeof Cipher} algorithm The cipher algorithm.
       * @property {BlockCipherMode} mode The block mode used in the ciphering operation.
       * @property {Pad} padding The padding scheme used in the ciphering operation.
       * @property {number} blockSize The block size of the cipher.
       * @property {Formatter} formatter The default formatting strategy to convert this cipher params object to a string.
       */
      _export("CipherParams", CipherParams = class CipherParams {
        /**
         * Initializes a newly created cipher params object.
         *
         * @param {Partial<CipherParams>} cp An object with any of the possible cipher parameters.
         * @example
         *   var cipherParams = new CipherParams({
         *       ciphertext: ciphertextWordArray,
         *       key: keyWordArray,
         *       iv: ivWordArray,
         *       salt: saltWordArray,
         *       algorithm: AES,
         *       mode: CBC,
         *       padding: PKCS7,
         *       blockSize: 4,
         *       formatter: OpenSSLFormatter
         *     });
         */
        constructor(cp) {
          _defineProperty(this, "cipherText", void 0);

          _defineProperty(this, "key", void 0);

          _defineProperty(this, "iv", void 0);

          _defineProperty(this, "salt", void 0);

          _defineProperty(this, "Algorithm", void 0);

          _defineProperty(this, "mode", void 0);

          _defineProperty(this, "padding", void 0);

          _defineProperty(this, "blockSize", void 0);

          _defineProperty(this, "formatter", _crd && OpenSSLFormatter === void 0 ? (_reportPossibleCrUseOfOpenSSLFormatter({
            error: Error()
          }), OpenSSLFormatter) : OpenSSLFormatter);

          if (cp) {
            this.cipherText = cp.cipherText;
            this.key = cp.key;
            this.iv = cp.iv;
            this.salt = cp.salt;
            this.Algorithm = cp.Algorithm;
            this.mode = cp.mode;
            this.padding = cp.padding;
            this.blockSize = cp.blockSize;
            this.formatter = cp.formatter || (_crd && OpenSSLFormatter === void 0 ? (_reportPossibleCrUseOfOpenSSLFormatter({
              error: Error()
            }), OpenSSLFormatter) : OpenSSLFormatter);
          }
        }
        /**
         * Converts this cipher params object to a string.
         *
         * @param {Formatter?} formatter (Optional) The formatting strategy to use.
         * @return {string} The stringified cipher params.
         * @throws Error If neither the formatter nor the default formatter is set.
         * @example
         *   var string = cipherParams + '';
         *   var string = cipherParams.toString();
         *   var string = cipherParams.toString(OpenSSLFormatter);
         */


        toString(formatter) {
          return (formatter || this.formatter).stringify(this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CipherParams.js.map