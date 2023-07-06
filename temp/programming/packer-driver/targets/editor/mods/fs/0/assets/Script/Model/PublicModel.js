System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, UITransform, Vec2, Vec3, BaseSingleton, MyMath, PublicModel, _crd;

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyMath(extras) {
    _reporterNs.report("MyMath", "../../Plug/MyMath", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      MyMath = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e67eb6CjElP+7ffPKWTZp4F", "PublicModel", undefined);

      _export("default", PublicModel = class PublicModel extends (_crd && BaseSingleton === void 0 ? (_reportPossibleCrUseOfBaseSingleton({
        error: Error()
      }), BaseSingleton) : BaseSingleton)() {
        /**
         * @param targetNode 需要移動的物件
         * @param moveToNode 移動的目的地
         * @returns 
         */
        to2DConvertOtherNodeSpaceAR(targetNode, moveToNode) {
          // console.log(pos);
          //轉成世界座標
          let worldPoint = moveToNode.parent.getComponent(UITransform).convertToWorldSpaceAR(moveToNode.position); // console.log(worldPoint);

          return targetNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPoint);
        }

        convertVec2ToVec3(vec2) {
          return new Vec3(vec2.x, vec2.y, 0);
        }

        convertVec3ToVec2(vec3) {
          return new Vec2(vec3.x, vec3.y);
        }

        oneSclaeVec3(num) {
          return new Vec3(num, num, num);
        }

        changParent(moveToNode, targetNode, parent) {
          // console.log(node.parent);
          if (moveToNode.parent == null || moveToNode.parent == undefined) director.getScene().getChildByName("Canvas").addChild(moveToNode); // console.log(node.parent);

          let orgPos = this.to2DConvertOtherNodeSpaceAR(targetNode, moveToNode);
          parent.addChild(moveToNode);
          moveToNode.position = orgPos;
        }
        /**秒數時間轉換 */


        formatSecond(secs, isMilli) {
          // if (isMilli) secs = this.convertMilliToSecond(secs);
          let min = Math.floor(secs / 60).toString();
          let sec = Math.floor(secs - Number(min) * 60).toString();

          while (min.length < 2) min = "0" + min;

          while (sec.length < 2) sec = "0" + sec;

          return min + ":" + sec;
        }

        convertMilliToSecond(num) {
          return (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).divide(num, 1000);
        }
        /*
        *確認匿名條件式
        */


        checkNicknameCondition(str) {
          let rex = /[\p{P}+\u2100-\u214F]/u;
          return rex.test(str);
        }
        /**確認名稱長度 */


        checkNameLen(name, len) {
          let word = name.split(/\w*/).filter(x => x != "");
          let notWord = name.split(/\W*/).filter(x => x != "");
          let countLen = word.length + Math.floor(notWord.length / 2); //英文數字兩個字元=1個中文字長度

          if (countLen > len) name = this.reName(name, len);
          return name;
        }
        /** 將8位數之後的文字"..."化 */


        reName(name, len) {
          let count_name = '';
          let index = 0;
          let count = 0;
          let cut_name = name.split('');

          while (count < len) {
            count_name = count_name + cut_name[index];
            if (/\w/.test(cut_name[index])) //如果遇到英文 只+0.5
              count += 0.5;else count++;
            index++;
          }

          name = count_name + "...";
          return name;
        }
        /**封包整合，自身封包如果與傳遞的封包有相同Key值，自身封包會更新制最新Value 
         * @param _self 需整合封包
         * @param _data 傳遞封包
         */


        TwoClassCheckData(_self, _data) {
          // console.log(_self);
          // console.log(_data);
          for (const key in _data) {
            if (Object.prototype.hasOwnProperty.call(_self, key)) {
              _self[key] = _data[key];
            }
          }
        }
        /**將,文字刪除 */


        filterNumberDot(num) {
          let getStrArr = num.toString().split("").filter(x => x != ",");
          let formatStr = "";

          for (let index = 0; index < getStrArr.length; index++) {
            if (/^[0-9]*$/.test(getStrArr[index])) formatStr += getStrArr[index];
          }

          return formatStr;
        }
        /**將Server傳遞封包轉換成Byte */


        _base64ToBytes(base64) {
          var binary_string = window.atob(base64);
          var len = binary_string.length;
          var bytes = new Uint8Array(len);

          for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
          }

          return bytes;
        }
        /**將Byte轉換成Binary */


        convertByteToBinary(n) {
          let getBin = n.toString(2); // do getBin = "0" + getBin
          // while (getBin.length < 8)

          return getBin;
        }
        /**從52號碼變換成撲克13 */


        pokerNumberChange(num) {
          return num = num % 13 == 0 ? 13 : num % 13;
        }
        /**百家規則9之後就是0，因此不會計算*/


        baccaratCount(count, num) {
          num > 9 ? count += 0 : count += num;
          let getLast = count.toString().split("");
          getLast = getLast[getLast.length - 1];
          return Number(getLast);
        }
        /**
         * 
         * @param num 數字
         * @param digits 小數點位數 預設0
         * @returns string
         */


        changeKMB(num, digits = 0) {
          const suffixes = ['K', 'M', 'B', 'T', 'P', 'E'];
          if (!num || Number.isNaN(num)) return String(0);
          if (num < 10000) return num.toString();
          const exp = Math.floor(Math.log(num) / Math.log(1000));
          let format = (num / Math.pow(1000, exp)).toString();
          const decimalIndex = format.indexOf('.');
          if (decimalIndex !== -1 && decimalIndex + digits + 1 < format.length) format = format.slice(0, decimalIndex + digits + 1);

          if (format.endsWith('.')) {
            format = format.slice(0, -1);
          } // console.warn(format + suffixes[exp - 1]);


          return format + suffixes[exp - 1];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PublicModel.js.map