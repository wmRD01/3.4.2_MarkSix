System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, RequestGPG;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

          fetchData(_url, callback) {
            var _this = this;

            return _asyncToGenerator(function* () {
              return new Promise((resolve, reject) => {
                fetch(_url, _this).then(response => response.json()).then(response => callback(response)).then(resolve);
              });
            })();
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

        var Body;

        (function (_Body) {
          var NeedToken;

          (function (_NeedToken) {
            class temp {
              constructor() {
                _defineProperty(this, "verifyCode", void 0);

                _defineProperty(this, "email", void 0);
              }

            }

            _NeedToken.temp = temp;

            class CertifiedEmail {
              constructor() {
                _defineProperty(this, "verifyCode", void 0);

                _defineProperty(this, "email", void 0);

                _defineProperty(this, "sign", void 0);
              }

            }

            _NeedToken.CertifiedEmail = CertifiedEmail;

            class MemberInfo {
              constructor() {
                _defineProperty(this, "sign", void 0);
              }

            }

            _NeedToken.MemberInfo = MemberInfo;
          })(NeedToken || (NeedToken = _Body.NeedToken || (_Body.NeedToken = {})));

          var NotNeedToken;

          (function (_NotNeedToken) {
            class ValidateContactInfo {
              constructor() {
                _defineProperty(this, "Phone", void 0);

                _defineProperty(this, "Email", void 0);
              }

            }

            _NotNeedToken.ValidateContactInfo = ValidateContactInfo;

            class RankList {}

            _NotNeedToken.RankList = RankList;

            class SendLoginVerification {
              constructor() {
                _defineProperty(this, "Locale", "zh-TW");

                _defineProperty(this, "Email", void 0);
              }

            }

            _NotNeedToken.SendLoginVerification = SendLoginVerification;
          })(NotNeedToken || (NotNeedToken = _Body.NotNeedToken || (_Body.NotNeedToken = {})));
        })(Body || (Body = _RequestGPG.Body || (_RequestGPG.Body = {})));

        var Method;

        (function (Method) {
          Method["Get"] = "Get";
          Method["POST"] = "POST";
        })(Method || (Method = {}));

        _RequestGPG.Method = Method;
        var APIUrl;

        (function (APIUrl) {
          APIUrl["ValidateContactInfo"] = "";
        })(APIUrl || (APIUrl = {}));

        _RequestGPG.APIUrl = APIUrl;
      })(RequestGPG || _export("RequestGPG", RequestGPG = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RequestGPG.js.map