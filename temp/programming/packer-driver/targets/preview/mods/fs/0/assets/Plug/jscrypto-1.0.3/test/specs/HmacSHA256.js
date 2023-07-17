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
            SHA256,
            HmacSHA256,
            Hex,
            Word32Array
          } = require("../../test/build");

          describe("hmac-sha256", function () {
            it("digest 'Hi There' as expected", function () {
              var expectedResult = "492ce020fe2534a5789dc3848806c78f4f6711397f08e7e7a12ca5a4483c8aa6";
              var message = "Hi There";
              var key = Hex.parse("0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b");
              expect(HmacSHA256(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'what do ya want for nothing?' with 'Jefe' as expected", function () {
              var expectedResult = "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843";
              var message = "what do ya want for nothing?";
              var key = "Jefe";
              expect(HmacSHA256(message, key).toString()).to.be(expectedResult);
            });
            it("digest long message and key as expected", function () {
              var expectedResult = "7dda3cc169743a6484649f94f0eda0f9f2ff496a9733fb796ed5adb40a44c3c1";
              var message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              var key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacSHA256(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' with 'A' as expected", function () {
              var expectedResult = "a89dc8178c1184a62df87adaa77bf86e93064863d93c5131140b0ae98b866687";
              var message = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              var key = "A";
              expect(HmacSHA256(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'abcdefghijklmnopqrstuvwxyz' with 'A' as expected", function () {
              var expectedResult = "d8cb78419c02fe20b90f8b77427dd9f81817a751d74c2e484e0ac5fc4e6ca986";
              var message = "abcdefghijklmnopqrstuvwxyz";
              var key = "A";
              expect(HmacSHA256(message, key).toString()).to.be(expectedResult);
            });
            it("update", function () {
              var hmac = new Hmac(new SHA256(), Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              var message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              var key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacSHA256(message, key).toString()).to.be(hmac.finalize().toString());
            });
            it("input integrity", function () {
              var message = new Word32Array([0x12345678]);
              var key = new Word32Array([0x12345678]);
              var expectedMessage = message.toString();
              var expectedKey = key.toString();
              HmacSHA256(message, key);
              expect(message.toString()).to.be(expectedMessage);
              expect(key.toString()).to.be(expectedKey);
            });
            it("respect key sigBytes", function () {
              var key = Word32Array.random(8);
              key.nSigBytes = 4;
              var keyClamped = key.clone();
              keyClamped.clamp();
              expect(HmacSHA256("Message", key).toString()).to.be(HmacSHA256("Message", keyClamped).toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=HmacSHA256.js.map