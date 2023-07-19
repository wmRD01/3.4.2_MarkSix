import { Game, game, random, sys, _decorator } from "cc";
import { DEV } from "cc/env";
import BaseSingletonComponent from "../../Patten/Singleton/BaseSingletonComponent";
import { lbll, lbrl, lbsr } from "../Contorll/Api/SendCommand";
import PanelLoading from "../Contorll/NoClearNode/PanelLoading";
import { CommandType } from "../Enum/CommandType";
import { EvnetType } from "../Enum/EvnetType";
import { GameEvent } from "../Enum/GameEvent";
import { GameSceneName } from "../Enum/GameSenceName";
import { WebSocketEvent } from "../Enum/WebSocketEvent";
import AssetMng from "../Manager/AssetMng";
import EventMng from "../Manager/EventMng";
import MusicMng from "../Manager/MusicMng";
import GameData from "../Model/GameData";
import Player from "../Model/Player";
import PublicData from "../Model/PublicData";
import RoomData from "../Model/RoomData";
const { ccclass, property } = _decorator;


@ccclass('MainLobby')
export default class MainLobby extends BaseSingletonComponent<MainLobby>() {
    onLoad() {
        EventMng.getInstance.init()
        AssetMng.startLoad()
        MusicMng.init()
        PublicData.getInstance.currentScene = GameSceneName.Lobby
        // super.onLoad()
    }
    start() {
        // if (!DEV)
        //     PanelLoading.instance.openLoading()
        // else
        //     PanelLoading.instance.closeLoading()
        // this.inLobby()
    }


}

