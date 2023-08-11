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
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
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
    start() {
        this.reset()
        this.setEvent(LobbyStateEvent.NextIssueID, this.reset)
    }
    async onEnable() {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        await this.requesTopScore()
    }
    async reset() {
        this.layoutRank.removeAllChildren()
        this.labelContent.removeAllChildren()
        this.spriteBGContent.removeAllChildren()
        if (this.node.active) {
            await this.requesTopScore()
        }
    }
    async requesTopScore() {
        return new Promise<void>(async (resolve, reject) => {
            const body = new RequestGPG.Body.NeedToken.TopScore()
            const todayDate = new Date(PublicData.getInstance.today)
            body.sDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-1`
            body.eDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.TopScore)
            let convert = new URLSearchParams(body).toString()
            console.log(body);
            console.log(convert);
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .fetchData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.TopScore}?${convert}`, this.responseTopScore.bind(this))
            resolve()
        })
    }
    responseTopScore(response?: ResponseGPG.TopScore.DataClass) {
        console.log("排行榜", response);
        for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].totalScore == 0) continue;
            if (this.layoutRank.children.length >= 100) break;
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