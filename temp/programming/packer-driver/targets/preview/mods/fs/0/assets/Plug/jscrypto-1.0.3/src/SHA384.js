System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word64, Word64Array, SHA512, SHA384, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfWord(extras) {
    _reporterNs.report("Word64", "./lib/Word64Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord64Array(extras) {
    _reporterNs.report("Word64Array", "./lib/Word64Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHA(extras) {
    _reporterNs.report("SHA512", "./SHA512", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasherProps(extras) {
    _reporterNs.report("HasherProps", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("SHA384", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Word64 = _unresolved_2.Word64;
      Word64Array = _unresolved_2.Word64Array;
    }, function (_unresolved_3) {
      SHA512 = _unresolved_3.SHA512;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0693byoutG+ZjxjX7E+u3W", "SHA384", undefined);

      _export("SHA384", SHA384 = class SHA384 extends (_crd && SHA512 === void 0 ? (_reportPossibleCrUseOfSHA({
        error: Error()
      }), SHA512) : SHA512) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_hash", new (_crd && Word64Array === void 0 ? (_reportPossibleCrUseOfWord64Array({
            error: Error()
          }), Word64Array) : Word64Array)([new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0xcbbb9d5d, 0xc1059ed8), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x629a292a, 0x367cd507), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x9159015a, 0x3070dd17), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x152fecd8, 0xf70e5939), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x67332667, 0xffc00b31), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x8eb44a87, 0x68581511), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0xdb0c2e0d, 0x64f98fa7), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x47b5481d, 0xbefa4fa4)]));

          this._props = props;

          if (props && typeof props.hash !== "undefined") {
            this._hash = props.hash.clone();
          }
        }

        _doReset() {
          this._hash = new (_crd && Word64Array === void 0 ? (_reportPossibleCrUseOfWord64Array({
            error: Error()
          }), Word64Array) : Word64Array)([new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0xcbbb9d5d, 0xc1059ed8), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x629a292a, 0x367cd507), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x9159015a, 0x3070dd17), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x152fecd8, 0xf70e5939), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x67332667, 0xffc00b31), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x8eb44a87, 0x68581511), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0xdb0c2e0d, 0x64f98fa7), new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0x47b5481d, 0xbefa4fa4)]);
        }

        _doFinalize() {
          var hash = super._doFinalize.call(this);

          hash.nSigBytes -= 16;
          return hash;
        }

        clone() {
          var props = {
            hash: this._hash,
            blockSize: this._blockSize,
            data: this._data,
            nBytes: this._nBytes
          };
          return new SHA384(props);
        }

        static hash(message, props) {
          return new SHA384(props).finalize(message);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SHA384.js.map