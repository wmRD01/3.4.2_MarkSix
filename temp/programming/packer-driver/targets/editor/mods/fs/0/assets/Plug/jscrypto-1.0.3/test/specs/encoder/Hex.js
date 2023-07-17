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
            Word32Array
          } = require("../../../test/build");

          describe("encoder/Hex", function () {
            it("test stringify", function () {
              const expectedValue = "12345678";
              expect(Hex.stringify(new Word32Array([0x12345678]))).to.be(expectedValue);
            });
            it("test parse", function () {
              const expectedValue = new Word32Array([0x12345678]).toString();
              expect(Hex.parse("12345678").toString()).to.be(expectedValue);
            });
            it("raises error on parsing invalid Hex string", function () {
              expect(() => Hex.parse("1g")).to.throwException(/^Invalid Hex string: 1g$/);
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=Hex.js.map