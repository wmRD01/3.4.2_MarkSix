import { find } from "cc";
import { State } from "../../Patten/StatePatten";
import PanelSystemMessage from "../Contorll/NoClearNode/PanelSystemMessage";
import { NotificationType } from "../Enum/NotificationType";
import { GameStateEvent } from "../Enum/GameStateEvent";
import EventMng from "../Manager/EventMng";
import ButtonFunctionApi from "../Model/ButtonFunctionApi";

export class ShowConfirmMessage extends State {
    public changeState(caption: string): void {
        // if (PanelSystemMessage.instance.node.active) PanelSystemMessage.instance.setCaption(caption)
        // else {
        // PanelSystemMessage.instance.messageInit(caption)
        // PanelSystemMessage.instance.showSingleConfirm();
        // 在這轉彎成Gamemessage 就得不用了
        // }
        EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(GameStateEvent.GameMessage, caption)
    }

}

export class BackHomeMessage extends State {
    public changeState(caption: string): void {
        console.log(PanelSystemMessage.instance);

        if (PanelSystemMessage.instance.node.active) PanelSystemMessage.instance.setCaption(caption)
        else {
            PanelSystemMessage.instance.messageInit(caption)
            //引用會有循環問題
            let confirmBtn = new ButtonFunctionApi()
            confirmBtn.target = find("GameWebSocekt").getComponent("GameWebSocket")
            confirmBtn.callback = "onCloseWindow"
            PanelSystemMessage.instance.showSingleConfirm(confirmBtn);
        }
    }
}

export class DefaultlMessage extends State {
    public changeState(caption: string): void {
        PanelSystemMessage.instance.messageInit(caption)
    }

}