System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, warn, BaseSingleton, CCNodePool, SelfPool, NodePoolManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCNodePool(extras) {
    _reporterNs.report("CCNodePool", "./CCNodePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelfPool(extras) {
    _reporterNs.report("SelfPool", "./SelfPool", _context.meta, extras);
  }

  _export("NodePoolManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      warn = _cc.warn;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      CCNodePool = _unresolved_3.CCNodePool;
    }, function (_unresolved_4) {
      SelfPool = _unresolved_4.SelfPool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e713c4ippO1a5yEY05lQ7b", "NodePoolMng", undefined);

      /**
       * @Author 蕭立品
       * @Description 緩存池管理器
       * @Date 2021-10-29 下午 02:28
       * @Version 1.0
       * https://github.com/a0979225002/GameFramework/tree/e0a84930d4431433252ca84584c295c833fc6197
       */
      _export("NodePoolManager", NodePoolManager = class NodePoolManager extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor() {
          super(...arguments);

          _defineProperty(this, "pools", new Map());

          _defineProperty(this, "nameMap", new Map());
        }

        /**
         * 初始該物件保存至緩存池中
         * @param {string} name 自訂物件名稱
         * @param {Prefab | Node} nodeOrPrefab - 要建立的物件
         * @param {number} count - 數量
         */
        init(name, nodeOrPrefab, count) {
          if (!this.pools.has(name)) {
            this.pools.set(name, new (_crd && SelfPool === void 0 ? (_reportPossibleCrUseOfSelfPool({
              error: Error()
            }), SelfPool) : SelfPool)(new (_crd && CCNodePool === void 0 ? (_reportPossibleCrUseOfCCNodePool({
              error: Error()
            }), CCNodePool) : CCNodePool)(name, nodeOrPrefab, count)));
          }
        }
        /**
         * 獲取該緩存池
         * @param {string} key
         * @return {CCNodePool}
         */


        getPool(key) {
          return this.pools.get(key).getPool();
        }
        /**
         * 獲取緩存池內物件
         * @param {string} key - 當初自訂義名稱
         * @return {Node}
         */


        get(key) {
          if (this.pools.has(key)) {
            var node = this.pools.get(key).get();

            if (!this.nameMap.has(node) && node.name != key) {
              this.nameMap.set(node, key);
            }

            return node;
          }

          return null;
        }
        /**
         * 回收進對象池
         * @param {Node} node - 要回收的物件
         * @param {boolean} nodePool - 是否要回收進對象池
         */


        put(node, nodePool) {
          var key = this.nameMap.get(node);

          if (!this.pools.has(key)) {
            warn(" not have name ", key, ' ,go.name ', node.name);
            return;
          }

          this.pools.get(key).put(node, nodePool);
          this.nameMap.delete(node);
        }
        /**
         * 清除該對象池內所有物件
         * @param {string} name
         */


        clearTarget(name) {
          if (this.pools.has(name)) {
            this.pools.get(name).clear();
            this.pools.delete(name);
          }
        }
        /**
         * 清除所有緩存池內所有物件
         */


        clearAll() {
          for (var key in this.pools) {
            this.clearTarget(key);
          }

          this.pools.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NodePoolMng.js.map