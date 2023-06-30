import { Button, Label, Node, UITransform, Vec3, _decorator } from "cc";
import { CommandType } from "../../Enum/CommandType";
import { GameStateEvent } from "../../Enum/GameStateEvent";
import { WebSocketEvent } from "../../Enum/WebSocketEvent";
import ButtonMng from "../../Manager/ButtonMng";
import BaseComponent from "../../Model/ComponentBase";
import Player from "../../Model/Player";
import PublicData from "../../Model/PublicData";
import PublicModel from "../../Model/PublicModel";
import { gonm } from "../Api/SendCommand";
import GameData from "../../Model/GameData";
import { CoinType } from "../../Enum/CoinType";
const { ccclass, property } = _decorator;
@ccclass('PanelClientCoin')
export default class PanelClientCoin extends BaseComponent {
    @property(Label)
    labelCoin: Label;
    @property(Button)
    btnUpdataCoin: Button
    onEnable() {
        // this.setEvent(GameEvent.ResetView, this.updateCoin)
        this.setEvent(GameStateEvent.UpdateCoin, this.updateCoin)
        ButtonMng.addEvent(this, "onUpdataCoin", this.btnUpdataCoin)
    }
    start() {
        // if (window.isPhone)
        //     this.phoneInit()
        this.adaptiveControlFrame()
    }

    onDisable() {
        this.deletEvent(GameStateEvent.UpdateCoin, this.updateCoin)
        ButtonMng.removeEvent(this.btnUpdataCoin, "onUpdataCoin")
    }
    updateCoin(num?: number) {
        // console.warn("金錢更新",num);

        if (isNaN(Number(num)))
            this.labelCoin.string = ""
        else {
            console.warn(num);
            console.warn(PublicModel.getInstance.changeKMB(num, 1));

            this.labelCoin.string = PublicModel.getInstance.changeKMB(num, 1);
            /**偷吃步作法，先這樣了等有時間在優化 */
            GameData.getInstance.coinType == CoinType.Gold ? Player.getInstance.pointGold = num : Player.getInstance.pointSilver = num

        }
    }
    onUpdataCoin(e: Event, customEventData?: string) {
        this.eventEmit(WebSocketEvent.WebSocketSendCommand, CommandType.gonm, new gonm())
    }

    adaptiveControlFrame() {
        if (window.isPhone) {
            this.node.setPosition(0, -179.41)
            // if (!PublicData.getInstance.isLandscape) {
            //     this.node.setScale(3.01, 3.01, 3.01)
            //     this.node.setPosition(356, 416)
            // }
            // else {
            //     this.node.setScale(Vec3.ONE)
            //     this.node.setPosition(-715.5, -139)
            // }
        }
    }

}
