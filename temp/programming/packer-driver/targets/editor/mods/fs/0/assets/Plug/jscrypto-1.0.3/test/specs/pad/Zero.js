System.register(["expect.js", "__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _req, _req2, _req3, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_expectJs) {
      _req = _expectJs.__cjsMetaURL;
    }, function (_unresolved_) {
      _req2 = _unresolved_.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _loader = _unresolved_3.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        let require = _loader.createRequireWithReqMap({
          "expect.js": _req,
          "../../../test/build/lib": _req2,
          "../../../test/build/pad/Zero": _req3
        }, _require);

        (function () {
          const expect = require("expect.js");

          const {
            Word32Array
          } = require("../../../test/build/lib");

          const {
            Zero
          } = require("../../../test/build/pad/Zero");

          describe("pad/Zero", function () {
            it("test pad", function () {
              const data = new Word32Array([0xdddddd00], 3);
              Zero.pad(data, 2);
              expect(data.toString()).to.be(new Word32Array([0xdddddd00, 0x00000000]).toString());
            });
            it("test pad clamp", function () {
              const data = new Word32Array([0xdddddddd, 0xdddddddd], 3);
              Zero.pad(data, 2);
              expect(data.toString()).to.be(new Word32Array([0xdddddd00, 0x00000000]).toString());
            });
            it("test unpad", function () {
              const data = new Word32Array([0xdddddd00, 0x00000000]);
              Zero.unpad(data);
              expect(data.toString()).to.be(new Word32Array([0xdddddd00], 3).toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=Zero.js.map