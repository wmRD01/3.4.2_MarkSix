import { EventTouch, _decorator } from 'cc';
import BaseComponent from '../../../../Model/ComponentBase';
import PublicData from '../../../../Model/PublicData';
import PublicModel from '../../../../Model/PublicModel';
import HybridWebView from '../../../Api/HybridWebView';
const { ccclass, property } = _decorator;
@ccclass('ItemLink')
export default class ItemLink extends BaseComponent {
    url: WebUrlType | NativeUrlType
    init() {
        if (PublicData.getInstance.isApp == '1') {
            // 創建一個新的 script 元素
            var script = document.createElement('script');

            // 設置 script 元素的屬性，例如 src、type、內容等
            script.src = '_hwv/HybridWebView.js'; // 設置 JavaScript 文件的路徑
            script.type = 'text/javascript'; // 設置 script 的類型

            // 將 script 元素添加到 head 標籤中
            document.head.appendChild(script);
            this.url = PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], NativeUrlType)
        }
        else
            this.url = PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], WebUrlType)

    }
    onOpenWindow(e: EventTouch, customEventData?: string) {
        if (PublicData.getInstance.isApp == '1')
            if (this.url == NativeUrlType.Official)
                window.location.href = this.url
            else
                HybridWebView.SendRawMessageToDotNet(this.url);
        else
            window.open(this.url)
        // console.log(this.url);
        // let _data = new SendData()
        // _data.name = this.node.name.split("Link")[0]
        // PublicData.getInstance.markSixMsg.send(MarkSixCommandType.contact, _data)
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
    Official = "../index.html",
    FaceBook = "https://www.facebook.com/GodPlayGameFun/",
    Instagram = "https://www.instagram.com/explore/tags/gpg/",
}
class SendData {
    name: string;
}