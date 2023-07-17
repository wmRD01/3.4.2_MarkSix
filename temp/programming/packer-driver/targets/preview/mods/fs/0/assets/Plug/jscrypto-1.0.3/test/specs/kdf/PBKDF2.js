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
            PBKDF2,
            Word32Array,
            SHA1
          } = require("../../../test/build");

          describe("kdf/PBKDF2", function () {
            it("test key size 128", function () {
              var expectedValue = "cdedb5281bb2f801565a1122b2563515";
              expect(PBKDF2.getKey("password", "ATHENA.MIT.EDUraeburn", {
                keySize: 128 / 32,
                iterations: 1,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 256", function () {
              var expectedValue = "cdedb5281bb2f801565a1122b25635150ad1f7a04bb9f3a333ecc0e2e1f70837";
              expect(PBKDF2.getKey("password", "ATHENA.MIT.EDUraeburn", {
                keySize: 256 / 32,
                iterations: 1,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 128 iteration 2", function () {
              var expectedValue = "01dbee7f4a9e243e988b62c73cda935d";
              expect(PBKDF2.getKey("password", "ATHENA.MIT.EDUraeburn", {
                keySize: 128 / 32,
                iterations: 2,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 256 iteration 2", function () {
              var expectedValue = "01dbee7f4a9e243e988b62c73cda935da05378b93244ec8f48a99e61ad799d86";
              expect(PBKDF2.getKey("password", "ATHENA.MIT.EDUraeburn", {
                keySize: 256 / 32,
                iterations: 2,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 128 iteration 1200", function () {
              var expectedValue = "5c08eb61fdf71e4e4ec3cf6ba1f5512b";
              expect(PBKDF2.getKey("password", "ATHENA.MIT.EDUraeburn", {
                keySize: 128 / 32,
                iterations: 1200,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 256 iteration 1200", function () {
              var expectedValue = "5c08eb61fdf71e4e4ec3cf6ba1f5512ba7e52ddbc5e5142f708a31e2e62b1e13";
              expect(PBKDF2.getKey("password", "ATHENA.MIT.EDUraeburn", {
                keySize: 256 / 32,
                iterations: 1200,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 128 iteration 5", function () {
              var expectedValue = "d1daa78615f287e6a1c8b120d7062a49";
              expect(PBKDF2.getKey("password", Hex.parse("1234567878563412"), {
                keySize: 128 / 32,
                iterations: 5,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 256 iteration 5", function () {
              var expectedValue = "d1daa78615f287e6a1c8b120d7062a493f98d203e6be49a6adf4fa574b6e64ee";
              expect(PBKDF2.getKey("password", Hex.parse("1234567878563412"), {
                keySize: 256 / 32,
                iterations: 5,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 128 iteration 1200 passphrase equal to block size", function () {
              var expectedValue = "139c30c0966bc32ba55fdbf212530ac9";
              expect(PBKDF2.getKey("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "pass phrase equals block size", {
                keySize: 128 / 32,
                iterations: 1200,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 256 iteration 1200 passphrase equal to block size", function () {
              var expectedValue = "139c30c0966bc32ba55fdbf212530ac9c5ec59f1a452f5cc9ad940fea0598ed1";
              expect(PBKDF2.getKey("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "pass phrase equals block size", {
                keySize: 256 / 32,
                iterations: 1200,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 128 iteration 1200 passphrase exceeds block size", function () {
              var expectedValue = "9ccad6d468770cd51b10e6a68721be61";
              expect(PBKDF2.getKey("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "pass phrase exceeds block size", {
                keySize: 128 / 32,
                iterations: 1200,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 256 iteration 1200 passphrase exceeds block size", function () {
              var expectedValue = "9ccad6d468770cd51b10e6a68721be611a8b4d282601db3b36be9246915ec82a";
              expect(PBKDF2.getKey("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "pass phrase exceeds block size", {
                keySize: 256 / 32,
                iterations: 1200,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 128 iteration 50", function () {
              var expectedValue = "6b9cf26d45455a43a5b8bb276a403b39";
              expect(PBKDF2.getKey(Hex.parse("f09d849e"), "EXAMPLE.COMpianist", {
                keySize: 128 / 32,
                iterations: 50,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test key size 256 iteration 50", function () {
              var expectedValue = "6b9cf26d45455a43a5b8bb276a403b39e7fe37a0c41e02c281ff3069e1e94f52";
              expect(PBKDF2.getKey(Hex.parse("f09d849e"), "EXAMPLE.COMpianist", {
                keySize: 256 / 32,
                iterations: 50,
                Hasher: SHA1
              }).toString()).to.be(expectedValue);
            });
            it("test input integrity", function () {
              var password = new Word32Array([0x12345678]);
              var salt = new Word32Array([0x12345678]);
              var expectedPassword = password.toString();
              var expectedSalt = salt.toString();
              PBKDF2.getKey(password, salt, {
                iterations: 1,
                Hasher: SHA1
              });
              expect(password.toString()).to.be(expectedPassword);
              expect(salt.toString()).to.be(expectedSalt);
            });
            it("test helper", function () {
              expect(PBKDF2.getKey("password", "ATHENA.MIT.EDUraeburn", {
                keySize: 128 / 32,
                iterations: 1,
                Hasher: SHA1
              }).toString()).to.be(new PBKDF2({
                keySize: 128 / 32,
                iterations: 1,
                Hasher: SHA1
              }).compute("password", "ATHENA.MIT.EDUraeburn").toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=PBKDF2.js.map