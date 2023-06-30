
//#region 大廳封包 
export class ln {
    memberId: number;
    nickname: string;
    photoID: number;
    photoPath: string;
    coinType: number;
    pointGold: number;
    pointSilver: number;
    spreadCode: string;
    roomNo: number;
}
export class ucnn {
    nickname: string;
}
export class excr {

    code: number
    coinType: number;
    amount: number;
    nowPoint: number;
}
export class excc {

    code: number
    coinType: number;
    monney: number;
    amount: number;
    nowPoint: number

}
//#endregion

//#region 房內共用封包
//#endregion
//#region 系統封包
export class usdis { }

export class sschk { }
export class ssntf { }
export class ssdis { }
//#endregion

//#region 遊戲封包
export class gonm {
    money: number
}
export class lbll {
    contentId: string;
    type: number;
    levelList: LevelList;

}
export class lbrl {
    contentId: string
    type: number
    level: number
    rooms: RoomNo[]


}
export class lbsr {
    code: number
}
export class pwlby {
    code: number
    pointGold: number;
    pointSilver: number;
}
export class goin { }
export class gori {
    roomNo: number
    name: string
    coinType: number
    gameType: number
    sequenceID: string
    inningID: number
    roomStatus: number
    roomTime: number
    nowStage: string
    stageTime: number
    remainTime: number
    totalCards: number
    totalRemain: number
    redCutIndex: number
    shoeLen: number
    playerCards: number[]
    playerPoint: number
    bankerCards: number[]
    bankerPoint: number
    /**要自己轉譯byte->number */
    records: string
    seatID: number
    credit: number
    betMin: number
    betMax: number
    chipOptions: number[]
    bets: number[]
    manTotal: number[]
    betTotal: number[]
}
export class grre {
    seatID: number
    memberID: number
    nickname: string
    photoPath: string
}
export class grrl {
    seatID: number
}
export class gbet {
    code: number
    kind: number
    chip: number
    bets: number
    credit: number
    manTotal: number[]
    betTotal: number[]
}
export class gbal {

    manTotal: number[]
    betTotal: number[]
}
export class gbbk {
    kind: number
    chip: number
    bets: number
    credit: number
    manTotal: number[]
    betTotal: number[]
}
export class gbcl {
    code: number
    credit: number
}
export class gbrt {
    code: number
    bets: number[]
    credit: number
}
export class gbcf {
    code: number
}
export class gbop {
    orders: Orders
}
export class gbob {
    orders: Orders
}
export class gpp {
    info: string
}
export class gpe {

}
export class ggs {
    status: number
    time: number
}
export class gs0 {
}
export class gs1 {

}

export class gs8 {
    sequenceID: string
    redCutIndex: number
}
export class gs9 {
    redCutIndex: number
    totalCards: number
    serverTime: number
}
export class gs10 {
    sequenceID: string
    inningID: number
    shoeLen: number
    totalRemain: number
    serverTime: number
}
export class gs11 {
    betTime: number
    serverTime: number
}
export class gs12 {
    serverTime: number
    manTotal: number[]
    betTotal: number[]
}
export class gs13 {
    serverTime: number
    bankerPeekSeatID: number
    playerPeekSeatID: number
    redCard: number
}
export class gs14 {
    serverTime: number
    seatID: number
    cards: number[]
    peekSec: number
}
export class gs15 {
    seatID: number
    cards: number[]
    playerPoint: number
}
export class gs16 {
    serverTime: number
    seatID: number
    cards: number[]
    peekSec: number
}
export class gs17 {
    seatID: number
    cards: number[]
    bankerPoint: number
}

export class gs18 {
    serverTime: number
    playerPeekSeatID: number
    redCard: number
}
export class gs19 {
    serverTime: number
    seatID: number
    card: number
    peekSec: number
}
export class gs20 {
    seatID: number
    card: number
    bankerPoint: number
}
export class gs21 {
    serverTime: number
    playerPeekSeatID: number
    redCard: number
}
export class gs22 {
    serverTime: number
    seatID: number
    cards: number[]
    peekSec: number
}
export class gs23 {
    seatID: number
    cards: number[]
    bankerPoint: number
}
export class gs24 {
    serverTime: number
    playerCards: number[]
    bankerCards: number[]
    playerPoint: number
    bankerPoint: number
    result: number
    record: number
    owner: Owner
}
export class gs25 {

}
export class gs30 {

}
/**封包Object */
export class LevelList {
    levelID: number
    betMin: number
    betMax: number
}
export class RoomNo {
    roomNo: number
    name: string
    betMin: number
    betMax: number
    playCount: number
    /**要自己轉譯byte->number */
    records: number[]
}
export class Orders {
    seatID: number
    memberID: number
    nickname: string
    photoPath: string
    bets: number
}
export class Owner {
    wins: number[]
    totalBet: number
    totalWins: number
    credit: number
}
//#endregion



