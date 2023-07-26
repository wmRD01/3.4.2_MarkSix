import { assetManager, EventTouch, ImageAsset, Label, Sprite, SpriteFrame, sys, _decorator } from 'cc';
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
const { ccclass, property } = _decorator;
@ccclass('PanelClientInfo')
export default class PanelClientInfo extends BaseComponent {
    isNeedUpdata: boolean = true;
    isLoading: boolean = false;
    @property(Sprite)
    spritePlayer: Sprite;
    @property(Label)
    labelPhone: Label
    @property(Label)
    labelNickName: Label
    @property(Label)
    labelEmail: Label



    async start() {
        this.show()
        this.isNeedUpdata = true;
        this.isLoading = false;
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).on(LobbyStateEvent.ActivePanelClientInfo, this.activePanel, this)
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).on(LobbyStateEvent.ChangePlayerPicture, this.onChangePlayerPicture, this)
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).on(LobbyStateEvent.UpDataPlayer, this.onUpdataPlayer, this)
        // console.log(sys.browserType, sys.os);
        // console.log(md5("12315235"));

    }
    testGet(repon) {
        console.log(repon);

    }
    async onEnable() {
        if (!this.isNeedUpdata || this.isLoading) return;
        this.isLoading = true
        PanelLoading.instance.openLoading("資料讀取中")
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
    onActivePanel(e: EventTouch, customEventData?: string) {
        this.hide()
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.ChangePlayerPicture, this.spritePlayer.spriteFrame)
        EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.ActivePanelClientEdit, true)
    }
    onUpdataPlayer() {
        this.isNeedUpdata = true
    }
    activePanel(bool: boolean) {
        bool ? this.show() : this.hide()
    }
    async responseMyInfo(response: ResponseGPG.MyInfo.DataClass) {
        console.log("MyInfo", response)
        Player.getInstance.gpgInfo = response;
        // response.data.photo
        console.log(response.data.photo.headPhoto);

        assetManager.loadRemote(response.data.photo.headPhoto, (err, image: ImageAsset) => {

            if (err) {
                console.error(err.message);
                return
            }

            EventMng.getInstance.mapEvnet.get(NotificationType.Panel).emit(LobbyStateEvent.ChangePlayerPicture, SpriteFrame.createWithImage(image))
            this.isNeedUpdata = false;
            if (this.stopDelay() < 1)
                setTimeout(PanelLoading.instance.closeLoading.bind(PanelLoading.instance), 1000);
            else
                PanelLoading.instance.closeLoading()

        })
        this.labelNickName.string = response.data.nickName
        this.labelPhone.string = response.data.phoneNumber
        this.labelEmail.string = response.data.email
    }
    onChangePlayerPicture(_spriteFrame: SpriteFrame) {
        this.spritePlayer.spriteFrame = _spriteFrame
    }


}

