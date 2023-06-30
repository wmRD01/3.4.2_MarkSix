import { LangType } from "../Enum/LangType";

class SocketSetting {
    UserLanguage: string;
    IsMessage: boolean;
    ClientSetObject = {};      // 客端底層所有參數存放位置
    setboolean = false;        // 讓設定值只設定一次
    ServerReturnData = {};     // Server回傳所有參數 
    Language = "";
    gameData: Object = new Object();
    serverData: Object = new Object();
    isGame: boolean;
    isServer: boolean

    setLang(language: string) {
        this.Language = language;
        return this
    }
    init(_data: Object, _type: LangType) {
        // console.log(_type, _data);

        let data = _type == LangType.Game ? this.gameData : this.serverData


        for (const key in _data) {
            if (!Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _data[key];
            }

        }
        _type == LangType.Game ? this.isGame = true : this.isServer = true

        return this

        //@ts-ignore
        // this.data = data;
        // console.log(language);
    }
    t(option: string, _type: LangType) {
        let data = _type == LangType.Game ? this.gameData : this.serverData
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
            let checkLoop = setInterval(() => {
                let isbool = _type == LangType.Game ? this.isGame : this.isServer
                if (isbool) {
                    // console.log(SocketSetting.data);

                    resolve();
                    clearInterval(checkLoop)
                }
            }, 100)
        })
    }



}
export default new SocketSetting();

