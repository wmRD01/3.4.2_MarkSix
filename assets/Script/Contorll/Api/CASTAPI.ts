import { CASTCommandType } from "../../Enum/CASTCommandType";
import { NotificationType } from "../../Enum/NotificationType";
import { GameEvent } from "../../Enum/GameEvent";
import EventMng from "../../Manager/EventMng";

export class CASTAPI {
    connet() {
        window.addEventListener("message", this.onReceiveMessage, false);
    }
    send(cmd: string, data: object): void {
        console.log(cmd, data);
        // console.error("傳送封包喔", Packet);
        window.parent.postMessage(new Pakege(cmd, data), "*");
    }
    onReceiveMessage(event: Pakege | any): void {
        switch (event.cmd) {
            case CASTCommandType.Guest:
                break;
            case CASTCommandType.Orientation:
                EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(GameEvent.SetOrientation, event.data.orientation)
                break;
        }
    }
}

class Pakege {
    cmd: string
    data: object;
    constructor(_cmd: string, _data: object) {
        this.cmd = _cmd;
        this.data = _data
    }
}