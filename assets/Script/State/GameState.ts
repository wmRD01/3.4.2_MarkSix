import * as RP from "../Contorll/Api/ResponeCommand";
import MusicMng from "../Manager/MusicMng";
import { State } from "../../Patten/StatePatten";
import GameData from "../Model/GameData";
import EventMng from "../Manager/EventMng";
import { GameStateEvent } from "../Enum/GameStateEvent";
import PublicModel from "../Model/PublicModel";
import { MainGame } from "../View/MainGame";
import RoomData from "../Model/RoomData";

import { GameEvent } from "../Enum/GameEvent";
import { TextAnimationType } from "../Enum/TextAnimationType";
import { EffectType } from "../Enum/EffectType";

// var _mainGame: MainGame;

export class RefreshTabelData extends State {

    public changeState(data: RP.gbal): void {
        EventMng.emit(GameStateEvent.UpdateTabelData, data)
    }
}

export class RefreshRoomState extends State {

    public changeState(data: RP.ggs): void {
        RoomData.getInstance.roomStatus = data.status
        RoomData.getInstance.roomTime = data.time
        switch (RoomData.getInstance.roomStatus) {
            case 0:
                EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.WAITING)
                break;
            // case 1:
            //     EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.START)
            //     break;
            case 2:
                EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.FINISH)
                break;

        }
    }
}


export class WaitOrEnd extends State {
    public changeState(data: RP.gs1): void {
        EventMng.emit(GameEvent.ResetView)
        switch (RoomData.getInstance.roomStatus) {
            case 0:
                MusicMng.effectPlay(EffectType.AwaitingStart)
                EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.WAITING)
                break;
            // case 1:
            //     EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.START)
            //     break;
            case 2:
                MusicMng.effectPlay(EffectType.GameOver)
                EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.FINISH)
                break;

        }
    }
}
/**一靴重啟 */
export class StartBoot extends State {
    public changeState(data: RP.gs8): void {
        /**無法使用監聽，避免玩家如果尚未開啟畫面導致無法清理畫面 */
        RoomData.getInstance.records = []
        RoomData.getInstance.sequenceID = data.sequenceID
        EventMng.emit(GameEvent.ResetView)

        // MainGame.instance.panelCardSequence.subDerailRoad.allClear()
        // MainGame.instance.panelCardSequence.subSimpleRoad.allClear()
    }
}
/**洗牌 */
export class ShuffleCrads extends State {
    public changeState(data: RP.gs9): void {


    }
}
export class OpenNewGame extends State {
    public changeState(data: RP.gs10): void {

        //設定局號
    }
}

export class ReadyBet extends State {
    public changeState(data: RP.gs11): void {
        console.log("進進了Ready", data);
        MusicMng.effectPlay(EffectType.StartBetting)
        EventMng.emit(GameStateEvent.TextAnimation, TextAnimationType.START)
        GameData.getInstance.bankerPeekSeatID = 0
        GameData.getInstance.playerPeekSeatID = 0
        EventMng.emit(GameStateEvent.OpenBet, data)
        // if (DEV)
        // setTimeout(() => {
        // let temp = new gbcf()
        // EventMng.emit(WebSocketEvent.WebSocketSendCommand, CommandType.gbcf, temp)

        // }, 3000);
        return
        MusicMng.musicPlay("bg_01");
        MusicMng.effectPlay("new_round");


    }
}

export class CloseBet extends State {
    public changeState(data: RP.gs12) {
        MusicMng.effectPlay(EffectType.StopBetting)
        EventMng.emit(GameStateEvent.CloseBet)
        EventMng.emit(GameStateEvent.UpdateTabelData, data)
    }
}
/**發牌 */
export class SendCards extends State {
    public changeState(data: RP.gs13): void {

        GameData.getInstance.bankerPeekSeatID = data.bankerPeekSeatID
        GameData.getInstance.playerPeekSeatID = data.playerPeekSeatID
    }

}

export class PlayerSendCardSquintStart extends State {
    public changeState(data: RP.gs14): void {
        EventMng.emit(GameStateEvent.SquintCard, data)
    }

}
export class PlayerSendCardSquintEnd extends State {
    public changeState(data: RP.gs15): void {
        EventMng.emit(GameStateEvent.ShowdownCard, data)

    }

}
export class BankerSendCardSquintStart extends State {
    public changeState(data: RP.gs16): void {
        EventMng.emit(GameStateEvent.SquintCard, data)
    }

}
export class BankerSendCardSquintEnd extends State {
    public changeState(data: RP.gs17): void {

        EventMng.emit(GameStateEvent.ShowdownCard, data)
    }

}

export class PlayerRepairCard extends State {
    public changeState(data: RP.gs18): void {

    }

}
export class PlayerRepairCardSquintStart extends State {
    public changeState(data: RP.gs19): void {
        EventMng.emit(GameStateEvent.SquintCard, data)
    }


}
export class PlayerRepairCardSquintEnd extends State {
    public changeState(data: RP.gs20): void {

        EventMng.emit(GameStateEvent.ShowdownCard, data)
    }

}
export class BankerRepairCard extends State {
    public changeState(data: RP.gs21): void {

    }

}
export class BankerRepairCardSquintStart extends State {
    public changeState(data: RP.gs22): void {
        EventMng.emit(GameStateEvent.SquintCard, data)
    }

}
export class BankerRepairCardSquintEnd extends State {
    public changeState(data: RP.gs23): void {

        EventMng.emit(GameStateEvent.ShowdownCard, data)
    }

}

export class ShowResoult extends State {
    public changeState(data: RP.gs24): void {
        EventMng.emit(GameStateEvent.UpdateCoin, data.owner.credit)
        EventMng.emit(GameStateEvent.RoundResult, data)
    }
}

export class EndRound extends State {
    public changeState(data: RP.gs25): void {
        EventMng.emit(GameStateEvent.EndRound)
    }
}
export class EndBoot extends State {
    public changeState(data: RP.gs30): void {
        EventMng.emit(GameStateEvent.EndBoot)
    }
}