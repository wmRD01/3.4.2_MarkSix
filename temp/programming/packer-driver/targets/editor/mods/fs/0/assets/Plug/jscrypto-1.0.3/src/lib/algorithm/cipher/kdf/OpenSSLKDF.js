System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, CipherParams, PBKDF2, _crd, OpenSSLKDF;

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherParams(extras) {
    _reporterNs.report("CipherParams", "../CipherParams", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPBKDF(extras) {
    _reporterNs.report("PBKDF2", "./module/PBKDF2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKDF(extras) {
    _reporterNs.report("KDF", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKDFParams(extras) {
    _reporterNs.report("KDFParams", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKDFProps(extras) {
    _reporterNs.report("KDFProps", "./type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Word32Array = _unresolved_2.Word32Array;
    }, function (_unresolved_3) {
      CipherParams = _unresolved_3.CipherParams;
    }, function (_unresolved_4) {
      PBKDF2 = _unresolved_4.PBKDF2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9caeACOiVMW6HRjENpV6p0", "OpenSSLKDF", undefined);

      /**
       * Derives a key and IV from a password.
       *
       * @param {string} password The password to derive from.
       * @param {number} keySize The size in words of the key to generate.
       * @param {number} ivSize The size in words of the IV to generate.
       * @param {Word32Array?} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
       * @return {CipherParams} A cipher params object with the key, IV, and salt.
       * @example
       *   var derivedParams = OpenSSLKDF.execute('Password', 256/32, 128/32);
       *   var derivedParams = OpenSSLKDF.execute('Password', 256/32, 128/32, 'saltsalt');
       */
      _export("OpenSSLKDF", OpenSSLKDF = {
        execute(password, keySize, ivSize, salt, props) {
          // Generate random salt
          if (!salt) {
            salt = (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
              error: Error()
            }), Word32Array) : Word32Array).random(64 / 8);
          }

          const KDFModule = props && props.kdfModule || (_crd && PBKDF2 === void 0 ? (_reportPossibleCrUseOfPBKDF({
            error: Error()
          }), PBKDF2) : PBKDF2);
          const kdfProps = props ? {
            Hasher: props.kdfHasher,
            iterations: props.kdfIterations
          } : {}; // Derive key and IV

          const key = KDFModule.getKey(password, salt, { ...kdfProps,
            keySize: keySize + ivSize
          }); // Separate key and IV

          const iv = new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(key.words.slice(keySize), ivSize * 4);
          key.nSigBytes = keySize * 4; // Return params

          return new (_crd && CipherParams === void 0 ? (_reportPossibleCrUseOfCipherParams({
            error: Error()
          }), CipherParams) : CipherParams)({
            key,
            iv,
            salt
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=OpenSSLKDF.js.map