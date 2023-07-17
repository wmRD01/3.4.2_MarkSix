System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockCipherMode, CTR, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBlockCipherMode(extras) {
    _reporterNs.report("BlockCipherMode", "./BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherModeProps(extras) {
    _reporterNs.report("BlockCipherModeProps", "./BlockCipherMode", _context.meta, extras);
  }

  _export("CTR", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BlockCipherMode = _unresolved_2.BlockCipherMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "472e9a8hipO7JfKbfLbv5l+", "CTR", undefined);

      /**
       * Output Feedback Block mode
       */
      _export("CTR", CTR = class CTR extends (_crd && BlockCipherMode === void 0 ? (_reportPossibleCrUseOfBlockCipherMode({
        error: Error()
      }), BlockCipherMode) : BlockCipherMode) {
        /**
         * CTR encryptor.
         */

        /**
         * CTR decryptor.
         */
        constructor(props) {
          super(props);

          _defineProperty(this, "_counter", []);
        }
        /**
         * Creates this mode for encryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CTR.createEncryptor(cipher, iv.words);
         */


        static createEncryptor(props) {
          return new CTR.Encryptor(props);
        }
        /**
         * Creates this mode for decryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CTR.createDecryptor(cipher, iv.words);
         */


        static createDecryptor(props) {
          return new CTR.Decryptor(props);
        }

      });

      _defineProperty(CTR, "Encryptor", class Encryptor extends CTR {
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
          const iv = this._iv;
          let counter = this._counter; // Generate keyStream

          if (iv) {
            counter = this._counter = iv.words.slice(0); // Remove IV for subsequent blocks

            this._iv = undefined;
          }

          const keyStream = counter.slice(0);
          cipher.encryptBlock(keyStream, 0); // Increment counter

          counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0; // Encrypt

          for (let i = 0; i < blockSize; i++) {
            words[offset + i] ^= keyStream[i];
          }
        }

      });

      _defineProperty(CTR, "Decryptor", CTR.Encryptor);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CTR.js.map