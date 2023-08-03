import { CommandType } from "./CommandType";

export enum WebSocketEvent {
    /**
     * 登入遊戲
     */
    Login = "Login",
    /**
     * 傳送資料
     * @type CommandType
     * @class object
     */
    WebSocketSendCommand = "WebSocketSendCommand",
    /**
     * 回到首頁
     */

    BackHome = "BackHome",
    /**
     * 關閉網頁
     */
    CloseWindow = "CloseWindow",
    /**
     * 前往紀錄網址
     */
    ViewRecord = "ViewRecord",
    /**
     * 前往儲值
     */
    StaoredValue = "StaoredValue",
    /**
     * 斷開連線
     */
    CloseWebSocket = "CloseWebSocket",
    /**
     * 開始Loading語言資料
     */
    StartLoadLanguage = "startLoadLanguage",
    /**
    * 開始連線
    */
    StartConnect = "StartConnect"
}