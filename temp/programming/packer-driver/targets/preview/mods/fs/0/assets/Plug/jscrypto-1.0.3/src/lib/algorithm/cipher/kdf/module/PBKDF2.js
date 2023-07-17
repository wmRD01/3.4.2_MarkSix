System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SHA256, Hmac, Word32Array, BaseKDFModule, PBKDF2, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "../../../Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHA(extras) {
    _reporterNs.report("SHA256", "../../../../../SHA256", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHmac(extras) {
    _reporterNs.report("Hmac", "../../../../../Hmac", _context.meta, extras);
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

  _export("PBKDF2", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SHA256 = _unresolved_2.SHA256;
    }, function (_unresolved_3) {
      Hmac = _unresolved_3.Hmac;
    }, function (_unresolved_4) {
      Word32Array = _unresolved_4.Word32Array;
    }, function (_unresolved_5) {
      BaseKDFModule = _unresolved_5.BaseKDFModule;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7644a3L1pdLdo7rVaYL4d0p", "PBKDF2", undefined);

      /**
       * Password-Based Key Derivation Function 2 algorithm.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hash algorithm to use. Default: SHA1
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      _export("PBKDF2", PBKDF2 = class PBKDF2 extends (_crd && BaseKDFModule === void 0 ? (_reportPossibleCrUseOfBaseKDFModule({
        error: Error()
      }), BaseKDFModule) : BaseKDFModule) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_keySize", 128 / 32);

          _defineProperty(this, "_Hasher", _crd && SHA256 === void 0 ? (_reportPossibleCrUseOfSHA({
            error: Error()
          }), SHA256) : SHA256);

          _defineProperty(this, "_iterations", 10000);

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
         *   var kdf = new PBKDF2();
         *   var key = kdf.compute(password, salt);
         */


        compute(password, salt) {
          // Init HMAC
          var hmac = new (_crd && Hmac === void 0 ? (_reportPossibleCrUseOfHmac({
            error: Error()
          }), Hmac) : Hmac)(new this._Hasher(), password); // Initial values

          var derivedKey = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)();
          var blockIndex = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)([0x00000001]); // Shortcuts

          var derivedKeyWords = derivedKey.words;
          var blockIndexWords = blockIndex.words;
          var keySize = this._keySize;
          var iterations = this._iterations; // Generate key

          while (derivedKeyWords.length < keySize) {
            var block = hmac.update(salt).finalize(blockIndex);
            hmac.reset(); // Shortcuts

            var blockWords = block.words;
            var blockWordsLength = blockWords.length; // Iterations

            var intermediate = block;

            for (var i = 1; i < iterations; i++) {
              intermediate = hmac.finalize(intermediate);
              hmac.reset(); // Shortcut

              var intermediateWords = intermediate.words; // XOR intermediate with block

              for (var j = 0; j < blockWordsLength; j++) {
                blockWords[j] ^= intermediateWords[j];
              }
            }

            derivedKey.concat(block);
            blockIndexWords[0]++;
          }

          derivedKey.nSigBytes = keySize * 4;
          return derivedKey;
        }
        /**
         * Derives a key from a password.
         *
         * @param {Word32Array|string} password The password.
         * @param {Word32Array|string} salt A salt.
         * @param {Partial<PBKDF2Props>?} props (Optional) The configuration options to use for this computation.
         * @return {Word32Array} The derived key.
         * @static
         * @example
         *     var key = PBKDF2.getKey(password, salt);
         *     var key = PBKDF2.getKey(password, salt, { keySize: 8 });
         *     var key = PBKDF2.getKey(password, salt, { keySize: 8, iterations: 1000 });
         */


        static getKey(password, salt, props) {
          return new PBKDF2(props).compute(password, salt);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PBKDF2.js.map