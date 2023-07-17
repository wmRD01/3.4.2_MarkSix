System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Utf8, Word32Array, AES, GCM, _crd;

  function GMAC(message, key, iv, tagLength, props) {
    const aad = typeof message === "string" ? (_crd && Utf8 === void 0 ? (_reportPossibleCrUseOfUtf({
      error: Error()
    }), Utf8) : Utf8).parse(message) : message;
    const initializingVector = iv ? iv : new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
      error: Error()
    }), Word32Array) : Word32Array)([0, 0, 0, 0]);
    const Cipher = props && props.Cipher ? props.Cipher : _crd && AES === void 0 ? (_reportPossibleCrUseOfAES({
      error: Error()
    }), AES) : AES;
    const wKey = typeof key === "string" ? (_crd && Utf8 === void 0 ? (_reportPossibleCrUseOfUtf({
      error: Error()
    }), Utf8) : Utf8).parse(key) : key;
    const t = tagLength || 16;
    return (_crd && GCM === void 0 ? (_reportPossibleCrUseOfGCM({
      error: Error()
    }), GCM) : GCM).mac(Cipher, wKey, initializingVector, aad, undefined, t);
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

  function _reportPossibleCrUseOfGCM(extras) {
    _reporterNs.report("GCM", "./mode/GCM", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipher(extras) {
    _reporterNs.report("BlockCipher", "./lib/algorithm/cipher/BlockCipher", _context.meta, extras);
  }

  _export("GMAC", GMAC);

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
      GCM = _unresolved_5.GCM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33092am7DpJzLH9g7ZTsi4m", "GMAC", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GMAC.js.map