import { _decorator, EventTarget, PageView, Node } from 'cc';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
import { PageAction } from '../../Enum/PageAction';
import { PageMenu } from '../../Enum/PageMenu';
const { ccclass, property } = _decorator;
@ccclass('PageControll')
export default class PageControll extends BaseSingletonComponent<PageControll>() {
    pageView: PageView;
    pageEvnet: EventTarget = new EventTarget();
    onLoad() {
        super.onLoad()
        // console.log(this.pageEvnet);
        this.pageView = this.getComponent(PageView)

        this.pageEvnet.on(PageAction.ChangeTo, this.onToPage, this)
        // console.log(this.pageEvnet);
    }
    start() {
        this.closeTouch(this.pageView)
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
        this.pageView.scrollToPage(index, 0)
    
    }
}