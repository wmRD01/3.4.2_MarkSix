import { absMax, assetManager, Button, EventTouch, ImageAsset, Label, Node, Sprite, SpriteFrame, sys, _decorator } from 'cc';
import BaseComponent from '../../../../Model/ComponentBase';
import Player from '../../../../Model/Player';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import CryptoES from 'crypto-es';
import EventMng from '../../../../Manager/EventMng';
import { NotificationType } from '../../../../Enum/NotificationType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import PublicData from '../../../../Model/PublicData';
import PanelLoading from '../../../NoClearNode/PanelLoading';
import PublicModel from '../../../../Model/PublicModel';
import CreateFileSprite from '../../../../Model/CreateFileSprite';
import { EditMenu } from '../../../../Enum/EditMenu';
const { ccclass, property } = _decorator;
@ccclass('PanelClientInfo')
export default class PanelClientInfo extends BaseComponent {
    isNeedUpdate: boolean = true;
    isLoading: boolean = false;
    @property(Sprite)
    spritePlayer: Sprite;
    @property(Label)
    labelPhone: Label
    @property(Label)
    labelNickName: Label
    @property(Label)
    labelEmail: Label
    @property(Button)
    buttonEditNickname: Button;
    @property(Button)
    buttonEditPhone: Button;
    @property(Button)
    buttonEditEmail: Button;
    @property(Button)
    buttonEditPicture: Button;
    labelBetCount: Label;
    labelPointCount: Label;
    labelRank: Label;



    onLoad() {
        super.onLoad()
        this.show()
        this.isNeedUpdate = true;
        this.isLoading = false;
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).on(LobbyStateEvent.EditUpdate, this.onEditUpData, this)
        this.labelEmail.string = ""
        this.labelPhone.string = ""
        this.labelNickName.string = ""
    }
    async onEnable() {
        if (!this.isNeedUpdate || this.isLoading) {
            PanelLoading.instance.closeLoading()
            return;
        }
        this.isLoading = true
        this.startDelay()
        const body = new RequestGPG.Body.NeedToken.MyInfo()
        body.sign = PublicModel.getInstance.convertMD5(PublicData.getInstance.gpgApi)
        let convert = new URLSearchParams(body).toString()
        await new RequestGPG.Request()
            .setToken(Player.getInstance.gpgToken)
            .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.MyInfo}?${convert}`, this.responseMyInfo.bind(this))

        this.isLoading = false
    }
    onDisable() {

    }
    onEditTarget(e: EventTouch, customEventData?: string) {
        this.closeButton()
        switch (Number(customEventData)) {
            case EditMenu.Nickname:
                EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.EditNickname)
                break;
            case EditMenu.Phone:
                EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.EditPhone)
                break;
            case EditMenu.Email:
                EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.EditEmail)
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
                case EditMenu.Email:
                    this.labelEmail.string = str
                    break;
            }
        }
        this.resetButton()
        PanelLoading.instance.closeLoading()
    }
    onUpdateNickName(str: string) {
        if (!PublicModel.getInstance.checkStringNull(str))
            this.labelNickName.string = str

    }
    onUpdatePhone(str: string) {
        if (!PublicModel.getInstance.checkStringNull(str))
            this.labelNickName.string = str
        this.resetButton()
        PanelLoading.instance.closeLoading()
    }
    onUpdateEmail(str: string) {
        if (!PublicModel.getInstance.checkStringNull(str))
            this.labelNickName.string = str
        this.resetButton()
        PanelLoading.instance.closeLoading()
    }
    onSelectPhoto() {
        new CreateFileSprite(this.onUploadAvatar.bind(this))
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
            .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.UploadAvatar}`, (response: ResponseGPG.UploadAvatar.DataClass) => {
                this.responseUploadAvatar(response, _spriteFrame)
            })
    }
    responseUploadAvatar(response: ResponseGPG.UploadAvatar.DataClass, _spriteFrame: SpriteFrame) {
        console.log("圖片上傳成功?", response);
        if (response.Status.Code == "0")
            this.spritePlayer.spriteFrame = _spriteFrame
    }
    async responseMyInfo(response: ResponseGPG.MyInfo.DataClass) {
        console.log("MyInfo", response)
        Player.getInstance.gpgInfo = response;
        // response.data.photo
        // console.log(Player.getInstance.gpgInfo);
        assetManager.loadRemote(response.data.photo.headPhoto, (err, image: ImageAsset) => {
            if (err) {
                console.error(err.message);
                return
            }
            this.isNeedUpdate = false;
            this.spritePlayer.spriteFrame = SpriteFrame.createWithImage(image)
            if (this.stopDelay() < 1)
                setTimeout(PanelLoading.instance.closeLoading.bind(PanelLoading.instance), 1000);
            else
                PanelLoading.instance.closeLoading()
        })
        this.labelNickName.string = response.data.nickName.split("_")[1]/**因為前面會有註冊會員的文字，要刪除掉 */
        this.buttonEditPhone.node.active = PublicModel.getInstance.checkStringNull(response.data.phoneNumber);
        this.labelPhone.string = PublicModel.getInstance.checkStringNull(response.data.phoneNumber) ? "" : response.data.phoneNumber
        this.buttonEditEmail.node.active = PublicModel.getInstance.checkStringNull(response.data.email);
        this.labelEmail.string = PublicModel.getInstance.checkStringNull(response.data.email) ? "" : response.data.email
    }

    resetButton() {
        this.buttonEditNickname.node.active = true
        this.buttonEditPicture.node.active = true
        this.buttonEditPhone.node.active = PublicModel.getInstance.checkStringNull(this.labelPhone.string);
        this.buttonEditEmail.node.active = PublicModel.getInstance.checkStringNull(this.labelEmail.string);
    }
    closeButton() {
        this.buttonEditPicture.node.active = false
        this.buttonEditNickname.node.active = false
        this.buttonEditPhone.node.active = false
        this.buttonEditEmail.node.active = false
    }
}
