System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, color, Label, Node, Sprite, Tween, tween, Vec3, _decorator, AssetType, AssetMng, BaseComponent, AutoFollow, PublicModel, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, BallData, ColorType, SpirteData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../Manager/AssetMng", _context.meta, extras);
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
      Button = _cc.Button;
      color = _cc.color;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Tween = _cc.Tween;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AssetType = _unresolved_2.AssetType;
    }, function (_unresolved_3) {
      AssetMng = _unresolved_3.default;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      AutoFollow = _unresolved_5.default;
    }, function (_unresolved_6) {
      PublicModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1702YfGMBMWpt3aHtNIBjo", "BallData", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BallData = (_dec = ccclass('BallData'), _dec2 = property(Label), _dec3 = property(Button), _dec4 = property(Sprite), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class BallData extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "button", _descriptor2, this);

          _initializerDefineProperty(this, "spriteBG", _descriptor3, this);

          _initializerDefineProperty(this, "nodeEffect", _descriptor4, this);

          _defineProperty(this, "ballNumber", 0);

          _defineProperty(this, "type", 0);

          _defineProperty(this, "orgV3", void 0);
        }

        init(_ballNumber) {
          // console.log(_ballNumber);
          this.ballNumber = _ballNumber;
          this.node.position = Vec3.ZERO;
          this.type = _ballNumber % 6;
          this.label.addComponent(_crd && AutoFollow === void 0 ? (_reportPossibleCrUseOfAutoFollow({
            error: Error()
          }), AutoFollow) : AutoFollow).setTarget(this.node);
          this.label.string = this.ballNumber.toString();
          this.label.color = color().fromHEX(this.getColor()); // console.log(AssetMng.AssetClass.get(AssetType.Sprite).data.get(this.getBGData()));

          this.spriteBG.spriteFrame = (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite).data.get(this.getBGData());
          this.setEffect(false);
          return this;
        }

        getOrg() {
          this.orgV3 = new Vec3(this.node.position);
        } // reset() {
        // }


        choose() {
          // this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(this.getBGData())
          // this.spriteBG.color = Color.WHITE
          this.node.setScale((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.oneSclaeVec3(1.2)); // let rotai = tween()
          //     .set({ angle: 0 })
          //     .to(5, { angle: -360 })

          tween(this.node).repeatForever(tween().set({
            angle: 0
          }).to(5, {
            angle: -360
          })).start();
        }

        cancel() {
          // this.spriteBG.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(SpirteData.空白)
          // this.spriteBG.color = color().fromHEX(this.getColor())
          this.node.setScale((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.oneSclaeVec3(1));
          this.node.eulerAngles = Vec3.ZERO;
          Tween.stopAllByTarget(this.node);
          this.enabledBall(true);
        }

        backPosition() {
          Tween.stopAllByTarget(this.node);
          console.log(this.node.position);
          this.node.position = this.orgV3;
          console.log(this.node.position, this.orgV3);
        }

        enabledBall(bool) {
          this.spriteBG.color = bool ? color().fromHEX(ColorType.白) : color().fromHEX(ColorType.灰);
        }

        setEffect(bool) {
          this.nodeEffect.active = bool;
        }

        getColor() {
          return ColorType.黑;

          switch (this.type) {
            case 0:
            case 5:
              return ColorType.綠;

            case 1:
            case 2:
              return ColorType.紅;

            case 3:
            case 4:
              return ColorType.藍;
          }
        }

        getBGData() {
          switch (this.type) {
            case 0:
            case 5:
              return SpirteData.綠;

            case 1:
            case 2:
              return SpirteData.紅;

            case 3:
            case 4:
              return SpirteData.藍;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteBG", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeEffect", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      (function (ColorType) {
        ColorType["\u7D05"] = "#FF3D3D";
        ColorType["\u85CD"] = "#334BD3";
        ColorType["\u7DA0"] = "#61BFAD";
        ColorType["\u7070"] = "#797979FD";
        ColorType["\u767D"] = "#FFFFFF";
        ColorType["\u9ED1"] = "#000000";
      })(ColorType || (ColorType = {}));

      (function (SpirteData) {
        SpirteData["\u7D05"] = "Challenge_RedBall";
        SpirteData["\u85CD"] = "Challenge_BlueBall";
        SpirteData["\u7DA0"] = "Challenge_GreenBall";
        SpirteData["\u7A7A\u767D"] = "Challenge_Frame";
      })(SpirteData || (SpirteData = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BallData.js.map