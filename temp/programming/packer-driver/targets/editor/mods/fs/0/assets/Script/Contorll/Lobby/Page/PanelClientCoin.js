System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Label, _decorator, CommandType, GameStateEvent, WebSocketEvent, ButtonMng, BaseComponent, Player, PublicModel, gonm, GameData, CoinType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PanelClientCoin;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateEvent(extras) {
    _reporterNs.report("GameStateEvent", "../../Enum/GameStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../../Model/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgonm(extras) {
    _reporterNs.report("gonm", "../Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Model/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinType(extras) {
    _reporterNs.report("CoinType", "../../Enum/CoinType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CommandType = _unresolved_2.CommandType;
    }, function (_unresolved_3) {
      GameStateEvent = _unresolved_3.GameStateEvent;
    }, function (_unresolved_4) {
      WebSocketEvent = _unresolved_4.WebSocketEvent;
    }, function (_unresolved_5) {
      ButtonMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      BaseComponent = _unresolved_6.default;
    }, function (_unresolved_7) {
      Player = _unresolved_7.default;
    }, function (_unresolved_8) {
      PublicModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      gonm = _unresolved_9.gonm;
    }, function (_unresolved_10) {
      GameData = _unresolved_10.default;
    }, function (_unresolved_11) {
      CoinType = _unresolved_11.CoinType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9ac2hOD19AybTH5/eg6xrx", "PanelClientCoin", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelClientCoin = (_dec = ccclass('PanelClientCoin'), _dec2 = property(Label), _dec3 = property(Button), _dec(_class = (_class2 = (_temp = class PanelClientCoin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelCoin", _descriptor, this);

          _initializerDefineProperty(this, "btnUpdataCoin", _descriptor2, this);
        }

        onEnable() {
          // this.setEvent(GameEvent.ResetView, this.updateCoin)
          this.setEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdateCoin, this.updateCoin);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onUpdataCoin", this.btnUpdataCoin);
        }

        start() {
          // if (window.isPhone)
          //     this.phoneInit()
          this.adaptiveControlFrame();
        }

        onDisable() {
          this.deletEvent((_crd && GameStateEvent === void 0 ? (_reportPossibleCrUseOfGameStateEvent({
            error: Error()
          }), GameStateEvent) : GameStateEvent).UpdateCoin, this.updateCoin);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).removeEvent(this.btnUpdataCoin, "onUpdataCoin");
        }

        updateCoin(num) {
          // console.warn("金錢更新",num);
          if (isNaN(Number(num))) this.labelCoin.string = "";else {
            console.warn(num);
            console.warn((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.changeKMB(num, 1));
            this.labelCoin.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.changeKMB(num, 1);
            /**偷吃步作法，先這樣了等有時間在優化 */

            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).getInstance.coinType == (_crd && CoinType === void 0 ? (_reportPossibleCrUseOfCoinType({
              error: Error()
            }), CoinType) : CoinType).Gold ? (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.pointGold = num : (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.pointSilver = num;
          }
        }

        onUpdataCoin(e, customEventData) {
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gonm, new (_crd && gonm === void 0 ? (_reportPossibleCrUseOfgonm({
            error: Error()
          }), gonm) : gonm)());
        }

        adaptiveControlFrame() {
          if (window.isPhone) {
            this.node.setPosition(0, -179.41); // if (!PublicData.getInstance.isLandscape) {
            //     this.node.setScale(3.01, 3.01, 3.01)
            //     this.node.setPosition(356, 416)
            // }
            // else {
            //     this.node.setScale(Vec3.ONE)
            //     this.node.setPosition(-715.5, -139)
            // }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelCoin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnUpdataCoin", [_dec3], {
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
//# sourceMappingURL=PanelClientCoin.js.map