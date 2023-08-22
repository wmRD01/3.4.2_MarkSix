import { Button, Color, color, Sprite, _decorator } from 'cc';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import BaseComponent from '../../../../Model/ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('PaenlFunctionButton')
export default class PaenlFunctionButton extends BaseComponent {
    @property({ type: Button, tooltip: "0:重選,1:隨機選號,2:確認" })
    buttons: Button[] = []
    onLoad() {
        this.setEvent(LobbyStateEvent.ChangeBallButtonState, this.changeButtonState)
        this.setEvent(LobbyStateEvent.ChangeConfirmState, this.changeConfirmState)
    }
    changeButtonState(isbool: boolean) {
        console.log(this);

        for (let index = 0; index < this.buttons.length; index++) {
            this.buttons[index].interactable = isbool
            // if (!isbool)
            //     this.buttons[index].getComponent(Sprite).color = color().fromHEX("#818181")
            // else
            //     this.buttons[index].getComponent(Sprite).color = Color.WHITE;
        }
    }
    changeConfirmState(isbool: boolean) {
        this.buttons[2].interactable = isbool
    }
}