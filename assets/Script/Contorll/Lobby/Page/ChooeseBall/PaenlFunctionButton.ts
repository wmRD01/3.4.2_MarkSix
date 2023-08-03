import { Button, Color, color, Sprite, _decorator } from 'cc';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import BaseComponent from '../../../../Model/ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('PaenlFunctionButton')
export default class PaenlFunctionButton extends BaseComponent {
    @property(Button)
    buttons: Button[] = []
    onLoad() {
        this.setEvent(LobbyStateEvent.ChangeBallButtonState, this.changeButtonState)
    }
    changeButtonState(isbool: boolean) {
        console.log(this);

        for (let index = 0; index < this.buttons.length; index++) {
            this.buttons[index].interactable = isbool
            if (!isbool)
                this.buttons[index].getComponent(Sprite).color = color().fromHEX("#818181")
            else
                this.buttons[index].getComponent(Sprite).color = Color.WHITE;
        }
    }
}