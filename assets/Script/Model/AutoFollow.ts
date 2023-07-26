import { Component, Node, _decorator } from "cc";
import BaseComponent from "./ComponentBase";
import PublicModel from "./PublicModel";
const { ccclass, property } = _decorator;
@ccclass('LabelAutoFollow')
export default class AutoFollow extends BaseComponent {
    target: Node;
    setTarget(_node: Node) {
        this.target = _node;
    }
    createNewTarget() {
        this.target = new Node();
        this.node.parent.addChild(this.target)
        this.target.setPosition(this.node.position)
        this.target.setScale(this.node.scale)
    }
    update() {
        if (this.node.position.equals(PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target))) return
        // console.log("改座標");
        this.node.scale = this.node.scale
        this.node.position = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target)

        if (this.target.active != this.node.active)
            this.target.active = this.node.active
    }
}