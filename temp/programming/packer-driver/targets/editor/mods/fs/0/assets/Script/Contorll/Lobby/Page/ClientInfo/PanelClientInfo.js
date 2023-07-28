System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assetManager, Label, Sprite, SpriteFrame, _decorator, BaseComponent, Player, RequestGPG, EventMng, NotificationType, LobbyStateEvent, PublicData, PanelLoading, PublicModel, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, PanelClientInfo;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../../../../Model/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../../../Api/GPGAPI/RequestGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponseGPG(extras) {
    _reporterNs.report("ResponseGPG", "../../../Api/GPGAPI/ResponseGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../../../../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../../../../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../../../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../../../NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      assetManager = _cc.assetManager;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      Player = _unresolved_3.default;
    }, function (_unresolved_4) {
      RequestGPG = _unresolved_4.RequestGPG;
    }, function (_unresolved_5) {
      EventMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      NotificationType = _unresolved_6.NotificationType;
    }, function (_unresolved_7) {
      LobbyStateEvent = _unresolved_7.LobbyStateEvent;
    }, function (_unresolved_8) {
      PublicData = _unresolved_8.default;
    }, function (_unresolved_9) {
      PanelLoading = _unresolved_9.default;
    }, function (_unresolved_10) {
      PublicModel = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e72b2oF2EBF9qCfxxXRQum4", "PanelClientInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelClientInfo = (_dec = ccclass('PanelClientInfo'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = (_temp = class PanelClientInfo extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isNeedUpdate", true);

          _defineProperty(this, "isLoading", false);

          _initializerDefineProperty(this, "spritePlayer", _descriptor, this);

          _initializerDefineProperty(this, "labelPhone", _descriptor2, this);

          _initializerDefineProperty(this, "labelNickName", _descriptor3, this);

          _initializerDefineProperty(this, "labelEmail", _descriptor4, this);

          _defineProperty(this, "labelBetCount", void 0);

          _defineProperty(this, "labelPointCount", void 0);

          _defineProperty(this, "labelRank", void 0);
        }

        async start() {
          this.show();
          this.isNeedUpdate = true;
          this.isLoading = false;
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Panel).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ActivePanelClientInfo, this.activePanel, this);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Panel).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangePlayerPicture, this.onChangePlayerPicture, this);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Panel).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).UpDatePlayer, this.onUpdatePlayer, this); // console.log(sys.browserType, sys.os);
          // console.log(md5("12315235"));
        }

        async onEnable() {
          if (!this.isNeedUpdate || this.isLoading) {
            (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading();
            return;
          }

          this.isLoading = true;
          this.startDelay();
          const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NeedToken.MyInfo();
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
          }), RequestGPG) : RequestGPG).API.MyInfo}?${convert}`, this.responseMyInfo.bind(this));
          this.isLoading = false;
        }

        onDisable() {}

        onActivePanel(e, customEventData) {
          this.hide();
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Panel).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangePlayerPicture, this.spritePlayer.spriteFrame);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Panel).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ActivePanelClientEdit, true);
        }

        onUpdatePlayer() {
          this.isNeedUpdate = true;
        }

        activePanel(bool) {
          bool ? this.show() : this.hide();
        }

        async responseMyInfo(response) {
          console.log("MyInfo", response);
          (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgInfo = response; // response.data.photo
          // console.log(Player.getInstance.gpgInfo);

          assetManager.loadRemote(response.data.photo.headPhoto, (err, image) => {
            if (err) {
              console.error(err.message);
              return;
            }

            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
              error: Error()
            }), NotificationType) : NotificationType).Panel).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
              error: Error()
            }), LobbyStateEvent) : LobbyStateEvent).ChangePlayerPicture, SpriteFrame.createWithImage(image));
            this.isNeedUpdate = false;
            if (this.stopDelay() < 1) setTimeout((_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading.bind((_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance), 1000);else (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading();
          });
          this.labelNickName.string = response.data.nickName;
          this.labelPhone.string = response.data.phoneNumber;
          this.labelEmail.string = response.data.email;
        }

        onChangePlayerPicture(_spriteFrame) {
          this.spritePlayer.spriteFrame = _spriteFrame;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spritePlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelPhone", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelNickName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelEmail", [_dec5], {
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
//# sourceMappingURL=PanelClientInfo.js.map