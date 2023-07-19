System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ResponseGPG;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("ResponseGPG", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d803u/qJxAYoSYDb+Z6xBZ", "ResponseGPG", undefined);

      (function (_ResponseGPG) {
        let MyInfo;

        (function (_MyInfo) {
          class DataClass {
            constructor() {
              _defineProperty(this, "Status", new State());

              _defineProperty(this, "data", new Data());
            }

          }

          _MyInfo.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", "0");

              _defineProperty(this, "Message", "Success");
            }

          }

          class Data {
            constructor() {
              _defineProperty(this, "email", void 0);

              _defineProperty(this, "friendCount", void 0);

              _defineProperty(this, "introduceCode", void 0);

              _defineProperty(this, "isTrial", void 0);

              _defineProperty(this, "memberID", void 0);

              _defineProperty(this, "nickName", void 0);

              _defineProperty(this, "phoneNumber", void 0);

              _defineProperty(this, "photo", void 0);

              _defineProperty(this, "promotionCode", void 0);

              _defineProperty(this, "promotionUrl", void 0);

              _defineProperty(this, "registerSource", void 0);

              _defineProperty(this, "vip", void 0);
            }

          }

          class Photo {
            constructor() {
              _defineProperty(this, "frame", void 0);

              _defineProperty(this, "headPhoto", void 0);
            }

          }

          class VIP {
            constructor() {
              _defineProperty(this, "experience", void 0);

              _defineProperty(this, "level", void 0);

              _defineProperty(this, "nextExperience", void 0);
            }

          }
        })(MyInfo || (MyInfo = _ResponseGPG.MyInfo || (_ResponseGPG.MyInfo = {})));

        let ValidateContactInfo;

        (function (_ValidateContactInfo) {
          class DataClass {
            constructor() {
              _defineProperty(this, "Status", new State());
            }

          }

          _ValidateContactInfo.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", void 0);

              _defineProperty(this, "Message", void 0);
            }

          }
        })(ValidateContactInfo || (ValidateContactInfo = _ResponseGPG.ValidateContactInfo || (_ResponseGPG.ValidateContactInfo = {})));

        let SendRegisterVerification;

        (function (_SendRegisterVerification) {
          class DataClass {
            constructor() {
              _defineProperty(this, "Status", new State());
            }

          }

          _SendRegisterVerification.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", void 0);

              _defineProperty(this, "Message", void 0);
            }

          }
        })(SendRegisterVerification || (SendRegisterVerification = _ResponseGPG.SendRegisterVerification || (_ResponseGPG.SendRegisterVerification = {})));

        let Certification;

        (function (_Certification) {
          class DataClass {
            constructor() {
              _defineProperty(this, "Data", null);

              _defineProperty(this, "access_token", null);

              _defineProperty(this, "refresh_token", null);

              _defineProperty(this, "Roles", null);

              _defineProperty(this, "ids_token", null);

              _defineProperty(this, "Status", new State());
            }

          }

          _Certification.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", void 0);

              _defineProperty(this, "Message", void 0);
            }

          }
        })(Certification || (Certification = _ResponseGPG.Certification || (_ResponseGPG.Certification = {})));
      })(ResponseGPG || _export("ResponseGPG", ResponseGPG = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResponseGPG.js.map