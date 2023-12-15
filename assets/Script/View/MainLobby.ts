import { _decorator } from "cc";
import BaseSingletonComponent from "../../Patten/Singleton/BaseSingletonComponent";
import { GameSceneName } from "../Enum/GameSenceName";
import PublicData from "../Model/PublicData";
const { ccclass, property } = _decorator;


@ccclass('MainLobby')
export default class MainLobby extends BaseSingletonComponent<MainLobby>() {
    onLoad() {
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

