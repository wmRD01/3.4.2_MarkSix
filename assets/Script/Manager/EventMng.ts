import { EventTarget } from "cc";
// import BaseSingleton from "../../Patten/Singleton/BaseSingleton";

export default new EventTarget();
// export default class EventMng extends BaseSingleton<EventMng>() {
//     eventMng:EventTarget = new EventTarget()

// }

import { _decorator } from 'cc';
import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import PublicModel from "../Model/PublicModel";
const { ccclass, property } = _decorator;
@ccclass('EventMng')
export default class EventMng extends BaseSingleton<EventMng>() {
    mapEvnet: Map<EvnetType, EventTarget> = new Map()
    test() {
        for (let index = 0; index < Object.keys(EvnetType).length; index++) {
            this.mapEvnet.set(index, new EventTarget())

        }
        PublicModel.getInstance.getEnumValueFromString
    }
}

enum EvnetType {
    Pulic,
    Page,
    Panel,
}