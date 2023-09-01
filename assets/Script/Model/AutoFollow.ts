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
        return this
    }
    createNewTarget() {
        this.target = new Node();
        this.node.parent.addChild(this.target)
        this.target.setPosition(this.node.position)
        this.target.setScale(this.node.scale)
        return this
    }
    setAutoScale(isbool: boolean) {
        this.isAutoScale = isbool;
        return this
    }
    update() {
        // if (!this.target) {
        if (!this.node.position.equals(PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target)))
            this.node.position = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(this.node, this.target)
        // console.log("改座標");
        if (!this.node.scale.equals(this.target.scale) && this.isAutoScale)
            this.node.scale = this.target.scale

        if (this.target.active != this.node.active)
            this.node.active = this.target.active
        // }
        // else {
        //     this.node.destroy();
        // }
    }
}