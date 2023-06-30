//#region WebSocket
export class URLVlaue {
    loginType: string;
    token: string;
    record: string;
    dc: string;
    agentId: string;
    GGID: string;
    lang: string;
    forceExchange: string;
    providerlogo: string;
    playerId: string = "";
    browser: string;
    browserVersion: string;
    os: string;
    osVersion: string;
    isMobile: number;
    isFastInGameRoom: boolean;
    demo: string;
    roomNo: number;
}
//#endregion
//#region 大廳封包
export class ln {
    gameId: number;
    account: string
    ident: number;
    language: string;
    key: string;
}
export class ucnn {
    nickname: string;
}
export class excr {
    coinType: number;
}
export class excc {
    coinType: number;
    money: number
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

}
export class lbll {
    contentId: string;
    type: number;
}
export class lbrl {
    contentId: string
    type: number
    level: number
}
export class lbsr {
    contentId: string;
    roomNo: number;
    seatNo: number = 0;
    password: string = "";
}
export class pwlby {

}
export class goin { };
export class gori { }
export class grre {

}
export class grrl {

}
export class gbet {
    kind: number
    chip: number
}
export class gbbk {
}

export class gbcl {

}
export class gbrt {

}
export class gbcf {

}
export class gbop {

}
export class gbob {

}
export class gpp {
    info: string
}
export class gpe {

}
export class gs1 {

}

export class gs8 {

}
export class gs9 {

}
export class gs10 {

}
export class gs11 {

}
export class gs12 {

}
export class gs13 {

}
export class gs14 {

}
export class gs15 {

}
export class gs17 {

}
export class gs18 {

}
export class gs20 {

}
export class gs21 {

}
export class gs23 {

}
export class gs24 {

}
export class gs25 {

}
export class gs30 {

}
//#endregion
