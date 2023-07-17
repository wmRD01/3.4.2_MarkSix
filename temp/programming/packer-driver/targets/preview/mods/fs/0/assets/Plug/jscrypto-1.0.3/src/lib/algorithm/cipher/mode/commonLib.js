System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, _crd;

  /**
   * Pad word array to multiple of 128bit(4byte)
   * @param {Word32Array} w - Padding target. This w will be modified directly.
   * @returns {void}
   */
  function padTo128m(w) {
    var remainder = w.nSigBytes % 16;

    if (remainder === 0) {
      return;
    }

    var nPaddingBytes = 16 - remainder; // Pad Ciphertext

    var pad = [];
    var maxI = Math.floor(nPaddingBytes / 4);

    for (var i = 0; i < maxI; i++) {
      pad.push(0);
    }

    if (nPaddingBytes % 4 > 0) {
      pad.push(0);
    }

    w.concat(new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array)(pad, nPaddingBytes));
  }
  /**
   * Extract Most Significant Bit.
   * @param {Word32Array} w
   * @param {number} bytes - Number of bytes to extract
   * @example
   *   const w = new Word32Array([0x11223344, 0x55667788]);
   *   msb(w, 2).toString() === "1122"; // true
   */


  function msb(w, bytes) {
    return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array)(w.words.slice(), bytes);
  }
  /**
   * Extract Least Significant Bit.
   * @param {Word32Array} w
   * @param {number} bytes - Number of bytes to extract
   * @example
   *   const w = new Word32Array([0x11223344, 0x55667788, 0x99aabb00], 11);
   *   lsb(w, 5).toString() === "778899aabb"; // true
   */


  function lsb(w, bytes) {
    var n = w.nSigBytes;
    var nShift = n - bytes;
    var lsbWords = [];

    for (var i = 0; i < bytes; i++) {
      var j = i >>> 2;
      var byteIndex = nShift + i;
      var wordIndex = byteIndex >>> 2;
      var b = w.words[wordIndex] >>> 24 - byteIndex % 4 * 8 & 0x000000ff;
      lsbWords[j] = lsbWords[j] | 0 | b << 24 - i % 4 * 8;
    }

    var wLsb = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array)(lsbWords, bytes);
    wLsb.clamp();
    return wLsb;
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../Word32Array", _context.meta, extras);
  }

  _export({
    padTo128m: padTo128m,
    msb: msb,
    lsb: lsb
  });

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

      _cclegacy._RF.push({}, "fb5ffJppUFLTYEXeC3X4wli", "commonLib", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=commonLib.js.map