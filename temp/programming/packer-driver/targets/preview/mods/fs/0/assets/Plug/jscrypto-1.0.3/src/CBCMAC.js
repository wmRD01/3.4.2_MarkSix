System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Utf8, Word32Array, AES, CCM, _crd;

  function CBCMAC(plainText, associatedData, key, iv, tagLength, props) {
    var Cipher = props && props.Cipher ? props.Cipher : _crd && AES === void 0 ? (_reportPossibleCrUseOfAES({
      error: Error()
    }), AES) : AES;
    var K = typeof key === "string" ? (_crd && Utf8 === void 0 ? (_reportPossibleCrUseOfUtf({
      error: Error()
    }), Utf8) : Utf8).parse(key) : key;
    var N = iv ? iv : new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array)([0, 0]);
    var A = typeof associatedData === "string" ? (_crd && Utf8 === void 0 ? (_reportPossibleCrUseOfUtf({
      error: Error()
    }), Utf8) : Utf8).parse(associatedData) : associatedData;
    var P = typeof plainText === "string" ? (_crd && Utf8 === void 0 ? (_reportPossibleCrUseOfUtf({
      error: Error()
    }), Utf8) : Utf8).parse(plainText) : plainText;
    var t = tagLength || 16;
    return (_crd && CCM === void 0 ? (_reportPossibleCrUseOfCCM({
      error: Error()
    }), CCM) : CCM).mac(Cipher, K, N, A, P, t);
  }

  function _reportPossibleCrUseOfUtf(extras) {
    _reporterNs.report("Utf8", "./lib/encoder/Utf8", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAES(extras) {
    _reporterNs.report("AES", "./AES", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCM(extras) {
    _reporterNs.report("CCM", "./mode/CCM", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipher(extras) {
    _reporterNs.report("BlockCipher", "./lib/algorithm/cipher/BlockCipher", _context.meta, extras);
  }

  _export("CBCMAC", CBCMAC);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Utf8 = _unresolved_2.Utf8;
    }, function (_unresolved_3) {
      Word32Array = _unresolved_3.Word32Array;
    }, function (_unresolved_4) {
      AES = _unresolved_4.AES;
    }, function (_unresolved_5) {
      CCM = _unresolved_5.CCM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8f6doJtxJBcIsPrR+PcS8d", "CBCMAC", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CBCMAC.js.map