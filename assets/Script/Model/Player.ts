import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { CoinType } from "../Enum/CoinType";
import { PlayerIdentity } from "../Enum/PlayerIdentity";
import GameData from "./GameData";

export default class Player extends BaseSingleton<Player>() {
    // 基本參數
    account: string = '';
    memberId: string = '';      // 會員ID.
    nickname: string = '';     // 暱稱.
    photoID: number = 1;         // 預設頭像.
    photoPath: string = "";         // 上傳頭像路徑
    // scode: string = '';        // 推廣碼.
    pointGold: number = 0;       // 金幣
    pointSilver: number = 0;     // 銀幣

    password: string = ""

    identity: PlayerIdentity = PlayerIdentity.Member
    /// 相關資訊.
    // totalGame :string= '';    // 遊戲總局數.
    // winGame :string= '';      // 勝局數.
    // maxPrize :string= '';     // 最大底池.
    // maxPType :string= '';     // 最大牌型.
    // maxPInfo :string= '';     // 最大牌資訊.


    // pos: number = -1;          // 玩家入座位置(0~8), -1為尚未入座.
    // credit: number = 0;        // 遊戲剩餘籌碼.
    // bets: number = 0;          // 已下注籌碼.
    getPoint() {
        return GameData.getInstance.coinType == CoinType.Gold ? this.pointGold : this.pointSilver
    }
}