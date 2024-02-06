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
            error: string;
            error_description: string;
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

export class OpenidConfiguration {
    authorization_endpoint: string = "https://ids.ceis.tw/connect/authorize"
    backchannel_logout_supported: boolean = true
    backchannel_logout_session_supported: boolean = true
    check_session_iframe: string = "https://ids.ceis.tw/connect/checksession"
    claims_supported: string[] = [
        "sub",
        "name",
        "family_name",
        "given_name",
        "middle_name",
        "nickname",
        "preferred_username",
        "profile",
        "picture",
        "website",
        "gender",
        "birthdate",
        "zoneinfo",
        "locale",
        "updated_at",
        "aud"
    ]
    code_challenge_methods_supported: string[] = [
        "plain",
        "S256"
    ]
    device_authorization_endpoint: string = "https://ids.ceis.tw/connect/deviceauthorization"
    end_session_endpoint: string = "https://ids.ceis.tw/connect/endsession"
    frontchannel_logout_session_supported: boolean = true
    frontchannel_logout_supported: boolean = true
    grant_types_supported: string[] = [
        "authorization_code",
        "client_credentials",
        "refresh_token",
        "implicit",
        "urn:ietf:params:oauth:grant-type:device_code",
        "mk_phone",
        "mk_register",
        "gpg_token",
        "mk_adLogin"
    ]
    id_token_signing_alg_values_supported: string[] = [
        "RS256"
    ]
    introspection_endpoint: string = "https://ids.ceis.tw/connect/introspect"
    issuer: string = "https://ids.ceis.tw"
    jwks_uri: string = "https://ids.ceis.tw/.well-known/openid-configuration/jwks"
    request_parameter_supported: boolean = true

    response_modes_supported: string[] = [
        "form_post",
        "query",
        "fragment"
    ]
    response_types_supported: string[] = [
        "code",
        "token",
        "id_token",
        "id_token token",
        "code id_token",
        "code token",
        "code id_token token"
    ]
    revocation_endpoint: string = "https://ids.ceis.tw/connect/revocation"
    scopes_supported: string[] = [
        "openid",
        "profile",
        "wallet.search",
        "wallet.transfer",
        "member.info.user",
        "member.info.machine",
        "singlewallet.all",
        "singlewallet.search",
        "singlewallet.transfer",
        "mining.sharedpool.search",
        "mining.personalpool.search",
        "voucher.machine",
        "activity.drawlots",
        "transaction.machine",
        "chat.ai",
        "coupon.addorder",
        "rabbitmq.read:*/*/*",
        "rabbitmq.*",
        "rabbitmq.configure:*/*",
        "rabbitmq.read:*/*",
        "rabbitmq.tag:administrator",
        "rabbitmq.write:*/*",
        "mining.miningrate.search",
        "mark6.draw.history",
        "mark6.score.user",
        "report.write",
        "report.read",
        "game.link",
        "offline_access"
    ]
    subject_types_supported: string[] = [
        "public"
    ]
    token_endpoint: string = "https://ids.ceis.tw/connect/token"
    token_endpoint_auth_methods_supported: string[] = [
        "client_secret_basic",
        "client_secret_post"
    ]
    userinfo_endpoint: string = "https://ids.ceis.tw/connect/userinfo"
}