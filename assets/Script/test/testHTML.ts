import { director, Label, Node, tween, UITransformComponent, v3, _decorator } from "cc";
import BaseComponent from "../Model/ComponentBase";
import PublicModel from "../Model/PublicModel";

const { ccclass, property } = _decorator;
@ccclass('testHTML')
export default class testHTML extends BaseComponent {
    @property(Label)
    label: Label;
    @property(Label)
    label2: Label;
    start() {

        // // 創建一個新的<link>元素
        // const googleapis = document.createElement("link");

        // // 設定<link>元素的屬性
        // googleapis.rel = "preconnect";
        // googleapis.href = "https://fonts.googleapis.com";
        // // 創建一個新的<link>元素
        // const gstatic = document.createElement("link");

        // // 設定<link>元素的屬性
        // gstatic.rel = "preconnect";
        // gstatic.href = "https://fonts.gstatic.com";
        // gstatic.crossOrigin = ""
        // // 創建一個新的<link>元素
        // const font = document.createElement("link");

        // // 設定<link>元素的屬性
        // font.rel = "stylesheet";
        // font.href = "https://fonts.googleapis.com/css2?family=Sigmar&display=swap";

        // // 將<link>元素添加到<head>元素中
        // const headElement = document.getElementsByTagName("head")[0];
        // headElement.appendChild(googleapis);
        // headElement.appendChild(gstatic);
        // headElement.appendChild(font);
        // console.log(this.label.fontFamily);
        // // setTimeout(() => {

        // //     this.label.fontFamily = "Sigmar"

        // //     this.label.string = "iter"
        // // }, 3000);

        tween(this.node)
            .parallel(
                tween()
                    .call(() => {
                        tween(this.label.node)
                            .to(5, { position: v3(50, 50) })
                            .to(5, { position: v3(0, 0) })
                            .start()
                    }),
                tween()
                    .call(() => {
                        tween(this.label2.node)
                            .to(5, { position: v3(-50, -50) })
                            .to(5, { position: v3(0, 0) })
                            .start()
                    })
            )
            .start()

        const temp = new Node()
        console.warn("開始");

        this.changParent(temp, this.label.node, this.label.node.parent)
        console.warn(temp.parent);



    }
    changParent(node: Node, targetNode: Node, parent: Node) {
        console.log(node);
        if (node.parent == null || node.parent == undefined)
            director.getScene().getChildByName("Canvas").addChild(node)
        console.log(node.parent);

        let orgPos = this.to2DConvertOtherNodeSpaceAR(node, targetNode)
        parent.addChild(node)
        node.position = orgPos
    }
    to2DConvertOtherNodeSpaceAR(node: Node, targetNode: Node) {
        let pos = targetNode.position;
        // console.log(pos);
        //轉成世界座標
        let worldPoint = node.getComponent(UITransformComponent).convertToWorldSpaceAR(pos);
        // console.log(worldPoint);
        return targetNode.getComponent(UITransformComponent).convertToNodeSpaceAR(worldPoint);
    }
}