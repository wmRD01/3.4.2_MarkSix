System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, js, SingletManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfIBaseSingleton(extras) {
    _reporterNs.report("IBaseSingleton", "./IBaseSingleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      js = _cc.js;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc6681+wkVNSaIs7VMN+8ew", "SingletonManger", undefined);

      /**
       * @Author 蕭立品
       * @Description 模板資源管理器
       * @Date 2021-12-17 下午 06:42
       * @Version 1.0
       */
      _export("default", SingletManager = class SingletManager {
        /**
         * 當前保存的所有單例物件
         * @type {Map<string, any>}
         * @private
         */
        static get instance() {
          if (!this._instance) {
            this._instance = new SingletManager();
          }

          return this._instance;
        }

        constructor() {
          _defineProperty(this, "componentClass", void 0);

          this.componentClass = new Map();
        }
        /**
         *  添加單例
         * @param {any} self - 要加入單例的class
         */


        set(self) {
          // console.log(self.constructor.name);
          // console.log(js.getClassName(self));
          const name = js.getClassName(self);

          if (this.componentClass.has(name)) {// return console.error("Adam", `：${name}`, "請勿重複實現單例");
          } else {
            this.componentClass.set(name, self);
          }
        }
        /**
         * 拿取單例
         * @param {string} name - 名稱
         * @return {IBaseSingleton}
         */


        get(name) {
          if (!this.componentClass.has(name)) {
            // console.error("Adam", "當前物件尚未添加進管理器中", name);
            return null;
          }

          return this.componentClass.get(name);
        }
        /**
         * 獲取全部綁定單例的單例CLASS
         * @return {Map<string, any>}
         */


        getAll() {
          return this.componentClass;
        }
        /**
         * 清除所有
         */


        deleteAll() {
          for (let singleton of this.componentClass.values()) {
            singleton.clear();
          }

          this.componentClass = null;
        }
        /**
         * 清除單一
         * @param name
         */


        delete(name) {
          if (this.componentClass.has(name)) {
            this.componentClass.get(name).clear();
            this.componentClass.delete(name);
          } else {// console.warn("查找不到該物件,無須清除");
          }
        }

      });

      _defineProperty(SingletManager, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SingletonManger.js.map