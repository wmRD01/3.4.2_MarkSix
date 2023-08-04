System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assetManager, Button, Label, Sprite, SpriteFrame, _decorator, BaseComponent, Player, RequestGPG, EventMng, NotificationType, LobbyStateEvent, PublicData, PanelLoading, PublicModel, CreateFileSprite, EditMenu, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, PanelClientInfo;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfCreateFileSprite(extras) {
    _reporterNs.report("CreateFileSprite", "../../../../Model/CreateFileSprite", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEditMenu(extras) {
    _reporterNs.report("EditMenu", "../../../../Enum/EditMenu", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      assetManager = _cc.assetManager;
      Button = _cc.Button;
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
    }, function (_unresolved_11) {
      CreateFileSprite = _unresolved_11.default;
    }, function (_unresolved_12) {
      EditMenu = _unresolved_12.EditMenu;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e72b2oF2EBF9qCfxxXRQum4", "PanelClientInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelClientInfo = (_dec = ccclass('PanelClientInfo'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec(_class = (_class2 = (_temp = class PanelClientInfo extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isNeedUpdate", true);

          _defineProperty(this, "isLoading", false);

          _initializerDefineProperty(this, "spritePlayer", _descriptor, this);

          _initializerDefineProperty(this, "labelPhone", _descriptor2, this);

          _initializerDefineProperty(this, "labelNickName", _descriptor3, this);

          _initializerDefineProperty(this, "labelEmail", _descriptor4, this);

          _initializerDefineProperty(this, "buttonEditNickname", _descriptor5, this);

          _initializerDefineProperty(this, "buttonEditPhone", _descriptor6, this);

          _initializerDefineProperty(this, "buttonEditEmail", _descriptor7, this);

          _initializerDefineProperty(this, "buttonEditPicture", _descriptor8, this);

          _defineProperty(this, "labelBetCount", void 0);

          _defineProperty(this, "labelPointCount", void 0);

          _defineProperty(this, "labelRank", void 0);

          _defineProperty(this, "getplatform", void 0);
        }

        //#endregion
        onLoad() {
          super.onLoad();
          this.show();
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).PanelClient).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).EditUpdate, this.onEditUpData, this);
          this.labelEmail.string = "";
          this.labelPhone.string = "";
          this.labelNickName.string = "";
        }

        onEnable() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.startDelay();

            var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.MyInfo();
            body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertMD5((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgApi);
            var convert = new URLSearchParams(body).toString();
            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).APIUrl.playAPI + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.MyInfo + "?" + convert, _this.responseMyInfo.bind(_this));
          })();
        }

        onDisable() {
          this.resetButton();
        }

        onEditTarget(e, customEventData) {
          this.closeButton();

          switch (Number(customEventData)) {
            case (_crd && EditMenu === void 0 ? (_reportPossibleCrUseOfEditMenu({
              error: Error()
            }), EditMenu) : EditMenu).Nickname:
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
                error: Error()
              }), NotificationType) : NotificationType).PanelClient).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
                error: Error()
              }), LobbyStateEvent) : LobbyStateEvent).EditNickname);
              break;

            case (_crd && EditMenu === void 0 ? (_reportPossibleCrUseOfEditMenu({
              error: Error()
            }), EditMenu) : EditMenu).Phone:
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
                error: Error()
              }), NotificationType) : NotificationType).PanelClient).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
                error: Error()
              }), LobbyStateEvent) : LobbyStateEvent).EditPhone);
              break;

            case (_crd && EditMenu === void 0 ? (_reportPossibleCrUseOfEditMenu({
              error: Error()
            }), EditMenu) : EditMenu).Email:
              (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                error: Error()
              }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
                error: Error()
              }), NotificationType) : NotificationType).PanelClient).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
                error: Error()
              }), LobbyStateEvent) : LobbyStateEvent).EditEmail);
              break;
          }
        }

        onEditUpData(str, type) {
          if (!(_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkStringNull(str)) {
            switch (type) {
              case (_crd && EditMenu === void 0 ? (_reportPossibleCrUseOfEditMenu({
                error: Error()
              }), EditMenu) : EditMenu).Nickname:
                this.labelNickName.string = str;
                break;

              case (_crd && EditMenu === void 0 ? (_reportPossibleCrUseOfEditMenu({
                error: Error()
              }), EditMenu) : EditMenu).Phone:
                this.labelPhone.string = str;
                break;

              case (_crd && EditMenu === void 0 ? (_reportPossibleCrUseOfEditMenu({
                error: Error()
              }), EditMenu) : EditMenu).Email:
                this.labelEmail.string = str;
                break;
            }
          }

          this.resetButton();
          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.closeLoading();
        }

        onSelectPhoto() {
          new (_crd && CreateFileSprite === void 0 ? (_reportPossibleCrUseOfCreateFileSprite({
            error: Error()
          }), CreateFileSprite) : CreateFileSprite)(this.onUploadAvatar.bind(this));
        }

        onUploadAvatar(_spriteFrame, file) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // PublicModel.getInstance.convertByteToBinary(PublicModel.getInstance._base64ToBytes(base64))
            var fileData = new FormData();
            fileData.append('file', file);
            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).deletContentType().setBody(fileData).setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).APIUrl.playAPI + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.UploadAvatar, response => {
              _this2.responseUploadAvatar(response, _spriteFrame);
            });
          })();
        }

        responseUploadAvatar(response, _spriteFrame) {
          console.log("圖片上傳成功?", response);
          if (response.Status.Code == "0") this.spritePlayer.spriteFrame = _spriteFrame;
        }

        responseMyInfo(response) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            console.log("MyInfo", response);
            (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgInfo = response; // response.data.photo
            // console.log(Player.getInstance.gpgInfo);

            if (!(_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.photo.headPhoto)) assetManager.loadRemote(response.data.photo.headPhoto, (err, image) => {
              if (err) {
                console.error(err.message);
                return;
              }

              _this3.spritePlayer.spriteFrame = SpriteFrame.createWithImage(image);
            });

            if (!(_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.nickName)) {
              var _response$data$nickNa;

              _this3.getplatform = (_response$data$nickNa = response.data.nickName) === null || _response$data$nickNa === void 0 ? void 0 : _response$data$nickNa.split("_")[0];
              /**因為前面會有註冊會員的文字，要刪除掉 */

              _this3.labelNickName.string = response.data.nickName.replace(_this3.getplatform + "_", "");
            } else _this3.labelNickName.string = response.data.nickName;

            _this3.buttonEditPhone.node.active = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.phoneNumber);
            _this3.labelPhone.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.phoneNumber) ? "" : response.data.phoneNumber;
            _this3.buttonEditEmail.node.active = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.email);
            _this3.labelEmail.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.email) ? "" : response.data.email;
            if (_this3.stopDelay() < 1) setTimeout((_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading.bind((_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance), 1000);else (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading();
          })();
        }

        resetButton() {
          this.buttonEditNickname.node.active = true; // this.buttonEditPicture.node.active = true

          this.buttonEditPhone.node.active = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkStringNull(this.labelPhone.string);
          this.buttonEditEmail.node.active = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkStringNull(this.labelEmail.string);
        }

        closeButton() {
          // this.buttonEditPicturse.node.active = false
          this.buttonEditNickname.node.active = false;
          this.buttonEditPhone.node.active = false;
          this.buttonEditEmail.node.active = false;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buttonEditNickname", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buttonEditPhone", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "buttonEditEmail", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buttonEditPicture", [_dec9], {
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