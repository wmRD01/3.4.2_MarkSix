export namespace RequestGPG {

    export class Request {
        method: Method = Method.Get;
        headers: Headers = new Headers();
        body: string | FormData
        setMethod(_method: Method) {
            this.method = _method;
            return this
        }
        setHeaders(_headers: Headers) {
            this.headers = _headers;
            return this
        }
        setToken(str: string) {
            this.headers.Authorization =`Bearer ${str}`
            return this
        }
        setBody(_body: string | FormData) {
            this.body = _body;
            return this
        }

        deletContentType() {
            delete this.headers["Content-Type"]
            return this
        }
        setContentType(type: ContentType) {
            this.headers["Content-Type"] = type;
            return this
        }
        async fetchData(_url: string, callback: Function) {
            // console.log(_url);
            console.log(this);
            // console.log(_url.split("?"));
            // console.log(_url.split("?")[0].split("/"));
            // console.log(_url.split("?")[0].split("/")[_url.split("?")[0].split("/").length]);
            return new Promise<void>((resolve, reject) => {
                let data;
                fetch(_url, this)
                    .then(response => response.json())
                    .then(response => data = response)
                    .catch(err => reject)
                    .then(response => console.log(`資料名稱：${_url.split("?")[0].split("/")[_url.split("?")[0].split("/").length - 1]}`))
                    .then(response => console.log(`資料內容`, data))
                    .then(response => callback(data))
                    .then(resolve)
            })

        }

    }
    class Headers {

        [x: string]: string;
        "Content-Type": string = ContentType.Json;
        "Accept": string = "application/json;charset=UTF-8"
        "Authorization": string = ""
    }

    export namespace Body {
        export namespace NeedToken {
            export class base {
                sign: string;
            }

            export class CertifiedEmail extends base {
                verifyCode: string;
                email: string;
            }
            export class MyInfo extends base {
                [x: string]: string;
            }
            export class Nickname extends base {
                nickname: string;
            }
            export class DrawHistory extends base {
                [x: string]: string;
                "top": string;
            }
            export class DrawUpcoming extends base {
                [x: string]: string;
            }
            export class UploadAvatar extends base {
                file: File;
            }
            export class Betlog extends base {
                [x: string]: string;
                "sDate": string;
                "eDate": string;
            }
            export class TopScore extends base {
                [x: string]: string;
                "sDate": string;
                "eDate": string;
            }
        }
        export namespace NotNeedToken {
            // export class EmailSign {
            //     [x: string]: string;
            //     verifyCode: string;
            //     email: string;
            // }
            export class ValidateContactInfo {
                Phone: string
                Email: string
            }
            export class RankList {

            }
            export class SendRegisterVerification {
                Locale: string = "zh-TW";
                Phone: string;
                Email: string;

            }


        }

    }
    export enum ContentType {
        Default = "",
        Json = "application/json, text/plain, */*",
        FormData = "multipart/form-data",
    }

    export enum Method {
        Get = "Get",
        POST = "POST",
    }

    export enum APIUrl {
        playAPI = "https://play-api.ceis.tw",
        ids = "https://ids.ceis.tw"
    }
    export enum API {
        UploadAvatar = "/Member/UploadAvatar",
        CertifiedEmall = "/Member/CertifiedEmail",
        MyInfo = "/Member/MyInfo",
        Nickname = "/Member/Nickname",
        SendRegisterVerification = "/Token/SendRegisterVerification",
        ValidateContactInfo = "/Token/ValidateContactInfo",
        DrawHistory = "/Mark6/Draw_History",
        DrawUpcoming = "/Mark6/Draw_Upcoming",
        TopScore = "/Mark6/Top_Score",
        Betlog = "/Report/Betlog/Get",
    }
}

