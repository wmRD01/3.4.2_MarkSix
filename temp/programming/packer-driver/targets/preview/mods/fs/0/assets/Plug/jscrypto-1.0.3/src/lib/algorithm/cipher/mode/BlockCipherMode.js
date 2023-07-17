System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockCipherMode, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBlockCipher(extras) {
    _reporterNs.report("BlockCipher", "../BlockCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../Word32Array", _context.meta, extras);
  }

  _export("BlockCipherMode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e68e8umV5Cp7CBGTqWKJPe", "BlockCipherMode", undefined);

      /**
       * Abstract base block cipher mode template.
       * @abstract
       */
      _export("BlockCipherMode", BlockCipherMode = class BlockCipherMode {
        constructor(props) {
          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_cipher", void 0);

          _defineProperty(this, "_iv", void 0);

          this._props = props;
          this._cipher = props.cipher;
          this._iv = props.iv;
        }
        /**
         * @abstract
         */


        processBlock(words, offset) {
          return;
        }
        /**
         * Creates this mode for encryption.
         * @param {BlockCipherModeProps} props
         * @abstract
         * @example
         *   var mode = CBC.createEncryptor(cipher, iv.words);
         */


        static createEncryptor(props) {
          throw new Error("Not implemented yet");
        }
        /**
         * Creates this mode for decryption.
         * @param {BlockCipherModeProps} props
         * @abstract
         * @example
         *   var mode = CBC.createDecryptor(cipher, iv.words);
         */


        static createDecryptor(props) {
          throw new Error("Not implemented yet");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BlockCipherMode.js.map