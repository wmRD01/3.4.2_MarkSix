import { Button, find, Label, Node, UITransform, v3, _decorator } from "cc";
import BaseSingletonComponent from "../../../Patten/Singleton/BaseSingletonComponent";
import MyMath from "../../../Plug/MyMath";
import { GameEvent } from "../../Enum/GameEvent";
import { LangType } from "../../Enum/LangType";
import { WebSocketEvent } from "../../Enum/WebSocketEvent";
import ButtonMng from "../../Manager/ButtonMng";
import SocketSetting from "../../Socket/SocketSetting";
const { ccclass, property } = _decorator;
@ccclass('PanelSystemMessage')
export default class PanelSystemMessage extends BaseSingletonComponent<PanelSystemMessage>() {
    nodeFrame: Node
    labelCaption: Label;
    buttonConfirm: Button;
    labelConfirm: Label;
    buttonCancel: Button;
    labelCancel: Label;
    twoBtnPositionX: number
    confirmCallback: Function;
    onLoad() {
        super.onLoad()
        this.nodeFrame = find("Frame", this.node)
        this.countPosition()
        this.buttonConfirm = find("ButtonConfirm", this.nodeFrame).getComponent(Button)
        this.labelConfirm = find("LabelConfirm", this.nodeFrame).getComponent(Label)
        this.buttonCancel = find("ButtonCancel", this.nodeFrame).getComponent(Button)
        this.labelCancel = find("LabelCancel", this.nodeFrame).getComponent(Label)
        this.labelCaption = find("LabelCaption", this.nodeFrame).getComponent(Label)
        this.hide()
        this.setEvent(GameEvent.SetLanguage, this.setLanguage)

    }
    update() {
        if (this.buttonConfirm.node.active) {
            this.labelConfirm.node.position = this.buttonConfirm.node.position;
            let getScale = MyMath.multiply(this.buttonConfirm.node.scale.x, 0.5)
            this.labelConfirm.node.scale = v3(getScale, getScale, getScale);
        }
        if (this.buttonCancel.node.active) {
            this.labelCancel.node.position = this.buttonCancel.node.position;
            let getScale = MyMath.multiply(this.buttonCancel.node.scale.x, 0.5)
            this.labelCancel.node.scale = v3(getScale, getScale, getScale);
        }
    }
    setLanguage() {
        this.labelConfirm.string = SocketSetting.t("1000", LangType.Game)
        this.labelCancel.string = SocketSetting.t("1001", LangType.Game)
        super.setLanguage()
    }
    showSingleConfirm(caption: string, _callBack?: Function, ...arg: any) {
        this.messageInit(caption)

        this.buttonConfirm.node.setPosition(0, -128);
        this.confirmCallback = _callBack
        ButtonMng.clearEvent(this.buttonConfirm);
        if (_callBack)
            ButtonMng.addEvent(this, "onCallBack", this.buttonConfirm);
        ButtonMng.addEvent(this, "addClickEffect", this.buttonConfirm, "btn_enter");
        ButtonMng.addEvent(this, "hide", this.buttonConfirm);
        if (!this.buttonConfirm.node.active) {
            this.buttonConfirm.node.active = true;
            this.labelConfirm.node.active = true;
        }
    }

    showSingleCancel(confirm?: ButtonFunctionApi) {
        //取消按鈕
        this.buttonCancel.node.setPosition(0, -128);
        if (confirm)
            ButtonMng.addEvent(confirm.target, confirm.callback, this.buttonConfirm, confirm.callbackValue ? confirm.callbackValue : null);
        else {
            ButtonMng.clearEvent(this.buttonCancel);
            ButtonMng.addEvent(this, "closeMessage", this.buttonCancel);
        }
        if (!this.buttonCancel.node.active) {
            this.buttonCancel.node.active = true;
            this.labelCancel.node.active = true;
        }
    }
    showDoubleButton(confirm: ButtonFunctionApi) {
        // 確定按鈕
        this.buttonConfirm.node.setPosition(this.twoBtnPositionX, -128);
        ButtonMng.clearEvent(this.buttonConfirm);
        ButtonMng.addEvent(confirm.target, confirm.callback, this.buttonConfirm, confirm.callbackValue ? confirm.callbackValue : null);
        //取消按鈕
        this.buttonCancel.node.setPosition(-this.twoBtnPositionX, -128);
        ButtonMng.clearEvent(this.buttonCancel);
        ButtonMng.addEvent(this, "closeMessage", this.buttonCancel);
        if (!this.buttonCancel.node.active) {
            this.buttonCancel.node.active = true;
            this.labelCancel.node.active = true;
        }
        if (!this.buttonConfirm.node.active) {
            this.buttonConfirm.node.active = true;
            this.labelConfirm.node.active = true;
        }
    }

    closeWindow() {
        this.eventEmit(WebSocketEvent.CloseWindow)
    }
    setCaption(caption: string) {
        this.labelCaption.string = caption
    }
    messageInit(caption: string) {
        this.buttonCancel.node.active = false;
        this.labelCancel.node.active = false;
        this.buttonConfirm.node.active = false;
        this.labelConfirm.node.active = false;
        this.setCaption(caption)
        this.show()
    }


    countPosition() {
        //計算間距
        let spacing = MyMath.divide(find("SpriteBG", this.nodeFrame).getComponent(UITransform).width, 2 + 1) //需要+1原因是要計算一個範圍內的平均值，去切割的話要+1才可得出
        //計算圖片的一半
        let half = MyMath.divide(find("SpriteBG", this.nodeFrame).getComponent(UITransform).width, 2)
        this.twoBtnPositionX = half - spacing
        // console.log(this.twoBtnPositionX, spacing, half);
    }
}