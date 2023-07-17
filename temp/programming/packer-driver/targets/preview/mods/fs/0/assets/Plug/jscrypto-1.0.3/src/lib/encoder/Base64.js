System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, _crd, map, reverseMap, i, Base64;

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

      _cclegacy._RF.push({}, "0de7632rwJPCpKR/LUjYTs3", "Base64", undefined);

      map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      reverseMap = [];

      for (i = 0; i < map.length; i++) {
        reverseMap[map.charCodeAt(i)] = i;
      }

      _export("Base64", Base64 = {
        /**
         * Converts a word array to a base64 string.
         *
         * @param {Word32Array} w An array of 32-bit words.
         * @return {string} The base64 string.
         * @example
         *   var hexString = Base64.stringify(new Word32Array([0x293892], 6));
         */
        stringify(w) {
          // Shortcuts
          var words = w.words;
          var sigBytes = w.nSigBytes; // Clamp excess bits

          w.clamp(); // Convert

          var base64Chars = [];

          for (var _i = 0; _i < sigBytes; _i += 3) {
            var byte1 = words[_i >>> 2] >>> 24 - _i % 4 * 8 & 0xff;
            var byte2 = words[_i + 1 >>> 2] >>> 24 - (_i + 1) % 4 * 8 & 0xff;
            var byte3 = words[_i + 2 >>> 2] >>> 24 - (_i + 2) % 4 * 8 & 0xff;
            var triplet = byte1 << 16 | byte2 << 8 | byte3;

            for (var j = 0; j < 4 && _i + j * 0.75 < sigBytes; j++) {
              base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
            }
          } // Add padding


          var paddingChar = map.charAt(64);

          if (paddingChar) {
            while (base64Chars.length % 4) {
              base64Chars.push(paddingChar);
            }
          }

          return base64Chars.join("");
        },

        /**
         * Converts a base64 string to a word array.
         *
         * @param {string} base64Str The base64 string.
         * @return {Word32Array} The word array.
         * @example
         *   var wordArray = Base64.parse(base64String);
         */
        parse(base64Str) {
          var base64StrLength = base64Str.length; // Ignore padding

          var paddingChar = map.charAt(64);

          if (paddingChar) {
            var paddingIndex = base64Str.indexOf(paddingChar);

            if (paddingIndex !== -1) {
              base64StrLength = paddingIndex;
            }
          }

          var words = [];
          var nBytes = 0;

          for (var _i2 = 0; _i2 < base64StrLength; _i2++) {
            if (_i2 % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(_i2 - 1)] << _i2 % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(_i2)] >>> 6 - _i2 % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }

          return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(words, nBytes);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Base64.js.map