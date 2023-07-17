System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Word32Array, Utf8, BufferedBlockAlgorithm, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../Word32Array", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtf(extras) {
    _reporterNs.report("Utf8", "../encoder/Utf8", _context.meta, extras);
  }

  _export("BufferedBlockAlgorithm", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Word32Array = _unresolved_2.Word32Array;
    }, function (_unresolved_3) {
      Utf8 = _unresolved_3.Utf8;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95eccc3ajJDZqMX3kpX72nQ", "BufferedBlockAlgorithm", undefined);

      _export("BufferedBlockAlgorithm", BufferedBlockAlgorithm = class BufferedBlockAlgorithm {
        constructor(props) {
          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_data", void 0);

          _defineProperty(this, "_nBytes", void 0);

          _defineProperty(this, "_minBufferSize", 0);

          _defineProperty(this, "_blockSize", 0);

          this._props = props;
          this._data = props && typeof props.data !== "undefined" ? props.data.clone() : new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)();
          this._nBytes = props && typeof props.nBytes === "number" ? props.nBytes : 0;
        }

        get blockSize() {
          return this._blockSize;
        }
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *   bufferedBlockAlgorithm.reset();
         */


        reset(data, nBytes) {
          this._data = typeof data !== "undefined" ? data.clone() : new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)();
          this._nBytes = typeof nBytes === "number" ? nBytes : 0;
        }
        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {Word32Array|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         * @example
         *   bufferedBlockAlgorithm.append('data');
         *   bufferedBlockAlgorithm.append(wordArray);
         */


        _append(data) {
          const d = typeof data === "string" ? (_crd && Utf8 === void 0 ? (_reportPossibleCrUseOfUtf({
            error: Error()
          }), Utf8) : Utf8).parse(data) : data;

          this._data.concat(d);

          this._nBytes += d.nSigBytes;
        }
        /**
         * Processes available data blocks.
         * This method invokes doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean?} doFlush Whether all blocks and partial blocks should be processed.
         * @return {Word32Array} The processed data.
         * @example
         *   var processedData = bufferedBlockAlgorithm.process();
         *   var processedData = bufferedBlockAlgorithm.process(!!'flush');
         */


        _process(doFlush) {
          let processedWords;
          const words = this._data.words;
          const nSigBytes = this._data.nSigBytes;
          const blockSize = this._blockSize;
          const blockSizeByte = this._blockSize * 4;
          let nBlocksReady = nSigBytes / blockSizeByte;

          if (doFlush) {
            // Round up to include partial blocks
            nBlocksReady = Math.ceil(nBlocksReady);
          } else {
            nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
          } // Count words ready


          const nWordsReady = nBlocksReady * blockSize; // Count bytes ready

          const nBytesReady = Math.min(nWordsReady * 4, nSigBytes); // Process blocks

          if (nWordsReady) {
            for (let offset = 0; offset < nWordsReady; offset += blockSize) {
              // Perform concrete-algorithm logic
              this._doProcessBlock(words, offset);
            } // Remove processed words


            processedWords = words.splice(0, nWordsReady);
            this._data.nSigBytes -= nBytesReady;
          } // Return processed words


          return new (_crd && Word32Array === void 0 ? (_reportPossibleCrUseOfWord32Array({
            error: Error()
          }), Word32Array) : Word32Array)(processedWords, nBytesReady);
        }
        /**
         * @abstract
         */


        _doProcessBlock(words, offset) {
          throw new Error("Not implemented");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BufferedBlockAlgorithm.js.map