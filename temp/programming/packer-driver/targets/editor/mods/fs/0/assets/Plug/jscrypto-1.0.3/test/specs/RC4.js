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
            Word32Array,
            Hex,
            MD5,
            SerializableCipher,
            PasswordBasedCipher,
            RC4
          } = require("../../test/build");

          describe("rc4", function () {
            it("test vector1", function () {
              const expectedResult = "7494c2e7104b0879";
              const message = Hex.parse("0000000000000000");
              const key = Hex.parse("0123456789abcdef");
              const props = {};
              expect(RC4.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test vector2", function () {
              const expectedResult = "f13829c9de";
              const message = Hex.parse("dcee4cf92c");
              const key = Hex.parse("618a63d2fb");
              const props = {};
              expect(RC4.encrypt(message, key, props).cipherText.toString()).to.be(expectedResult);
            });
            it("test multi part", function () {
              const expectedResult = "7494c2e7104b0879";
              const key = Hex.parse("0123456789abcdef");
              const rabbit = RC4.createEncryptor(key);
              const ciphertext1 = rabbit.process(Hex.parse('00000000'));
              const ciphertext2 = rabbit.process(Hex.parse('0000'));
              const ciphertext3 = rabbit.process(Hex.parse('0000'));
              const ciphertext4 = rabbit.finalize();
              expect(ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString()).to.be(expectedResult);
            });
            it("test input integrity", function () {
              const message = Hex.parse('0000000000000000');
              const key = Hex.parse('0123456789abcdef');
              const expectedMessage = message.toString();
              const expectedKey = key.toString();
              RC4.encrypt(message, key);
              expect(message.toString()).to.be(expectedMessage);
              expect(key.toString()).to.be(expectedKey);
            });
            it("test helper", function () {
              // Save original random method
              const random = Word32Array.random; // Replace random method with one that returns a predictable value

              Word32Array.random = function (nBytes) {
                const words = [];

                for (let i = 0; i < nBytes; i += 4) {
                  words.push([0x11223344]);
                }

                return new Word32Array(words, nBytes);
              }; // Test


              expect(RC4.encrypt("Hi There", MD5.hash("Jefe")).cipherText.toString()).to.be(RC4.createEncryptor(MD5.hash("Jefe")).finalize("Hi There").toString());
              expect(RC4.encrypt("Hi There", MD5.hash("Jefe")).toString()).to.be(SerializableCipher.encrypt(RC4, "Hi There", MD5.hash("Jefe")).toString());
              expect(RC4.encrypt("Hi There", "Jefe").toString()).to.be(PasswordBasedCipher.encrypt(RC4, "Hi There", "Jefe").toString()); // Restore random method

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
//# sourceMappingURL=RC4.js.map