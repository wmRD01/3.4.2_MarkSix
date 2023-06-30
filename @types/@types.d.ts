
interface Window {
    GameServerSocket: string
    serverport: string
    CoinType: number;
    layout: string
    loginType: string
    accountName: string
    token: string
    lang: string
    homeURL: string
    companyIcon: string
    code: string
    channelId: string
    gameId: string
    gameMaker: string
    APIURL: string;
    //  libraryPath             : string
    windows: string
    JaiJaiTest_SJ: boolean;
    JaiJaiTest_RJ: boolean;
    JaiJaiTest_ARJ: boolean;
    isGPGServer: boolean;
    isInpokerServer: boolean;
    isGitServer: boolean;
    isVAServer: boolean;
    isEditor: boolean;
    isBuildSelf: boolean;
    isPhone: boolean;
}
//@ts-ignore
declare var window: Window;

declare class AllData {
    orderNo: number;
    memberId: number;
    nickname: string;
    bet: number;
    isResult: number;
    resultOdds: number;
    win: number;
    rank: number;
}
declare class OwnerData {
    orderNo: number;
    bet: number;
    autoOdds: number;
    isResult: number;
    resultOdds: number;
}

declare class RoomData {
    roomNo: number;
    /**
     * 房名
     */
    name: number;
    coinType: number; // 遊戲桌型別 0: 金幣 1:銀幣
    sequenceID: string;
    nowStage: string;
    stageTime: number;
    remainTime: number;
    odds: number;
    actionMode: number;
    actionRate: number;
    ownerBets: Array<OwnerData>;
    allBets: Array<AllData>;
    seatNo: number;
    password: string;
}
declare class ResultData {
    roomNo: number;
    bet: number;
    resultOdds: number;
    win: number;
}
declare class ButtonFunctionApi {
    //會被另一個node搞所以只能寫any
    target: any
    callback: string;
    callbackValue: string;
}

declare class ComponentBase {
    setLanguage();
}

declare class Panel_SoundSet {
    node;
    switchEevent(e: Event, customEventData?: string);
    // openEevent();
}
declare class DataSoundSet {
}
/**再回頭整理 */
// declare enum GameWinerResult {

//     Player,
//     Banker,
//     Tie,
//     Null,
// }
declare class GameWinerResult {

}
declare class GameRoundResult {
    binary: string
    winer: GameWinerResult
    isPlayerDouble: boolean
    isBankerDouble: boolean
    isFree: boolean
}

