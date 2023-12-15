//#region WebSocket
export class URLVlaue {
    token: string;
    memberid: string;
    /**透過前端官網傳送是否為app，因為她是webView我不管怎判斷都是browser，因此必須由前端給我 */
    app:string;

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
export class bet {
    betCode: number[];
}


// http://inpoker.best/H5Game/game50002/web-mobile/index.html?
// token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0aW1lIjoxNjkwMzQ0MzA2NDA4LCJ1aWQiOiIyNTc4NSIsImRjIjoiR1BHIiwiYWdlbnRJZCI6ImxmUmVTM05CbmZ6eSIsImJyYW5kSWQiOiJHUEciLCJicmFuZFRpdGxlIjoiR1BHIiwiZ2FtZUlkIjoiNTAwMDIiLCJjdXJyZW5jeSI6IkdQR1MiLCJpYXQiOjE2OTAzNDQzMDYsImV4cCI6MTY5MDM0NzkwNn0.hYz6jh5N57lWpqqBw2Gb3kXI43-0mUlbgjeOnYlEQAr533qx_J_wMKGsOw4QtQ1jRpRUjppt0oJcaAaNnK8aXCiEndy5svQdThcHjvJ8PRxGXJez6s2SVrSJpyyf5GbKs38xXd6ImkQr_WsKz93tOCGjHCDGC9e7n4vkJ96tdkg
// record=https://mkqa-backendsystem.ceis.tw/wList
// dc=GPG
// agentId=lfReS3NBnfzy
// GGID=5
// lang=tw
// forceExchange=false
// providerlogo=true
// playerId=fxBXTbFmDrSdxWADghPWdV