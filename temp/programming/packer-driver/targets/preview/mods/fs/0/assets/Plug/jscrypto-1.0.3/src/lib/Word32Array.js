System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hex, random, Word32Array, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfIEncoder(extras) {
    _reporterNs.report("IEncoder", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHex(extras) {
    _reporterNs.report("Hex", "./encoder/Hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandom(extras) {
    _reporterNs.report("random", "./random", _context.meta, extras);
  }

  _export("Word32Array", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Hex = _unresolved_2.Hex;
    }, function (_unresolved_3) {
      random = _unresolved_3.random;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18c91mVjQdFK4lU+kTTdqjg", "Word32Array", undefined);

      /**
       * An array of 32bit words
       */
      _export("Word32Array", Word32Array = class Word32Array {
        /**
         * Initializes a newly created word array.
         * 
         * ByteArray Support thanks to
         * https://github.com/entronad/crypto-es/blob/master/lib/core.js
         * MIT License Copyright(c) LIN Chen
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} nSignificantBytes (Optional) The number of significant bytes in the words.
         * @example
         *   var words = new Word32Array();
         *   var words = new Word32Array([0x00010203, 0x04050607]);
         *   var words = new Word32Array([0x00010203, 0x04050607], 6);
         *   // Cloning wordArray can be done like below.
         *   var clone = (new Word32Array([0x00010203, 0x04050607])).clone();
         *   // or
         *   var clone = new Word32Array(new Word32Array([0x00010203, 0x04050607]));
         */
        constructor(words, nSignificantBytes) {
          _defineProperty(this, "_words", void 0);

          _defineProperty(this, "_nSignificantBytes", void 0);

          if (Array.isArray(words) || !words) {
            this._words = Array.isArray(words) ? words : [];
            this._nSignificantBytes = typeof nSignificantBytes === "number" ? nSignificantBytes : this._words.length * 4;
            return;
          } else if (words instanceof Word32Array) {
            this._words = words.words.slice();
            this._nSignificantBytes = words.nSigBytes;
            return;
          }

          var uint8Array; // IE9 does not implement TypedArray. So catch exception for that case.

          try {
            if (words instanceof ArrayBuffer) {
              uint8Array = new Uint8Array(words);
            } else if (words instanceof Uint8Array || words instanceof Int8Array || words instanceof Uint8ClampedArray || words instanceof Int16Array || words instanceof Uint16Array || words instanceof Int32Array || words instanceof Uint32Array || words instanceof Float32Array || words instanceof Float64Array) {
              uint8Array = new Uint8Array(words.buffer, words.byteOffset, words.byteLength);
            }
          } catch (e) {
            throw new Error("Invalid argument");
          }

          if (!uint8Array) {
            throw new Error("Invalid argument");
          }

          var byteLen = uint8Array.byteLength;
          var w = [];

          for (var i = 0; i < byteLen; i++) {
            w[i >>> 2] |= uint8Array[i] << 24 - i % 4 * 8;
          }

          this._words = w;
          this._nSignificantBytes = byteLen;
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
            }), Hex) : Hex).stringify(this);
          }

          return encoder.stringify(this);
        }
        /**
         * Converts this 32bit word array to Uint8Array
         * 
         * @return {Uint8Array} Unsigned int 8bit array
         * @example
         *   var word = new Word32Array([0x00102030]);
         *   var uint8 = word.toUint8Array(); // Uint8Array(4) [ 0, 16, 32, 48 ]
         */


        toUint8Array() {
          var words = this._words;
          var nB = this._nSignificantBytes;
          var uint8Array = new Uint8Array(nB);

          for (var i = 0; i < nB; i++) {
            uint8Array[i] = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          }

          return uint8Array;
        }
        /**
         * Concatenates a word array to this word array.
         *
         * @param {Word32Array} w The word array to append.
         * @return {Word32Array} This word array.
         * @example
         *   wordArray1.concat(wordArray2);
         */


        concat(w) {
          var words = w.words.slice();
          var N = w.nSigBytes;
          this.clamp();

          if (this._nSignificantBytes % 4) {
            // Copy one byte at a time
            for (var i = 0; i < N; i++) {
              var b = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
              this._words[this._nSignificantBytes + i >>> 2] |= b << 24 - (this._nSignificantBytes + i) % 4 * 8;
            }
          } else {
            // Copy one word at a time
            for (var _i = 0; _i < N; _i += 4) {
              this._words[this._nSignificantBytes + _i >>> 2] = words[_i >>> 2];
            }
          }

          this._nSignificantBytes += N; // Chainable

          return this;
        }
        /**
         * Removes insignificant bits.
         *
         * @example
         *   wordArray.clamp();
         */


        clamp() {
          var n = this._nSignificantBytes;
          this._words[n >>> 2] &= 0xffffffff << 32 - n % 4 * 8;
          this._words.length = Math.ceil(n / 4);
        }
        /**
         * Creates a copy of this word array.
         *
         * @return {Word32Array} The clone.
         * @example
         *   var clone = word32Array.clone();
         */


        clone() {
          return new Word32Array(this._words.slice(), this._nSignificantBytes);
        }
        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         * @return {Word32Array} The random word array.
         * @static
         * @example
         *   var wordArray = Word32Array.random(16);
         */


        static random(nBytes) {
          var words = [];

          for (var i = 0; i < nBytes; i += 4) {
            words.push((_crd && random === void 0 ? (_reportPossibleCrUseOfrandom({
              error: Error()
            }), random) : random)());
          }

          return new Word32Array(words, nBytes);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Word32Array.js.map