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
            mode: {
              ECB
            },
            pad: {
              NoPadding
            },
            SHA256,
            SerializableCipher,
            PasswordBasedCipher,
            DES3
          } = require("../../test/build");

          describe("des3", function () {
            it("test encrypt 1", function () {
              var expectedResult = "95a8d72813daa94d";
              var message = Hex.parse("0000000000000000");
              var key = Hex.parse("800101010101010180010101010101018001010101010101");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES3.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt 2", function () {
              var expectedResult = "869efd7f9f265a09";
              var message = Hex.parse("0000000000000000");
              var key = Hex.parse("010101010101010201010101010101020101010101010102");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES3.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt 3", function () {
              var expectedResult = "95f8a5e5dd31d900";
              var message = Hex.parse("8000000000000000");
              var key = Hex.parse("010101010101010101010101010101010101010101010101");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES3.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt 4", function () {
              var expectedResult = "166b40b44aba4bd6";
              var encryptedMessage = Hex.parse("0000000000000001");
              var key = Hex.parse("010101010101010101010101010101010101010101010101");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES3.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 1", function () {
              var expectedResult = "0000000000000000";
              var encryptedMessage = Hex.parse("95a8d72813daa94d");
              var key = Hex.parse("800101010101010180010101010101018001010101010101");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES3.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 2", function () {
              var expectedResult = "0000000000000000";
              var encryptedMessage = Hex.parse("869efd7f9f265a09");
              var key = Hex.parse("010101010101010201010101010101020101010101010102");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES3.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 3", function () {
              var expectedResult = "8000000000000000";
              var encryptedMessage = Hex.parse("95f8a5e5dd31d900");
              var key = Hex.parse("010101010101010101010101010101010101010101010101");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES3.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 4", function () {
              var expectedResult = "0000000000000001";
              var encryptedMessage = Hex.parse("166b40b44aba4bd6");
              var key = Hex.parse("010101010101010101010101010101010101010101010101");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES3.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test multi part", function () {
              var expectedResult = DES3.encrypt(Hex.parse("00112233445566778899aabbccddeeff"), Hex.parse("000102030405060708090a0b0c0d0e0f1011121314151617"), {
                mode: ECB,
                padding: NoPadding
              }).cipherText.toString();
              var key = Hex.parse("000102030405060708090a0b0c0d0e0f1011121314151617");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              var des3 = DES3.createEncryptor(key, props);
              var ciphertext1 = des3.process(Hex.parse('001122334455'));
              var ciphertext2 = des3.process(Hex.parse('66778899aa'));
              var ciphertext3 = des3.process(Hex.parse('bbccddeeff'));
              var ciphertext4 = des3.finalize();
              expect(ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString()).to.be(expectedResult);
            });
            it("test input integrity", function () {
              var message = Hex.parse('00112233445566778899aabbccddeeff');
              var key = Hex.parse('000102030405060708090a0b0c0d0e0f1011121314151617');
              var iv = Hex.parse('08090a0b0c0d0e0f');
              var expectedMessage = message.toString();
              var expectedKey = key.toString();
              var expectedIv = iv.toString();
              DES3.encrypt(message, key, {
                iv
              });
              expect(message.toString()).to.be(expectedMessage);
              expect(key.toString()).to.be(expectedKey);
              expect(iv.toString()).to.be(expectedIv);
            });
            it("test 64bit key", function () {
              var message = Hex.parse('00112233445566778899aabbccddeeff');
              var key = Hex.parse('0011223344556677');
              var extendedKey = Hex.parse('001122334455667700112233445566770011223344556677');
              var output1 = DES3.encrypt(message, key, {
                mode: ECB
              }).toString();
              var output2 = DES3.encrypt(message, extendedKey, {
                mode: ECB
              }).toString();
              expect(output2).to.be(output1);
            });
            it("test 128bit key", function () {
              var message = Hex.parse('00112233445566778899aabbccddeeff');
              var key = Hex.parse('00112233445566778899aabbccddeeff');
              var extendedKey = Hex.parse('00112233445566778899aabbccddeeff0011223344556677');
              var output1 = DES3.encrypt(message, key, {
                mode: ECB
              }).toString();
              var output2 = DES3.encrypt(message, extendedKey, {
                mode: ECB
              }).toString();
              expect(output2).to.be(output1);
            });
            it("test 256bit key", function () {
              var message = Hex.parse('00112233445566778899aabbccddeeff');
              var key = Hex.parse('00112233445566778899aabbccddeeff0112233445566778899aabbccddeeff0');
              var truncatedKey = Hex.parse('00112233445566778899aabbccddeeff0112233445566778');
              var output1 = DES3.encrypt(message, key, {
                mode: ECB
              }).toString();
              var output2 = DES3.encrypt(message, truncatedKey, {
                mode: ECB
              }).toString();
              expect(output2).to.be(output1);
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


              expect(DES3.encrypt("Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).cipherText.toString()).to.be(DES3.createEncryptor(SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).finalize("Hi There").toString());
              expect(DES3.encrypt("Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).toString()).to.be(SerializableCipher.encrypt(DES3, "Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).toString());
              expect(DES3.encrypt("Hi There", "Jefe", {
                mode: ECB,
                padding: NoPadding
              }).toString()).to.be(PasswordBasedCipher.encrypt(DES3, "Hi There", "Jefe", {
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
//# sourceMappingURL=DES3.js.map