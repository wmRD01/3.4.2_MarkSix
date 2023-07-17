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
            SHA384,
            HmacSHA384,
            Hex,
            Word32Array
          } = require("../../test/build");

          describe("hmac-sha384", function () {
            it("digest 'Hi There' as expected", function () {
              var expectedResult = "7afaa633e20d379b02395915fbc385ff8dc27dcd3885e1068ab942eeab52ec1f20ad382a92370d8b2e0ac8b83c4d53bf";
              var message = "Hi There";
              var key = Hex.parse("0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b");
              expect(HmacSHA384(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'what do ya want for nothing?' with 'Jefe' as expected", function () {
              var expectedResult = "af45d2e376484031617f78d2b58a6b1b9c7ef464f5a01b47e42ec3736322445e8e2240ca5e69e2c78b3239ecfab21649";
              var message = "what do ya want for nothing?";
              var key = "Jefe";
              expect(HmacSHA384(message, key).toString()).to.be(expectedResult);
            });
            it("digest long message and key as expected", function () {
              var expectedResult = "1383e82e28286b91f4cc7afbd13d5b5c6f887c05e7c4542484043a37a5fe45802a9470fb663bd7b6570fe2f503fc92f5";
              var message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              var key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacSHA384(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' with 'A' as expected", function () {
              var expectedResult = "365dfb271adb8e30fe6c74220b75df1b38c2d19b9d37f2e5a0ec2f3f22bd0406bf5b786e98d81b82c36d3d8a1be6cd07";
              var message = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              var key = "A";
              expect(HmacSHA384(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'abcdefghijklmnopqrstuvwxyz' with 'A' as expected", function () {
              var expectedResult = "a8357d5e84da64140e41545562ae0782e2a58e39c6cd98939fad8d9080e774c84b7eaca4ba07f6dbf0f12eab912c5285";
              var message = "abcdefghijklmnopqrstuvwxyz";
              var key = "A";
              expect(HmacSHA384(message, key).toString()).to.be(expectedResult);
            });
            it("update", function () {
              var hmac = new Hmac(new SHA384(), Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              var message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              var key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacSHA384(message, key).toString()).to.be(hmac.finalize().toString());
            });
            it("input integrity", function () {
              var message = new Word32Array([0x12345678]);
              var key = new Word32Array([0x12345678]);
              var expectedMessage = message.toString();
              var expectedKey = key.toString();
              HmacSHA384(message, key);
              expect(message.toString()).to.be(expectedMessage);
              expect(key.toString()).to.be(expectedKey);
            });
            it("respect key sigBytes", function () {
              var key = Word32Array.random(8);
              key.nSigBytes = 4;
              var keyClamped = key.clone();
              keyClamped.clamp();
              expect(HmacSHA384("Message", key).toString()).to.be(HmacSHA384("Message", keyClamped).toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=HmacSHA384.js.map