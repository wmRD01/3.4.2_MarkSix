System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, Zero, _crd, ISO97971;

  /**
   * ISO/IEC 9797-1 Padding Method 2. padding strategy
   *
   * @param {Word32Array} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   * @example
   *   ISO97971.pad(wordArray, 4);
   */
  function pad(data, blockSize) {
    // Add 0x80 byte
    data.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array)([0x80000000], 1)); // Zero pad the rest

    (_crd && Zero === void 0 ? (_reportPossibleCrUseOfZero({
      error: Error()
    }), Zero) : Zero).pad(data, blockSize);
  }
  /**
   * Unpads data that had been padded with ISO/IEC 9797-1 Padding Method 2 strategy.
   *
   * @param {Word32Array} data The data to unpad.
   * @example
   *   ISO97971.unpad(wordArray);
   */


  function unpad(data) {
    // Remove zero padding
    (_crd && Zero === void 0 ? (_reportPossibleCrUseOfZero({
      error: Error()
    }), Zero) : Zero).unpad(data); // Remove one more byte -- the 0x80 byte

    data.nSigBytes -= 1;
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPad(extras) {
    _reporterNs.report("Pad", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfZero(extras) {
    _reporterNs.report("Zero", "./Zero", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Word32Array = _unresolved_2.Word32Array;
    }, function (_unresolved_3) {
      Zero = _unresolved_3.Zero;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4e12Ca9ddGVb5UjVliJ4hT", "ISO97971", undefined);

      _export("ISO97971", ISO97971 = {
        pad,
        unpad
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ISO97971.js.map