System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assetManager, Label, Sprite, SpriteFrame, sys, _decorator, BaseComponent, RequestGPG, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, PanelClientInfo;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../../../Api/GPGAPI/RequestGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponseGPG(extras) {
    _reporterNs.report("ResponseGPG", "../../../Api/GPGAPI/ResponseGPG", _context.meta, extras);
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
      sys = _cc.sys;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      RequestGPG = _unresolved_3.RequestGPG;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e72b2oF2EBF9qCfxxXRQum4", "PanelClientInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelClientInfo = (_dec = ccclass('PanelClientInfo'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = class PanelClientInfo extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isData", false);

          _defineProperty(this, "isLoading", false);

          _initializerDefineProperty(this, "spritePlayer", _descriptor, this);

          _initializerDefineProperty(this, "labelPlayerName", _descriptor2, this);

          _initializerDefineProperty(this, "labelNickName", _descriptor3, this);
        }

        start() {
          this.isData = false;
          this.isLoading = false;
          console.log(sys.browserType, sys.os);
        }

        onEnable() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.isData || _this.isLoading) return;
            _this.isLoading = true;
            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setToken("Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODkxMjkzNjEsImV4cCI6MTY5MTcyMTM2MSwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY4OTEyOTM2MSwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiI3RkNCM0QzQ0NDOUE3MjRGOUQ5M0YwNDZDMjNGODA1NCIsImlhdCI6MTY4OTEyOTM2MSwic2NvcGUiOlsibWVtYmVyLmluZm8udXNlciJdLCJhbXIiOlsibWtfcGhvbmUiXX0.agzZ_DHtp_dQQKfa1fRhJRwQAh8NnLk98jmqspD8RrnRq5TNqE-dTaf-53d61BraahHl2IO6qwPRk7wJr_RP6nuWYcoiVj4k3WGYG1qnpjuYA5vlq1Iyq2pPIr4eNq2pRV9mJAdKzsMVi1zVi5s7tz38sjpr470xa4QL4zXLluGIg-562pqnSAOtKiPQhCoCAzPSixI16BM3Ite90kw3a3gTcP_m7jA-ELfZxwS-pTHHSqQzhBTqCeMQk9uC3Rcuook_SseYN7cJoYOi_oc0wnNoMhalyLMbdhZKcktAMJ6ExuN0fj_RIxvAJT4lJrQictihPBE43qe7djkWV9uRUQ").fetchData("https://play-api.ceis.tw/Member/MyInfo?sign=47b436c2cad162edc9a8035afc3c673f", _this.responseMyInfo.bind(_this));

            _this.onValidateContactInfo();

            _this.isLoading = false;
          })();
        }

        onDisable() {}
        /**進行發送驗證碼時，必須先通過確認手機是否被註冊過，確認沒有驗證過就會SendLog */


        onValidateContactInfo() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            /** */
            var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.ValidateContactInfo();
            body.Email = "wm.rd01@gmail.com";
            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(body)).fetchData("https://ids.ceis.tw/Token/ValidateContactInfo", _this2.responseValidateContactInfo.bind(_this2));
          })();
        }
        /**送出前須確認驗證碼的正確性，但前題是他必須得先需要註冊信箱時才會接這個function */


        onCertification() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.Certification();
            body.Email = "wm.rd01@gmail.com";
            body.VerifyCode = "123124";
            body.sign = "47b436c2cad162edc9a8035afc3c673f";
            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(body)).fetchData("https://ids.ceis.tw/Member/Certification", _this3.responseSendLoginVerification.bind(_this3));
          })();
        }

        responseValidateContactInfo(response) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            console.log("ValidateContactInfo", response);
            /**代表此已經綁定過不可以綁定! */

            if (response.Status.Code == "0") {
              console.log("已存在請重新換組");
              return;
            } else {
              console.log("恭喜信箱不存在，可繼續註冊"); //*要改成手動送驗證碼

              var sendBody = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                error: Error()
              }), RequestGPG) : RequestGPG).Body.SendLoginVerification();
              sendBody.Email = "wm.rd01@gmail.com";
              yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                error: Error()
              }), RequestGPG) : RequestGPG).Request().setMethod((_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                error: Error()
              }), RequestGPG) : RequestGPG).Method.POST).setBody(JSON.stringify(sendBody)).fetchData("https://ids.ceis.tw/Token/SendLoginVerification", _this4.responseSendLoginVerification.bind(_this4));
            }
          })();
        }

        responseMyInfo(response) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            console.log("MyInfo", response); // response.data.photo

            assetManager.loadRemote("https://img.ceis.tw/Member/Avatar/2.jpg", (err, image) => {
              if (err) {
                console.error(err.message);
                return;
              }

              _this5.spritePlayer.spriteFrame = SpriteFrame.createWithImage(image); // this.labelNickName.string= response.data.nickName
              // this.labelPlayerName.string= response.data.

              _this5.isData = true;
            });
          })();
        }
        /**驗證碼發送是否成功 */


        responseSendLoginVerification(response) {
          console.log("SendLoginVerification", response);

          if (response.Status.Code == "0") {
            console.log("過關惹");
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spritePlayer", [_dec2], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelClientInfo.js.map