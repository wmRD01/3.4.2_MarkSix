System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, NodePool, CCNodePool, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfIPool(extras) {
    _reporterNs.report("IPool", "./IPool", _context.meta, extras);
  }

  _export("CCNodePool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b314aAT/bdOwoMIRduq+KOz", "CCNodePool", undefined);

      _export("CCNodePool", CCNodePool = class CCNodePool {
        /**
         *
         * @param {string} name
         * @param {Prefab | Node} nodeOrPrefab - 要建立的物件
         * @param {number} count 初始化個數
         */
        constructor(name, nodeOrPrefab, count) {
          _defineProperty(this, "pool", void 0);

          _defineProperty(this, "prefab", void 0);

          _defineProperty(this, "name", void 0);

          this.name = name;
          this.pool = new NodePool();
          this.prefab = nodeOrPrefab;

          for (var i = 0; i < count; i++) {
            var obj = this.getNode();
            this.pool.put(obj);
          }
        }

        getName() {
          return this.name;
        }

        get() {
          return this.pool.size() > 0 ? this.pool.get() : this.getNode();
        }

        getNode() {
          if (this.prefab) {
            return instantiate(this.prefab);
          } else {
            // console.error(' 預製體沒有賦值 ')
            return null;
          }
        }

        size() {
          return this.pool.size();
        }

        put(node) {
          this.pool.put(node);
        }

        clear() {
          this.pool.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CCNodePool.js.map