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

          deletContentType() {
            delete this.headers["Content-Type"];
            return this;
          }

          setContentType(type) {
            this.headers["Content-Type"] = type;
            return this;
          }

          fetchData(_url, callback) {
            var _this = this;

            return _asyncToGenerator(function* () {
              // console.log(_url);
              console.log(_this); // console.log(_url.split("?"));
              // console.log(_url.split("?")[0].split("/"));
              // console.log(_url.split("?")[0].split("/")[_url.split("?")[0].split("/").length]);

              return new Promise((resolve, reject) => {
                var data;
                fetch(_url, _this).then(response => response.json()).then(response => data = response).catch(err => reject).then(response => console.log("\u8CC7\u6599\u540D\u7A31\uFF1A" + _url.split("?")[0].split("/")[_url.split("?")[0].split("/").length - 1])).then(response => console.log("\u8CC7\u6599\u5167\u5BB9", data)).then(response => callback(data)).then(resolve);
              });
            })();
          }

        }

        _RequestGPG.Request = Request;

        class Headers {
          constructor() {
            _defineProperty(this, "Content-Type", ContentType.Json);

            _defineProperty(this, "Accept", "application/json;charset=UTF-8");

            _defineProperty(this, "Authorization", "");
          }

        }

        var Body;

        (function (_Body) {
          var NeedToken;

          (function (_NeedToken) {
            class base {
              constructor() {
                _defineProperty(this, "sign", void 0);
              }

            }

            _NeedToken.base = base;

            class CertifiedEmail extends base {
              constructor() {
                super(...arguments);

                _defineProperty(this, "verifyCode", void 0);

                _defineProperty(this, "email", void 0);
              }

            }

            _NeedToken.CertifiedEmail = CertifiedEmail;

            class MyInfo extends base {}

            _NeedToken.MyInfo = MyInfo;

            class Nickname extends base {
              constructor() {
                super(...arguments);

                _defineProperty(this, "nickname", void 0);
              }

            }

            _NeedToken.Nickname = Nickname;

            class DrawHistory extends base {
              constructor() {
                super(...arguments);

                _defineProperty(this, "top", void 0);
              }

            }

            _NeedToken.DrawHistory = DrawHistory;

            class DrawUpcoming extends base {}

            _NeedToken.DrawUpcoming = DrawUpcoming;

            class UploadAvatar extends base {
              constructor() {
                super(...arguments);

                _defineProperty(this, "file", void 0);
              }

            }

            _NeedToken.UploadAvatar = UploadAvatar;
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

            class SendRegisterVerification {
              constructor() {
                _defineProperty(this, "Locale", "zh-TW");

                _defineProperty(this, "Phone", void 0);

                _defineProperty(this, "Email", void 0);
              }

            }

            _NotNeedToken.SendRegisterVerification = SendRegisterVerification;
          })(NotNeedToken || (NotNeedToken = _Body.NotNeedToken || (_Body.NotNeedToken = {})));
        })(Body || (Body = _RequestGPG.Body || (_RequestGPG.Body = {})));

        var ContentType;

        (function (ContentType) {
          ContentType["Default"] = "";
          ContentType["Json"] = "application/json, text/plain, */*";
          ContentType["FormData"] = "multipart/form-data";
        })(ContentType || (ContentType = {}));

        _RequestGPG.ContentType = ContentType;
        var Method;

        (function (Method) {
          Method["Get"] = "Get";
          Method["POST"] = "POST";
        })(Method || (Method = {}));

        _RequestGPG.Method = Method;
        var APIUrl;

        (function (APIUrl) {
          APIUrl["playAPI"] = "https://play-api.ceis.tw";
          APIUrl["ids"] = "https://ids.ceis.tw";
        })(APIUrl || (APIUrl = {}));

        _RequestGPG.APIUrl = APIUrl;
        var API;

        (function (API) {
          API["UploadAvatar"] = "/Member/UploadAvatar";
          API["CertifiedEmall"] = "/Member/CertifiedEmail";
          API["MyInfo"] = "/Member/MyInfo";
          API["Nickname"] = "/Member/Nickname";
          API["SendRegisterVerification"] = "/Token/SendRegisterVerification";
          API["ValidateContactInfo"] = "/Token/ValidateContactInfo";
          API["DrawHistory"] = "/Mark6/Draw_History";
          API["DrawUpcoming"] = "/Mark6/Draw_Upcoming";
          API["TopScore"] = "/Mark6/Top_Score";
        })(API || (API = {}));

        _RequestGPG.API = API;
      })(RequestGPG || _export("RequestGPG", RequestGPG = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RequestGPG.js.map