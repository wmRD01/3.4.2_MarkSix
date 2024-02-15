import { Button, Component, EventTouch, instantiate, Label, Node, Prefab, UITransform, _decorator } from 'cc';
import { DEV } from 'cc/env';
import { LangType } from '../../../../Enum/LangType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import { NotificationType } from '../../../../Enum/NotificationType';
import { PageAction } from '../../../../Enum/PageAction';
import EventMng from '../../../../Manager/EventMng';
import LanguageManager from '../../../../Manager/LanguageManager';
import BallData from '../../../../Model/BallData';
import BaseComponent from '../../../../Model/ComponentBase';
import Player from '../../../../Model/Player';
import PublicData from '../../../../Model/PublicData';
import PublicModel from '../../../../Model/PublicModel';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import PanelLoading from '../../../NoClearNode/PanelLoading';
import PanelSystemMessage from '../../../NoClearNode/PanelSystemMessage';



const { ccclass, property } = _decorator;
@ccclass('PanelHome')
export default class PanelHome extends BaseComponent {
    @property(Node)
    lastDrawCodeLayout: Node
    @property(Node)
    labelContent: Node;
    @property(Node)
    timeBG: Node;

    @property(Prefab)
    ballItem: Prefab

    @property(Label)
    labelTime: Label;
    @property(Label)
    labelCurrentTitle: Label;
    @property(Label)
    labelCurrentDrawIssueID: Label;
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
    @property(Button)
    btnMoreDraw: Button;
    @property(Button)
    btnPointDetail: Button;
    @property(Button)
    btnGoChooese: Button;
    @property(Node)
    specialBallItem: Node
    marquee: Marquee;
    timer: Timer;
    isChangeIssueID: boolean;
    currentIssueID: number;
    loopTimer: number;
    testtotoel: number = 0;
    loopTime: number = 60

    onLoad() {
        if (window.isGPGServer || PublicModel.getInstance.checkApp())
            PublicData.getInstance.isChageOnline();
        this.marquee = this.labelMarquee.addComponent(Marquee)
        this.timer = this.labelTime.addComponent(Timer);
        this.timer.setBGNode(this.timeBG);
        this.setEvent(LobbyStateEvent.NextIssueID, this.reset)
    }
    async onEnable() {
        this.reset()
    }
    async reset() {
        if (this.isChangeIssueID) {
            PanelLoading.instance.closeLoading()
            return;
        }
        await this.requestMyInfo()
        await this.requestDrawHistory()
        await this.requestDrawUpcoming()
        await this.requesMyScore()

        PanelLoading.instance.closeLoading()
        if (this.isChangeIssueID) {
            this.testtotoel = 0
            this.loopTimer = setInterval(this.requestDrawUpcomingLoop.bind(this), this.loopTime * 1000)
        }
    }
    //#region  DrawHistory
    async requestDrawHistory() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.DrawHistory()
            body.top = "1"
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.DrawHistory, PublicData.getInstance.gpgApiKey)
            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            await new RequestGPG.Request(PublicModel.getInstance.checkApp())
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.DrawHistory}?${convert}`, this.responseDrawHistory.bind(this))
            resolve();
        })
    }
    responseDrawHistory(response?: ResponseGPG.DrawHistory.DataClass) {
        if (response.data) {
            // this.lastDrawCodeLayout.removeAllChildren()
            let count = this.lastDrawCodeLayout.children.length - 1

            for (let index = count; index >= 0; index--) {
                this.lastDrawCodeLayout.children[index].destroy()
            }
            let getDate = response.data[0]
            this.labelLastDrawIssueID.string = `第${getDate.issueID}期`
            /**不需要week日 */
            // console.log(PublicModel.getInstance.convertDate(getDate.openDate).split("(")[0]);

            let getday = PublicModel.getInstance.convertDateDay(getDate.openDate).split("(")[0]
            this.labelLastDrawDay.string = `${getday}開獎結果`
            for (let index = 0; index < getDate.drawCode.length; index++) {
                let _node: Node;
                let isResetPos: boolean = true;
                if (index == 6) {
                    _node = this.specialBallItem;
                    isResetPos = false;
                }
                else {
                    _node = instantiate(this.ballItem)
                    this.lastDrawCodeLayout.addChild(_node);
                }
                let _class = _node.getComponent(BallData);

                _class.init(Number(getDate.drawCode[index]), isResetPos).cancel()
                this.labelContent.addChild(_class.label.node);
            }
        }
    }
    //#endregion
    //#region  DrawUpcoming
    async requestDrawUpcoming() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.DrawUpcoming()
            body.sign = PublicModel.getInstance.convertMD5(PublicData.getInstance.gpgApiKey)
            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            await new RequestGPG.Request(PublicModel.getInstance.checkApp())
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.DrawUpcoming}?${convert}`, this.responseDrawUpcoming.bind(this))
            resolve()
        })
    }
    responseDrawUpcoming(response?: ResponseGPG.DrawUpcoming.DataClass) {
        let getDate = response.data[0]
        PublicData.getInstance.today = getDate.openDate
        PublicData.getInstance.curIssueID = getDate.issueID
        this.labelCurrentDrawIssueID.string = `第${getDate.issueID}期`
        this.currentIssueID = Number(getDate.issueID)
        // this.timer.setTimeNoTimer(PublicModel.getInstance.convertDateTime(getDate.openDate))
        // console.log(getDate.serverNowTime);
        var Date_A = new Date(getDate.openDate), Date_B = new Date(getDate.serverNowTime);
        //@ts-ignore
        var countTime = Date_A - Date_B
        var Date_C = new Date(countTime);
        console.log(countTime);
        console.log(Date_C);
        //TODO 如果時間到了該怎處理?
        this.timer.setTimer(Date_C.getTime())
        if (countTime < 0) {
            // console.error("時間到了，該開始搓報API");
            this.isChangeIssueID = true;
            return
        }
    }
    //#endregion

    //#region MyScore
    async requesMyScore() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.MyScore()
            const getDate = new Date(PublicData.getInstance.today)
            body.sDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-01`
            body.eDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-${PublicModel.getInstance.getMonthAllDay(PublicData.getInstance.today)}`
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.MyScore, PublicData.getInstance.gpgApiKey)
            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            await new RequestGPG.Request(PublicModel.getInstance.checkApp())
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.My_Score}?${convert}`, this.responseMyScore.bind(this))
            resolve()
        })
    }
    responseMyScore(response?: ResponseGPG.My_Score.DataClass) {
        const getDate = new Date(PublicData.getInstance.today)
        this.labelMonth.string = `(${getDate.getMonth() + 1}/1~${getDate.getMonth() + 1}/${PublicModel.getInstance.getMonthAllDay(PublicData.getInstance.today)})`
        if (response.data) {
            console.log("玩家紀錄", response);
            this.labelMyPoint.string = response.data.totalScore.toString();
        }
        else {
            this.labelMyPoint.string = "0"
        }
    }
    //#endregion
    //#region  MyInfo
    async requestMyInfo() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.MyInfo()
            body.sign = PublicModel.getInstance.convertMD5(PublicData.getInstance.gpgApiKey)
            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            new RequestGPG.Request(PublicModel.getInstance.checkApp())
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.MyInfo}?${convert}`, (response: ResponseGPG.MyInfo.DataClass) => {
                    Player.getInstance.gpgInfo = response;
                    console.log("MyInfo", response)
                    console.log("確認玩家token登入無異常");
                    if (!response || !response.data) {
                        PanelSystemMessage.instance.showSingleConfirm(LanguageManager.getInstance.t("E_0007", LangType.Game))
                    }
                    else resolve()
                })
        })
    }

    //#endregion
    //#region 
    async requestDrawUpcomingLoop() {
        const body = new RequestGPG.Body.NeedToken.DrawUpcoming()
        body.sign = PublicModel.getInstance.convertMD5(PublicData.getInstance.gpgApiKey)
        let convert = PublicModel.getInstance.convertObjectToWebParams(body)
        await new RequestGPG.Request(PublicModel.getInstance.checkApp())
            .setToken(Player.getInstance.gpgToken)
            .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.DrawUpcoming}?${convert}`, this.checkIssueID.bind(this))
    }
    checkIssueID(response?: ResponseGPG.DrawUpcoming.DataClass) {
        // console.log("打拉打拉");
        // console.log(DEV);
        // console.log(this.testtotoel);

        if (DEV) {
            this.testtotoel++
            if (this.testtotoel == 3) {
                // console.error("終於換天拉!!!!");
                this.isChangeIssueID = false;
                clearInterval(this.loopTimer)
                this.eventEmit(LobbyStateEvent.NextIssueID)
            }

            return;
        }


        if (this.currentIssueID != Number(response.data[0].issueID)) {
            // console.error("終於換天拉!!!!");
            this.isChangeIssueID = false;
            clearInterval(this.loopTimer)
            this.eventEmit(LobbyStateEvent.NextIssueID)
        }
    }
    //#endregion
    onGoPage(e: EventTouch, customEventData?: string) {
        let split = customEventData.split('-')
        if (isNaN(Number(split[0])))
            // console.error("錯誤啦!!!是不是忘記設定");
            this.eventEmit(LobbyStateEvent.ChangePointPage, null, split[1])
        EventMng.getInstance.mapEvnet.get(NotificationType.Page).emit(PageAction.ChangeTo, Number(split[0]))
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
    isAction: boolean;
    bg: Node;
    onLoad() {
        this.bindLabel = this.node.getComponent(Label)
        this.bindLabel.string = ""
    }
    reset() {
        this.countTime = 0
        this.isAction = false
        this.bg.active = true
    }
    setTimeNoTimer(str: string) {
        this.bindLabel.string = str
    }
    setTimer(num: number) {
        this.reset()
        this.countTime = num
        this.isAction = true
    }
    setBGNode(_node: Node) {
        this.bg = _node
    }
    timeUp() {
        this.reset()
        this.bindLabel.string = "開獎中..."
        this.bg.active = false;
    }

    update(dt: number) {
        if (this.isAction) {
            this.countTime -= (dt * 1000)
            if (this.countTime < 0) {
                this.timeUp()
                return
            }
            this.bindLabel.string = PublicModel.getInstance.formatMillisecond(this.countTime, true)
        }
    }


}