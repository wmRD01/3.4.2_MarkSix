import { Button, EventTouch, Node, Sprite, _decorator } from 'cc';
import { AssetType } from '../../../../Enum/AssetType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import AssetMng from '../../../../Manager/AssetMng';
import BaseComponent from '../../../../Model/ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('PanelPageButton')
export default class PanelPageButton extends BaseComponent {
    @property(Node)
    panelRank: Node;
    @property(Node)
    panelPoint: Node;

    @property(Button)
    btnRank: Button;
    @property(Button)
    btnPoint: Button;


    @property(Sprite)
    spriteRank: Sprite;
    @property(Sprite)
    spritePoint: Sprite;
    /**Prefab仔入用 */
    setPanelRank(_node: Node) {
        this.panelRank = _node
    }
    setPanelPoint(_node: Node) {
        this.panelPoint = _node
    }
    start() {
        this.panelRank.active = false;
        this.panelPoint.active = false
        this.onChangePanel(null, PageType.Point.toString());
        this.setEvent(LobbyStateEvent.ChangePointPage, this.onChangePanel)
    }
    async onChangePanel(e: EventTouch, customEventData?: string) {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        console.log(customEventData);

        let convert = Number(customEventData)
        console.log(this.panelRank.active);
        console.log(this.panelPoint.active);

        switch (convert) {
            case PageType.Rank:
                if (this.panelRank.active) return
                this.changeState(this.panelRank, this.spriteRank, true)
                this.changeState(this.panelPoint, this.spritePoint, false)
                break;
            case PageType.Point:
                if (this.panelPoint.active) return
                this.changeState(this.panelRank, this.spriteRank, false)
                this.changeState(this.panelPoint, this.spritePoint, true)
                break;

        }

    }
    changeState(_node: Node, _sprite: Sprite, state: boolean) {
        _node.active = state
        let getSprtie = state ? OnOffData.On : OnOffData.Off
        _sprite.spriteFrame = AssetMng.AssetClass.get(AssetType.Sprite).data.get(getSprtie)
    }
}
enum PageType {
    Point,
    Rank,
}
enum OnOffData {
    On = "integral_button01",
    Off = "integral_button00"
}