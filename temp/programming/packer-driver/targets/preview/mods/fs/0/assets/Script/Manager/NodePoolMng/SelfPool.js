System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Tween, SelfPool, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCCNodePool(extras) {
    _reporterNs.report("CCNodePool", "./CCNodePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPool(extras) {
    _reporterNs.report("IPool", "./IPool", _context.meta, extras);
  }

  _export("SelfPool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Tween = _cc.Tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c8cd9xXhFDh4xy1Ce67gVW", "SelfPool", undefined);

      _export("SelfPool", SelfPool = class SelfPool {
        constructor(pool) {
          _defineProperty(this, "list", []);

          _defineProperty(this, "pool", void 0);

          this.pool = pool;
        }

        get() {
          return this.list.length > 0 ? this.list.shift() : this.pool.get();
        }

        getPool() {
          return this.pool;
        }

        size() {
          return this.pool.size() + this.list.length;
        }
        /**
         * 將物件返回對象池中
         * @param node
         * @param nodePool 是否放入NodePool中
         */


        put(node, nodePool) {
          if (nodePool === void 0) {
            nodePool = false;
          }

          if (nodePool) {
            this.pool.put(node);
          } else {
            this.list.push(node);
            Tween.stopAllByTarget(node);
            node.active = false;
          }
        }

        clear() {
          this.pool.clear();
          this.list.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SelfPool.js.map