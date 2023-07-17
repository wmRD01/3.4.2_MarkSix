System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BufferedBlockAlgorithm, Hasher, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBufferedBlockAlgorithm(extras) {
    _reporterNs.report("BufferedBlockAlgorithm", "./BufferedBlockAlgorithm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBufferedBlockAlgorithmProps(extras) {
    _reporterNs.report("BufferedBlockAlgorithmProps", "./BufferedBlockAlgorithm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord32Array(extras) {
    _reporterNs.report("Word32Array", "../Word32Array", _context.meta, extras);
  }

  _export("Hasher", void 0);

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

      _cclegacy._RF.push({}, "1a3fa2rxqtDypDeIcrwhlXq", "Hasher", undefined);

      _export("Hasher", Hasher = class Hasher extends (_crd && BufferedBlockAlgorithm === void 0 ? (_reportPossibleCrUseOfBufferedBlockAlgorithm({
        error: Error()
      }), BufferedBlockAlgorithm) : BufferedBlockAlgorithm) {
        constructor(props) {
          super(props);

          _defineProperty(this, "_props", void 0);

          _defineProperty(this, "_blockSize", 512 / 32);

          this._props = props;

          if (props && typeof props.blockSize === "number") {
            this._blockSize = props.blockSize;
          }

          this.reset(props ? props.data : undefined, props ? props.nBytes : undefined);
        }

        get blockSize() {
          return this._blockSize;
        }
        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *   hasher.reset();
         */


        reset(data, nBytes) {
          // Reset data buffer
          super.reset.call(this, data, nBytes); // Perform concrete-hasher logic

          this._doReset();
        }
        /**
         * Updates this hasher with a message.
         *
         * @param {Word32Array|string} messageUpdate The message to append.
         * @return {Hasher} This hasher.
         * @example
         *   hasher.update('message');
         *   hasher.update(wordArray);
         */


        update(messageUpdate) {
          this._append(messageUpdate);

          this._process();

          return this;
        }
        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {Word32Array|string?} messageUpdate (Optional) A final message update.
         * @return {Word32Array} The hash.
         * @example
         *   var hash = hasher.finalize();
         *   var hash = hasher.finalize('message');
         *   var hash = hasher.finalize(wordArray);
         */


        finalize(messageUpdate) {
          // Final message update
          if (messageUpdate) {
            this._append(messageUpdate);
          } // Perform concrete-hasher logic


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


        _doFinalize() {
          throw new Error("Not implemented");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Hasher.js.map