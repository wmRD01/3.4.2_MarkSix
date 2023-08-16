System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, Label, Node, tween, UITransform, v3, _decorator, BaseComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, testHTML;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../Model/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "920e90Ij3hHb40+FnDq9MAF", "testHTML", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", testHTML = (_dec = ccclass('testHTML'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class testHTML extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "label2", _descriptor2, this);
        }

        start() {
          // // 創建一個新的<link>元素
          // const googleapis = document.createElement("link");
          // // 設定<link>元素的屬性
          // googleapis.rel = "preconnect";
          // googleapis.href = "https://fonts.googleapis.com";
          // // 創建一個新的<link>元素
          // const gstatic = document.createElement("link");
          // // 設定<link>元素的屬性
          // gstatic.rel = "preconnect";
          // gstatic.href = "https://fonts.gstatic.com";
          // gstatic.crossOrigin = ""
          // // 創建一個新的<link>元素
          // const font = document.createElement("link");
          // // 設定<link>元素的屬性
          // font.rel = "stylesheet";
          // font.href = "https://fonts.googleapis.com/css2?family=Sigmar&display=swap";
          // // 將<link>元素添加到<head>元素中
          // const headElement = document.getElementsByTagName("head")[0];
          // headElement.appendChild(googleapis);
          // headElement.appendChild(gstatic);
          // headElement.appendChild(font);
          // console.log(this.label.fontFamily);
          // // setTimeout(() => {
          // //     this.label.fontFamily = "Sigmar"
          // //     this.label.string = "iter"
          // // }, 3000);
          tween(this.node).parallel(tween().call(() => {
            tween(this.label.node).to(5, {
              position: v3(50, 50)
            }).to(5, {
              position: v3(0, 0)
            }).start();
          }), tween().call(() => {
            tween(this.label2.node).to(5, {
              position: v3(-50, -50)
            }).to(5, {
              position: v3(0, 0)
            }).start();
          })).start();
          const temp = new Node();
          console.warn("開始");
          this.changParent(temp, this.label.node, this.label.node.parent);
          console.warn(temp.parent);
        }

        changParent(node, targetNode, parent) {
          console.log(node);
          if (node.parent == null || node.parent == undefined) director.getScene().getChildByName("Canvas").addChild(node);
          console.log(node.parent);
          let orgPos = this.to2DConvertOtherNodeSpaceAR(node, targetNode);
          parent.addChild(node);
          node.position = orgPos;
        }

        to2DConvertOtherNodeSpaceAR(node, targetNode) {
          let pos = targetNode.position; // console.log(pos);
          //轉成世界座標

          let worldPoint = node.getComponent(UITransform).convertToWorldSpaceAR(pos); // console.log(worldPoint);

          return targetNode.getComponent(UITransform).convertToNodeSpaceAR(worldPoint);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=testHTML.js.map