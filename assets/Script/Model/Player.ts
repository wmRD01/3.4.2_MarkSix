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

    gpgInfo: ResponseGPG.MyInfo.DataClass;
    gpgToken: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTA4ODUxMjIsImV4cCI6MTY5MzQ3NzEyMiwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY5MDg4NTEyMiwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiJEMkZBNjlCODU0MTg5RTU1RDgxRTZBM0YxMEIyQzczMiIsImlhdCI6MTY5MDg4NTEyMiwic2NvcGUiOlsibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiLCJyZXBvcnQucmVhZCIsInJlcG9ydC53cml0ZSJdLCJhbXIiOlsibWtfcGhvbmUiXX0.2rTfXZFUMqRBcU7gnEGg7WWYOEeb1w7XwBAnQR9SckDp4ksWgAO7wdqa7LDJnpqF3iHqPN2gYuXOgj75VXqkmkAewCAE-2CiszgftLVxIeviPPxO5qfhLslLamrqHYJKyF4BG7VTtrb_cr-efRBq-1h-3eMWnRSR-p3RVX_SvDtreVFAFQJ4azM-uI1-qi5xRLDKP9SIuEEqKJ2wMDc-_uShY1eu3lK0OutGOMc_BVYts74vVIMytEesW-IzFCKe02jStUcy-newFkxnHW_wqdWQF5U8v03CvU5nqo4ebu33838PpDmC5Pdo3M2xv7FjPp4UVUnIxxzg26GcvxL-VA"
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