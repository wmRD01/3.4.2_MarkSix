System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Label, Sprite, _decorator, BaseComponent, Player, RequestGPG, EventMng, NotificationType, LobbyStateEvent, PublicData, PanelLoading, PublicModel, CreateFileSprite, EditMenu, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, PanelClientInfo;

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
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
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

      _export("default", PanelClientInfo = (_dec = ccclass('PanelClientInfo'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Button), _dec(_class = (_class2 = (_temp = class PanelClientInfo extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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

          _initializerDefineProperty(this, "labelBetCount", _descriptor5, this);

          _initializerDefineProperty(this, "labelPointCount", _descriptor6, this);

          _initializerDefineProperty(this, "labelRank", _descriptor7, this);

          _initializerDefineProperty(this, "buttonEditNickname", _descriptor8, this);

          _initializerDefineProperty(this, "buttonEditPhone", _descriptor9, this);

          _initializerDefineProperty(this, "buttonEditEmail", _descriptor10, this);

          _initializerDefineProperty(this, "buttonEditPicture", _descriptor11, this);

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

        async onEnable() {
          this.startDelay();
          await this.requestMyInfo();
          await this.requesMyScore();
          if (this.stopDelay() < 1) setTimeout((_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.closeLoading.bind((_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance), 1000);else (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.closeLoading();
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
        } //#region UploadAvatar


        onSelectPhoto() {
          new (_crd && CreateFileSprite === void 0 ? (_reportPossibleCrUseOfCreateFileSprite({
            error: Error()
          }), CreateFileSprite) : CreateFileSprite)(this.onUploadAvatar.bind(this));
        }

        async onUploadAvatar(_spriteFrame, file) {
          // PublicModel.getInstance.convertByteToBinary(PublicModel.getInstance._base64ToBytes(base64))
          let fileData = new FormData();
          fileData.append('file', file);
          await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Method.POST).deletContentType().setBody(fileData).setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgToken).fetchData(`${(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.gpgUrlPlayApi}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).API.UploadAvatar}`, response => {
            this.responseUploadAvatar(response, _spriteFrame);
          });
        }

        responseUploadAvatar(response, _spriteFrame) {
          console.log("圖片上傳成功?", response);
          if (response.Status.Code == "0") this.spritePlayer.spriteFrame = _spriteFrame;else {}
        } //#endregion
        //#region  MyInfo


        async requestMyInfo() {
          return new Promise(async (resolve, reject) => {
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
            }), Player) : Player).getInstance.gpgToken).fetchData(`${(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgUrlPlayApi}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.MyInfo}?${convert}`, this.responseMyInfo.bind(this));
            resolve();
          });
        }

        async responseMyInfo(response) {
          console.log("MyInfo", response);
          (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgInfo = response; // response.data.photo
          // console.log(Player.getInstance.gpgInfo);

          /*上傳圖片功能暫時隱藏 */
          // if (!PublicModel.getInstance.checkStringNull(response.data.photo.headPhoto))
          //     assetManager.loadRemote(response.data.photo.headPhoto, (err, image: ImageAsset) => {
          //         if (err) {
          //             console.error(err.message);
          //             return
          //         }
          //         this.spritePlayer.spriteFrame = SpriteFrame.createWithImage(image)
          //     })

          if (!(_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.nickName)) {
            var _response$data$nickNa;

            this.getplatform = (_response$data$nickNa = response.data.nickName) === null || _response$data$nickNa === void 0 ? void 0 : _response$data$nickNa.split("_")[0];
            /**因為前面會有註冊會員的文字，要刪除掉 */

            this.labelNickName.string = response.data.nickName.replace(`${this.getplatform}_`, "");
          } else this.labelNickName.string = response.data.nickName;

          this.buttonEditPhone.node.active = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.phoneNumber);
          this.labelPhone.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.phoneNumber) ? "" : response.data.phoneNumber;
          this.buttonEditEmail.node.active = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.email);
          this.labelEmail.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkStringNull(response.data.email) ? "" : response.data.email;
        } //#endregion
        //#region Betlog


        async requesMyScore() {
          return new Promise(async (resolve, reject) => {
            const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.MyScore();
            const getDate = new Date((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.today);
            body.sDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-01`;
            body.eDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-${(_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.getMonthAllDay((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.today)}`;
            body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.MyScore);
            console.log(body);
            let convert = new URLSearchParams(body).toString();
            await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).fetchData(`${(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgUrlPlayApi}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.My_Score}?${convert}`, this.responseMyScore.bind(this));
            resolve();
          });
        }

        responseMyScore(response) {
          console.log("玩家紀錄", response);

          if (response.data) {
            this.labelRank.string = response.data.rank.toString();
            this.labelBetCount.string = response.data.betTimes.toString();
            this.labelPointCount.string = response.data.totalScore.toString(); // this.labelMyPoint.string = response.data.totalScore.toString();
          } else {
            this.labelRank.string = "0";
            this.labelBetCount.string = "0";
            this.labelPointCount.string = "0";
          }
        } //#endregion


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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelBetCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelPointCount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelRank", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buttonEditNickname", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "buttonEditPhone", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "buttonEditEmail", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "buttonEditPicture", [_dec12], {
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