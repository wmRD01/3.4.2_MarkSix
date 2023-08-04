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
            this.headers.Authorization = `Bearer ${str}`;
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

          async fetchData(_url, callback) {
            // console.log(_url);
            console.log(this); // console.log(_url.split("?"));
            // console.log(_url.split("?")[0].split("/"));
            // console.log(_url.split("?")[0].split("/")[_url.split("?")[0].split("/").length]);

            return new Promise((resolve, reject) => {
              let data;
              fetch(_url, this).then(response => response.json()).then(response => data = response).catch(err => reject).then(response => console.log(`資料名稱：${_url.split("?")[0].split("/")[_url.split("?")[0].split("/").length - 1]}`)).then(response => console.log(`資料內容`, data)).then(response => callback(data)).then(resolve);
            });
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

        let Body;

        (function (_Body) {
          let NeedToken;

          (function (_NeedToken) {
            class base {
              constructor() {
                _defineProperty(this, "sign", void 0);
              }

            }

            _NeedToken.base = base;

            class CertifiedEmail extends base {
              constructor(...args) {
                super(...args);

                _defineProperty(this, "verifyCode", void 0);

                _defineProperty(this, "email", void 0);
              }

            }

            _NeedToken.CertifiedEmail = CertifiedEmail;

            class MyInfo extends base {}

            _NeedToken.MyInfo = MyInfo;

            class Nickname extends base {
              constructor(...args) {
                super(...args);

                _defineProperty(this, "nickname", void 0);
              }

            }

            _NeedToken.Nickname = Nickname;

            class DrawHistory extends base {
              constructor(...args) {
                super(...args);

                _defineProperty(this, "top", void 0);
              }

            }

            _NeedToken.DrawHistory = DrawHistory;

            class DrawUpcoming extends base {}

            _NeedToken.DrawUpcoming = DrawUpcoming;

            class UploadAvatar extends base {
              constructor(...args) {
                super(...args);

                _defineProperty(this, "file", void 0);
              }

            }

            _NeedToken.UploadAvatar = UploadAvatar;

            class Betlog extends base {
              constructor(...args) {
                super(...args);

                _defineProperty(this, "sDate", void 0);

                _defineProperty(this, "eDate", void 0);
              }

            }

            _NeedToken.Betlog = Betlog;

            class TopScore extends base {
              constructor(...args) {
                super(...args);

                _defineProperty(this, "sDate", void 0);

                _defineProperty(this, "eDate", void 0);
              }

            }

            _NeedToken.TopScore = TopScore;
          })(NeedToken || (NeedToken = _Body.NeedToken || (_Body.NeedToken = {})));

          let NotNeedToken;

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

        let ContentType;

        (function (ContentType) {
          ContentType["Default"] = "";
          ContentType["Json"] = "application/json, text/plain, */*";
          ContentType["FormData"] = "multipart/form-data";
        })(ContentType || (ContentType = {}));

        _RequestGPG.ContentType = ContentType;
        let Method;

        (function (Method) {
          Method["Get"] = "Get";
          Method["POST"] = "POST";
        })(Method || (Method = {}));

        _RequestGPG.Method = Method;
        let APIUrl;

        (function (APIUrl) {
          APIUrl["playAPI"] = "https://play-api.godplay.app";
          APIUrl["ids"] = "https://ids.godplay.app";
          APIUrl["QA_playAPI"] = "https://play-api.ceis.tw";
          APIUrl["QA_ids"] = "https://ids.ceis.tw";
        })(APIUrl || (APIUrl = {}));

        _RequestGPG.APIUrl = APIUrl;
        let API;

        (function (API) {
          API["UploadAvatar"] = "/Member/UploadAvatar";
          API["CertifiedEmall"] = "/Member/CertifiedEmail";
          API["MyInfo"] = "/Member/MyInfo";
          API["Nickname"] = "/Member/Nickname";
          API["SendLoginVerification"] = "/Token/SendLoginVerification ";
          API["SendRegisterVerification"] = "/Token/SendRegisterVerification";
          API["ValidateContactInfo"] = "/Token/ValidateContactInfo";
          API["DrawHistory"] = "/Mark6/Draw_History";
          API["DrawUpcoming"] = "/Mark6/Draw_Upcoming";
          API["TopScore"] = "/Mark6/Top_Score";
          API["Betlog"] = "/Report/Betlog/Get";
        })(API || (API = {}));

        _RequestGPG.API = API;
      })(RequestGPG || _export("RequestGPG", RequestGPG = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RequestGPG.js.map