import { Component, Node, _decorator } from "cc";
import BaseComponent from "./ComponentBase";
import PublicModel from "./PublicModel";
const { ccclass, property } = _decorator;
@ccclass('LabelAutoFollow')
export default class AutoFollow extends BaseComponent {
    target: Node;
    isAutoScale: boolean = true;
    setTarget(_node: Node) {
        this.target = _node;
    }
    createNewTarget() {
        this.target = new Node();
        this.node.parent.addChild(this.target)
        this.target.setPosition(this.node.position)
        this.target.setScale(this.node.scale)
    }
    setAutoScale(isbool:boolean) {
        this.isAutoScale = isbool;
    }
    update() {
        if (!this.node.position.equals(PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target)))
            this.node.position = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target)
        // console.log("改座標");
        if (!this.node.scale.equals(this.target.scale) && this.isAutoScale)
            this.node.scale = this.target.scale

        if (this.target.active != this.node.active)
            this.node.active = this.target.active
    }
}