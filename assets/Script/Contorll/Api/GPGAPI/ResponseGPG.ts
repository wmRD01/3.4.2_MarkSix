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
    export namespace SendLoginVerification {
        export class DataClass {
            Status: State = new State();
        }
        class State {
            Code: string
            Message: string
        }


    }
    export namespace GetToken {
        export class DataClass {
            access_token: string
            expires_in: number
            scope: string
            token_type: string
        }
    }
    export namespace Nickname {
        export class DataClass {
            Status: State = new State();
        }
        class State {
            Code: string
            Message: string
        }

    }

    export namespace UploadAvatar {
        export class DataClass {
            AvatarUrl: string;
            Status: State = new State();
        }
        class State {
            Code: string
            Message: string
        }

    }


    export namespace CertifiedEmall {
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
            issueID: string;
            //  "2023-07-23T20:49:45+08:00"
            openDate: string;
            //  "2023-07-23T20:49:45+08:00"
            realOpenDate: string;
        }
    }
    export namespace Betlog {
        export class DataClass {
            data: Betlog[] = [];
            Status = new State()
        }
        class State {
            Code: string
            Message: string
        }
        class Betlog {
            // (6) [14, 15, 16, 18, 48, 49]
            betCode: number[];
            // "59982501062528060"
            betID: string;
            // "2023-08-01T18:25:28.0607245+08:00"
            betTime: string;
            // 2023213
            issueID: string;
            // 0
            score: number;
        }
    }
    export namespace TopScore {
        export class DataClass {
            data: TopScore[] = [];
            Status = new State()
        }
        class State {
            Code: string
            Message: string
        }
        export class TopScore {
            // 25768
            memberID: number;
            // "gpg_Rick"
            nickName: string;
            // 0
            rank: number;
            // 0
            totalScore: number;
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
        class History {
            //  ['9', '18', '39', '4', '33', '11', '45']
            drawCode: string[];
            //  2023204
            issueID: string;
            //  "2023-07-23T20:49:45+08:00"
            openDate: string;
            //  "2023-07-23T20:49:45+08:00"
            realOpenDate: string;
            //  "2023-07-23T20:49:45+08:00"
            serverNowTime: string;
        }
    }
    export namespace My_Score {
        export class DataClass {
            data: MyScore = new MyScore();
            Status = new State()
        }
        class State {
            Code: string
            Message: string
        }
        class MyScore {
            rank: number;
            totalScore: number;
            betTimes: number;
        }
    }
    export namespace BetWrite {
        export class DataClass {
            data: BetWrite = new BetWrite();
            Status = new State()
        }
        class State {
            Code: string
            Message: string
        }
        class BetWrite {
            betCode: number[] = [];
            betTime: string;
            gameID: number;
            issueID: string;
            memberID: number;
        }
    }


}