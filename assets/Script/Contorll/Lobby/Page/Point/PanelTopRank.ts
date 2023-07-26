import { instantiate, Node, Prefab, _decorator } from 'cc';
import { AssetType } from '../../../../Enum/AssetType';
import AssetMng from '../../../../Manager/AssetMng';
import BaseComponent from '../../../../Model/ComponentBase';
import AutoFollow from '../../../../Model/AutoFollow';
import RankItmeData from '../../../../Model/RankItmeData';
const { ccclass, property } = _decorator;
@ccclass('PanelTopRank')
export default class PanelTopRank extends BaseComponent {
    @property(Prefab)
    prefabRankItem: Prefab
    @property(Node)
    layoutRank: Node
    @property(Node)
    labelContent: Node;
    @property(Node)
    spriteBGContent: Node;
    async start() {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.layoutRank.removeAllChildren()
        for (let index = 0; index < 20; index++) {
            this.RankData()

        }
    }
    RankData() {
        let _node = instantiate(this.prefabRankItem)
        let _class = _node.getComponent(RankItmeData)
        _class.init(1)
        _class.labelName.addComponent(AutoFollow).createNewTarget()
        _class.labelPointCount.addComponent(AutoFollow).createNewTarget()
        _class.spriteBG.addComponent(AutoFollow).setTarget(_node)
        this.labelContent.addChild(_class.labelName.node)
        this.labelContent.addChild(_class.labelPointCount.node)
        this.spriteBGContent.addChild(_class.spriteBG.node)
        this.layoutRank.addChild(_node)

    }

}