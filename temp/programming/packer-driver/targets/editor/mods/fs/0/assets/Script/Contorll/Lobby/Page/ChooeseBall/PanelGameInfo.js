System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseComponent, _dec, _class, _crd, ccclass, property, PanelGameInfo;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb686WBNQhCGa7zHo9yLmhC", "PanelGameInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelGameInfo = (_dec = ccclass('PanelGameInfo'), _dec(_class = class PanelGameInfo extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        onLoad() {// this.setEvent(LobbyStateEvent.UpDateBall, this.hide)
        }

        onDisable() {
          this.hide();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelGameInfo.js.map