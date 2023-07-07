System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Layout, Node, Prefab, _decorator, DelayTime, AssetType, LobbyStateEvent, AssetMng, ButtonMng, BallData, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, PanelBall;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDelayTime(extras) {
    _reporterNs.report("DelayTime", "../../../../../../Plug/DelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../../../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../../../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../../../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallData(extras) {
    _reporterNs.report("BallData", "../../../../../Model/BallData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../Model/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      DelayTime = _unresolved_2.default;
    }, function (_unresolved_3) {
      AssetType = _unresolved_3.AssetType;
    }, function (_unresolved_4) {
      LobbyStateEvent = _unresolved_4.LobbyStateEvent;
    }, function (_unresolved_5) {
      AssetMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      ButtonMng = _unresolved_6.default;
    }, function (_unresolved_7) {
      BallData = _unresolved_7.default;
    }, function (_unresolved_8) {
      BaseComponent = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2f08z8+GFP0YISvqiICQ0r", "PanelBall", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelBall = (_dec = ccclass('PanelBall'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class2 = (_class3 = (_temp = class PanelBall extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "HorLayout", _descriptor, this);

          _initializerDefineProperty(this, "labelContent", _descriptor2, this);

          _initializerDefineProperty(this, "layoutItem", _descriptor3, this);

          _initializerDefineProperty(this, "ballItem", _descriptor4, this);

          _defineProperty(this, "Halign", 10);

          _defineProperty(this, "Valign", 5);

          _defineProperty(this, "totalCount", 49);

          _defineProperty(this, "mapBallNumber", new Map());

          _defineProperty(this, "isChoose", []);

          _defineProperty(this, "tempChoose", []);

          _defineProperty(this, "MaxCount", 6);

          _defineProperty(this, "isConfirm", void 0);
        }

        onLoad() {
          var _superprop_getOnLoad = () => super.onLoad,
              _this = this;

          return _asyncToGenerator(function* () {
            _superprop_getOnLoad().call(_this);

            (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
              error: Error()
            }), AssetMng) : AssetMng).startLoad();
          })();
        }

        start() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            yield (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
              error: Error()
            }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
              error: Error()
            }), AssetType) : AssetType).Sprite);

            _this2.labelContent.removeAllChildren();

            _this2.HorLayout.removeAllChildren();

            var isEnd = false;

            for (var V = 0; V < _this2.Valign; V++) {
              var layout = instantiate(_this2.layoutItem);

              _this2.HorLayout.addChild(layout);

              for (var H = 1; H <= _this2.Halign; H++) {
                var count = V * _this2.Halign + H;

                if (count > 49) {
                  isEnd = true;
                  break;
                }

                var _node = instantiate(_this2.ballItem);

                var _class = _node.getComponent(_crd && BallData === void 0 ? (_reportPossibleCrUseOfBallData({
                  error: Error()
                }), BallData) : BallData);

                _this2.mapBallNumber.set(count, _class);

                layout.addChild(_node);

                _class.init(count).cancel();

                (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
                  error: Error()
                }), ButtonMng) : ButtonMng).addEvent(_this2, "onChooeseBall", _class.button, count.toString());

                _this2.labelContent.addChild(_class.label.node);
              }
            }

            yield (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
              error: Error()
            }), DelayTime) : DelayTime).getInstance.StartDT(.016);

            for (var index = 0; index < _this2.HorLayout.children.length; index++) {
              //球往上飛所以不能讓他自動排版
              _this2.HorLayout.children[index].getComponent(Layout).enabled = false;
            }
          })();
        }

        onRandomNumber(e, customEventData) {
          this.onResetChooese(null);
          var arr = [];

          while (arr.length < this.MaxCount) {
            var random = 1 + Math.floor(Math.random() * this.totalCount);

            if (arr.indexOf(random) == -1) {
              this.onChooeseBall(null, random.toString());
              arr.push(random);
            }
          }
        }

        onChooeseBall(e, customEventData) {
          if (this.isConfirm) return;
          var convert = Number(customEventData);
          if (this.tempChoose.indexOf(convert) > -1 || this.isChoose.indexOf(convert) > -1 || this.tempChoose.length + this.isChoose.length >= this.MaxCount) return;
          this.tempChoose.push(convert);
          this.mapBallNumber.get(convert).choose();
        }

        onResetChooese(e, customEventData) {
          if (this.isConfirm) return;

          for (var index = 0; index < this.tempChoose.length; index++) {
            this.mapBallNumber.get(this.tempChoose[index]).cancel();
          }

          this.tempChoose = [];
        }

        onConfirmAttack(e, customEventData) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (_this3.isConfirm) return;

            if (_this3.tempChoose.length < _this3.MaxCount) {
              return;
            }

            console.log(_this3.tempChoose);
            var len = _this3.tempChoose.length;

            for (var index = 0; index < len; index++) {
              _this3.isChoose.push(_this3.tempChoose.shift());
            }

            _this3.isChoose.sort();

            console.log(_this3.isChoose);

            for (var _index = 0; _index < _this3.isChoose.length; _index++) {
              _this3.eventEmit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
                error: Error()
              }), LobbyStateEvent) : LobbyStateEvent).BallChooeseAction, _this3.mapBallNumber.get(_this3.isChoose[_index]).node, _index);

              yield (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
                error: Error()
              }), DelayTime) : DelayTime).getInstance.StartDT(.1);
            }

            _this3.tempChoose = [];
            _this3.isConfirm = true;
            /**推波訊息 */
          })();
        }

        reProcessing() {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "HorLayout", [_dec2], {
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
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelBall.js.map