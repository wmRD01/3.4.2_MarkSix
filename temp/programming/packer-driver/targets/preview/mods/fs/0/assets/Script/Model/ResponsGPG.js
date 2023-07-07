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

      _cclegacy._RF.push({}, "eba76udTv1D2pFvhzfL6nVF", "ResponsGPG", undefined);

      (function (_RequestGPG) {
        class Request {
          constructor() {
            _defineProperty(this, "method", Method.Get);

            _defineProperty(this, "headers", new Headers());

            _defineProperty(this, "body", void 0);
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
          class ValidateContactInfo {
            constructor() {
              _defineProperty(this, "Phone", void 0);
            }

          }

          _Body.ValidateContactInfo = ValidateContactInfo;

          class RankList {}

          _Body.RankList = RankList;
        })(Body || (Body = _RequestGPG.Body || (_RequestGPG.Body = {})));

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