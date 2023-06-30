System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, EditBox, find, Label, Sprite, _decorator, LisnerEditBox, ButtonMng, EditBoxMng, PublicData, GameEvent, SocketSetting, LangType, MyMath, CommandType, excc, excr, WebSocketEvent, GameData, PublicModel, PanelLoading, CheckLoading, CheckLoadingType, DataExchange, PointBtn, _dec, _class, _crd, ccclass, property, PanelExchange;

  function _reportPossibleCrUseOfLisnerEditBox(extras) {
    _reporterNs.report("LisnerEditBox", "../../Enum/LisnerEditBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonMng(extras) {
    _reporterNs.report("ButtonMng", "../../Manager/ButtonMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEditBoxMng(extras) {
    _reporterNs.report("EditBoxMng", "../../Manager/EditBoxMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyMath(extras) {
    _reporterNs.report("MyMath", "../../../Plug/MyMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfexcc(extras) {
    _reporterNs.report("excc", "../Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfexcr(extras) {
    _reporterNs.report("excr", "../Api/SendCommand", _context.meta, extras);
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

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoading(extras) {
    _reporterNs.report("CheckLoading", "../../Model/CheckLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoadingType(extras) {
    _reporterNs.report("CheckLoadingType", "../../Enum/CheckLoadingType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataExchange(extras) {
    _reporterNs.report("DataExchange", "../Data/Panel/DataExchange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPointBtn(extras) {
    _reporterNs.report("PointBtn", "../Data/Panel/DataExchange", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      find = _cc.find;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      LisnerEditBox = _unresolved_2.LisnerEditBox;
    }, function (_unresolved_3) {
      ButtonMng = _unresolved_3.default;
    }, function (_unresolved_4) {
      EditBoxMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      PublicData = _unresolved_5.default;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.GameEvent;
    }, function (_unresolved_7) {
      SocketSetting = _unresolved_7.default;
    }, function (_unresolved_8) {
      LangType = _unresolved_8.LangType;
    }, function (_unresolved_9) {
      MyMath = _unresolved_9.default;
    }, function (_unresolved_10) {
      CommandType = _unresolved_10.CommandType;
    }, function (_unresolved_11) {
      excc = _unresolved_11.excc;
      excr = _unresolved_11.excr;
    }, function (_unresolved_12) {
      WebSocketEvent = _unresolved_12.WebSocketEvent;
    }, function (_unresolved_13) {
      GameData = _unresolved_13.default;
    }, function (_unresolved_14) {
      PublicModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      PanelLoading = _unresolved_15.default;
    }, function (_unresolved_16) {
      CheckLoading = _unresolved_16.default;
    }, function (_unresolved_17) {
      CheckLoadingType = _unresolved_17.CheckLoadingType;
    }, function (_unresolved_18) {
      DataExchange = _unresolved_18.default;
      PointBtn = _unresolved_18.PointBtn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17806LnQLtFDZKYxwAxMTLA", "%E6%9A%AB%E6%99%82%E4%B8%8D%E7%94%A8_PanelExchange", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelExchange = (_dec = ccclass('PanelExchange'), _dec(_class = class PanelExchange extends (_crd && DataExchange === void 0 ? (_reportPossibleCrUseOfDataExchange({
        error: Error()
      }), DataExchange) : DataExchange) {
        onLoad() {
          super.onLoad();
          this.editBoxEnterNumber = find("editBox_EnterNum", this.node).getComponent(EditBox);
          this.contentBntton = find("con_Btn", this.node);
          this.buttonClose = find("btn_Close", this.node).getComponent(Button);
          this.buttonBlock = find("BlockBG", this.node).getComponent(Button);
          this.buttonConfirm = find("btn_Confirm", this.node).getComponent(Button);
          this.buttonRefreshView = find("btn_RefreshView", this.node).getComponent(Button);
          this.buttongoStaoredValue = find("btn_goStaoredValue", this.node).getComponent(Button);
          this.buttonCanelText = find("btn_CanelText", this.editBoxEnterNumber.node).getComponent(Button);
          this.labelConfirm = find("label_Confirm", this.buttonConfirm.node).getComponent(Label);
          this.labelTitle = find("label_Title", this.node).getComponent(Label);
          this.labelWalletHave_Title = find("label_WalletHave_Title", this.node).getComponent(Label);
          this.labelWalletHaveNumber = find("label_WalletHave_Num", this.node).getComponent(Label);
          this.labelChangeScaleTitle = find("label_ChangeScale_Title", this.node).getComponent(Label);
          this.labelChangeScaleNumber = find("label_ChangeScale_Num", this.node).getComponent(Label);
          this.labelClinetHaveTitle = find("label_ClinetHave_Title", this.node).getComponent(Label);
          this.labelClinetHaveNumber = find("label_ClinetHave_Num", this.node).getComponent(Label);

          for (var index = 0; index < this.contentBntton.children.length; index++) {
            var btn = new (_crd && PointBtn === void 0 ? (_reportPossibleCrUseOfPointBtn({
              error: Error()
            }), PointBtn) : PointBtn).Btn();
            btn.btn = this.contentBntton.children[index].getComponent(Button);
            btn.spriteButtonBG = this.contentBntton.children[index].getComponent(Sprite);
            btn.labelNumber = find("label_Num", this.contentBntton.children[index]).getComponent(Label);
            if (index == this.contentBntton.children.length - 1) btn.labelNumber.string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).getInstance.exChangeLib[index];else btn.labelNumber.string = Intl.NumberFormat().format(Number((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).getInstance.exChangeLib[index])).toString();
            this.arrayPointButton.push(btn);
          }

          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ShowExchange, this.show);
          this.setEditboxEevent();
          this.setButtonEvent();
          this.viewInit();
        }

        start() {}

        hide() {
          super.hide();
          if (!(_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isGameSence)) this.eventEmit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).InGameRoom);
        }

        show() {
          super.show();
          this.refreshWallet("-");
          this.refreshClinetHave("-");
          this.editBoxEnterNumber.string = "";
          this.onRefreshClintMoney();
          if ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.staoredValueUrl == "" || (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.staoredValueUrl == undefined) this.buttongoStaoredValue.node.active = false; // if (window.isEditor)
          //     this.endRefresh(300, 10000)
        }

        requestMoney() {
          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.openLoading();

          var _excr = new (_crd && excr === void 0 ? (_reportPossibleCrUseOfexcr({
            error: Error()
          }), excr) : excr)();

          _excr.coinType = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.coinType;
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).excr, _excr);
        }

        updataMoney(_wallet, _clinetHave, isClearEdit) {
          this.wallet = _wallet;
          this.clinetHave = _clinetHave;
          this.refreshClinetHave(Intl.NumberFormat().format(_clinetHave));
          this.refreshWallet(Intl.NumberFormat().format(_wallet));
          this.refreshEditBoxState(0);
          this.editBoxEnterNumber.string = ""; // let temp = this.editBox_EnterNum.string == "" ? 0 : Number(MainModel.filterNumberDot(this.editBox_EnterNum.string))
          // this.refreshClinetHave(Intl.NumberFormat().format(MyMath.minus(_clinetHave, temp)))
          // this.refreshWallet(Intl.NumberFormat().format(MyMath.add(_wallet, temp)))
          // this.refreshEditBoxState(temp)

          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.closeLoading();
        }

        setLanguage() {
          this.labelTitle.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("001", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          this.labelWalletHave_Title.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("017", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          this.labelClinetHaveTitle.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("021", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          this.labelChangeScaleTitle.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("015", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          this.labelConfirm.string = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("018", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          this.defaultPlaceholderLabel = (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("016", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game);
          this.editBoxEnterNumber.placeholderLabel.string = this.defaultPlaceholderLabel;
        }

        setButtonEvent() {
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onClearEditBoxString", this.buttonCanelText);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onExChagne", this.buttonConfirm);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "hide", this.buttonClose);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "hide", this.buttonBlock);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onRefreshClintMoney", this.buttonRefreshView);
          (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
            error: Error()
          }), ButtonMng) : ButtonMng).addEvent(this, "onGoStaoredValue", this.buttongoStaoredValue);

          for (var index = 0; index < this.arrayPointButton.length; index++) {
            (_crd && ButtonMng === void 0 ? (_reportPossibleCrUseOfButtonMng({
              error: Error()
            }), ButtonMng) : ButtonMng).addEvent(this, "onAddPoint", this.arrayPointButton[index].btn, index.toString());
          }
        }

        setEditboxEevent() {
          (_crd && EditBoxMng === void 0 ? (_reportPossibleCrUseOfEditBoxMng({
            error: Error()
          }), EditBoxMng) : EditBoxMng).addEvent(this, "onEditBoxStart", this.editBoxEnterNumber, (_crd && LisnerEditBox === void 0 ? (_reportPossibleCrUseOfLisnerEditBox({
            error: Error()
          }), LisnerEditBox) : LisnerEditBox).EditBox_Start);
          (_crd && EditBoxMng === void 0 ? (_reportPossibleCrUseOfEditBoxMng({
            error: Error()
          }), EditBoxMng) : EditBoxMng).addEvent(this, "onEditBoxEnd", this.editBoxEnterNumber, (_crd && LisnerEditBox === void 0 ? (_reportPossibleCrUseOfLisnerEditBox({
            error: Error()
          }), LisnerEditBox) : LisnerEditBox).EditBox_End);
          (_crd && EditBoxMng === void 0 ? (_reportPossibleCrUseOfEditBoxMng({
            error: Error()
          }), EditBoxMng) : EditBoxMng).addEvent(this, "onEditBoxEditing", this.editBoxEnterNumber, (_crd && LisnerEditBox === void 0 ? (_reportPossibleCrUseOfLisnerEditBox({
            error: Error()
          }), LisnerEditBox) : LisnerEditBox).EditBox_Editing);
        }

        onRefreshClintMoney(e, customEventData) {
          this.requestMoney();
        }

        onGoStaoredValue(e, customEventData) {
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).StaoredValue);
        }

        onAddPoint(e, customEventData) {
          var getNum = Number((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.exChangeLib[Number(customEventData)]);

          if (isNaN(getNum)) {
            this.editBoxEnterNumber.string = Intl.NumberFormat().format(this.clinetHave);
            this.refreshEditBoxState(this.clinetHave); //最大值就是勝0元

            this.refreshNum(this.clinetHave);
            return;
          } // console.log(GameData.i().exChangeLib, getNum);


          var editWrite = Number((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.filterNumberDot(this.editBoxEnterNumber.string)); // editWrite = isNaN(editWrite) ? 0 : Number(editWrite)

          var count = (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).add(getNum, editWrite);
          this.editBoxEnterNumber.string = Intl.NumberFormat().format(count);
          this.refreshEditBoxState(count);
          this.refreshNum(count);
        }

        onExChagne(e, customEventData) {
          var _excc = new (_crd && excc === void 0 ? (_reportPossibleCrUseOfexcc({
            error: Error()
          }), excc) : excc)();

          _excc.coinType = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.coinType;
          _excc.money = Number((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.filterNumberDot(this.editBoxEnterNumber.string));
          this.eventEmit((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, (_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).excc, _excc);
          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.openLoading(); //傳給Server等他回應後再關閉，並更新錢包
        }
        /**
         * @param change 帶入異動的值
         */


        refreshEditBoxState(change) {
          var isOn = true;

          for (var index = 0; index < this.arrayPointButton.length; index++) {
            var convertNumber = Number((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).getInstance.exChangeLib[index]);

            if (isNaN(convertNumber)) {
              this.arrayPointButton[index].setState(true);
              return;
            }

            if (!isNaN(convertNumber) && convertNumber > (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
              error: Error()
            }), MyMath) : MyMath).minus(this.clinetHave, change)) isOn = false;
            this.arrayPointButton[index].setState(isOn);
          }
        }

        refreshNum(change) {
          // if (isNaN(Number(Intl.NumberFormat().format(MyMath.minus(this.clinetHave, change))))
          this.labelClinetHaveNumber.string = Intl.NumberFormat().format((_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).minus(this.clinetHave, change));
          this.labelWalletHaveNumber.string = Intl.NumberFormat().format((_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).add(this.wallet, change));
        }

        refreshChangeScale(num) {
          this.labelChangeScaleNumber.string = num.toString();
        }

        refreshClinetHave(num) {
          this.labelClinetHaveNumber.string = num.toString();
        }

        refreshWallet(num) {
          this.labelWalletHaveNumber.string = num.toString();
        }

        onClearEditBoxString(e, customEventData) {
          this.editBoxEnterNumber.string = "";
          this.refreshNum(0);
          this.refreshEditBoxState(0);
        }

        onEditBoxStart(e, customEventData) {
          console.log(e);
          e.placeholderLabel.string = "";
        }

        onEditBoxEditing(e, customEventData) {
          //判斷是否為空，空職如果不return會顯示0
          if (e == "") {
            return;
          } //初始coocs會設定type Number，再有小數點的時候會有問題


          if (document.getElementById("EditBoxId_1").type != "text") document.getElementById("EditBoxId_1").type = "text"; //重新組合，不判斷長度，原因為如果玩家打非數字時，在轉換Intl.NumberFormat時會顯示非數值

          var getNum = Number((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.filterNumberDot(e));
          if (getNum > this.clinetHave) getNum = this.clinetHave;
          this.editBoxEnterNumber.string = Intl.NumberFormat().format(getNum); //暫時不知道怎抓，只能手動去看Editbox的名稱

          window.document.getElementById("EditBoxId_1").value = Intl.NumberFormat().format(getNum); // this.refreshEditBoxState(MyMath.minus(this.clinetHave, getNum))

          this.refreshEditBoxState(getNum);
        }

        onEditBoxEnd(e, customEventData) {
          // console.log(e);
          e.placeholderLabel.string = this.defaultPlaceholderLabel;
          var getNum = Number((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.filterNumberDot(e.string));
          this.refreshNum(getNum);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=暫時不用_PanelExchange.js.map