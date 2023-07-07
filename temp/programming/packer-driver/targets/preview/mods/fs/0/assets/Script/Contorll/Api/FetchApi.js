System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RequestGPG, FetchApi, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../../Model/ResponsGPG", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RequestGPG = _unresolved_2.RequestGPG;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d105O9ub9BZ4n1x2g18z0u", "FetchApi", undefined);

      _export("default", FetchApi = class FetchApi {
        constructor(_url) {
          _defineProperty(this, "url", "");

          this.url = _url;
        }

        requrst() {
          var url = "https://a1-gpg.ceis.tw/Token/ValidateContactInfo";
          var request = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request();
          request.method = (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Method.POST;
          var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.ValidateContactInfo();
          body.Phone = "+886999999999";
          request.body = JSON.stringify(body);
          fetch(url, request).then(this.我轉資料).then(this.我拿資料囉);
          console.log("你會等我?");
        }

        我轉資料(response) {
          return response.json();
        }

        我拿資料囉(response) {
          console.log("哈哈哈宋拉", response);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FetchApi.js.map