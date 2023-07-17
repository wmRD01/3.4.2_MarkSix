System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hex, Word32Array, Word64, Word64Array, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfIEncoder(extras) {
    _reporterNs.report("IEncoder", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHex(extras) {
    _reporterNs.report("Hex", "./encoder/Hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./Word32Array", _context.meta, extras);
  }

  _export({
    Word64: void 0,
    Word64Array: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Hex = _unresolved_2.Hex;
    }, function (_unresolved_3) {
      Word32Array = _unresolved_3.Word32Array;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae16eZtTQFJQINXfZHYSFx2", "Word64Array", undefined);

      _export("Word64", Word64 = class Word64 {
        constructor(high, low) {
          _defineProperty(this, "high", void 0);

          _defineProperty(this, "low", void 0);

          this.high = high;
          this.low = low;
        }

        clone() {
          return new Word64(this.high, this.low);
        }

      });
      /**
       * An array of 64bit words
       */


      _export("Word64Array", Word64Array = class Word64Array {
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 64-bit words.
         * @param {number} nSignificantBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *   var wordArray = new Word64Array();
         *   var wordArray = new Word64Array([new Word64(0x00010203, 0x04050607)]);
         *   var wordArray = new Word46Array([new Word64(0x00010203, 0x04050607)], 6);
         */
        constructor(words, nSignificantBytes) {
          _defineProperty(this, "_words", void 0);

          _defineProperty(this, "_nSignificantBytes", void 0);

          this._words = words || [];
          this._nSignificantBytes = typeof nSignificantBytes === "number" ? nSignificantBytes : this._words.length * 8;
        }

        get nSigBytes() {
          return this._nSignificantBytes;
        }
        /**
         * Set significant bytes
         * @param {number} n - significant bytes
         */


        set nSigBytes(n) {
          this._nSignificantBytes = n;
        }
        /**
         * Get raw reference of internal words.
         * Modification of this raw array will affect internal words.
         */


        get words() {
          return this._words;
        }
        /**
         * Converts this 64-bit word array to a 32-bit word array.
         *
         * @return {Word32Array} This word array's data as a 32-bit word array.
         *
         * @example
         *
         *     var x32WordArray = x64WordArray.toX32();
         */


        to32() {
          const words32 = [];

          for (let i = 0; i < this._words.length; i++) {
            const word64 = this._words[i];
            words32.push(word64.high);
            words32.push(word64.low);
          }

          return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(words32, this._nSignificantBytes);
        }
        /**
         * Converts this word array to a string.
         *
         * @param {IEncoder?} encoder The encoding strategy to use. Default: CryptoJS.enc.Hex
         * @return {string} The stringified word array.
         * @example
         *   var string = wordArray + '';
         *   var string = wordArray.toString();
         *   var string = wordArray.toString(Utf8);
         */


        toString(encoder) {
          if (!encoder) {
            return (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex).stringify(this.to32());
          }

          return encoder.stringify(this.to32());
        }
        /**
         * Creates a copy of this word array.
         *
         * @return {Word64Array} The clone.
         * @example
         *   var clone = wordArray.clone();
         */


        clone() {
          const words = this._words.slice();

          for (let i = 0; i < words.length; i++) {
            words[i] = words[i].clone();
          }

          return new Word64Array(words, this._nSignificantBytes);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Word64Array.js.map