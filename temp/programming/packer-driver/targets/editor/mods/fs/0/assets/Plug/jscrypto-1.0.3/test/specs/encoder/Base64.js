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
            Base64,
            Word32Array
          } = require("../../../test/build");

          describe("encoder/Base64", function () {
            it("test stringify 0", function () {
              const expectedValue = "";
              expect(Base64.stringify(new Word32Array([0x666f6f62, 0x61720000], 0))).to.be(expectedValue);
            });
            it("test stringify 1", function () {
              const expectedValue = "Zg==";
              expect(Base64.stringify(new Word32Array([0x666f6f62, 0x61720000], 1))).to.be(expectedValue);
            });
            it("test stringify 2", function () {
              const expectedValue = "Zm8=";
              expect(Base64.stringify(new Word32Array([0x666f6f62, 0x61720000], 2))).to.be(expectedValue);
            });
            it("test stringify 3", function () {
              const expectedValue = "Zm9v";
              expect(Base64.stringify(new Word32Array([0x666f6f62, 0x61720000], 3))).to.be(expectedValue);
            });
            it("test stringify 4", function () {
              const expectedValue = "Zm9vYg==";
              expect(Base64.stringify(new Word32Array([0x666f6f62, 0x61720000], 4))).to.be(expectedValue);
            });
            it("test stringify 5", function () {
              const expectedValue = "Zm9vYmE=";
              expect(Base64.stringify(new Word32Array([0x666f6f62, 0x61720000], 5))).to.be(expectedValue);
            });
            it("test stringify 6", function () {
              const expectedValue = "Zm9vYmFy";
              expect(Base64.stringify(new Word32Array([0x666f6f62, 0x61720000], 6))).to.be(expectedValue);
            });
            it("test stringify 15", function () {
              const expectedValue = "Pj4+Pz8/Pj4+Pz8/PS8r";
              expect(Base64.stringify(new Word32Array([0x3e3e3e3f, 0x3f3f3e3e, 0x3e3f3f3f, 0x3d2f2b00], 15))).to.be(expectedValue);
            });
            it("test parse 0", function () {
              const expectedValue = new Word32Array([0x666f6f62, 0x61720000], 0).toString();
              expect(Base64.parse("").toString()).to.be(expectedValue);
            });
            it("test parse 1", function () {
              const expectedValue = new Word32Array([0x666f6f62, 0x61720000], 1).toString();
              expect(Base64.parse("Zg==").toString()).to.be(expectedValue);
            });
            it("test parse 2", function () {
              const expectedValue = new Word32Array([0x666f6f62, 0x61720000], 2).toString();
              expect(Base64.parse("Zm8=").toString()).to.be(expectedValue);
            });
            it("test parse 3", function () {
              const expectedValue = new Word32Array([0x666f6f62, 0x61720000], 3).toString();
              expect(Base64.parse("Zm9v").toString()).to.be(expectedValue);
            });
            it("test parse 4", function () {
              const expectedValue = new Word32Array([0x666f6f62, 0x61720000], 4).toString();
              expect(Base64.parse("Zm9vYg==").toString()).to.be(expectedValue);
            });
            it("test parse 5", function () {
              const expectedValue = new Word32Array([0x666f6f62, 0x61720000], 5).toString();
              expect(Base64.parse("Zm9vYmE=").toString()).to.be(expectedValue);
            });
            it("test parse 6", function () {
              const expectedValue = new Word32Array([0x666f6f62, 0x61720000], 6).toString();
              expect(Base64.parse("Zm9vYmFy").toString()).to.be(expectedValue);
            });
            it("test parse 15", function () {
              const expectedValue = new Word32Array([0x3e3e3e3f, 0x3f3f3e3e, 0x3e3f3f3f, 0x3d2f2b00], 15).toString();
              expect(Base64.parse("Pj4+Pz8/Pj4+Pz8/PS8r").toString()).to.be(expectedValue);
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=Base64.js.map