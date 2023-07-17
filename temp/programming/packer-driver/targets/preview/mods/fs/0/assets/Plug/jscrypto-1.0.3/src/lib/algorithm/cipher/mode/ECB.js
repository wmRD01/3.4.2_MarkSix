System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockCipherMode, ECB, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBlockCipherMode(extras) {
    _reporterNs.report("BlockCipherMode", "./BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherModeProps(extras) {
    _reporterNs.report("BlockCipherModeProps", "./BlockCipherMode", _context.meta, extras);
  }

  _export("ECB", void 0);

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

      _cclegacy._RF.push({}, "01608wEEwpBXZSrHqGAOxrz", "ECB", undefined);

      /**
       * Electronic Codebook block mode.
       */
      _export("ECB", ECB = class ECB extends (_crd && BlockCipherMode === void 0 ? (_reportPossibleCrUseOfBlockCipherMode({
        error: Error()
      }), BlockCipherMode) : BlockCipherMode) {
        /**
         * ECB encryptor.
         */

        /**
         * ECB decryptor.
         */
        constructor(props) {
          super(props);
        }
        /**
         * Creates this mode for encryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = ECB.createEncryptor(cipher, iv.words);
         */


        static createEncryptor(props) {
          return new ECB.Encryptor(props);
        }
        /**
         * Creates this mode for decryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = ECB.createDecryptor(cipher, iv.words);
         */


        static createDecryptor(props) {
          return new ECB.Decryptor(props);
        }

      });

      _defineProperty(ECB, "Encryptor", class Encryptor extends ECB {
        /**
         * Processes the data block at offset.
         *
         * @param {number[]} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         * @example
         *   mode.processBlock(data.words, offset);
         */
        processBlock(words, offset) {
          this._cipher.encryptBlock(words, offset);
        }

      });

      _defineProperty(ECB, "Decryptor", class Decryptor extends ECB {
        /**
         * Processes the data block at offset.
         *
         * @param {number[]} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         * @example
         *   mode.processBlock(data.words, offset);
         */
        processBlock(words, offset) {
          this._cipher.decryptBlock(words, offset);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ECB.js.map