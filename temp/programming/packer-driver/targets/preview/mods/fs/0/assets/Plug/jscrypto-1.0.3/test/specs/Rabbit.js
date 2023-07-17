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
            MD5,
            SerializableCipher,
            PasswordBasedCipher,
            Rabbit
          } = require("../../test/build");

          describe("rabbit", function () {
            it("test vector1", function () {
              var expectedResult = "02f74a1c26456bf5ecd6a536f05457b1";
              var message = Hex.parse("00000000000000000000000000000000");
              var key = Hex.parse("00000000000000000000000000000000");
              var props = {};
              expect(Rabbit.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test vector2", function () {
              var expectedResult = "3d02e0c730559112b473b790dee018df";
              var message = Hex.parse("00000000000000000000000000000000");
              var key = Hex.parse("c21fcf3881cd5ee8628accb0a9890df8");
              var props = {};
              expect(Rabbit.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test vector3", function () {
              var expectedResult = "a3a97abb80393820b7e50c4abb53823d";
              var message = Hex.parse("00000000000000000000000000000000");
              var key = Hex.parse("1d272c6a2d8e3dfcac14056b78d633a0");
              var props = {};
              expect(Rabbit.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test vector4", function () {
              var expectedResult = "75d186d6bc6905c64f1b2dfdd51f7bfc";
              var message = Hex.parse("00000000000000000000000000000000");
              var key = Hex.parse("0053a6f94c9ff24598eb3e91e4378add");
              var props = {
                iv: Hex.parse("0d74db42a91077de")
              };
              expect(Rabbit.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test vector5", function () {
              var expectedResult = "476e2750c73856c93563b5f546f56a6a";
              var message = Hex.parse("00000000000000000000000000000000");
              var key = Hex.parse("0558abfe51a4f74a9df04396e93c8fe2");
              var props = {
                iv: Hex.parse("167de44bb21980e7")
              };
              expect(Rabbit.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test vector6", function () {
              var expectedResult = "921fcf4983891365a7dc901924b5e24b";
              var message = Hex.parse("00000000000000000000000000000000");
              var key = Hex.parse("0a5db00356a9fc4fa2f5489bee4194e7");
              var props = {
                iv: Hex.parse("1f86ed54bb2289f0")
              };
              expect(Rabbit.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test vector7", function () {
              var expectedResult = "613cb0ba96aff6cacf2a459a102a7f78";
              var message = Hex.parse("00000000000000000000000000000000");
              var key = Hex.parse("0f62b5085bae0154a7fa4da0f34699ec");
              var props = {
                iv: Hex.parse("288ff65dc42b92f9")
              };
              expect(Rabbit.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test multi part", function () {
              var expectedResult = "02f74a1c26456bf5ecd6a536f05457b1";
              var key = Hex.parse("00000000000000000000000000000000");
              var rabbit = Rabbit.createEncryptor(key);
              var ciphertext1 = rabbit.process(Hex.parse('000000000000'));
              var ciphertext2 = rabbit.process(Hex.parse('0000000000'));
              var ciphertext3 = rabbit.process(Hex.parse('0000000000'));
              var ciphertext4 = rabbit.finalize();
              expect(ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString()).to.be(expectedResult);
            });
            it("test input integrity", function () {
              var message = Hex.parse('00000000000000000000000000000000');
              var key = Hex.parse('00000000000000000000000000000000');
              var iv = Hex.parse('0000000000000000');
              var expectedMessage = message.toString();
              var expectedKey = key.toString();
              var expectedIv = iv.toString();
              Rabbit.encrypt(message, key, {
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


              expect(Rabbit.encrypt("Hi There", MD5.hash("Jefe")).cipherText.toString()).to.be(Rabbit.createEncryptor(MD5.hash("Jefe")).finalize("Hi There").toString());
              expect(Rabbit.encrypt("Hi There", MD5.hash("Jefe")).toString()).to.be(SerializableCipher.encrypt(Rabbit, "Hi There", MD5.hash("Jefe")).toString());
              expect(Rabbit.encrypt("Hi There", "Jefe").toString()).to.be(PasswordBasedCipher.encrypt(Rabbit, "Hi There", "Jefe").toString()); // Restore random method

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
//# sourceMappingURL=Rabbit.js.map