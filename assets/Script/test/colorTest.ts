
import { _decorator, Component, Node, Sprite, Color, tween } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = colorTest
 * DateTime = Mon Apr 24 2023 10:23:04 GMT+0800 (台北標準時間)
 * Author = sboy61017
 * FileBasename = colorTest.ts
 * FileBasenameNoExtension = colorTest
 * URL = db://assets/Script/test/colorTest.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('colorTest')
export class colorTest extends Component {
    // [1]
    // dummy = '';

    // [2]
    @property(Sprite)
    sprite: Sprite
    tempsprite: Sprite

    start() {
        this.tempsprite = new Node().addComponent(Sprite)
        tween(this.tempsprite.color)
            .repeatForever(tween()
                .to(1, { a: 0 })
                .to(1, { a: 255 })
            )
            .start()





    }

    update(deltaTime: number) {
        console.log(this.sprite.color.a);
        // let getColor = this.sprite.color.a
        let spritecolor = new Color(this.sprite.color)
        spritecolor.a = this.tempsprite.color.a
        this.sprite.color = spritecolor

    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
