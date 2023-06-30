System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MyMath, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3389fC27UdOfoRE2ZwlSDAs", "MyMath", undefined);

      MyMath = class MyMath {
        /**
        * 加法
        */
        add(value1, value2, lenght) {
          return Math.round(value1 * 1000 + value2 * 1000) / 1000;
        }
        /**
        * 減法
        */


        minus(value1, value2, lenght) {
          return (value1 * 1000 - value2 * 1000) / 1000;
        }
        /**
        * 乘法
        */


        multiply(value1, value2, lenght) {
          return Math.round(value1 * 1000 * (value2 * 1000)) / Math.pow(1000, 2);
        }
        /**
        * 除法
        */


        divide(value1, value2, lenght) {
          return value1 * 1000 / (value2 * 1000);
        }
        /**
         * 四捨五入法
         * @param value 
         * @param length 
         * @returns 
         */


        round(value, length) {
          if (length === void 0) {
            length = 4;
          }

          var val = value;
          var split = val.toString().split('.');

          if (split.length > 1 && split[1].length > length) {
            return Number(val.toPrecision(split[0].length + length));
          } else return value;
        }

        formatAdd00(val) {
          if (typeof val != "string") val = val.toString();
          var getPoint = val.split('.');
          var random = 0;
          var addNum = "";

          if (getPoint.length > 1) //代表有小數點
            {
              var getlen = getPoint[1].length;

              if (getlen == 1) {
                // random = Math.floor(Math.random() * 10);
                addNum = "0";
                return val + addNum;
              } else return val;
            } else {
            //沒有小數點
            // random = Math.floor(Math.random() * 100);
            addNum = ".00";
            return val + addNum;
          }
        }

      };

      _export("default", new MyMath());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MyMath.js.map