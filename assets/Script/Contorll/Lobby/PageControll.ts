import { _decorator, EventTarget, PageView, Node } from 'cc';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
import { PageAction } from '../../Enum/PageAction';
import { PageMenu } from '../../Enum/PageMenu';
const { ccclass, property } = _decorator;
@ccclass('PageControll')
export default class PageControll extends BaseSingletonComponent<PageControll>() {
    pageView: PageView;
    @property(Node)
    page: Node[] = []
    pageEvnet: EventTarget = new EventTarget();

    currnetIndex: number = 0;
    onLoad() {
        super.onLoad()
        // console.log(this.pageEvnet);
        this.pageView = this.getComponent(PageView)
        this.pageEvnet.on(PageAction.ChangeTo, this.onToPage, this)
        // console.log(this.pageEvnet);
    }
    start() {
        this.closeTouch(this.pageView)
        for (let index = 0; index < this.page.length; index++) {
            this.page[index].active = false

        }
        this.onToPage(0)

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
        this.page[this.currnetIndex].active = false
        this.currnetIndex = index
        this.page[this.currnetIndex].active = true
        this.pageView.scrollToPage(index, 0)

    }
}