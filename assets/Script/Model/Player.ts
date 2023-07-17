import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { ResponseGPG } from "../Contorll/Api/GPGAPI/ResponseGPG";
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

    gppInfo: ResponseGPG.MyInfo.DataClass;
    gpgToken :string ="Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODkxMjkzNjEsImV4cCI6MTY5MTcyMTM2MSwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY4OTEyOTM2MSwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiI3RkNCM0QzQ0NDOUE3MjRGOUQ5M0YwNDZDMjNGODA1NCIsImlhdCI6MTY4OTEyOTM2MSwic2NvcGUiOlsibWVtYmVyLmluZm8udXNlciJdLCJhbXIiOlsibWtfcGhvbmUiXX0.agzZ_DHtp_dQQKfa1fRhJRwQAh8NnLk98jmqspD8RrnRq5TNqE-dTaf-53d61BraahHl2IO6qwPRk7wJr_RP6nuWYcoiVj4k3WGYG1qnpjuYA5vlq1Iyq2pPIr4eNq2pRV9mJAdKzsMVi1zVi5s7tz38sjpr470xa4QL4zXLluGIg-562pqnSAOtKiPQhCoCAzPSixI16BM3Ite90kw3a3gTcP_m7jA-ELfZxwS-pTHHSqQzhBTqCeMQk9uC3Rcuook_SseYN7cJoYOi_oc0wnNoMhalyLMbdhZKcktAMJ6ExuN0fj_RIxvAJT4lJrQictihPBE43qe7djkWV9uRUQ"
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