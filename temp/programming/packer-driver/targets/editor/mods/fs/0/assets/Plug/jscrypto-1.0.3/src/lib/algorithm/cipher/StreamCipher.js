System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Cipher, StreamCipher, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCipher(extras) {
    _reporterNs.report("Cipher", "./Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherProps(extras) {
    _reporterNs.report("CipherProps", "./Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropsWithKey(extras) {
    _reporterNs.report("PropsWithKey", "./Cipher", _context.meta, extras);
  }

  _export("StreamCipher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Cipher = _unresolved_2.Cipher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfeaaF9TYJL8KXCb9J3spzd", "StreamCipher", undefined);

      _export("StreamCipher", StreamCipher = class StreamCipher extends (_crd && Cipher === void 0 ? (_reportPossibleCrUseOfCipher({
        error: Error()
      }), Cipher) : Cipher) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_blockSize", 1);
        }

        _doFinalize() {
          return this._process(true);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StreamCipher.js.map