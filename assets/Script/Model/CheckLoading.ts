import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { CheckLoadingType } from "../Enum/CheckLoadingType";

export default class CheckLoading extends BaseSingleton<CheckLoading>() {
    map_CheckList: Map<CheckLoadingType, boolean> = new Map()
    constructor() {
        super();
        for (const value in CheckLoadingType) {
            if (isNaN(Number(value))) break

            this.map_CheckList.set(Number(value), false)
        }
    }
    async checkAllEnd() {
        return new Promise<void>((resolve, reject) => {
            let roop = setInterval(() => {
                let isOK = true
                for (const [key, value] of this.map_CheckList) {
                    if (value == false)
                        isOK = false
                }
                if (isOK) {
                    clearInterval(roop)
                    resolve()
                    return
                }
                // console.error("資料仔仔仔仔仔仔仔仔入中");

            }, 100)
        })
    }
    endWork(type: CheckLoadingType) {
        console.log(`當前直${type}：${this.checkState(type)}`);

        this.map_CheckList.set(type, true)
        console.log(`當前直${type}：${this.checkState(type)}`);

    }
    resetState(type: CheckLoadingType) {
        this.map_CheckList.set(type, false)
    }
    checkState(type: CheckLoadingType) {
        return this.map_CheckList.get(type)
    }
}