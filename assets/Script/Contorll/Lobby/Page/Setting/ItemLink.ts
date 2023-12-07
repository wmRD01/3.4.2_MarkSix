import { EventTouch, _decorator } from 'cc';
import { MarkSixCommandType } from '../../../../Enum/MarkSixCommandType';
import BaseComponent from '../../../../Model/ComponentBase';
import PublicData from '../../../../Model/PublicData';
import PublicModel from '../../../../Model/PublicModel';
const { ccclass, property } = _decorator;
@ccclass('ItemLink')
export default class ItemLink extends BaseComponent {
    url: URLType
    init() {
        this.url = PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], URLType)
        // console.log(PublicModel.getInstance.getEnumValue(this.node.name.split("Link")[0], URLType));
        // console.log(this.node.name.split("Link")[0]);

    }
    onOpenWindow(e: EventTouch, customEventData?: string) {
        // console.log(this.url);
        let _data = new SendData()
        _data.name = this.node.name.split("Link")[0]
        PublicData.getInstance.markSixMsg.send(MarkSixCommandType.contact, _data)
        // window.open(this.url)
    }
}

enum URLType {
    /**官方 */
    Official = "https://godplay.app/",
    FaceBook = "https://www.facebook.com/GodPlayGameFun/",
    Instagram = "https://www.instagram.com/explore/tags/gpg/",
}
class SendData {
    name: string;
}