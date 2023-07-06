import { Label, Sprite, Tween, tween, _decorator } from "cc";
import MyMath from "../../../Plug/MyMath";
import { GameEvent } from "../../Enum/GameEvent";
import { GameStateEvent } from "../../Enum/GameStateEvent";
import BaseComponent from "../../Model/ComponentBase";
import PublicModel from "../../Model/PublicModel";
import { gs11 } from "../Api/ResponeCommand";
const { ccclass, property } = _decorator;
@ccclass('PanelTimer')
export default class PanelTimer extends BaseComponent {
    @property(Label)
    labelTime: Label;
    isStartTime: boolean
    currentTime: number
    onEnable() {
        this.setEvent(GameEvent.ResetView, this.allReset)
        this.setEvent(GameStateEvent.CloseBet, this.allReset)
        this.setEvent(GameStateEvent.OpenBet, this.setTimer)
        this.setEvent(GameStateEvent.UpdataSence, this.changeState)
    }

    start() {
        if (window.isPhone)
            this.phoneInit()
    }
    update(dt: number) {
        if (this.labelTime.node.active) {
            this.currentTime = MyMath.minus(this.currentTime, dt)
            let convetTime: string = PublicModel.getInstance.formatSecond(this.currentTime)
            this.labelTime.string = PublicModel.getInstance.formatSecond(this.currentTime)
            this.eventEmit(GameStateEvent.UpdateTime, convetTime)

            if (MyMath.minus(this.currentTime, dt) < 0) {
                this.eventEmit(GameStateEvent.UpdateTime, "0")
                this.labelTime.node.active = false
            }
        }
    }
    onDisable() {
        this.deletEvent(GameStateEvent.OpenBet, this.setTimer)
        this.deletEvent(GameStateEvent.CloseBet, this.allReset)
        this.deletEvent(GameEvent.ResetView, this.allReset)
        this.deletEvent(GameStateEvent.UpdataSence, this.changeState)
    }
    allReset() {
        this.labelTime.node.active = false
        Tween.stopAllByTarget(this.labelTime)
    }
    changeState(str: string) {
        this.labelState.string = str
    }

    setTimer(_gs11: gs11) {
        this.labelTime.node.active = true
        console.log("time設定", _gs11.betTime);
        this.currentTime = _gs11.betTime
        this.eventEmit(GameStateEvent.UpdateTime, this.currentTime.toString())
    }

}
