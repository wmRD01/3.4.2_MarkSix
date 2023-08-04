import { Label, Sprite, SpriteAtlas, UITransform, _decorator } from 'cc';
import { ResponseGPG } from '../Contorll/Api/GPGAPI/ResponseGPG';
import { AssetType } from '../Enum/AssetType';
import AssetMng from '../Manager/AssetMng';
import BaseComponent from './ComponentBase';
import PublicModel from './PublicModel';
const { ccclass, property } = _decorator;
@ccclass('RankItmeData')
export default class RankItmeData extends BaseComponent {
    @property(UITransform)
    spriteRankUI: UITransform
    @property(Sprite)
    spriteRank: Sprite
    @property(Sprite)
    spriteBG: Sprite
    @property(Label)
    labelName: Label;
    @property(Label)
    labelPointCount: Label;
    @property(Label)
    labelRank: Label;
    init(data: ResponseGPG.TopScore.TopScore) {
        this.spriteRank.spriteFrame = this.checkRank(data.rank)
        if (!PublicModel.getInstance.checkStringNull(data.nickName)) {
            let getplatform = data.nickName?.split("_")[0]/**因為前面會有註冊會員的文字，要刪除掉 */
            this.labelName.string = data.nickName.replace(`${getplatform}_`, "")
        }
        else
            this.labelName.string = data.nickName
        this.labelPointCount.string = data.totalScore.toString()
        this.labelRank.string = data.rank.toString()
    }
    checkRank(num: number) {
        if (num < 4) {
            this.spriteRankUI.setAnchorPoint(.5, .36)
            return AssetMng.AssetClass.get(AssetType.Sprite).data.get(`integral_${num}`)
        }
        else
            return AssetMng.AssetClass.get(AssetType.Sprite).data.get(`integral_common`)
    }
    randomRank() {
        return 1 + (Math.floor(Math.random() * 5))
    }
}