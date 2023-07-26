System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assetManager, error, resources, SpriteAtlas, Image, NotificationType, GameEvent, EventMng, SpriteAtlasAsset, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfImage(extras) {
    _reporterNs.report("Image", "../../Plug/Image", _context.meta, extras);
  }

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
      assetManager = _cc.assetManager;
      error = _cc.error;
      resources = _cc.resources;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      Image = _unresolved_2.default;
    }, function (_unresolved_3) {
      NotificationType = _unresolved_3.NotificationType;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      EventMng = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fab87x/IQZFv4rfU3Tw/R4R", "SpriteAtlasAsset", undefined);

      SpriteAtlasAsset = class SpriteAtlasAsset {
        constructor() {
          _defineProperty(this, "data", new Map());

          _defineProperty(this, "checkAssetState", void 0);

          _defineProperty(this, "typePath", "SpriteAtlas/");

          _defineProperty(this, "filePath", []);

          _defineProperty(this, "urlPath", ["http://10.20.13.202/JaiJaiTest/Remote/planets"]);
        }

        loadAsset() {
          let formatArr = [];

          for (let index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index]);
          }

          resources.load(formatArr, SpriteAtlas, (err, data) => {
            // console.log(err);
            // console.log(data);
            data.forEach(_SpriteAtlas => {
              _SpriteAtlas.getSpriteFrames().forEach(_spriteFrame => {
                // console.log(_spriteFrame);
                this.data.set(_spriteFrame.name, _spriteFrame);
              });
            }); // console.log(this.data);

            this.checkAssetState = true;
          });
          return this; //遠端測試
          // let URL = "http://10.20.13.202/JaiJaiTest/Remote/planets"
          // assetManager.loadRemote(URL + ".plist", (err, plist: JsonAsset) => {
          //     if (err) {
          //         error(err.message)
          //         return
          //     }
          //     assetManager.loadRemote(URL + ".png", (err, image: ImageAsset) => {
          //         if (err) {
          //             error(err.message)
          //             return
          //         }
          //         let atlas = Image.transformTextureToSpriteAtlas(plist, image)
          //         atlas.getSpriteFrames().forEach(_spriteFrame => {
          //             console.log(_spriteFrame);
          //             _Asset.set(_spriteFrame.name, _spriteFrame)
          //         })
          //         this.checkAssetState = true;
          //     })
          // })

          for (let index = 0; index < this.urlPath.length; index++) {
            let URL = this.urlPath[index];
            assetManager.loadRemote(URL + ".plist", (err, plist) => {
              if (err) {
                error(err.message);
                return;
              }

              assetManager.loadRemote(URL + ".png", (err, image) => {
                if (err) {
                  error(err.message);
                  return;
                }

                let atlas = (_crd && Image === void 0 ? (_reportPossibleCrUseOfImage({
                  error: Error()
                }), Image) : Image).transformTextureToSpriteAtlas(plist, image);
                atlas.getSpriteFrames().forEach(_spriteFrame => {// console.log(_spriteFrame);
                  // _Asset.set(_spriteFrame.name, _spriteFrame)
                }); // this.checkAssetState = true;
              });
            });
          }
        }

        loadLogo(lang) {
          let formatArr = [];
          formatArr.push(this.typePath + "Lang/" + lang);
          resources.load(formatArr, SpriteAtlas, (err, data) => {
            // console.log(err);
            // console.log(data);
            data.forEach(_SpriteAtlas => {
              _SpriteAtlas.getSpriteFrames().forEach(_spriteFrame => {
                // console.log(_spriteFrame);
                this.data.set(_spriteFrame.name, _spriteFrame);
              });
            }); // CheckLoading.getInstance.changeState(CheckLoadingType.isLogo, true)

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

      _export("default", new SpriteAtlasAsset());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpriteAtlasAsset.js.map