System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, delayTest;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f304ewNBJ5LubE88oFFzdWz", "delayTest", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = delayTest
       * DateTime = Wed Mar 15 2023 14:25:02 GMT+0800 (台北標準時間)
       * Author = sboy61017
       * FileBasename = delayTest.ts
       * FileBasenameNoExtension = delayTest
       * URL = db://assets/Script/test/delayTest.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("delayTest", delayTest = (_dec = ccclass('delayTest'), _dec(_class = (_temp = class delayTest extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "nowTime", 1);

          _defineProperty(this, "format", "JOJO");
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        // onEnable() {
        //     console.log("執行");
        // }
        start() {// this.getComponent(Label).color = Color.WHITE
        } // onDisable() {
        //     console.log("關閉")
        // }
        // start() {
        //     tween(this.getComponent(Label))
        //         .repeatForever(tween()
        //             .call((e: Label) => {
        //                 e.string = this.convert()
        //             })
        //             .delay(1))
        //         .start()
        // }
        // convert() {
        //     let getStr = PublicModel.getInstance.formatSecond(this.nowTime)
        //     this.nowTime--
        //     if (this.nowTime < 0) {
        //         Tween.stopAllByTarget(this.getComponent(Label))
        //     }
        //     return getStr
        // }
        // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=delayTest.js.map