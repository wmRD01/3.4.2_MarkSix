import { instantiate, Node, Prefab, _decorator } from 'cc';
import { AssetType } from '../../../../Enum/AssetType';
import AssetMng from '../../../../Manager/AssetMng';
import BaseComponent from '../../../../Model/ComponentBase';
import AutoFollow from '../../../../Model/AutoFollow';
import RankItmeData from '../../../../Model/RankItmeData';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import PublicModel from '../../../../Model/PublicModel';
import PublicData from '../../../../Model/PublicData';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
import Player from '../../../../Model/Player';
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

        await this.requesTopScore()
    }
    async requesTopScore() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.TopScore()
            const getDate = new Date(PublicData.getInstance.today)
            body.sDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-01`
            body.eDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-${PublicModel.getInstance.getMonthAllDay(PublicData.getInstance.today)}`
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.TopScore)
            let convert = new URLSearchParams(body).toString()
            console.log(body);
            console.log(convert);
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .fetchData(`${RequestGPG.APIUrl.playAPI}${RequestGPG.API.TopScore}?${convert}`, this.responseTopScore.bind(this))
            resolve()
        })
    }
    responseTopScore(response?: ResponseGPG.TopScore.DataClass) {
        console.log("排行榜", response);
        for (let index = 0; index < response.data.length; index++) {
            let _node = instantiate(this.prefabRankItem)
            let _class = _node.getComponent(RankItmeData)
            _class.init(response.data[index])
            _class.labelName.addComponent(AutoFollow).createNewTarget()
            _class.labelPointCount.addComponent(AutoFollow).createNewTarget()
            _class.spriteBG.addComponent(AutoFollow).setTarget(_node)
            this.labelContent.addChild(_class.labelName.node)
            this.labelContent.addChild(_class.labelPointCount.node)
            this.spriteBGContent.addChild(_class.spriteBG.node)
            this.layoutRank.addChild(_node)
        }
    }

}