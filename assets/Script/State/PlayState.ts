import { State } from "../../Patten/StatePatten";
import * as RP from "../Contorll/Api/ResponeCommand";
import { NotificationType } from "../Enum/NotificationType";
import { GameStateEvent } from "../Enum/GameStateEvent";
import EventMng from "../Manager/EventMng";
// /**自己入房 */
// export class OwnerInRoom extends State {
//     public changeState(data: RP.goin): void {
//     }

// }
/**自身下注 */
export class ChooeseBall extends State {
    public changeState(data: RP.bet): void {
        console.log("BET", data);

    }

}
