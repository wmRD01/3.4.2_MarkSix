System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Color, color, Label, Sprite, Tween, tween, Vec3, _decorator, AssetType, AssetMng, BaseComponent, LabelAutoFollow, _dec, _class, _temp, _crd, ccclass, property, BallData, ColorType, SpirteData;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLabelAutoFollow(extras) {
    _reporterNs.report("LabelAutoFollow", "./LabelAutoFollow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Color = _cc.Color;
      color = _cc.color;
      Label = _cc.Label;
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
      LabelAutoFollow = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1702YfGMBMWpt3aHtNIBjo", "BallData", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BallData = (_dec = ccclass('BallData'), _dec(_class = (_temp = class BallData extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "label", void 0);

          _defineProperty(this, "button", void 0);

          _defineProperty(this, "spriteBG", void 0);

          _defineProperty(this, "ballNumber", void 0);

          _defineProperty(this, "type", void 0);
        }

        init(_ballNumber) {
          this.ballNumber = _ballNumber;
          this.node.position = Vec3.ZERO;
          this.type = _ballNumber % 6;
          this.spriteBG = this.node.getComponent(Sprite);
          this.button = this.node.getComponent(Button);
          this.label = this.node.children[0].getComponent(Label);
          this.label.addComponent(_crd && LabelAutoFollow === void 0 ? (_reportPossibleCrUseOfLabelAutoFollow({
            error: Error()
          }), LabelAutoFollow) : LabelAutoFollow).setTarget(this.node);
          this.label.string = this.ballNumber.toString();
          this.label.color = color().fromHEX(this.getColor());
          return this;
        } // reset() {
        // }


        choose() {
          this.spriteBG.spriteFrame = (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite).data.get(this.getBGData());
          this.spriteBG.color = Color.WHITE;
          tween(this.node).repeatForever(tween().set({
            angle: 0
          }).to(5, {
            angle: -360
          })).start();
        }

        cancel() {
          this.spriteBG.spriteFrame = (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite).data.get(SpirteData.空白);
          this.spriteBG.color = color().fromHEX(this.getColor());
          Tween.stopAllByTarget(this.node);
        }

        getColor() {
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

      }, _temp)) || _class));

      (function (ColorType) {
        ColorType["\u7D05"] = "#FF3D3D";
        ColorType["\u85CD"] = "#334BD3";
        ColorType["\u7DA0"] = "#61BFAD";
        ColorType["\u7070"] = "#969696";
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