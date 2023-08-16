System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PanelMng, _dec, _class, _crd, ccclass, property, GamePanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelMng(extras) {
    _reporterNs.report("PanelMng", "./PanelMng", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PanelMng = _unresolved_2.PanelMng;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "622974Xzn1Nxao+D2m3H+SC", "GamePanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GamePanel = (_dec = ccclass('GamePanel'), _dec(_class = class GamePanel extends (_crd && PanelMng === void 0 ? (_reportPossibleCrUseOfPanelMng({
        error: Error()
      }), PanelMng) : PanelMng) {
        settingValue() {
          this.mapPanel.forEach((value, key, string) => {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
              this[key] = this.mapPanel.get(key);
            }
          }); // console.log(this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GamePanel.js.map