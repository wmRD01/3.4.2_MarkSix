import { Button, color, EditBox, find, Label, Node, Sprite } from "cc";
import BaseComponent from "../../../Model/ComponentBase";

export default class DataExchange extends BaseComponent {
    buttonBlock: Button;
    buttonClose: Button;
    buttonConfirm: Button;
    buttonCanelText: Button;
    buttonRefreshView: Button;
    buttongoStaoredValue: Button;
    contentBntton: Node;
    arrayPointButton: Array<PointBtn.Btn> = new Array;
    labelConfirm: Label;
    labelTitle: Label;
    labelWalletHave_Title: Label;
    labelWalletHaveNumber: Label;
    labelChangeScaleTitle: Label;
    labelChangeScaleNumber: Label;
    labelClinetHaveTitle: Label;
    labelClinetHaveNumber: Label;
    editBoxEnterNumber: EditBox

    defaultPlaceholderLabel: string

    wallet: number = 0;
    clinetHave: number = 0;

}



export namespace PointBtn {
    export class Btn {
        btn: Button;
        spriteButtonBG: Sprite
        labelNumber: Label;
        setState(isbool: boolean) {
            // console.log(isbool);
            this.btn.interactable = isbool
            let btnBGClolor = isbool ? "#384D8A" : "#353741"
            let btnLableClolor = isbool ? "#FFFFFF" : "#525565"
            this.spriteButtonBG.color = color().fromHEX(btnBGClolor)
            this.labelNumber.color = color().fromHEX(btnLableClolor)
        }
        setNum(str: string) {
            this.labelNumber.string = str
        }
    }

}