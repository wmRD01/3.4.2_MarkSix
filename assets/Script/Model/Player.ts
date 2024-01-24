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
    gpgToken: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMkVFRDgwNzBBMEY5RkIzRUI3RDc3RkU3NjAxMTU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDU2NTkzMDksImV4cCI6MTcwODI1MTMwOSwiaXNzIjoiaHR0cHM6Ly9pZHMuY2Vpcy50dyIsImNsaWVudF9pZCI6Im1hcmtfc2l4Iiwic3ViIjoiNjE3OSIsImF1dGhfdGltZSI6MTcwNTY1OTMwOSwiaWRwIjoibG9jYWwiLCJNZW1iZXJJRCI6IjYxNzkiLCJqdGkiOiJCNUUyNkYyNzgwQzUwM0I5Q0UwM0UxRTM2MUMwQkQwQiIsImlhdCI6MTcwNTY1OTMwOSwic2NvcGUiOlsiZ2FtZS5saW5rIiwibWFyazYuZHJhdy5oaXN0b3J5IiwibWFyazYuc2NvcmUudXNlciIsIm1lbWJlci5pbmZvLnVzZXIiLCJyZXBvcnQucmVhZCIsInJlcG9ydC53cml0ZSJdLCJhbXIiOlsibWtfcGhvbmUiXX0.D14ZTBlCI-BBI5NmgVOUnUZfDAnD4VAvh--23-ryUhGnVI_UzvfRxS5B4Du6R7XQ2gTvorDpom74QDoLTvFOI9rKHRYtw2JjP3m3r1Dj2gpx8PBqmnrw9vfFw68Aj5df7gdHmtpzJfIXdb72BUWuQjGSav-NekwauVrcbZfCszFX4-n_Uy1fYi_MLqTU1Hecn72H8vdIs4AE8dk1IhTElDYE1xJnu5kA6L-AG8DbFIFmFN-gamNHLGwZzFV7dLWPWwo1dCpfjjLx4WbXsuL26e9DoarBdF_j5iIXzEicN0tBb-UGSvnCcIFbJrQlUOR-Xy1DgBs0FvsWcy0Hczfn8Q"

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