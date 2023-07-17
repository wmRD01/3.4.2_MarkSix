System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hmac, SHA512, _crd;

  function HmacSHA512(message, key) {
    return new (_crd && Hmac === void 0 ? (_reportPossibleCrUseOfHmac({
      error: Error()
    }), Hmac) : Hmac)(new (_crd && SHA512 === void 0 ? (_reportPossibleCrUseOfSHA({
      error: Error()
    }), SHA512) : SHA512)(), key).finalize(message);
  }

  function _reportPossibleCrUseOfHmac(extras) {
    _reporterNs.report("Hmac", "./Hmac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHA(extras) {
    _reporterNs.report("SHA512", "./SHA512", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("HmacSHA512", HmacSHA512);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Hmac = _unresolved_2.Hmac;
    }, function (_unresolved_3) {
      SHA512 = _unresolved_3.SHA512;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0ce7dchiVB76NABBFaWBTZ", "HmacSHA512", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HmacSHA512.js.map