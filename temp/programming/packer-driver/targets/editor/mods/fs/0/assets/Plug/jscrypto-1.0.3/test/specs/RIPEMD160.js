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
            Word32Array,
            RIPEMD160
          } = require("../../test/build");

          describe("ripemd160", function () {
            it("digest 'The quick brown fox jumps over the lazy dog' as expected", function () {
              expect(RIPEMD160.hash("The quick brown fox jumps over the lazy dog").toString()).to.be("37f332f68db77bd9d7edd4969571ad671cf9dd3b");
            });
            it("digest 'The quick brown fox jumps over the lazy cog' as expected", function () {
              expect(RIPEMD160.hash("The quick brown fox jumps over the lazy cog").toString()).to.be("132072df690933835eb8b6ad0b77e7b6f14acad7");
            });
            it("digest '' as expected", function () {
              expect(RIPEMD160.hash("").toString()).to.be("9c1185a5c5e9fc54612808977ee8f548b2258d31");
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=RIPEMD160.js.map