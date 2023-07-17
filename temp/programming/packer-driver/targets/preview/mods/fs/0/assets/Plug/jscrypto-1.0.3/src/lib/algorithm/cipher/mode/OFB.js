System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BlockCipherMode, OFB, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBlockCipherMode(extras) {
    _reporterNs.report("BlockCipherMode", "./BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherModeProps(extras) {
    _reporterNs.report("BlockCipherModeProps", "./BlockCipherMode", _context.meta, extras);
  }

  _export("OFB", void 0);

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

      _cclegacy._RF.push({}, "8c1bcw3Rf1KF6/mPp+8BhSU", "OFB", undefined);

      /**
       * Output Feedback Block mode
       */
      _export("OFB", OFB = class OFB extends (_crd && BlockCipherMode === void 0 ? (_reportPossibleCrUseOfBlockCipherMode({
        error: Error()
      }), BlockCipherMode) : BlockCipherMode) {
        /**
         * OFB encryptor.
         */

        /**
         * OFB decryptor.
         */
        constructor(props) {
          super(props);

          _defineProperty(this, "_keyStream", []);
        }
        /**
         * Creates this mode for encryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = OFB.createEncryptor(cipher, iv.words);
         */


        static createEncryptor(props) {
          return new OFB.Encryptor(props);
        }
        /**
         * Creates this mode for decryption.
         * @param {BlockCipherModeProps} props
         * @example
         *   var mode = OFB.createDecryptor(cipher, iv.words);
         */


        static createDecryptor(props) {
          return new OFB.Decryptor(props);
        }

      });

      _defineProperty(OFB, "Encryptor", class Encryptor extends OFB {
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
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;
          var iv = this._iv;
          var keyStream = this._keyStream; // Generate key stream

          if (iv) {
            keyStream = this._keyStream = iv.words.slice(0); // Remove IV for subsequent blocks

            this._iv = undefined;
          }

          cipher.encryptBlock(keyStream, 0); // Encrypt

          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= keyStream[i];
          }
        }

      });

      _defineProperty(OFB, "Decryptor", OFB.Encryptor);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=OFB.js.map