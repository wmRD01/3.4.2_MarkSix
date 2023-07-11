System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EventTarget, PageView, Node, BaseSingletonComponent, PageAction, AssetMng, MusicMng, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PageControll, test;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseSingletonComponent(extras) {
    _reporterNs.report("BaseSingletonComponent", "../../../Patten/Singleton/BaseSingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageAction(extras) {
    _reporterNs.report("PageAction", "../../Enum/PageAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageMenu(extras) {
    _reporterNs.report("PageMenu", "../../Enum/PageMenu", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicMng(extras) {
    _reporterNs.report("MusicMng", "../../Manager/MusicMng", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      EventTarget = _cc.EventTarget;
      PageView = _cc.PageView;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseSingletonComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PageAction = _unresolved_3.PageAction;
    }, function (_unresolved_4) {
      AssetMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      MusicMng = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28a30iNwftHVY665ygoSNkr", "PageControll", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PageControll = (_dec = ccclass('PageControll'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class PageControll extends (_crd && BaseSingletonComponent === void 0 ? (_reportPossibleCrUseOfBaseSingletonComponent({
        error: Error()
      }), BaseSingletonComponent) : BaseSingletonComponent)() {
        constructor() {
          super(...arguments);

          _defineProperty(this, "pageView", void 0);

          _initializerDefineProperty(this, "page", _descriptor, this);

          _defineProperty(this, "pageEvnet", new EventTarget());

          _defineProperty(this, "currnetIndex", 0);
        }

        onLoad() {
          /**現階段測試 正是要往Loading移動 */
          (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).startLoad();
          (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).init();
          super.onLoad(); // console.log(this.pageEvnet);

          this.pageView = this.getComponent(PageView);
          this.pageEvnet.on((_crd && PageAction === void 0 ? (_reportPossibleCrUseOfPageAction({
            error: Error()
          }), PageAction) : PageAction).ChangeTo, this.onToPage, this); // console.log(this.pageEvnet);
        }

        start() {
          this.closeTouch(this.pageView);

          for (var index = 0; index < this.page.length; index++) {
            this.page[index].active = false;
          }

          this.onToPage(0);
        }

        closeTouch(target) {
          //@ts-ignore
          target.node.off(Node.EventType.TOUCH_START, target._onTouchBegan, target, true); //@ts-ignore

          target.node.off(Node.EventType.TOUCH_MOVE, target._onTouchMoved, target, true); //@ts-ignore

          target.node.off(Node.EventType.TOUCH_END, target._onTouchEnded, target, true); //@ts-ignore

          target.node.off(Node.EventType.TOUCH_CANCEL, target._onTouchCancelled, target, true);
        }
        /**接收的值也是number，只是PageMenu是enum內存number */


        onToPage(index) {
          this.page[this.currnetIndex].active = false;
          this.currnetIndex = index;
          this.page[this.currnetIndex].active = true;
          this.pageView.scrollToPage(index, 0);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "page", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      (function (test) {
        test[test["MEEE"] = 0] = "MEEE";
        test[test["HANA"] = 1] = "HANA";
      })(test || (test = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PageControll.js.map