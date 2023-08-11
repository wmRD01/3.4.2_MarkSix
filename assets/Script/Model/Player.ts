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
    gpgToken: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTExMzg5ODMsImV4cCI6MTY5MzczMDk4MywiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiNTc3OSIsImF1dGhfdGltZSI6MTY5MTEzODk4MywiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjU3NzkiLCJqdGkiOiI1QTRFMjJBMTFBQ0FBMEQ3NjBBNjhDODBCREUzMEIzRiIsImlhdCI6MTY5MTEzODk4Mywic2NvcGUiOlsiZ2FtZS5saW5rIiwibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiLCJyZXBvcnQucmVhZCIsInJlcG9ydC53cml0ZSJdLCJhbXIiOlsibWtfcGhvbmUiXX0.skZgevtRPTpG34oXrcKT8tkaOqxlUGxuQ4rEceBiz6vV1uFu8JhLkfF5CRTGaQXMgfrG3tMCErp5iebQwsKMZFGJJEFaWy53oGVhFeTIPTY9E9zwA0I3RTRULRqC30IKhlSZQ7nzISyK4aqgRVT7TZBXQyeIg3dKH8rU9DucyqMdJN2rmKceKMRRn9mJEAcJuH2l8QMAMoN6VqMOsv_yrNs4d_UGB8-pl1q9kcjjWn3upQKzRMYuo1TX6iEEBWHe78PomJzyZZ5v6KVXBl8NVOFpi9_ddQ42TsXWIFTE2v8JG-_8ELeQu8wVigvKYzCZzHRrmbp8ZH3ogrQxMIjQTw"
    // gpgToken: string = "eyJhbGciOi123123CI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTExMzg5ODMsImV4cCI6MTY5MzczMDk4MywiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiNTc3OSIsImF1dGhfdGltZSI6MTY5MTEzODk4MywiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjU3NzkiLCJqdGkiOiI1QTRFMjJBMTFBQ0FBMEQ3NjBBNjhDODBCREUzMEIzRiIsImlhdCI6MTY5MTEzODk4Mywic2NvcGUiOlsiZ2FtZS5saW5rIiwibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiLCJyZXBvcnQucmVhZCIsInJlcG9ydC53cml0ZSJdLCJhbXIiOlsibWtfcGhvbmUiXX0.skZgevtRPTpG34oXrcKT8tkaOqxlUGxuQ4rEceBiz6vV1uFu8JhLkfF5CRTGaQXMgfrG3tMCErp5iebQwsKMZFGJJEFaWy53oGVhFeTIPTY9E9zwA0I3RTRULRqC30IKhlSZQ7nzISyK4aqgRVT7TZBXQyeIg3dKH8rU9DucyqMdJN2rmKceKMRRn9mJEAcJuH2l8QMAMoN6VqMOsv_yrNs4d_UGB8-pl1q9kcjjWn3upQKzRMYuo1TX6iEEBWHe78PomJzyZZ5v6KVXBl8NVOFpi9_ddQ42TsXWIFTE2v8JG-_8ELeQu8wVigvKYzCZzHRrmbp8ZH3ogrQxMIjQTw"
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