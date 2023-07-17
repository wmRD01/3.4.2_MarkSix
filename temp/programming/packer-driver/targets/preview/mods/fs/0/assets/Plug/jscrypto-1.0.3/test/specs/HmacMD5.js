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
            Hmac,
            MD5,
            HmacMD5,
            Hex,
            Word32Array
          } = require("../../test/build");

          describe("hmac-md5", function () {
            it("digest 'Hi There' as expected", function () {
              var expectedResult = "9294727a3638bb1c13f48ef8158bfc9d";
              var message = "Hi There";
              var key = Hex.parse("0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b");
              expect(HmacMD5(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'what do ya want for nothing?' with 'Jefe' as expected", function () {
              var expectedResult = "750c783e6ab0b503eaa86e310a5db738";
              var message = "what do ya want for nothing?";
              var key = "Jefe";
              expect(HmacMD5(message, key).toString()).to.be(expectedResult);
            });
            it("digest long message and key as expected", function () {
              var expectedResult = "56be34521d144c88dbb8c733f0e8b3f6";
              var message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              var key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacMD5(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' with 'A' as expected", function () {
              var expectedResult = "7ee2a3cc979ab19865704644ce13355c";
              var message = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              var key = "A";
              expect(HmacMD5(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'abcdefghijklmnopqrstuvwxyz' with 'A' as expected", function () {
              var expectedResult = "0e1bd89c43e3e6e3b3f8cf1d5ba4f77a";
              var message = "abcdefghijklmnopqrstuvwxyz";
              var key = "A";
              expect(HmacMD5(message, key).toString()).to.be(expectedResult);
            });
            it("update", function () {
              var hmac = new Hmac(new MD5(), Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              var message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              var key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacMD5(message, key).toString()).to.be(hmac.finalize().toString());
            });
            it("input integrity", function () {
              var message = new Word32Array([0x12345678]);
              var key = new Word32Array([0x12345678]);
              var expectedMessage = message.toString();
              var expectedKey = key.toString();
              HmacMD5(message, key);
              expect(message.toString()).to.be(expectedMessage);
              expect(key.toString()).to.be(expectedKey);
            });
            it("respect key sigBytes", function () {
              var key = Word32Array.random(8);
              key.nSigBytes = 4;
              var keyClamped = key.clone();
              keyClamped.clamp();
              expect(HmacMD5("Message", key).toString()).to.be(HmacMD5("Message", keyClamped).toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=HmacMD5.js.map