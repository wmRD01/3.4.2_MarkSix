System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, AnsiX923;

  /**
   * ANSI X.923 padding strategy
   *
   * @param {Word32Array} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   * @example
   *   AnsiX923.pad(wordArray, 4);
   */
  function pad(data, blockSize) {
    // Shortcuts
    const dataSigBytes = data.nSigBytes;
    const blockSizeBytes = blockSize * 4; // Count padding bytes

    const nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes; // Compute last byte position

    const lastBytePos = dataSigBytes + nPaddingBytes - 1; // Pad

    data.clamp();
    data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
    data.nSigBytes += nPaddingBytes;
  }
  /**
   * Unpads data that had been padded with ANSI X.923 padding strategy
   *
   * @param {Word32Array} data The data to unpad.
   * @example
   *   AnsiX923.unpad(wordArray);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39053+8shtKB5I9xjgwmYHW", "AnsiX923", undefined);

      _export("AnsiX923", AnsiX923 = {
        pad,
        unpad
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AnsiX923.js.map