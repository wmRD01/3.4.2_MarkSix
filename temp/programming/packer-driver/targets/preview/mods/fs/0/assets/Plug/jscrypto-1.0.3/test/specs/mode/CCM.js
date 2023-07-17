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
              CCM
            },
            pad: {
              NoPadding
            },
            AES,
            Hex,
            Utf8
          } = require("../../../test/build/");

          describe("mode/CCM", function () {
            it("test B0", function () {
              var t = 12;
              var Q = new Word32Array([0, 17409 << 8], 7);
              var N = Hex.parse("13d4a35d71a50000");
              var B02 = CCM.getB0(true, t, Q, N);
              expect(B02.toString()).to.be("6e13d4a35d71a5000000000000004401");
            });
            describe("Klen=128, Tlen=32, Nlen=56, Alen=64, Plen=32", function () {
              var K = Hex.parse("404142434445464748494a4b4c4d4e4f");
              var N = Hex.parse("10111213141516");
              var A = Hex.parse("0001020304050607");
              var P = Hex.parse("20212223");
              var t = 32 / 8;
              it("test encryption/decryption/mac", function () {
                // Test MAC
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                expect(cbcMac.toString()).to.be("4dac255d");
              });
              it("test encryption/decryption", function () {
                // Test encryption
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                expect(encrypted.cipherText.toString()).to.be("7162015b"); // Test decryption

                var decrypted = AES.decrypt(encrypted, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                expect(decrypted.toString()).to.be(P.toString());
              });
              it("test ciphertext/mac combining function", function () {
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                var concatenatedCipherText = encrypted.cipherText.clone().concat(cbcMac);
                expect(concatenatedCipherText.toString()).to.be("7162015b4dac255d");
                expect(CCM.combineCipherTextAndAuthTag(encrypted.cipherText, cbcMac).toString()).to.be(concatenatedCipherText.toString());
              });
              it("test ciphertext/mac split function", function () {
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                var combinedCiphertext = CCM.combineCipherTextAndAuthTag(encrypted.cipherText, cbcMac);
                var result = CCM.splitCipherTextAndAuthTag(combinedCiphertext, t);
                expect(result.cipherText.toString()).to.be(encrypted.cipherText.toString());
                expect(result.authTag.toString()).to.be(cbcMac.toString());
              });
            });
            describe("Klen=128, Tlen=48, Nlen=64, Alen=128, Plen=128", function () {
              var K = Hex.parse("404142434445464748494a4b4c4d4e4f");
              var N = Hex.parse("1011121314151617");
              var A = Hex.parse("000102030405060708090a0b0c0d0e0f");
              var P = Hex.parse("202122232425262728292a2b2c2d2e2f");
              var t = 48 / 8;
              it("test encryption/decryption/mac", function () {
                // Test MAC
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                expect(cbcMac.toString()).to.be("1fc64fbfaccd");
              });
              it("test encryption/decryption", function () {
                // Test encryption
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                expect(encrypted.cipherText.toString()).to.be("d2a1f0e051ea5f62081a7792073d593d"); // Test decryption

                var decrypted = AES.decrypt(encrypted, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                expect(decrypted.toString()).to.be(P.toString());
              });
              it("test ciphertext/mac combining function", function () {
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                var concatenatedCipherText = encrypted.cipherText.clone().concat(cbcMac);
                expect(concatenatedCipherText.toString()).to.be("d2a1f0e051ea5f62081a7792073d593d1fc64fbfaccd");
                expect(CCM.combineCipherTextAndAuthTag(encrypted.cipherText, cbcMac).toString()).to.be(concatenatedCipherText.toString());
              });
              it("test ciphertext/mac split function", function () {
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                var combinedCiphertext = CCM.combineCipherTextAndAuthTag(encrypted.cipherText, cbcMac);
                var result = CCM.splitCipherTextAndAuthTag(combinedCiphertext, t);
                expect(result.cipherText.toString()).to.be(encrypted.cipherText.toString());
                expect(result.authTag.toString()).to.be(cbcMac.toString());
              });
            });
            describe("Klen=128, Tlen=64, Nlen=96, Alen=160, Plen=192", function () {
              var K = Hex.parse("404142434445464748494a4b4c4d4e4f");
              var N = Hex.parse("101112131415161718191a1b");
              var A = Hex.parse("000102030405060708090a0b0c0d0e0f10111213");
              var P = Hex.parse("202122232425262728292a2b2c2d2e2f3031323334353637");
              var t = 64 / 8;
              it("test encryption/decryption/mac", function () {
                // Test MAC
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                expect(cbcMac.toString()).to.be("484392fbc1b09951");
              });
              it("test encryption/decryption", function () {
                // Test encryption
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                expect(encrypted.cipherText.toString()).to.be("e3b201a9f5b71a7a9b1ceaeccd97e70b6176aad9a4428aa5"); // Test decryption

                var decrypted = AES.decrypt(encrypted, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                expect(decrypted.toString()).to.be(P.toString());
              });
              it("test ciphertext/mac combining function", function () {
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                var concatenatedCipherText = encrypted.cipherText.clone().concat(cbcMac);
                expect(concatenatedCipherText.toString()).to.be("e3b201a9f5b71a7a9b1ceaeccd97e70b6176aad9a4428aa5484392fbc1b09951");
                expect(CCM.combineCipherTextAndAuthTag(encrypted.cipherText, cbcMac).toString()).to.be(concatenatedCipherText.toString());
              });
              it("test ciphertext/mac split function", function () {
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                var combinedCiphertext = CCM.combineCipherTextAndAuthTag(encrypted.cipherText, cbcMac);
                var result = CCM.splitCipherTextAndAuthTag(combinedCiphertext, t);
                expect(result.cipherText.toString()).to.be(encrypted.cipherText.toString());
                expect(result.authTag.toString()).to.be(cbcMac.toString());
              });
            });
            describe("Klen=128, Tlen=64, Nlen=104, Alen=0, Plen=72", function () {
              var K = Hex.parse("0953fa93e7caac9638f58820220a398e");
              var N = Hex.parse("00800148202345000012345678");
              var A = new Word32Array([], 0);
              var P = Hex.parse("120104320308ba072f");
              var t = 64 / 8;
              it("test encryption/decryption/mac", function () {
                // Test MAC
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                expect(cbcMac.toString()).to.be("ec129d20a620d01e");
              });
              it("test encryption/decryption", function () {
                // Test encryption
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                expect(encrypted.cipherText.toString()).to.be("79d7dbc0c9b4d43eeb"); // Test decryption

                var decrypted = AES.decrypt(encrypted, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                expect(decrypted.toString()).to.be(P.toString());
              });
              it("test ciphertext/mac combining function", function () {
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                var concatenatedCipherText = encrypted.cipherText.clone().concat(cbcMac);
                expect(concatenatedCipherText.toString()).to.be("79d7dbc0c9b4d43eebec129d20a620d01e");
                expect(CCM.combineCipherTextAndAuthTag(encrypted.cipherText, cbcMac).toString()).to.be(concatenatedCipherText.toString());
              });
              it("test ciphertext/mac split function", function () {
                var cbcMac = CCM.mac(AES, K, N, A, P, t);
                var encrypted = AES.encrypt(P, K, {
                  iv: N,
                  mode: CCM,
                  padding: NoPadding
                });
                var combinedCiphertext = CCM.combineCipherTextAndAuthTag(encrypted.cipherText, cbcMac);
                var result = CCM.splitCipherTextAndAuthTag(combinedCiphertext, t);
                expect(result.cipherText.toString()).to.be(encrypted.cipherText.toString());
                expect(result.authTag.toString()).to.be(cbcMac.toString());
              });
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=CCM.js.map