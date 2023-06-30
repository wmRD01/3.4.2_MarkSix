import { instantiate, Label, Node, Prefab, _decorator } from "cc";
import { GameEvent } from "../../Enum/GameEvent";
import { GameStateEvent } from "../../Enum/GameStateEvent";
import BaseComponent from "../../Model/ComponentBase";
import MessageItem from "../../Model/MessageItem";
const { ccclass, property } = _decorator;
@ccclass('PanelGameMessage')
export default class PanelGameMessage extends BaseComponent {
    @property(Prefab)
    item: Prefab
    @property(Node)
    spriteContent: Node
    @property(Node)
    labelContent: Node


    onEnable() {
        this.setEvent(GameEvent.ResetView, this.allReset)
        this.setEvent(GameStateEvent.GameMessage, this.onGameMessage)
    }
    start() {
        if (window.isPhone)
            this.phoneInit()
    }
    allReset() {
        this.spriteContent.removeAllChildren()
        this.labelContent.removeAllChildren()
    }
    onGameMessage(str: string) {
        let _node = instantiate(this.item)
        let _class = _node.getComponent(MessageItem)

        if (this.spriteContent.children.length > 0)
            for (let index = 0; index < this.spriteContent.children.length; index++) {
                this.spriteContent.children[index].getComponent(MessageItem).moveUp()
            }
        this.spriteContent.addChild(_node)
        this.labelContent.addChild(_class.label.node)
        _class.label.string = str

        _class.outFade()
    }
    onDisable() {
        this.deletEvent(GameEvent.ResetView, this.allReset)
        this.deletEvent(GameStateEvent.GameMessage, this.onGameMessage)
    }
}
