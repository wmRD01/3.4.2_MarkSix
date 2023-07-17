System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "crypto-es"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assetManager, Label, Sprite, SpriteFrame, _decorator, BaseComponent, Player, RequestGPG, CryptoES, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp2, _crd, ccclass, property, PanelClientInfo;

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

  function _reportPossibleCrUseOfCryptoES(extras) {
    _reporterNs.report("CryptoES", "crypto-es", _context.meta, extras);
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
    }, function (_cryptoEs) {
      CryptoES = _cryptoEs.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e72b2oF2EBF9qCfxxXRQum4", "PanelClientInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelClientInfo = (_dec = ccclass('PanelClientInfo'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = (_temp2 = class PanelClientInfo extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isData", false);

          _defineProperty(this, "isLoading", false);

          _initializerDefineProperty(this, "spritePlayer", _descriptor, this);

          _initializerDefineProperty(this, "labelPlayerName", _descriptor2, this);

          _initializerDefineProperty(this, "labelNickName", _descriptor3, this);

          _initializerDefineProperty(this, "tempText", _descriptor4, this);
        }

        start() {
          this.isData = false;
          this.isLoading = false; // console.log(sys.browserType, sys.os);
          // console.log(md5("12315235"));
        }

        async onEnable() {
          if (this.isData || this.isLoading) return;
          this.isLoading = true;
          await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgToken).fetchData("https://play-api.ceis.tw/Member/MyInfo?sign=47b436c2cad162edc9a8035afc3c673f", this.responseMyInfo.bind(this));
          this.onValidateContactInfo();
          this.isLoading = false;
        }

        onDisable() {}
        /**進行發送驗證碼時，必須先通過確認手機是否被註冊過，確認沒有驗證過就會SendLog */


        async onValidateContactInfo() {
          /** */
          let body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NotNeedToken.ValidateContactInfo();
          body.Email = "wm.rd01@gmail.com";
          await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(body)).fetchData("https://ids.ceis.tw/Token/ValidateContactInfo", this.responseValidateContactInfo.bind(this));
        }
        /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */


        async onCertification() {
          const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NeedToken.CertifiedEmail();
          body.email = "wm.rd01@gmail.com";
          body.verifyCode = this.tempText.string; // 合併 data 和 apiKey

          const _temp = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NeedToken.temp();

          _temp.email = "wm.rd01@gmail.com";
          _temp.verifyCode = this.tempText.string;
          const dataWithApiKey = new URLSearchParams(_temp).toString() + "5gh394D";
          console.log(dataWithApiKey);
          console.log((_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).MD5(dataWithApiKey).toString());
          body.sign = (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).MD5(dataWithApiKey).toString();
          console.log(body);
          await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Method.POST).setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgToken).setBody(JSON.stringify(body)).fetchData("https://play-api.ceis.tw/Member/CertifiedEmail", this.responseSendLoginVerification.bind(this));
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
            }), RequestGPG) : RequestGPG).Body.NotNeedToken.SendLoginVerification();
            sendBody.Email = "wm.rd01@gmail.com";
            await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(sendBody)).fetchData("https://ids.ceis.tw/Token/SendRegisterVerification", this.responseSendLoginVerification.bind(this));
          }
        }

        async responseMyInfo(response) {
          console.log("MyInfo", response);
          (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gppInfo = response; // response.data.photo

          assetManager.loadRemote("https://img.ceis.tw/Member/Avatar/2.jpg", (err, image) => {
            if (err) {
              console.error(err.message);
              return;
            }

            this.spritePlayer.spriteFrame = SpriteFrame.createWithImage(image); // this.labelNickName.string= response.data.nickName
            // this.labelPlayerName.string= response.data.

            this.isData = true;
          });
        }
        /**驗證碼發送是否成功 */


        responseSendLoginVerification(response) {
          console.log("SendRegisterVerification", response);

          if (response.Status.Code == "0") {
            console.log("過關惹");
          }
        }

      }, _temp2), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spritePlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelPlayerName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelNickName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tempText", [_dec5], {
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