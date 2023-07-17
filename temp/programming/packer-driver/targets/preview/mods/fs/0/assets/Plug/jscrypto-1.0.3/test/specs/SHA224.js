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
            Word32Array,
            SHA224
          } = require("../../test/build");

          describe("sha224", function () {
            it("digest '' as expected", function () {
              expect(SHA224.hash("").toString()).to.be("d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f");
            });
            it("digest 'The quick brown fox jumps over the lazy dog' as expected", function () {
              expect(SHA224.hash("The quick brown fox jumps over the lazy dog").toString()).to.be("730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525");
            });
            it("digest 'The quick brown fox jumps over the lazy dog.' as expected", function () {
              expect(SHA224.hash("The quick brown fox jumps over the lazy dog.").toString()).to.be("619cba8e8e05826e9b8c519c0a5c68f4fb653e8a3d8aa04bb2c8cd4c");
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=SHA224.js.map