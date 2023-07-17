System.register(["expect.js", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _req, _req2, _req3, _req4, _req5, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_expectJs) {
      _req = _expectJs.__cjsMetaURL;
    }, function (_unresolved_) {
      _req2 = _unresolved_.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req4 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req5 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _loader = _unresolved_5.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "expect.js": _req,
          "../../../test/build/lib": _req2,
          "../../../test/build/mode/CTR": _req3,
          "../../../test/build/pad/NoPadding": _req4,
          "../../../test/build/AES": _req5
        }, _require);

        (function () {
          var expect = require("expect.js");

          var {
            Word32Array
          } = require("../../../test/build/lib");

          var {
            CTR
          } = require("../../../test/build/mode/CTR");

          var {
            NoPadding
          } = require("../../../test/build/pad/NoPadding");

          var {
            AES
          } = require("../../../test/build/AES");

          describe("mode/CTR", function () {
            var data = {};
            data.message = new Word32Array([0x00010203, 0x04050607, 0x08090a0b, 0x0c0d0e0f, 0x10111213, 0x14151617, 0x18191a1b, 0x1c1d1e1f]);
            data.key = new Word32Array([0x20212223, 0x24252627, 0x28292a2b, 0x2c2d2e2f]);
            data.iv = new Word32Array([0x30313233, 0x34353637, 0x38393a3b, 0x3c3d3e3f]);
            it("test encryptor", function () {
              // Compute expected
              var expected = data.message.clone();
              var aes = AES.createEncryptor(data.key); // Counter initialized with IV

              var counter = data.iv.words.slice(0); // First block XORed with encrypted counter

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
                mode: CTR,
                padding: NoPadding
              }).cipherText; // Test

              expect(actual.toString()).to.be(expected.toString());
            });
            it("test decryptor", function () {
              var encrypted = AES.encrypt(data.message, data.key, {
                iv: data.iv,
                mode: CTR,
                padding: NoPadding
              });
              var decrypted = AES.decrypt(encrypted, data.key, {
                iv: data.iv,
                mode: CTR,
                padding: NoPadding
              });
              expect(decrypted.toString()).to.be(data.message.toString());
            });
          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=CTR.js.map