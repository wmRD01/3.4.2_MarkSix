System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, Zero;

  /**
   * Pads data with zero padding strategy.
   *
   * @param {Word32Array} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   * @example
   *   Zero.pad(wordArray, 4);
   */
  function pad(data, blockSize) {
    // Shortcut
    const blockSizeBytes = blockSize * 4; // Pad

    data.clamp();
    data.nSigBytes += blockSizeBytes - (data.nSigBytes % blockSizeBytes || blockSizeBytes);
  }
  /**
   * Unpads data that had been padded with zero padding strategy.
   *
   * @param {Word32Array} data The data to unpad.
   * @example
   *   Zero.unpad(wordArray);
   */


  function unpad(data) {
    // Shortcut
    const dataWords = data.words; // Unpad

    for (let i = data.nSigBytes - 1; i >= 0; i--) {
      if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff) {
        data.nSigBytes = i + 1;
        break;
      }
    }
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

      _cclegacy._RF.push({}, "aaec2HY4SpGk4miqiEovtS1", "Zero", undefined);

      _export("Zero", Zero = {
        pad,
        unpad
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Zero.js.map