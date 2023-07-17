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
        var require = _loader.createRequireWithReqMap({
          "expect.js": _req,
          "../../../test/build/lib": _req2,
          "../../../test/build/pad/ISO97971": _req3
        }, _require);

        (function () {
          var expect = require("expect.js");

          var {
            Word32Array
          } = require("../../../test/build/lib");

          var {
            ISO97971
          } = require("../../../test/build/pad/ISO97971");

          describe("pad/ISO97971", function () {
            it("test pad 1", function () {
              var data = new Word32Array([0xdddddd00], 3);
              ISO97971.pad(data, 1);
              expect(data.toString()).to.be(new Word32Array([0xdddddd80]).toString());
            });
            it("test pad 2", function () {
              var data = new Word32Array([0xdddddd00], 3);
              ISO97971.pad(data, 2);
              expect(data.toString()).to.be(new Word32Array([0xdddddd80, 0x00000000]).toString());
            });
            it("test pad clamp", function () {
              var data = new Word32Array([0xdddddddd, 0xdddddddd], 3);
              ISO97971.pad(data, 2);
              expect(data.toString()).to.be(new Word32Array([0xdddddd80, 0x00000000]).toString());
            });
            it("test unpad", function () {
              var data = new Word32Array([0xdddddd80, 0x00000000]);
              ISO97971.unpad(data);
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
//# sourceMappingURL=ISO97971.js.map