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
            Utf8,
            Word32Array
          } = require("../../../test/build");

          describe("encoder/Utf8", function () {
            it("test stringify 1", function () {
              var expectedValue = "$";
              expect(Utf8.stringify(new Word32Array([0x24000000], 1))).to.be(expectedValue);
            });
            it("test stringify 2", function () {
              var expectedValue = "¢";
              expect(Utf8.stringify(new Word32Array([0xc2a20000], 2))).to.be(expectedValue);
            });
            it("test stringify 3", function () {
              var expectedValue = "€";
              expect(Utf8.stringify(new Word32Array([0xe282ac00], 3))).to.be(expectedValue);
            });
            it("test stringify 4", function () {
              var expectedValue = "𤭢";
              expect(Utf8.stringify(new Word32Array([0xf0a4ada2], 4))).to.be(expectedValue);
            });
            it("test parse 1", function () {
              var expectedValue = new Word32Array([0x24000000], 1).toString();
              expect(Utf8.parse("$").toString()).to.be(expectedValue);
            });
            it("test parse 2", function () {
              var expectedValue = new Word32Array([0xc2a20000], 2).toString();
              expect(Utf8.parse("¢").toString()).to.be(expectedValue);
            });
            it("test parse 3", function () {
              var expectedValue = new Word32Array([0xe282ac00], 3).toString();
              expect(Utf8.parse("€").toString()).to.be(expectedValue);
            });
            it("test parse 4", function () {
              var expectedValue = new Word32Array([0xf0a4ada2], 4).toString();
              expect(Utf8.parse("𤭢").toString()).to.be(expectedValue);
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=Utf8.js.map