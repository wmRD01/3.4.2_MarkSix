import { EventTarget } from "cc";
// import BaseSingleton from "../../Patten/Singleton/BaseSingleton";


// export default class EventMng extends BaseSingleton<EventMng>() {
//     eventMng:EventTarget = new EventTarget()

// }

import { _decorator } from 'cc';
import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { EvnetType } from "../Enum/EvnetType";
const { ccclass, property } = _decorator;
@ccclass('EventMng')
export default class EventMng extends BaseSingleton<EventMng>() {
    mapEvnet: Map<EvnetType, EventTarget> = new Map()
    init() {
        /**因為會包含Valude，所以直接/2就是整個Object的數量 */
        for (let index = 0; index < Object.keys(EvnetType).length / 2; index++) {
            this.mapEvnet.set(index, new EventTarget())
        }
    }
}


