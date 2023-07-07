import { Label, Sprite, SpriteAtlas, UITransform, _decorator } from 'cc';
import { AssetType } from '../Enum/AssetType';
import AssetMng from '../Manager/AssetMng';
import BaseComponent from './ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('RankItmeData')
export default class RankItmeData extends BaseComponent {
    @property(UITransform)
    spriteRankUI: UITransform
    @property(Sprite)
    spriteRank: Sprite
    @property(Label)
    labelName: Label;
    @property(Label)
    labelPointCount: Label;
    init(data) {
        this.spriteRank.spriteFrame = this.checkRank(this.randomRank())
        this.labelName.string = this.randomRank().toString()
        this.labelPointCount.string = this.randomRank().toString()

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