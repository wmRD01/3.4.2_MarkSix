System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Layout, Node, Prefab, _decorator, DelayTime, AssetType, CommandType, LobbyStateEvent, WebSocketEvent, AssetMng, ButtonMng, BallData, BaseComponent, bet, _dec, _dec2, _dec3, _dec4, _dec5, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, PanelBall;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDelayTime(extras) {
    _reporterNs.report("DelayTime", "../../../../../Plug/DelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../../../../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../../../../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallData(extras) {
    _reporterNs.report("BallData", "../../../../Model/BallData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbet(extras) {
    _reporterNs.report("bet", "../../../Api/SendCommand", _context.meta, extras);
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
      CommandType = _unresolved_4.CommandType;
    }, function (_unresolved_5) {
      LobbyStateEvent = _unresolved_5.LobbyStateEvent;
    }, function (_unresolved_6) {
      WebSocketEvent = _unresolved_6.WebSocketEvent;
    }, function (_unresolved_7) {
      AssetMng = _unresolved_7.default;
    }, function (_unresolved_8) {
      ButtonMng = _unresolved_8.default;
    }, function (_unresolved_9) {
      BallData = _unresolved_9.default;
    }, function (_unresolved_10) {
      BaseComponent = _unresolved_10.default;
    }, function (_unresolved_11) {
      bet = _unresolved_11.bet;
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
        constructor(...args) {
          super(...args);

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

          _defineProperty(this, "isFullBall", void 0);

          _defineProperty(this, "websocket", void 0);
        }

        async start() {
          await (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite);
          this.labelContent.removeAllChildren();
          this.HorLayout.removeAllChildren();
          let isEnd = false;

          for (let V = 0; V < this.Valign; V++) {
            let layout = instantiate(this.layoutItem);
            this.HorLayout.addChild(layout);

            for (let H = 1; H <= this.Halign; H++) {
              let count = V * this.Halign + H;

              if (count > 49) {
                isEnd = true;
                break;
              }

              let _node = instantiate(this.ballItem);

              let _class = _node.getComponent(_crd && BallData === void 0 ? (_reportPossibleCrUseOfBallData({
                error: Error()
              }), BallData) : BallData);

              this.mapBallNumber.set(count, _class);
              layout.addChild(_node);

              _class.init(count).cancel();

              (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
                error: Error()
              }), ButtonMng) : ButtonMng).addEvent(this, "onChooeseBall", _class.button, count.toString());
              this.labelContent.addChild(_class.label.node);
            }
          }

          await (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
            error: Error()
          }), DelayTime) : DelayTime).getInstance.StartDT(.016);

          for (let index = 0; index < this.HorLayout.children.length; index++) {
            //球往上飛所以不能讓他自動排版
            this.HorLayout.children[index].getComponent(Layout).enabled = false;
          }

          this.mapBallNumber.forEach(element => {
            element.getOrg();
          });
        }

        onRandomNumber(e, customEventData) {
          this.onResetChooese(null);
          let arr = [];

          while (arr.length < this.MaxCount) {
            let random = 1 + Math.floor(Math.random() * this.totalCount);

            if (arr.indexOf(random) == -1) {
              this.onChooeseBall(null, random.toString());
              arr.push(random);
            }
          }
        }

        onChooeseBall(e, customEventData) {
          if (this.isConfirm) return;
          let convert = Number(customEventData);

          if (this.tempChoose.indexOf(convert) > -1) {
            this.tempChoose.splice(this.tempChoose.indexOf(convert), 1)[0];
            this.mapBallNumber.get(convert).cancel();
            if (this.isFullBall) this.fullResetBallColor(true);
            return;
          }

          if (this.tempChoose.length >= this.MaxCount) return;
          this.tempChoose.push(convert);
          this.mapBallNumber.get(convert).choose();

          if (this.tempChoose.length === this.MaxCount) {
            this.isFullBall = true;
            this.mapBallNumber.forEach(element => {
              //代表沒被選種
              if (this.tempChoose.indexOf(element.ballNumber) == -1) {
                element.enabledBall(false);
              }
            });
          }
        }

        onTestReset(e, customEventData) {
          this.isChoose = [];
          this.tempChoose = [];
          /**選擇球數最大值 */

          this.MaxCount = 6;
          this.isConfirm = false;
          this.isFullBall = false;
          this.mapBallNumber.forEach(element => {
            element.cancel();
            element.backPosition();
          });
        }

        onResetChooese(e, customEventData) {
          if (this.isConfirm) return;

          if (this.tempChoose.length === this.MaxCount) {
            this.mapBallNumber.forEach(element => {
              element.cancel();
            });
          } else {
            for (let index = 0; index < this.tempChoose.length; index++) {
              this.mapBallNumber.get(this.tempChoose[index]).cancel();
            }
          }

          this.tempChoose = [];
        }

        async onConfirmAttack(e, customEventData) {
          if (this.isConfirm) return;

          if (this.tempChoose.length < this.MaxCount) {
            return;
          }

          let len = this.tempChoose.length;

          for (let index = 0; index < len; index++) {
            this.isChoose.push(this.tempChoose.shift());
          }

          this.isChoose.sort((a, b) => a - b);

          for (let index = 0; index < this.isChoose.length; index++) {
            this.eventEmit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
              error: Error()
            }), LobbyStateEvent) : LobbyStateEvent).BallChooeseAction, this.mapBallNumber.get(this.isChoose[index]).node, index);
            await (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
              error: Error()
            }), DelayTime) : DelayTime).getInstance.StartDT(.1);
          }

          const _bet = new (_crd && bet === void 0 ? (_reportPossibleCrUseOfbet({
            error: Error()
          }), bet) : bet)();

          _bet.betCode = this.isChoose;
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).bet, _bet);
          /**打leo的com */

          this.tempChoose = [];
          this.isConfirm = true;
          /**推波訊息 */
        }

        fullResetBallColor(bool) {
          this.mapBallNumber.forEach(element => {
            element.enabledBall(bool);
          });
          this.isFullBall = !bool;
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