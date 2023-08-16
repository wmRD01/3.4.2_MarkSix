import BaseSingleton from "../../Patten/Singleton/BaseSingleton";

export default class RoomData extends BaseSingleton<RoomData>() {
    roomNo: number;
    name: string;
    coinType: number;
    gameType: number;
    sequenceID: string;
    inningID: number;
    roomStatus: number;
    roomTime: number;
    nowStage: string;
    stageTime: number;
    remainTime: number;
    totalCards: number;
    totalRemain: number;
    redCutIndex: number;
    shoeLen: number;
    playerCards: number[];
    playerPoint: number;
    bankerCards: number[];
    bankerPoint: number;
    records: GameRoundResult[];
    seatID: number;
    credit: number
    chipOptions: number[]
    bets: number[]
    /**------非封包共用區------ */
    seatNo: number = 0;
    bigEyeBoyRoadData: boolean[];
    smallRoadData: boolean[];
    cockroachRoadData: boolean[];
}