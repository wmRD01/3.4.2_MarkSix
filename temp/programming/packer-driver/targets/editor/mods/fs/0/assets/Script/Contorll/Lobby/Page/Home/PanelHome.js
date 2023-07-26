System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, Label, UITransform, _decorator, NotificationType, LobbyStateEvent, PageAction, EventMng, BaseComponent, PublicModel, RequestGPG, Player, PublicData, Marquee, Timer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _temp, _crd, ccclass, property, PanelHome;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../../../../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageAction(extras) {
    _reporterNs.report("PageAction", "../../../../Enum/PageAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../../../../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../../../Api/GPGAPI/RequestGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../../../../Model/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponseGPG(extras) {
    _reporterNs.report("ResponseGPG", "../../../Api/GPGAPI/ResponseGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../../../Model/PublicData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      NotificationType = _unresolved_2.NotificationType;
    }, function (_unresolved_3) {
      LobbyStateEvent = _unresolved_3.LobbyStateEvent;
    }, function (_unresolved_4) {
      PageAction = _unresolved_4.PageAction;
    }, function (_unresolved_5) {
      EventMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      BaseComponent = _unresolved_6.default;
    }, function (_unresolved_7) {
      PublicModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      RequestGPG = _unresolved_8.RequestGPG;
    }, function (_unresolved_9) {
      Player = _unresolved_9.default;
    }, function (_unresolved_10) {
      PublicData = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8492+r6GtLBIfPM9astol5", "PanelHome", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelHome = (_dec = ccclass('PanelHome'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Button), _dec(_class = (_class2 = (_temp = class PanelHome extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelTime", _descriptor, this);

          _initializerDefineProperty(this, "labelCurrentTitle", _descriptor2, this);

          _initializerDefineProperty(this, "labelCurrentDrawIssueID", _descriptor3, this);

          _initializerDefineProperty(this, "labelLastDrawCode", _descriptor4, this);

          _initializerDefineProperty(this, "labelLastDrawIssueID", _descriptor5, this);

          _initializerDefineProperty(this, "labelLastDrawDay", _descriptor6, this);

          _initializerDefineProperty(this, "labelMarquee", _descriptor7, this);

          _initializerDefineProperty(this, "labelMonth", _descriptor8, this);

          _initializerDefineProperty(this, "labelPointTitle", _descriptor9, this);

          _initializerDefineProperty(this, "labelMyPoint", _descriptor10, this);

          _initializerDefineProperty(this, "labelDetail", _descriptor11, this);

          _initializerDefineProperty(this, "labelGiftTitle1", _descriptor12, this);

          _initializerDefineProperty(this, "labelGiftTitle2", _descriptor13, this);

          _initializerDefineProperty(this, "btnMoreDraw", _descriptor14, this);

          _initializerDefineProperty(this, "btnPointDetail", _descriptor15, this);

          _initializerDefineProperty(this, "btnGoChooese", _descriptor16, this);

          _defineProperty(this, "marquee", void 0);

          _defineProperty(this, "timer", void 0);
        }

        onLoad() {
          this.marquee = this.labelMarquee.addComponent(Marquee);
          this.timer = this.labelTime.addComponent(Timer);
        }

        async onEnable() {
          await this.onDrawHistory();
          await this.onDrawUpcoming();
        }

        start() {
          this.marquee.startMarquee("HIHIHI"); // this.timer.setTime(100)
        }

        onDisable() {}

        async onDrawHistory() {
          return new Promise(async (resolve, reject) => {
            const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.DrawHistory();
            body.top = "1";
            body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.DrawHistory);
            let convert = new URLSearchParams(body).toString();
            await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).fetchData(`${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).APIUrl.playAPI}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.DrawHistory}?${convert}`, this.responseDrawHistory.bind(this));
            resolve();
          });
        }

        async onDrawUpcoming() {
          return new Promise(async (resolve, reject) => {
            const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.DrawUpcoming();
            body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertMD5((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgApi);
            let convert = new URLSearchParams(body).toString();
            await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).fetchData(`${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).APIUrl.playAPI}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.DrawUpcoming}?${convert}`, this.responseDrawUpcoming.bind(this));
            resolve();
          });
        }

        responseDrawHistory(response) {
          let getDate = response.data[0];
          this.labelLastDrawIssueID.string = `第${getDate.issueID.toString()}期`;
          /**不需要week日 */
          // console.log(PublicModel.getInstance.convertDate(getDate.openDate).split("(")[0]);

          let getday = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.convertDateDay(getDate.openDate).split("(")[0];
          this.labelLastDrawDay.string = `${getday}開獎結果`;

          for (let index = 0; index < getDate.drawCode.length; index++) {
            if (index == 6) return;
            this.labelLastDrawCode[index].string = getDate.drawCode[index];
          }
        }

        responseDrawUpcoming(response) {
          let getDate = response.data[0];
          this.labelCurrentDrawIssueID.string = `第${getDate.issueID.toString()}期`;
          this.timer.setTimeNoTimer((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.convertDateTime(getDate.openDate));
          console.log(response);
        }

        onGoPage(e, customEventData) {
          let split = customEventData.split('-');
          if (isNaN(Number(split[0]))) console.error("錯誤啦!!!是不是忘記設定");
          this.eventEmit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangePointPage, null, split[1]);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Page).emit((_crd && PageAction === void 0 ? (_reportPossibleCrUseOfPageAction({
            error: Error()
          }), PageAction) : PageAction).ChangeTo, Number(split[0]));
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelCurrentTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelCurrentDrawIssueID", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelLastDrawCode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelLastDrawIssueID", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelLastDrawDay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelMarquee", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labelMonth", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "labelPointTitle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "labelMyPoint", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "labelDetail", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "labelGiftTitle1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "labelGiftTitle2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btnMoreDraw", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnPointDetail", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btnGoChooese", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      Marquee = class Marquee extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "bindLabel", void 0);

          _defineProperty(this, "leftBorder", void 0);

          _defineProperty(this, "rightBorder", void 0);

          _defineProperty(this, "isAction", void 0);

          _defineProperty(this, "speed", 100);
        }

        onLoad() {
          this.bindLabel = this.node.getComponent(Label);
          this.rightBorder = this.bindLabel.node.parent.getComponent(UITransform).width + 10; //額外預留
        }

        startMarquee(message) {
          this.bindLabel.string = message;
          this.bindLabel.updateRenderData(true);
          this.leftBorder = -(this.bindLabel.getComponent(UITransform).width + 10);
          this.resetPos();
          this.isAction = true;
        }

        update(dt) {
          if (this.isAction) {
            let currentPos = this.bindLabel.node.getPosition();

            if (currentPos.x < this.leftBorder) {
              this.resetPos();
              currentPos = this.bindLabel.node.getPosition();
            } // console.log(currentPos.x);
            // console.log(currentPos.x - (dt * this.speed));
            // 


            this.bindLabel.node.setPosition(currentPos.x - dt * this.speed, currentPos.y, currentPos.z);
          }
        }

        resetPos() {
          let currentPos = this.bindLabel.node.getPosition();
          this.bindLabel.node.setPosition(this.rightBorder, currentPos.y, currentPos.z);
        }

      };
      Timer = class Timer extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "bindLabel", void 0);

          _defineProperty(this, "countTime", void 0);

          _defineProperty(this, "isAction", void 0);
        }

        onLoad() {
          this.bindLabel = this.node.getComponent(Label);
          this.bindLabel.string = "";
        }

        reset() {
          this.countTime = 0;
          this.isAction = false;
        }

        setTimeNoTimer(str) {
          this.bindLabel.string = str;
        }

        setTime(num) {
          this.countTime = num;
          this.isAction = true;
        }

        update(dt) {
          if (this.isAction) {
            this.countTime -= dt;
            if (this.countTime < 0) this.reset();
            this.bindLabel.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.formatSecond(this.countTime, true);
          }
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelHome.js.map