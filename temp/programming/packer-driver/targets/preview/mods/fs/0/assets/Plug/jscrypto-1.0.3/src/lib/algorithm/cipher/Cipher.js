System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BufferedBlockAlgorithm, Cipher, _crd;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBufferedBlockAlgorithm(extras) {
    _reporterNs.report("BufferedBlockAlgorithm", "../BufferedBlockAlgorithm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBufferedBlockAlgorithmProps(extras) {
    _reporterNs.report("BufferedBlockAlgorithmProps", "../BufferedBlockAlgorithm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../Word32Array", _context.meta, extras);
  }

  _export("Cipher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BufferedBlockAlgorithm = _unresolved_2.BufferedBlockAlgorithm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fd05mw1AtEu6Rth2w31aSG", "Cipher", undefined);

      _export("Cipher", Cipher = class Cipher extends (_crd && BufferedBlockAlgorithm === void 0 ? (_reportPossibleCrUseOfBufferedBlockAlgorithm({
        error: Error()
      }), BufferedBlockAlgorithm) : BufferedBlockAlgorithm) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_transformMode", 1);

          _defineProperty(this, "_key", void 0);

          _defineProperty(this, "_iv", void 0);

          this._props = props;
          this._key = props.key;
          this._iv = typeof props.iv !== "undefined" ? props.iv : this._iv;
          this._transformMode = typeof props.transformMode !== "undefined" ? props.transformMode : this._transformMode;
        }

        get iv() {
          return this._iv;
        }
        /**
         * Resets this cipher to its initial state.
         * @example
         *   cipher.reset();
         */


        reset(data, nBytes) {
          super.reset(data, nBytes);

          this._doReset();
        }
        /**
         * Adds data to be encrypted or decrypted.
         * @param {Word32Array|string} dataUpdate The data to encrypt or decrypt.
         * @return {Word32Array} The data after processing.
         * @example
         *   var encrypted = cipher.process('data');
         *   var encrypted = cipher.process(wordArray);
         */


        process(dataUpdate) {
          this._append(dataUpdate);

          return this._process();
        }
        /**
         * Finalizes the encryption or decryption process.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         * @param {Word32Array|string?} dataUpdate The final data to encrypt or decrypt.
         * @return {Word32Array} The data after final processing.
         * @example
         *   var encrypted = cipher.finalize();
         *   var encrypted = cipher.finalize('data');
         *   var encrypted = cipher.finalize(wordArray);
         */


        finalize(dataUpdate) {
          // Final data update
          if (dataUpdate) {
            this._append(dataUpdate);
          } // Perform concrete-cipher logic


          return this._doFinalize();
        }
        /**
         * @abstract
         */


        _doReset() {
          throw new Error("Not implemented");
        }
        /**
         * @abstract
         */


        _doProcessBlock(words, offset) {
          throw new Error("Not implemented");
        }
        /**
         * @abstract
         */


        _doFinalize() {
          throw new Error("Not implemented");
        }
        /**
         * Creates this cipher in encryption mode.
         *
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *     var cipher = AES.createEncryptor(keyWordArray, { iv: ivWordArray });
         */


        static createEncryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new Cipher(_extends({}, props, {
            key,
            transformMode: Cipher.ENC_TRANSFORM_MODE
          }));
        }
        /**
         * Creates this cipher in decryption mode.
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *   var cipher = AES.createDecryptor(keyWordArray, { iv: ivWordArray });
         */


        static createDecryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new Cipher(_extends({}, props, {
            key,
            transformMode: Cipher.DEC_TRANSFORM_MODE
          }));
        }

      });

      _defineProperty(Cipher, "ENC_TRANSFORM_MODE", 1);

      _defineProperty(Cipher, "DEC_TRANSFORM_MODE", 2);

      _defineProperty(Cipher, "keySize", 128 / 32);

      _defineProperty(Cipher, "ivSize", 128 / 32);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Cipher.js.map