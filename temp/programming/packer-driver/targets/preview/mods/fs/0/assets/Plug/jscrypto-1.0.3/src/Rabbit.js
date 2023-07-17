System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StreamCipher, PasswordBasedCipher, SerializableCipher, Rabbit, _crd;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCipherProps(extras) {
    _reporterNs.report("CipherProps", "./lib/algorithm/cipher/Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropsWithKey(extras) {
    _reporterNs.report("PropsWithKey", "./lib/algorithm/cipher/Cipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStreamCipher(extras) {
    _reporterNs.report("StreamCipher", "./lib/algorithm/cipher/StreamCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPasswordBasedCipher(extras) {
    _reporterNs.report("PasswordBasedCipher", "./lib/algorithm/cipher/PasswordBasedCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSerializableCipher(extras) {
    _reporterNs.report("SerializableCipher", "./lib/algorithm/cipher/SerializableCipher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCipherParams(extras) {
    _reporterNs.report("CipherParams", "./lib/algorithm/cipher/CipherParams", _context.meta, extras);
  }

  _export("Rabbit", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      StreamCipher = _unresolved_2.StreamCipher;
    }, function (_unresolved_3) {
      PasswordBasedCipher = _unresolved_3.PasswordBasedCipher;
    }, function (_unresolved_4) {
      SerializableCipher = _unresolved_4.SerializableCipher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61793Lnv7pHXaAa3U/7VB4L", "Rabbit", undefined);

      _export("Rabbit", Rabbit = class Rabbit extends (_crd && StreamCipher === void 0 ? (_reportPossibleCrUseOfStreamCipher({
        error: Error()
      }), StreamCipher) : StreamCipher) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_blockSize", 128 / 32);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "S", []);

          _defineProperty(this, "C", []);

          _defineProperty(this, "G", []);

          _defineProperty(this, "_X", []);

          _defineProperty(this, "_C", []);

          _defineProperty(this, "_b", 0);

          this._props = props;

          this._doReset();
        }

        _doReset() {
          // Shortcuts
          var K = this._key.words;
          var iv = this._iv; // Swap endian

          for (var i = 0; i < 4; i++) {
            K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
          } // Generate initial state values


          var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16]; // Generate initial counter values

          var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff]; // Carry bit

          this._b = 0; // Iterate the system four times

          for (var _i = 0; _i < 4; _i++) {
            this.nextState();
          } // Modify the counters


          for (var _i2 = 0; _i2 < 8; _i2++) {
            C[_i2] ^= X[_i2 + 4 & 7];
          } // IV setup


          if (!iv) {
            return;
          } // Shortcuts


          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1]; // Generate four sub vectors

          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff; // Modify counter values

          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3; // Iterate the system four times

          for (var _i3 = 0; _i3 < 4; _i3++) {
            this.nextState();
          }
        }

        _doProcessBlock(words, offset) {
          // Shortcut
          var X = this._X; // Iterate the system

          this.nextState(); // Generate four key stream words

          this.S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
          this.S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
          this.S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
          this.S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

          for (var i = 0; i < 4; i++) {
            // Swap endian
            this.S[i] = (this.S[i] << 8 | this.S[i] >>> 24) & 0x00ff00ff | (this.S[i] << 24 | this.S[i] >>> 8) & 0xff00ff00; // Encrypt

            words[offset + i] ^= this.S[i];
          }
        }

        nextState() {
          // Shortcuts
          var X = this._X;
          var C = this._C; // Save old counter values

          for (var i = 0; i < 8; i++) {
            this.C[i] = C[i];
          } // Calculate new counter values


          C[0] = C[0] + 0x4d34d34d + this._b | 0;
          C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < this.C[0] >>> 0 ? 1 : 0) | 0;
          C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < this.C[1] >>> 0 ? 1 : 0) | 0;
          C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < this.C[2] >>> 0 ? 1 : 0) | 0;
          C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < this.C[3] >>> 0 ? 1 : 0) | 0;
          C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < this.C[4] >>> 0 ? 1 : 0) | 0;
          C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < this.C[5] >>> 0 ? 1 : 0) | 0;
          C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < this.C[6] >>> 0 ? 1 : 0) | 0;
          this._b = C[7] >>> 0 < this.C[7] >>> 0 ? 1 : 0; // Calculate the g-values

          for (var _i4 = 0; _i4 < 8; _i4++) {
            var gx = X[_i4] + C[_i4]; // Construct high and low argument for squaring

            var ga = gx & 0xffff;
            var gb = gx >>> 16; // Calculate high and low result of squaring

            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0); // High XOR low

            this.G[_i4] = gh ^ gl;
          }

          var G = this.G; // Calculate new state values

          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        /**
         * Creates this cipher in encryption mode.
         *
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *   var cipher = Rabbit.createEncryptor(keyWordArray);
         */


        static createEncryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new Rabbit(_extends({}, props, {
            key
          }));
        }
        /**
         * Creates this cipher in decryption mode.
         *
         * @param {Word32Array} key The key.
         * @param {Partial<CipherProps>?} props (Optional) The configuration options to use for this operation.
         * @return {Cipher} A cipher instance.
         * @example
         *   var cipher = Rabbit.createDecryptor(keyWordArray, { iv: ivWordArray });
         */


        static createDecryptor(key, props) {
          props = typeof props === "undefined" ? {} : props;
          return new Rabbit(_extends({}, props, {
            key
          }));
        }
        /**
         * Encrypt a message with key
         * 
         * @param {Word32Array|string} message
         * @param {Word32Array|string} key
         * @param {Partial<AESProps>?} props
         * @example
         *   var encryptedMessage = Rabbit.encrypt("test", "pass");
         */


        static encrypt(message, key, props) {
          if (typeof key === "string") {
            return (_crd && PasswordBasedCipher === void 0 ? (_reportPossibleCrUseOfPasswordBasedCipher({
              error: Error()
            }), PasswordBasedCipher) : PasswordBasedCipher).encrypt(Rabbit, message, key, props);
          }

          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).encrypt(Rabbit, message, key, props);
        }
        /**
         * Encrypt a encrypted message with key
         *
         * @param {CipherParams} cipherText
         * @param {Word32Array|string} key
         * @param {Partial<AESProps>?} props
         * @example
         *   var encryptedMessage = Rabbit.decrypt(cipherProps, "pass");
         */


        static decrypt(cipherText, key, props) {
          if (typeof key === "string") {
            return (_crd && PasswordBasedCipher === void 0 ? (_reportPossibleCrUseOfPasswordBasedCipher({
              error: Error()
            }), PasswordBasedCipher) : PasswordBasedCipher).decrypt(Rabbit, cipherText, key, props);
          }

          return (_crd && SerializableCipher === void 0 ? (_reportPossibleCrUseOfSerializableCipher({
            error: Error()
          }), SerializableCipher) : SerializableCipher).decrypt(Rabbit, cipherText, key, props);
        }

      });

      _defineProperty(Rabbit, "ivSize", 128 / 32);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Rabbit.js.map