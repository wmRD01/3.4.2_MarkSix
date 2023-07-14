System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Node, Sprite, UITransform, v3, _decorator, AssetType, PageAction, AssetMng, BaseComponent, PublicData, PublicModel, PageControll, Page, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, PanelBottomNavigationBar, ActionDic;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageAction(extras) {
    _reporterNs.report("PageAction", "../../Enum/PageAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageMenu(extras) {
    _reporterNs.report("PageMenu", "../../Enum/PageMenu", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../Manager/AssetMng", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AssetType = _unresolved_2.AssetType;
    }, function (_unresolved_3) {
      PageAction = _unresolved_3.PageAction;
    }, function (_unresolved_4) {
      AssetMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      PublicData = _unresolved_6.default;
    }, function (_unresolved_7) {
      PublicModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      PageControll = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce6ee7sxFhEtoMIXYbiVETA", "PanelBottomNavigationBar", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelBottomNavigationBar = (_dec = ccclass('PanelBottomNavigationBar'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class PanelBottomNavigationBar extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btns", _descriptor, this);

          _initializerDefineProperty(this, "btnLayout", _descriptor2, this);

          _initializerDefineProperty(this, "nodeCircle", _descriptor3, this);

          _defineProperty(this, "circleY", void 0);

          _defineProperty(this, "mapButton", new Map());

          _defineProperty(this, "currentIndex", -1);

          _defineProperty(this, "lastIndex", -1);

          _defineProperty(this, "isAction", false);

          _defineProperty(this, "actionDic", ActionDic.縮);

          _initializerDefineProperty(this, "speed", _descriptor4, this);

          _defineProperty(this, "goTarget", void 0);

          _defineProperty(this, "getCircleScale", void 0);
        }

        //#endregion
        onLoad() {
          var _superprop_getOnLoad = () => super.onLoad,
              _this = this;

          return _asyncToGenerator(function* () {
            _superprop_getOnLoad().call(_this);

            yield (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
              error: Error()
            }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
              error: Error()
            }), AssetType) : AssetType).Sprite); // PageControll.instance.pageEvnet.on(PageAction.ChangeTo, this.onMoveCircle, this)

            for (var index = 0; index < _this.btns.length; index++) {
              var _page = new Page(_this.btns[index], index);

              _page.change(false);

              _this.mapButton.set(index, _page);
            }

            _this.circleY = -((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.BaseViewHeight / 2) + _this.nodeCircle.getComponent(UITransform).height / 2;
          })();
        }

        onEnable() {
          (_crd && PageControll === void 0 ? (_reportPossibleCrUseOfPageControll({
            error: Error()
          }), PageControll) : PageControll).instance.pageEvnet.on((_crd && PageAction === void 0 ? (_reportPossibleCrUseOfPageAction({
            error: Error()
          }), PageAction) : PageAction).ChangeTo, this.onEventChangeTo, this);
        }

        onDisable() {
          (_crd && PageControll === void 0 ? (_reportPossibleCrUseOfPageControll({
            error: Error()
          }), PageControll) : PageControll).instance.pageEvnet.off((_crd && PageAction === void 0 ? (_reportPossibleCrUseOfPageAction({
            error: Error()
          }), PageAction) : PageAction).ChangeTo, this.onEventChangeTo, this);
        }

        onEventChangeTo(index) {
          this.onMoveCircle(null, index.toString());
        }

        onMoveCircle(e, customEventData) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            yield (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
              error: Error()
            }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
              error: Error()
            }), AssetType) : AssetType).Sprite);
            if (_this2.currentIndex == Number(customEventData)) return;
            _this2.lastIndex = _this2.currentIndex;
            _this2.currentIndex = Number(customEventData);
            var getX = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(_this2.nodeCircle, _this2.getButton(_this2.currentIndex).node).x;
            _this2.goTarget = v3(getX, _this2.circleY);

            _this2.startAction();

            (_crd && PageControll === void 0 ? (_reportPossibleCrUseOfPageControll({
              error: Error()
            }), PageControll) : PageControll).instance.pageEvnet.emit((_crd && PageAction === void 0 ? (_reportPossibleCrUseOfPageAction({
              error: Error()
            }), PageAction) : PageAction).ChangeTo, _this2.currentIndex);
          })();
        }

        getButton(index) {
          return this.mapButton.get(index).getButton();
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
                  /**初始畫會是-1 就不做事情 */

                  if (this.mapButton.has(this.lastIndex)) this.mapButton.get(this.lastIndex).change(false);
                  this.mapButton.get(this.currentIndex).change(true);
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

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btns", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeCircle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class));

      (function (ActionDic) {
        ActionDic[ActionDic["\u7E2E"] = 0] = "\u7E2E";
        ActionDic[ActionDic["\u653E"] = 1] = "\u653E";
      })(ActionDic || (ActionDic = {}));

      Page = class Page {
        constructor(_btn, _type) {
          _defineProperty(this, "button", void 0);

          _defineProperty(this, "BG", void 0);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "spriteData", ["icon_home", "icon_rank", "icon_bet", "icon_user", "icon_setting"]);

          this.button = _btn;
          this.BG = this.button.getComponentInChildren(Sprite);
          this.type = _type;
        }

        change(bool) {
          var sprite = this.spriteData[this.type];
          if (bool) sprite = sprite + "_act";
          this.BG.spriteFrame = (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite).data.get(sprite);
        }

        getButton() {
          return this.button;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelBottomNavigationBar.js.map