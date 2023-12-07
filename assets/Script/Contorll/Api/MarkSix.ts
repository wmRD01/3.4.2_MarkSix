import { MarkSixCommandType } from "../../Enum/MarkSixCommandType";

export class MarkSix {
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
            case MarkSixCommandType.contact:
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