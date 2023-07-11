import { EventTouch, _decorator } from 'cc';
import BaseComponent from '../../../../Model/ComponentBase';
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

        window.open(this.url)
    }
}

enum URLType {
    /**官方 */
    Official = "https://godplay.app/",
    FaceBook = "https://www.facebook.com/GodPlayGameFun/",
    Instagram = "https://www.instagram.com/explore/tags/gpg/",
}