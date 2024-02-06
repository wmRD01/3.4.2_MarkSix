import { director, EventTouch, sys, _decorator } from 'cc';
import { GameSceneName } from '../../../../Enum/GameSenceName';
import BaseComponent from '../../../../Model/ComponentBase';
import PublicModel from '../../../../Model/PublicModel';
import CanvasControll from '../../../NoClearNode/CanvasControll';
const { ccclass, property } = _decorator;
@ccclass('ItemLink')
export default class ItemLink extends BaseComponent {
    url: WebUrlType | NativeUrlType
    init() {
        if (PublicModel.getInstance.checkApp()) {
            this.url = PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], NativeUrlType)
        }
        else
            this.url = PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], WebUrlType)

    }
    onOpenWindow(e: EventTouch, customEventData?: string) {
        // sys.openURL()//原生裝置開啟瀏覽器

        if (this.url == NativeUrlType.Official || this.url == WebUrlType.Official) {
            CanvasControll.instance.rootEndNode()
            director.loadScene(GameSceneName.Loading)
            return

        }
        if (PublicModel.getInstance.checkApp())
            sys.openURL(this.url)
        else {
            window.location.href = this.url
        }
    }
}


enum WebUrlType {
    /**官方 */
    Official = "https://godplay.app/",
    FaceBook = "https://www.facebook.com/GodPlayGameFun/",
    Instagram = "https://www.instagram.com/explore/tags/gpg/",
}
enum NativeUrlType {
    /**官方 */
    Official = "../",
    FaceBook = "https://www.facebook.com/GodPlayGameFun/",
    Instagram = "https://www.instagram.com/explore/tags/gpg/",
}
