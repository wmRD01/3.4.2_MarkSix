System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Node, Sprite, _decorator, AssetType, LobbyStateEvent, AssetMng, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, PanelPageButton, PageType, OnOffData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AssetType = _unresolved_2.AssetType;
    }, function (_unresolved_3) {
      LobbyStateEvent = _unresolved_3.LobbyStateEvent;
    }, function (_unresolved_4) {
      AssetMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbfe3osw0xNzrWozWQ2NS+T", "PanelPageButton", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelPageButton = (_dec = ccclass('PanelPageButton'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec(_class = (_class2 = (_temp = class PanelPageButton extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "panelRank", _descriptor, this);

          _initializerDefineProperty(this, "panelPoint", _descriptor2, this);

          _initializerDefineProperty(this, "btnRank", _descriptor3, this);

          _initializerDefineProperty(this, "btnPoint", _descriptor4, this);

          _initializerDefineProperty(this, "spriteRank", _descriptor5, this);

          _initializerDefineProperty(this, "spritePoint", _descriptor6, this);
        }

        /**Prefab仔入用 */
        setPanelRank(_node) {
          this.panelRank = _node;
        }

        setPanelPoint(_node) {
          this.panelPoint = _node;
        }

        onEnable() {
          this.panelRank.active = false;
          this.panelPoint.active = false;
          this.onChangePanel(null, PageType.Point.toString());
          this.setEvent((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangePointPage, this.onChangePanel);
        }

        onDisable() {
          this.deletEvent((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangePointPage, this.onChangePanel);
        }

        async onChangePanel(e, customEventData) {
          await (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite); // console.log(customEventData);

          let convert = Number(customEventData); // console.log(this.panelRank.active);
          // console.log(this.panelPoint.active);

          switch (convert) {
            case PageType.Rank:
              if (this.panelRank.active) return;
              this.changeState(this.panelRank, this.spriteRank, true);
              this.changeState(this.panelPoint, this.spritePoint, false);
              break;

            case PageType.Point:
              if (this.panelPoint.active) return;
              this.changeState(this.panelRank, this.spriteRank, false);
              this.changeState(this.panelPoint, this.spritePoint, true);
              break;
          }
        }

        changeState(_node, _sprite, state) {
          _node.active = state;
          let getSprtie = state ? OnOffData.On : OnOffData.Off;
          _sprite.spriteFrame = (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).AssetClass.get((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite).data.get(getSprtie);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panelRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelPoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnRank", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnPoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteRank", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spritePoint", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      (function (PageType) {
        PageType[PageType["Point"] = 0] = "Point";
        PageType[PageType["Rank"] = 1] = "Rank";
      })(PageType || (PageType = {}));

      (function (OnOffData) {
        OnOffData["On"] = "integral_button01";
        OnOffData["Off"] = "integral_button00";
      })(OnOffData || (OnOffData = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelPageButton.js.map