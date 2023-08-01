import { game, log, sys, _decorator } from "cc";
import { ln, URLVlaue } from "../Contorll/Api/SendCommand";
import { MessageCommend } from "../Enum/MessageCommend";
import { LangType } from "../Enum/LangType";
import { CheckLoadingType } from "../Enum/CheckLoadingType";
import { CommandType } from "../Enum/CommandType";
import { WebSocketEvent } from "../Enum/WebSocketEvent";
import PublicData from "../Model/PublicData";
import SocketModel from "../Model/SocketModel";
import SocketSetting from "./SocketSetting";
import DelayTime from '../../Plug/DelayTime';
import CheckLoading from "../Model/CheckLoading";
import GameData from "../Model/GameData";
import Player from "../Model/Player";
import PublicModel from "../Model/PublicModel";
import GameControll from "../Contorll/GameControll/GameControll";
import { CASTAPI } from "../Contorll/Api/CASTAPI";
import { PlayerIdentity } from "../Enum/PlayerIdentity";
import { WebPlatform } from "../Enum/WebPlatform";
import AssetMng from "../Manager/AssetMng";

const { ccclass, property } = _decorator;

@ccclass('GameWebSocket')
export default class GameWebSocket extends SocketModel {
    isFirstData: boolean = true
    onEnable(): void {
        /**避免測試期間轉換到下一個場景的時候，又再次連線 */

        if (CheckLoading.getInstance.checkState(CheckLoadingType.isWebSocketOpen)) {
            this.node.destroy()
            return
        }
        if (this.isFirstData) {
            this.judgePlatorm();
            this.Setting();
            this.MotifySetting()
            this.eventSetting();
            let getWebPlatform = this.urlData == undefined ? WebPlatform.Default : (this.urlData as URLVlaue).dc
            /**由於打包出去後似乎會被意外轉成Obj，因此還要再次判斷 */
            getWebPlatform = typeof getWebPlatform !== 'string' ? WebPlatform.Default : getWebPlatform
            // console.error("最終結果：" + getWebPlatform);
            //取得config拿取遊戲相關資料，其中包含連線的資訊
            this.RomoteData(`${this.libPath}config/${GameData.getInstance.gameID}/${getWebPlatform}/game.json?${new Date().getTime()}`, this.connectToServer.bind(this), this.loadLanguageError.bind(this))
            // AssetMng.loadLogoAsset(this.UserLanguage)
        }
        else
            this.connectToServer();
    }
    onDisable() {
        this.closeWebsocket()
    }
    test(from: Array<number>, data) {
        from.push(data)
    }
    start() {
        // let getWebPlatform = this.urlData == undefined ? WebPlatform.Default : (this.urlData as URLVlaue).dc
        // /**由於打包出去後似乎會被意外轉成Obj，因此還要再次判斷 */
        // getWebPlatform = typeof getWebPlatform !== 'string' ? WebPlatform.Default : getWebPlatform
        // // console.error("最終結果：" + getWebPlatform);
        // //取得config拿取遊戲相關資料，其中包含連線的資訊
        // this.RomoteData(`${this.libPath}config/${GameData.getInstance.gameID}/${getWebPlatform}/game.json?${new Date().getTime()}`, this.connectToServer.bind(this), this.loadLanguageError.bind(this))
        // AssetMng.loadLogoAsset(this.UserLanguage)
    }
    connectToServer(jsonText?: string) {
        if (jsonText) {
            let jsonTo = JSON.parse(jsonText)
            console.log(jsonTo);
            PublicModel.getInstance.TwoClassCheckData(GameData.getInstance, jsonTo)
            PublicModel.getInstance.TwoClassCheckData(this, jsonTo)

        }
        let host = `${this.connectionType}://${this.serverhost}:${this.serverport}`;
        console.log(host);
        this.startLoadLanguage()
        this.webSocket = new WebSocket(host)
        this.webSocket.onopen = this.onWS_Open.bind(this);
        this.webSocket.onerror = this.onWS_Error.bind(this);
        this.webSocket.onclose = this.onWS_Close.bind(this);
        this.webSocket.onmessage = this.onWS_Receive.bind(this);
    }

    eventSetting() {
        GameControll.getInstance.setControllEvent()
        this.setEvent(WebSocketEvent.Login, this.onLogIn);
        this.setEvent(WebSocketEvent.WebSocketSendCommand, this.onSend);
        this.setEvent(WebSocketEvent.BackHome, this.onBackHome);
        this.setEvent(WebSocketEvent.CloseWindow, this.onCloseWindow)
        this.setEvent(WebSocketEvent.ViewRecord, this.onViewRecord)
        this.setEvent(WebSocketEvent.StaoredValue, this.onStaoredValue)
    }

    async onSend(cmd, data) {
        if (!CheckLoading.getInstance.checkState(CheckLoadingType.isWebSocketOpen)) {
            if (this.isClose) return

            log("等待連線.......")
            await DelayTime.getInstance.StartDT_NotClear(0.5)
            this.onSend(cmd, data)
            return;
        }
        if (cmd == undefined || cmd == "") return;
        let config = new Config();
        config.cmd = cmd;
        config.data = data || null;
        console.log(' \n=====送=====');
        console.log(">> cmd: " + cmd);
        console.log(">> data: ", data);
        console.log('=====送=====\n ');
        // console.log(JSON.stringify(config));
        this.webSocket.send(JSON.stringify(config));
    }



    onLogIn(cmd) {
        let _ln = new ln()
        _ln.gameId = GameData.getInstance.gameID
        if (window.isGPGServer && this.urlData != undefined) {
            let _gameConfig = new URLVlaue()
            PublicModel.getInstance.TwoClassCheckData(_gameConfig, this.urlData);
            this.recordeURL = _gameConfig.record
            this.usertoken = _gameConfig.token
            this.UserLanguage = _gameConfig.lang
            this.agentId = _gameConfig.agentId
            this.account = _gameConfig.playerId
            _gameConfig.browser = sys.browserType
            _gameConfig.browserVersion = sys.browserVersion
            _gameConfig.os = sys.os
            _gameConfig.osVersion = sys.osVersion
            _gameConfig.isMobile = sys.isMobile ? 1 : 0
            _ln.key = JSON.stringify(_gameConfig)
            GameData.getInstance.roomNo = _gameConfig.roomNo
            GameData.getInstance.isFastInGame = _gameConfig.roomNo > 0 ? true : false
            /**判斷是否為訪客帳號，如果收不到或者false就是正式會員 */
            Player.getInstance.identity = _gameConfig.demo != undefined && _gameConfig.demo == "true" ? PlayerIdentity.Guest : PlayerIdentity.Member;
        }
        //TODO 直接給token字串
        else if (window.isGPGServer)
            _ln.key = JSON.stringify({})
        //TODO 修改成menberID的給Leo
        _ln.account = this.account
        _ln.key = Player.getInstance.gpgToken.split(" ")[1];
        GameData.getInstance.coinType = this.coinType;
        PublicData.getInstance.recodeUrl = this.recordeURL;
        PublicData.getInstance.language = this.UserLanguage
        console.log(_ln, "入房資訊");
        this.onSend(cmd, _ln)
        this.isFirstData = false
    }


    /////////////////////////////////////////////////////////////
    ///     web socket event.
    /////////////////////////////////////////////////////////////
    //#region  
    onWS_Open(event) {
        console.log("Send Text WS was opened.");
        CheckLoading.getInstance.endWork(CheckLoadingType.isWebSocketOpen);
        this.onLogIn("ln")
        if (this.usertoken == "") {
            // GameControll.getInstance.messaggeState(MessageCommend.BackHome, SocketSetting.t("E_0001", LangType.Game))
            return;
        }
    }
    onWS_Error(event) {
        console.log("Send Text fired an error");
        CheckLoading.getInstance.resetState(CheckLoadingType.isWebSocketOpen);
        // 連線錯誤，詳細情況請洽客服!
        // GameControll.getInstance.messaggeState(MessageCommend.BackHome, SocketSetting.t("E_0001", LangType.Game))
    }
    onWS_Close(event) {
        console.log("WebSocket instance closed.");
        this.isClose = true
        if (CheckLoading.getInstance.checkState(CheckLoadingType.isWebSocketOpen)) {
            CheckLoading.getInstance.resetState(CheckLoadingType.isWebSocketOpen);
            // GameControll.getInstance.messaggeState(MessageCommend.BackHome, SocketSetting.t("E_0002", LangType.Game))
        };
    }
    onWS_Receive(event) {
        let message = event.data;
        try {
            let jmsg = JSON.parse(message);
            // console.log(jmsg);

            if (typeof jmsg == "object") {
                console.log(' \n=====收=====');
                console.log(">> cmd: " + jmsg.cmd);
                console.log(jmsg.data);
                console.log('=====收=====\n ');
                GameControll.getInstance.serverRespond(jmsg.cmd, jmsg.data);
                return;
            }
        } catch (e) { }

    }
    //#endregion

    onViewRecord() {
        if (this.recordeURL != null && this.recordeURL != "" && this.recordeURL != "undefined") {
            let formatRecordUrl = `${this.recordeURL}?agentId=${this.agentId}&playerId=${Player.getInstance.account}&lang=${this.UserLanguage}`
            window.open(formatRecordUrl)
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
            window.open(this.staoredValueUrl)
        }
    }
    onCloseWindow() {
        let temp = window.open('', '_self');
        temp.close();
    }
    closeWebsocket() {
        // this.isClose = true
        // CheckLoading.getInstance.resetState(CheckLoadingType.isWebSocketOpen);

        if (!CheckLoading.getInstance.checkState(CheckLoadingType.isWebSocketOpen)) {
            return
        }

        this.onSend(CommandType.usdis, {})
        DelayTime.getInstance.StopGameHeartrate();
    }
    /////////////////////////////////////////////////////////////
    ///     lang載入設定.
    /////////////////////////////////////////////////////////////

    // server可自改語言與伺服器
    MotifySetting() {
        if ((window.location.search).length > 0) {
            var getsearch: Array<string> = window.location.search.split('?');
            var urldata: object = {};
            for (var getsearchKey in getsearch) {
                if (getsearch[getsearchKey] != "") {
                    let searchList: Array<string> = getsearch[getsearchKey].split('&');
                    for (var key in searchList) {
                        urldata[searchList[key].split('=')[0]] = searchList[key].split('=')[1];
                        /**這是要判斷是否強改資料的部分，改的話就不要套用DB給的資料 */
                        for (var datakey in urldata) {
                            if (datakey == "L" || datakey == "l") {
                                this.UserLanguage = urldata[datakey];
                                this.urlData = undefined
                            }
                            if (datakey == "S" || datakey == "s") {
                                this.serverhost = urldata[datakey];
                                this.urlData = undefined
                            }
                            if (datakey == "P" || datakey == "p") {
                                this.serverport = urldata[datakey];
                                this.urlData = undefined
                            }
                        }
                    }
                }
            }
        }
    }


    RomoteData(url: string, callback: Function, errCallback: Function) {
        var url = url;
        console.log('downloadText.url:', url);
        // console.log(url.startsWith("http://"));
        // console.log(sys.platform);
        if (sys.platform === sys.Platform.ANDROID) {

            var result = jsb.fileUtils.getStringFromFile(url);
            if (typeof result === 'string' && result) {
                return result;
            }
            else {
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
                        }
                        else {
                            errCallback(url)
                            // errCallback({ status: xhr.status, errorMessage: errInfo + '(wrong status)' });
                        }
                    }
                    else {
                        errCallback(url)
                        // errCallback({ status: xhr.status, errorMessage: errInfo + '(wrong readyState)' });
                    }
                };
                xhr.onerror = function () {
                    errCallback(url)
                    // errCallback({ status: xhr.status, errorMessage: errInfo + '(error)' });
                };
                xhr.ontimeout = function () {
                    errCallback(url)
                    // errCallback({ status: xhr.status, errorMessage: errInfo + '(time out)' });
                };
                xhr.send(null);
            }
        }
    }
    androidLoadLanguage(getText) {
        let jsonTo = JSON.parse(getText)
        // console.log(jsonTo);
    }
    startLoadLanguage() {
        let gameLang = `${this.libPath}gameLanguage/${GameData.getInstance.gameID}/${this.UserLanguage}.json?/${new Date().getTime()}`
        this.RomoteData(gameLang, this.loadLanguageEnd.bind(this), this.loadLanguageError.bind(this))
        let serverLang = this.libPath + "serverLanguage/" + this.UserLanguage + ".json?" + new Date().getTime()
        this.RomoteData(serverLang, this.loadLanguageEnd.bind(this), this.loadLanguageError.bind(this))

    }
    loadLanguageEnd(jsonText: string, url?: string) {
        console.log("loadLanguageEnd");
        let type = url.indexOf("gameLanguage") == -1 ? LangType.Server : LangType.Game
        let jsonTo = JSON.parse(jsonText)
        SocketSetting.setLang(this.UserLanguage).init(jsonTo, type); //設定語言   
        // SocketSetting.setLang(MyWebSocket.instence.UserLanguage).init(jsonTo, type); //設定語言   
        // MainModelUp.instance.IsLoadLanguage = true;
    }
    loadLanguageError(url: string, err?: string) {
        // console.log("loadLanguageError");
        if (err)
            // console.log("錯誤?" + err);

            this.loadLanguageCount = 0;
        this.RomoteData(url, this.loadLanguageEnd.bind(this), this.loadLanguageErrorAgain.bind(this));
    }
    loadLanguageErrorAgain(url: string) {
        this.isClose = true
        // console.log("语言包下载失败请通知客服");
        GameControll.getInstance.messaggeState(MessageCommend.BackHome, SocketSetting.t("S_0003", LangType.Server))
        // Panel_Message.showConfirm(this, 1, SocketSetting.t("S_9077"), (e) => {
        //     this.onBackHome();
        // }); //"语言包下载失败请通知客服";
        // MainModelUp.instance.ShowMessageBox = true;
    }
}



class Config {
    cmd: string;
    data: any;
}

// export default new MyWebSocket();


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