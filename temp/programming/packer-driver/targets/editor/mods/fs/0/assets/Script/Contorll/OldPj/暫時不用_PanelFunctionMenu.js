System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, find, Label, Layout, _decorator, DataFunctionMenu, GameEvent, LangType, ButtonMng, SocketSetting, excr, CommandType, WebSocketEvent, GameData, PublicModel, _dec, _class, _temp, _crd, ccclass, property, PanelFunctionMenu;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDataFunctionMenu(extras) {
    _reporterNs.report("DataFunctionMenu", "../Data/Panel/DataFunctionMenu", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfexcr(extras) {
    _reporterNs.report("excr", "../Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Model/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../Model/PublicModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      find = _cc.find;
      Label = _cc.Label;
      Layout = _cc.Layout;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      DataFunctionMenu = _unresolved_2.default;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      LangType = _unresolved_4.LangType;
    }, function (_unresolved_5) {
      ButtonMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      SocketSetting = _unresolved_6.default;
    }, function (_unresolved_7) {
      excr = _unresolved_7.excr;
    }, function (_unresolved_8) {
      CommandType = _unresolved_8.CommandType;
    }, function (_unresolved_9) {
      WebSocketEvent = _unresolved_9.WebSocketEvent;
    }, function (_unresolved_10) {
      GameData = _unresolved_10.default;
    }, function (_unresolved_11) {
      PublicModel = _unresolved_11.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3d66g28eVIAo8MIGc+DetO", "%E6%9A%AB%E6%99%82%E4%B8%8D%E7%94%A8_PanelFunctionMenu", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelFunctionMenu = (_dec = ccclass('PanelFunctionMenu'), _dec(_class = (_temp = class PanelFunctionMenu extends (_crd && DataFunctionMenu === void 0 ? (_reportPossibleCrUseOfDataFunctionMenu({
        error: Error()
      }), DataFunctionMenu) : DataFunctionMenu) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "arr_Btn", new Array());

          _defineProperty(this, "isRefresh", void 0);

          _defineProperty(this, "tempGameSence", void 0);
        }

        onLoad() {
          super.onLoad();
          this.contentButton = find("con_Btn", this.node);
          this.contentBG = find("con_BG", this.node);
          this.buttonBlockBG = find("BlockBG", this.node).getComponent(Button);
          this.arr_Btn.push(this.buttonMusic = find("btn_Music", this.contentButton).getComponent(Button));
          this.arr_Btn.push(this.buttonRecord = find("btn_Record", this.contentButton).getComponent(Button));
          this.arr_Btn.push(this.buttonExchange = find("btn_Exchange", this.contentButton).getComponent(Button));
          this.arr_Btn.push(this.buttonChangeNickname = find("btn_ChangeNickname", this.contentButton).getComponent(Button));
          this.arr_Btn.push(this.buttonBackHome = find("btn_BackHome", this.contentButton).getComponent(Button));
          this.labelChangeNickname = find("Label", this.buttonChangeNickname.target).getComponent(Label);
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OpenMenu, this.show);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "hide", this.buttonBlockBG, "");
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onMusic", this.buttonMusic, "");
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onRecode", this.buttonRecord, "");
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onExChange", this.buttonExchange, "");
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onChangeNickname", this.buttonChangeNickname, "");
          this.viewInit();
        }

        update() {}

        viewInit() {
          super.viewInit();
          this.moveBG();
          this.hideBtn(this.buttonBackHome);
        }

        show() {
          super.show();
          if (!this.isRefresh) this.refreshLayout();
        }

        setLanguage() {
          this.labelChangeNickname.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("023", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          find("Label", this.buttonExchange.target).getComponent(Label).string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("001", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          find("Label", this.buttonMusic.target).getComponent(Label).string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("002", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          find("Label", this.buttonRecord.target).getComponent(Label).string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("003", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          find("Label", this.buttonBackHome.target).getComponent(Label).string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("004", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
        }

        moveBG() {
          for (let index = 0; index < this.arr_Btn.length; index++) {
            this.contentBG.addChild(this.arr_Btn[index].target);
          }
        }

        onExChange(e, customEventData) {
          this.hide();

          let _excr = new (_crd && excr === void 0 ? (_reportPossibleCrUseOfexcr({
            error: Error()
          }), excr) : excr)();

          _excr.coinType = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.coinType;
          this.eventEmit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ShowExchange);
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).excr, _excr);
        }

        onMusic(e, customEventData) {
          this.hide();
          this.eventEmit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ShowSoundSet);
        }

        onRecode(e, customEventData) {
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).ViewRecord);
        }

        onChangeNickname(e, customEventData) {
          this.hide();
          this.eventEmit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ShowChangeNickname);
        }

        betEvent(e, customEventData) {}

        backHomeEvent() {} // onOpenMenu() {
        //     this.show()
        // }


        async enableBtn(isBoolean) {}

        checkBet(e, customEventData) {}

        refreshLayout() {
          this.contentButton.getComponent(Layout).updateLayout();

          for (let index = 0; index < this.arr_Btn.length; index++) {
            let getword = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.to2DConvertOtherNodeSpaceAR(this.arr_Btn[index].node, this.arr_Btn[index].target);
            this.arr_Btn[index].target.position = getword;
          }
        }

        hideBtn(_btn) {
          //關閉Line線
          this.contentButton.children[_btn.node.getSiblingIndex() - 1].active = false;
          _btn.node.active = false;
          _btn.target.active = false;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=暫時不用_PanelFunctionMenu.js.map