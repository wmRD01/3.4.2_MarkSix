import { assetManager, Button, EventTouch, ImageAsset, Label, Sprite, SpriteFrame, _decorator } from 'cc';
import { EditMenu } from '../../../../Enum/EditMenu';
import { LangType } from '../../../../Enum/LangType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import { NotificationType } from '../../../../Enum/NotificationType';
import EventMng from '../../../../Manager/EventMng';
import BaseComponent from '../../../../Model/ComponentBase';
import CreateFileSprite from '../../../../Model/CreateFileSprite';
import Player from '../../../../Model/Player';
import PublicData from '../../../../Model/PublicData';
import PublicModel from '../../../../Model/PublicModel';
import SocketSetting from '../../../../Socket/SocketSetting';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import PanelLoading from '../../../NoClearNode/PanelLoading';
import PanelSystemMessage from '../../../NoClearNode/PanelSystemMessage';
const { ccclass, property } = _decorator;
@ccclass('PanelClientInfo')
export default class PanelClientInfo extends BaseComponent {
    //#region  propty
    isNeedUpdate: boolean = true;
    isLoading: boolean = false;
    @property(Sprite)
    spritePlayer: Sprite;
    @property(Label)
    labelPhone: Label
    @property(Label)
    labelMail: Label
    @property(Label)
    labelNickName: Label
    @property(Label)
    labelBetCount: Label;
    @property(Label)
    labelPointCount: Label;
    @property(Label)
    labelRank: Label;

    @property(Button)
    buttonEditNickname: Button;
    @property(Button)
    buttonEditPicture: Button;

    getplatform: string;

    //#endregion
    onLoad() {
        super.onLoad()
        this.show()
        EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).on(LobbyStateEvent.EditUpdate, this.onEditUpData, this)
        this.setEvent(LobbyStateEvent.NextIssueID, this.resetButton)
        this.labelPhone.string = ""
        this.labelNickName.string = ""
        this.labelMail.string = ""
    }
    async onEnable() {
        this.startDelay()
        await this.requestMyInfo()
        await this.requesMyScore()
        if (this.stopDelay() < 1)
            setTimeout(PanelLoading.instance.closeLoading.bind(PanelLoading.instance), 1000);
        else
            PanelLoading.instance.closeLoading()
    }
    onDisable() {
        this.resetButton()
    }
    onEditTarget(e: EventTouch, customEventData?: string) {
        this.closeButton()
        switch (Number(customEventData)) {
            case EditMenu.Nickname:
                EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).emit(LobbyStateEvent.EditNickname)
                break;
            case EditMenu.Phone:
                EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).emit(LobbyStateEvent.EditPhone)
                break;
            case EditMenu.Email:
                EventMng.getInstance.mapEvnet.get(NotificationType.PanelClient).emit(LobbyStateEvent.EditEmail)
                break;
        }
    }
    onEditUpData(str: string, type: EditMenu) {
        if (!PublicModel.getInstance.checkStringNull(str)) {
            switch (type) {
                case EditMenu.Nickname:
                    this.labelNickName.string = str
                    break;
                case EditMenu.Phone:
                    this.labelPhone.string = str
                    break;
            }
        }
        this.resetButton()
        PanelLoading.instance.closeLoading()
    }
    //#region UploadAvatar
    onSelectPhoto() {
        new CreateFileSprite(this.onUploadAvatar.bind(this), this.responError.bind(this))
    }
    async onUploadAvatar(_spriteFrame: SpriteFrame, file: File) {
        // PublicModel.getInstance.convertByteToBinary(PublicModel.getInstance._base64ToBytes(base64))
        let fileData = new FormData()
        fileData.append('file', file)
        await new RequestGPG.Request()
            .setMethod(RequestGPG.Method.POST)
            .deletContentType()
            .setBody(fileData)
            .setToken(Player.getInstance.gpgToken)
            .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.UploadAvatar}`, (response: ResponseGPG.UploadAvatar.DataClass) => {
                this.responseUploadAvatar(response, _spriteFrame)
            })
    }
    responseUploadAvatar(response: ResponseGPG.UploadAvatar.DataClass, _spriteFrame: SpriteFrame) {
        console.log("圖片上傳成功?", response);
        if (response.Status.Code == "0") {
            this.spritePlayer.spriteFrame = _spriteFrame
            this.responError("047")
        }
        else {

        }
    }
    responError(errorCode: string) {
        PanelSystemMessage.instance.showSingleConfirm(SocketSetting.t(errorCode, LangType.Game))
    }
    //#endregion
    //#region  MyInfo
    async requestMyInfo() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.MyInfo()
            body.sign = PublicModel.getInstance.convertMD5(PublicData.getInstance.gpgApiKey)
            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.MyInfo}?${convert}`, this.responseMyInfo.bind(this))
            resolve();
        })
    }
    async responseMyInfo(response: ResponseGPG.MyInfo.DataClass) {
        console.log("MyInfo", response)
        Player.getInstance.gpgInfo = response;

        // response.data.photo
        // console.log(Player.getInstance.gpgInfo);
        if (!PublicModel.getInstance.checkStringNull(response.data.nickName))
            this.labelMail.string = response.data.email
        // /*上傳圖片功能暫時隱藏 */
        if (!PublicModel.getInstance.checkStringNull(response.data.photo.headPhoto))
             this.loadPicture(response.data.photo.headPhoto)
        if (!PublicModel.getInstance.checkStringNull(response.data.nickName)) {
            this.getplatform = response.data.nickName?.split("_")[0]/**因為前面會有註冊會員的文字，要刪除掉 */
            this.labelNickName.string = response.data.nickName.replace(`${this.getplatform}_`, "")
        }
        else
            this.labelNickName.string = response.data.nickName
        this.labelPhone.string = PublicModel.getInstance.checkStringNull(response.data.phoneNumber) ? "" : response.data.phoneNumber
    }
     loadPicture(url: string) {
            assetManager.loadRemote(url, (err, image: ImageAsset) => {
                if (err) {
                    console.error(err.message);
                    return
                }
                this.spritePlayer.spriteFrame = SpriteFrame.createWithImage(image)
            })

    }
    //#endregion
    //#region Betlog
    async requesMyScore() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.MyScore()
            const getDate = new Date(PublicData.getInstance.today)
            body.sDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-01`
            body.eDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-${PublicModel.getInstance.getMonthAllDay(PublicData.getInstance.today)}`
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.MyScore)
            console.log(body);

            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.My_Score}?${convert}`, this.responseMyScore.bind(this))
            resolve()
        })
    }
    responseMyScore(response?: ResponseGPG.My_Score.DataClass) {
        console.log("玩家紀錄", response);
        if (response.data) {
            this.labelRank.string = response.data.rank.toString()
            this.labelBetCount.string = response.data.betTimes.toString()
            this.labelPointCount.string = response.data.totalScore.toString()
        }
        else {
            this.labelRank.string = "0"
            this.labelBetCount.string = "0"
            this.labelPointCount.string = "0"
        }
    }
    //#endregion
    resetButton() {
        this.buttonEditNickname.node.active = true
        // this.buttonEditPicture.node.active = true
    }
    closeButton() {
        this.buttonEditNickname.node.active = false
        // this.buttonEditPicture.node.active = false
    }
}
