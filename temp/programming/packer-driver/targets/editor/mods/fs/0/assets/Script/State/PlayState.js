System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, State, ChooeseBall, _crd;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Patten/StatePatten", _context.meta, extras);
  }

  _export("ChooeseBall", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      State = _unresolved_2.State;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f58f91wh1xHM53SzpGFZ0Gd", "PlayState", undefined);

      // /**自己入房 */
      // export class OwnerInRoom extends State {
      //     public changeState(data: RP.goin): void {
      //     }
      // }

      /**自身下注 */
      _export("ChooeseBall", ChooeseBall = class ChooeseBall extends (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
        error: Error()
      }), State) : State) {
        changeState(data) {
          console.log("BET", data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayState.js.map