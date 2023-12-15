System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, resources, SpriteAtlas, SpriteFrame, NotificationType, GameEvent, EventMng, SpriteAsset, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAsset(extras) {
    _reporterNs.report("IAsset", "../Interface/IAsset", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      resources = _cc.resources;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      NotificationType = _unresolved_2.NotificationType;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40288pKX8lKyJHQ0p6SZfWx", "SpriteAsset", undefined);

      SpriteAsset = class SpriteAsset {
        constructor() {
          _defineProperty(this, "data", new Map());

          _defineProperty(this, "checkAssetState", void 0);

          _defineProperty(this, "typePath", "Sprite/");
        }

        loadAsset() {
          resources.loadDir(this.typePath, SpriteFrame, (err, data) => {
            data.forEach(_SprtieFrame => {
              this.data.set(_SprtieFrame.name, _SprtieFrame);
            });
            this.checkAssetState = true; // console.log(data);
          });
          resources.load("Sprite/Test", SpriteAtlas, (err, data) => {// console.log(data);
            // data.forEach(_SprtieFrame => {
            //     this.data.set(_SprtieFrame.name, _SprtieFrame)
            // });
            // this.checkAssetState = true;
            // console.log(data);
          });
          return this;
        }

        loadLogo(lang) {
          var formatArr = []; // lang = "cn"

          formatArr.push(this.typePath + "Lang/" + lang);
          resources.load(formatArr, SpriteAtlas, (err, data) => {
            if (err) {
              this.loadLogo("USD");
              return;
            } // console.log(data);


            data.forEach(_SpriteAtlas => {
              _SpriteAtlas.getSpriteFrames().forEach(_spriteFrame => {
                // console.log(_spriteFrame);
                this.data.set(_spriteFrame.name, _spriteFrame);
              });
            });
            console.log(this.data);
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
              error: Error()
            }), NotificationType) : NotificationType).Pulic).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).SetLogo, this.data.get("logo"));
          });
          return this;
        }

      };

      _export("default", new SpriteAsset());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpriteAsset.js.map