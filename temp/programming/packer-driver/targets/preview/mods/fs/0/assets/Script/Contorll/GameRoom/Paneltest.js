System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PanelBall, _dec, _class, _crd, ccclass, property, Paneltest;

  function _reportPossibleCrUseOfPanelBall(extras) {
    _reporterNs.report("PanelBall", "./PanelBall", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PanelBall = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76a0atJZ89BHI21XwayY16m", "Paneltest", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Paneltest = (_dec = ccclass('Paneltest'), _dec(_class = class Paneltest extends (_crd && PanelBall === void 0 ? (_reportPossibleCrUseOfPanelBall({
        error: Error()
      }), PanelBall) : PanelBall) {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Paneltest.js.map