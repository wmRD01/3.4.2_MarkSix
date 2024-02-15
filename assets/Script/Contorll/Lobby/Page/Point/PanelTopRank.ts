import { instantiate, Node, Prefab, _decorator } from 'cc';
import { AssetType } from '../../../../Enum/AssetType';
import { LobbyStateEvent } from '../../../../Enum/LobbyStateEvent';
import AssetMng from '../../../../Manager/AssetMng';
import AutoFollow from '../../../../Model/AutoFollow';
import BaseComponent from '../../../../Model/ComponentBase';
import Player from '../../../../Model/Player';
import PublicData from '../../../../Model/PublicData';
import PublicModel from '../../../../Model/PublicModel';
import RankItmeData from '../../../../Model/RankItmeData';
import { RequestGPG } from '../../../Api/GPGAPI/RequestGPG';
import { ResponseGPG } from '../../../Api/GPGAPI/ResponseGPG';
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
    spriteRankBGContent: Node;

    onLoad() {
        super.onLoad()
        this.reset()
    }
    start() {
        this.setEvent(LobbyStateEvent.NextIssueID, this.reset)
    }
    async onEnable() {
        await AssetMng.waitStateCheck(AssetType.Sprite)
        console.log(this.layoutRank.children.length);

        if (this.layoutRank.children.length == 0)
            await this.requesTopScore()
    }
    async reset() {
        this.layoutRank.removeAllChildren()
        this.labelContent.removeAllChildren()
        this.spriteRankBGContent.removeAllChildren()
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
            body.sign = PublicModel.getInstance.convertSign(body, RequestGPG.Body.NeedToken.TopScore, PublicData.getInstance.gpgApiKey)
            let convert = PublicModel.getInstance.convertObjectToWebParams(body)
            console.log(body);
            console.log(convert);
            await new RequestGPG.Request()
                .setToken(Player.getInstance.gpgToken)
                .SwitchGetData(`${PublicData.getInstance.gpgUrlPlayApi}${RequestGPG.API.TopScore}?${convert}`, this.responseTopScore.bind(this))
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
            _class.labelRank.addComponent(AutoFollow).createNewTarget()
            _class.spriteRank.addComponent(AutoFollow)
                .createNewTarget()
                .setAutoScale(false)
            this.labelContent.addChild(_class.labelName.node)
            this.labelContent.addChild(_class.labelPointCount.node)
            this.labelContent.addChild(_class.labelRank.node)
            this.spriteRankBGContent.addChild(_class.spriteRank.node)
            this.layoutRank.addChild(_node)
        }
    }

}