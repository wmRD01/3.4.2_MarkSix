System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Graphics, Color, log, Label, v3, UITransform, BaseComponent, _dec, _class, _temp, _crd, ccclass, property, BarChart;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../Model/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      log = _cc.log;
      Label = _cc.Label;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "057fa7xfDVNvqKr+OMTGrnd", "BarChart", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BarChart = (_dec = ccclass('BarChart'), _dec(_class = (_temp = class BarChart extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "paint", void 0);

          _defineProperty(this, "_data", 3);

          _defineProperty(this, "height", 300);

          _defineProperty(this, "width", 600);

          _defineProperty(this, "roundMax", 100);
        }

        start() {
          this.paint = this.node.addComponent(Graphics); // 這行程式碼為當前組件（可能是一個Node）添加一個Graphics組件，用於繪製圖形。

          var list = [];

          for (var i = 0; i < this.roundMax; i++) {
            list.push(Math.random() * 100);
          } // 創建一個空數組list，並在其中生成隨機數值，總數為this.roundMax次。


          this.drawLineChart(list, null, new Color(255, 66, 66, 255)); // 呼叫drawLineChart函數，傳遞生成的數組list以及一些其他參數，用來畫折線圖。
        }

        drawLineChart(listY, listX, color) {
          //計算數據
          var max = Math.max.apply(null, listY);
          var min = Math.min.apply(null, listY);
          var yd = this.height / (max - min);
          var xd = this.width / listY.length; // 計算最大值max、最小值min，以及y軸和x軸的單位距離yd和xd。
          //畫橫軸

          this.paint.lineWidth = 5;
          this.paint.strokeColor = new Color(66, 66, 66, 66); // 設置繪圖筆的寬度和顏色。

          this.paint.moveTo(0, 0);

          for (var i = 0; i <= this._data; i++) {
            this.paint.moveTo(0, i * this.height / this._data);
            this.paint.lineTo(this.width, i * this.height / this._data);
            this.putLabel(-20, i * this.height / this._data - 15, Math.floor(i * (max - min) / this._data + min), 25);
          } // 使用繪圖筆繪製橫軸，包括刻度和對應的數字。


          this.paint.stroke();
          return; //畫數據線

          this.paint.lineWidth = 5;
          this.paint.strokeColor = color; // 設置繪圖筆的寬度和顏色，這次用不同的顏色繪製數據線。

          this.paint.moveTo(0, (listY[0] - min) * yd);

          for (var _i = 1; _i < listY.length; _i++) {
            this.paint.lineTo(_i * xd, (listY[_i] - min) * yd);
          } // 使用繪圖筆繪製數據線。


          this.paint.stroke(); //畫 刻度,點,字

          this.paint.lineWidth = 4;
          this.paint.strokeColor = new Color(66, 66, 66, 66); // 設置繪圖筆的寬度和顏色。

          for (var _i2 = 0; _i2 < listY.length; _i2++) {
            this.paint.moveTo(_i2 * xd, 0);
            this.paint.lineTo(_i2 * xd, -10);
            this.paint.stroke(); // this.putPoint(i * xd, (listY[i] - min) * yd, 7, color)
            // 該行程式碼註解掉了，不再使用。

            if (!!listX && !!listX[_i2]) {
              this.putLabel(_i2 * xd, -40, listX[_i2], 25);
            } else {
              this.putLabel(_i2 * xd, -40, _i2, 25);
            } // 使用putLabel函數在折線圖上標記刻度和數字。

          }

          log(listY);
        } //字


        putLabel(x, y, str, size) {
          var textNode = new Node();
          var text = textNode.addComponent(Label);
          this.node.addChild(textNode); // 創建一個新的Node和Label組件，用於顯示文字標籤。

          text.string = str;
          textNode.position = v3(x, y);
          textNode.layer = this.node.layer;
          var orgSize = textNode.getComponent(UITransform).contentSize;
          textNode.getComponent(UITransform).setContentSize(orgSize.width, size);
          text.fontSize = textNode.getComponent(UITransform).contentSize.height - 3;
          text.color = Color.BLACK; // 設置文字內容、位置、大小和顏色等屬性。
        } //畫實心點


        putPoint(x, y, r, color) {
          this.paint.fillColor = color;
          this.paint.circle(x, y, r);
          this.paint.fill(); // 使用繪圖筆繪製一個實心圓點。
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BarChart.js.map