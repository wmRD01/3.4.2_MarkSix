System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EventTarget, BaseSingletonComponent, PageAction, PageMenu, _dec, _class, _temp, _crd, ccclass, property, PageControll;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseSingletonComponent(extras) {
    _reporterNs.report("BaseSingletonComponent", "../../../Patten/Singleton/BaseSingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageAction(extras) {
    _reporterNs.report("PageAction", "../../Enum/PageAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageMenu(extras) {
    _reporterNs.report("PageMenu", "../../Enum/PageMenu", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      EventTarget = _cc.EventTarget;
    }, function (_unresolved_2) {
      BaseSingletonComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PageAction = _unresolved_3.PageAction;
    }, function (_unresolved_4) {
      PageMenu = _unresolved_4.PageMenu;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02a2djZxt5DzYfv9Qpmndx8", "PageControll", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PageControll = (_dec = ccclass('PageControll'), _dec(_class = (_temp = class PageControll extends (_crd && BaseSingletonComponent === void 0 ? (_reportPossibleCrUseOfBaseSingletonComponent({
        error: Error()
      }), BaseSingletonComponent) : BaseSingletonComponent)() {
        constructor() {
          super(...arguments);

          _defineProperty(this, "pageEvnet", new EventTarget());
        }

        onLoad() {
          super.onLoad(); // console.log(this.pageEvnet);

          this.pageEvnet.on((_crd && PageAction === void 0 ? (_reportPossibleCrUseOfPageAction({
            error: Error()
          }), PageAction) : PageAction).ChangeTo, this.onToPage, this); // console.log(this.pageEvnet);
        }

        onToPage(index) {
          switch (index) {
            case (_crd && PageMenu === void 0 ? (_reportPossibleCrUseOfPageMenu({
              error: Error()
            }), PageMenu) : PageMenu).ChooeseBall:
              break;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PageControll.js.map