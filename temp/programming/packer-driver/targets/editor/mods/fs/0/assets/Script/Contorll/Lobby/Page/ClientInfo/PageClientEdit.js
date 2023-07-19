System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "crypto-es", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Node, Sprite, _decorator, EvnetType, LobbyStateEvent, EventMng, BaseComponent, Player, RequestGPG, CryptoES, MyEditBox, PublicModel, CreateFileSprite, PublicData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, PageClientEdit;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEvnetType(extras) {
    _reporterNs.report("EvnetType", "../../../../Enum/EvnetType", _context.meta, extras);
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

  function _reportPossibleCrUseOfCryptoES(extras) {
    _reporterNs.report("CryptoES", "crypto-es", _context.meta, extras);
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

  function _reportPossibleCrUseOfCreateFileSprite(extras) {
    _reporterNs.report("CreateFileSprite", "../../../../Model/CreateFileSprite", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EvnetType = _unresolved_2.EvnetType;
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
    }, function (_cryptoEs) {
      CryptoES = _cryptoEs.default;
    }, function (_unresolved_8) {
      MyEditBox = _unresolved_8.MyEditBox;
    }, function (_unresolved_9) {
      PublicModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      CreateFileSprite = _unresolved_10.default;
    }, function (_unresolved_11) {
      PublicData = _unresolved_11.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d3e9VfVWVOMKdVWHaoM94v", "PageClientEdit", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PageClientEdit = (_dec = ccclass('PageClientEdit'), _dec2 = property(_crd && MyEditBox === void 0 ? (_reportPossibleCrUseOfMyEditBox({
        error: Error()
      }), MyEditBox) : MyEditBox), _dec3 = property(_crd && MyEditBox === void 0 ? (_reportPossibleCrUseOfMyEditBox({
        error: Error()
      }), MyEditBox) : MyEditBox), _dec4 = property(_crd && MyEditBox === void 0 ? (_reportPossibleCrUseOfMyEditBox({
        error: Error()
      }), MyEditBox) : MyEditBox), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Node), _dec9 = property(Sprite), _dec(_class2 = (_class3 = (_temp = class PageClientEdit extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "editNicName", _descriptor, this);

          _initializerDefineProperty(this, "editEmail", _descriptor2, this);

          _initializerDefineProperty(this, "editVerificationCode", _descriptor3, this);

          _initializerDefineProperty(this, "NodeEmail", _descriptor4, this);

          _initializerDefineProperty(this, "NodeVerificationCode", _descriptor5, this);

          _initializerDefineProperty(this, "btnVerificationCode", _descriptor6, this);

          _initializerDefineProperty(this, "btnsFunction", _descriptor7, this);

          _initializerDefineProperty(this, "spritePlayer", _descriptor8, this);

          _defineProperty(this, "isChangePicture", false);
        }

        onLoad() {
          super.onLoad();
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && EvnetType === void 0 ? (_reportPossibleCrUseOfEvnetType({
            error: Error()
          }), EvnetType) : EvnetType).Panel).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ActivePanelClientEdit, this.activePanel, this);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && EvnetType === void 0 ? (_reportPossibleCrUseOfEvnetType({
            error: Error()
          }), EvnetType) : EvnetType).Panel).on((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangePlayerPicture, this.onChangePlayerPicture, this);
          this.hide();
        }

        start() {
          this.editEmail.string = "";
          this.editNicName.string = "";
          this.editVerificationCode.string = "";
        }

        onEnable() {
          // this.onValidateContactInfo()
          this.isChangePicture = false;
          return;
          if ((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgInfo.data.email != "" || (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgInfo.data.email != null || (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgInfo.data.email != undefined) this.activeVerificationCode(false);else this.activeVerificationCode(true);
        }

        activePanel(bool) {
          bool ? this.show() : this.hide();
        }

        async onTestNickName() {
          const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NeedToken.Nickname();
          body.nickname = "我修改拉";
          body.sign = this.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NeedToken.Nickname);
          await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(body)).setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgToken).fetchData(`${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).APIUrl.playAPI}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).API.Nickname}`, this.responseSendLoginVerification.bind(this));
        }

        responetest(response) {
          console.log(response);
        }

        onSelectPhoto() {
          new (_crd && CreateFileSprite === void 0 ? (_reportPossibleCrUseOfCreateFileSprite({
            error: Error()
          }), CreateFileSprite) : CreateFileSprite)(this.onChangePlayerPicture.bind(this));
        }

        onActivePanel(e, customEventData) {
          this.hide();
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && EvnetType === void 0 ? (_reportPossibleCrUseOfEvnetType({
            error: Error()
          }), EvnetType) : EvnetType).Panel).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ActivePanelClientInfo, true);
        }

        activeVerificationCode(bool) {
          this.editVerificationCode.spriteBG.node.active = bool;
          this.editEmail.spriteBG.node.active = bool;
          this.NodeEmail.active = bool;
          this.NodeVerificationCode.active = bool;
          this.btnVerificationCode.node.active = bool;
          if (!bool) this.btnsFunction.position = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.btnsFunction, this.editEmail.spriteBG.node);
        }

        onChangePlayerPicture(_spriteFrame) {
          this.spritePlayer.spriteFrame = _spriteFrame;
          this.isChangePicture = true;
        }
        /**ClientEdit */

        /**進行發送驗證碼時，必須先通過確認手機是否被註冊過，確認沒有驗證過就會SendLog */


        async onValidateContactInfo() {
          /**確認是否有需要驗證戲箱 */
          if (this.editEmail.string == "") {
            console.error("信箱不可空白");
            return;
          }

          if (!this.checkEmailRegular(this.editEmail.string)) {
            console.error("信箱格式不正確");
            return;
          }
          /** */


          const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NotNeedToken.ValidateContactInfo();
          body.Email = this.editEmail.string;
          await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(body)).fetchData(`${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).APIUrl.ids}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).API.ValidateContactInfo}`, this.responseValidateContactInfo.bind(this));
        }
        /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */


        async onCertification() {
          const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NeedToken.CertifiedEmail();
          body.email = this.editEmail.string;
          body.verifyCode = this.editVerificationCode.string;
          body.sign = this.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NeedToken.CertifiedEmail);
          await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Method.POST).setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgToken).setBody(JSON.stringify(body)).fetchData(`${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).APIUrl.playAPI}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).API.ValidateContactInfo}`, this.responseSendLoginVerification.bind(this));
        }

        async responseValidateContactInfo(response) {
          console.log("ValidateContactInfo", response);
          /**代表此已經綁定過不可以綁定! */

          if (response.Status.Code == "0") {
            console.log("已存在請重新換組");
            return;
          } else {
            console.log("恭喜信箱不存在，可繼續註冊"); //*要改成手動送驗證碼

            const sendBody = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NotNeedToken.SendRegisterVerification();
            sendBody.Email = this.editEmail.string;
            await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(sendBody)).fetchData(`${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).APIUrl.ids}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.SendRegisterVerification}`, this.responseSendLoginVerification.bind(this));
          }
        }
        /**驗證碼發送是否成功 */


        responseSendLoginVerification(response) {
          console.log("SendRegisterVerification", response);

          if (response.Status.Code == "0") {
            console.log("過關惹");
          }
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

        onCheckMotify() {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && EvnetType === void 0 ? (_reportPossibleCrUseOfEvnetType({
            error: Error()
          }), EvnetType) : EvnetType).Panel).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).UpDataPlayer);
          this.onActivePanel(null);
          return;

          if (this.editNicName.string == (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.nickname) {
            console.error("會員資料與之前相同");
            return;
          }
          /**確認是否有需要驗證戲箱 */


          if (this.NodeEmail.active) {
            if (!this.checkEmailRegular(this.editEmail.string)) {
              console.error("信箱格式不正確]");
              return;
            }

            this.onValidateContactInfo();
          }

          if (this.isChangePicture) (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && EvnetType === void 0 ? (_reportPossibleCrUseOfEvnetType({
            error: Error()
          }), EvnetType) : EvnetType).Panel).emit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangePlayerPicture, this.spritePlayer.spriteFrame);
        }

        convertSign(body, _class) {
          let sign = new _class();
          (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.TwoClassCheckData(sign, body);
          delete sign.sign;
          const dataWithApiKey = this.sortObj(sign, (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.gpgApi);
          console.log(dataWithApiKey);
          return (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).MD5(dataWithApiKey).toString(); // console.log(body);
        }
        /**排序物件順序並且queryString */


        sortObj(obj, apiKey) {
          var keyA = Object.keys(obj).sort();
          var querystring = "";

          for (let index = 0; index < keyA.length; index++) {
            querystring += `${keyA[index]}=${obj[keyA[index]]}`;

            if (index != keyA.length - 1) {
              querystring += "&";
            }
          } // for (var i in keyA) {
          //encodeURIComponent是ASCII轉換\，但是@也會被轉換所以不使用此方式
          //     // sortObj[keyA[i]] = encodeURIComponent(obj[keyA[i]])
          // }


          querystring += apiKey;
          return querystring;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "editNicName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "editEmail", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "editVerificationCode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "NodeEmail", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "NodeVerificationCode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "btnVerificationCode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "btnsFunction", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "spritePlayer", [_dec9], {
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
//# sourceMappingURL=PageClientEdit.js.map