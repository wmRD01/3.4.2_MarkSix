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
          "../../../test/build": _req2
        }, _require);

        (function () {
          var expect = require("expect.js");

          var {
            Latin1,
            Word32Array
          } = require("../../../test/build");

          describe("encoder/Latin1", function () {
            it("test stringify", function () {
              var expectedValue = "\x12\x34\x56\x78";
              expect(Latin1.stringify(new Word32Array([0x12345678]))).to.be(expectedValue);
            });
            it("test parse", function () {
              var expectedValue = new Word32Array([0x12345678]).toString();
              expect(Latin1.parse("\x12\x34\x56\x78").toString()).to.be(expectedValue);
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=Latin1.js.map