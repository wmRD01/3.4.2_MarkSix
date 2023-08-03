import { Button, Component, EventTouch, Label, Node, UITransform, v3, _decorator } from 'cc';
import { NotificationType } from '../../../../Enum/NotificationType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import { PageAction } from '../../../../Enum/PageAction';
import EventMng from '../../../../Manager/EventMng';
import BaseComponent from '../../../../Model/ComponentBase';
import PageControll from '../../PageControll';
import PublicModel from '../../../../Model/PublicModel';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import Player from '../../../../Model/Player';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import PublicData from '../../../../Model/PublicData';
import PanelLoading from '../../../NoClearNode/PanelLoading';
import { URLVlaue } from '../../../Api/SendCommand';



const { ccclass, property } = _decorator;
@ccclass('PanelHome')
export default class PanelHome extends BaseComponent {
    @property(Label)
    labelTime: Label;
    @property(Label)
    labelCurrentTitle: Label;
    @property(Label)
    labelCurrentDrawIssueID: Label;
    @property(Label)
    labelLastDrawCode: Label[] = []
    @property(Label)
    labelLastDrawIssueID: Label;
    @property(Label)
    labelLastDrawDay: Label;
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
    @property(Button) 2
    btnMoreDraw: Button;
    @property(Button)
    btnPointDetail: Button;
    @property(Button)
    btnGoChooese: Button;

    marquee: Marquee;
    timer: Timer;
    currentIssueID: number;
    lastIssueID: number;
    onLoad() {
        this.marquee = this.labelMarquee.addComponent(Marquee)
        this.timer = this.labelTime.addComponent(Timer);
        /**取TOKEN */
        Player.getInstance.gpgToken = (this.handleURLData(window.location.href) as URLVlaue).token

    }
    async onEnable() {
        await this.requestDrawHistory()
        if (this.lastIssueID != this.currentIssueID) {
            await this.requestDrawUpcoming()
            //TODO 製做我的積分
            await this.request我的積分()
            /**代表更新最新一期 */
            this.lastIssueID = this.currentIssueID;
        }
        PanelLoading.instance.closeLoading()
    }
    start() {
        // this.marquee.startMarque("HIHIHI")
        // this.timer.setTime(100)
    }

    onDisable() {

    }

    async requestDrawHistory() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.DrawHistory()
            body.top = "1"
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.DrawHistory)
            let convert = new URLSearchParams(body).toString()
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.DrawHistory}?${convert}`, this.responseDrawHistory.bind(this))
            resolve();
        })
    }
    async requestDrawUpcoming() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.DrawUpcoming()
            body.sign = PublicModel.getInstance.convertMD5(PublicData.getInstance.gpgApi)
            let convert = new URLSearchParams(body).toString()
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.DrawUpcoming}?${convert}`, this.responseDrawUpcoming.bind(this))
            resolve()
        })
    }
    async request我的積分() {
        return new Promise<void>(async (resolve, reject) => {
            const getDate = new Date(PublicData.getInstance.today)
            this.labelMonth.string = `(${getDate.getMonth() + 1}/1~${getDate.getMonth() + 1}/${PublicModel.getInstance.getMonthAllDay(PublicData.getInstance.today)})`
            resolve()
        })
    }
    responseDrawHistory(response?: ResponseGPG.DrawHistory.DataClass) {
        if (response.data) {
            let getDate = response.data[0]
            this.currentIssueID = getDate.issueID;
            this.labelLastDrawIssueID.string = `第${getDate.issueID.toString()}期`

            /**不需要week日 */
            // console.log(PublicModel.getInstance.convertDate(getDate.openDate).split("(")[0]);

            let getday = PublicModel.getInstance.convertDateDay(getDate.openDate).split("(")[0]
            this.labelLastDrawDay.string = `${getday}開獎結果`
            for (let index = 0; index < getDate.drawCode.length; index++) {
                if (index == 6) return;
                this.labelLastDrawCode[index].string = getDate.drawCode[index];
            }
        }
        
    }
    responseDrawUpcoming(response?: ResponseGPG.DrawUpcoming.DataClass) {
        let getDate = response.data[0]
        this.labelCurrentDrawIssueID.string = `第${(getDate.issueID).toString()}期`
        this.timer.setTimeNoTimer(PublicModel.getInstance.convertDateTime(getDate.openDate))
        PublicData.getInstance.today = getDate.openDate
    }
    responserequest我的積分(response?: ResponseGPG.DrawUpcoming.DataClass) {
        console.log("我的積分");

    }
    onGoPage(e: EventTouch, customEventData?: string) {
        let split = customEventData.split('-')
        if (isNaN(Number(split[0])))
            console.error("錯誤啦!!!是不是忘記設定");
        this.eventEmit(LobbyStateEvent.ChangePointPage, null, split[1])
        EventMng.getInstance.mapEvnet.get(NotificationType.Page).emit(PageAction.ChangeTo, Number(split[0]))
    }
    handleURLData(_url: string) {
        //  _url = "https://play1.godplay.app/10001/index.html?loginType=web&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0aW1lIjoxNjY4NzYyMjcwMDQ1LCJ1aWQiOiJYUGpST1oiLCJkYyI6IkdQRyIsImFnZW50SWQiOiJ0ckUzeW1XaURMYjIiLCJicmFuZElkIjoiR1BHIiwiYnJhbmRUaXRsZSI6IkdQRyIsImdhbWVJZCI6IjEwMDAxIiwiaWF0IjoxNjY4NzYyMjcwLCJleHAiOjE2Njg3NjU4NzB9.k_GVGPiQCjWxhFG3SGM2zoSy_ggN2cZXuUQ5GvqZib_0TCJ2ul9K5xbTKkgwm7OUw7nMCWLWlwERHc0MMF586SgjuQe9W7SoRSMaBtw_AkiKNn4S1NMvhemgNAdIyjL7I1Gg5xyT-x110RF73lF-yt-n6KKTP3TGkd7wR9_fPz8&record=https://backendsystem.godplay.app/wList&dc=GPG&agentId=trE3ymWiDLb2&GGID=1&lang=tw&forceExchange=true&providerlogo=true"
        // console.log(_url.split("?")[1].split("&"));
        // console.log(_url.split("?")[1]);

        if (_url.split("?")[1] == undefined) return undefined

        let arr = _url.split("?")[1].split("&")
        let obj = new Object()
        for (let index = 0; index < arr.length; index++) {
            let cut = arr[index].split("=")
            obj[cut[0]] = cut[1]
        }
        // console.log(obj);
        return obj
    }
}

class Marquee extends Component {
    bindLabel: Label;
    leftBorder: number;
    rightBorder: number;
    isAction: boolean;
    /**基本上100 OK */
    speed: number = 100;
    onLoad() {
        this.bindLabel = this.node.getComponent(Label)
        this.rightBorder = this.bindLabel.node.parent.getComponent(UITransform).width + 10//額外預留
    }
    startMarque(message: string) {
        this.bindLabel.string = message
        this.bindLabel.updateRenderData(true)
        this.leftBorder = -(this.bindLabel.getComponent(UITransform).width + 10)
        this.resetPos()
        this.isAction = true;
    }
    update(dt: number) {

        if (this.isAction) {
            let currentPos = this.bindLabel.node.getPosition()
            if (currentPos.x < this.leftBorder) {
                this.resetPos()
                currentPos = this.bindLabel.node.getPosition()
            }
            // console.log(currentPos.x);

            // console.log(currentPos.x - (dt * this.speed));
            // 
            this.bindLabel.node.setPosition(currentPos.x - (dt * this.speed), currentPos.y, currentPos.z)

        }
    }
    resetPos() {
        let currentPos = this.bindLabel.node.getPosition()
        this.bindLabel.node.setPosition(this.rightBorder, currentPos.y, currentPos.z)
    }
}

class Timer extends Component {
    bindLabel: Label;
    countTime: number;
    isAction: boolean
    onLoad() {
        this.bindLabel = this.node.getComponent(Label)
        this.bindLabel.string = ""
    }
    reset() {
        this.countTime = 0
        this.isAction = false
    }
    setTimeNoTimer(str: string) {
        this.bindLabel.string = str
    }
    setTime(num: number) {
        this.countTime = num
        this.isAction = true
    }

    update(dt: number) {
        if (this.isAction) {
            this.countTime -= dt
            if (this.countTime < 0) this.reset()
            this.bindLabel.string = PublicModel.getInstance.formatSecond(this.countTime, true)
        }
    }


}