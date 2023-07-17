System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, _crd, Hex;

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

      _cclegacy._RF.push({}, "5d83dGewJFIOrf3bViIqK0s", "Hex", undefined);

      _export("Hex", Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {Word32Array} w An array of 32-bit words.
         * @return {string} The hex string.
         * @example
         *   var hexString = Hex.stringify(new Word32Array([0x293892], 6));
         */
        stringify(w) {
          const nSig = w.nSigBytes;
          const words = w.words;
          const hexChars = [];

          for (let i = 0; i < nSig; i++) {
            const byte = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            hexChars.push((byte >>> 4).toString(16));
            hexChars.push((byte & 0x0f).toString(16));
          }

          return hexChars.join("");
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         * @return {Word32Array} The word array.
         * @example
         *   var wordArray = Hex.parse(hexString);
         */
        parse(hexStr) {
          const Len = hexStr.length;

          if (Len % 2 !== 0) {
            throw new Error("Hex string count must be even");
          } else if (!/^[a-fA-F0-9]+$/.test(hexStr)) {
            throw new Error(`Invalid Hex string: ${hexStr}`);
          }

          const words = [];

          for (let i = 0; i < Len; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
          }

          return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(words, Len / 2);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Hex.js.map