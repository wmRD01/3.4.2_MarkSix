export enum GameEvent {
    CloseGameLoad = "CloseGameLoad",
    OpenMenu = "OpenMenu",
    ShowSoundSet = "ShowSoundSet",
    ShowChangeNickname = "ShowChangeNickname",
    ShowExchange = "ShowExchange",
    InGameRoom = "InGameRoom",
    SetLogo = "SetLogo",
    SystemMessage = "SystemMessage",

    SetLanguage = "SetLanguage",
    ResetView = "ResetView",
    /**GameControll使用的監聽事件，主要是為了讓牠不要循環引用 */
    ControllSandCommend = "ControllSandCommend",
    /**設定旋轉方向 */
    SetOrientation = "SetOrientation",
    Test = "Test",

}