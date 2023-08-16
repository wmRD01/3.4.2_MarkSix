System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseSingleton, CheckLoadingType, CheckLoading, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoadingType(extras) {
    _reporterNs.report("CheckLoadingType", "../Enum/CheckLoadingType", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      CheckLoadingType = _unresolved_3.CheckLoadingType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c54aHj/htMY4qvjg27xRBa", "CheckLoading", undefined);

      _export("default", CheckLoading = class CheckLoading extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        constructor() {
          super();

          _defineProperty(this, "map_CheckList", new Map());

          for (const value in _crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType) {
            if (isNaN(Number(value))) break;
            this.map_CheckList.set(Number(value), false);
          }
        }

        async checkAllEnd() {
          return new Promise((resolve, reject) => {
            let roop = setInterval(() => {
              let isOK = true;

              for (const [key, value] of this.map_CheckList) {
                if (value == false) isOK = false;
              }

              if (isOK) {
                clearInterval(roop);
                resolve();
                return;
              } // console.error("資料仔仔仔仔仔仔仔仔入中");

            }, 100);
          });
        }

        endWork(type) {
          console.log(`當前直${type}：${this.checkState(type)}`);
          this.map_CheckList.set(type, true);
          console.log(`當前直${type}：${this.checkState(type)}`);
        }

        resetState(type) {
          this.map_CheckList.set(type, false);
        }

        checkState(type) {
          return this.map_CheckList.get(type);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CheckLoading.js.map