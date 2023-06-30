System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, find, _decorator, GameEvent, LangType, ButtonMng, MusicMng, SocketSetting, DataSoundSet, SoundItem, SoundType, _dec, _class, _crd, ccclass, property, PanelSoundSet;

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicMng(extras) {
    _reporterNs.report("MusicMng", "../../Manager/MusicMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataSoundSet(extras) {
    _reporterNs.report("DataSoundSet", "../Data/Panel/DataSoundSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundItem(extras) {
    _reporterNs.report("SoundItem", "../Data/Panel/DataSoundSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundType(extras) {
    _reporterNs.report("SoundType", "../Data/Panel/DataSoundSet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      find = _cc.find;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GameEvent = _unresolved_2.GameEvent;
    }, function (_unresolved_3) {
      LangType = _unresolved_3.LangType;
    }, function (_unresolved_4) {
      ButtonMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      MusicMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      SocketSetting = _unresolved_6.default;
    }, function (_unresolved_7) {
      DataSoundSet = _unresolved_7.default;
      SoundItem = _unresolved_7.SoundItem;
      SoundType = _unresolved_7.SoundType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "059feAthGdAJ6m8DxUB16O6", "%E6%9A%AB%E6%99%82%E4%B8%8D%E7%94%A8_PanelSoundSet", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelSoundSet = (_dec = ccclass('PanelSoundSet'), _dec(_class = class PanelSoundSet extends (_crd && DataSoundSet === void 0 ? (_reportPossibleCrUseOfDataSoundSet({
        error: Error()
      }), DataSoundSet) : DataSoundSet) {
        // #EA1337
        // #494a4d
        onLoad() {
          super.onLoad();
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ShowSoundSet, this.show);
          this.map_Item.set((_crd && SoundType === void 0 ? (_reportPossibleCrUseOfSoundType({
            error: Error()
          }), SoundType) : SoundType).Music, new (_crd && SoundItem === void 0 ? (_reportPossibleCrUseOfSoundItem({
            error: Error()
          }), SoundItem) : SoundItem).Item(this, (_crd && SoundType === void 0 ? (_reportPossibleCrUseOfSoundType({
            error: Error()
          }), SoundType) : SoundType).Music));
          this.map_Item.set((_crd && SoundType === void 0 ? (_reportPossibleCrUseOfSoundType({
            error: Error()
          }), SoundType) : SoundType).Effect, new (_crd && SoundItem === void 0 ? (_reportPossibleCrUseOfSoundItem({
            error: Error()
          }), SoundItem) : SoundItem).Item(this, (_crd && SoundType === void 0 ? (_reportPossibleCrUseOfSoundType({
            error: Error()
          }), SoundType) : SoundType).Effect));
          this.buttonClose = find("btn_Close", this.node).getComponent(Button);
          this.buttonBlockBG = find("BlockBG", this.node).getComponent(Button);
          this.viewInit();
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "hide", this.buttonClose);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "hide", this.buttonBlockBG);
        }

        setLanguage() {
          this.map_Item.get((_crd && SoundType === void 0 ? (_reportPossibleCrUseOfSoundType({
            error: Error()
          }), SoundType) : SoundType).Effect).setTitle((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("020", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game));
          this.map_Item.get((_crd && SoundType === void 0 ? (_reportPossibleCrUseOfSoundType({
            error: Error()
          }), SoundType) : SoundType).Music).setTitle((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("019", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game));
        }

        show() {
          super.show();
          this.map_Item.forEach(Item => {
            let getbool = Item.getType() == (_crd && SoundType === void 0 ? (_reportPossibleCrUseOfSoundType({
              error: Error()
            }), SoundType) : SoundType).Music ? (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
              error: Error()
            }), MusicMng) : MusicMng).getMusicState() : (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
              error: Error()
            }), MusicMng) : MusicMng).getEffectState();
            console.log(getbool);
            Item.init(getbool);
          });
        }

        switchEevent(e, customEventData) {
          let item = this.map_Item.get(Number(customEventData));
          let getbool = item.getType() == (_crd && SoundType === void 0 ? (_reportPossibleCrUseOfSoundType({
            error: Error()
          }), SoundType) : SoundType).Music ? (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).switchMusic() : (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).switchEffect();
          console.log(getbool);
          item.action(getbool);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=暫時不用_PanelSoundSet.js.map