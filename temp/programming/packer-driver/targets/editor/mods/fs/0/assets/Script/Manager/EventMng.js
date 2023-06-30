System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventTarget, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d413dsLzpN7IPSDEvYu6+H", "EventMng", undefined);

      // import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
      _export("default", new EventTarget()); // export default class EventMng extends BaseSingleton<EventMng>() {
      //     eventMng:EventTarget = new EventTarget()
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventMng.js.map