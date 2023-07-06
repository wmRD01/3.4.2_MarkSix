import { Button, Node, UITransform, v3, Vec3, _decorator } from "cc";
import { PageAction } from "../../Enum/PageAction";
import { PageMenu } from "../../Enum/PageMenu";
import ButtonMng from "../../Manager/ButtonMng";
import BaseComponent from "../../Model/ComponentBase";
import PublicData from "../../Model/PublicData";
import PublicModel from "../../Model/PublicModel";
import PageControll from "./PageControll";

const { ccclass, property } = _decorator;
@ccclass('PanelUI')
export default class PanelBottomNavigationBar extends BaseComponent {
    @property(Button)
    btnHome: Button;
    @property(Button)
    btnPoint: Button;
    @property(Button)
    btnChooeseBall: Button;
    @property(Button)
    btnClientInfo: Button;
    @property(Button)
    btnSetting: Button;
    @property(Node)
    btnLayout: Node;
    @property(Node)
    nodeCircle: Node;
    circleY: number;
    mapButton: Map<number, Button> = new Map()
    onLoad() {
        // PageControll.instance.pageEvnet.on(PageAction.ChangeTo, this.onMoveCircle, this)

        this.mapButton.set(0, this.btnHome);
        this.mapButton.set(1, this.btnPoint);
        this.mapButton.set(2, this.btnChooeseBall);
        this.mapButton.set(3, this.btnClientInfo);
        this.mapButton.set(4, this.btnSetting);
        this.circleY = -(PublicData.getInstance.BaseViewHeight / 2) + (this.nodeCircle.getComponent(UITransform).height / 2)
    }
    start() {
        for (let index = 0; index < this.btnLayout.children.length; index++) {
            ButtonMng.addEvent(this, "onMoveCircle", this.getButton(index), index.toString())
        }
    }
    onMoveCircle(e: Event, customEventData?: string) {

        console.log(customEventData);
        console.log(this.getButton(Number(customEventData)).node);


        let getX = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.nodeCircle, this.getButton(Number(customEventData)).node).x
        console.log(v3(getX, this.circleY));

        this.nodeCircle.position = v3(getX, this.circleY)
        console.log(this.nodeCircle.position);

        PageControll.instance.pageEvnet.emit(PageAction.ChangeTo, customEventData)
    }
    getButton(index: number) {
        return this.mapButton.get(index)
    }
}