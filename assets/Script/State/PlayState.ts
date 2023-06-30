import { State } from "../../Patten/StatePatten";
import * as RP from "../Contorll/Api/ResponeCommand";
import { GameStateEvent } from "../Enum/GameStateEvent";
import EventMng from "../Manager/EventMng";
// /**自己入房 */
// export class OwnerInRoom extends State {
//     public changeState(data: RP.goin): void {
//     }

// }
/**自身下注 */
export class OwnerBet extends State {
    public changeState(data: RP.gbet): void {
        if (data.code == 0) {
            EventMng.emit(GameStateEvent.UpdateCoin, data.credit)
            EventMng.emit(GameStateEvent.ClientBet, data)
        }
    }

}

/**下注清除 */
export class ClearBet extends State {
    public changeState(data: RP.gbcl): void {
        EventMng.emit(GameStateEvent.BetClear)
        EventMng.emit(GameStateEvent.UpdateCoin, data.credit)
    }

}
/**還原下注 */
export class BackBet extends State {
    public changeState(data: RP.gbbk): void {
        if (data.kind == -1) return
        EventMng.emit(GameStateEvent.BackBet, data)
    }

}
/**參照上一局下注 */
export class ReferLastBet extends State {
    public changeState(data: RP.gbrt): void {
    }

}
/**瞇牌過程 */
export class SquintProcess extends State {
    public changeState(data: RP.gpp): void {
    }

}
/**瞇牌結束 */
export class SquintEnd extends State {
    public changeState(data: RP.gpe): void {
    }
}


export class UpdateCoin extends State {
    public changeState(data: RP.gonm): void {
        EventMng.emit(GameStateEvent.UpdateCoin,data.money)
    }
}

