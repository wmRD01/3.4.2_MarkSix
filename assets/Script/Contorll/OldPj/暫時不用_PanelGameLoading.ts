import { director, find, Label, ProgressBar, Sprite, SpriteFrame, tween, UIOpacityComponent, v3 } from 'cc';
import { GameEvent } from '../../Enum/GameEvent';
import MyMath from '../../../Plug/MyMath';
import BaseComponent from '../../Model/ComponentBase';
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

        // director.preloadScene("MainGame", this.onProgress.bind(this), () => {
        //     CheckLoading.getInstance.changeState(CheckLoadingType.isGameSence, true)
        //     if (CheckLoading.getInstance.checkAllEnd())
        //         this.eventEmit(WebSocketEvent.Login, CommandType.ln)
        // })
        super.viewInit()
        this.show()
    }
    setLogo(_sprite: SpriteFrame) {
        let getUI = this.sprite_Logo.getComponent(UIOpacityComponent)
        getUI.opacity = 0
        this.sprite_Logo.spriteFrame = _sprite
        let getOrg = this.sprite_Logo.node.position
        tween(getUI)
            .to(.5, { opacity: 255 })
            .start()

        let action = tween()
            .to(1, { position: v3(getOrg.x, getOrg.y + 30, getOrg.z) })
            .to(1, { position: v3(getOrg.x, getOrg.y - 30, getOrg.z) })

        tween(this.sprite_Logo.node)
            .set({ position: v3(getOrg.x, getOrg.y - 30, getOrg.z) })
            .then(action)
            .union()
            .repeatForever()
            .start()
    }

    closeGameLoadAction() {
        tween(this.node)
            .delay(1)
            .call(() => {
                this.node.destroy()
            })
            .start()
    }
    onProgress(completedCount: number, totaleCount: number, item: any) {
        console.log(completedCount, totaleCount);

        // console.log(MyMath.divide(completedCount, totaleCount));
        // console.log(this.progressBar);

        this.progressBar.progress = MyMath.divide(completedCount, totaleCount)

        this.label_progress.string = Math.floor(MyMath.divide(completedCount, totaleCount) * 100).toString() + "%"

        if (this.progressBar.progress >= 1) {
            this.label_progress.string = "wait other data"
        }
    }
}