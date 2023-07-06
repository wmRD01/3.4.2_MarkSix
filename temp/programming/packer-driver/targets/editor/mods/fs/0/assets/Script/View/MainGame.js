System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "cc/env", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PanelUI, _decorator, director, find, js, Node, CommandType, LangType, CheckLoadingType, PublicData, WebSocketEvent, CheckLoading, BaseSingletonComponent, GameSceneName, gbet, SocketSetting, GameEvent, PanelClientCoin, PanelGameMessage, PanelTimer, PanelLoading, SingletManager, DEV, PanelTextAnimation, AssetMng, AssetType, Player, PlayerIdentity, CanvasControll, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, MainGame;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPanelUI(extras) {
    _reporterNs.report("PanelUI", "../Contorll/Lobby/PanelBottomNavigationBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoadingType(extras) {
    _reporterNs.report("CheckLoadingType", "../Enum/CheckLoadingType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../Enum/WebSocketEvent", _context.meta, extras);
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

  function _reportPossibleCrUseOfgbet(extras) {
    _reporterNs.report("gbet", "../Contorll/Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelClientCoin(extras) {
    _reporterNs.report("PanelClientCoin", "../Contorll/Lobby/PanelClientCoin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelGameMessage(extras) {
    _reporterNs.report("PanelGameMessage", "../Contorll/Lobby/PanelGameMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelTimer(extras) {
    _reporterNs.report("PanelTimer", "../Contorll/Lobby/PanelTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../Contorll/NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletManager(extras) {
    _reporterNs.report("SingletManager", "../../Patten/Singleton/SingletonManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelTextAnimation(extras) {
    _reporterNs.report("PanelTextAnimation", "../Contorll/GameRoom/PanelTextAnimation/PanelTextAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Model/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerIdentity(extras) {
    _reporterNs.report("PlayerIdentity", "../Enum/PlayerIdentity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCanvasControll(extras) {
    _reporterNs.report("CanvasControll", "../Contorll/NoClearNode/CanvasControll", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      director = _cc.director;
      find = _cc.find;
      js = _cc.js;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      PanelUI = _unresolved_2.default;
    }, function (_unresolved_3) {
      CommandType = _unresolved_3.CommandType;
    }, function (_unresolved_4) {
      LangType = _unresolved_4.LangType;
    }, function (_unresolved_5) {
      CheckLoadingType = _unresolved_5.CheckLoadingType;
    }, function (_unresolved_6) {
      PublicData = _unresolved_6.default;
    }, function (_unresolved_7) {
      WebSocketEvent = _unresolved_7.WebSocketEvent;
    }, function (_unresolved_8) {
      CheckLoading = _unresolved_8.default;
    }, function (_unresolved_9) {
      BaseSingletonComponent = _unresolved_9.default;
    }, function (_unresolved_10) {
      GameSceneName = _unresolved_10.GameSceneName;
    }, function (_unresolved_11) {
      gbet = _unresolved_11.gbet;
    }, function (_unresolved_12) {
      SocketSetting = _unresolved_12.default;
    }, function (_unresolved_13) {
      GameEvent = _unresolved_13.GameEvent;
    }, function (_unresolved_14) {
      PanelClientCoin = _unresolved_14.default;
    }, function (_unresolved_15) {
      PanelGameMessage = _unresolved_15.default;
    }, function (_unresolved_16) {
      PanelTimer = _unresolved_16.default;
    }, function (_unresolved_17) {
      PanelLoading = _unresolved_17.default;
    }, function (_unresolved_18) {
      SingletManager = _unresolved_18.default;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }, function (_unresolved_19) {
      PanelTextAnimation = _unresolved_19.default;
    }, function (_unresolved_20) {
      AssetMng = _unresolved_20.default;
    }, function (_unresolved_21) {
      AssetType = _unresolved_21.AssetType;
    }, function (_unresolved_22) {
      Player = _unresolved_22.default;
    }, function (_unresolved_23) {
      PlayerIdentity = _unresolved_23.PlayerIdentity;
    }, function (_unresolved_24) {
      CanvasControll = _unresolved_24.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98592aSaN5HCbrZPBX4CcSG", "MainGame", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainGame", MainGame = (_dec = ccclass('MainGame'), _dec2 = property(_crd && PanelClientCoin === void 0 ? (_reportPossibleCrUseOfPanelClientCoin({
        error: Error()
      }), PanelClientCoin) : PanelClientCoin), _dec3 = property(_crd && PanelGameMessage === void 0 ? (_reportPossibleCrUseOfPanelGameMessage({
        error: Error()
      }), PanelGameMessage) : PanelGameMessage), _dec4 = property(_crd && PanelTimer === void 0 ? (_reportPossibleCrUseOfPanelTimer({
        error: Error()
      }), PanelTimer) : PanelTimer), _dec5 = property(_crd && PanelUI === void 0 ? (_reportPossibleCrUseOfPanelUI({
        error: Error()
      }), PanelUI) : PanelUI), _dec6 = property(_crd && PanelTextAnimation === void 0 ? (_reportPossibleCrUseOfPanelTextAnimation({
        error: Error()
      }), PanelTextAnimation) : PanelTextAnimation), _dec(_class = (_class2 = (_temp = class MainGame extends (_crd && BaseSingletonComponent === void 0 ? (_reportPossibleCrUseOfBaseSingletonComponent({
        error: Error()
      }), BaseSingletonComponent) : BaseSingletonComponent)() {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "panelClientCoin", _descriptor, this);

          _initializerDefineProperty(this, "panelGameMessage", _descriptor2, this);

          _initializerDefineProperty(this, "panelTimer", _descriptor3, this);

          _initializerDefineProperty(this, "panelUI", _descriptor4, this);

          _initializerDefineProperty(this, "panelTextAnimation", _descriptor5, this);
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

        onEnable() {
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SetOrientation, this.eventOrientation);
        }
        /**
         * 測試內存
         */


        async start() {
          //建立連線
          this.eventEmit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ResetView);
          await (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).checkLanguage((_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Server);
          await (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).checkLanguage((_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.openLoading((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("E_0004", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game));
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isResetProcessing = true;
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isResetView = true;
          /**初始化全部語系 */

          for (let index = 0; index < (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.arr_ComponentBaseClass.length; index++) {
            (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.arr_ComponentBaseClass[index].setLanguage();
          }
          /** forCAST用 */


          if ((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.identity == (_crd && PlayerIdentity === void 0 ? (_reportPossibleCrUseOfPlayerIdentity({
            error: Error()
          }), PlayerIdentity) : PlayerIdentity).Guest) {
            this.panelClientCoin.hide();
            this.panelUI.hide();
            (_crd && CanvasControll === void 0 ? (_reportPossibleCrUseOfCanvasControll({
              error: Error()
            }), CanvasControll) : CanvasControll).instance.node.on(Node.EventType.TOUCH_END, this.eventPushNotificationGuset, this);
          }

          await (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite);
          await (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Music);
          await (_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkAllEnd();
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gori);
        }

        onDisable() {
          this.deletEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SetOrientation, this.eventOrientation);
        }

        onDestroy() {
          /**清除之前資料 */
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.arr_ComponentBaseClass.length = 0;
          (_crd && SingletManager === void 0 ? (_reportPossibleCrUseOfSingletManager({
            error: Error()
          }), SingletManager) : SingletManager).instance.delete(js.getClassName(this));
        }

        eventOrientation(str) {
          /**如果當前是橫版且接收到字串為橫 */
          if ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isLandscape && str == "portrait") (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isLandscape = false;else if (!(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isLandscape && str == "landscape") (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isLandscape = true;else return;
          director.loadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).GameRoom);
        }

        backLobby() {
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).pwlby);
          director.loadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).Lobby);
        }

        eventPushNotificationGuset() {
          // console.error("送?");
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.castAPI.send("guest", {});
        }
        /**以下測試 */


        onRefreshRoomState() {
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gori);
        }
        /**下注清除 */


        onBetClear() {
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gbcl);
        }
        /**自身下注 */


        onOwnerBet() {
          for (let index = 0; index < 30; index++) {
            let temp = new (_crd && gbet === void 0 ? (_reportPossibleCrUseOfgbet({
              error: Error()
            }), gbet) : gbet)();
            temp.chip = 100;
            temp.kind = Math.floor(Math.random() * 5);
            this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
              error: Error()
            }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
              error: Error()
            }), CommandType) : CommandType).gbet, temp);
          }
        }
        /**下注確認 */


        onBetCheck() {
          //這要做什麼?
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gbcf);
        }
        /**參照上一局下注 */


        onReferLastBet() {
          //假設第一局我依然要傳給leo?還是要我們檔? 照傳
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gbrt);
        }
        /**瞇牌過程 */


        onSquintProcess() {}
        /**瞇牌結束 */


        onSquintEnd() {
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).gpe);
        }

        onResestPC() {
          window.isPhone = false;
          director.loadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).GameRoom);
        }

        onResetPhoneLandscape() {
          window.isPhone = true;
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isLandscape = true;
          director.loadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).GameRoom);
        }

        onResetPhonePortrait() {
          window.isPhone = true;
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isLandscape = false;
          director.loadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).GameRoom);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panelClientCoin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelGameMessage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "panelTimer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "panelUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "panelTextAnimation", [_dec6], {
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