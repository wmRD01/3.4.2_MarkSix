System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, RequestGPG;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("RequestGPG", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8530ycn9xGXYMJyiPsRjZ2", "RequestGPG", undefined);

      (function (_RequestGPG) {
        class Request {
          constructor() {
            _defineProperty(this, "method", Method.Get);

            _defineProperty(this, "headers", new Headers());

            _defineProperty(this, "body", void 0);
          }

          setMethod(_method) {
            this.method = _method;
            return this;
          }

          setHeaders(_headers) {
            this.headers = _headers;
            return this;
          }

          setToken(str) {
            this.headers.Authorization = str;
            return this;
          }

          setBody(_body) {
            this.body = _body;
            return this;
          }

          async fetchData(_url, callback) {
            return new Promise((resolve, reject) => {
              fetch(_url, this).then(response => response.json()).then(response => callback(response)).then(resolve);
            });
          }

        }

        _RequestGPG.Request = Request;

        class Headers {
          constructor() {
            _defineProperty(this, "Content-Type", "application/json, text/plain, */*");

            _defineProperty(this, "Accept", "application/json;charset=UTF-8");

            _defineProperty(this, "Authorization", "");
          }

        }

        let Body;

        (function (_Body) {
          class ValidateContactInfo {
            constructor() {
              _defineProperty(this, "Phone", void 0);

              _defineProperty(this, "Email", void 0);
            }

          }

          _Body.ValidateContactInfo = ValidateContactInfo;

          class RankList {}

          _Body.RankList = RankList;

          class MemberInfo {
            constructor() {
              _defineProperty(this, "sign", void 0);
            }

          }

          _Body.MemberInfo = MemberInfo;

          class SendLoginVerification {
            constructor() {
              _defineProperty(this, "Locale", "zh-TW");

              _defineProperty(this, "Email", void 0);
            }

          }

          _Body.SendLoginVerification = SendLoginVerification;

          class Certification {
            constructor() {
              _defineProperty(this, "VerifyCode", void 0);

              _defineProperty(this, "Email", void 0);

              _defineProperty(this, "sign", void 0);
            }

          }

          _Body.Certification = Certification;
        })(Body || (Body = _RequestGPG.Body || (_RequestGPG.Body = {})));

        let Method;

        (function (Method) {
          Method["Get"] = "Get";
          Method["POST"] = "POST";
        })(Method || (Method = {}));

        _RequestGPG.Method = Method;
      })(RequestGPG || _export("RequestGPG", RequestGPG = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RequestGPG.js.map