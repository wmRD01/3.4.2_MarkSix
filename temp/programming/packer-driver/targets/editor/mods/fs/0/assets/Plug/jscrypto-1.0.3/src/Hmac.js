System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Utf8, Hmac, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfUtf(extras) {
    _reporterNs.report("Utf8", "./lib/encoder/Utf8", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("Hmac", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Utf8 = _unresolved_2.Utf8;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4805fuQm2VGqbXPDwFdc3zE", "Hmac", undefined);

      _export("Hmac", Hmac = class Hmac {
        constructor(hasher, key) {
          _defineProperty(this, "_hasher", void 0);

          _defineProperty(this, "_oKey", void 0);

          _defineProperty(this, "_iKey", void 0);

          this._hasher = hasher; // Convert string to WordArray, else assume WordArray already

          if (typeof key == "string") {
            key = (_crd && Utf8 === void 0 ? (_reportPossibleCrUseOfUtf({
              error: Error()
            }), Utf8) : Utf8).parse(key);
          }

          const hasherBlockSize = hasher.blockSize;
          const hasherBlockSizeBytes = hasherBlockSize * 4; // Allow arbitrary length keys

          if (key.nSigBytes > hasherBlockSizeBytes) {
            key = hasher.finalize(key);
          } // Clamp excess bits


          key.clamp();
          const oKey = this._oKey = key.clone();
          const iKey = this._iKey = key.clone();
          const oKeyWords = oKey.words;
          const iKeyWords = iKey.words;

          for (let i = 0; i < hasherBlockSize; i++) {
            oKeyWords[i] ^= 0x5c5c5c5c;
            iKeyWords[i] ^= 0x36363636;
          }

          iKey.nSigBytes = hasherBlockSizeBytes;
          oKey.nSigBytes = hasherBlockSizeBytes; // Set initial values

          this.reset();
        }
        /**
         * Resets this Hmac to its initial state.
         *
         * @example
         *   hmacHasher.reset();
         */


        reset() {
          this._hasher.reset();

          this._hasher.update(this._iKey);
        }
        /**
         * Updates this Hmac with a message.
         *
         * @param {Word32Array|string} messageUpdate The message to append.
         * @return {Hmac} This Hmac instance.
         * @example
         *   hmacHasher.update('message');
         *   hmacHasher.update(wordArray);
         */


        update(messageUpdate) {
          this._hasher.update(messageUpdate);

          return this;
        }
        /**
         * Finalizes the Hmac computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {Word32Array|string} messageUpdate (Optional) A final message update.
         * @return {Word32Array} The Hmac.
         * @example
         *   var hmac = hmacHasher.finalize();
         *   var hmac = hmacHasher.finalize('message');
         *   var hmac = hmacHasher.finalize(wordArray);
         */


        finalize(messageUpdate) {
          const innerHash = this._hasher.finalize(messageUpdate);

          this._hasher.reset();

          return this._hasher.finalize(this._oKey.clone().concat(innerHash));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Hmac.js.map