import { JsonAsset, resources } from "cc";
import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { LangType } from "../Enum/LangType";
import PublicModel from "../Model/PublicModel";

export default class LanguageManager extends BaseSingleton<LanguageManager>() {
    Language: string = "";
    gameData: Object = new Object();
    serverData: Object = new Object();
    serverAPIData: Object = new Object();
    isGame: boolean;
    isServer: boolean
    isServerAPI: boolean;
    loadCount: number;
    startLoad(gameID: number, lang: string) {
        if (lang === this.Language) return
        this.Language = lang;
        let lib = PublicModel.getInstance.checkLanguagePath()
        this.switchLoag(`${lib}/gameLanguage/${gameID.toString()}/${lang}`)
        this.switchLoag(`${lib}/serverLanguage/${lang}`)
        this.switchLoag(`${lib}/serverApiLanguage/${lang}`)
    }

    setDate(_data: Object, _type: LangType) {
        console.log(_type, _data);
        let data = this.getTypeData(_type);
        // console.log(data);


        for (const key in _data) {
            if (!Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _data[key];
            }

        }
        switch (_type) {
            case LangType.Game:
                this.isGame = true;
            case LangType.Server:
                this.isServer = true;
            case LangType.ServerAPI:
                this.isServerAPI = true;
        }
        return this
        //@ts-ignore
        // this.data = data;
        // console.log(language);
    }
    t(option: string, _type: LangType) {
        let data = this.getTypeData(_type);

        // console.log(option);
        // console.log(data);
        if (data == null) {
            return option;
        }
        return data[option] == null ? option : data[option];
    }
    async checkSetLang() {
        return new Promise<void>((resolve, reject) => {
            if (this.Language != "") resolve()

            let checkLoop = setInterval(() => {
                let isbool = this.Language == "" ? true : false
                if (!isbool) {
                    resolve();
                    clearInterval(checkLoop)
                }
            }, 100)
        })
    }
    async checkLanguage(_type: LangType) {
        return new Promise<void>((resolve, reject) => {
            let checkLoop = setInterval(() => {
                if (this.isGame && this.isServer && this.isServerAPI) {
                    resolve();
                    clearInterval(checkLoop)
                }
            }, 100)
        })
    }
    getTypeData(_type: LangType) {
        switch (_type) {
            case LangType.Game:
                return this.gameData;
            case LangType.Server:
                return this.serverData;
            case LangType.ServerAPI:
                return this.serverAPIData;
        }

    }

    switchLoag(libPath: string) {
        // console.log("開始讀");
        if (PublicModel.getInstance.checkApp()) {
            this.JsonData(libPath, this.loadLanguageEnd.bind(this))
        }
        else {
            libPath = `${libPath}.json?/${new Date().getTime()}`
            this.RomoteData(libPath, this.loadLanguageEnd.bind(this))
        }
    }

    JsonData(url: string, callback: Function) {
        console.log('downloadText.url:', url);
        resources.load(url, JsonAsset, (err, _data: JsonAsset) => {
            if (err) {
                console.error("資源載入錯誤");
                return
            }

            callback(JSON.stringify(_data.json), url)
            console.log(_data);

        })
    }

    loadLanguageEnd(jsonText: string, url?: string) {
        console.log("loadLanguageEnd");
        let type;
        if (url.indexOf("gameLanguage") > 0)
            type = LangType.Game
        if (url.indexOf("serverLanguage") > 0)
            type = LangType.Server
        if (url.indexOf("serverApiLanguage") > 0)
            type = LangType.ServerAPI
        let jsonToObj = JSON.parse(jsonText)
        LanguageManager.getInstance.setDate(jsonToObj, type); //設定語言   
        //  SocketSetting.getInstancesetLang(MyWebSocket.instence.Language).init(jsonTo, type); //設定語言   
        // MainModelUp.instance.IsLoadLanguage = true;
    }
    loadLanguageError(url: string, err?: string) {
        // console.log("loadLanguageError");
        if (err)
            console.log("錯誤?" + err);

        this.loadCount++;
        if (this.loadCount > 3) {
            console.error("載入資源失敗");
            return
        }
        this.JsonData(url, this.loadLanguageEnd.bind(this));
    }
    loadLanguageErrorAgain(url: string) {
        console.error("语言包下载失败请通知客服");
        // GameControll.getInstance.messaggeState(MessageCommend.BackHome, "資源包有問題，請洽客服")
        // Panel_Message.showConfirm(this, 1,  SocketSetting.getInstance.t("S_9077"), (e) => {
        //     this.onBackHome();
        // }); //"语言包下载失败请通知客服";
        // MainModelUp.instance.ShowMessageBox = true;
    }
    RomoteData(url: string, callback: Function) {
        var url = url;
        console.log('downloadText.url:', url);

        if (callback) {
            var xhr = new XMLHttpRequest()
            xhr.open('GET', url, true);
            if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
            xhr.onload = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 0) {
                        callback(xhr.response, url);
                    }
                }
            };

            xhr.send(null);
        }
    }
}


