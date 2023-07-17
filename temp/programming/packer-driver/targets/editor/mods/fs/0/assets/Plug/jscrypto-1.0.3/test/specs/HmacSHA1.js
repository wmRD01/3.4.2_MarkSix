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
            Hmac,
            SHA1,
            HmacSHA1,
            Hex,
            Word32Array
          } = require("../../test/build");

          describe("hmac-sha1", function () {
            it("digest 'Hi There' as expected", function () {
              const expectedResult = "675b0b3a1b4ddf4e124872da6c2f632bfed957e9";
              const message = "Hi There";
              const key = Hex.parse("0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b");
              expect(HmacSHA1(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'what do ya want for nothing?' with 'Jefe' as expected", function () {
              const expectedResult = "effcdf6ae5eb2fa2d27416d5f184df9c259a7c79";
              const message = "what do ya want for nothing?";
              const key = "Jefe";
              expect(HmacSHA1(message, key).toString()).to.be(expectedResult);
            });
            it("digest long message and key as expected", function () {
              const expectedResult = "d730594d167e35d5956fd8003d0db3d3f46dc7bb";
              const message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              const key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacSHA1(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' with 'A' as expected", function () {
              const expectedResult = "1d6e52cfbe7dca2daecb476d0739b4b62e79df87";
              const message = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              const key = "A";
              expect(HmacSHA1(message, key).toString()).to.be(expectedResult);
            });
            it("digest 'abcdefghijklmnopqrstuvwxyz' with 'A' as expected", function () {
              const expectedResult = "eb429abff2eb3fa35f2402cadcd716434432ab89";
              const message = "abcdefghijklmnopqrstuvwxyz";
              const key = "A";
              expect(HmacSHA1(message, key).toString()).to.be(expectedResult);
            });
            it("update", function () {
              const hmac = new Hmac(new SHA1(), Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              hmac.update(Hex.parse('dddddddddddddddddddddddddddddddd'));
              const message = Hex.parse("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
              const key = Hex.parse("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              expect(HmacSHA1(message, key).toString()).to.be(hmac.finalize().toString());
            });
            it("input integrity", function () {
              const message = new Word32Array([0x12345678]);
              const key = new Word32Array([0x12345678]);
              const expectedMessage = message.toString();
              const expectedKey = key.toString();
              HmacSHA1(message, key);
              expect(message.toString()).to.be(expectedMessage);
              expect(key.toString()).to.be(expectedKey);
            });
            it("respect key sigBytes", function () {
              const key = Word32Array.random(8);
              key.nSigBytes = 4;
              const keyClamped = key.clone();
              keyClamped.clamp();
              expect(HmacSHA1("Message", key).toString()).to.be(HmacSHA1("Message", keyClamped).toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=HmacSHA1.js.map