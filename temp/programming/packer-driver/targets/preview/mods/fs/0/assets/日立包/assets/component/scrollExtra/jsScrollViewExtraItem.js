System.register(["ListViewItemNew", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _req, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_ListViewItemNew) {
      _req = _ListViewItemNew.__cjsMetaURL;
    }, function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "ListViewItemNew": _req
        }, _require);

        (function () {
          var ListViewItemNew = require('ListViewItemNew');

          cc.Class({
            extends: ListViewItemNew,
            properties: {
              labNum: cc.Label
            },

            onLoad() {},

            onClickedItem() {},

            updateItem(index, itemData, obj) {
              this.parentView = obj;

              if (itemData == undefined) {
                this.node.active = false;
                return;
              }

              this.index = index;
              this.node.active = true;
              this.labNum.string = itemData;
            }

          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=jsScrollViewExtraItem.js.map