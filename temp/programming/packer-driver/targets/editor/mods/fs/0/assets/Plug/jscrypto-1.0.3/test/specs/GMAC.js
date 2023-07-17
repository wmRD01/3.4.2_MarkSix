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
          "../../test/build": _req2
        }, _require);

        (function () {
          const expect = require("expect.js");

          const {
            GMAC,
            Hex
          } = require("../../test/build");

          describe("gmac", function () {
            it("test mac with AAD (GMAC)", function () {
              const key = Hex.parse("55804F3AEB4E914DC91255944A1F565A");
              const iv = Hex.parse("BBBBBBBBBBBBBBBBBBBBBBBB");
              const aad = Hex.parse("1063509E5A672C092CAD0B1DC6CE009A61AAAAAAAAAAAA");
              expect(GMAC(aad, key, iv).toString().slice(0, 24)).to.be("44c955d63799428524e97993");
            });
            it("test mac with AAD (GMAC) with tagLength", function () {
              const key = Hex.parse("55804F3AEB4E914DC91255944A1F565A");
              const iv = Hex.parse("BBBBBBBBBBBBBBBBBBBBBBBB");
              const aad = Hex.parse("1063509E5A672C092CAD0B1DC6CE009A61AAAAAAAAAAAA");
              const tagLength = 8;
              expect(GMAC(aad, key, iv, tagLength).toString()).to.be("44c955d637994285");
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=GMAC.js.map