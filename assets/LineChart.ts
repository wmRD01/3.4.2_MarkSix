
import { _decorator, Component, Node, PageView, ScrollView, Graphics, Color, log, Label, v3, UITransform } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = pagetest
 * DateTime = Mon Aug 28 2023 18:45:36 GMT+0800 (台北標準時間)
 * Author = sboy61017
 * FileBasename = pagetest.ts
 * FileBasenameNoExtension = pagetest
 * URL = db://assets/pagetest.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('pagetest')
export class pagetest extends Component {
    pageView: PageView;

    paint: Graphics;
    _leve: number = 10;
    height: number = 400;
    width: number = 5000;
    roundMax: number = 100;

    onLoad() {
        this.pageView = this.getComponent(PageView)
        // this.pageView.node.on(PageView.EventType.PAGE_TURNING, this.onPageTurning, this)
        this.pageView.node.on(PageView.EventType.PAGE_TURNING, this.onPageTurning, this)
    }
    onPageTurning(event: PageView) {

        // console.log(event);
        // console.log(event.getCurrentPageIndex());

    }

    start() {
        this.paint = this.node.addComponent(Graphics);
        // this.width = 300 * 100
        let list = [];
        for (let i = 0; i < this.roundMax; i++) {
            list.push(Math.random() * 100);
        }
        this.drawLineChart(list, null, new Color(255, 66, 66, 255));
    }

    drawLineChart(listY, listX, color) {
        //计算数据
        // let max = 150
        let max = Math.max.apply(null, listY);
        let min = Math.min.apply(null, listY);
        let yd = this.height / (max - min);
        let xd = this.width / listY.length;

        //画横轴
        this.paint.lineWidth = 5;//设置宽度
        this.paint.strokeColor = new Color(66, 66, 66, 66);
        this.paint.moveTo(0, 0);
        for (let i = 0; i <= this._leve; i++) {
            this.paint.moveTo(0, i * this.height / this._leve);
            this.paint.lineTo(this.width, i * this.height / this._leve);
            this.putLabel(-20, i * this.height / this._leve - 15, Math.floor((i * (max - min) / this._leve) + min), 25)
        }
        this.paint.stroke();


        //画数据线
        this.paint.lineWidth = 5;//设置宽度
        this.paint.strokeColor = color;
        this.paint.moveTo(0, (listY[0] - min) * yd);
        for (let i = 1; i < listY.length; i++) {
            this.paint.lineTo(i * xd, (listY[i] - min) * yd);
        }
        this.paint.stroke();


        //画 刻度,点,字
        this.paint.lineWidth = 4;//设置宽度
        this.paint.strokeColor = new Color(66, 66, 66, 66);
        for (let i = 0; i < listY.length; i++) {
            this.paint.moveTo(i * xd, 0);
            this.paint.lineTo(i * xd, -10);
            this.paint.stroke();

            // this.putPoint(i * xd, (listY[i] - min) * yd, 7, color)
            if (!!listX && !!listX[i]) {
                this.putLabel(i * xd, -40, listX[i], 25)
            }
            else {
                this.putLabel(i * xd, -40, i, 25)
            }

        }
        log(listY);
    }

    //字
    putLabel(x, y, str, size) {
        let textNode = new Node();
        let text = textNode.addComponent(Label);
        this.node.addChild(textNode);
        text.string = str;
        textNode.position = v3(x, y)
        textNode.layer = this.node.layer;
        let orgSize = textNode.getComponent(UITransform).contentSize
        textNode.getComponent(UITransform).setContentSize(orgSize.width, size);
        text.fontSize = textNode.getComponent(UITransform).contentSize.height - 3;
        text.color = Color.BLACK;
    }

    //画实心点
    putPoint(x, y, r, color) {
        this.paint.fillColor = color;
        this.paint.circle(x, y, r);
        this.paint.fill();
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
