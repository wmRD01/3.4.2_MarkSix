export namespace RequestGPG {

    export class Request {
        method: Method = Method.Get;
        headers: Headers = new Headers();
        body: string
        setMethod(_method: Method) {
            this.method = _method;
            return this
        }
        setHeaders(_headers: Headers) {
            this.headers = _headers;
            return this
        }
        setToken(str: string) {
            this.headers.Authorization = str
            return this
        }
        setBody(_body: string) {
            this.body = _body;
            return this
        }
        async fetchData(_url: string, callback: Function) {
            return new Promise<void>((resolve, reject) => {
                fetch(_url, this)
                    .then(response => response.json())
                    .then(response => callback(response))
                    .then(resolve)
            })

        }

    }
    class Headers {

        [x: string]: string;
        "Content-Type": string = "application/json, text/plain, */*"
        "Accept": string = "application/json;charset=UTF-8"
        "Authorization": string = ""
    }

    export namespace Body {
        export namespace NeedToken {
            export class base {
                sign: string;
            }

            export class CertifiedEmail extends base {
                [x: string]: string;
                verifyCode: string;
                email: string;
            }
            export class MyInfo extends base {
                [x: string]: string;
            }
            export class Nickname extends base {
                nickname: string;
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
                Email: string;
            }


        }

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
        CertifiedEmall = "/Member/CertifiedEmail",
        SendRegisterVerification = "/Token/SendRegisterVerification",
        ValidateContactInfo = "/Token/ValidateContactInfo",
        MyInfo = "/Member/MyInfo",
        Nickname = "/Member/Nickname"
    }
}

