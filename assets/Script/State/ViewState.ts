import * as RP from "../Contorll/Api/ResponeCommand";
import PublicData from "../Model/PublicData";
import { State } from "../../Patten/StatePatten";
import DelayTime from "../../Plug/DelayTime";
import { CommandType } from "../Enum/CommandType";
import EventMng from "../Manager/EventMng";
import MusicMng from "../Manager/MusicMng";
import { WebSocketEvent } from "../Enum/WebSocketEvent";
import PanelLoading from "../Contorll/NoClearNode/PanelLoading";
import PublicModel from "../Model/PublicModel";
import { GameEvent } from "../Enum/GameEvent";
import RoomData from "../Model/RoomData";
import { GameStateEvent } from "../Enum/GameStateEvent";
import { ServerGameSenceType } from "../Enum/ServerGameSenceType";
import MyMath from "../../Plug/MyMath";
import { MainGame } from "../View/MainGame";
import GameSenceText from "../Model/GameSenceText";
import SocketSetting from "../Socket/SocketSetting";
import { LangType } from "../Enum/LangType";
import CheckLoading from "../Model/CheckLoading";
import { CheckLoadingType } from "../Enum/CheckLoadingType";
import Player from "../Model/Player";

/**更新房間狀態 */
export class GetGameRoomData extends State {
    public changeState(data: RP.gori): void {
        PublicModel.getInstance.TwoClassCheckData(RoomData.getInstance, data)
        let getbuffer = PublicModel.getInstance._base64ToBytes(data.records)
        // // console.log(getbuffer);ㄐ

        // let getbuffer = PublicModel.getInstance._base64ToBytes("AQMB")
        // let getbuffer = PublicModel.getInstance._base64ToBytes("AgECAwIDAgEBAgMDAQYDAwIBAwcBBQIJAgIBAgECAQEGAgECAgUBAQYCAQYBAgEBAgECAgEBAQECAQIC")

        // let map = new Map<number, GameRoundResult>()
        // for (let index = 0; index < getbuffer.length; index++) {
        //     /**先將Byte轉乘Binary，再判斷結果，最後把結果存起來 */
        //     map.set(index, new GameRoundResult(PublicModel.getInstance.convertByteToBinary(getbuffer[index])))
        // }
        // console.log(map);
        // console.log(byts);
        RoomData.getInstance.records = []
        for (let index = 0; index < getbuffer.length; index++) {
        }

        console.log("開始處理Sence");
        PublicData.getInstance.isResetView = false
        this.senceProcessing(data)
        EventMng.emit(GameStateEvent.ReProcessing, data)
        console.log("結束處理Sence");
        /**畫面更新完成，關閉重製畫面判斷 */

    }

    senceProcessing(data: RP.gori) {
        /**避免推波事件時造成程序卡住，不可為Null與undifind */
        let changeData: any = {};
        console.log(`當前狀態：${data.nowStage}`);
        EventMng.emit(GameStateEvent.UpdataSence, new GameSenceText().change(data.nowStage))
        switch (data.nowStage) {
            case ServerGameSenceType.gs1:
                changeData = new RP.ggs();
                (changeData as RP.ggs).time = data.roomTime;
                (changeData as RP.ggs).status = data.roomStatus
                EventMng.emit(GameEvent.ControllSandCommend, ServerGameSenceType.ggs, changeData)
                EventMng.emit(GameEvent.ControllSandCommend, data.nowStage, changeData)
                break;
            case ServerGameSenceType.gs8:
            case ServerGameSenceType.gs9:
            case ServerGameSenceType.gs10:
                break;
            case ServerGameSenceType.gs11:
                changeData = new RP.gs11();
                (changeData as RP.gs11).betTime = MyMath.divide(data.remainTime, 1000);
                EventMng.emit(GameEvent.ControllSandCommend, data.nowStage, changeData)
                break;
            case ServerGameSenceType.gs13:
            case ServerGameSenceType.gs14:
            case ServerGameSenceType.gs15:
            case ServerGameSenceType.gs16:
            case ServerGameSenceType.gs17:
            case ServerGameSenceType.gs18:
            case ServerGameSenceType.gs19:
            case ServerGameSenceType.gs20:
            case ServerGameSenceType.gs21:
            case ServerGameSenceType.gs22:
            case ServerGameSenceType.gs23:
                // console.error("開始還原喔");
                break;
            default:
                console.log(`當前少處理到?：${data.nowStage}`);
                break

        }
        console.warn("EventSence", data.nowStage, changeData);

        console.warn("推波結束");

    }

}
/**其他玩家入房 */
export class PlayerInRoom extends State {
    public changeState(data: RP.grre): void {
    }

}
/**其他玩家離開房 */
export class PlayerExitRoom extends State {
    public changeState(data: RP.grrl): void {
    }

}
/**更新閒家下注排行 */
export class RefreshPlayerBetList extends State {
    public changeState(data: RP.gbop): void {
    }

}
/**更新莊家下注排行 */
export class RefreshBankerBetList extends State {
    public changeState(data: RP.gbob): void {
    }

}


export class LobbyCloseView extends State {
    public changeState(data: RP.gori): void {
        // DelayTime.getInstance.StopGameHeartrate()
        // if (PublicData.getInstance.isSystemDis || !PublicData.getInstance.isInGameRoom) return;
        // EventMng.emit(GameEvent.ResetView)
        // MusicMng.effectStopAll();
        // PanelLoading.instance.openLoading()
        // PublicData.getInstance.isResetView = true;
        // // console.log("跳窗");
        // DelayTime.getInstance.StopAllDT()
        // //把所有計時器與畫面全部關掉
    }

}

export class LobbyOpenView extends State {
    public async changeState(data: RP.gori): Promise<void> {
        // if (PublicData.getInstance.isSystemDis || !PublicData.getInstance.isInGameRoom) return;
        // console.log("載資料")
        // EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.gori)
    }

}



export class GameCloseView extends State {
    public changeState(data: RP.gori): void {
        DelayTime.getInstance.StopGameHeartrate()
        if (!CheckLoading.getInstance.checkState(CheckLoadingType.isWebSocketOpen) || !CheckLoading.getInstance.checkState(CheckLoadingType.isGameSence)) return;
        EventMng.emit(GameEvent.ResetView)
        MusicMng.effectStopAll();
        PanelLoading.instance.openLoading(SocketSetting.t("E_0004", LangType.Game))
        PublicData.getInstance.isResetProcessing = true
        PublicData.getInstance.isResetView = true;
        // console.log("跳窗");
        DelayTime.getInstance.StopAllDT()
        //把所有計時器與畫面全部關掉
    }

}

export class GameOpenView extends State {
    public async changeState(data: RP.gori): Promise<void> {

        if (!CheckLoading.getInstance.checkState(CheckLoadingType.isWebSocketOpen) || !CheckLoading.getInstance.checkState(CheckLoadingType.isGameSence)) return;
        console.log("載資料")
        EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.gori)
    }

}


