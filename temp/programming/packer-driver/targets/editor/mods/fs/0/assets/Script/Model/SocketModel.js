System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseComponent, IsBuildSelfServer, IsEditor, IsGitHub, IsGPGServer, IsInpokerBestServer, IsPhone, IsVAServer, SocketModel, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfURLVlaue(extras) {
    _reporterNs.report("URLVlaue", "../Contorll/Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsBuildSelfServer(extras) {
    _reporterNs.report("IsBuildSelfServer", "./JudgePlatform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsEditor(extras) {
    _reporterNs.report("IsEditor", "./JudgePlatform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsGitHub(extras) {
    _reporterNs.report("IsGitHub", "./JudgePlatform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsGPGServer(extras) {
    _reporterNs.report("IsGPGServer", "./JudgePlatform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsInpokerBestServer(extras) {
    _reporterNs.report("IsInpokerBestServer", "./JudgePlatform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsPhone(extras) {
    _reporterNs.report("IsPhone", "./JudgePlatform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsVAServer(extras) {
    _reporterNs.report("IsVAServer", "./JudgePlatform", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      IsBuildSelfServer = _unresolved_3.IsBuildSelfServer;
      IsEditor = _unresolved_3.IsEditor;
      IsGitHub = _unresolved_3.IsGitHub;
      IsGPGServer = _unresolved_3.IsGPGServer;
      IsInpokerBestServer = _unresolved_3.IsInpokerBestServer;
      IsPhone = _unresolved_3.IsPhone;
      IsVAServer = _unresolved_3.IsVAServer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d543di2LQxAKrzaG4k0wOj9", "SocketModel", undefined);

      _export("default", SocketModel = class SocketModel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "serverhost", void 0);

          _defineProperty(this, "serverport", void 0);

          _defineProperty(this, "connectionType", void 0);

          _defineProperty(this, "LoginState", void 0);

          _defineProperty(this, "httpServerURL", void 0);

          _defineProperty(this, "UserLanguage", void 0);

          _defineProperty(this, "ContainLanguage", ["tw", "cn", "en", "vn", "th", "id", "jp"]);

          _defineProperty(this, "FormatLanguageURL", void 0);

          _defineProperty(this, "libPath", void 0);

          _defineProperty(this, "loadServerLanguage", void 0);

          _defineProperty(this, "loadGameLanguage", void 0);

          _defineProperty(this, "account", void 0);

          _defineProperty(this, "agentId", void 0);

          _defineProperty(this, "usertoken", void 0);

          _defineProperty(this, "backHomeURL", void 0);

          _defineProperty(this, "recordeURL", void 0);

          _defineProperty(this, "urlData", undefined);

          _defineProperty(this, "staoredValueUrl", void 0);

          _defineProperty(this, "companyIcon", void 0);

          _defineProperty(this, "loadLanguageCount", void 0);

          _defineProperty(this, "coinType", 0);

          _defineProperty(this, "DepositURL", void 0);

          _defineProperty(this, "isClose", false);

          _defineProperty(this, "webSocket", void 0);
        }

        // layout: string;
        // /**
        //  * 是否有手勢
        //  */
        // windows: String;
        // Game Server
        Setting() {
          // this.serverhost = "211.22.137.96"; // server host
          // this.ConnectionType = "ws"
          this.serverhost = "inpoker.va-game.com"; // server host

          this.connectionType = "ws";
          this.serverport = 10004; // 創防版本port server port

          this.LoginState = "2"; // 0註冊 1登入 2遊客, 3:正式.

          let serverhost = this.serverhost == "inpoker.best" || this.serverhost == "211.22.137.96" ? "inpoker.best" : "inpoker.fun";
          this.httpServerURL = "http://" + serverhost + "/"; // HTTP Server URL

          this.UserLanguage = "tw"; // 

          this.libPath = this.checkLanguagePath(); // 語言包路徑
          // console.log(this.libPath);  
          // console.log(window.location.href.indexOf("github"));

          this.loadLanguageCount = 0; // 語言包載入數
          // Member Info

          this.backHomeURL = ""; // 遊戲返回網址
          // this.account = "Test0" + Math.floor(Math.random() * 24); // 會員帳號

          this.account = "2324";
          this.usertoken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTg2MzU1MjYsImV4cCI6MTcwMTIyNzUyNiwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiNTc3OSIsImF1dGhfdGltZSI6MTY5ODYzNTUyNiwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjU3NzkiLCJqdGkiOiJDM0FFQ0Q3RTJFN0VEMzg3RjU2QkVFOUE1RUE2RTAwNCIsImlhdCI6MTY5ODYzNTUyNiwic2NvcGUiOlsiZ2FtZS5saW5rIiwibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiLCJyZXBvcnQucmVhZCIsInJlcG9ydC53cml0ZSJdLCJhbXIiOlsibWtfcGhvbmUiXX0.xqKpRqydOApkLKiRpmriikrFjB_mXuljPeMhQ2E1w--3Xgh1oTQ-ehWjNciDHhCANicCYoCncx9nolRGdnPZWgranxF-jzD3UIEmEjUmJOxK11xgdLanMGVgO2SrA9DetkJU7xSF3gvZxcwDSwnGoPK205ohhsRrc0rudVQHURqZbk8_ShJTYtQfDrayTXXZet_O88mILkQUh0bwT745IiFrsdq5MNgXoI9uGvGT1LnZ37uKDyle58jCFzbQ4JqDUnnRAhluUDJgp1E2FNKvV_azcV3zrfFAWChH7fCY7_vTE2Xq0uxMzGyJs6ERs7RpXL99olhBnor8A8N7VwST6A";
          this.companyIcon = "WM"; // 公司Icon名稱

          this.urlData = this.handleURLData(window.location.href);
          this.UserLanguage = this.urlData == undefined ? this.UserLanguage : this.UserLanguage;
          this.UserLanguage = this.ContainLanguage.filter(L => L == this.UserLanguage).length <= 0 ? "tw" : this.UserLanguage;
        }

        judgePlatorm() {
          new (_crd && IsGPGServer === void 0 ? (_reportPossibleCrUseOfIsGPGServer({
            error: Error()
          }), IsGPGServer) : IsGPGServer)(window.location.href);
          new (_crd && IsInpokerBestServer === void 0 ? (_reportPossibleCrUseOfIsInpokerBestServer({
            error: Error()
          }), IsInpokerBestServer) : IsInpokerBestServer)(window.location.href);
          new (_crd && IsVAServer === void 0 ? (_reportPossibleCrUseOfIsVAServer({
            error: Error()
          }), IsVAServer) : IsVAServer)(window.location.href);
          new (_crd && IsEditor === void 0 ? (_reportPossibleCrUseOfIsEditor({
            error: Error()
          }), IsEditor) : IsEditor)(window.location.href);
          new (_crd && IsBuildSelfServer === void 0 ? (_reportPossibleCrUseOfIsBuildSelfServer({
            error: Error()
          }), IsBuildSelfServer) : IsBuildSelfServer)(window.location.href);
          new (_crd && IsGitHub === void 0 ? (_reportPossibleCrUseOfIsGitHub({
            error: Error()
          }), IsGitHub) : IsGitHub)(window.location.href);
          new (_crd && IsPhone === void 0 ? (_reportPossibleCrUseOfIsPhone({
            error: Error()
          }), IsPhone) : IsPhone)();
        }

        checkGPG() {
          let getURL = window.location.href;
          if (getURL.indexOf("inpoker.best") != -1) return true;else return false;
        }

        checkLanguagePath() {
          if (window.isVAServer || window.isInpokerServer) return "../../lib/"; // 語言包路徑
          else if (window.isGitServer) return "https://wmrd01.github.io/BaccaratPlay/lib/";else //預設 // 本地端
              return "http://10.20.13.141/JaiJaiTest/lib/"; // return "http://192.168.4.61/JaiJaiTest/lib/"
          // return "http://192.168.89.61/JaiJaiTest/lib/"
          // return "http://192.168.0.238/JaiJaiTest/lib/"
        }

        handleURLData(_url) {
          //  _url = "https://play1.godplay.app/10001/index.html?loginType=web&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0aW1lIjoxNjY4NzYyMjcwMDQ1LCJ1aWQiOiJYUGpST1oiLCJkYyI6IkdQRyIsImFnZW50SWQiOiJ0ckUzeW1XaURMYjIiLCJicmFuZElkIjoiR1BHIiwiYnJhbmRUaXRsZSI6IkdQRyIsImdhbWVJZCI6IjEwMDAxIiwiaWF0IjoxNjY4NzYyMjcwLCJleHAiOjE2Njg3NjU4NzB9.k_GVGPiQCjWxhFG3SGM2zoSy_ggN2cZXuUQ5GvqZib_0TCJ2ul9K5xbTKkgwm7OUw7nMCWLWlwERHc0MMF586SgjuQe9W7SoRSMaBtw_AkiKNn4S1NMvhemgNAdIyjL7I1Gg5xyT-x110RF73lF-yt-n6KKTP3TGkd7wR9_fPz8&record=https://backendsystem.godplay.app/wList&dc=GPG&agentId=trE3ymWiDLb2&GGID=1&lang=tw&forceExchange=true&providerlogo=true"
          // console.log(_url.split("?")[1].split("&"));
          // console.log(_url.split("?")[1]);
          if (_url.split("?")[1] == undefined) return undefined;

          let arr = _url.split("?")[1].split("&");

          let obj = new Object();

          for (let index = 0; index < arr.length; index++) {
            let cut = arr[index].split("=");
            obj[cut[0]] = cut[1];
          } // console.log(obj);


          return obj;
        }

        eventClarity(c, l, a, r, i, t, y) {
          c[a] = c[a] || function () {
            (c[a].q = c[a].q || []).push(arguments);
          };

          t = l.createElement(r);
          t.async = 1;
          t.src = "https://www.clarity.ms/tag/" + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SocketModel.js.map