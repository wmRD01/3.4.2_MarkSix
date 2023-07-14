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
        export class ValidateContactInfo {
            Phone: string
            Email: string
        }
        export class RankList {

        }
        /**需要token在思考如何切出 */
        export class MemberInfo {
            sign: string;
        }
        export class SendLoginVerification {
            Locale: string = "zh-TW";
            Email: string;
        }
        /**需要token在思考如何切出 */
        export class Certification {
            VerifyCode: string;
            Email: string;
            sign: string;
        }
    }

    export enum Method {
        Get = "Get",
        POST = "POST",
    }


}

