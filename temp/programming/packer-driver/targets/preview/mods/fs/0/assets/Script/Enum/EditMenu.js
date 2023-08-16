System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EditMenu;

  _export("EditMenu", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01bbd2jcjlMX5i3tlHVrgcl", "EditMenu", undefined);

      (function (EditMenu) {
        EditMenu[EditMenu["Nickname"] = 0] = "Nickname";
        EditMenu[EditMenu["Phone"] = 1] = "Phone";
        EditMenu[EditMenu["Email"] = 2] = "Email";
      })(EditMenu || _export("EditMenu", EditMenu = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EditMenu.js.map