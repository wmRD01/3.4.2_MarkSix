System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, game, _decorator, BaseSingletonComponent, PanelLoading, GameSceneName, AssetMng, MusicMng, PublicData, _dec, _class, _crd, ccclass, property, MainLoading;

  function _reportPossibleCrUseOfBaseSingletonComponent(extras) {
    _reporterNs.report("BaseSingletonComponent", "../../Patten/Singleton/BaseSingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../Contorll/NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneName(extras) {
    _reporterNs.report("GameSceneName", "../Enum/GameSenceName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicMng(extras) {
    _reporterNs.report("MusicMng", "../Manager/MusicMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../Model/PublicData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      game = _cc.game;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseSingletonComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PanelLoading = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameSceneName = _unresolved_4.GameSceneName;
    }, function (_unresolved_5) {
      AssetMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      MusicMng = _unresolved_6.default;
    }, function (_unresolved_7) {
      PublicData = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4baf0MtEdxKBYiOKXlRC+wG", "MainLoading", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MainLoading = (_dec = ccclass('MainLoading'), _dec(_class = class MainLoading extends (_crd && BaseSingletonComponent === void 0 ? (_reportPossibleCrUseOfBaseSingletonComponent({
        error: Error()
      }), BaseSingletonComponent) : BaseSingletonComponent)() {
        onLoad() {
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.currentScene = (_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).Loading;
          super.onLoad();
          game.frameRate = 59;
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isResetView = true;
          (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).startLoad();
          (_crd && MusicMng === void 0 ? (_reportPossibleCrUseOfMusicMng({
            error: Error()
          }), MusicMng) : MusicMng).init();
        }

        start() {
          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.openLoading();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainLoading.js.map