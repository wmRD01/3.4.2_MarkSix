import * as RP from "../Contorll/Api/ResponeCommand";
import PublicData from "../Model/PublicData";
import { State } from "../../Patten/StatePatten";
import EventMng from "../Manager/EventMng";
import GameData from "../Model/GameData";
import Player from "../Model/Player";
import { director, random } from "cc";
import { GameSceneName } from "../Enum/GameSenceName";
import DelayTime from "../../Plug/DelayTime";
import MainLobby from "../View/MainLobby";
import { lbll, lbrl, lbsr } from "../Contorll/Api/SendCommand";
import RoomData from "../Model/RoomData";
import { WebSocketEvent } from "../Enum/WebSocketEvent";
import { CommandType } from "../Enum/CommandType";
import { DEV } from "cc/env";
import PublicModel from "../Model/PublicModel";
import { EvnetType } from "../Enum/EvnetType";
/**登入 */
export class AccountLogIn extends State {
    public changeState(data: RP.ln): void {
        /**連線成功設定心跳 */
        DelayTime.getInstance.SetGameHeartrate(PublicData.getInstance.heartTime);
        // console.log(PublicData.getInstance);
        // console.log(GameData.getInstance.isFastInGame);
        /**更新部分資料 */
        PublicModel.getInstance.TwoClassCheckData(Player.getInstance, data)
        if (GameData.getInstance.isFastInGame) {
            director.preloadScene(GameSceneName.GameRoom, () => {
                let _lbsr = new lbsr()
                _lbsr.roomNo = GameData.getInstance.roomNo
                _lbsr.contentId = GameData.getInstance.contentId
                _lbsr.seatNo = RoomData.getInstance.seatNo
                _lbsr.password = Player.getInstance.password
                EventMng.getInstance.mapEvnet.get(EvnetType.Pulic).emit(WebSocketEvent.WebSocketSendCommand, CommandType.lbsr, _lbsr)
            })
        }
        else {
            director.preloadScene(GameSceneName.Lobby, () => {
                director.loadScene(GameSceneName.Lobby)
            })
        }
        // EventMng.getInstance.mapEvnet.get(EvnetType.Pulic).emit(GameEvent.CloseGameLoad)
        // //如果Server通知幣別時更新，如無則預設或者適應舊系統
        // if (data.coinType) GameData.getInstance.coinType = data.coinType

        // let getWallet = data.coinType == CoinType.Gold ? data.pointGold : data.pointSilver
        // this.mainGame.panel_UI.ui_Wallet.add(GameData.getInstance.coinType).setColor(GameData.getInstance.coinType).setNum(getWallet);

        // this.mainGame.panel_UI.ui_Settlement.setPlayName(data.nickname)
        // PublicModel.getInstance.TwoClassCheckData(Player.getInstance, data)
        // // console.log(MainModel);

        // if (window.isEditor) {

        // }
        // else {

        //     this.mainGame.panel_View_BG.view0_BG.outView()
        //     this.mainGame.panel_Exchange.show()
    }
    /**快速入房的關係，因此得放在這邊 */

}
/**進入大廳 */
export class InLobby extends State {
    public changeState(data: RP.lbll): void {
        /**顯示房間 */

        // if (GameData.getInstance.isFastInGame)
        // director.preloadScene(GameSenceName.Lobby, () => {
        //     director.loadScene(GameSenceName.Lobby)
        // })
        // EventMng.getInstance.mapEvnet.get(EvnetType.Pulic).emit(WebSocketEvent.SendCommand, CommandType.lbrl)
    }
}
/**進入房間級別 */
export class InRoomLevel extends State {
    public changeState(data: RP.lbrl): void {
        /**顯示Level */
        // MainLobby.instance.inRoomLevel()
        // EventMng.getInstance.mapEvnet.get(EvnetType.Pulic).emit(WebSocketEvent.SendCommand, CommandType.lbsr)
        if (DEV) {
            MainLobby.instance.inGame(data.rooms[0].roomNo)
        }
    }
}


/**進入遊戲 */
export class InGame extends State {
    public changeState(data: RP.goin | RP.lbsr): void {
        if ((data as RP.lbsr).code > 0) {
            if (!DEV) return;
            let data = new CreatorRoomData()
            data.playMinute = 1
            data.roomName = Math.floor(random() * 100000).toString()
            data.betMin = 10
            data.betMax = 10000
            data.betOptions = [10, 200, 500, 1000, 10000]
            data.thinkSecond = 10
            data.playMinute = 1440
            EventMng.getInstance.mapEvnet.get(EvnetType.Pulic).emit(WebSocketEvent.WebSocketSendCommand, CommandType.vlcr, data)
        }
        else {
            director.loadScene(GameSceneName.GameRoom)
            console.log("成功進入遊戲");
        }
        // if (!GameData.getInstance.isFastInGame) {
        // }
        // throw new Error("Method not implemented.");
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
export class ChangeNickname extends State {
    public changeState(data: RP.ucnn): void {
        Player.getInstance.nickname = data.nickname
        // this.mainGame.panel_UI.ui_Settlement.setPlayName(data.nickname)
        // this.mainGame.panel_Loading.hide()
        // this.mainGame.panel_ChangeNickname.hide()
        // this.mainGame.panel_Message.show()
        // this.mainGame.panel_Message.messageInit(SocketSetting.t("026", LangType.Game))
        // this.mainGame.panel_Message.showSingleConfirm()
    }
}





