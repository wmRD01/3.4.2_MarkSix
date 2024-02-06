import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { LangType } from "../Enum/LangType";

export default class SocketSetting extends BaseSingleton<SocketSetting>() {
    Language = "";
    gameData: Object = new Object();
    serverData: Object = new Object();
    serverAPIData: Object = new Object();
    isGame: boolean;
    isServer: boolean
    isServerAPI: boolean;

    setLang(language: string) {
        this.Language = language;
        return this
    }
    init(_data: Object, _type: LangType) {
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
            if (_type == LangType.Game && this.isGame) resolve();
            if (_type == LangType.Server && this.isServer) resolve();
            if (_type == LangType.ServerAPI && this.isGame) resolve();
            let checkLoop = setInterval(() => {
                let isbool = _type == LangType.Game ? this.isGame : this.isServer
                if (isbool) {
                    // console.log( SocketSetting.getInstancedata);

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



}


