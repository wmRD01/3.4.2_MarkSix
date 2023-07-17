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
            SHA512,
            HmacSHA512,
            Hex,
            Word32Array
          } = require("../../test/build");

          describe("hmac-sha512", function () {
            it("digest 'Hi There' as expected", function () {
              var expectedResult = "7641c48a3b4aa8f887c07b3e83f96affb89c978fed8c96fcbbf4ad596eebfe496f9f16da6cd080ba393c6f365ad72b50d15c71bfb1d6b81f66a911786c6ce932";
              var message = "Hi There";
              var key = Hex.parse("0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b");
              expect(HmacSHA512(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'what do ya want for nothing?' with 'Jefe' as expected", function () {
              var expectedResult = "164b7a7bfcf819e2e395fbe73b56e0a387bd64222e831fd610270cd7ea2505549758bf75c05a994a6d034f65f8f0e6fdcaeab1a34d4a6b4b636e070a38bce737";
              var message = "what do ya want for nothing?";
              var key = "Jefe";
              expect(HmacSHA512(message, key).toString()).to.be(expectedResult);
            });
            it("digest long message and key as expected", function () {
              var expectedResult = "ad9b5c7de72693737cd5e9d9f41170d18841fec1201c1c1b02e05cae116718009f771cad9946ddbf7e3cde3e818d9ae85d91b2badae94172d096a44a79c91e86";
              var message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              var key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacSHA512(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' with 'A' as expected", function () {
              var expectedResult = "a303979f7c94bb39a8ab6ce05cdbe28f0255da8bb305263e3478ef7e855f0242729bf1d2be55398f14da8e63f0302465a8a3f76c297bd584ad028d18ed7f0195";
              var message = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              var key = "A";
              expect(HmacSHA512(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'abcdefghijklmnopqrstuvwxyz' with 'A' as expected", function () {
              var expectedResult = "8c2d56f7628325e62124c0a870ad98d101327fc42696899a06ce0d7121454022fae597e42c25ac3a4c380fd514f553702a5b0afaa9b5a22050902f024368e9d9";
              var message = "abcdefghijklmnopqrstuvwxyz";
              var key = "A";
              expect(HmacSHA512(message, key).toString()).to.be(expectedResult);
            });
            it("update", function () {
              var hmac = new Hmac(new SHA512(), Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              var message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              var key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacSHA512(message, key).toString()).to.be(hmac.finalize().toString());
            });
            it("input integrity", function () {
              var message = new Word32Array([0x12345678]);
              var key = new Word32Array([0x12345678]);
              var expectedMessage = message.toString();
              var expectedKey = key.toString();
              HmacSHA512(message, key);
              expect(message.toString()).to.be(expectedMessage);
              expect(key.toString()).to.be(expectedKey);
            });
            it("respect key sigBytes", function () {
              var key = Word32Array.random(8);
              key.nSigBytes = 4;
              var keyClamped = key.clone();
              keyClamped.clamp();
              expect(HmacSHA512("Message", key).toString()).to.be(HmacSHA512("Message", keyClamped).toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=HmacSHA512.js.map