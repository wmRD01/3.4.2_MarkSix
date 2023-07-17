System.register(["expect.js", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _req, _req2, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_expectJs) {
      _req = _expectJs.__cjsMetaURL;
    }, function (_unresolved_) {
      _req2 = _unresolved_.__cjsMetaURL;
    }, function (_unresolved_2) {
      _loader = _unresolved_2.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "expect.js": _req,
          "../../test/build": _req2
        }, _require);

        (function () {
          var expect = require("expect.js");

          var {
            CBCMAC,
            Hex
          } = require("../../test/build");

          describe("cbc-mac", function () {
            it("test mac with plaintext and associated data", function () {
              var plainText = Hex.parse("20212223");
              var ad = Hex.parse("0001020304050607");
              var key = Hex.parse("404142434445464748494a4b4c4d4e4f");
              var nonce = Hex.parse("10111213141516");
              var t = 32 / 8;
              expect(CBCMAC(plainText, ad, key, nonce, t).toString()).to.be("4dac255d");
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=CBCMAC.js.map