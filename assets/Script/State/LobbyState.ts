import * as RP from "../Contorll/Api/ResponeCommand";
import PublicData from "../Model/PublicData";
import { State } from "../../Patten/StatePatten";

import DelayTime from "../../Plug/DelayTime";

/**登入 */
export class AccountLogIn extends State {
    public changeState(data: RP.ln): void {
        /**連線成功設定心跳 */
        DelayTime.getInstance.SetGameHeartrate(PublicData.getInstance.heartTime);


    }
    /**快速入房的關係，因此得放在這邊 */

}
