System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word64, Hasher, Word32Array, SHA3, _crd, RHO_OFFSETS, PI_INDEXES, ROUND_CONSTANTS, T;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfWord(extras) {
    _reporterNs.report("Word64", "./lib/Word64Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasher(extras) {
    _reporterNs.report("Hasher", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHasherProps(extras) {
    _reporterNs.report("HasherProps", "./lib/algorithm/Hasher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "./lib/Word32Array", _context.meta, extras);
  }

  _export("SHA3", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Word64 = _unresolved_2.Word64;
    }, function (_unresolved_3) {
      Hasher = _unresolved_3.Hasher;
    }, function (_unresolved_4) {
      Word32Array = _unresolved_4.Word32Array;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc45eYbjsxGGaRydImJOMP1", "SHA3", undefined);

      RHO_OFFSETS = [];
      PI_INDEXES = [];
      ROUND_CONSTANTS = []; // Compute Constants

      (function computeConstants() {
        // Compute rho offset constants
        let x = 1;
        let y = 0;

        for (let t = 0; t < 24; t++) {
          RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
          const newX = y % 5;
          const newY = (2 * x + 3 * y) % 5;
          x = newX;
          y = newY;
        } // Compute pi index constants


        for (let p = 0; p < 5; p++) {
          for (let q = 0; q < 5; q++) {
            PI_INDEXES[p + 5 * q] = q + (2 * p + 3 * q) % 5 * 5;
          }
        } // Compute round constants


        let LFSR = 0x01;

        for (let i = 0; i < 24; i++) {
          let roundConstantMsw = 0;
          let roundConstantLsw = 0;

          for (let j = 0; j < 7; j++) {
            if (LFSR & 0x01) {
              const bitPosition = (1 << j) - 1;

              if (bitPosition < 32) {
                roundConstantLsw ^= 1 << bitPosition;
              } else
                /* if (bitPosition >= 32) */
                {
                  roundConstantMsw ^= 1 << bitPosition - 32;
                }
            } // Compute next LFSR


            if (LFSR & 0x80) {
              // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
              LFSR = LFSR << 1 ^ 0x71;
            } else {
              LFSR <<= 1;
            }
          }

          ROUND_CONSTANTS[i] = new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(roundConstantMsw, roundConstantLsw);
        }
      })(); // Reusable objects for temporary values


      T = [];

      (function () {
        for (let i = 0; i < 25; i++) {
          T[i] = new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
            error: Error()
          }), Word64) : Word64)(0, 0);
        }
      })();

      _export("SHA3", SHA3 = class SHA3 extends (_crd && Hasher === void 0 ? (_reportPossibleCrUseOfHasher({
        error: Error()
      }), Hasher) : Hasher) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_blockSize", 1024 / 32);

          _defineProperty(this, "_state", []);

          _defineProperty(this, "_outputLength", 512);

          this._props = props;

          if (props) {
            if (typeof props.outputLength !== "undefined") {
              if (![224, 256, 384, 512].includes(props.outputLength)) {
                throw new Error("Unsupported output length.");
              }

              this._outputLength = props.outputLength;
            }

            if (typeof props.state !== "undefined") {
              this._state = props.state.map(s => s.clone());
            }
          }

          if (this._state.length === 0) {
            for (let i = 0; i < 25; i++) {
              this._state[i] = new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
                error: Error()
              }), Word64) : Word64)(0, 0);
            }
          }

          this._blockSize = (1600 - 2 * this._outputLength) / 32;
        }

        _doReset() {
          this._state = [];

          for (let i = 0; i < 25; i++) {
            this._state[i] = new (_crd && Word64 === void 0 ? (_reportPossibleCrUseOfWord({
              error: Error()
            }), Word64) : Word64)(0, 0);
          }

          this._blockSize = (1600 - 2 * this._outputLength) / 32;
        }

        _doProcessBlock(words, offset) {
          // Shortcuts
          const state = this._state;
          const nBlockSizeLanes = this._blockSize / 2; // Absorb

          for (let i = 0; i < nBlockSizeLanes; i++) {
            // Shortcuts
            let W2i = words[offset + 2 * i];
            let W2i1 = words[offset + 2 * i + 1]; // Swap endian

            W2i = (W2i << 8 | W2i >>> 24) & 0x00ff00ff | (W2i << 24 | W2i >>> 8) & 0xff00ff00;
            W2i1 = (W2i1 << 8 | W2i1 >>> 24) & 0x00ff00ff | (W2i1 << 24 | W2i1 >>> 8) & 0xff00ff00; // Absorb message into state

            state[i].high ^= W2i1;
            state[i].low ^= W2i;
          } // Rounds


          for (let round = 0; round < 24; round++) {
            // Theta
            for (let x = 0; x < 5; x++) {
              // Mix column lanes
              let tMsw = 0;
              let tLsw = 0;

              for (let y = 0; y < 5; y++) {
                const l = state[x + 5 * y];
                tMsw ^= l.high;
                tLsw ^= l.low;
              } // Temporary values


              const Tx = T[x];
              Tx.high = tMsw;
              Tx.low = tLsw;
            }

            for (let x = 0; x < 5; x++) {
              // Shortcuts
              const Tx4 = T[(x + 4) % 5];
              const Tx1 = T[(x + 1) % 5];
              const Tx1Msw = Tx1.high;
              const Tx1Lsw = Tx1.low; // Mix surrounding columns

              const tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
              const tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);

              for (let y = 0; y < 5; y++) {
                const l = state[x + 5 * y];
                l.high ^= tMsw;
                l.low ^= tLsw;
              }
            } // Rho Pi


            for (let laneIndex = 1; laneIndex < 25; laneIndex++) {
              let tMsw;
              let tLsw; // Shortcuts

              const laneMsw = state[laneIndex].high;
              const laneLsw = state[laneIndex].low;
              const rhoOffset = RHO_OFFSETS[laneIndex]; // Rotate lanes

              if (rhoOffset < 32) {
                tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
              } else
                /* if (rhoOffset >= 32) */
                {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                } // Transpose lanes


              const TPiLane = T[PI_INDEXES[laneIndex]];
              TPiLane.high = tMsw;
              TPiLane.low = tLsw;
            } // Rho pi at x = y = 0


            const T0 = T[0];
            const state0 = state[0];
            T0.high = state0.high;
            T0.low = state0.low; // Chi

            for (let x = 0; x < 5; x++) {
              for (let y = 0; y < 5; y++) {
                // Shortcuts
                const laneIndex = x + 5 * y;
                const l = state[laneIndex];
                const TLane = T[laneIndex];
                const Tx1Lane = T[(x + 1) % 5 + 5 * y];
                const Tx2Lane = T[(x + 2) % 5 + 5 * y]; // Mix rows

                l.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                l.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
              }
            } // Iota


            const lane = state[0];
            const roundConstant = ROUND_CONSTANTS[round];
            lane.high ^= roundConstant.high;
            lane.low ^= roundConstant.low;
          }
        }

        _doFinalize() {
          // Shortcuts
          const data = this._data;
          const dataWords = data.words;
          const nBitsLeft = data.nSigBytes * 8;
          const blockSizeBits = this.blockSize * 32; // Add padding

          dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
          dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
          data.nSigBytes = dataWords.length * 4; // Hash final blocks

          this._process(); // Shortcuts


          const state = this._state;
          const outputLengthBytes = this._outputLength / 8;
          const outputLengthLanes = outputLengthBytes / 8; // Squeeze

          const hashWords = [];

          for (let i = 0; i < outputLengthLanes; i++) {
            // Shortcuts
            const lane = state[i];
            let laneMsw = lane.high;
            let laneLsw = lane.low; // Swap endian

            laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;
            laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00; // Squeeze state to retrieve hash

            hashWords.push(laneLsw);
            hashWords.push(laneMsw);
          } // Return final computed hash


          return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(hashWords, outputLengthBytes);
        }

        clone() {
          const props = {
            outputLength: this._outputLength,
            state: this._state,
            blockSize: this._blockSize,
            data: this._data,
            nBytes: this._nBytes
          };
          return new SHA3(props);
        }

        static hash(message, props) {
          return new SHA3(props).finalize(message);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SHA3.js.map