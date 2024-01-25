import { director, game, _decorator } from "cc";
import BaseSingletonComponent from "../../Patten/Singleton/BaseSingletonComponent";
import PanelLoading from "../Contorll/NoClearNode/PanelLoading";
import { GameSceneName } from "../Enum/GameSenceName";
import AssetMng from "../Manager/AssetMng";
import EventMng from "../Manager/EventMng";
import MusicMng from "../Manager/MusicMng";
import PublicData from "../Model/PublicData";
import PublicModel from "../Model/PublicModel";
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
        // console.error("阿你不用再看?");

        // return
        if (!PublicModel.getInstance.checkApp()) {
            // console.log("我該做事情八?");
            PanelLoading.instance.openLoading()
            director.preloadScene(GameSceneName.Lobby, () => {
                director.loadScene(GameSceneName.Lobby)
            })
        }


        // PanelLoading.instance.openLoading()
    }

}