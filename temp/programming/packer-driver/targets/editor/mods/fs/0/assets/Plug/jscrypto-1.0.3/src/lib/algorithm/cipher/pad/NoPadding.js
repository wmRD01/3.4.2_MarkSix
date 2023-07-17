System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, NoPadding;

  /**
   * A noop padding strategy
   *
   * @param {Word32Array} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   * @example
   *   NoPadding.pad(wordArray, 4);
   */
  function pad(data, blockSize) {// NoPadding
  }
  /**
   * Unpads data that had been padded with NoPadding strategy.
   *
   * @param {Word32Array} data The data to unpad.
   * @example
   *   NoPadding.unpad(wordArray);
   */


  function unpad(data) {// NoPadding
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

      _cclegacy._RF.push({}, "534e3AOvNlIkLou5STfJLQV", "NoPadding", undefined);

      _export("NoPadding", NoPadding = {
        pad,
        unpad
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NoPadding.js.map