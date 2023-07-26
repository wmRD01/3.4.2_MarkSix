export namespace ResponseGPG {
    export namespace MyInfo {
        export class DataClass {
            Status: State = new State();
            data: Data = new Data()
        }
        class State {
            Code: string = "0"
            Message: string = "Success"
        }
        class Data {
            email: string;
            friendCount: number;
            introduceCode: string;
            isTrial: false;
            memberID: number;
            nickName: string;
            phoneNumber: string;
            photo: Photo;
            promotionCode;
            promotionUrl;
            registerSource: string;
            vip: VIP;
        }
        class Photo {
            frame: string;
            headPhoto: string;
        }
        class VIP {
            experience: number;
            level: number;
            nextExperience: number;
        }
    }
    export namespace ValidateContactInfo {
        export class DataClass {
            Status: State = new State();
        }
        class State {
            Code: string
            Message: string
        }

    }
    export namespace SendRegisterVerification {
        export class DataClass {
            Status: State = new State();
        }
        class State {
            Code: string
            Message: string
        }

    }
    export namespace Certification {
        export class DataClass {
            data = null;
            access_token = null;
            refresh_token = null;
            Roles = null;
            ids_token = null;
            Status = new State()
        }
        class State {
            Code: string
            Message: string
        }

    }
    export namespace DrawHistory {
        export class DataClass {
            data: History[] = [];
            Status = new State()
        }
        class State {
            Code: string
            Message: string
        }
        export class History {
            //  ['9', '18', '39', '4', '33', '11', '45']
            drawCode: string[];
            //  2023204
            issueID: number;
            //  "2023-07-23T20:49:45+08:00"
            openDate: string;
            //  "2023-07-23T20:49:45+08:00"
            realOpenDate: string;
        }
    }
    export namespace DrawUpcoming {
        export class DataClass {
            data: History[] = [];
            Status = new State()
        }
        class State {
            Code: string
            Message: string
        }
        export class History {
            //  ['9', '18', '39', '4', '33', '11', '45']
            drawCode: string[];
            //  2023204
            issueID: number;
            //  "2023-07-23T20:49:45+08:00"
            openDate: string;
            //  "2023-07-23T20:49:45+08:00"
            realOpenDate: string;
        }
    }
}