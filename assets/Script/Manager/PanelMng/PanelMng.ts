import { assetManager, find, instantiate, Node, Prefab, _decorator } from 'cc';
import BaseComponent from '../../Model/ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('PanelMng')
export class PanelMng {
    mapPanel: Map<string, BaseComponent> = new Map();
    tempBase: BaseComponent[] = []
    parent: Node;

    async initPanel(_node: Node, bundleName: string) {
        if (this.parent != _node) this.parent = _node
        return new Promise<void>((resolve, reject) => {
            // console.error(bundleName);

            assetManager.loadBundle(bundleName, (err, bundle) => {
                bundle.loadDir("", Prefab, (err, data: Array<Prefab>) => {
                    // console.log(data);
                    data.forEach(_prefab => {
                        let _panel = instantiate(_prefab)
                        this.parent.addChild(_panel)
                    });
                    bundle.release("")
                    resolve()
                })
            });

        })
    }
    setPanel(str: string) {
        let _class = find(str, this.parent).getComponent(str) as BaseComponent
        this.mapPanel.set(str, _class)
        this.tempBase.push(_class)
        return this
    }
    getPanel(str: string) {
        return this.mapPanel.get(str)
    }

    initSetting() {
        let len = this.tempBase.length;
        //排序
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                // 如果當前元素大於下一個元素，則交換它們
                if (this.tempBase[j].zIndex > this.tempBase[j + 1].zIndex) {
                    let temp = this.tempBase[j];
                    this.tempBase[j] = this.tempBase[j + 1];
                    this.tempBase[j + 1] = temp;
                }
            }
        }
        for (let index = 0; index < this.tempBase.length; index++) {
            this.tempBase[index].setZIndex()
        }
        return this
    }
}

class PanelData {
    comp: BaseComponent;
    compName: string;
}