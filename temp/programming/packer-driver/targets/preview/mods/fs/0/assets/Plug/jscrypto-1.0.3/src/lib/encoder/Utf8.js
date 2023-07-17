System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Latin1, _crd, Utf8;

  function _reportPossibleCrUseOfIEncoder(extras) {
    _reporterNs.report("IEncoder", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLatin(extras) {
    _reporterNs.report("Latin1", "./Latin1", _context.meta, extras);
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
      Latin1 = _unresolved_2.Latin1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f6beNRYDlHMY9n38lqKL17", "Utf8", undefined);

      _export("Utf8", Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {Word32Array} w An array of 32-bit words.
         * @return {string} The UTF-8 string.
         * @example
         *   var utf8String = Utf8.stringify(new Word32Array([0x293892]));
         */
        stringify(w) {
          try {
            return decodeURIComponent(escape((_crd && Latin1 === void 0 ? (_reportPossibleCrUseOfLatin({
              error: Error()
            }), Latin1) : Latin1).stringify(w)));
          } catch (e) {
            throw new Error("Malformed UTF-8 data");
          }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         * @return {Word32Array} The word array.
         * @example
         *   var wordArray = Utf8.parse(utf8Str);
         */
        parse(utf8Str) {
          return (_crd && Latin1 === void 0 ? (_reportPossibleCrUseOfLatin({
            error: Error()
          }), Latin1) : Latin1).parse(unescape(encodeURIComponent(utf8Str)));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Utf8.js.map