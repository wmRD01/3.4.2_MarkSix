import PanelUI from '../Contorll/GameRoom/UI/PanelUI';
import { _decorator, director, Game, game, find, js, Node, profiler, setDisplayStats } from 'cc';
import { CommandType } from '../Enum/CommandType';
import { LangType } from '../Enum/LangType';
import { CheckLoadingType } from '../Enum/CheckLoadingType';
import PublicData from '../Model/PublicData';
import { WebSocketEvent } from '../Enum/WebSocketEvent';
import CheckLoading from '../Model/CheckLoading';
import BaseSingletonComponent from '../../Patten/Singleton/BaseSingletonComponent';
import { GameSceneName } from '../Enum/GameSenceName';
import { gbet } from '../Contorll/Api/SendCommand';
import SocketSetting from '../Socket/SocketSetting';
import { GameEvent } from '../Enum/GameEvent';

import PanelClientCoin from '../Contorll/Lobby/PanelClientCoin';
import PanelGameMessage from '../Contorll/Lobby/PanelGameMessage';
import PanelTimer from '../Contorll/Lobby/PanelTimer';

import PanelLoading from '../Contorll/NoClearNode/PanelLoading';
import SingletManager from '../../Patten/Singleton/SingletonManger';
import { DEV } from 'cc/env';
import PanelTextAnimation from '../Contorll/GameRoom/PanelTextAnimation/PanelTextAnimation';
import AssetMng from '../Manager/AssetMng';
import { AssetType } from '../Enum/AssetType';
import Player from '../Model/Player';
import { PlayerIdentity } from '../Enum/PlayerIdentity';
import CanvasControll from '../Contorll/NoClearNode/CanvasControll';

const { ccclass, property } = _decorator;

@ccclass('MainGame')
export class MainGame extends BaseSingletonComponent<MainGame>() {

    @property(PanelClientCoin)
    panelClientCoin: PanelClientCoin
    @property(PanelGameMessage)
    panelGameMessage: PanelGameMessage

    @property(PanelTimer)
    panelTimer: PanelTimer

    @property(PanelUI)
    panelUI: PanelUI;

    @property(PanelTextAnimation)
    panelTextAnimation: PanelTextAnimation;
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
        this.setEvent(GameEvent.SetOrientation, this.eventOrientation)
    }
    /**
     * 測試內存
     */
    async start() {
        //建立連線
        this.eventEmit(GameEvent.ResetView)
        await SocketSetting.checkLanguage(LangType.Server)
        await SocketSetting.checkLanguage(LangType.Game)
        PanelLoading.instance.openLoading(SocketSetting.t("E_0004", LangType.Game))
        PublicData.getInstance.isResetProcessing = true
        PublicData.getInstance.isResetView = true;
        /**初始化全部語系 */
        for (let index = 0; index < PublicData.getInstance.arr_ComponentBaseClass.length; index++) {
            PublicData.getInstance.arr_ComponentBaseClass[index].setLanguage()
        }
        /** forCAST用 */
        if (Player.getInstance.identity == PlayerIdentity.Guest) {
            this.panelClientCoin.hide()
            this.panelUI.hide()
            CanvasControll.instance.node.on(Node.EventType.TOUCH_END, this.eventPushNotificationGuset, this)
        }
        await AssetMng.waitStateCheck(AssetType.Sprite)
        await AssetMng.waitStateCheck(AssetType.Music)
        await CheckLoading.getInstance.checkAllEnd()

        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gori)

    }
    onDisable() {
        this.deletEvent(GameEvent.SetOrientation, this.eventOrientation)
    }
    onDestroy() {
        /**清除之前資料 */
        PublicData.getInstance.arr_ComponentBaseClass.length = 0
        SingletManager.instance.delete(js.getClassName(this))
    }
    eventOrientation(str: string) {
        /**如果當前是橫版且接收到字串為橫 */
        if (PublicData.getInstance.isLandscape && str == "portrait")
            PublicData.getInstance.isLandscape = false
        else if (!PublicData.getInstance.isLandscape && str == "landscape")
            PublicData.getInstance.isLandscape = true
        else return
        director.loadScene(GameSceneName.GameRoom)
    }
    backLobby() {
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.pwlby);
        director.loadScene(GameSceneName.Lobby)
    }
    eventPushNotificationGuset() {
        // console.error("送?");
        PublicData.getInstance.castAPI.send("guest", {})
    }

    /**以下測試 */


    onRefreshRoomState() {
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gori);
    }
    /**下注清除 */
    onBetClear() {

        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gbcl);
    }
    /**自身下注 */
    onOwnerBet() {
        for (let index = 0; index < 30; index++) {
            let temp = new gbet()
            temp.chip = 100
            temp.kind = Math.floor(Math.random() * 5)
            this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gbet, temp);
        }
    }
    /**下注確認 */
    onBetCheck() {
        //這要做什麼?
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gbcf);
    }
    /**參照上一局下注 */
    onReferLastBet() {
        //假設第一局我依然要傳給leo?還是要我們檔? 照傳
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gbrt);
    }
    /**瞇牌過程 */
    onSquintProcess() {

    }
    /**瞇牌結束 */
    onSquintEnd() {
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gpe);
    }
    onResestPC() {
        window.isPhone = false
        director.loadScene(GameSceneName.GameRoom)
    }
    onResetPhoneLandscape() {
        window.isPhone = true
        PublicData.getInstance.isLandscape = true
        director.loadScene(GameSceneName.GameRoom)
    }
    onResetPhonePortrait() {
        window.isPhone = true
        PublicData.getInstance.isLandscape = false
        director.loadScene(GameSceneName.GameRoom)
    }

}

