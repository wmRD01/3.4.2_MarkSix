System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Intersection2D, PolygonCollider2D, _dec, _class, _crd, ccclass, property, poly;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Intersection2D = _cc.Intersection2D;
      PolygonCollider2D = _cc.PolygonCollider2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75a3eoJ3UBHNZdkzfXbbBaX", "poly", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = poly
       * DateTime = Tue Mar 14 2023 14:16:32 GMT+0800 (台北標準時間)
       * Author = sboy61017
       * FileBasename = poly.ts
       * FileBasenameNoExtension = poly
       * URL = db://assets/Script/test/poly.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("poly", poly = (_dec = ccclass('poly'), _dec(_class = class poly extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// this.node.on(Node.EventType.TOUCH_START, (e: EventTouch) => {
          //     let bHit = this.checkBtnPolygonCollider(this.node, e)
          //     console.log(bHit);
          // })
        } // private checkBtnPolygonCollider1(btn: cc.Node, e: cc.Event.EventTouch) {
        //     let collider = btn.getComponent(cc.PolygonCollider);
        //     let points = collider.points;
        //     let local = btn.convertToNodeSpaceAR(e.getLocation());
        //     let bHit = cc.Intersection.pointInPolygon(local, points);
        //     return bHit;
        // }
        // update (deltaTime: number) {
        //     // [4]
        // }


        checkBtnPolygonCollider(btn, e) {
          let collider = btn.getComponent(PolygonCollider2D);
          console.log(collider);
          let points = collider.worldPoints;
          let bHit = Intersection2D.pointInPolygon(e.getUILocation(), points);
          return bHit;
        }

      }) || _class));
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
//# sourceMappingURL=poly.js.map