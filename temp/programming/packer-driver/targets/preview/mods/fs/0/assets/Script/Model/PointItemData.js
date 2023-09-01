System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Label, Node, Prefab, Size, UITransform, _decorator, BallData, BaseComponent, AutoFollow, PublicModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, PointItemData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBallData(extras) {
    _reporterNs.report("BallData", "./BallData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoFollow(extras) {
    _reporterNs.report("AutoFollow", "./AutoFollow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "./PublicModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BallData = _unresolved_2.default;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      AutoFollow = _unresolved_4.default;
    }, function (_unresolved_5) {
      PublicModel = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f131dV6MU9Isa+HHgysbVXA", "PointItemData", undefined);

      ({
        ccclass,
        property
      } = _decorator); //TODO 缺乏優化DrawCode

      _export("default", PointItemData = (_dec = ccclass('PointItemData'), _dec2 = property(UITransform), _dec3 = property(UITransform), _dec4 = property(Prefab), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class2 = (_class3 = (_temp = class PointItemData extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ui", _descriptor, this);

          _initializerDefineProperty(this, "UIbg", _descriptor2, this);

          _initializerDefineProperty(this, "prefabBallItem", _descriptor3, this);

          _initializerDefineProperty(this, "labelMyChooeseNumber", _descriptor4, this);

          _initializerDefineProperty(this, "labelOpenNumberTitle", _descriptor5, this);

          _initializerDefineProperty(this, "labelPoint", _descriptor6, this);

          _defineProperty(this, "maxNumberCount", 6);

          _initializerDefineProperty(this, "labelDayData", _descriptor7, this);

          _initializerDefineProperty(this, "openDrawCodeLayout", _descriptor8, this);

          _initializerDefineProperty(this, "clientPointLayout", _descriptor9, this);

          _initializerDefineProperty(this, "specialBallItem", _descriptor10, this);

          _defineProperty(this, "labelContent", void 0);

          _defineProperty(this, "outlineContent", void 0);

          _defineProperty(this, "drawCode", []);

          _defineProperty(this, "itemSize", void 0);
        }

        onLoad() {
          this.clientPointLayout.removeAllChildren();
          this.openDrawCodeLayout.removeAllChildren();
          this.ui = this.node.getComponent(UITransform);
          this.itemSize = new Size(this.UIbg.contentSize.width, this.UIbg.contentSize.height);
          this.itemState(false);
        }

        setLabelContent(_node) {
          this.labelContent = _node;
          return this;
        }

        setOutlineContent(_node) {
          this.outlineContent = _node;
          return this;
        }
        /**
         * 
         * @param day 日期 
         * @param issueID 期號
         */


        setDayData(day, issueID) {
          this.labelDayData.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.convertDateDay(day) + " \u7B2C" + issueID.toString() + "\u671F";
          this.labelDayData.addComponent(_crd && AutoFollow === void 0 ? (_reportPossibleCrUseOfAutoFollow({
            error: Error()
          }), AutoFollow) : AutoFollow).createNewTarget();
          this.labelContent.addChild(this.labelDayData.node);
          return this;
        }

        setOpenNumber(numbers) {
          this.drawCode = numbers;

          for (var index = 0; index < numbers.length; index++) {
            var _node = void 0;

            if (index == this.maxNumberCount) _node = this.specialBallItem;else {
              _node = instantiate(this.prefabBallItem);

              _node.setScale((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
                error: Error()
              }), PublicModel) : PublicModel).getInstance.oneSclaeVec3(.6));

              this.openDrawCodeLayout.addChild(_node);
            }

            var _class = _node.getComponent(_crd && BallData === void 0 ? (_reportPossibleCrUseOfBallData({
              error: Error()
            }), BallData) : BallData);

            _class.init(Number(numbers[index]));

            this.labelContent.addChild(_class.label.node);
          }

          return this;
        }

        setSelfNumber(numbers) {
          if (this.clientPointLayout.children.length >= this.maxNumberCount) return;
          this.itemState(true);

          for (var index = 0; index < numbers.length; index++) {
            var _node = instantiate(this.prefabBallItem);

            this.clientPointLayout.addChild(_node);

            var _class = _node.getComponent(_crd && BallData === void 0 ? (_reportPossibleCrUseOfBallData({
              error: Error()
            }), BallData) : BallData);

            _class.init(numbers[index]);

            this.labelContent.addChild(_class.label.node);

            if (this.drawCode[index].indexOf(numbers[index].toString()) != -1) {
              _class.setEffect(true);

              _class.changeEffectColor();
            }
          }
        }

        setScore(num) {
          this.labelPoint.string = "+" + num.toString();
        }

        init() {
          this.labelOpenNumberTitle.addComponent(_crd && AutoFollow === void 0 ? (_reportPossibleCrUseOfAutoFollow({
            error: Error()
          }), AutoFollow) : AutoFollow).createNewTarget();
          this.labelContent.addChild(this.labelOpenNumberTitle.node);
          this.labelMyChooeseNumber.addComponent(_crd && AutoFollow === void 0 ? (_reportPossibleCrUseOfAutoFollow({
            error: Error()
          }), AutoFollow) : AutoFollow).createNewTarget();
          this.outlineContent.addChild(this.labelMyChooeseNumber.node);
          this.labelPoint.string = "+0";
          this.labelPoint.addComponent(_crd && AutoFollow === void 0 ? (_reportPossibleCrUseOfAutoFollow({
            error: Error()
          }), AutoFollow) : AutoFollow).createNewTarget();
          this.labelContent.addChild(this.labelPoint.node);
          return this;
        }

        itemState(bool) {
          if (bool) {
            console.log(this.itemSize.height);
            this.ui.setContentSize(this.itemSize);
            this.UIbg.setContentSize(this.itemSize);
          } else {
            var halfSize = new Size(this.itemSize.width, this.itemSize.height / 2);
            this.ui.setContentSize(halfSize);
            this.UIbg.setContentSize(halfSize);
          }

          this.clientPointLayout.active = bool;
          this.labelMyChooeseNumber.node.active = bool;
        }
        /**測試用 */


        randomBall() {
          return 1 + Math.floor(Math.random() * 49);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "ui", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "UIbg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "prefabBallItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "labelMyChooeseNumber", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "labelOpenNumberTitle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "labelPoint", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "labelDayData", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "openDrawCodeLayout", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "clientPointLayout", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "specialBallItem", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PointItemData.js.map