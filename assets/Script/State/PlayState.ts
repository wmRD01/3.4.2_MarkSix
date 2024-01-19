import { State } from "../../Patten/StatePatten";
import * as RP from "../Contorll/Api/ResponeCommand";
import { NotificationType } from "../Enum/NotificationType";
import { GameStateEvent } from "../Enum/GameStateEvent";
import EventMng from "../Manager/EventMng";
import PanelSystemMessage from "../Contorll/NoClearNode/PanelSystemMessage";
import SocketSetting from "../Socket/SocketSetting";
import { LangType } from "../Enum/LangType";
import { LobbyStateEvent } from "../Enum/LobbyStateEvent";
// /**自己入房 */
// export class OwnerInRoom extends State {
//     public changeState(data: RP.goin): void {
//     }

// }
/**自身下注 */
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
            PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t(data.code, LangType.ServerAPI))
        }
    }

}
