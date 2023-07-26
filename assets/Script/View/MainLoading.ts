import { game, js, sys, _decorator } from "cc";
import BaseSingletonComponent from "../../Patten/Singleton/BaseSingletonComponent";
import PanelLoading from "../Contorll/NoClearNode/PanelLoading";
import { GameEvent } from "../Enum/GameEvent";
import { GameSceneName } from "../Enum/GameSenceName";
import AssetMng from "../Manager/AssetMng";
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
    }
    start() {
        // PanelLoading.instance.openLoading()
    }

}