
import { Component, Node, _decorator } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

/**
 * Predefined variables
 * Name = NewComponent
 * DateTime = Fri Dec 29 2023 11:46:06 GMT+0800 (台北標準時間)
 * Author = sboy61017
 * FileBasename = NewComponent.ts
 * FileBasenameNoExtension = NewComponent
 * URL = db://assets/NewComponent.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

let str: string = '2'
@ccclass('TestItem')
export class TestItem<TKey, TValue> {
    @property
    public key: TKey;
    @property
    public value: TValue;

    constructor(_key: TKey, _value: TValue) {
        this.key = _key;
        this.value = _value
    }
    @property({ displayName: str })
    myNode: Node = new Node()


}
@ccclass('TestSet')
@executeInEditMode(true)
export class TestSet extends Component {
    @property({ type: TestItem })
    CowAnim: TestItem<string, Node>[] = [];
    onLoad() {
        console.log(this);

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
