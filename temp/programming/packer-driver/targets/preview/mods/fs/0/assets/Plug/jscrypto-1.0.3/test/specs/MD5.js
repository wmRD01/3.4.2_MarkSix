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
            MD5
          } = require("../../test/build");

          describe("md5", function () {
            it("digest '' as expected", function () {
              expect(MD5.hash("").toString()).to.be("d41d8cd98f00b204e9800998ecf8427e");
            });
            it("digest 'a' as expected", function () {
              expect(MD5.hash("a").toString()).to.be("0cc175b9c0f1b6a831c399e269772661");
            });
            it("digest 'abc' as expected", function () {
              expect(MD5.hash("abc").toString()).to.be("900150983cd24fb0d6963f7d28e17f72");
            });
            it("digest 'message digest' as expected", function () {
              expect(MD5.hash("message digest").toString()).to.be("f96b697d7cb7938d525a2f31aaf161d0");
            });
            it("digest 'abcdefghijklmnopqrstuvwxyz' as expected", function () {
              expect(MD5.hash("abcdefghijklmnopqrstuvwxyz").toString()).to.be("c3fcd3d76192e4007dfb496cca67e13b");
            });
            it("digest 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' as expected", function () {
              expect(MD5.hash("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").toString()).to.be("d174ab98d277d9f5a5611c2c9f419d9f");
            });
            it("digest '12345678901234567890123456789012345678901234567890123456789012345678901234567890' as expected", function () {
              expect(MD5.hash("12345678901234567890123456789012345678901234567890123456789012345678901234567890").toString()).to.be("57edf4a22be3c955ac49da2e2107b67a");
            });
            it("update long message", function () {
              var md5 = new MD5();

              for (var i = 0; i < 100; i++) {
                md5.update("12345678901234567890123456789012345678901234567890");
              }

              expect(md5.finalize().toString()).to.be("7d017545e0268a6a12f2b507871d0429");
            });
            it("input integrity", function () {
              var message = new Word32Array([0x12345678]);
              var expectedResult = message.toString();
              MD5.hash(message);
              expect(message.toString()).to.be(expectedResult);
            });
            it("clone", function () {
              var md5 = new MD5();
              expect(MD5.hash("a").toString()).to.be(md5.update("a").clone().finalize().toString());
              expect(MD5.hash("ab").toString()).to.be(md5.update("b").clone().finalize().toString());
              expect(MD5.hash("abc").toString()).to.be(md5.update("c").clone().finalize().toString());
            });
            it("shortcut", function () {
              expect(MD5.hash("").toString()).to.be(new MD5().finalize("").toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=MD5.js.map