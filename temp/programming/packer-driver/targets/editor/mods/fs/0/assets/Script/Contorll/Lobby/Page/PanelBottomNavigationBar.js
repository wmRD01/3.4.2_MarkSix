System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Node, UITransform, v3, _decorator, PageAction, BaseComponent, PublicData, PublicModel, PageControll, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, PanelBottomNavigationBar, ActionDic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPageAction(extras) {
    _reporterNs.report("PageAction", "../../Enum/PageAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageControll(extras) {
    _reporterNs.report("PageControll", "./PageControll", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PageAction = _unresolved_2.PageAction;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      PublicData = _unresolved_4.default;
    }, function (_unresolved_5) {
      PublicModel = _unresolved_5.default;
    }, function (_unresolved_6) {
      PageControll = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8fa40DXRl9Ga5z3qtIV9LCn", "PanelBottomNavigationBar", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelBottomNavigationBar = (_dec = ccclass('PanelBottomNavigationBar'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = (_temp = class PanelBottomNavigationBar extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnHome", _descriptor, this);

          _initializerDefineProperty(this, "btnPoint", _descriptor2, this);

          _initializerDefineProperty(this, "btnChooeseBall", _descriptor3, this);

          _initializerDefineProperty(this, "btnClientInfo", _descriptor4, this);

          _initializerDefineProperty(this, "btnSetting", _descriptor5, this);

          _initializerDefineProperty(this, "btnLayout", _descriptor6, this);

          _initializerDefineProperty(this, "nodeCircle", _descriptor7, this);

          _defineProperty(this, "circleY", void 0);

          _defineProperty(this, "mapButton", new Map());

          _defineProperty(this, "currentIndex", 0);

          _defineProperty(this, "isAction", false);

          _defineProperty(this, "actionDic", ActionDic.縮);

          _initializerDefineProperty(this, "speed", _descriptor8, this);

          _defineProperty(this, "goTarget", void 0);

          _defineProperty(this, "getCircleScale", void 0);
        }

        //#endregion
        onLoad() {
          // PageControll.instance.pageEvnet.on(PageAction.ChangeTo, this.onMoveCircle, this)
          this.mapButton.set(0, this.btnHome);
          this.mapButton.set(1, this.btnPoint);
          this.mapButton.set(2, this.btnChooeseBall);
          this.mapButton.set(3, this.btnClientInfo);
          this.mapButton.set(4, this.btnSetting);
          this.circleY = -((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.BaseViewHeight / 2) + this.nodeCircle.getComponent(UITransform).height / 2;
        }

        start() {// for (let index = 0; index < this.btnLayout.children.length; index++) {
          //     ButtonMng.addEvent(this, "onMoveCircle", this.getButton(index), index.toString())
          // }
        }

        onMoveCircle(e, customEventData) {
          if (this.currentIndex == Number(customEventData)) return;
          this.currentIndex = Number(customEventData);
          let getX = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.nodeCircle, this.getButton(this.currentIndex).node).x;
          this.goTarget = v3(getX, this.circleY);
          this.startAction();
          (_crd && PageControll === void 0 ? (_reportPossibleCrUseOfPageControll({
            error: Error()
          }), PageControll) : PageControll).instance.pageEvnet.emit((_crd && PageAction === void 0 ? (_reportPossibleCrUseOfPageAction({
            error: Error()
          }), PageAction) : PageAction).ChangeTo, this.currentIndex);
        }

        getButton(index) {
          return this.mapButton.get(index);
        }

        startAction() {
          this.getCircleScale = this.nodeCircle.getScale().x;
          this.actionDic = ActionDic.縮;
          this.isAction = true;
        }

        update(dt) {
          if (this.isAction) {
            switch (this.actionDic) {
              case ActionDic.縮:
                this.getCircleScale = this.getCircleScale - dt * this.speed;

                if (this.getCircleScale < 0) {
                  this.getCircleScale = 0;
                  this.actionDic = ActionDic.放;
                  this.nodeCircle.setPosition(this.goTarget);
                }

                break;

              case ActionDic.放:
                this.getCircleScale = this.getCircleScale + dt * this.speed;

                if (this.getCircleScale > 1) {
                  this.getCircleScale = 1;
                  this.isAction = false;
                }

                break;
            }

            this.nodeCircle.setScale((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.oneSclaeVec3(this.getCircleScale));
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnPoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnChooeseBall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnClientInfo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnSetting", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnLayout", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeCircle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      })), _class2)) || _class));

      (function (ActionDic) {
        ActionDic[ActionDic["\u7E2E"] = 0] = "\u7E2E";
        ActionDic[ActionDic["\u653E"] = 1] = "\u653E";
      })(ActionDic || (ActionDic = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelBottomNavigationBar.js.map