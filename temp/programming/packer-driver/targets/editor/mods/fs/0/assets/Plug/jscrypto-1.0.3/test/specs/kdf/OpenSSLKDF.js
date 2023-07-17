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
        let require = _loader.createRequireWithReqMap({
          "expect.js": _req,
          "../../../test/build": _req2
        }, _require);

        (function () {
          const expect = require("expect.js");

          const {
            Hex,
            OpenSSLKDF,
            EvpKDF
          } = require("../../../test/build");

          describe("kdf/OpenSSLKDF", function () {
            it("test vector", function () {
              const derivedParams = OpenSSLKDF.execute("password", 256 / 32, 128 / 32, Hex.parse("0a9d8620cf7219f1"), {
                kdfModule: EvpKDF
              });
              expect(derivedParams.key.toString()).to.be("50f32e0ec9408e02ff42364a52aac95c3694fc027256c6f488bf84b8e60effcd");
              expect(derivedParams.iv.toString()).to.be("81381e39b94fd692dff7e2239a298cb6");
              expect(derivedParams.salt.toString()).to.be("0a9d8620cf7219f1");
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=OpenSSLKDF.js.map