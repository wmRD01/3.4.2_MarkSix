System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, _crd, Pkcs7;

  /**
   * Pads data using the algorithm defined in PKCS #5/7.
   *
   * @param {Word32Array} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   * @example
   *   Pkcs7.pad(wordArray, 4);
   */
  function pad(data, blockSize) {
    // Shortcut
    const blockSizeBytes = blockSize * 4; // Count padding bytes

    const nPaddingBytes = blockSizeBytes - data.nSigBytes % blockSizeBytes; // Create padding word

    const paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes; // Create padding

    const paddingWords = [];

    for (let i = 0; i < nPaddingBytes; i += 4) {
      paddingWords.push(paddingWord);
    }

    const padding = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array)(paddingWords, nPaddingBytes); // Add padding

    data.concat(padding);
  }
  /**
   * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
   *
   * @param {Word32Array} data The data to unpad.
   * @example
   *   Pkcs7.unpad(wordArray);
   */


  function unpad(data) {
    // Get number of padding bytes from last byte
    const nPaddingBytes = data.words[data.nSigBytes - 1 >>> 2] & 0xff; // Remove padding

    data.nSigBytes -= nPaddingBytes;
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPad(extras) {
    _reporterNs.report("Pad", "./type", _context.meta, extras);
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

      _cclegacy._RF.push({}, "7c4bdES5CFGzbFyyldIJNVB", "Pkcs7", undefined);

      _export("Pkcs7", Pkcs7 = {
        pad,
        unpad
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Pkcs7.js.map