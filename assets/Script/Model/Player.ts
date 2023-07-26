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
    gpgToken: string = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTAxNzAxODIsImV4cCI6MTY5Mjc2MjE4MiwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjMyNCIsImF1dGhfdGltZSI6MTY5MDE3MDE4MiwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjIzMjQiLCJqdGkiOiJBNDlCMzAyNUQxMTQ3M0MxNERFQ0I4QkNDNjBFNUYyMiIsImlhdCI6MTY5MDE3MDE4Miwic2NvcGUiOlsibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiXSwiYW1yIjpbIm1rX3Bob25lIl19.N1iOb6EpmOCDWC9NebkYsOpXNNygXJH4qK5JtOEvr-GhJ6WZDi0RVnQF9svHRFXNL_xCzUXbJZbQhuxqLTcSffIy5-1h2hHYDoOUIa4I0nIbWyBT0-L-K1p2t_COaCiKrgFjE1qIhDFmSnGF6_XjMsCLYsL5ZASy-SnIz28tgGCNmKlpvsIM_rlvkwoQut3h66PrxVNToZ7HsUM3-8tuSWGFqnbgHBdnGPMH74LP3pesf7KWHIYp7fNj6u9mvo2SL5Y_8dmUKWF-0cHgwDLM-UC0PrjARv1eECTKVZFXnLhcp_uqCFm8-UHRA5hjIT5myvzYRQpGCsrBR7jYT-VAFg"
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