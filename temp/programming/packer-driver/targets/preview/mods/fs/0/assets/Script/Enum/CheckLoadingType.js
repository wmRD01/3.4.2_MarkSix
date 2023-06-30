System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, CheckLoadingType;

  _export("CheckLoadingType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a040J3YnFEZpa5lUZQ8+xd", "CheckLoadingType", undefined);

      (function (CheckLoadingType) {
        CheckLoadingType[CheckLoadingType["isGameSence"] = 0] = "isGameSence";
        CheckLoadingType[CheckLoadingType["isWebSocketOpen"] = 1] = "isWebSocketOpen";
        CheckLoadingType[CheckLoadingType["isMusic"] = 2] = "isMusic";
      })(CheckLoadingType || _export("CheckLoadingType", CheckLoadingType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CheckLoadingType.js.map