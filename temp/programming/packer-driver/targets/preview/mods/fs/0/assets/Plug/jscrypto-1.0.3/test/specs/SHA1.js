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
          "../../test/build": _req2
        }, _require);

        (function () {
          var expect = require("expect.js");

          var {
            Word32Array,
            SHA1
          } = require("../../test/build");

          describe("sha1", function () {
            it("digest '' as expected", function () {
              expect(SHA1.hash("").toString()).to.be("da39a3ee5e6b4b0d3255bfef95601890afd80709");
            });
            it("digest 'a' as expected", function () {
              expect(SHA1.hash("a").toString()).to.be("86f7e437faa5a7fce15d1ddcb9eaeaea377667b8");
            });
            it("digest 'abc' as expected", function () {
              expect(SHA1.hash("abc").toString()).to.be("a9993e364706816aba3e25717850c26c9cd0d89d");
            });
            it("digest 'message digest' as expected", function () {
              expect(SHA1.hash("message digest").toString()).to.be("c12252ceda8be8994d5fa0290a47231c1d16aae3");
            });
            it("digest 'abcdefghijklmnopqrstuvwxyz' as expected", function () {
              expect(SHA1.hash("abcdefghijklmnopqrstuvwxyz").toString()).to.be("32d10c7b8cf96570ca04ce37f2a19d84240d3a89");
            });
            it("digest 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' as expected", function () {
              expect(SHA1.hash("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").toString()).to.be("761c457bf73b14d27e9e9265c46f4b4dda11f940");
            });
            it("digest '12345678901234567890123456789012345678901234567890123456789012345678901234567890' as expected", function () {
              expect(SHA1.hash("12345678901234567890123456789012345678901234567890123456789012345678901234567890").toString()).to.be("50abf5706a150990a08b2c5ea40fa0e585554732");
            });
            it("update long message", function () {
              var sha1 = new SHA1();

              for (var i = 0; i < 100; i++) {
                sha1.update("12345678901234567890123456789012345678901234567890");
              }

              expect(sha1.finalize().toString()).to.be("85e4c4b3933d5553ebf82090409a9d90226d845c");
            });
            it("input integrity", function () {
              var message = new Word32Array([0x12345678]);
              var expectedResult = message.toString();
              SHA1.hash(message);
              expect(message.toString()).to.be(expectedResult);
            });
            it("clone", function () {
              var sha1 = new SHA1();
              expect(SHA1.hash("a").toString()).to.be(sha1.update("a").clone().finalize().toString());
              expect(SHA1.hash("ab").toString()).to.be(sha1.update("b").clone().finalize().toString());
              expect(SHA1.hash("abc").toString()).to.be(sha1.update("c").clone().finalize().toString());
            });
            it("shortcut", function () {
              expect(SHA1.hash("").toString()).to.be(new SHA1().finalize("").toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=SHA1.js.map