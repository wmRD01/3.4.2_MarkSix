System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CipherParams, Word32Array, Base64, _crd, OpenSSLFormatter;

  function _reportPossibleCrUseOfFormatter(extras) {
    _reporterNs.report("Formatter", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherParams(extras) {
    _reporterNs.report("CipherParams", "../CipherParams", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBase(extras) {
    _reporterNs.report("Base64", "../../../encoder/Base64", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CipherParams = _unresolved_2.CipherParams;
    }, function (_unresolved_3) {
      Word32Array = _unresolved_3.Word32Array;
    }, function (_unresolved_4) {
      Base64 = _unresolved_4.Base64;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9aaedGvNz1Fa48Gy0/F0Kx2", "OpenSSLFormatter", undefined);

      _export("OpenSSLFormatter", OpenSSLFormatter = {
        /**
         * Converts a cipher params object to an OpenSSL-compatible string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         * @return {string} The OpenSSL-compatible string.
         * @example
         *   var openSSLString = OpenSSLFormatter.stringify(cipherParams);
         */
        stringify(cipherParams) {
          // Shortcuts
          var cipherText = cipherParams.cipherText;
          var salt = cipherParams.salt;

          if (!cipherText) {
            return "";
          } // Format


          if (salt) {
            var wordArray = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)([0x53616c74, 0x65645f5f]).concat(salt).concat(cipherText);
            return wordArray.toString(_crd && Base64 === void 0 ? (_reportPossibleCrUseOfBase({
              error: Error()
            }), Base64) : Base64);
          }

          return cipherText.toString(_crd && Base64 === void 0 ? (_reportPossibleCrUseOfBase({
            error: Error()
          }), Base64) : Base64);
        },

        /**
         * Converts an OpenSSL-compatible string to a cipher params object.
         *
         * @param {string} openSSLStr The OpenSSL-compatible string.
         * @return {CipherParams} The cipher params object.
         * @example
         *   var cipherParams = OpenSSLFormatter.parse(openSSLString);
         */
        parse(openSSLStr) {
          var salt; // Parse base64

          var cipherText = (_crd && Base64 === void 0 ? (_reportPossibleCrUseOfBase({
            error: Error()
          }), Base64) : Base64).parse(openSSLStr); // Shortcut

          var ciphertextWords = cipherText.words; // Test for salt

          if (ciphertextWords[0] === 0x53616c74 && ciphertextWords[1] === 0x65645f5f) {
            // Extract salt
            salt = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array)(ciphertextWords.slice(2, 4)); // Remove salt from ciphertext

            ciphertextWords.splice(0, 4);
            cipherText.nSigBytes -= 16;
          }

          return new (_crd && CipherParams === void 0 ? (_reportPossibleCrUseOfCipherParams({
            error: Error()
          }), CipherParams) : CipherParams)({
            cipherText,
            salt
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=OpenSSLFormatter.js.map