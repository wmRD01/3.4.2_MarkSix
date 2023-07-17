System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockCipherMode, CFB, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBlockCipherMode(extras) {
    _reporterNs.report("BlockCipherMode", "./BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherModeProps(extras) {
    _reporterNs.report("BlockCipherModeProps", "./BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipher(extras) {
    _reporterNs.report("BlockCipher", "../BlockCipher", _context.meta, extras);
  }

  _export("CFB", void 0);

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

      _cclegacy._RF.push({}, "ce049TTVVVPmKDxCNOSFbu2", "CFB", undefined);

      /**
       * Cipher Feedback Block mode
       */
      _export("CFB", CFB = class CFB extends (_crd && BlockCipherMode === void 0 ? (_reportPossibleCrUseOfBlockCipherMode({
        error: Error()
      }), BlockCipherMode) : BlockCipherMode) {
        /**
         * CFB encryptor.
         */

        /**
         * CFB decryptor.
         */
        constructor(props) {
          super(props);

          _defineProperty(this, "_prevBlock", []);
        }

        generateKeyStreamAndEncrypt(words, offset, blockSize, cipher) {
          let keyStream; // Shortcut

          const iv = this._iv; // Generate keyStream

          if (iv) {
            keyStream = iv.words.slice(0); // Remove IV for subsequent blocks

            this._iv = undefined;
          } else {
            keyStream = this._prevBlock;
          }

          cipher.encryptBlock(keyStream, 0); // Encrypt

          for (let i = 0; i < blockSize; i++) {
            words[offset + i] ^= keyStream[i];
          }
        }
        /**
         * Creates this mode for encryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CFB.createEncryptor(cipher, iv.words);
         */


        static createEncryptor(props) {
          return new CFB.Encryptor(props);
        }
        /**
         * Creates this mode for decryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = CFB.createDecryptor(cipher, iv.words);
         */


        static createDecryptor(props) {
          return new CFB.Decryptor(props);
        }

      });

      _defineProperty(CFB, "Encryptor", class Encryptor extends CFB {
        /**
         * Processes the data block at offset.
         *
         * @param {number[]} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         * @example
         *   mode.processBlock(data.words, offset);
         */
        processBlock(words, offset) {
          this.generateKeyStreamAndEncrypt(words, offset, this._cipher.blockSize, this._cipher); // Remember this block to use with next block

          this._prevBlock = words.slice(offset, offset + this._cipher.blockSize);
        }

      });

      _defineProperty(CFB, "Decryptor", class Encryptor extends CFB {
        /**
         * Processes the data block at offset.
         *
         * @param {number[]} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         * @example
         *   mode.processBlock(data.words, offset);
         */
        processBlock(words, offset) {
          // Remember this block to use with next block
          const thisBlock = words.slice(offset, offset + this._cipher.blockSize);
          this.generateKeyStreamAndEncrypt(words, offset, this._cipher.blockSize, this._cipher); // This block becomes the previous block

          this._prevBlock = thisBlock;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CFB.js.map