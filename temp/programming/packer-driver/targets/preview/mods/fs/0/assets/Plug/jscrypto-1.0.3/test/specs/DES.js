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
            DES
          } = require("../../test/build");

          describe("des", function () {
            it("test encrypt 1", function () {
              var expectedResult = "95a8d72813daa94d";
              var message = Hex.parse("0000000000000000");
              var key = Hex.parse("8000000000000000");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt 2", function () {
              var expectedResult = "1de5279dae3bed6f";
              var message = Hex.parse("0000000000000000");
              var key = Hex.parse("0000000000002000");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt 3", function () {
              var expectedResult = "1d1ca853ae7c0c5f";
              var message = Hex.parse("0000000000002000");
              var key = Hex.parse("0000000000000000");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt 4", function () {
              var expectedResult = "ac978c247863388f";
              var message = Hex.parse("3232323232323232");
              var key = Hex.parse("3232323232323232");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt 5", function () {
              var expectedResult = "3af1703d76442789";
              var message = Hex.parse("6464646464646464");
              var key = Hex.parse("6464646464646464");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test encrypt 6", function () {
              var expectedResult = "a020003c5554f34c";
              var message = Hex.parse("9696969696969696");
              var key = Hex.parse("9696969696969696");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test decrypt 1", function () {
              var expectedResult = "0000000000000000";
              var encryptedMessage = Hex.parse("95a8d72813daa94d");
              var key = Hex.parse("8000000000000000");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 2", function () {
              var expectedResult = "0000000000000000";
              var encryptedMessage = Hex.parse("1de5279dae3bed6f");
              var key = Hex.parse("0000000000002000");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 3", function () {
              var expectedResult = "0000000000002000";
              var encryptedMessage = Hex.parse("1d1ca853ae7c0c5f");
              var key = Hex.parse("0000000000000000");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 4", function () {
              var expectedResult = "3232323232323232";
              var encryptedMessage = Hex.parse("ac978c247863388f");
              var key = Hex.parse("3232323232323232");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 5", function () {
              var expectedResult = "6464646464646464";
              var encryptedMessage = Hex.parse("3af1703d76442789");
              var key = Hex.parse("6464646464646464");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test decrypt 6", function () {
              var expectedResult = "9696969696969696";
              var encryptedMessage = Hex.parse("a020003c5554f34c");
              var key = Hex.parse("9696969696969696");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              expect(DES.decrypt({
                cipherText: encryptedMessage
              }, key, props).toString()).to.be(expectedResult);
            });
            it("test multi part", function () {
              var expectedResult = DES.encrypt(Hex.parse("00112233445566778899aabbccddeeff"), Hex.parse("0123456789abcdef"), {
                mode: ECB,
                padding: NoPadding
              }).cipherText.toString();
              var key = Hex.parse("0123456789abcdef");
              var props = {
                mode: ECB,
                padding: NoPadding
              };
              var des3 = DES.createEncryptor(key, props);
              var ciphertext1 = des3.process(Hex.parse('001122334455'));
              var ciphertext2 = des3.process(Hex.parse('66778899aa'));
              var ciphertext3 = des3.process(Hex.parse('bbccddeeff'));
              var ciphertext4 = des3.finalize();
              expect(ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString()).to.be(expectedResult);
            });
            it("test input integrity", function () {
              var message = Hex.parse('00112233445566778899aabbccddeeff');
              var key = Hex.parse('0001020304050607');
              var iv = Hex.parse('08090a0b0c0d0e0f');
              var expectedMessage = message.toString();
              var expectedKey = key.toString();
              var expectedIv = iv.toString();
              DES.encrypt(message, key, {
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


              expect(DES.encrypt("Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).cipherText.toString()).to.be(DES.createEncryptor(SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).finalize("Hi There").toString());
              expect(DES.encrypt("Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).toString()).to.be(SerializableCipher.encrypt(DES, "Hi There", SHA256.hash("Jefe"), {
                mode: ECB,
                padding: NoPadding
              }).toString());
              expect(DES.encrypt("Hi There", "Jefe", {
                mode: ECB,
                padding: NoPadding
              }).toString()).to.be(PasswordBasedCipher.encrypt(DES, "Hi There", "Jefe", {
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
//# sourceMappingURL=DES.js.map