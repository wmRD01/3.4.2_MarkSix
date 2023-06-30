import { _decorator } from "cc";
import { GameEvent } from "../../../Enum/GameEvent";
import { GameStateEvent } from "../../../Enum/GameStateEvent";
import BaseComponent from "../../../Model/ComponentBase";

import UIBetFunctionButton from "./UIBetFunctionButton";
const { ccclass, property } = _decorator;
@ccclass('PanelUI')
export default class PanelUI extends BaseComponent {

    @property(UIBetFunctionButton)
    uiBetFunctionButton: UIBetFunctionButton
    onEnable() {
        this.setEvent(GameEvent.ResetView, this.allReset)
        this.setEvent(GameStateEvent.OpenBet, this.openBet)
        this.setEvent(GameStateEvent.CloseBet, this.closeBet)
    }

    onDisable() {
        this.deletEvent(GameEvent.ResetView, this.allReset)
        this.deletEvent(GameStateEvent.OpenBet, this.openBet)
        this.deletEvent(GameStateEvent.CloseBet, this.closeBet)
    }


    allReset() {
        this.closeBet()
    }
    openBet() {
        this.uiBetFunctionButton.show()
    }
    closeBet() {
        this.uiBetFunctionButton.hide()
    }
}