System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, _crd, ISO10126;

  /**
   * ISO10126 padding strategy
   *
   * @param {Word32Array} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   * @example
   *   ISO10126.pad(wordArray, 4);
   */
  function pad(data, blockSize) {
    // Shortcut
    const blockSizeBytes = blockSize * 4; // Count padding bytes

    const nPaddingBytes = blockSizeBytes - data.nSigBytes % blockSizeBytes; // Pad

    data.concat((_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array).random(nPaddingBytes - 1)).concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array)([nPaddingBytes << 24], 1));
  }
  /**
   * Unpads data that had been padded with ISO10126 padding strategy.
   *
   * @param {Word32Array} data The data to unpad.
   * @example
   *   ISO10126.unpad(wordArray);
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

      _cclegacy._RF.push({}, "ce35aXRJBJAn4eKCyhmw/Zt", "ISO10126", undefined);

      _export("ISO10126", ISO10126 = {
        pad,
        unpad
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ISO10126.js.map