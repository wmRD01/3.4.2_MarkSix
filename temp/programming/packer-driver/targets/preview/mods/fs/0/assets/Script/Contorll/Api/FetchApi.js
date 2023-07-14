System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FetchApi, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d105O9ub9BZ4n1x2g18z0u", "FetchApi", undefined);

      _export("default", FetchApi = class FetchApi {
        constructor(_url) {
          _defineProperty(this, "url", "");

          this.url = _url;
        }

        requrst() {// const url = "https://a1-gpg.ceis.tw/Token/ValidateContactInfo"
          // const request = new RequestGPG.Request()
          // request.method = RequestGPG.Method.POST
          // const body = new RequestGPG.Body.ValidateContactInfo()
          // body.Phone = `+886999999999`
          // request.body = JSON.stringify(body)
          // fetch(url, request)
          //     .then(this.我轉資料)
          //     .then(this.我拿資料囉)
          // console.log("你會等我?");
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