System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MD5, Word32Array, BaseKDFModule, EvpKDF, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "../../../Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMD(extras) {
    _reporterNs.report("MD5", "../../../../../MD5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseKDFModule(extras) {
    _reporterNs.report("BaseKDFModule", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseKDFModuleProps(extras) {
    _reporterNs.report("BaseKDFModuleProps", "../type", _context.meta, extras);
  }

  _export("EvpKDF", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MD5 = _unresolved_2.MD5;
    }, function (_unresolved_3) {
      Word32Array = _unresolved_3.Word32Array;
    }, function (_unresolved_4) {
      BaseKDFModule = _unresolved_4.BaseKDFModule;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "560d8PK/lZJHJHNjgcKiCyg", "EvpKDF", undefined);

      /**
       * This key derivation function is meant to conform with EVP_BytesToKey.
       * https://www.openssl.org/docs/man1.1.1/man3/EVP_BytesToKey.html
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hash algorithm to use. Default: MD5
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      _export("EvpKDF", EvpKDF = class EvpKDF extends (_crd && BaseKDFModule === void 0 ? (_reportPossibleCrUseOfBaseKDFModule({
        error: Error()
      }), BaseKDFModule) : BaseKDFModule) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_keySize", 128 / 32);

          _defineProperty(this, "_Hasher", _crd && MD5 === void 0 ? (_reportPossibleCrUseOfMD({
            error: Error()
          }), MD5) : MD5);

          _defineProperty(this, "_iterations", 1);

          if (props) {
            this._keySize = typeof props.keySize !== "undefined" ? props.keySize : this._keySize;
            this._Hasher = typeof props.Hasher !== "undefined" ? props.Hasher : this._Hasher;
            this._iterations = typeof props.iterations !== "undefined" ? props.iterations : this._iterations;
          }
        }
        /**
         * Derives a key from a password.
         *
         * @param {Word32Array|string} password The password.
         * @param {Word32Array|string} salt A salt.
         * @return {Word32Array} The derived key.
         * @example
         *   var kdf = new EvpKDF();
         *   var key = kdf.compute(password, salt);
         */


        compute(password, salt) {
          let block; // Init hasher

          const hasher = new this._Hasher(); // Initial values

          const derivedKey = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(); // Shortcuts

          const derivedKeyWords = derivedKey.words;
          const keySize = this._keySize;
          const iterations = this._iterations; // Generate key

          while (derivedKeyWords.length < keySize) {
            if (block) {
              hasher.update(block);
            }

            block = hasher.update(password).finalize(salt);
            hasher.reset(); // Iterations

            for (let i = 1; i < iterations; i++) {
              block = hasher.finalize(block);
              hasher.reset();
            }

            derivedKey.concat(block);
          }

          derivedKey.nSigBytes = keySize * 4;
          return derivedKey;
        }
        /**
         * Derives a key from a password.
         *
         * @param {Word32Array|string} password The password.
         * @param {Word32Array|string} salt A salt.
         * @param {Partial<EvpKDFProps>?} props (Optional) The configuration options to use for this computation.
         * @return {Word32Array} The derived key.
         * @static
         * @example
         *
         *     var key = EvpKDF.getKey(password, salt);
         *     var key = EvpKDF.getKey(password, salt, { keySize: 8 });
         *     var key = EvpKDF.getKey(password, salt, { keySize: 8, iterations: 1000 });
         */


        static getKey(password, salt, props) {
          return new EvpKDF(props).compute(password, salt);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EvpKDF.js.map