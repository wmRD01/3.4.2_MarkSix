import { director, game, sys, _decorator } from "cc";
import BaseSingletonComponent from "../../Patten/Singleton/BaseSingletonComponent";
import PanelLoading from "../Contorll/NoClearNode/PanelLoading";
import { GameSceneName } from "../Enum/GameSenceName";
import AssetMng from "../Manager/AssetMng";
import EventMng from "../Manager/EventMng";
import MusicMng from "../Manager/MusicMng";
import PublicData from "../Model/PublicData";
const { ccclass, property } = _decorator;


@ccclass('MainLoading')
export default class MainLoading extends BaseSingletonComponent<MainLoading>() {
    onLoad() {

        PublicData.getInstance.currentScene = GameSceneName.Loading
        super.onLoad()
        game.frameRate = 59
        PublicData.getInstance.isResetView = true
        AssetMng.startLoad()
        MusicMng.init()
        EventMng.getInstance.init()
    }
    start() {
        if (!sys.isMobile || (sys.isBrowser && sys.isMobile)) {
            PanelLoading.instance.openLoading()
            director.preloadScene(GameSceneName.Lobby, () => {
                director.loadScene(GameSceneName.Lobby)
            })
        }


        return
        // PanelLoading.instance.openLoading()
    }

}