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
            Hex,
            EvpKDF,
            Word32Array
          } = require("../../../test/build");

          describe("kdf/EvpKDF", function () {
            it("test vector", function () {
              var expectedValue = "fdbdf3419fff98bdb0241390f62a9db35f4aba29d77566377997314ebfc709f20b5ca7b1081f94b1ac12e3c8ba87d05a";
              expect(EvpKDF.getKey("password", "saltsalt", {
                keySize: (256 + 128) / 32
              }).toString()).to.be(expectedValue);
            });
            it("test input integrity", function () {
              var password = new Word32Array([0x12345678]);
              var salt = new Word32Array([0x12345678]);
              var expectedPassword = password.toString();
              var expectedSalt = salt.toString();
              EvpKDF.getKey(password, salt);
              expect(password.toString()).to.be(expectedPassword);
              expect(salt.toString()).to.be(expectedSalt);
            });
            it("test helper", function () {
              expect(EvpKDF.getKey("password", "saltsalt", {
                keySize: (256 + 128) / 32
              }).toString()).to.be(new EvpKDF({
                keySize: (256 + 128) / 32
              }).compute("password", "saltsalt").toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=EvpKDF.js.map