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
            Hex,
            Utf8,
            mode: {
              ECB,
              CBC
            },
            pad: {
              NoPadding,
              Pkcs7
            },
            SHA256,
            SerializableCipher,
            PasswordBasedCipher,
            AES
          } = require("../../test/build");

          describe("aes", function () {
            it("test encrypt key size 128", function () {
              var expectedResult = "69c4e0d86a7b0430d8cdb78070b4c55a";
              var message = Hex.parse("00112233445566778899aabbccddeeff");
              var key = Hex.parse("000102030405060708090a0b0c0d0e0f");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(AES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt key size 192", function () {
              var expectedResult = "dda97ca4864cdfe06eaf70a0ec0d7191";
              var message = Hex.parse("00112233445566778899aabbccddeeff");
              var key = Hex.parse("000102030405060708090a0b0c0d0e0f1011121314151617");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(AES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt key size 256", function () {
              var expectedResult = "8ea2b7ca516745bfeafc49904b496089";
              var message = Hex.parse("00112233445566778899aabbccddeeff");
              var key = Hex.parse("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(AES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test decrypt key size 128", function () {
              var expectedResult = "00112233445566778899aabbccddeeff";
              var encryptedMessage = Hex.parse("69c4e0d86a7b0430d8cdb78070b4c55a");
              var key = Hex.parse("000102030405060708090a0b0c0d0e0f");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(AES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt key size 192", function () {
              var expectedResult = "00112233445566778899aabbccddeeff";
              var encryptedMessage = Hex.parse("dda97ca4864cdfe06eaf70a0ec0d7191");
              var key = Hex.parse("000102030405060708090a0b0c0d0e0f1011121314151617");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(AES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt key size 256", function () {
              var expectedResult = "00112233445566778899aabbccddeeff";
              var encryptedMessage = Hex.parse("8ea2b7ca516745bfeafc49904b496089");
              var key = Hex.parse("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(AES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test encrypt/decrypt string", function () {
              var message = "message";
              var key = "key";
              var encryptedData = AES.encrypt(message, key).toString();
              expect(AES.decrypt(encryptedData, key).toString(Utf8)).to.be(message);
            });
            it("test multi part", function () {
              var expectedResult = "69c4e0d86a7b0430d8cdb78070b4c55a";
              var key = Hex.parse("000102030405060708090a0b0c0d0e0f");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              var aes = AES.createEncryptor(key, props);
              var ciphertext1 = aes.process(Hex.parse('001122334455'));
              var ciphertext2 = aes.process(Hex.parse('66778899aa'));
              var ciphertext3 = aes.process(Hex.parse('bbccddeeff'));
              var ciphertext4 = aes.finalize();
              expect(ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString()).to.be(expectedResult);
            });
            it("test input integrity", function () {
              var message = Hex.parse('00112233445566778899aabbccddeeff');
              var key = Hex.parse('000102030405060708090a0b0c0d0e0f');
              var iv = Hex.parse('101112131415161718191a1b1c1d1e1f');
              var expectedMessage = message.toString();
              var expectedKey = key.toString();
              var expectedIv = iv.toString();
              AES.encrypt(message, key, {
                iv
              });
              expect(message.toString()).to.be(expectedMessage);
              expect(key.toString()).to.be(expectedKey);
              expect(iv.toString()).to.be(expectedIv);
            });
            it("test helper", function () {
              // Save original random method
              var random = Word32Array.random; // Replace random method with one that returns a predictable value

              Word32Array.random = function (nBytes) {
                var words = [];

                for (var i = 0; i < nBytes; i += 4) {
                  words.push([0x11223344]);
                }

                return new Word32Array(words, nBytes);
              }; // Test


              expect(AES.encrypt("Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).cipherText.toString()).to.be(AES.createEncryptor(SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).finalize("Hi There").toString());
              expect(AES.encrypt("Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).toString()).to.be(SerializableCipher.encrypt(AES, "Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).toString());
              expect(AES.encrypt("Hi There", "Jefe", {
                mode: ECB,
                padding: NoPadding
              }).toString()).to.be(PasswordBasedCipher.encrypt(AES, "Hi There", "Jefe", {
                mode: ECB,
                padding: NoPadding
              }).toString()); // Restore random method

              Word32Array.random = random;
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=AES.js.map