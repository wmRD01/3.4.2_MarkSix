import { _decorator, Component, Node, PageView, ScrollView, Graphics, Color, log, Label, v3, UITransform } from 'cc';
import BaseComponent from './Script/Model/ComponentBase';
const { ccclass, property } = _decorator;
@ccclass('BarChart')
export default class BarChart extends BaseComponent {
    paint: Graphics;
    //數據分層
    _data: number = 3;
    height: number = 300;
    width: number = 600;
    //局數量
    roundMax: number = 100;
    start() {
        this.paint = this.node.addComponent(Graphics);
        // 這行程式碼為當前組件（可能是一個Node）添加一個Graphics組件，用於繪製圖形。

        let list = [];
        for (let i = 0; i < this.roundMax; i++) {
            list.push(Math.random() * 100);
        }
        // 創建一個空數組list，並在其中生成隨機數值，總數為this.roundMax次。

        this.drawLineChart(list, null, new Color(255, 66, 66, 255));
        // 呼叫drawLineChart函數，傳遞生成的數組list以及一些其他參數，用來畫折線圖。
    }

    drawLineChart(listY, listX, color) {
        //計算數據
        let max = Math.max.apply(null, listY);
        let min = Math.min.apply(null, listY);
        let yd = this.height / (max - min);
        let xd = this.width / listY.length;
        // 計算最大值max、最小值min，以及y軸和x軸的單位距離yd和xd。

        //畫橫軸
        this.paint.lineWidth = 5;
        this.paint.strokeColor = new Color(66, 66, 66, 66);
        // 設置繪圖筆的寬度和顏色。

        this.paint.moveTo(0, 0);
        for (let i = 0; i <= this._data; i++) {
            this.paint.moveTo(0, i * this.height / this._data);
            this.paint.lineTo(this.width, i * this.height / this._data);
            this.putLabel(-20, i * this.height / this._data - 15, Math.floor((i * (max - min) / this._data) + min), 25)
        }
        // 使用繪圖筆繪製橫軸，包括刻度和對應的數字。

        this.paint.stroke();

        return
        //畫數據線
        this.paint.lineWidth = 5;
        this.paint.strokeColor = color;
        // 設置繪圖筆的寬度和顏色，這次用不同的顏色繪製數據線。

        this.paint.moveTo(0, (listY[0] - min) * yd);
        for (let i = 1; i < listY.length; i++) {
            this.paint.lineTo(i * xd, (listY[i] - min) * yd);
        }
        // 使用繪圖筆繪製數據線。

        this.paint.stroke();


        //畫 刻度,點,字
        this.paint.lineWidth = 4;
        this.paint.strokeColor = new Color(66, 66, 66, 66);
        // 設置繪圖筆的寬度和顏色。

        for (let i = 0; i < listY.length; i++) {
            this.paint.moveTo(i * xd, 0);
            this.paint.lineTo(i * xd, -10);
            this.paint.stroke();

            // this.putPoint(i * xd, (listY[i] - min) * yd, 7, color)
            // 該行程式碼註解掉了，不再使用。

            if (!!listX && !!listX[i]) {
                this.putLabel(i * xd, -40, listX[i], 25)
            }
            else {
                this.putLabel(i * xd, -40, i, 25)
            }
            // 使用putLabel函數在折線圖上標記刻度和數字。

        }
        log(listY);
    }

    //字
    putLabel(x, y, str, size) {
        let textNode = new Node();
        let text = textNode.addComponent(Label);
        this.node.addChild(textNode);
        // 創建一個新的Node和Label組件，用於顯示文字標籤。

        text.string = str;
        textNode.position = v3(x, y)
        textNode.layer = this.node.layer;
        let orgSize = textNode.getComponent(UITransform).contentSize
        textNode.getComponent(UITransform).setContentSize(orgSize.width, size);
        text.fontSize = textNode.getComponent(UITransform).contentSize.height - 3;
        text.color = Color.BLACK;
        // 設置文字內容、位置、大小和顏色等屬性。
    }

    //畫實心點
    putPoint(x, y, r, color) {
        this.paint.fillColor = color;
        this.paint.circle(x, y, r);
        this.paint.fill();
        // 使用繪圖筆繪製一個實心圓點。
    }

}