System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, sys, IsGPGServer, IsVAServer, IsInpokerBestServer, IsEditor, IsBuildSelfServer, IsGitHub, IsPhone, _crd;

  _export({
    IsGPGServer: void 0,
    IsVAServer: void 0,
    IsInpokerBestServer: void 0,
    IsEditor: void 0,
    IsBuildSelfServer: void 0,
    IsGitHub: void 0,
    IsPhone: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "920a2G2XmJEXKMEi4LPA+N9", "JudgePlatform", undefined);

      _export("IsGPGServer", IsGPGServer = class IsGPGServer {
        constructor(_url) {
          if (_url.indexOf("victor-win.club") != -1) {
            window.isGPGServer = true;
            window.isVAServer = true;
          }
        }

      });

      _export("IsVAServer", IsVAServer = class IsVAServer {
        constructor(_url) {
          if (window.GameServerSocket != null) window.isVAServer = true;
        }

      });

      _export("IsInpokerBestServer", IsInpokerBestServer = class IsInpokerBestServer {
        constructor(_url) {
          if (_url.indexOf("inpoker.best") != -1) window.isInpokerServer = true;
        }

      });

      _export("IsEditor", IsEditor = class IsEditor {
        constructor(_url) {
          if (_url.indexOf("localhost") != -1) {
            // window.isGPGServer = true
            window.isEditor = true;
          }
        }

      });

      _export("IsBuildSelfServer", IsBuildSelfServer = class IsBuildSelfServer {
        constructor(_url) {
          if (_url.indexOf("10.20.13") != -1) {
            // window.isGPGServer = true
            window.isBuildSelf = true;
          }
        }

      });

      _export("IsGitHub", IsGitHub = class IsGitHub {
        constructor(_url) {
          if (_url.indexOf("github") != -1) window.isGitServer = true;
        }

      });

      _export("IsPhone", IsPhone = class IsPhone {
        constructor() {
          if (sys.os == sys.OS.ANDROID || sys.os == sys.OS.IOS) {
            window.isPhone = true;
          } else window.isPhone = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=JudgePlatform.js.map