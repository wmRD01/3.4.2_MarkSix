System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Label, Sprite, _decorator, AssetType, AssetMng, MusicMng, BaseComponent, PublicModel, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ItemSetting, Type, Active;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicMng(extras) {
    _reporterNs.report("MusicMng", "../../../../Manager/MusicMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AssetType = _unresolved_2.AssetType;
    }, function (_unresolved_3) {
      AssetMng = _unresolved_3.default;
    }, function (_unresolved_4) {
      MusicMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      PublicModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7f9bAUKadFpqderE4aikLB", "ItemSetting", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ItemSetting = (_dec = ccclass('ItemSetting'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = (_temp = class ItemSetting extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spriteBG", _descriptor, this);

          _initializerDefineProperty(this, "spriteIcon", _descriptor2, this);

          _initializerDefineProperty(this, "labelName", _descriptor3, this);

          _initializerDefineProperty(this, "lableState", _descriptor4, this);

          _defineProperty(this, "nowState", Active.on);

          _defineProperty(this, "type", void 0);
        }

        init() {
          this.type = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.getEnumValueFromString(this.node.name.split("Setting")[0], Type);
          console.log(this.type);

          switch (this.type) {
            case Type.Music:
              this.labelName.string = "音樂";
              (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
                error: Error()
              }), MusicMng) : MusicMng).getMusicState() ? this.nowState = Active.on : this.nowState = Active.off;
              break;

            case Type.Effect:
              this.labelName.string = "音效";
              (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
                error: Error()
              }), MusicMng) : MusicMng).getEffectState() ? this.nowState = Active.on : this.nowState = Active.off;
              break;

            case Type.Notification:
              this.labelName.string = "推波"; // MusicMng.getMusicState() ? this.lableState.string = Active.on : this.lableState.string = Active.off

              break;
          }

          this.activeChange();
        }

        activeChange() {
          this.lableState.string = this.nowState;
          var getSprite = this.nowState == Active.on ? "Setup_button01" : "Setup_button00";
          console.log((_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite).data.get(getSprite));
          this.spriteBG.spriteFrame = (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite).data.get(getSprite);
        }

        onChangeState(e, customEventData) {
          switch (this.type) {
            case Type.Music:
              (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
                error: Error()
              }), MusicMng) : MusicMng).switchMusic();
              (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
                error: Error()
              }), MusicMng) : MusicMng).getMusicState() ? this.nowState = Active.on : this.nowState = Active.off;
              break;

            case Type.Effect:
              (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
                error: Error()
              }), MusicMng) : MusicMng).switchEffect();
              (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
                error: Error()
              }), MusicMng) : MusicMng).getEffectState() ? this.nowState = Active.on : this.nowState = Active.off;
              break;

            case Type.Notification:
              this.lableState.string == Active.on ? this.nowState = Active.off : this.nowState = Active.on; // MusicMng.getMusicState() ? this.lableState.string = Active.on : this.lableState.string = Active.off

              break;
          }

          this.activeChange();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteBG", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lableState", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      (function (Type) {
        Type[Type["Music"] = 0] = "Music";
        Type[Type["Effect"] = 1] = "Effect";
        Type[Type["Notification"] = 2] = "Notification";
      })(Type || (Type = {}));

      (function (Active) {
        Active["on"] = "turn on";
        Active["off"] = "turn off";
      })(Active || (Active = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemSetting.js.map