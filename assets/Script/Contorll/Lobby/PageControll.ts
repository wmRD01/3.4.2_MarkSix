import { _decorator, EventTarget, PageView, Node } from 'cc';
import { DEV } from 'cc/env';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
import { NotificationType } from '../../Enum/NotificationType';
import { PageAction } from '../../Enum/PageAction';
import { PageMenu } from '../../Enum/PageMenu';
import { WebSocketEvent } from '../../Enum/WebSocketEvent';
import AssetMng from '../../Manager/AssetMng';
import EventMng from '../../Manager/EventMng';
import MusicMng from '../../Manager/MusicMng';
import PublicModel from '../../Model/PublicModel';
import PanelLoading from '../NoClearNode/PanelLoading';
const { ccclass, property } = _decorator;
@ccclass('PageControll')
export default class PageControll extends BaseSingletonComponent<PageControll>() {
    pageView: PageView;
    @property(Node)
    page: Node[] = []

    currnetIndex: number = 0;
    onLoad() {
        /**現階段測試 正是要往Loading移動 */
        super.onLoad()
        // console.log(this.pageEvnet);
        this.pageView = this.getComponent(PageView)

        EventMng.getInstance.mapEvnet.get(NotificationType.Page).on(PageAction.ChangeTo, this.onToPage, this)
        for (let index = 0; index < this.page.length; index++) {
            this.page[index].active = false
        }
        // console.log(this.pageEvnet);
    }
    start() {
        this.closeTouch(this.pageView)
        // console.log("欸我已經送了欸");
        EventMng.getInstance.mapEvnet.get(NotificationType.Pulic).emit(WebSocketEvent.StartLoadLanguage)
        EventMng.getInstance.mapEvnet.get(NotificationType.Page).emit(PageAction.ChangeTo, 0);
        // if (DEV)
        // else
        //     EventMng.getInstance.mapEvnet.get(NotificationType.Page).emit(PageAction.ChangeTo, 0);
    }
    closeTouch(target: PageView) {
        //@ts-ignore
        target.node.off(Node.EventType.TOUCH_START, target._onTouchBegan, target, true);
        //@ts-ignore
        target.node.off(Node.EventType.TOUCH_MOVE, target._onTouchMoved, target, true);
        //@ts-ignore
        target.node.off(Node.EventType.TOUCH_END, target._onTouchEnded, target, true);
        //@ts-ignore
        target.node.off(Node.EventType.TOUCH_CANCEL, target._onTouchCancelled, target, true);
    }
    /**接收的值也是number，只是PageMenu是enum內存number */
    onToPage(index: PageMenu) {
        PanelLoading.instance.openLoading("資料讀取中")
        this.page[this.currnetIndex].active = false
        this.currnetIndex = index
        this.page[this.currnetIndex].active = true
        this.pageView.scrollToPage(index, 0)
    }

}


