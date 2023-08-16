import { Label, _decorator } from "cc";
import BaseComponent from "../Model/ComponentBase";
const { ccclass, property } = _decorator;
@ccclass('extentTest')
export default class extentTest extends BaseComponent {
    @property(Label)
    testlabel: Label
}