System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ButtonFunctionApi, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85af3Yybs1JwItB4kQViWNx", "ButtonFunctionApi", undefined);

      /**
       * 避免循環引用問題(優化在推波後在刪除)
       */
      _export("default", ButtonFunctionApi = class ButtonFunctionApi {
        constructor() {
          _defineProperty(this, "target", void 0);

          _defineProperty(this, "targetNode", void 0);

          _defineProperty(this, "targetClassName", void 0);

          _defineProperty(this, "callback", void 0);

          _defineProperty(this, "callbackValue", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ButtonFunctionApi.js.map