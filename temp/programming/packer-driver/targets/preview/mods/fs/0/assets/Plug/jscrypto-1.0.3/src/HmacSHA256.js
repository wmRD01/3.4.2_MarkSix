System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hmac, SHA256, _crd;

  function HmacSHA256(message, key) {
    return new (_crd && Hmac === void 0 ? (_reportPossibleCrUseOfHmac({
      error: Error()
    }), Hmac) : Hmac)(new (_crd && SHA256 === void 0 ? (_reportPossibleCrUseOfSHA({
      error: Error()
    }), SHA256) : SHA256)(), key).finalize(message);
  }

  function _reportPossibleCrUseOfHmac(extras) {
    _reporterNs.report("Hmac", "./Hmac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHA(extras) {
    _reporterNs.report("SHA256", "./SHA256", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("HmacSHA256", HmacSHA256);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Hmac = _unresolved_2.Hmac;
    }, function (_unresolved_3) {
      SHA256 = _unresolved_3.SHA256;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ab48ZxkMxM0ZxiTpk2KCMG", "HmacSHA256", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HmacSHA256.js.map