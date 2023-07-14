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

      _cclegacy._RF.push({}, "eba76udTv1D2pFvhzfL6nVF", "ResponsGPG", undefined);

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
          class ValidateContactInfo_Phone {
            constructor() {
              _defineProperty(this, "Phone", void 0);
            }

          }

          _Body.ValidateContactInfo_Phone = ValidateContactInfo_Phone;

          class ValidateContactInfo_Email {
            constructor() {
              _defineProperty(this, "Email", void 0);
            }

          }

          _Body.ValidateContactInfo_Email = ValidateContactInfo_Email;

          class RankList {}

          _Body.RankList = RankList;

          class MemberInfo {
            constructor() {
              _defineProperty(this, "sign", void 0);
            }

          }

          _Body.MemberInfo = MemberInfo;
        })(Body || (Body = _RequestGPG.Body || (_RequestGPG.Body = {})));

        var ResponseDataMyInfo;

        (function (_ResponseDataMyInfo) {
          class MyInfo {
            constructor() {
              _defineProperty(this, "Status", new State());

              _defineProperty(this, "data", new Data());
            }

          }

          _ResponseDataMyInfo.MyInfo = MyInfo;

          class State {
            constructor() {
              _defineProperty(this, "Code", "0");

              _defineProperty(this, "Message", "Success");
            }

          }

          class Data {
            constructor() {
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
        })(ResponseDataMyInfo || (ResponseDataMyInfo = _RequestGPG.ResponseDataMyInfo || (_RequestGPG.ResponseDataMyInfo = {})));

        var ResponseDataValidateContactInfo;

        (function (_ResponseDataValidateContactInfo) {
          class ValidateContactInfo {
            constructor() {
              _defineProperty(this, "Status", new State());
            }

          }

          _ResponseDataValidateContactInfo.ValidateContactInfo = ValidateContactInfo;

          class State {
            constructor() {
              _defineProperty(this, "Code", "0");

              _defineProperty(this, "Message", "Success");
            }

          }
        })(ResponseDataValidateContactInfo || (ResponseDataValidateContactInfo = _RequestGPG.ResponseDataValidateContactInfo || (_RequestGPG.ResponseDataValidateContactInfo = {})));

        var Method;

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
//# sourceMappingURL=ResponsGPG.js.map