System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseKDFModule, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "../../Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherParams(extras) {
    _reporterNs.report("CipherParams", "../CipherParams", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../Word32Array", _context.meta, extras);
  }

  _export("BaseKDFModule", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b144h6xPJM6KUFy9/8BaBa", "type", undefined);

      _export("BaseKDFModule", BaseKDFModule = class BaseKDFModule {
        constructor(props) {
          _defineProperty(this, "_props", void 0);

          this._props = props;
        }

        compute(password, salt) {
          throw new Error("Not implemented");
        }

        static getKey(password, salt, props) {
          throw new Error("Not implemented");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=type.js.map