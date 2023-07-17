System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockCipherMode, CBC, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBlockCipherMode(extras) {
    _reporterNs.report("BlockCipherMode", "./BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherModeProps(extras) {
    _reporterNs.report("BlockCipherModeProps", "./BlockCipherMode", _context.meta, extras);
  }

  _export("CBC", void 0);

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

      _cclegacy._RF.push({}, "cd7ddRwsptLIJ3caY9c2ACp", "CBC", undefined);

      _export("CBC", CBC = class CBC extends (_crd && BlockCipherMode === void 0 ? (_reportPossibleCrUseOfBlockCipherMode({
        error: Error()
      }), BlockCipherMode) : BlockCipherMode) {
        /**
         * CBC encryptor.
         */

        /**
         * CBC decryptor.
         */
        constructor(props) {
          super(props);

          _defineProperty(this, "_prevBlock", []);
        }

        xorBlock(words, offset, blockSize) {
          let block; // Shortcut

          const iv = this._iv; // Choose mixing block

          if (iv) {
            block = iv.words; // Remove IV for subsequent blocks

            this._iv = undefined;
          } else {
            block = this._prevBlock;
          } // XOR blocks


          for (let i = 0; i < blockSize; i++) {
            words[offset + i] ^= block[i];
          }
        }
        /**
         * Creates this mode for encryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CBC.createEncryptor(cipher, iv.words);
         */


        static createEncryptor(props) {
          return new CBC.Encryptor(props);
        }
        /**
         * Creates this mode for decryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CBC.createDecryptor(cipher, iv.words);
         */


        static createDecryptor(props) {
          return new CBC.Decryptor(props);
        }

      });

      _defineProperty(CBC, "Encryptor", class Encryptor extends CBC {
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
          const blockSize = cipher.blockSize; // XOR and encrypt

          this.xorBlock(words, offset, blockSize);
          cipher.encryptBlock(words, offset); // Remember this block to use with next block

          this._prevBlock = words.slice(offset, offset + blockSize);
        }

      });

      _defineProperty(CBC, "Decryptor", class Decryptor extends CBC {
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
          const blockSize = cipher.blockSize; // Remember this block to use with next block

          const thisBlock = words.slice(offset, offset + blockSize); // Decrypt and XOR

          cipher.decryptBlock(words, offset);
          this.xorBlock(words, offset, blockSize); // This block becomes the previous block

          this._prevBlock = thisBlock;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CBC.js.map