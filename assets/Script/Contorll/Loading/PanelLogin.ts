import { director, find, Label, ProgressBar, Sprite, SpriteFrame, tween, UIOpacity, v3, _decorator } from 'cc';
import MyMath from '../../../Plug/MyMath';
import { GameEvent } from '../../Enum/GameEvent';
import { GameSceneName } from '../../Enum/GameSenceName';
import BaseComponent from '../../Model/ComponentBase';
import Player from '../../Model/Player';
import PublicData from '../../Model/PublicData';
import PublicModel from '../../Model/PublicModel';
import { RequestGPG as RequestGPG } from '../Api/GPGAPI/RequestGPG';
const { ccclass, property } = _decorator;


@ccclass('PanelLogin')
export default class PanelLogin extends BaseComponent {
    progressBar: ProgressBar;
    label_progress: Label;
    sprite_Logo: Sprite;
    onLoad() {


        director.preloadScene(GameSceneName.Lobby, this.eventProgress.bind(this), () => {
            /**確認資源加載完成，要如何確認呢? */
        })
        this.show()
    }

    setProgressText(str: string) {
        this.label_progress.string = str
    }
    setLogo(_sprite: SpriteFrame) {
        let getUI = this.sprite_Logo.getComponent(UIOpacity)
        getUI.opacity = 255
        this.sprite_Logo.spriteFrame = _sprite
        let getOrg = this.sprite_Logo.node.position

    }

    closeGameLoadAction() {
        /**停止Loading */
        /**顯示登入介面 */

    }
    requestVerificationClient() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.ValidateContactInfo()
            body.Phone = `+886999999999`
            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.Betlog}?${convert}`, this.responseBetlog.bind(this))
            resolve()
        })
        /**送出驗證 */
        const url = "https://a1-gpg.ceis.tw/Token/ValidateContactInfo"
        const request = new RequestGPG.Request()
        request.method = RequestGPG.Method.POST
        const body = new RequestGPG.Body.NotNeedToken.ValidateContactInfo()
        body.Phone = `+886999999999`
        request.body = JSON.stringify(body)
        fetch(url, request)
            .then(this.我轉資料)
            .then(this.我拿資料囉)

        console.log("你會等我?");
    }
    eventProgress(completedCount: number, totaleCount: number, item: any) {
        // console.log(completedCount, totaleCount);

        // console.log(MyMath.divide(completedCount, totaleCount));
        // console.log(this.progressBar);

        this.progressBar.progress = MyMath.divide(completedCount, totaleCount)

        this.label_progress.string = Math.floor(MyMath.divide(completedCount, totaleCount) * 100).toString() + "%"

        if (this.progressBar.progress >= 1) {
            this.label_progress.string = "wait other data"
        }

    }
    我轉資料(response) {
        return response.json()
    }
    我拿資料囉(response) {
        console.log("哈哈哈宋拉", response)
    }
}