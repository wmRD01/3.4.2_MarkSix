System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventHandler, js, MyButton, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      EventHandler = _cc.EventHandler;
      js = _cc.js;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1ad9mXxXNKtq5a3tYH3qX9", "ButtonMng", undefined);

      MyButton = class MyButton {
        addEvent(componentTrget, callBack, buttonTarget, callbackValue) {
          if (this.findEvent(buttonTarget, callBack)) this.removeEvent(buttonTarget, callBack);
          let event = new EventHandler();
          event.target = componentTrget.node;
          event.component = js.getClassName(componentTrget);
          event.handler = callBack;
          if (callbackValue) event.customEventData = callbackValue;
          buttonTarget.clickEvents.push(event); // console.log(event);
        }

        findEvent(buttonTarget, callBack) {
          let isFind = false;
          let eventArr = buttonTarget.clickEvents;

          for (let index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack) return isFind = true;
          }

          return isFind;
        }

        checkEvent(buttonTarget) {
          let isFind = false;
          let eventArr = buttonTarget.clickEvents;
          if (eventArr.length > 0) return isFind = true;else isFind;
        }

        removeEvent(buttonTarget, callBack) {
          let eventArr = buttonTarget.clickEvents;

          for (let index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack) return eventArr.splice(index);
          }
        }

        clearEvent(buttonTarget) {
          let eventArr = buttonTarget.clickEvents;
          let count = eventArr.length - 1;

          for (let index = count; 0 < eventArr.length; index++) {
            eventArr.splice(index);
          }
        }

      };

      _export("default", new MyButton());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ButtonMng.js.map