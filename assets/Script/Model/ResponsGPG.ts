export namespace RequestGPG {
    export class Request {
        method: Method = Method.Get;
        headers: Headers = new Headers();
        body: string
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
        }
        export class test {

        }
    }

    export enum Method {
        Get = "Get",
        POST = "POST",
    }


}

