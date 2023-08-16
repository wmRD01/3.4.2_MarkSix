import * as RP from "../Contorll/Api/ResponeCommand";
import PublicData from "../Model/PublicData";
import { State } from "../../Patten/StatePatten";

import DelayTime from "../../Plug/DelayTime";
import { CheckLoadingType } from "../Enum/CheckLoadingType";
import EventMng from "../Manager/EventMng";
import { NotificationType } from "../Enum/NotificationType";
import { LobbyStateEvent } from "../Enum/LobbyStateEvent";

/**登入 */
export class AccountLogIn extends State {
    public changeState(data: RP.ln): void {
        /**連線成功設定心跳 */
        DelayTime.getInstance.SetGameHeartrate(PublicData.getInstance.heartTime);
        EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(LobbyStateEvent.UpDateBall, data)
    }
    /**快速入房的關係，因此得放在這邊 */

}
