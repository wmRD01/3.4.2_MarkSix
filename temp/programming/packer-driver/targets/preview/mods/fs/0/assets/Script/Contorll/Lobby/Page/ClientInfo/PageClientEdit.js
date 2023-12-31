System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Node, _decorator, NotificationType, LobbyStateEvent, EventMng, BaseComponent, Player, RequestGPG, MyEditBox, PublicModel, PanelLoading, ButtonMng, EditMenu, PanelSystemMessage, SocketSetting, LangType, PublicData, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, PanelClientEdit;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../../../../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../../../../Manager/EventMng", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfMyEditBox(extras) {
    _reporterNs.report("MyEditBox", "../../../../../Plug/MyEditBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../../../NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEditMenu(extras) {
    _reporterNs.report("EditMenu", "../../../../Enum/EditMenu", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelSystemMessage(extras) {
    _reporterNs.report("PanelSystemMessage", "../../../NoClearNode/PanelSystemMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../../../../Enum/LangType", _context.meta, extras);
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
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      NotificationType = _unresolved_2.NotificationType;
    }, function (_unresolved_3) {
      LobbyStateEvent = _unresolved_3.LobbyStateEvent;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      Player = _unresolved_6.default;
    }, function (_unresolved_7) {
      RequestGPG = _unresolved_7.RequestGPG;
    }, function (_unresolved_8) {
      MyEditBox = _unresolved_8.MyEditBox;
    }, function (_unresolved_9) {
      PublicModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      PanelLoading = _unresolved_10.default;
    }, function (_unresolved_11) {
      ButtonMng = _unresolved_11.default;
    }, function (_unresolved_12) {
      EditMenu = _unresolved_12.EditMenu;
    }, function (_unresolved_13) {
      PanelSystemMessage = _unresolved_13.default;
    }, function (_unresolved_14) {
      SocketSetting = _unresolved_14.default;
    }, function (_unresolved_15) {
      LangType = _unresolved_15.LangType;
    }, function (_unresolved_16) {
      PublicData = _unresolved_16.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d3e9VfVWVOMKdVWHaoM94v", "PageClientEdit", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelClientEdit = (_dec = ccclass('PanelClientEdit'), _dec2 = property(_crd && MyEditBox === void 0 ? (_reportPossibleCrUseOfMyEditBox({
        error: Error()
      }), MyEditBox) : MyEditBox), _dec3 = property(Button), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class PanelClientEdit extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "editNicName", _descriptor, this);

          _initializerDefineProperty(this, "buttonConfirm", _descriptor2, this);

          _initializerDefineProperty(this, "btnsFunction", _descriptor3, this);
        }

        onLoad() {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).PanelClient).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).EditNickname, this.onEditNickname, this);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).PanelClient).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).EditPhone, this.onEditPhone, this);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).PanelClient).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).EditEmail, this.onEditEmail, this);
          this.setEvent((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).NextIssueID, this.reset);
          this.editNicName.string = "";
          this.reset();
          super.onLoad();
        }

        onDisable() {
          this.reset();
        } //#region  Nickname

        /**送出修改NickName */


        onEditNickname() {
          this.editNicName.spriteBG.node.active = true;
          this.editNicName.textLabel.node.parent.active = true;
          this.btnsFunction.active = true;
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "motifyNickName", this.buttonConfirm);
        }

        motifyNickName() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.checkName(_this.editNicName.string)) return;
            (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.openLoading("資料更新中");
            var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.Nickname();
            body.nickname = _this.editNicName.string;
            body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.Nickname);
            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(body)).setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgUrlPlayApi + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.Nickname, _this.responseNickname.bind(_this));
          })();
        }
        /**驗證碼發送是否成功 */


        responseNickname(response) {
          console.log("Nickname", response);

          if (response.Status.Code == "0") {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("026", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game));
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
              error: Error()
            }), NotificationType) : NotificationType).PanelClient).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
              error: Error()
            }), LobbyStateEvent) : LobbyStateEvent).EditUpdate, this.editNicName.string, (_crd && EditMenu === void 0 ? (_reportPossibleCrUseOfEditMenu({
              error: Error()
            }), EditMenu) : EditMenu).Nickname);
            (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
              error: Error()
            }), ButtonMng) : ButtonMng).clearEvent(this.buttonConfirm);
            this.reset();
          } else {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t(response.Status.Code, (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).ServerAPI));
            (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading(); // console.error("資料有問題");
          }
        } //#endregion
        //#region (棄用)ValidateContactInfo

        /**進行發送驗證碼時，必須先通過確認手機是否被註冊過 */


        onValidateContactInfoPhone() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            /**確認信箱 */
            //TODO 製作手機驗證(整理好後再回頭製作)
            var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NotNeedToken.ValidateContactInfo(); // body.Phone = this.editPhone.string;

            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(body)).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgUrlids + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.ValidateContactInfo, _this2.responseValidateContactInfo.bind(_this2));
          })();
        }

        onValidateContactInfoEmail() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            /**確認信箱格式 */
            // if (!this.checkEmail(this.editEmail.string)) return;
            var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NotNeedToken.ValidateContactInfo(); // body.Email = this.editEmail.string;

            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(body)).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgUrlids + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.ValidateContactInfo, _this3.responseValidateContactInfo.bind(_this3));
          })();
        }

        responseValidateContactInfo(response) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            console.log("ValidateContactInfo", response);
            /**代表此已經綁定過不可以綁定! */

            if (response.Status.Code == "0") {
              // if (this.editEmail.string != "")
              (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
                error: Error()
              }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("040", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game)); // if (this.editPhone.string != "")

              (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
                error: Error()
              }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                error: Error()
              }), SocketSetting) : SocketSetting).t("034", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                error: Error()
              }), LangType) : LangType).Game));
              return;
            } else {
              console.log("恭喜信箱不存在，可繼續註冊"); //*要改成手動送驗證碼

              var sendBody = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                error: Error()
              }), RequestGPG) : RequestGPG).Body.NotNeedToken.SendRegisterVerification(); // if (this.editEmail.string != "")
              //     sendBody.Email = this.editEmail.string
              // if (this.editPhone.string != "")
              //     sendBody.Phone = this.editPhone.string

              yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                error: Error()
              }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                error: Error()
              }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(sendBody)).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                error: Error()
              }), PublicData) : PublicData).getInstance.gpgUrlids + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                error: Error()
              }), RequestGPG) : RequestGPG).API.SendRegisterVerification, _this4.responseSendRegisterVerification.bind(_this4));
            }
          })();
        }
        /**驗證碼發送是否成功 */


        responseSendRegisterVerification(response) {
          console.log("SendRegisterVerification", response);

          if (response.Status.Code == "0") {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("035", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // new VerificationTimer(this.labelVerificationCode, this.buttonVerificationCode, 180)

            console.log("送出驗證碼囉");
          }
        } //#endregion
        //#region (棄用)Phone


        onEditPhone() {
          // this.editPhone.spriteBG.node.active = true
          // this.editPhone.textLabel.node.parent.active = true;
          // this.activeVerificationCode(true)
          this.btnsFunction.active = true; // ButtonMng.addEvent(this, "onValidateContactInfoPhone", this.buttonVerificationCode)

          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "創立修改手機的", this.buttonConfirm);
        } //TODO 修改手機的方法
        //#endregion
        //#region (棄用)Email


        onEditEmail() {
          // this.editEmail.spriteBG.node.active = true
          // this.editEmail.textLabel.node.parent.active = true;
          this.activeVerificationCode(true);
          this.btnsFunction.active = true; // ButtonMng.addEvent(this, "onValidateContactInfoEmail", this.buttonVerificationCode)

          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "certifiedEmall", this.buttonConfirm);
        }
        /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */


        certifiedEmall() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            // if (!this.checkEmail(this.editEmail.string)) return;
            // if (!this.checkVerification(this.editVerificationCode.string)) return;

            /**確認信箱格式 */
            var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.CertifiedEmail(); // body.email = this.editEmail.string
            // body.verifyCode = this.editVerificationCode.string

            body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.CertifiedEmail);
            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).setBody(JSON.stringify(body)).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgUrlPlayApi + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.CertifiedEmall, _this5.responseCertifiedEmall.bind(_this5));
          })();
        }
        /**是否修改信箱成功 */


        responseCertifiedEmall(response) {
          console.log("CertifiedEmall", response);

          if (response.Status.Code == "0") {
            console.log("過關惹");
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("036", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).ServerAPI)); // EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).emit(LobbyStateEvent.EditUpdate, this.editEmail.string, EditMenu.Email)

            (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
              error: Error()
            }), ButtonMng) : ButtonMng).clearEvent(this.buttonConfirm);
            this.reset();
          } else {
            //TODO顯示錯誤訊息
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t(response.Status.Code, (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).ServerAPI));
            (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading();
          }
        } //#endregion


        activeVerificationCode(bool) {// this.editVerificationCode.spriteBG.node.active = bool
          // this.editVerificationCode.textLabel.node.parent.active = bool;
          // this.buttonVerificationCode.node.active = bool
          // if (!bool)
          // this.btnsFunction.position = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.btnsFunction, this.editEmail.spriteBG.node)
        }

        reset() {
          this.editNicName.spriteBG.node.active = false;
          this.editNicName.textLabel.node.parent.active = false; // this.editEmail.spriteBG.node.active = false
          // this.editEmail.textLabel.node.parent.active = false;
          // this.editPhone.spriteBG.node.active = false
          // this.editPhone.textLabel.node.parent.active = false;

          this.activeVerificationCode(false);
          this.btnsFunction.active = false; // this.buttonVerificationCode.node.active = false;
          // this.editEmail.string = "";

          this.editNicName.string = "";
          this.editNicName.string = ""; // this.editVerificationCode.string = "";
        }
        /**確認信箱格式 */


        checkEmailRegular(_string) {
          //please input the test email to see is valid
          var strEmail = _string; //Regular expression Testing

          var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; //validate ok or not

          if (strEmail.search(emailRule) != -1) {
            return true;
          } else {
            return false;
          }
        }

        checkName(str) {
          if (str.length == 0 || str.length < 2 || str.length > 16) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("031", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("長度須為2~16");

            return false;
          }

          if (/\s/.test(str)) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("029", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("文字有空白");

            return false;
          }

          if ((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.checkNicknameCondition(str)) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("030", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("出現非法文字");

            return false;
          }

          return true;
        }
        /**
         * 
         * @param str 信箱
         */


        checkEmail(str) {
          if (str.length == 0) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("028", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("請輸入信箱");

            return false;
          }

          if (/\s/.test(str)) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("029", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("文字有空白");

            return false;
          }

          if (!this.checkEmailRegular(str)) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("028", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("請輸入正確信箱");

            return false;
          }

          return true;
        }
        /**
         * @param verification 驗證碼  
         */


        checkVerification(str) {
          if (str.length == 0) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("033", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("請輸入數字");

            return false;
          }

          if (/\s/.test(str)) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("029", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("文字有空白");

            return false;
          }

          if (str.length != 6) {
            (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
              error: Error()
            }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
              error: Error()
            }), SocketSetting) : SocketSetting).t("032", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
              error: Error()
            }), LangType) : LangType).Game)); // console.error("驗證碼最少六碼");

            return false;
          }

          return true;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editNicName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonConfirm", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnsFunction", [_dec4], {
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
//# sourceMappingURL=PageClientEdit.js.map