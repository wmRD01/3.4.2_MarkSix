System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Cipher, CBC, Pkcs7, BlockCipher, _crd;

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

  function _reportPossibleCrUseOfBlockCipherMode(extras) {
    _reporterNs.report("BlockCipherMode", "./mode/BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockCipherModeProps(extras) {
    _reporterNs.report("BlockCipherModeProps", "./mode/BlockCipherMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBC(extras) {
    _reporterNs.report("CBC", "./mode/CBC", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPad(extras) {
    _reporterNs.report("Pad", "./pad/type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPkcs(extras) {
    _reporterNs.report("Pkcs7", "./pad/Pkcs7", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseKDFModule(extras) {
    _reporterNs.report("BaseKDFModule", "./kdf/type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "../Hasher", _context.meta, extras);
  }

  _export("BlockCipher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Cipher = _unresolved_2.Cipher;
    }, function (_unresolved_3) {
      CBC = _unresolved_3.CBC;
    }, function (_unresolved_4) {
      Pkcs7 = _unresolved_4.Pkcs7;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19aaeH5eI1KfqBlyWs72wud", "BlockCipher", undefined);

      _export("BlockCipher", BlockCipher = class BlockCipher extends (_crd && Cipher === void 0 ? (_reportPossibleCrUseOfCipher({
        error: Error()
      }), Cipher) : Cipher) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_blockSize", 128 / 32);

          _defineProperty(this, "_Mode", _crd && CBC === void 0 ? (_reportPossibleCrUseOfCBC({
            error: Error()
          }), CBC) : CBC);

          _defineProperty(this, "_mode", void 0);

          _defineProperty(this, "_padding", _crd && Pkcs7 === void 0 ? (_reportPossibleCrUseOfPkcs({
            error: Error()
          }), Pkcs7) : Pkcs7);

          _defineProperty(this, "_modeCreator", void 0);

          this._props = props;
          this._Mode = typeof props.mode !== "undefined" ? props.mode : this._Mode;
          this._padding = typeof props.padding !== "undefined" ? props.padding : this._padding;
          this.reset(props === null || props === void 0 ? void 0 : props.data, props === null || props === void 0 ? void 0 : props.nBytes);
        }

        get mode() {
          return this._mode;
        }

        get padding() {
          return this._padding;
        }

        reset(data, nBytes) {
          super.reset(data, nBytes);
          let modeCreator;

          if (this._transformMode === (_crd && Cipher === void 0 ? (_reportPossibleCrUseOfCipher({
            error: Error()
          }), Cipher) : Cipher).ENC_TRANSFORM_MODE) {
            modeCreator = this._Mode.createEncryptor;
          } else {
            modeCreator = this._Mode.createDecryptor; // Keep at least one block in the buffer for unpadding

            this._minBufferSize = 1;
          }

          if (this._Mode && this._modeCreator === modeCreator) {
            this._mode = new this._Mode({
              cipher: this,
              iv: this._iv
            });
          } else {
            this._mode = modeCreator.call(this._Mode, {
              cipher: this,
              iv: this._iv
            });
            this._modeCreator = modeCreator;
          }
        }

        _doProcessBlock(words, offset) {
          var _this$_mode;

          (_this$_mode = this._mode) === null || _this$_mode === void 0 ? void 0 : _this$_mode.processBlock(words, offset);
        }

        _doFinalize() {
          let finalProcessedBlocks; // Shortcut

          const padding = this._padding; // Finalize

          if (this._transformMode === (_crd && Cipher === void 0 ? (_reportPossibleCrUseOfCipher({
            error: Error()
          }), Cipher) : Cipher).ENC_TRANSFORM_MODE) {
            // Pad data
            padding.pad(this._data, this.blockSize); // Process final blocks

            finalProcessedBlocks = this._process(true);
          } else
            /* if (this._transformMode == Cipher._DEC_TRANSFORM_MODE) */
            {
              // Process final blocks
              finalProcessedBlocks = this._process(true); // Unpad data

              padding.unpad(finalProcessedBlocks);
            }

          return finalProcessedBlocks;
        }
        /**
         * @abstract
         */


        encryptBlock(words, offset) {
          throw new Error("Not implemented");
        }
        /**
         * @abstract
         */


        decryptBlock(words, offset) {
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
          return new BlockCipher({ ...props,
            key,
            transformMode: (_crd && Cipher === void 0 ? (_reportPossibleCrUseOfCipher({
              error: Error()
            }), Cipher) : Cipher).ENC_TRANSFORM_MODE
          });
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
          return new BlockCipher({ ...props,
            key,
            transformMode: (_crd && Cipher === void 0 ? (_reportPossibleCrUseOfCipher({
              error: Error()
            }), Cipher) : Cipher).DEC_TRANSFORM_MODE
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BlockCipher.js.map