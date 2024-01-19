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
    /**我的 */
    // gpgToken: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjcwMDUxNUM1NzJENDY0QzBDNjk0NDEzN0FDNkIyQjZDIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDM2NTAyMTUsImV4cCI6MTcwNjI0MjIxNSwiaXNzIjoiaHR0cHM6Ly9pZHMuZ29kcGxheS5hcHAiLCJjbGllbnRfaWQiOiJtYXJrX3NpeCIsInN1YiI6IjI5NDMiLCJhdXRoX3RpbWUiOjE3MDM2NTAyMTUsImlkcCI6ImxvY2FsIiwiTWVtYmVySUQiOiIyOTQzIiwianRpIjoiREFDNDYxNkI0QkNFQjU2MTJEMzFCOTI2MUNBRkJGQUMiLCJpYXQiOjE3MDM2NTAyMTUsInNjb3BlIjpbImdhbWUubGluayIsIm1hcms2LmRyYXcuaGlzdG9yeSIsIm1hcms2LnNjb3JlLnVzZXIiLCJtZW1iZXIuaW5mby51c2VyIiwicmVwb3J0LnJlYWQiLCJyZXBvcnQud3JpdGUiXSwiYW1yIjpbIm1rX3Bob25lIl19.Q9pLB0Ki71RcD8KLqMR0_PT5uEhdmo0t_3p6EN8lzjnhcmbIBCt_O0mF_s1bxerTsqpU9KcLtuBG0sgNDQGIqbbqjnrcdHkR2Bfpx8EsUMya5bMEaZjHySdyxebOaOCUwxCnedILIYPZiIgSEwr7kca15qOaSpForQEE7Ifz8nMD6idXoff3QxZlLQ9cIRbMfFLVkNhlsA_kgS0RkQCIWGz4BcI4qb8EtYL-cvezZKCov_ShNiHqYbcf5sZC8RKcrpMiWmjrQAkCbOWeQR4QwiTclK8jLqVpXKd5dgLORye5ulNPeH6ZNkfbrfRpC685kP60ka_rPkL4QS-nh2gVVw"
    /**HH */
    // gpgToken: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjcwMDUxNUM1NzJENDY0QzBDNjk0NDEzN0FDNkIyQjZDIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDQ5NjExNTQsImV4cCI6MTcwNzU1MzE1NCwiaXNzIjoiaHR0cHM6Ly9pZHMuZ29kcGxheS5hcHAiLCJjbGllbnRfaWQiOiJtYXJrX3NpeCIsInN1YiI6IjE4MTc4IiwiYXV0aF90aW1lIjoxNzA0OTYxMTU0LCJpZHAiOiJsb2NhbCIsIk1lbWJlcklEIjoiMTgxNzgiLCJqdGkiOiJFMjFEQjA0NDEwMTkxM0Q0QjU2OTNCMTg0MjBDMzRDMCIsImlhdCI6MTcwNDk2MTE1NCwic2NvcGUiOlsiZ2FtZS5saW5rIiwibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiLCJyZXBvcnQucmVhZCIsInJlcG9ydC53cml0ZSJdLCJhbXIiOlsibWtfcGhvbmUiXX0.XOFUxmyuOhl9hQYicfDiYowyFWHioyX0cXt_bYfCrnH6yi0NonXQl9Qj7Oi6oR1VQu-TNpxx02qNwpvSBnOyrC251tp-rll0WkxlzIrz3wLok3SLqyWO75hHyL1leNHhwu6RkuoRsStZe06igcMS6fe4OsFksdEtDPfX8OzCJTe-io_A60OLz3g5kaaD1CUfw6f4_cm94BuMItjtIL6nS2cj6xtBOvgSS6ZB21Aj7AnbdhQZ06sT5SuGeiMOmCTpU_VXJCP01NC7VjoG7H14RsQafLUEyjtPyS-6fYTk3IYEyn0leI5T0ijxv3J2SgE7UBFqZW2sflrAyCjkYag0Gw"
    gpgToken: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDU2NTQ2NzAsImV4cCI6MTcwODI0NjY3MCwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiMjcyNzUiLCJhdXRoX3RpbWUiOjE3MDU2NTQ2NzAsImlkcCI6ImxvY2FsIiwiTWVtYmVySUQiOiIyNzI3NSIsImp0aSI6IkE0QzEyNUI3M0Q3RTc2NjVCQTA1NUY1M0M3RjQ0MThGIiwiaWF0IjoxNzA1NjU0NjcwLCJzY29wZSI6WyJnYW1lLmxpbmsiLCJtYXJrNi5kcmF3Lmhpc3RvcnkiLCJtYXJrNi5zY29yZS51c2VyIiwibWVtYmVyLmluZm8udXNlciIsInJlcG9ydC5yZWFkIiwicmVwb3J0LndyaXRlIl0sImFtciI6WyJta19yZWdpc3RlciJdfQ.k0x-UjgTsGOtKaMh72BBkKvPQ1Len7R4Rd3OHEwA3Q4bgIfYz9auol3sjGjK9uyXvp4E_St5ynPRr70_atCcIowsiwYGOAoBcJlKKRJeXOvQFjp1JNleHDpR9rKg5nDGgvYOpRXiNUQ4xONc3E2c1EwRtf2KsF4fSI5iA6MVBxjUF6sM1KVTKV8HTNQdBgS8pDWjKw9XJkEkcT-MGJJ5QPXnweBAv6mvkc--iZSDJpfnq93hE-Snh8Z2z0Xpk3JyVq3Bf-bW3nE0Pd_kY8_d51X1UEavS8-AKmacfZ2FihUB5EUOeBGC8wyjyPgPwHugRWA_4Rr4NoQ6ludXm-baNQ"

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