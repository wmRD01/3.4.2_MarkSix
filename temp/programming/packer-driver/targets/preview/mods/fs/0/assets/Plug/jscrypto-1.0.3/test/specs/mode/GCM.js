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
          "../../../test/build/": _req2
        }, _require);

        (function () {
          var expect = require("expect.js");

          var {
            Word32Array,
            mode: {
              GCM
            },
            pad: {
              NoPadding
            },
            AES,
            Hex,
            Utf8
          } = require("../../../test/build/");

          describe("mode/GCM", function () {
            var data = {};
            data.message = new Word32Array([0x00010203, 0x04050607, 0x08090a0b, 0x0c0d0e0f, 0x10111213, 0x14151617, 0x18191a1b, 0x1c1d1e1f]);
            data.key = new Word32Array([0x20212223, 0x24252627, 0x28292a2b, 0x2c2d2e2f]);
            data.iv = new Word32Array([0x30313233, 0x34353637, 0x38393a3b]);
            it("test encryptor", function () {
              // Compute expected
              var expected = data.message.clone();
              var aes = AES.createEncryptor(data.key); // Counter initialized with IV

              var counter = data.iv.words.slice(0);
              counter[3] = 0;
              counter[3]++;
              counter[3]++; // First block XORed with encrypted counter

              var keyStream = counter.slice(0);
              aes.encryptBlock(keyStream, 0);

              for (var i = 0; i < 4; i++) {
                expected.words[i] ^= keyStream[i];
              } // Subsequent blocks XORed with encrypted incremented counter


              counter[3]++;
              keyStream = counter.slice(0);
              aes.encryptBlock(keyStream, 0);

              for (var _i = 4; _i < 8; _i++) {
                expected.words[_i] ^= keyStream[_i % 4];
              } // Compute actual


              var actual = AES.encrypt(data.message, data.key, {
                iv: data.iv,
                mode: GCM,
                padding: NoPadding
              }).cipherText; // Test

              expect(actual.toString()).to.be(expected.toString());
            });
            it("test encryptor with 96bit iv", function () {
              var key = Hex.parse("0123456789ABCDEF11113333555577770123456789ABCDEF1111333355557777");
              var msg = Hex.parse("00000000000000000000000000000000");
              var iv = Hex.parse("000000000000000000000000");
              var encrypted = AES.encrypt(msg, key, {
                iv,
                mode: GCM,
                padding: NoPadding
              });
              expect(encrypted.cipherText.toString()).to.be("c8f656193e3bb5b6117d49e3c6799864");
            });
            it("test encryptor with 128bit iv", function () {
              var key = Hex.parse("0123456789ABCDEF11113333555577770123456789ABCDEF1111333355557777");
              var msg = Hex.parse("00000000000000000000000000000000");
              var iv = Hex.parse("00000000000000000000000000000000");
              var encrypted = AES.encrypt(msg, key, {
                iv,
                mode: GCM,
                padding: NoPadding
              });
              expect(encrypted.cipherText.toString()).to.be("dfff0d463d8254d7eb23887729b22a85");
            });
            it("test encryptor with 64bit iv", function () {
              var key = Hex.parse("feffe9928665731c6d6a8f9467308308");
              var msg = Hex.parse("d9313225f88406e5a55909c5aff5269a86a7a9531534f7da2e4c303d8a318a721c3c0c95956809532fcf0e2449a6b525b16aedf5aa0de657ba637b39");
              var iv = Hex.parse("cafebabefacedbad");
              var encrypted = AES.encrypt(msg, key, {
                iv,
                mode: GCM,
                padding: NoPadding
              });
              expect(encrypted.cipherText.toString()).to.be("61353b4c2806934a777ff51fa22a4755699b2a714fcdc6f83766e5f97b6c742373806900e49f24b22b097544d4896b424989b5e1ebac0f07c23f4598");
            });
            it("test decryptor", function () {
              var encrypted = AES.encrypt(data.message, data.key, {
                iv: data.iv,
                mode: GCM,
                padding: NoPadding
              });
              var decrypted = AES.decrypt(encrypted, data.key, {
                iv: data.iv,
                mode: GCM,
                padding: NoPadding
              });
              expect(decrypted.toString()).to.be(data.message.toString());
            });
            it("test encrypt with string password", function () {
              var key = "password";
              var msg = "message";
              var iv = Hex.parse("cafebabefacedbad");
              var encryptedData = AES.encrypt(msg, key, {
                iv,
                mode: GCM,
                padding: NoPadding
              });
              var decryptedData = AES.decrypt(encryptedData, key, {
                iv,
                mode: GCM,
                padding: NoPadding
              });
              expect(decryptedData.toString(Utf8)).to.be(msg);
            });
            it("test hash with AAD, CipherText", function () {
              var key = Hex.parse("feffe9928665731c6d6a8f9467308308");
              var iv = Hex.parse("cafebabefacedbaddecaf888");
              var authData = Hex.parse("feedfacedeadbeeffeedfacedeadbeefabaddad2");
              var cipherText = Hex.parse("42831ec2217774244b7221b784d0d49ce3aa212f2c02a4e035c17e2329aca12e21d514b25466931c7d8f6a5aac84aa051ba30b396a0aac973d58e091");
              expect(GCM.mac(AES, key, iv, authData, cipherText).toString()).to.be("5bc94fbc3221a5db94fae95ae7121a47");
            });
            it("test hash with CipherText", function () {
              var key = Hex.parse("feffe9928665731c6d6a8f9467308308");
              var iv = Hex.parse("cafebabefacedbaddecaf888");
              var cipherText = Hex.parse("42831ec2217774244b7221b784d0d49ce3aa212f2c02a4e035c17e2329aca12e21d514b25466931c7d8f6a5aac84aa051ba30b396a0aac973d58e091473f5985");
              expect(GCM.mac(AES, key, iv, undefined, cipherText).toString()).to.be("4d5c2af327cd64a62cf35abd2ba6fab4");
            });
            it("test hash with AAD (GMAC)", function () {
              var key = Hex.parse("55804F3AEB4E914DC91255944A1F565A");
              var iv = Hex.parse("BBBBBBBBBBBBBBBBBBBBBBBB");
              var aad = Hex.parse("1063509E5A672C092CAD0B1DC6CE009A61AAAAAAAAAAAA");
              expect(GCM.mac(AES, key, iv, aad).toString().slice(0, 24)).to.be("44c955d63799428524e97993");
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=GCM.js.map