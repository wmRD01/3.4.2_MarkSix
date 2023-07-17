System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, _crd, Utf16BE, Utf16LE, Utf16;

  function swapEndian(word) {
    return word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
  }
  /**
   * UTF-16 LE encoding strategy.
   */


  function _reportPossibleCrUseOfIEncoder(extras) {
    _reporterNs.report("IEncoder", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../Word32Array", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Word32Array = _unresolved_2.Word32Array;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "513f7/NXoVDB6TN5oy+f+7f", "Utf16", undefined);

      /**
       * UTF-16 BE encoding strategy.
       */
      _export("Utf16BE", Utf16BE = {
        /**
         * Converts a word array to a UTF-16 BE string.
         *
         * @param {Word32Array} w An array of 32-bit words.
         * @return {string} The UTF-16 BE string.
         * @example
         *   var utf16String = Utf16.stringify(new Word32Array([0x293892]));
         */
        stringify(w) {
          // Shortcuts
          var words = w.words;
          var sigBytes = w.nSigBytes; // Convert

          var utf16Chars = [];

          for (var i = 0; i < sigBytes; i += 2) {
            var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
            utf16Chars.push(String.fromCharCode(codePoint));
          }

          return utf16Chars.join("");
        },

        /**
         * Converts a UTF-16 BE string to a word array.
         * @param {string} utf16Str The UTF-16 BE string.
         * @return {Word32Array} The word array.
         * @example
         *   const wordArray = Utf16.parse(utf16String);
         */
        parse(utf16Str) {
          // Shortcut
          var utf16StrLength = utf16Str.length; // Convert

          var words = [];

          for (var i = 0; i < utf16StrLength; i++) {
            words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
          }

          return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(words, utf16StrLength * 2);
        }

      });

      _export("Utf16LE", Utf16LE = {
        /**
         * Converts a word array to a UTF-16 LE string.
         *
         * @param {Word32Array} w An array of 32-bit words.
         * @return {string} The UTF-16 LE string.
         * @example
         *   var utf16String = Utf16.stringify(new Word32Array([0x293892]));
         */
        stringify(w) {
          // Shortcuts
          var words = w.words;
          var sigBytes = w.nSigBytes; // Convert

          var utf16Chars = [];

          for (var i = 0; i < sigBytes; i += 2) {
            var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
            utf16Chars.push(String.fromCharCode(codePoint));
          }

          return utf16Chars.join("");
        },

        /**
         * Converts a UTF-16 LE string to a word array.
         * @param {string} utf16Str The UTF-16 LE string.
         * @return {Word32Array} The word array.
         * @example
         *   const wordArray = Utf16.parse(utf16String);
         */
        parse(utf16Str) {
          // Shortcut
          var utf16StrLength = utf16Str.length; // Convert

          var words = [];

          for (var i = 0; i < utf16StrLength; i++) {
            words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
          }

          return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(words, utf16StrLength * 2);
        }

      });

      _export("Utf16", Utf16 = Utf16BE);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Utf16.js.map