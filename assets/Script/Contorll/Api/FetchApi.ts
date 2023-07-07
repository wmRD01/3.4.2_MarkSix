import { RequestGPG } from "../../Model/ResponsGPG";

export default class FetchApi {
    url: string = ""
    constructor(_url: string) {
        this.url = _url;
    }
    requrst() {
        const url = "https://a1-gpg.ceis.tw/Token/ValidateContactInfo"
        const request = new RequestGPG.Request()
        request.method = RequestGPG.Method.POST
        const body = new RequestGPG.Body.ValidateContactInfo()
        body.Phone = `+886999999999`
        request.body = JSON.stringify(body)
        fetch(url, request)
            .then(this.我轉資料)
            .then(this.我拿資料囉)

        console.log("你會等我?");
    }

    我轉資料(response) {
        return response.json()
    }
    我拿資料囉(response) {
        console.log("哈哈哈宋拉", response)
    }

}