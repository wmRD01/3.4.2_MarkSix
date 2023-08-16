System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventHandler, js, LisnerEditBox, MyEditBox, _crd;

  function _reportPossibleCrUseOfLisnerEditBox(extras) {
    _reporterNs.report("LisnerEditBox", "../Enum/LisnerEditBox", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      EventHandler = _cc.EventHandler;
      js = _cc.js;
    }, function (_unresolved_2) {
      LisnerEditBox = _unresolved_2.LisnerEditBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "adf7fdPp/1HWY6MkGzw2ham", "EditBoxMng", undefined);

      MyEditBox = class MyEditBox {
        addEvent(componentTrget, callBack, editboxTarget, type, callbackValue) {
          if (this.findEvent(editboxTarget, callBack, type)) this.removeEvent(editboxTarget, callBack, type);
          var event = new EventHandler();
          event.target = componentTrget.node;
          event.component = js.getClassName(componentTrget);
          event.handler = callBack;
          if (callbackValue) event.customEventData = callbackValue;
          this.retrunTypeArr(editboxTarget, type).push(event);
        }

        findEvent(editboxTarget, callBack, type) {
          var isFind = false;
          var eventArr = this.retrunTypeArr(editboxTarget, type);

          for (var index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack) return isFind = true;
          }

          return isFind;
        }

        checkEvent(editboxTarget, type) {
          var isFind = false;
          var eventArr = this.retrunTypeArr(editboxTarget, type);
          if (eventArr.length > 0) return isFind = true;else isFind;
        }

        removeEvent(editboxTarget, callBack, type) {
          var eventArr = this.retrunTypeArr(editboxTarget, type);

          for (var index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack) return eventArr.splice(index);
          }
        }

        clearEvent(editboxTarget, type) {
          var eventArr = this.retrunTypeArr(editboxTarget, type);
          var count = eventArr.length - 1;

          for (var index = count; 0 < eventArr.length; index++) {
            eventArr.splice(index);
          }
        }

        retrunTypeArr(editboxTarget, type) {
          switch (type) {
            case (_crd && LisnerEditBox === void 0 ? (_reportPossibleCrUseOfLisnerEditBox({
              error: Error()
            }), LisnerEditBox) : LisnerEditBox).EditBox_Start:
              return editboxTarget.editingDidBegan;

            case (_crd && LisnerEditBox === void 0 ? (_reportPossibleCrUseOfLisnerEditBox({
              error: Error()
            }), LisnerEditBox) : LisnerEditBox).EditBox_Editing:
              return editboxTarget.textChanged;

            case (_crd && LisnerEditBox === void 0 ? (_reportPossibleCrUseOfLisnerEditBox({
              error: Error()
            }), LisnerEditBox) : LisnerEditBox).EditBox_Return:
              return editboxTarget.editingReturn;

            case (_crd && LisnerEditBox === void 0 ? (_reportPossibleCrUseOfLisnerEditBox({
              error: Error()
            }), LisnerEditBox) : LisnerEditBox).EditBox_End:
              return editboxTarget.editingDidEnded;
          }
        }

      };

      _export("default", new MyEditBox());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EditBoxMng.js.map