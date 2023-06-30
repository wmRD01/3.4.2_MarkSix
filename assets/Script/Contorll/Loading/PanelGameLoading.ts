import { director, find, Label, ProgressBar, Sprite, SpriteFrame, tween, UIOpacity, v3, _decorator } from 'cc';
import MyMath from '../../../Plug/MyMath';
import { GameEvent } from '../../Enum/GameEvent';
import { GameSceneName } from '../../Enum/GameSenceName';
import BaseComponent from '../../Model/ComponentBase';
import { RequestGPG as RequestGPG } from '../../Model/ResponsGPG';
const { ccclass, property } = _decorator;


@ccclass('PanelGameLoading')
export default class PanelGameLoading extends BaseComponent {
    progressBar: ProgressBar;
    label_progress: Label;
    sprite_Logo: Sprite;
    onLoad() {


        this.progressBar = find("ProgressBar", this.node).getComponent(ProgressBar);
        this.sprite_Logo = find("sprite_Logo", this.node).getComponent(Sprite);
        this.label_progress = find("con_Text/label_progress", this.node).getComponent(Label);
        this.label_progress.string = "0%"
        this.progressBar.progress = 0
        this.setEvent(GameEvent.SetLogo, this.setLogo)
        this.setEvent(GameEvent.CloseGameLoad, this.closeGameLoadAction)

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
        // tween(getUI)
        //     .to(.5, { opacity: 255 })
        //     .start()

        // let action = tween()
        //     .to(1, { position: v3(getOrg.x, getOrg.y + 30, getOrg.z) })
        //     .to(1, { position: v3(getOrg.x, getOrg.y - 30, getOrg.z) })

        // tween(this.sprite_Logo.node)
        //     .set({ position: v3(getOrg.x, getOrg.y - 30, getOrg.z) })
        //     .then(action)
        //     .union()
        //     .repeatForever()
        //     .start()
    }

    closeGameLoadAction() {
        /**停止Loading */
        /**顯示登入介面 */

    }
    eventVerificationClient() {
        /**送出驗證 */
        const url = "https://a1-gpg.ceis.tw/Token/ValidateContactInfo"
        const request = new RequestGPG.Request()
        request.method = RequestGPG.Method.POST
        const body = new RequestGPG.Body.ValidateContactInfo()
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