import { Game, game } from "cc";
import BaseSingleton from "../../../Patten/Singleton/BaseSingleton";
import { LobbyState, MessageState, PlayerState } from "../../../Patten/StatePatten";
import { CommandType } from "../../Enum/CommandType";
import { GameEvent } from "../../Enum/GameEvent";
import { LangType } from "../../Enum/LangType";
import { MessageCommend } from "../../Enum/MessageCommend";
import { NotificationType } from "../../Enum/NotificationType";
import EventMng from "../../Manager/EventMng";
import PublicData from "../../Model/PublicData";
import SocketSetting from "../../Socket/SocketSetting";
import { AccountLogIn } from "../../State/LobbyState";
import { BackHomeMessage, ShowConfirmMessage } from "../../State/MessageState";
import { ChooeseBall } from "../../State/PlayState";

export default class GameControll extends BaseSingleton<GameControll>() {
    //利用推波方式去call Function 
    setControllEvent() {
        game.on(Game.EVENT_HIDE, this.resetView.bind(this))
        game.on(Game.EVENT_SHOW, this.resetWait.bind(this))
        EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).on(GameEvent.ControllSandCommend, this.serverRespond, this)
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
            case CommandType.ln:
                this.lobbyState(cmd, data)
                break;
            case CommandType.bet:
                this.playState(cmd, data)
                break;


        }
    }

    lobbyState(cmd: string, data: any) {
        switch (cmd) {
            case CommandType.ln:
                LobbyState.getInstance.transitionTo(AccountLogIn, data)
                break;

        }
    }


    playState(cmd: string, data: any) {
        switch (cmd) {
            case CommandType.bet:
                PlayerState.getInstance.transitionTo(ChooeseBall, data)
                break;

        }
    }


    checkError(cmd: string, data: any) {
        let message: string;
        message = this.serverErrorCode(data.code)
        switch (cmd) {
            // case CommandType.ssdis://系統踢出
            //     CheckLoading.getInstance.resetState(CheckLoadingType.isWebSocketOpen)
            //     break;
            // case CommandType.ssntf://系統通知
            //     // Panel_Message.showConfirm(this, 0, message)
            //     break;
            // case CommandType.sschk://逾時檢查
            //     break;
            // default:
            //     message = this.serverErrorCode(data.code)

            // break;
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

            default:
                MessageState.getInstance.transitionTo_Old(new ShowConfirmMessage(), transformStr).requestChange();
                break;
        }

    }
    serverErrorCode(code: string) {
        if (isNaN(Number(code)))
            return code
        else
            return SocketSetting.getInstance.t(code, LangType.Server);

    }
    resetView() {
        switch (PublicData.getInstance.currentScene) {
            // case GameSceneName.Lobby:
            //     ViewState.getInstance.transitionTo(LobbyCloseView)
            //     break
            // case GameSceneName.GameRoom:
            //     ViewState.getInstance.transitionTo(GameCloseView)
            //     break
        }

    }

    resetWait() {
        switch (PublicData.getInstance.currentScene) {
            // case GameSceneName.Lobby:
            //     ViewState.getInstance.transitionTo(LobbyOpenView)
            //     break
            // case GameSceneName.GameRoom:
            //     ViewState.getInstance.transitionTo(GameOpenView)
            //     break
        }
    }


}
