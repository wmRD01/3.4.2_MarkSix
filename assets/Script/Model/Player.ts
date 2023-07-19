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

    gpgInfo: ResponseGPG.MyInfo.DataClass = new ResponseGPG.MyInfo.DataClass();
    gpgToken: string = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2ODk3NTg4NzMsImV4cCI6MTY5MjM1MDg3MywiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY4OTc1ODg3MywiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiIxMDM4QkU5QTcyMDJFNTA2RkMxRTNDQ0QyMjNBNDI5MSIsImlhdCI6MTY4OTc1ODg3Mywic2NvcGUiOlsibWVtYmVyLmluZm8udXNlciJdLCJhbXIiOlsibWtfcGhvbmUiXX0.SJ5XYSfZBlhuGtAeRgtwEapeJthw9Lx-Gskfd2k9vZ-eqmYzvezS9VYYRzxZEHmUPDYowVzTng5vGkIhax_RmiVfHbE74IEdJ3hKXd35TiXxWwiokBr8NsevlK9LueychO2sH0TVQx5MTMHMDoEzc_M3mdnkrxpEvmr5Wz2PZ-qPI5ZfHiGvGaPSMVB9RxN10ZmtCTwxonSUI7tQCJOaquEm0Cvjwub69s62MaSZJ9Rz8m4fthfaTEgtfRXdmHdS4deFjMzPKEJPT29IULdkVoHF9BOGJAJRhxJM75hmL59kIFptt1MOz_7x6q7Gv7w_y6BvTzQOtQ56NVARQ9JA5Q"
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