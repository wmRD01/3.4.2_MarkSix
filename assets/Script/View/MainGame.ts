import PanelUI from '../Contorll/Lobby/PanelBottomNavigationBar';
import { _decorator, director, Game, game, find, js, Node, profiler, setDisplayStats } from 'cc';
import { CheckLoadingType } from '../Enum/CheckLoadingType';
import PublicData from '../Model/PublicData';
import CheckLoading from '../Model/CheckLoading';
import BaseSingletonComponent from '../../Patten/Singleton/BaseSingletonComponent';
import { GameSceneName } from '../Enum/GameSenceName';

import PanelGameMessage from '../Contorll/Lobby/PanelGameMessage';

import PanelLoading from '../Contorll/NoClearNode/PanelLoading';
import SingletManager from '../../Patten/Singleton/SingletonManger';
import { DEV } from 'cc/env';

const { ccclass, property } = _decorator;

@ccclass('MainGame')
export class MainGame extends BaseSingletonComponent<MainGame>() {

    @property(PanelGameMessage)
    panelGameMessage: PanelGameMessage


    @property(PanelUI)
    panelUI: PanelUI;

    onLoad(): void {
        // console.error(DEV);

        if (DEV) {
            // Player.getInstance.identity = PlayerIdentity.Guest
            // window.isPhone = true
        }

        find("Canvas/PanelTest").active = DEV
        /**測試功能 */
        CheckLoading.getInstance.endWork(CheckLoadingType.isGameSence)
        PublicData.getInstance.currentScene = GameSceneName.GameRoom
        super.onLoad()
        PublicData.getInstance.isResetView = true
        PanelLoading.instance.closeLoading()
        /**由於Panel是動態仔入，因此得用Find去抓，或者....再想想，因為在介面上操作的話等於是寫死(? */
        // this.panelTable = find("3DNode/PanelTable").getComponent(PanelTable)
        // this.panelBetState = find("Canvas/PanelBetState").getComponent(PanelBetState)
        // this.panelShowdownResult = find("Canvas/PanelShowdownResult").getComponent(PanelShowdownResult)
        // this.panelClientCoin = find("Canvas/PanelClientCoin").getComponent(PanelClientCoin)
        // this.panelGameMessage = find("Canvas/PanelGameMessage").getComponent(PanelGameMessage)
        // this.panelLimitBet = find("Canvas/PanelLimitBet").getComponent(PanelLimitBet)
        // this.panelTimer = find("Canvas/PanelTimer").getComponent(PanelTimer)
        // this.panelUI = find("Canvas/PanelUI").getComponent(PanelUI)
        // this.panelCardSequence = find("Canvas/PanelCardSequence").getComponent(PanelCardSequence)
        // this.panelShuffleCard = find("Canvas/PanelShuffleCard").getComponent(PanelShuffleCard)



    }
    onEnable() {
        // this.setEvent(GameEvent.SetOrientation, this.eventOrientation)
    }
    /**
     * 測試內存
     */
    async start() {
        //建立連線
        // this.eventEmit(GameEvent.ResetView)
        // await SocketSetting.checkLanguage(LangType.Server)
        // await SocketSetting.checkLanguage(LangType.Game)
        // PanelLoading.instance.openLoading(SocketSetting.t("E_0004", LangType.Game))
        // PublicData.getInstance.isResetProcessing = true
        // PublicData.getInstance.isResetView = true;
        // /**初始化全部語系 */
        // for (let index = 0; index < PublicData.getInstance.arr_ComponentBaseClass.length; index++) {
        //     PublicData.getInstance.arr_ComponentBaseClass[index].setLanguage()
        // }
        // /** forCAST用 */
        // if (Player.getInstance.identity == PlayerIdentity.Guest) {
        //     this.panelUI.hide()
        //     CanvasControll.instance.node.on(Node.EventType.TOUCH_END, this.eventPushNotificationGuset, this)
        // }
        // await AssetMng.waitStateCheck(AssetType.Sprite)
        // await AssetMng.waitStateCheck(AssetType.Music)
        // await CheckLoading.getInstance.checkAllEnd()

        // this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gori)

    }
    onDisable() {

    }
    onDestroy() {
        /**清除之前資料 */
        PublicData.getInstance.arr_ComponentBaseClass.length = 0
        SingletManager.instance.delete(js.getClassName(this))
    }


}

