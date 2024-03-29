import { URLVlaue } from "../Contorll/Api/SendCommand";
import BaseComponent from "./ComponentBase";
import { IsBuildSelfServer, IsEditor, IsGitHub, IsGPGServer, IsInpokerBestServer, IsPhone, IsVAServer } from "./JudgePlatform";
import PublicData from "./PublicData";

export default class SocketModel extends BaseComponent {
    /**
     * 網址
     */
    serverhost: string;
    /**
     * Port號
     */
    serverport: number;
    /**
     * 連線網址類型(ws/wss)(網址加密)
     */
    connectionType: string;
    /**
     * 登入帳號類型
     */
    LoginState: string;
    /**
     * ServerAPI位置
     */
    httpServerURL: string;
    /**
     * 語系tw(繁)cn(簡)en(英)vn(越)th(泰)id(印)
     */
    UserLanguage: string;
    /**
     * 全部語系tw(繁)cn(簡)en(英)vn(越)th(泰)id(印)
     */
    ContainLanguage: string[] = ["NTD", "CNY", "USD", "VND", "THB", "IND", "JPY"];
    /**
     * 重新拼湊後的網址
     */
    FormatLanguageURL: string;
    /**
     * Server語言包路徑
     */
    libPath: string;
    /**
     * Server語言包路徑
     */
    loadServerLanguage: string;
    /**
     * Game語言包路徑
     */
    loadGameLanguage: string;
    /**
     * 使用者名稱
     */
    account: string;
    /**
    * 代理帳號
    */
    agentId: string;
    /**
     * Token登入金鑰
     */
    usertoken: string;
    /**
     * 玩家回到首頁網址
     */
    backHomeURL: string;
    /** 
     * 後台查帳網址
     */
    recordeURL: string;
    /*
    *網頁上變數
    */
    urlData: URLVlaue | Object = undefined;
    /** 
     * 儲值網址
     */
    staoredValueUrl: string;
    /**
     * 對接公司的名稱
     */
    companyIcon: string;
    /**
     * 語言包載入數
     */
    loadLanguageCount: number;
    /**
     * 金幣類型(接收資料時使用)
     */
    coinType: number = 0;
    DepositURL: string;
    /**部分循環檢查時需要用到的參數 */
    isClose: boolean = false;

    webSocket: WebSocket;

    // layout: string;
    // /**
    //  * 是否有手勢
    //  */
    // windows: String;
    // Game Server
    Setting() {
        this.urlData = this.handleURLData(window.location.href)
        /**確認是否為App 這個會從前端那邊傳 */
        if (this.urlData != undefined)
            PublicData.getInstance.isApp = (this.urlData as URLVlaue).app
        console.log(this.urlData);

        // this.serverhost = "211.22.137.96"; // server host
        // this.ConnectionType = "ws"
        this.serverhost = "inpoker.va-game.com"; // server host
        this.connectionType = "ws"

        this.serverport = 10004; // 創防版本port server port
        this.LoginState = "2"; // 0註冊 1登入 2遊客, 3:正式.
        let serverhost = (this.serverhost == "inpoker.best" || this.serverhost == "211.22.137.96") ? "inpoker.best" : "inpoker.fun";
        this.httpServerURL = "http://" + serverhost + "/"; // HTTP Server URL
        this.UserLanguage = "NTD"; // 
        this.libPath = this.checkLanguagePath(); // 語言包路徑
        // console.log(this.libPath);  
        // console.log(window.location.href.indexOf("github"));


        this.loadLanguageCount = 0; // 語言包載入數
        // Member Info
        this.backHomeURL = ""; // 遊戲返回網址
        // this.account = "Test0" + Math.floor(Math.random() * 24); // 會員帳號
        this.account = "2324"
        this.usertoken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTg2MzU1MjYsImV4cCI6MTcwMTIyNzUyNiwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiNTc3OSIsImF1dGhfdGltZSI6MTY5ODYzNTUyNiwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjU3NzkiLCJqdGkiOiJDM0FFQ0Q3RTJFN0VEMzg3RjU2QkVFOUE1RUE2RTAwNCIsImlhdCI6MTY5ODYzNTUyNiwic2NvcGUiOlsiZ2FtZS5saW5rIiwibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiLCJyZXBvcnQucmVhZCIsInJlcG9ydC53cml0ZSJdLCJhbXIiOlsibWtfcGhvbmUiXX0.xqKpRqydOApkLKiRpmriikrFjB_mXuljPeMhQ2E1w--3Xgh1oTQ-ehWjNciDHhCANicCYoCncx9nolRGdnPZWgranxF-jzD3UIEmEjUmJOxK11xgdLanMGVgO2SrA9DetkJU7xSF3gvZxcwDSwnGoPK205ohhsRrc0rudVQHURqZbk8_ShJTYtQfDrayTXXZet_O88mILkQUh0bwT745IiFrsdq5MNgXoI9uGvGT1LnZ37uKDyle58jCFzbQ4JqDUnnRAhluUDJgp1E2FNKvV_azcV3zrfFAWChH7fCY7_vTE2Xq0uxMzGyJs6ERs7RpXL99olhBnor8A8N7VwST6A"
        this.companyIcon = "WM"; // 公司Icon名稱

        this.UserLanguage = this.urlData == undefined ? this.UserLanguage : this.UserLanguage
        this.UserLanguage = (this.ContainLanguage.filter(L => L == this.UserLanguage).length <= 0) ? "tw" : this.UserLanguage;

    }
    judgePlatorm() {
        new IsGPGServer(window.location.href)
        new IsInpokerBestServer(window.location.href)
        new IsVAServer(window.location.href)
        new IsEditor(window.location.href)
        new IsBuildSelfServer(window.location.href)
        new IsGitHub(window.location.href)
        new IsPhone()
    }
    checkGPG() {

        let getURL = window.location.href;
        if (getURL.indexOf("inpoker.best") != -1)
            return true
        else
            return false
    }
    checkLanguagePath() {
        if (PublicData.getInstance.isApp == "1")
            return "https://twsixmark.com/app/lib/"; // 語言包路徑
        else if (window.isVAServer || window.isInpokerServer)
            return "../../lib/"
        else if (window.isGitServer)
            return "https://wmrd01.github.io/BaccaratPlay/lib/"
        else//預設 // 本地端
            return "http://127.0.0.1/JaiJaiTest/lib/";
        // return "http://192.168.4.61/JaiJaiTest/lib/"
        // return "http://192.168.89.61/JaiJaiTest/lib/"
        // return "http://192.168.0.238/JaiJaiTest/lib/"
    }

    handleURLData(_url: string) {
        //  _url = "https://play1.godplay.app/10001/index.html?loginType=web&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0aW1lIjoxNjY4NzYyMjcwMDQ1LCJ1aWQiOiJYUGpST1oiLCJkYyI6IkdQRyIsImFnZW50SWQiOiJ0ckUzeW1XaURMYjIiLCJicmFuZElkIjoiR1BHIiwiYnJhbmRUaXRsZSI6IkdQRyIsImdhbWVJZCI6IjEwMDAxIiwiaWF0IjoxNjY4NzYyMjcwLCJleHAiOjE2Njg3NjU4NzB9.k_GVGPiQCjWxhFG3SGM2zoSy_ggN2cZXuUQ5GvqZib_0TCJ2ul9K5xbTKkgwm7OUw7nMCWLWlwERHc0MMF586SgjuQe9W7SoRSMaBtw_AkiKNn4S1NMvhemgNAdIyjL7I1Gg5xyT-x110RF73lF-yt-n6KKTP3TGkd7wR9_fPz8&record=https://backendsystem.godplay.app/wList&dc=GPG&agentId=trE3ymWiDLb2&GGID=1&lang=tw&forceExchange=true&providerlogo=true"
        // console.log(_url.split("?")[1].split("&"));
        // console.log(_url.split("?")[1]);

        if (_url.split("?")[1] == undefined) return undefined

        let arr = _url.split("?")[1].split("&")
        let obj = new Object()
        for (let index = 0; index < arr.length; index++) {
            let cut = arr[index].split("=")
            obj[cut[0]] = cut[1]
        }
        // console.log(obj);
        return obj
    }
    eventClarity(c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        t = l.createElement(r); t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    }

}
