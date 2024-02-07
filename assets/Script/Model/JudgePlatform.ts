import { sys } from "cc";

export default class JudgePlatform {
    constructor() {
        new IsGPGServer(window.location.href)
        new IsInpokerBestServer(window.location.href)
        new IsVAServer(window.location.href)
        new IsEditor(window.location.href)
        new IsBuildSelfServer(window.location.href)
        new IsGitHub(window.location.href)
        new IsPhone()
    }
}

class IsGPGServer {
    constructor(_url: string) {
        if (_url.indexOf("victor-win.club") != -1) {
            window.isGPGServer = true
            window.isVAServer = true;
        }
    }

}
class IsVAServer {
    constructor(_url: string) {
        if (window.GameServerSocket != null)
            window.isVAServer = true;
    }
}
class IsInpokerBestServer {
    constructor(_url: string) {
        if (_url.indexOf("inpoker.best") != -1)
            window.isInpokerServer = true;
    }
}
class IsEditor {
    constructor(_url: string) {
        if (_url.indexOf("localhost") != -1) {
            // window.isGPGServer = true
            window.isEditor = true;
        }
    }
}

class IsBuildSelfServer {
    constructor(_url: string) {
        if (_url.indexOf("10.20.13") != -1) {
            // window.isGPGServer = true
            window.isBuildSelf = true;
        }
    }
}
class IsGitHub {
    constructor(_url: string) {
        if (_url.indexOf("github") != -1)
            window.isGitServer = true;
    }
}

class IsPhone {
    constructor() {
        if (sys.os == sys.OS.ANDROID || sys.os == sys.OS.IOS) {

            window.isPhone = true;
        }
        else window.isPhone = false;

    }
}