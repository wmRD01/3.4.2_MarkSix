import { _decorator, EventTarget } from 'cc';
import BaseSingletonComponent from '../../../Patten/Singleton/BaseSingletonComponent';
import { PageAction } from '../../Enum/PageAction';
import { PageMenu } from '../../Enum/PageMenu';
const { ccclass, property } = _decorator;
@ccclass('PageControll')
export default class PageControll extends BaseSingletonComponent<PageControll>() {
    pageEvnet: EventTarget = new EventTarget();
    onLoad() {
        super.onLoad()
        // console.log(this.pageEvnet);

        this.pageEvnet.on(PageAction.ChangeTo, this.onToPage, this)
        // console.log(this.pageEvnet);
    }
    onToPage(index: PageMenu) {
        switch (index) {
            case PageMenu.ChooeseBall:
                break;
        }
    }
}