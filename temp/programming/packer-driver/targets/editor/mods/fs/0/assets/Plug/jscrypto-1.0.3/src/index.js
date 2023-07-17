System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39", "__unresolved_40", "__unresolved_41"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CBC, CFB, CTR, ECB, OFB, GCM, CCM, AnsiX923, ISO10126, ISO97971, Pkcs7, NoPadding, Zero, OpenSSLFormatter, _crd, mode, pad, formatter;

  function _reportPossibleCrUseOfCBC(extras) {
    _reporterNs.report("CBC", "./mode/CBC", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCFB(extras) {
    _reporterNs.report("CFB", "./mode/CFB", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCTR(extras) {
    _reporterNs.report("CTR", "./mode/CTR", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECB(extras) {
    _reporterNs.report("ECB", "./mode/ECB", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOFB(extras) {
    _reporterNs.report("OFB", "./mode/OFB", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGCM(extras) {
    _reporterNs.report("GCM", "./mode/GCM", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCM(extras) {
    _reporterNs.report("CCM", "./mode/CCM", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnsiX(extras) {
    _reporterNs.report("AnsiX923", "./pad/AnsiX923", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISO(extras) {
    _reporterNs.report("ISO10126", "./pad/ISO10126", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISO2(extras) {
    _reporterNs.report("ISO97971", "./pad/ISO97971", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPkcs(extras) {
    _reporterNs.report("Pkcs7", "./pad/Pkcs7", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNoPadding(extras) {
    _reporterNs.report("NoPadding", "./pad/NoPadding", _context.meta, extras);
  }

  function _reportPossibleCrUseOfZero(extras) {
    _reporterNs.report("Zero", "./pad/Zero", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenSSLFormatter(extras) {
    _reporterNs.report("OpenSSLFormatter", "./formatter/OpenSSLFormatter", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      _export({
        Word32Array: _unresolved_2.Word32Array,
        Word64Array: _unresolved_2.Word64Array,
        Word64: _unresolved_2.Word64,
        Base64: _unresolved_2.Base64,
        Hex: _unresolved_2.Hex,
        Latin1: _unresolved_2.Latin1,
        Utf8: _unresolved_2.Utf8,
        Utf16: _unresolved_2.Utf16,
        Utf16BE: _unresolved_2.Utf16BE,
        Utf16LE: _unresolved_2.Utf16LE,
        OpenSSLKDF: _unresolved_2.OpenSSLKDF,
        EvpKDF: _unresolved_2.EvpKDF,
        PBKDF2: _unresolved_2.PBKDF2
      });
    }, function (_unresolved_3) {
      _export("SerializableCipher", _unresolved_3.SerializableCipher);
    }, function (_unresolved_4) {
      _export("PasswordBasedCipher", _unresolved_4.PasswordBasedCipher);
    }, function (_unresolved_5) {
      _export("CipherParams", _unresolved_5.CipherParams);
    }, function (_unresolved_6) {
      _export("Hmac", _unresolved_6.Hmac);
    }, function (_unresolved_7) {
      _export("HmacMD5", _unresolved_7.HmacMD5);
    }, function (_unresolved_8) {
      _export("HmacSHA1", _unresolved_8.HmacSHA1);
    }, function (_unresolved_9) {
      _export("HmacSHA224", _unresolved_9.HmacSHA224);
    }, function (_unresolved_10) {
      _export("HmacSHA256", _unresolved_10.HmacSHA256);
    }, function (_unresolved_11) {
      _export("HmacSHA384", _unresolved_11.HmacSHA384);
    }, function (_unresolved_12) {
      _export("HmacSHA512", _unresolved_12.HmacSHA512);
    }, function (_unresolved_13) {
      _export("GMAC", _unresolved_13.GMAC);
    }, function (_unresolved_14) {
      _export("CBCMAC", _unresolved_14.CBCMAC);
    }, function (_unresolved_15) {
      _export("MD5", _unresolved_15.MD5);
    }, function (_unresolved_16) {
      _export("SHA1", _unresolved_16.SHA1);
    }, function (_unresolved_17) {
      _export("SHA224", _unresolved_17.SHA224);
    }, function (_unresolved_18) {
      _export("SHA256", _unresolved_18.SHA256);
    }, function (_unresolved_19) {
      _export("SHA384", _unresolved_19.SHA384);
    }, function (_unresolved_20) {
      _export("SHA512", _unresolved_20.SHA512);
    }, function (_unresolved_21) {
      _export("SHA3", _unresolved_21.SHA3);
    }, function (_unresolved_22) {
      _export("AES", _unresolved_22.AES);
    }, function (_unresolved_23) {
      _export("DES", _unresolved_23.DES);
    }, function (_unresolved_24) {
      _export("DES3", _unresolved_24.DES3);
    }, function (_unresolved_25) {
      _export("RIPEMD160", _unresolved_25.RIPEMD160);
    }, function (_unresolved_26) {
      _export("Rabbit", _unresolved_26.Rabbit);
    }, function (_unresolved_27) {
      _export("RC4", _unresolved_27.RC4);
    }, function (_unresolved_28) {
      _export("RC4Drop", _unresolved_28.RC4Drop);
    }, function (_unresolved_29) {
      CBC = _unresolved_29.CBC;
    }, function (_unresolved_30) {
      CFB = _unresolved_30.CFB;
    }, function (_unresolved_31) {
      CTR = _unresolved_31.CTR;
    }, function (_unresolved_32) {
      ECB = _unresolved_32.ECB;
    }, function (_unresolved_33) {
      OFB = _unresolved_33.OFB;
    }, function (_unresolved_34) {
      GCM = _unresolved_34.GCM;
    }, function (_unresolved_35) {
      CCM = _unresolved_35.CCM;
    }, function (_unresolved_36) {
      AnsiX923 = _unresolved_36.AnsiX923;
    }, function (_unresolved_37) {
      ISO10126 = _unresolved_37.ISO10126;
    }, function (_unresolved_38) {
      ISO97971 = _unresolved_38.ISO97971;
    }, function (_unresolved_39) {
      Pkcs7 = _unresolved_39.Pkcs7;
    }, function (_unresolved_40) {
      NoPadding = _unresolved_40.NoPadding;
    }, function (_unresolved_41) {
      Zero = _unresolved_41.Zero;
    }, function (_unresolved_42) {
      OpenSSLFormatter = _unresolved_42.OpenSSLFormatter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e673pM6F1BMJaC9+Cs22Cz", "index", undefined);

      _export("mode", mode = {
        CBC: _crd && CBC === void 0 ? (_reportPossibleCrUseOfCBC({
          error: Error()
        }), CBC) : CBC,
        CFB: _crd && CFB === void 0 ? (_reportPossibleCrUseOfCFB({
          error: Error()
        }), CFB) : CFB,
        CTR: _crd && CTR === void 0 ? (_reportPossibleCrUseOfCTR({
          error: Error()
        }), CTR) : CTR,
        ECB: _crd && ECB === void 0 ? (_reportPossibleCrUseOfECB({
          error: Error()
        }), ECB) : ECB,
        OFB: _crd && OFB === void 0 ? (_reportPossibleCrUseOfOFB({
          error: Error()
        }), OFB) : OFB,
        GCM: _crd && GCM === void 0 ? (_reportPossibleCrUseOfGCM({
          error: Error()
        }), GCM) : GCM,
        CCM: _crd && CCM === void 0 ? (_reportPossibleCrUseOfCCM({
          error: Error()
        }), CCM) : CCM
      });

      _export("pad", pad = {
        AnsiX923: _crd && AnsiX923 === void 0 ? (_reportPossibleCrUseOfAnsiX({
          error: Error()
        }), AnsiX923) : AnsiX923,
        ISO10126: _crd && ISO10126 === void 0 ? (_reportPossibleCrUseOfISO({
          error: Error()
        }), ISO10126) : ISO10126,
        ISO97971: _crd && ISO97971 === void 0 ? (_reportPossibleCrUseOfISO2({
          error: Error()
        }), ISO97971) : ISO97971,
        Pkcs7: _crd && Pkcs7 === void 0 ? (_reportPossibleCrUseOfPkcs({
          error: Error()
        }), Pkcs7) : Pkcs7,
        NoPadding: _crd && NoPadding === void 0 ? (_reportPossibleCrUseOfNoPadding({
          error: Error()
        }), NoPadding) : NoPadding,
        Zero: _crd && Zero === void 0 ? (_reportPossibleCrUseOfZero({
          error: Error()
        }), Zero) : Zero
      });

      _export("formatter", formatter = {
        OpenSSLFormatter: _crd && OpenSSLFormatter === void 0 ? (_reportPossibleCrUseOfOpenSSLFormatter({
          error: Error()
        }), OpenSSLFormatter) : OpenSSLFormatter
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map