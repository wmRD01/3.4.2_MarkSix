import { director, EventTouch, sys, _decorator } from 'cc';
import { GameSceneName } from '../../../../Enum/GameSenceName';
import { MarkSixCommandType } from '../../../../Enum/MarkSixCommandType';
import BaseComponent from '../../../../Model/ComponentBase';
import PublicData from '../../../../Model/PublicData';
import PublicModel from '../../../../Model/PublicModel';
import CanvasControll from '../../../NoClearNode/CanvasControll';
const { ccclass, property } = _decorator;
@ccclass('ItemLink')
export default class ItemLink extends BaseComponent {
    url: WebUrlType | NativeUrlType
    init() {
        if (PublicModel.getInstance.checkApp()) {
            // 創建一個新的 script 元素
            // var script = document.createElement('script');

            // // 設置 script 元素的屬性，例如 src、type、內容等
            // script.src = '_hwv/HybridWebView.js'; // 設置 JavaScript 文件的路徑
            // script.type = 'text/javascript'; // 設置 script 的類型

            // // 將 script 元素添加到 head 標籤中
            // document.head.appendChild(script);
            this.url = PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], NativeUrlType)
        }
        else
            this.url = PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], WebUrlType)

    }
    onOpenWindow(e: EventTouch, customEventData?: string) {

        // sys.openURL()//原生裝置開啟瀏覽器
        CanvasControll.instance.rootEndNode()
        if (PublicModel.getInstance.checkApp())
            if (this.url == NativeUrlType.Official)
                director.loadScene(GameSceneName.Loading)
            else
                sys.openURL(this.url)
        else {
            let _data = new SendData()
            _data.name = this.node.name.split("Link")[0]
            PublicData.getInstance.markSixMsg.send(MarkSixCommandType.contact, _data)


            if (this.url = WebUrlType.Official) {
                director.loadScene(GameSceneName.Loading)
            }
            else
                window.location.href = this.url
        }
        // window.open(this.url)
        // console.log(this.url);
        // window.open(this.url)
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
class SendData {
    name: string;
}