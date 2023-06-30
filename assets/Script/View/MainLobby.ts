import { Game, game, random, sys, _decorator } from "cc";
import { DEV } from "cc/env";
import BaseSingletonComponent from "../../Patten/Singleton/BaseSingletonComponent";
import { lbll, lbrl, lbsr } from "../Contorll/Api/SendCommand";
import PanelLoading from "../Contorll/NoClearNode/PanelLoading";
import { CommandType } from "../Enum/CommandType";
import { GameEvent } from "../Enum/GameEvent";
import { GameSceneName } from "../Enum/GameSenceName";
import { WebSocketEvent } from "../Enum/WebSocketEvent";
import EventMng from "../Manager/EventMng";
import GameData from "../Model/GameData";
import Player from "../Model/Player";
import PublicData from "../Model/PublicData";
import RoomData from "../Model/RoomData";
const { ccclass, property } = _decorator;


@ccclass('MainLobby')
export default class MainLobby extends BaseSingletonComponent<MainLobby>() {
    onLoad() {
        PublicData.getInstance.currentScene = GameSceneName.Lobby
        super.onLoad()
    }
    start() {
        if (!DEV)
            PanelLoading.instance.openLoading()
        else
            PanelLoading.instance.closeLoading()
        // this.inLobby()
    }
    inLobby() {
        let _lbll = new lbll()
        _lbll.contentId = GameData.getInstance.contentId
        _lbll.type = GameData.getInstance.gameType
        EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.lbll, _lbll)
    }

    inRoomLevel() {
        let _lbrl = new lbrl()
        _lbrl.contentId = GameData.getInstance.contentId
        _lbrl.type = GameData.getInstance.gameType
        _lbrl.level = 1
        EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.lbrl, _lbrl)
    }
    inGame(roomNo?: number) {
        console.log("開始送?");
        let _lbsr = new lbsr()
        _lbsr.roomNo = roomNo == undefined || roomNo == null ? GameData.getInstance.roomNo : roomNo//先寫死，到時候再做活
        _lbsr.contentId = GameData.getInstance.contentId
        _lbsr.seatNo = RoomData.getInstance.seatNo
        _lbsr.password = Player.getInstance.password
        EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.lbsr, _lbsr)
    }
    creatorRoom() {
        let data = new CreatorRoomData()
        data.playMinute = 1
        data.roomName = Math.floor(random() * 100000).toString()
        data.betMin = 10
        data.betMin = 10000
        data.betOptions = [10, 200, 500, 1000, 10000]
        data.thinkSecond = 1
        EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.vlcr, data)
    }


}

class CreatorRoomData {
    public contentId: string = "10";

    public roomType: number = 1;
    public roomLevel: number = 1;

    public roomName: string = "";    // 房間名稱.
    public currency: number = 0;        // 幣別. 0:金幣, 1:銀幣
    public modeNonComm: boolean = false; // 是否為免佣模式.
    public playMinute: number = 0;      // 開房時長 單位:分鐘.
    public charge: number = 0;      // 開房費用.(admin不適用)
    public enableBothBet: boolean = false;   // 是否允許兩邊對押;

    public betMin: number = 0;      // 最小下注額;
    public betMax: number = 0;      // 最大下注額;
    public betOptions: number[] = null;   // 下注選項

    public seat: number = 100;            // 座位(允許進入人數);
    public thinkSecond: number = 0;     // 下注思考時間.單位:秒

}