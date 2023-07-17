System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hmac, MD5, _crd;

  function HmacMD5(message, key) {
    return new (_crd && Hmac === void 0 ? (_reportPossibleCrUseOfHmac({
      error: Error()
    }), Hmac) : Hmac)(new (_crd && MD5 === void 0 ? (_reportPossibleCrUseOfMD({
      error: Error()
    }), MD5) : MD5)(), key).finalize(message);
  }

  function _reportPossibleCrUseOfHmac(extras) {
    _reporterNs.report("Hmac", "./Hmac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMD(extras) {
    _reporterNs.report("MD5", "./MD5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("HmacMD5", HmacMD5);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Hmac = _unresolved_2.Hmac;
    }, function (_unresolved_3) {
      MD5 = _unresolved_3.MD5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6327PkC1dIMLUPvk1rGvHd", "HmacMD5", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HmacMD5.js.map