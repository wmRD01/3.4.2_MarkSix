import { game, Node, sys, _decorator } from "cc";
import BaseSingletonComponent from "../../../Patten/Singleton/BaseSingletonComponent";
import PublicData from "../../Model/PublicData";
const { ccclass, property } = _decorator;


@ccclass('CanvasControll')
export default class CanvasControll extends BaseSingletonComponent<CanvasControll>() {
    onLoad() {
        super.onLoad()
        game.addPersistRootNode(this.node)
        /**只有網頁才有互動的問題 */
        if (sys.platform != sys.Platform.MOBILE_BROWSER && sys.platform != sys.Platform.DESKTOP_BROWSER) {
            PublicData.getInstance.isClickScreen = true
        }
        else
            this.node.once(Node.EventType.TOUCH_END, () => {
                PublicData.getInstance.isClickScreen = true
            }, this)

    }
}