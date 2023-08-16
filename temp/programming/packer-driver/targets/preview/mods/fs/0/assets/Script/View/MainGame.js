System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PanelUI, _decorator, find, js, CheckLoadingType, PublicData, CheckLoading, BaseSingletonComponent, GameSceneName, PanelGameMessage, PanelLoading, SingletManager, DEV, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, MainGame;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPanelUI(extras) {
    _reporterNs.report("PanelUI", "../Contorll/Lobby/PanelBottomNavigationBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoadingType(extras) {
    _reporterNs.report("CheckLoadingType", "../Enum/CheckLoadingType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoading(extras) {
    _reporterNs.report("CheckLoading", "../Model/CheckLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseSingletonComponent(extras) {
    _reporterNs.report("BaseSingletonComponent", "../../Patten/Singleton/BaseSingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneName(extras) {
    _reporterNs.report("GameSceneName", "../Enum/GameSenceName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelGameMessage(extras) {
    _reporterNs.report("PanelGameMessage", "../Contorll/Lobby/PanelGameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../Contorll/NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletManager(extras) {
    _reporterNs.report("SingletManager", "../../Patten/Singleton/SingletonManger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      find = _cc.find;
      js = _cc.js;
    }, function (_unresolved_2) {
      PanelUI = _unresolved_2.default;
    }, function (_unresolved_3) {
      CheckLoadingType = _unresolved_3.CheckLoadingType;
    }, function (_unresolved_4) {
      PublicData = _unresolved_4.default;
    }, function (_unresolved_5) {
      CheckLoading = _unresolved_5.default;
    }, function (_unresolved_6) {
      BaseSingletonComponent = _unresolved_6.default;
    }, function (_unresolved_7) {
      GameSceneName = _unresolved_7.GameSceneName;
    }, function (_unresolved_8) {
      PanelGameMessage = _unresolved_8.default;
    }, function (_unresolved_9) {
      PanelLoading = _unresolved_9.default;
    }, function (_unresolved_10) {
      SingletManager = _unresolved_10.default;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98592aSaN5HCbrZPBX4CcSG", "MainGame", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainGame", MainGame = (_dec = ccclass('MainGame'), _dec2 = property(_crd && PanelGameMessage === void 0 ? (_reportPossibleCrUseOfPanelGameMessage({
        error: Error()
      }), PanelGameMessage) : PanelGameMessage), _dec3 = property(_crd && PanelUI === void 0 ? (_reportPossibleCrUseOfPanelUI({
        error: Error()
      }), PanelUI) : PanelUI), _dec(_class = (_class2 = (_temp = class MainGame extends (_crd && BaseSingletonComponent === void 0 ? (_reportPossibleCrUseOfBaseSingletonComponent({
        error: Error()
      }), BaseSingletonComponent) : BaseSingletonComponent)() {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "panelGameMessage", _descriptor, this);

          _initializerDefineProperty(this, "panelUI", _descriptor2, this);
        }

        onLoad() {
          // console.error(DEV);
          if (DEV) {// Player.getInstance.identity = PlayerIdentity.Guest
            // window.isPhone = true
          }

          find("Canvas/PanelTest").active = DEV;
          /**測試功能 */

          (_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.endWork((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isGameSence);
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.currentScene = (_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).GameRoom;
          super.onLoad();
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isResetView = true;
          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.closeLoading();
          /**由於Panel是動態仔入，因此得用Find去抓，或者....再想想，因為在介面上操作的話等於是寫死(? */
          // this.panelTable = find("3DNode/PanelTable").getComponent(PanelTable)
          // this.panelBetState = find("Canvas/PanelBetState").getComponent(PanelBetState)
          // this.panelShowdownResult = find("Canvas/PanelShowdownResult").getComponent(PanelShowdownResult)
          // this.panelClientCoin = find("Canvas/PanelClientCoin").getComponent(PanelClientCoin)
          // this.panelGameMessage = find("Canvas/PanelGameMessage").getComponent(PanelGameMessage)
          // this.panelLimitBet = find("Canvas/PanelLimitBet").getComponent(PanelLimitBet)
          // this.panelTimer = find("Canvas/PanelTimer").getComponent(PanelTimer)
          // this.panelUI = find("Canvas/PanelUI").getComponent(PanelUI)
          // this.panelCardSequence = find("Canvas/PanelCardSequence").getComponent(PanelCardSequence)
          // this.panelShuffleCard = find("Canvas/PanelShuffleCard").getComponent(PanelShuffleCard)
        }

        onEnable() {// this.setEvent(GameEvent.SetOrientation, this.eventOrientation)
        }
        /**
         * 測試內存
         */


        start() {//建立連線
          // this.eventEmit(GameEvent.ResetView)
          // await SocketSetting.checkLanguage(LangType.Server)
          // await SocketSetting.checkLanguage(LangType.Game)
          // PanelLoading.instance.openLoading(SocketSetting.t("E_0004", LangType.Game))
          // PublicData.getInstance.isResetProcessing = true
          // PublicData.getInstance.isResetView = true;
          // /**初始化全部語系 */
          // for (let index = 0; index < PublicData.getInstance.arr_ComponentBaseClass.length; index++) {
          //     PublicData.getInstance.arr_ComponentBaseClass[index].setLanguage()
          // }
          // /** forCAST用 */
          // if (Player.getInstance.identity == PlayerIdentity.Guest) {
          //     this.panelUI.hide()
          //     CanvasControll.instance.node.on(Node.EventType.TOUCH_END, this.eventPushNotificationGuset, this)
          // }
          // await AssetMng.waitStateCheck(AssetType.Sprite)
          // await AssetMng.waitStateCheck(AssetType.Music)
          // await CheckLoading.getInstance.checkAllEnd()
          // this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gori)

          return _asyncToGenerator(function* () {})();
        }

        onDisable() {}

        onDestroy() {
          /**清除之前資料 */
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.arr_ComponentBaseClass.length = 0;
          (_crd && SingletManager === void 0 ? (_reportPossibleCrUseOfSingletManager({
            error: Error()
          }), SingletManager) : SingletManager).instance.delete(js.getClassName(this));
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panelGameMessage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainGame.js.map