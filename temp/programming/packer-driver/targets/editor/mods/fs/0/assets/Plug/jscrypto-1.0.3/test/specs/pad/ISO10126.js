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
            pad: {
              ISO10126
            },
            Word32Array
          } = require("../../../test/build");

          describe("pad/ISO10126", function () {
            const data = {};
            data.random = Word32Array.random;
            before(function () {
              Word32Array.random = function (nBytes) {
                const words = [];

                for (let i = 0; i < nBytes; i += 4) {
                  words.push([0x11223344]);
                }

                return new Word32Array(words, nBytes);
              };
            });
            after(function () {
              Word32Array.random = data.random;
            });
            it("test pad", function () {
              const data = new Word32Array([0xdddddd00], 3);
              ISO10126.pad(data, 2);
              expect(data.toString()).to.be(new Word32Array([0xdddddd11, 0x22334405]).toString());
            });
            it("test pad clamp", function () {
              const data = new Word32Array([0xdddddddd, 0xdddddddd], 3);
              ISO10126.pad(data, 2);
              expect(data.toString()).to.be(new Word32Array([0xdddddd11, 0x22334405]).toString());
            });
            it("test unpad", function () {
              const data = new Word32Array([0xdddddd11, 0x22334405]);
              ISO10126.unpad(data);
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
//# sourceMappingURL=ISO10126.js.map