System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, _crd, Latin1;

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

      _cclegacy._RF.push({}, "af9404E8FlFhqwueTzwGvu5", "Latin1", undefined);

      _export("Latin1", Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {Word32Array} w An array of 32-bit words.
         * @return {string} The Latin1 string.
         * @example
         *   var latin1String = Latin1.stringify(new Word32Array([0x293892], 6));
         */
        stringify(w) {
          const nSig = w.nSigBytes;
          const words = w.words;
          const latin1Chars = [];

          for (let i = 0; i < nSig; i++) {
            const byte = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            latin1Chars.push(String.fromCharCode(byte));
          }

          return latin1Chars.join("");
        },

        /**
         * Converts a latin1 string to a word array.
         *
         * @param {string} latin1Str The latin1 string.
         * @return {Word32Array} The word array.
         * @example
         *   var wordArray = Latin1.parse(latin1Str);
         */
        parse(latin1Str) {
          const Len = latin1Str.length;
          const words = [];

          for (let i = 0; i < Len; i++) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
          }

          return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(words, Len);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Latin1.js.map