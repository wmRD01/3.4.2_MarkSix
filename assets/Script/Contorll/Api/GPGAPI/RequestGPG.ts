import PublicModel from "../../../Model/PublicModel";

export namespace RequestGPG {

    export class Request {
        method: Method = Method.GET;
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
            this.headers.Authorization = `Bearer ${str}`
            return this
        }
        setBody(_body: string | FormData) {
            this.body = _body;
            return this
        }
        deletother() {
            delete this.headers.Accept
            delete this.headers.Authorization
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

        fetchData(_url: string, callback: Function) {
            // console.log(_url);
            console.log(this);
            // console.log(_url.split("?"));
            // console.log(_url.split("?")[0].split("/"));
            // console.log(_url.split("?")[0].split("/")[_url.split("?")[0].split("/").length]);
            return new Promise<void>((resolve, reject) => {
                let data;
                fetch(_url, this)
                    // .then((response) => {
                    //     console.log(response);
                    //     return response.json()
                    // })
                    .then(response => response.json())
                    .then(response => data = response)
                    .catch(err => reject())
                    .then(response => console.log(`資料名稱：${_url.split("?")[0].split("/")[_url.split("?")[0].split("/").length - 1]}`))
                    .then(response => {
                        try {
                            console.log(`資料內容`, data)
                            callback(data)
                        } catch (error) {
                            console.log(error);
                        }
                    })
                    .then(resolve)
            })

        }
        XMLData(url: string, callback: Function) {
            console.log("開始", url);

            return new Promise<void>((resolve, reject) => {
                var xhr = new XMLHttpRequest()
                // console.error(this.method);
                // console.error(this.headers["Content-Type"]);
                xhr.setRequestHeader("Content-Type", this.headers["Content-Type"])
                xhr.setRequestHeader("Accept", this.headers["Accept"])
                xhr.setRequestHeader("Authorization", this.headers["Authorization"])
                if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
                xhr.onload = () => {
                    console.log(xhr);
                    if (xhr.readyState === 4) {
                        try {
                            console.warn(JSON.parse(xhr.response));
                            callback(JSON.parse(xhr.response));
                            resolve()
                        } catch (error) {
                            reject()
                            console.error("Format error", xhr);
                        }
                    }
                    else {
                        reject()
                        console.error("connet error", xhr);
                    }
                };
                xhr.open(this.method, url, true);
                if (this.method == Method.POST)
                    xhr.send(this.body);
                else
                    xhr.send();
            })
        }
        async SwitchGetData(url: string, callback: Function) {
            if (PublicModel.getInstance.checkApp())
                await this.XMLData(url, callback)
            else
                await this.fetchData(url, callback)
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
            export class MyScore extends base {
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

            export class RankList {

            }
            export class SendRegisterVerification {
                Locale: string = "zh-TW";
                Phone: string;
                Email: string;

            }
            export class SendLoginVerification {
                Locale: string = "zh-TW";
                Phone: string;
                Email: string;

            }
            export class BetWrite {
                memberID: number;
                issueID: string;
                betCode: number[]
                betTime: string;
                gameID: number;
            }
            export class ValidateContactInfo {
                Phone: string
                Email: string
            }
            export class GetToken {
                phone: string
                email: string
                client_id: string = "mark_six";
                client_secret: string;
                grant_type: string;
                verifycode: string;
            }
        }

    }
    export enum ContentType {
        Default = "",
        Json = "application/json, text/plain, */*",
        FormData = "multipart/form-data",
        Form = "application/x-www-form-urlencoded"
    }

    export enum Method {
        GET = "GET",
        POST = "POST",
    }

    export enum APIUrl {
        playAPI = "https://play-api.godplay.app",
        ids = "https://ids.godplay.app",
        QA_playAPI = "https://play-api.ceis.tw",
        QA_ids = "https://ids.ceis.tw",
    }
    export enum API {
        UploadAvatar = "/Member/UploadAvatar",
        CertifiedEmall = "/Member/CertifiedEmail",
        MyInfo = "/Member/MyInfo",
        Nickname = "/Member/Nickname",
        /**已綁定 */
        SendLoginVerification = "/Token/SendLoginVerification",
        /**未綁定 */
        SendRegisterVerification = "/Token/SendRegisterVerification",
        ValidateContactInfo = "/Token/ValidateContactInfo",
        DrawHistory = "/Mark6/Draw_History",
        DrawUpcoming = "/Mark6/Draw_Upcoming",
        TopScore = "/Mark6/Top_Score",
        Betlog = "/Report/Betlog/Get",
        My_Score = "/Mark6/My_Score",
        BetWrite = "/Report/Betlog/Write",
        GetToken = "/connect/token"
    }
    export enum GPGAPIKey {
        QA = "5gh394D",
        Online = "4fypra!c!?",
    }
    export enum SecretKey {
        QA = "secret",
        Online = "4fypra!c!?",
    }
}

