import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { CoinType } from "../Enum/CoinType";
import { GameType } from "../Enum/GameType";

export default class GameData extends BaseSingleton<GameData>() {
    gameID: number = 50003; // 遊戲ID.
    contentId: string = "10";
    roomNo: number = 1001
    coinType: CoinType = CoinType.Gold;
    gameType: GameType = GameType.Normal;
    exChangeLib: Array<string> = ["1000", "5000", "MAX"]
    //測試用，實際依照Server傳遞
    wallet: number;
    language: string;
    currentChip: number = 0;
    isFastInGame: boolean = true;
    bankerPeekSeatID: number;
    playerPeekSeatID: number;


}