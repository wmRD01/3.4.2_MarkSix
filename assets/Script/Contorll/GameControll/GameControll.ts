import { CommandType } from "../../Enum/CommandType";
import { GameEvent } from "../../Enum/GameEvent";
import EventMng from "../../Manager/EventMng";
import PublicData from "../../Model/PublicData";
import { GameState, LobbyState, MessageState, PlayerState, ViewState } from "../../../Patten/StatePatten";
import { AccountLogIn, ChangeNickname, InGame, InLobby, InRoomLevel } from "../../State/LobbyState";
import { BackBet, ClearBet, OwnerBet, ReferLastBet, SquintEnd, SquintProcess, UpdateCoin } from "../../State/PlayState";
import { GameCloseView, GameOpenView, LobbyCloseView, LobbyOpenView, PlayerInRoom, PlayerExitRoom, RefreshBankerBetList, RefreshPlayerBetList, GetGameRoomData } from "../../State/ViewState";
import { BackHomeMessage, ShowConfirmMessage } from "../../State/MessageState";
import { MessageCommend } from "../../Enum/MessageCommend";
import { LangType } from "../../Enum/LangType";
import { ServerGameSenceType } from "../../Enum/ServerGameSenceType";
import BaseSingleton from "../../../Patten/Singleton/BaseSingleton";
import SocketSetting from "../../Socket/SocketSetting";
import { CloseBet, OpenNewGame, PlayerSendCardSquintStart, PlayerSendCardSquintEnd, ReadyBet, SendCards, ShuffleCrads, WaitOrEnd, BankerSendCardSquintStart, BankerSendCardSquintEnd, PlayerRepairCard, PlayerRepairCardSquintStart, PlayerRepairCardSquintEnd, BankerRepairCard, BankerRepairCardSquintStart, BankerRepairCardSquintEnd, ShowResoult, EndRound, EndBoot, StartBoot, RefreshRoomState, RefreshTabelData } from "../../State/GameState";
import { Game, game } from "cc";
import { GameSceneName } from "../../Enum/GameSenceName";
import RoomData from "../../Model/RoomData";
import PanelLoading from "../NoClearNode/PanelLoading";
import { GameStateEvent } from "../../Enum/GameStateEvent";
import GameSenceText from "../../Model/GameSenceText";
import GameData from "../../Model/GameData";
import CheckLoading from "../../Model/CheckLoading";
import { CheckLoadingType } from "../../Enum/CheckLoadingType";

export default class GameControll extends BaseSingleton<GameControll>() {
    //利用推波方式去call Function 
    setControllEvent() {
        game.on(Game.EVENT_HIDE, this.resetView.bind(this))
        game.on(Game.EVENT_SHOW, this.resetWait.bind(this))
        EventMng.on(GameEvent.ControllSandCommend, this.serverRespond, this)
    }
    serverRespond(cmd: string, data: any) {
        // console.log(cmd, data);
        if (data.code && data.code != 0) {
            this.messaggeState(cmd, data.code)

            // if (data.code > 0)   // console.log("出現錯誤啦!!!!!!!!!!");
            //     return;
        }
        // console.log(cmd);
        // console.log(MainModel.isResetView);
        switch (cmd) {
            case CommandType.gori:
            case CommandType.grre:
            case CommandType.grrl:
            case CommandType.gbop:
            case CommandType.gbob:
                this.viewState(cmd, data)
                break
            case CommandType.ln:
            case CommandType.lbll:
            case CommandType.lbrl:
            case CommandType.lbsr:
            case CommandType.goin:
            case CommandType.ucnn:
            case CommandType.vlcr:
                this.lobbyState(cmd, data)
                break;
            case CommandType.gonm:
            case CommandType.gbet:
            case CommandType.gbbk:
            case CommandType.gbcl:
            case CommandType.gbrt:
            case CommandType.gpp:
            case CommandType.gpe:
                if (PublicData.getInstance.isResetView) return
                this.playerState(cmd, data)
                break;
            case ServerGameSenceType.ggs:
            case ServerGameSenceType.gbal:
            case ServerGameSenceType.gs1:
            case ServerGameSenceType.gs8:
            case ServerGameSenceType.gs9:
            case ServerGameSenceType.gs10:
            case ServerGameSenceType.gs11:
            case ServerGameSenceType.gs12:
            case ServerGameSenceType.gs13:
            case ServerGameSenceType.gs14:
            case ServerGameSenceType.gs15:
            case ServerGameSenceType.gs16:
            case ServerGameSenceType.gs17:
            case ServerGameSenceType.gs19:
            case ServerGameSenceType.gs18:
            case ServerGameSenceType.gs20:
            case ServerGameSenceType.gs21:
            case ServerGameSenceType.gs22:
            case ServerGameSenceType.gs23:
            case ServerGameSenceType.gs24:
            case ServerGameSenceType.gs25:
            case ServerGameSenceType.gs30:
                // console.log("???uisReaaset?");
                // console.log(PublicData.getInstance.isResetView);
                if (PublicData.getInstance.isResetView) return
                if (!PublicData.getInstance.isResetView && PublicData.getInstance.isResetProcessing) {
                    PanelLoading.instance.closeLoading()
                    PublicData.getInstance.isResetProcessing = false
                }

                this.gameState(cmd, data)
                break;
        }
    }
    viewState(cmd: string, data: any) {
        switch (cmd) {
            case CommandType.gori:
                ViewState.getInstance.transitionTo(GetGameRoomData, data)
                break;
            case CommandType.grre:
                ViewState.getInstance.transitionTo(PlayerInRoom, data)
                break;
            case CommandType.grrl:
                ViewState.getInstance.transitionTo(PlayerExitRoom, data)
                break;
            case CommandType.gbop:
                ViewState.getInstance.transitionTo(RefreshPlayerBetList, data)
                break;
            case CommandType.gbob:
                ViewState.getInstance.transitionTo(RefreshBankerBetList, data)
                break;

        }
    }
    lobbyState(cmd: string, data: any) {
        switch (cmd) {
            case CommandType.ln:
                LobbyState.getInstance.transitionTo(AccountLogIn, data)
                break;
            case CommandType.lbsr:
            case CommandType.goin:
                LobbyState.getInstance.transitionTo(InGame, data)
                break;
            case CommandType.lbll:
                LobbyState.getInstance.transitionTo(InLobby, data)
                break;
            case CommandType.lbrl:
                LobbyState.getInstance.transitionTo(InRoomLevel, data)
                break;
            case CommandType.ucnn:
                LobbyState.getInstance.transitionTo(ChangeNickname, data)
                break;
            case CommandType.vlcr:
                GameData.getInstance.roomNo = data.roomNo
                LobbyState.getInstance.transitionTo(InLobby, data)
                break;
        }
    }
    playerState(cmd: string, data: any) {
        // console.log(cmd);

        switch (cmd) {
            case CommandType.gonm:
                PlayerState.getInstance.transitionTo(UpdateCoin, data)
                break;
            case CommandType.gbet:
                PlayerState.getInstance.transitionTo(OwnerBet, data)
                break;
            case CommandType.gbbk:
                PlayerState.getInstance.transitionTo(BackBet, data)
                break;
            case CommandType.gbcl:
                PlayerState.getInstance.transitionTo(ClearBet, data)
                break;
            case CommandType.gbrt:
                PlayerState.getInstance.transitionTo(ReferLastBet, data)
                break;
            case CommandType.gpp:
                PlayerState.getInstance.transitionTo(SquintProcess, data)
                break;
            case CommandType.gpe:
                PlayerState.getInstance.transitionTo(SquintEnd, data)
                break;
        }
    }
    gameState(cmd: string, data: any) {
        //紀錄場景
        RoomData.getInstance.nowStage = cmd
        let senceText = new GameSenceText().change(cmd)
        // console.log(senceText);
        if (senceText != undefined)
            EventMng.emit(GameStateEvent.UpdataSence, senceText)
        switch (cmd) {

            case ServerGameSenceType.ggs:
                GameState.getInstance.transitionTo(RefreshRoomState, data)
                break
            case ServerGameSenceType.gbal:
                GameState.getInstance.transitionTo(RefreshTabelData, data)
                break
            case ServerGameSenceType.gs1:
                GameState.getInstance.transitionTo(WaitOrEnd, data)
                break
            case ServerGameSenceType.gs8:
                GameState.getInstance.transitionTo(StartBoot, data)
                break
            case ServerGameSenceType.gs9:
                GameState.getInstance.transitionTo(ShuffleCrads, data)
                break
            case ServerGameSenceType.gs10:
                GameState.getInstance.transitionTo(OpenNewGame, data)
                break
            case ServerGameSenceType.gs11:
                GameState.getInstance.transitionTo(ReadyBet, data)
                break
            case ServerGameSenceType.gs12:
                GameState.getInstance.transitionTo(CloseBet, data)
                break
            case ServerGameSenceType.gs13:
                GameState.getInstance.transitionTo(SendCards, data)
                break
            case ServerGameSenceType.gs14:
                GameState.getInstance.transitionTo(PlayerSendCardSquintStart, data)
                break
            case ServerGameSenceType.gs15:
                GameState.getInstance.transitionTo(PlayerSendCardSquintEnd, data)
                break
            case ServerGameSenceType.gs16:
                GameState.getInstance.transitionTo(BankerSendCardSquintStart, data)
                break
            case ServerGameSenceType.gs17:
                GameState.getInstance.transitionTo(BankerSendCardSquintEnd, data)
                break
            case ServerGameSenceType.gs18:
                GameState.getInstance.transitionTo(PlayerRepairCard, data)
                break
            case ServerGameSenceType.gs19:
                GameState.getInstance.transitionTo(PlayerRepairCardSquintStart, data)
                break
            case ServerGameSenceType.gs20:
                GameState.getInstance.transitionTo(PlayerRepairCardSquintEnd, data)
                break
            case ServerGameSenceType.gs21:
                GameState.getInstance.transitionTo(BankerRepairCard, data)
                break
            case ServerGameSenceType.gs22:
                GameState.getInstance.transitionTo(BankerRepairCardSquintStart, data)
                break
            case ServerGameSenceType.gs23:
                GameState.getInstance.transitionTo(BankerRepairCardSquintEnd, data)
                break
            case ServerGameSenceType.gs24:
                GameState.getInstance.transitionTo(ShowResoult, data)
                break
            case ServerGameSenceType.gs25:
                GameState.getInstance.transitionTo(EndRound, data)
                break
            case ServerGameSenceType.gs30:
                GameState.getInstance.transitionTo(EndBoot, data)
                break

        }
        // if (!GameState.isStateing)
        // else
        //     GameState.requestStay()
    }


    checkError(cmd: string, data: any) {
        let message: string;
        message = this.serverErrorCode(data.code)
        switch (cmd) {
            case CommandType.ssdis://系統踢出
                CheckLoading.getInstance.resetState(CheckLoadingType.isWebSocketOpen)
                break;
                // case CommandType.ssntf://系統通知
                //     // Panel_Message.showConfirm(this, 0, message)
                //     break;
                // case CommandType.sschk://逾時檢查
                //     break;
                // default:
                //     message = this.serverErrorCode(data.code)

                break;
        }
        this.messaggeState(cmd, message);
    }
    messaggeState(cmd: string = "", caption: string) {
        // console.log(caption, cmd);
        let transformStr = this.serverErrorCode(caption)//error code代碼轉換文字
        switch (cmd) {
            case MessageCommend.BackHome:
                MessageState.getInstance.transitionTo_Old(new BackHomeMessage(), transformStr).requestChange();
                break;
            case CommandType.excr:
            case CommandType.excc:
                MessageState.getInstance.transitionTo_Old(new ShowConfirmMessage(), transformStr).requestChange();
                PanelLoading.instance.closeLoading()
                break
            default:
                MessageState.getInstance.transitionTo_Old(new ShowConfirmMessage(), transformStr).requestChange();
                break;
        }

    }
    serverErrorCode(code: string) {
        if (isNaN(Number(code)))
            return code
        else
            return SocketSetting.t(code, LangType.Server);

    }
    resetView() {
        switch (PublicData.getInstance.currentScene) {
            case GameSceneName.Lobby:
                ViewState.getInstance.transitionTo(LobbyCloseView)
                break
            case GameSceneName.GameRoom:
                ViewState.getInstance.transitionTo(GameCloseView)
                break
        }

    }

    resetWait() {
        switch (PublicData.getInstance.currentScene) {
            case GameSceneName.Lobby:
                ViewState.getInstance.transitionTo(LobbyOpenView)
                break
            case GameSceneName.GameRoom:
                ViewState.getInstance.transitionTo(GameOpenView)
                break
        }
    }


}
