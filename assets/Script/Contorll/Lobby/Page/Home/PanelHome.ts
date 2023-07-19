import { Button, EventTouch, Label, Node, _decorator } from 'cc';
import { EvnetType } from '../../../../Enum/EvnetType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import { PageAction } from '../../../../Enum/PageAction';
import EventMng from '../../../../Manager/EventMng';
import BaseComponent from '../../../../Model/ComponentBase';
import { goin } from '../../../Api/ResponeCommand';
import PageControll from '../../PageControll';
const { ccclass, property } = _decorator;
@ccclass('PanelHome')
export default class PanelHome extends BaseComponent {
    drawNumbers: number[] = [6]
    @property(Label)
    labelTime: Label;
    @property(Label)
    labelCurrentTitle: Label;
    @property(Label)
    labelCurrentDrawNumber: Label;
    @property(Label)
    labelLastDrawNumber: Label;
    @property(Label)
    labelMarquee: Label;
    @property(Label)
    labelMonth: Label;
    @property(Label)
    labelPointTitle: Label;
    @property(Label)
    labelMyPoint: Label;
    @property(Label)
    labelDetail: Label;
    @property(Label)
    labelGiftTitle1: Label
    @property(Label)
    labelGiftTitle2: Label
    @property(Button)
    btnMoreDraw: Button;
    @property(Button)
    btnPointDetail: Button;
    @property(Button)
    btnGoChooese: Button;
    onGoPage(e: EventTouch, customEventData?: string) {
        let split = customEventData.split('-')
        if (isNaN(Number(split[0])))
            console.error("錯誤啦!!!是不是忘記設定");
        this.eventEmit(LobbyStateEvent.ChangePointPage, null, split[1])
        EventMng.getInstance.mapEvnet.get(EvnetType.Page).emit(PageAction.ChangeTo, Number(split[0]))
    }
}