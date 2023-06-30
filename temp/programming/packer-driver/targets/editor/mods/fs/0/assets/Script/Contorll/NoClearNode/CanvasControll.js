System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, game, Node, sys, _decorator, BaseSingletonComponent, PublicData, _dec, _class, _crd, ccclass, property, CanvasControll;

  function _reportPossibleCrUseOfBaseSingletonComponent(extras) {
    _reporterNs.report("BaseSingletonComponent", "../../../Patten/Singleton/BaseSingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../Model/PublicData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      game = _cc.game;
      Node = _cc.Node;
      sys = _cc.sys;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseSingletonComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicData = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "906bc2faE1DOqu2MP1zQIXg", "CanvasControll", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CanvasControll = (_dec = ccclass('CanvasControll'), _dec(_class = class CanvasControll extends (_crd && BaseSingletonComponent === void 0 ? (_reportPossibleCrUseOfBaseSingletonComponent({
        error: Error()
      }), BaseSingletonComponent) : BaseSingletonComponent)() {
        onLoad() {
          super.onLoad();
          game.addPersistRootNode(this.node);
          /**只有網頁才有互動的問題 */

          if (sys.platform != sys.Platform.MOBILE_BROWSER && sys.platform != sys.Platform.DESKTOP_BROWSER) {
            (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.isClickScreen = true;
          } else this.node.once(Node.EventType.TOUCH_END, () => {
            (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.isClickScreen = true;
          }, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CanvasControll.js.map