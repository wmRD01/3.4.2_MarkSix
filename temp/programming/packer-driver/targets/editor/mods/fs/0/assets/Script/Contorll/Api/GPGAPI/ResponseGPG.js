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

        let Nickname;

        (function (_Nickname) {
          class DataClass {
            constructor() {
              _defineProperty(this, "Status", new State());
            }

          }

          _Nickname.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", void 0);

              _defineProperty(this, "Message", void 0);
            }

          }
        })(Nickname || (Nickname = _ResponseGPG.Nickname || (_ResponseGPG.Nickname = {})));

        let UploadAvatar;

        (function (_UploadAvatar) {
          class DataClass {
            constructor() {
              _defineProperty(this, "AvatarUrl", void 0);

              _defineProperty(this, "Status", new State());
            }

          }

          _UploadAvatar.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", void 0);

              _defineProperty(this, "Message", void 0);
            }

          }
        })(UploadAvatar || (UploadAvatar = _ResponseGPG.UploadAvatar || (_ResponseGPG.UploadAvatar = {})));

        let CertifiedEmall;

        (function (_CertifiedEmall) {
          class DataClass {
            constructor() {
              _defineProperty(this, "data", null);

              _defineProperty(this, "access_token", null);

              _defineProperty(this, "refresh_token", null);

              _defineProperty(this, "Roles", null);

              _defineProperty(this, "ids_token", null);

              _defineProperty(this, "Status", new State());
            }

          }

          _CertifiedEmall.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", void 0);

              _defineProperty(this, "Message", void 0);
            }

          }
        })(CertifiedEmall || (CertifiedEmall = _ResponseGPG.CertifiedEmall || (_ResponseGPG.CertifiedEmall = {})));

        let DrawHistory;

        (function (_DrawHistory) {
          class DataClass {
            constructor() {
              _defineProperty(this, "data", []);

              _defineProperty(this, "Status", new State());
            }

          }

          _DrawHistory.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", void 0);

              _defineProperty(this, "Message", void 0);
            }

          }

          class History {
            constructor() {
              _defineProperty(this, "drawCode", void 0);

              _defineProperty(this, "issueID", void 0);

              _defineProperty(this, "openDate", void 0);

              _defineProperty(this, "realOpenDate", void 0);
            }

          }

          _DrawHistory.History = History;
        })(DrawHistory || (DrawHistory = _ResponseGPG.DrawHistory || (_ResponseGPG.DrawHistory = {})));

        let DrawUpcoming;

        (function (_DrawUpcoming) {
          class DataClass {
            constructor() {
              _defineProperty(this, "data", []);

              _defineProperty(this, "Status", new State());
            }

          }

          _DrawUpcoming.DataClass = DataClass;

          class State {
            constructor() {
              _defineProperty(this, "Code", void 0);

              _defineProperty(this, "Message", void 0);
            }

          }

          class History {
            constructor() {
              _defineProperty(this, "drawCode", void 0);

              _defineProperty(this, "issueID", void 0);

              _defineProperty(this, "openDate", void 0);

              _defineProperty(this, "realOpenDate", void 0);
            }

          }

          _DrawUpcoming.History = History;
        })(DrawUpcoming || (DrawUpcoming = _ResponseGPG.DrawUpcoming || (_ResponseGPG.DrawUpcoming = {})));
      })(ResponseGPG || _export("ResponseGPG", ResponseGPG = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResponseGPG.js.map