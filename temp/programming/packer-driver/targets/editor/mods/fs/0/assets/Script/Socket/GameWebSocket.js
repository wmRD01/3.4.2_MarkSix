System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, sys, _decorator, ln, URLVlaue, MessageCommend, LangType, CheckLoadingType, CommandType, WebSocketEvent, PublicData, SocketModel, SocketSetting, DelayTime, CheckLoading, GameData, Player, PublicModel, GameControll, PlayerIdentity, WebPlatform, Config, _dec, _class, _temp, _crd, ccclass, property, GameWebSocket;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfln(extras) {
    _reporterNs.report("ln", "../Contorll/Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfURLVlaue(extras) {
    _reporterNs.report("URLVlaue", "../Contorll/Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageCommend(extras) {
    _reporterNs.report("MessageCommend", "../Enum/MessageCommend", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../Enum/LangType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoadingType(extras) {
    _reporterNs.report("CheckLoadingType", "../Enum/CheckLoadingType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandType(extras) {
    _reporterNs.report("CommandType", "../Enum/CommandType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketEvent(extras) {
    _reporterNs.report("WebSocketEvent", "../Enum/WebSocketEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketModel(extras) {
    _reporterNs.report("SocketModel", "../Model/SocketModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "./SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayTime(extras) {
    _reporterNs.report("DelayTime", "../../Plug/DelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckLoading(extras) {
    _reporterNs.report("CheckLoading", "../Model/CheckLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Model/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Model/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameControll(extras) {
    _reporterNs.report("GameControll", "../Contorll/GameControll/GameControll", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerIdentity(extras) {
    _reporterNs.report("PlayerIdentity", "../Enum/PlayerIdentity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebPlatform(extras) {
    _reporterNs.report("WebPlatform", "../Enum/WebPlatform", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
      sys = _cc.sys;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ln = _unresolved_2.ln;
      URLVlaue = _unresolved_2.URLVlaue;
    }, function (_unresolved_3) {
      MessageCommend = _unresolved_3.MessageCommend;
    }, function (_unresolved_4) {
      LangType = _unresolved_4.LangType;
    }, function (_unresolved_5) {
      CheckLoadingType = _unresolved_5.CheckLoadingType;
    }, function (_unresolved_6) {
      CommandType = _unresolved_6.CommandType;
    }, function (_unresolved_7) {
      WebSocketEvent = _unresolved_7.WebSocketEvent;
    }, function (_unresolved_8) {
      PublicData = _unresolved_8.default;
    }, function (_unresolved_9) {
      SocketModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      SocketSetting = _unresolved_10.default;
    }, function (_unresolved_11) {
      DelayTime = _unresolved_11.default;
    }, function (_unresolved_12) {
      CheckLoading = _unresolved_12.default;
    }, function (_unresolved_13) {
      GameData = _unresolved_13.default;
    }, function (_unresolved_14) {
      Player = _unresolved_14.default;
    }, function (_unresolved_15) {
      PublicModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      GameControll = _unresolved_16.default;
    }, function (_unresolved_17) {
      PlayerIdentity = _unresolved_17.PlayerIdentity;
    }, function (_unresolved_18) {
      WebPlatform = _unresolved_18.WebPlatform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15ca9Waxy9FPY+xcaPFNGfA", "GameWebSocket", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GameWebSocket = (_dec = ccclass('GameWebSocket'), _dec(_class = (_temp = class GameWebSocket extends (_crd && SocketModel === void 0 ? (_reportPossibleCrUseOfSocketModel({
        error: Error()
      }), SocketModel) : SocketModel) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isFirstData", true);
        }

        onEnable() {
          /**避免測試期間轉換到下一個場景的時候，又再次連線 */
          if ((_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen)) {
            this.node.destroy();
            return;
          }

          if (this.isFirstData) {
            this.judgePlatorm();
            this.Setting();
            this.MotifySetting();
            this.eventSetting();
            let getWebPlatform = this.urlData == undefined ? (_crd && WebPlatform === void 0 ? (_reportPossibleCrUseOfWebPlatform({
              error: Error()
            }), WebPlatform) : WebPlatform).Default : this.urlData.dc;
            /**由於打包出去後似乎會被意外轉成Obj，因此還要再次判斷 */

            getWebPlatform = typeof getWebPlatform !== 'string' ? (_crd && WebPlatform === void 0 ? (_reportPossibleCrUseOfWebPlatform({
              error: Error()
            }), WebPlatform) : WebPlatform).Default : getWebPlatform; // console.error("最終結果：" + getWebPlatform);
            //取得config拿取遊戲相關資料，其中包含連線的資訊

            this.RomoteData(`${this.libPath}config/${(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).getInstance.gameID}/${getWebPlatform}/game.json?${new Date().getTime()}`, this.connectToServer.bind(this), this.loadLanguageError.bind(this)); // AssetMng.loadLogoAsset(this.UserLanguage)
          } else this.connectToServer();
        }

        onDisable() {
          this.closeWebsocket();
        }

        test(from, data) {
          from.push(data);
        }

        start() {// let getWebPlatform = this.urlData == undefined ? WebPlatform.Default : (this.urlData as URLVlaue).dc
          // /**由於打包出去後似乎會被意外轉成Obj，因此還要再次判斷 */
          // getWebPlatform = typeof getWebPlatform !== 'string' ? WebPlatform.Default : getWebPlatform
          // // console.error("最終結果：" + getWebPlatform);
          // //取得config拿取遊戲相關資料，其中包含連線的資訊
          // this.RomoteData(`${this.libPath}config/${GameData.getInstance.gameID}/${getWebPlatform}/game.json?${new Date().getTime()}`, this.connectToServer.bind(this), this.loadLanguageError.bind(this))
          // AssetMng.loadLogoAsset(this.UserLanguage)
        }

        connectToServer(jsonText) {
          if (jsonText) {
            let jsonTo = JSON.parse(jsonText);
            console.log(jsonTo);
            (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.TwoClassCheckData((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).getInstance, jsonTo);
            (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.TwoClassCheckData(this, jsonTo);
          }

          let host = `${this.connectionType}://${this.serverhost}:${this.serverport}`;
          console.log(host);
          this.startLoadLanguage();
          this.webSocket = new WebSocket(host);
          this.webSocket.onopen = this.onWS_Open.bind(this);
          this.webSocket.onerror = this.onWS_Error.bind(this);
          this.webSocket.onclose = this.onWS_Close.bind(this);
          this.webSocket.onmessage = this.onWS_Receive.bind(this);
        }

        eventSetting() {
          (_crd && GameControll === void 0 ? (_reportPossibleCrUseOfGameControll({
            error: Error()
          }), GameControll) : GameControll).getInstance.setControllEvent();
          this.setEvent((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).Login, this.onLogIn);
          this.setEvent((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).WebSocketSendCommand, this.onSend);
          this.setEvent((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).BackHome, this.onBackHome);
          this.setEvent((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).CloseWindow, this.onCloseWindow);
          this.setEvent((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).ViewRecord, this.onViewRecord);
          this.setEvent((_crd && WebSocketEvent === void 0 ? (_reportPossibleCrUseOfWebSocketEvent({
            error: Error()
          }), WebSocketEvent) : WebSocketEvent).StaoredValue, this.onStaoredValue);
        }

        async onSend(cmd, data) {
          if (!(_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen)) {
            if (this.isClose) return;
            log("等待連線.......");
            await (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
              error: Error()
            }), DelayTime) : DelayTime).getInstance.StartDT_NotClear(0.5);
            this.onSend(cmd, data);
            return;
          }

          if (cmd == undefined || cmd == "") return;
          let config = new Config();
          config.cmd = cmd;
          config.data = data || null;
          console.log(' \n=====送=====');
          console.log(">> cmd: " + cmd);
          console.log(">> data: ", data);
          console.log('=====送=====\n '); // console.log(JSON.stringify(config));

          this.webSocket.send(JSON.stringify(config));
        }

        onLogIn(cmd) {
          let _ln = new (_crd && ln === void 0 ? (_reportPossibleCrUseOfln({
            error: Error()
          }), ln) : ln)();

          _ln.gameId = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.gameID;

          if (window.isGPGServer && this.urlData != undefined) {
            let _gameConfig = new (_crd && URLVlaue === void 0 ? (_reportPossibleCrUseOfURLVlaue({
              error: Error()
            }), URLVlaue) : URLVlaue)();

            (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.TwoClassCheckData(_gameConfig, this.urlData);
            this.recordeURL = _gameConfig.record;
            this.usertoken = _gameConfig.token;
            this.UserLanguage = _gameConfig.lang;
            this.agentId = _gameConfig.agentId;
            this.account = _gameConfig.playerId;
            _gameConfig.browser = sys.browserType;
            _gameConfig.browserVersion = sys.browserVersion;
            _gameConfig.os = sys.os;
            _gameConfig.osVersion = sys.osVersion;
            _gameConfig.isMobile = sys.isMobile ? 1 : 0;
            _ln.key = JSON.stringify(_gameConfig);
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).getInstance.roomNo = _gameConfig.roomNo;
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).getInstance.isFastInGame = _gameConfig.roomNo > 0 ? true : false;
            /**判斷是否為訪客帳號，如果收不到或者false就是正式會員 */

            (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.identity = _gameConfig.demo != undefined && _gameConfig.demo == "true" ? (_crd && PlayerIdentity === void 0 ? (_reportPossibleCrUseOfPlayerIdentity({
              error: Error()
            }), PlayerIdentity) : PlayerIdentity).Guest : (_crd && PlayerIdentity === void 0 ? (_reportPossibleCrUseOfPlayerIdentity({
              error: Error()
            }), PlayerIdentity) : PlayerIdentity).Member;
          } else if (window.isGPGServer) _ln.key = JSON.stringify({});

          _ln.account = this.account;
          _ln.ident = (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.identity;
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.coinType = this.coinType;
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.recodeUrl = this.recordeURL;
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.language = this.UserLanguage;
          console.log(_ln, "入房資訊");
          this.onSend(cmd, _ln);
          this.isFirstData = false;
        } /////////////////////////////////////////////////////////////
        ///     web socket event.
        /////////////////////////////////////////////////////////////
        //#region  


        onWS_Open(event) {
          console.log("Send Text WS was opened.");
          (_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.endWork((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen);
          this.onLogIn("ln");

          if (this.usertoken == "") {
            // GameControll.getInstance.messaggeState(MessageCommend.BackHome, SocketSetting.t("E_0001", LangType.Game))
            return;
          }
        }

        onWS_Error(event) {
          console.log("Send Text fired an error");
          (_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.resetState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen); // 連線錯誤，詳細情況請洽客服!
          // GameControll.getInstance.messaggeState(MessageCommend.BackHome, SocketSetting.t("E_0001", LangType.Game))
        }

        onWS_Close(event) {
          console.log("WebSocket instance closed.");
          this.isClose = true;

          if ((_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen)) {
            (_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
              error: Error()
            }), CheckLoading) : CheckLoading).getInstance.resetState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
              error: Error()
            }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen); // GameControll.getInstance.messaggeState(MessageCommend.BackHome, SocketSetting.t("E_0002", LangType.Game))
          }

          ;
        }

        onWS_Receive(event) {
          let message = event.data;

          try {
            let jmsg = JSON.parse(message); // console.log(jmsg);

            if (typeof jmsg == "object") {
              console.log(' \n=====收=====');
              console.log(">> cmd: " + jmsg.cmd);
              console.log(jmsg.data);
              console.log('=====收=====\n ');
              (_crd && GameControll === void 0 ? (_reportPossibleCrUseOfGameControll({
                error: Error()
              }), GameControll) : GameControll).getInstance.serverRespond(jmsg.cmd, jmsg.data);
              return;
            }
          } catch (e) {}
        } //#endregion


        onViewRecord() {
          if (this.recordeURL != null && this.recordeURL != "" && this.recordeURL != "undefined") {
            let formatRecordUrl = `${this.recordeURL}?agentId=${this.agentId}&playerId=${(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.account}&lang=${this.UserLanguage}`;
            window.open(formatRecordUrl);
          }
        }

        onBackHome() {
          /**通知server斷線 */
          // this.onSend(CommandType.usdis, {})
          if (this.backHomeURL != null && this.backHomeURL != "" && this.backHomeURL != "undefined") {
            document.location.href = this.backHomeURL;
          }
        }

        onStaoredValue() {
          if (this.staoredValueUrl != null && this.staoredValueUrl != "" && this.staoredValueUrl != "undefined") {
            window.open(this.staoredValueUrl);
          }
        }

        onCloseWindow() {
          let temp = window.open('', '_self');
          temp.close();
        }

        closeWebsocket() {
          // this.isClose = true
          // CheckLoading.getInstance.resetState(CheckLoadingType.isWebSocketOpen);
          if (!(_crd && CheckLoading === void 0 ? (_reportPossibleCrUseOfCheckLoading({
            error: Error()
          }), CheckLoading) : CheckLoading).getInstance.checkState((_crd && CheckLoadingType === void 0 ? (_reportPossibleCrUseOfCheckLoadingType({
            error: Error()
          }), CheckLoadingType) : CheckLoadingType).isWebSocketOpen)) {
            return;
          }

          this.onSend((_crd && CommandType === void 0 ? (_reportPossibleCrUseOfCommandType({
            error: Error()
          }), CommandType) : CommandType).usdis, {});
          (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
            error: Error()
          }), DelayTime) : DelayTime).getInstance.StopGameHeartrate();
        } /////////////////////////////////////////////////////////////
        ///     lang載入設定.
        /////////////////////////////////////////////////////////////
        // server可自改語言與伺服器


        MotifySetting() {
          if (window.location.search.length > 0) {
            var getsearch = window.location.search.split('?');
            var urldata = {};

            for (var getsearchKey in getsearch) {
              if (getsearch[getsearchKey] != "") {
                let searchList = getsearch[getsearchKey].split('&');

                for (var key in searchList) {
                  urldata[searchList[key].split('=')[0]] = searchList[key].split('=')[1];
                  /**這是要判斷是否強改資料的部分，改的話就不要套用DB給的資料 */

                  for (var datakey in urldata) {
                    if (datakey == "L" || datakey == "l") {
                      this.UserLanguage = urldata[datakey];
                      this.urlData = undefined;
                    }

                    if (datakey == "S" || datakey == "s") {
                      this.serverhost = urldata[datakey];
                      this.urlData = undefined;
                    }

                    if (datakey == "P" || datakey == "p") {
                      this.serverport = urldata[datakey];
                      this.urlData = undefined;
                    }
                  }
                }
              }
            }
          }
        }

        RomoteData(url, callback, errCallback) {
          var url = url;
          console.log('downloadText.url:', url); // console.log(url.startsWith("http://"));
          // console.log(sys.platform);

          if (sys.platform === sys.Platform.ANDROID) {
            var result = jsb.fileUtils.getStringFromFile(url);

            if (typeof result === 'string' && result) {
              return result;
            } else {
              return new Error('Download text failed: ' + url);
            }
          } else {
            if (callback) {
              // console.log('downloadText getXMLHttpRequest')
              var xhr = new XMLHttpRequest(),
                  errInfo = 'Load text file failed: ' + url;
              xhr.open('GET', url, true);
              if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');

              xhr.onload = function () {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200 || xhr.status === 0) {
                    callback(xhr.response, url);
                  } else {
                    errCallback(url); // errCallback({ status: xhr.status, errorMessage: errInfo + '(wrong status)' });
                  }
                } else {
                  errCallback(url); // errCallback({ status: xhr.status, errorMessage: errInfo + '(wrong readyState)' });
                }
              };

              xhr.onerror = function () {
                errCallback(url); // errCallback({ status: xhr.status, errorMessage: errInfo + '(error)' });
              };

              xhr.ontimeout = function () {
                errCallback(url); // errCallback({ status: xhr.status, errorMessage: errInfo + '(time out)' });
              };

              xhr.send(null);
            }
          }
        }

        androidLoadLanguage(getText) {
          let jsonTo = JSON.parse(getText); // console.log(jsonTo);
        }

        startLoadLanguage() {
          let gameLang = `${this.libPath}gameLanguage/${(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).getInstance.gameID}/${this.UserLanguage}.json?/${new Date().getTime()}`;
          this.RomoteData(gameLang, this.loadLanguageEnd.bind(this), this.loadLanguageError.bind(this));
          let serverLang = this.libPath + "serverLanguage/" + this.UserLanguage + ".json?" + new Date().getTime();
          this.RomoteData(serverLang, this.loadLanguageEnd.bind(this), this.loadLanguageError.bind(this));
        }

        loadLanguageEnd(jsonText, url) {
          console.log("loadLanguageEnd");
          let type = url.indexOf("gameLanguage") == -1 ? (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Server : (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Game;
          let jsonTo = JSON.parse(jsonText);
          (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).setLang(this.UserLanguage).init(jsonTo, type); //設定語言   
          // SocketSetting.setLang(MyWebSocket.instence.UserLanguage).init(jsonTo, type); //設定語言   
          // MainModelUp.instance.IsLoadLanguage = true;
        }

        loadLanguageError(url, err) {
          // console.log("loadLanguageError");
          if (err) // console.log("錯誤?" + err);
            this.loadLanguageCount = 0;
          this.RomoteData(url, this.loadLanguageEnd.bind(this), this.loadLanguageErrorAgain.bind(this));
        }

        loadLanguageErrorAgain(url) {
          this.isClose = true; // console.log("语言包下载失败请通知客服");

          (_crd && GameControll === void 0 ? (_reportPossibleCrUseOfGameControll({
            error: Error()
          }), GameControll) : GameControll).getInstance.messaggeState((_crd && MessageCommend === void 0 ? (_reportPossibleCrUseOfMessageCommend({
            error: Error()
          }), MessageCommend) : MessageCommend).BackHome, (_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
            error: Error()
          }), SocketSetting) : SocketSetting).t("S_0003", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
            error: Error()
          }), LangType) : LangType).Server)); // Panel_Message.showConfirm(this, 1, SocketSetting.t("S_9077"), (e) => {
          //     this.onBackHome();
          // }); //"语言包下载失败请通知客服";
          // MainModelUp.instance.ShowMessageBox = true;
        }

      }, _temp)) || _class));

      Config = class Config {
        constructor() {
          _defineProperty(this, "cmd", void 0);

          _defineProperty(this, "data", void 0);
        }

      }; // export default new MyWebSocket();
      // /**
      //  * 舊方法
      //  * 
      //  */
      // loadScript(url, callback, callBackError) {
      //     console.log(url, callback, callBackError);
      //     var script = document.createElement("script");
      //     console.log(script);
      //     script.type = "text/javascript";
      //     if (typeof (callback) != "undefined") {
      //         //@ts-ignore
      //         if (script.readyState) {
      //             //@ts-ignore
      //             script.onreadystatechange = function () {
      //                 //@ts-ignore
      //                 if (script.readyState == "loaded" || script.readyState == "complete") {
      //                     //@ts-ignore
      //                     script.onreadystatechange = null;
      //                     callback();
      //                 }
      //             };
      //         } else {
      //             script.onload = function () {
      //                 callback();
      //             };
      //             script.onerror = function (e) {
      //                 console.log(e);
      //                 if (MyWebSocket.instence.loadLanguageCount < 1) {
      //                     MyWebSocket.instence.loadScript(url, callback, callBackError);
      //                     MyWebSocket.instence.loadLanguageCount++;
      //                 } else {
      //                     callBackError();
      //                 }
      //             };
      //         }
      //     }
      //     script.src = url;
      //     document.body.appendChild(script);
      //     console.log(document.body);
      // }
      // /**
      //  * 舊方法
      //  * 
      //  */
      // LoadLanguage(_language) {
      //     console.log("LoadLanguage");
      //     // let LanguageURI = this.loadLanguage + this.UserLanguage + ".js?" + new Date().getTime();
      //     let LanguageURI = this.loadLanguage + this.UserLanguage + ".js";
      //     this.loadScript(LanguageURI, this.loadLanguageEnd, this.loadLanguageError);
      // }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameWebSocket.js.map