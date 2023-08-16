System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, LisnerEditBox;

  _export("LisnerEditBox", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d92a3FoJM1Kz49XquYFrZ/a", "LisnerEditBox", undefined);

      (function (LisnerEditBox) {
        LisnerEditBox["EditBox_End"] = "editing-did-ended";
        LisnerEditBox["EditBox_Start"] = "editing-did-began";
        LisnerEditBox["EditBox_Return"] = "editing-return";
        LisnerEditBox["EditBox_Editing"] = "text-changed";
      })(LisnerEditBox || _export("LisnerEditBox", LisnerEditBox = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LisnerEditBox.js.map