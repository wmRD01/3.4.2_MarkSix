System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, parseCipherText, SerializableCipher, OpenSSLKDF, CipherParams, OpenSSLFormatter, _crd, PasswordBasedCipher;

  function _reportPossibleCrUseOfISerializableCipher(extras) {
    _reporterNs.report("ISerializableCipher", "./SerializableCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfparseCipherText(extras) {
    _reporterNs.report("parseCipherText", "./SerializableCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSerializableCipher(extras) {
    _reporterNs.report("SerializableCipher", "./SerializableCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSerializableCipherProps(extras) {
    _reporterNs.report("SerializableCipherProps", "./SerializableCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKDFType(extras) {
    _reporterNs.report("KDFType", "./kdf/type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKDFProps(extras) {
    _reporterNs.report("KDFProps", "./kdf/type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseKDFModule(extras) {
    _reporterNs.report("BaseKDFModule", "./kdf/type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenSSLKDF(extras) {
    _reporterNs.report("OpenSSLKDF", "./kdf/OpenSSLKDF", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherParams(extras) {
    _reporterNs.report("CipherParams", "./CipherParams", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenSSLFormatter(extras) {
    _reporterNs.report("OpenSSLFormatter", "./formatter/OpenSSLFormatter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCipher(extras) {
    _reporterNs.report("BaseCipher", "./Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "../Hasher", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      parseCipherText = _unresolved_2.parseCipherText;
      SerializableCipher = _unresolved_2.SerializableCipher;
    }, function (_unresolved_3) {
      OpenSSLKDF = _unresolved_3.OpenSSLKDF;
    }, function (_unresolved_4) {
      CipherParams = _unresolved_4.CipherParams;
    }, function (_unresolved_5) {
      OpenSSLFormatter = _unresolved_5.OpenSSLFormatter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de029t0q1NPNatFJl+ocpO5", "PasswordBasedCipher", undefined);

      _export("PasswordBasedCipher", PasswordBasedCipher = {
        /**
         * Encrypts a message using a password.
         *
         * @param {typeof Cipher} Cipher The cipher algorithm to use.
         * @param {Word32Array|string} message The message to encrypt.
         * @param {string} password The password.
         * @param {Partial<PasswordBasedCipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {CipherParams} A cipher params object.
         * @example
         *   var params = PasswordBasedCipher.encrypt(AES, message, 'password');
         *   var params = PasswordBasedCipher.encrypt(AES, message, 'password', { format: OpenSSLFormatter });
         */
        encrypt(Cipher, message, password, props) {
          const cipherProps = props ? { ...props
          } : {};
          const KDF = props && props.KDF ? props.KDF : _crd && OpenSSLKDF === void 0 ? (_reportPossibleCrUseOfOpenSSLKDF({
            error: Error()
          }), OpenSSLKDF) : OpenSSLKDF;
          const kdfProps = {};

          if (props && props.kdfHasher) {
            kdfProps.kdfHasher = props.kdfHasher;
          }

          if (props && props.kdfIterations) {
            kdfProps.kdfIterations = props.kdfIterations;
          }

          if (props && props.kdfModule) {
            kdfProps.kdfModule = props.kdfModule;
          }

          const derivedParams = KDF.execute(password, Cipher.keySize, Cipher.ivSize, cipherProps.kdfSalt, kdfProps);
          cipherProps.iv = derivedParams.iv;
          const cipherParams = (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).encrypt(Cipher, message, derivedParams.key, cipherProps);
          return new (_crd && CipherParams === void 0 ? (_reportPossibleCrUseOfCipherParams({
            error: Error()
          }), CipherParams) : CipherParams)({ ...cipherParams,
            key: derivedParams.key,
            iv: derivedParams.iv,
            salt: derivedParams.salt
          });
        },

        /**
         * Decrypts serialized ciphertext using a password.
         *
         * @param {typeof Cipher} Cipher The cipher algorithm to use.
         * @param {CipherParams|string} cipherParams The ciphertext to decrypt.
         * @param {string} password The password.
         * @param {Partial<PasswordBasedCipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Word32Array} The plaintext.
         * @example
         *   var plaintext = PasswordBasedCipher.decrypt(
         *     AES,
         *     formattedCiphertext,
         *     'password',
         *     { format: OpenSSLFormatter }
         *   );
         *   var plaintext = PasswordBasedCipher.decrypt(
         *     AES,
         *     ciphertextParams,
         *     'password',
         *     { format: OpenSSLFormatter }
         *   );
         */
        decrypt(Cipher, cipherParams, password, props) {
          const p = props ? { ...props
          } : {};
          const KDF = p.KDF ? p.KDF : _crd && OpenSSLKDF === void 0 ? (_reportPossibleCrUseOfOpenSSLKDF({
            error: Error()
          }), OpenSSLKDF) : OpenSSLKDF;
          const formatter = p.formatter ? p.formatter : _crd && OpenSSLFormatter === void 0 ? (_reportPossibleCrUseOfOpenSSLFormatter({
            error: Error()
          }), OpenSSLFormatter) : OpenSSLFormatter;
          const cipherParamsObj = (_crd && parseCipherText === void 0 ? (_reportPossibleCrUseOfparseCipherText({
            error: Error()
          }), parseCipherText) : parseCipherText)(cipherParams, formatter);
          const kdfProps = {};

          if (props && props.kdfHasher) {
            kdfProps.kdfHasher = props.kdfHasher;
          }

          if (props && props.kdfIterations) {
            kdfProps.kdfIterations = props.kdfIterations;
          }

          if (props && props.kdfModule) {
            kdfProps.kdfModule = props.kdfModule;
          }

          const derivedParams = KDF.execute(password, Cipher.keySize, Cipher.ivSize, cipherParamsObj.salt, kdfProps);
          p.iv = derivedParams.iv;
          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).decrypt(Cipher, cipherParamsObj, derivedParams.key, p);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PasswordBasedCipher.js.map