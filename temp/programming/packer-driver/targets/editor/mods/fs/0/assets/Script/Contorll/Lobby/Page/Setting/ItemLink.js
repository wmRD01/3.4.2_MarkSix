System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseComponent, PublicModel, _dec, _class, _temp, _crd, ccclass, property, ItemLink, URLType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicModel = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2953dynh9ZPQ6E03zvrjYUr", "ItemLink", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ItemLink = (_dec = ccclass('ItemLink'), _dec(_class = (_temp = class ItemLink extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "url", void 0);
        }

        init() {
          this.url = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.getEnumValue(this.node.name.split("Link")[0], URLType); // console.log(PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], URLType));
          // console.log(this.node.name.split("Link")[0]);
        }

        onOpenWindow(e, customEventData) {
          // console.log(this.url);
          window.open(this.url);
        }

      }, _temp)) || _class));

      (function (URLType) {
        URLType["Official"] = "https://godplay.app/";
        URLType["FaceBook"] = "https://www.facebook.com/GodPlayGameFun/";
        URLType["Instagram"] = "https://www.instagram.com/explore/tags/gpg/";
      })(URLType || (URLType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemLink.js.map