import { Font, _decorator } from "cc";
import BaseComponent from "../../../Model/ComponentBase";


const { ccclass, property } = _decorator;
@ccclass('TextData')
export default class TextData extends BaseComponent {
    @property(Font)
    font_silver: Font = null;
    @property(Font)
    font_silver_alpha: Font = null;
    @property(Font)
    font_gold: Font = null;

}