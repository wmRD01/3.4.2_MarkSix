import { State } from "../../Patten/StatePatten";
import PanelSystemMessage from "../Contorll/NoClearNode/PanelSystemMessage";
import { GameStateEvent } from "../Enum/GameStateEvent";
import { NotificationType } from "../Enum/NotificationType";
import { WebSocketEvent } from "../Enum/WebSocketEvent";
import EventMng from "../Manager/EventMng";

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
            //引用會有循環問題
            PanelSystemMessage.instance.showSingleConfirm(caption, () => {
                EventMng.getInstance.emit(NotificationType.Pulic, WebSocketEvent.CloseWindow)
            });
        }
    }
}

export class DefaultlMessage extends State {
    public changeState(caption: string): void {
        PanelSystemMessage.instance.showSingleConfirm(caption);
    }

}