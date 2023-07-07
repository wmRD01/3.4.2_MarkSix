import { instantiate, Node, Prefab, _decorator } from 'cc';
import { AssetType } from '../../../../Enum/AssetType';
import AssetMng from '../../../../Manager/AssetMng';
import BaseComponent from '../../../../Model/ComponentBase';
import RankItmeData from '../../../../Model/RankItmeData';
const { ccclass, property } = _decorator;
@ccclass('PanelTopRank')
export default class PanelTopRank extends BaseComponent {
    @property(Prefab)
    prefabRankItem: Prefab
    @property(Node)
    layoutRank: Node
    @property(Node)
    contentLabel: Node;
    async start() {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        this.layoutRank.removeAllChildren()
        for (let index = 0; index < 20; index++) {
            let _node = instantiate(this.prefabRankItem)
            let _class = _node.getComponent(RankItmeData)
            _class.init(1)
            this.layoutRank.addChild(_node)

        }
    }

}