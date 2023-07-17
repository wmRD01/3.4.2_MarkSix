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
            Hex,
            MD5,
            SerializableCipher,
            PasswordBasedCipher,
            RC4,
            RC4Drop
          } = require("../../test/build");

          describe("rc4drop", function () {
            it("test drop", function () {
              const expectedResult = RC4.encrypt(Hex.parse("00000000000000000000000000000000"), Hex.parse("0123456789abcdef")).cipherText.toString().substr(16);
              const message = Hex.parse("0000000000000000");
              const key = Hex.parse("0123456789abcdef");
              const props = {
                drop: 2
              };
              expect(RC4Drop.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=RC4Drop.js.map