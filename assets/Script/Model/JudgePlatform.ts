import { sys } from "cc";

export class IsGPGServer {
    constructor(_url: string) {
        if (_url.indexOf("victor-win.club") != -1) {
            window.isGPGServer = true
            window.isVAServer = true;
        }
    }

}
export class IsVAServer {
    constructor(_url: string) {
        if (window.GameServerSocket != null)
            window.isVAServer = true;
    }
}
export class IsInpokerBestServer {
    constructor(_url: string) {
        if (_url.indexOf("inpoker.best") != -1)
            window.isInpokerServer = true;
    }
}
export class IsEditor {
    constructor(_url: string) {
        if (_url.indexOf("localhost") != -1) {
            // window.isGPGServer = true
            window.isEditor = true;
        }
    }
}

export class IsBuildSelfServer {
    constructor(_url: string) {
        if (_url.indexOf("10.20.13") != -1) {
            // window.isGPGServer = true
            window.isBuildSelf = true;
        }
    }
}
export class IsGitHub {
    constructor(_url: string) {
        if (_url.indexOf("github") != -1)
            window.isGitServer = true;
    }
}

export class IsPhone {
    constructor() {
        if (sys.os == sys.OS.ANDROID || sys.os == sys.OS.IOS) {

            window.isPhone = true;
        }
        else window.isPhone = false;

    }
}