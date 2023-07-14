import { EventTarget, Node, Tween, tween, Vec3, _decorator } from 'cc';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import BaseComponent from '../../../../Model/ComponentBase';
import PublicModel from '../../../../Model/PublicModel';
const { ccclass, property } = _decorator;
@ccclass('PanelChooeseBall')
export default class PanelChooeseBall extends BaseComponent {
    @property(Node)

    ballLayout: Node
    onLoad() {
        this.setEvent(LobbyStateEvent.BallChooeseAction, this.onAction)
    }
    onAction(_node: Node, index: number) {

        let goMoveTo = PublicModel.getInstance.to2DConvertOtherNodeSpaceAR(_node, this.ballLayout.children[index])
        _node.setScale(Vec3.ONE)
        _node.angle = 0
        Tween.stopAllByTarget(_node)
        tween(_node)
            .to(.5, { position: goMoveTo })
            .start()

    }
    reProcessing() {

    }
}