import { director, game, _decorator } from "cc";
import BaseSingletonComponent from "../../Patten/Singleton/BaseSingletonComponent";
import PanelLoading from "../Contorll/NoClearNode/PanelLoading";
import { GameSceneName } from "../Enum/GameSenceName";
import { LangType } from "../Enum/LangType";
import AssetMng from "../Manager/AssetMng";
import EventMng from "../Manager/EventMng";
import LanguageManager from "../Manager/LanguageManager";
import MusicMng from "../Manager/MusicMng";
import GameData from "../Model/GameData";
import JudgePlatform from "../Model/JudgePlatform";
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
    async start() {
        PanelLoading.instance.openLoading()
        new JudgePlatform()
        LanguageManager.getInstance.startLoad(GameData.getInstance.gameID)
        await LanguageManager.getInstance.checkLanguage(LangType.Game)
        if (!PublicModel.getInstance.checkApp()) {
            director.preloadScene(GameSceneName.Lobby, () => {
                director.loadScene(GameSceneName.Lobby)
            })
            return
        }
        PanelLoading.instance.closeLoading()
    }



}