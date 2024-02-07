import { State } from "../../Patten/StatePatten";
import * as RP from "../Contorll/Api/ResponeCommand";
import PanelSystemMessage from "../Contorll/NoClearNode/PanelSystemMessage";
import { LangType } from "../Enum/LangType";
import { LobbyStateEvent } from "../Enum/LobbyStateEvent";
import { NotificationType } from "../Enum/NotificationType";
import EventMng from "../Manager/EventMng";
import LanguageManager from "../Manager/LanguageManager";
// /**自己入房 */
// export class OwnerInRoom extends State {
//     public changeState(data: RP.goin): void {
//     }

// }
export class ChooeseBall extends State {
    public changeState(data: RP.bet): void {
        console.log("BET", data);
        if (data.code == "0") {
            EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(LobbyStateEvent.AttackBall)
        }
        else {
            if (data.betCode != null)
                EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(LobbyStateEvent.UpDateBall, data)
            else {
                EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(LobbyStateEvent.ChangeBallButtonState, true)
                EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(LobbyStateEvent.ChangeConfirmState, false)
            }
            PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t(data.code, LangType.ServerAPI))
        }
    }

}
