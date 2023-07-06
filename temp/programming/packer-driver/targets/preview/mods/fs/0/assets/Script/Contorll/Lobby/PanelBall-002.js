System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Label, Node, Prefab, _decorator, AssetType, AssetMng, ButtonMng, BallData, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, PanelBall;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallData(extras) {
    _reporterNs.report("BallData", "../../Model/BallData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AssetType = _unresolved_2.AssetType;
    }, function (_unresolved_3) {
      AssetMng = _unresolved_3.default;
    }, function (_unresolved_4) {
      ButtonMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      BallData = _unresolved_5.default;
    }, function (_unresolved_6) {
      BaseComponent = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3bf0cjw0PVDMa6JG41BhasR", "PanelBall-002", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelBall = (_dec = ccclass('PanelBall'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Label), _dec(_class2 = (_class3 = (_temp = class PanelBall extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spriteLayout", _descriptor, this);

          _initializerDefineProperty(this, "labelContent", _descriptor2, this);

          _initializerDefineProperty(this, "layoutItem", _descriptor3, this);

          _initializerDefineProperty(this, "ballItem", _descriptor4, this);

          _defineProperty(this, "Halign", 7);

          _defineProperty(this, "Valign", 7);

          _defineProperty(this, "totalCount", 49);

          _defineProperty(this, "mapBallNumber", new Map());

          _defineProperty(this, "isChoose", []);

          _defineProperty(this, "tempChoose", []);

          _defineProperty(this, "MaxCount", 6);

          _defineProperty(this, "isConfirm", void 0);

          _initializerDefineProperty(this, "labelChooeseData", _descriptor5, this);
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
              error: Error()
            }), AssetMng) : AssetMng).startLoad();
            yield (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
              error: Error()
            }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
              error: Error()
            }), AssetType) : AssetType).Sprite);

            _this.labelContent.removeAllChildren();

            _this.spriteLayout.removeAllChildren();

            _this.labelChooeseData.string = "\u5DF2\u9078\u64C7 0 / " + _this.MaxCount + " \u500B\u6578\u5B57";

            for (var V = 0; V < _this.Valign; V++) {
              var layout = instantiate(_this.layoutItem);

              _this.spriteLayout.addChild(layout);

              for (var H = 1; H <= _this.Halign; H++) {
                var count = V * _this.Halign + H;
                var temp = instantiate(_this.ballItem);

                var _class = temp.addComponent(_crd && BallData === void 0 ? (_reportPossibleCrUseOfBallData({
                  error: Error()
                }), BallData) : BallData);

                _this.mapBallNumber.set(count, _class);

                layout.addChild(temp);

                _class.init(count).cancel();

                (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
                  error: Error()
                }), ButtonMng) : ButtonMng).addEvent(_this, "onChooeseBall", _class.button, count.toString());

                _this.labelContent.addChild(_class.label.node);
              }
            }
          })();
        }

        onChooeseBall(e, customEventData) {
          if (this.isConfirm) return;
          var convert = Number(customEventData);
          if (this.tempChoose.indexOf(convert) > -1 || this.isChoose.indexOf(convert) > -1 || this.tempChoose.length + this.isChoose.length >= this.MaxCount) return;
          this.tempChoose.push(convert);
          this.mapBallNumber.get(convert).choose();
          this.labelChooeseData.string = "\u5DF2\u9078\u64C7 " + this.tempChoose.length + " / " + this.MaxCount + " \u500B\u6578\u5B57";
        }

        onResetChooese(e, customEventData) {
          if (this.isConfirm) return;

          for (var index = 0; index < this.tempChoose.length; index++) {
            this.mapBallNumber.get(this.tempChoose[index]).cancel();
          }

          this.tempChoose = [];
          this.labelChooeseData.string = "\u5DF2\u9078\u64C7 0 / " + this.MaxCount + " \u500B\u6578\u5B57";
        }

        onConfirmAttack(e, customEventData) {
          if (this.isConfirm) return;

          if (this.tempChoose.length < this.MaxCount) {
            return;
          }

          for (var index = 0; index < this.tempChoose.length; index++) {
            this.isChoose.push(this.tempChoose.shift());
          }

          this.tempChoose = [];
          this.isConfirm = true;
          /**推波訊息 */
        }

        onRandemChooese(e, customEventData) {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "spriteLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "labelContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "layoutItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "ballItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "labelChooeseData", [_dec6], {
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
//# sourceMappingURL=PanelBall-002.js.map