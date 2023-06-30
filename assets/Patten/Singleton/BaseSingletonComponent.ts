import { js } from "cc";
import BaseComponent from "../../Script/Model/ComponentBase";
import IBaseSingleton from "./IBaseSingleton";
import SingletManager from "./SingletonManger";

export default function BaseSingletonComponent<T>() {
    class BaseSingletonComponent extends BaseComponent implements IBaseSingleton {
        public static get instance(): T {
            if (!SingletManager.instance.get(js.getClassName(this))) {
                console.error(`Adam 當前${js.getClassName(this)} : 需檢查該Class的初始化生命週期`);
            }
            return SingletManager.instance.get<IBaseSingleton>(js.getClassName(this)) as any;
        }

        protected onLoad() {
            super.onLoad();
            SingletManager.instance.set(this);
        }

        /**
         * 清除單例物件
         */
        public clear() {
        }
    }

    return BaseSingletonComponent;
}
