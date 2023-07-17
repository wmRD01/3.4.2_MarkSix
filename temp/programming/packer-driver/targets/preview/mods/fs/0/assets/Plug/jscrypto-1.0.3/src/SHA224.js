System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, SHA256, SHA224, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHA(extras) {
    _reporterNs.report("SHA256", "./SHA256", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasherProps(extras) {
    _reporterNs.report("HasherProps", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  _export("SHA224", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Word32Array = _unresolved_2.Word32Array;
    }, function (_unresolved_3) {
      SHA256 = _unresolved_3.SHA256;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bf92gQlpdLELKBfLRskL0h", "SHA224", undefined);

      _export("SHA224", SHA224 = class SHA224 extends (_crd && SHA256 === void 0 ? (_reportPossibleCrUseOfSHA({
        error: Error()
      }), SHA256) : SHA256) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_hash", new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]));

          this._props = props;

          if (props && typeof props.hash !== "undefined") {
            this._hash = props.hash.clone();
          }
        }

        _doReset() {
          this._hash = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
        }

        _doFinalize() {
          var hash = super._doFinalize.call(this);

          hash.nSigBytes -= 4;
          return hash;
        }

        clone() {
          var props = {
            hash: this._hash,
            blockSize: this._blockSize,
            data: this._data,
            nBytes: this._nBytes
          };
          return new SHA224(props);
        }

        static hash(message, props) {
          return new SHA224(props).finalize(message);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SHA224.js.map