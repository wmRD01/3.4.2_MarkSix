import { game, Node, _decorator } from "cc";
import BaseSingletonComponent from "../../../Patten/Singleton/BaseSingletonComponent";
import PublicData from "../../Model/PublicData";
import PublicModel from "../../Model/PublicModel";
import PanelLoading from "./PanelLoading";
import PanelSystemMessage from "./PanelSystemMessage";
import PanelVersion from "./PanelVersion";
const { ccclass, property } = _decorator;


@ccclass('CanvasControll')
export default class CanvasControll extends BaseSingletonComponent<CanvasControll>() {
    onLoad() {
        super.onLoad()
        game.addPersistRootNode(this.node)
        /**只有網頁才有互動的問題 */
        if (PublicModel.getInstance.checkApp()) {
            PublicData.getInstance.isClickScreen = true
        }
        else
            this.node.once(Node.EventType.TOUCH_END, () => {
                PublicData.getInstance.isClickScreen = true
            }, this)

    }
    rootEndNode() {
        PanelLoading.instance.node.destroy()
        PanelSystemMessage.instance.node.destroy()
        PanelVersion.instance.node.destroy()
        game.removePersistRootNode(this.node)
        this.node.destroy()
    }
}