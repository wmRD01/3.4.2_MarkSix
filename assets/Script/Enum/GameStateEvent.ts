import { Node, Vec3 } from "cc";

export enum GameStateEvent {
    //#region GameSence場景狀態用
    UpdataSence = "UpdataSence",
    OpenBet = "OpenBet",
    UpdateTime = "UpdateTime",
    UpdateTabelData = "UpdateTabelData",
    CloseBet = "CloseBet",
    BackBet = "BackBet",
    /**傳入gbet
     * @class gbet
     */
    ClientBet = "ClientBet",
    BetClear = "BetClear",
    ShowdownCard = "ShowdownCard",
    SquintCard = "SquintCard",
    /**傳入gs24
     * @class gs24
     */
    RoundResult = "RoundResult",
    EndRound = "EndRound",
    EndBoot = "EndBoot",
    //#endregion
    ReProcessing = "ReProcessing",
    GameMessage = "GameMessage",
    /** 依照Leo個的順序排序 0:押閒, 1:押莊, 2:押平局, 3:押閒對, 4:押莊對
     * @type number 編號
     * @type boolean 是否在範圍內
     */
    EnterHover = "EnterHover",
    ExitHover = "ExitHover",
    UpdateCoin = "UpdateCoin",
    UpdataCardSequence = "UpdataCardSequence",
    OpenRoad = "OpenRoad",
    CloseRoad = "CloseRoad",

    /**
     * @type {Vec3} 傳入座標
     */
    ClientTouchTable = "ClientTouchTable",
    TextAnimation = "TextAnimation",

    /**移動Chip
     * @class gbet
     * @type ChipNode
     */
    NotificationChip = "NotificationChip",
    
}