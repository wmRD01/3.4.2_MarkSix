//#region 

import BaseSingleton from "../Patten/Singleton/BaseSingleton";
import EventMng from "../Script/Manager/EventMng";
import { CommandType } from "../Script/Enum/CommandType";
import { WebSocketEvent } from "../Script/Enum/WebSocketEvent";
import { NotificationType } from "../Script/Enum/NotificationType";

//#endregion
export default class DelayTime extends BaseSingleton<DelayTime>() {
    connetDelay: Array<number> = []
    HeartrateNum: number = 0;
    async StartDT(_time: number) {
        // console.log(this.connetDelay);

        return new Promise<void>((resolve, reject) => {
            let DtID = setTimeout(() => {
                resolve()
                clearTimeout(DtID)
                // for (let index = 0; index < this.connetDelay.length; index++) {
                let index = this.connetDelay.indexOf(DtID)
                if (index != -1) {
                    this.connetDelay.splice(index - 1, index)
                }
                // }
            }, _time * 1000)
            this.connetDelay.push(DtID)
        })
    }
    async StartDT_NotClear(_time: number) {
        // console.log(this.connetDelay);

        return new Promise<void>((resolve, reject) => {
            let DtID = setTimeout(() => {
                resolve()
                clearTimeout(DtID)
                // for (let index = 0; index < this.connetDelay.length; index++) {
                let index = this.connetDelay.indexOf(DtID)
                if (index != -1) {
                    this.connetDelay.splice(index - 1, index)
                }
                // }
            }, _time * 1000)
        })
    }
    StopAllDT() {
        let count = this.connetDelay.length
        for (let index = 0; index < count; index++) {
            let DtID = this.connetDelay.shift()
            clearTimeout(DtID)
        }
    }

    SetGameHeartrate(setSecond: number) {
        this.HeartrateNum = setInterval(() => {
            // console.error("送心跳");

            EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(WebSocketEvent.WebSocketSendCommand, CommandType.sschk, {})
        }, setSecond * 1000)
    }
    StopGameHeartrate() {
        clearInterval(this.HeartrateNum)
    }
}