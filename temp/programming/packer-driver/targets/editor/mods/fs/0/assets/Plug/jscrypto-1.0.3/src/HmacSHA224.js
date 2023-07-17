System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hmac, SHA224, _crd;

  function HmacSHA224(message, key) {
    return new (_crd && Hmac === void 0 ? (_reportPossibleCrUseOfHmac({
      error: Error()
    }), Hmac) : Hmac)(new (_crd && SHA224 === void 0 ? (_reportPossibleCrUseOfSHA({
      error: Error()
    }), SHA224) : SHA224)(), key).finalize(message);
  }

  function _reportPossibleCrUseOfHmac(extras) {
    _reporterNs.report("Hmac", "./Hmac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHA(extras) {
    _reporterNs.report("SHA224", "./SHA224", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("HmacSHA224", HmacSHA224);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Hmac = _unresolved_2.Hmac;
    }, function (_unresolved_3) {
      SHA224 = _unresolved_3.SHA224;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d416LTX6tNXblAOkRDyOv5", "HmacSHA224", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HmacSHA224.js.map