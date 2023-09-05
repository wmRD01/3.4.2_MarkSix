System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "crypto-es", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, dynamicAtlasManager, UITransform, Vec2, Vec3, BaseSingleton, MyMath, CryptoES, PublicData, PublicModel, _crd;

  function _reportPossibleCrUseOfBaseSingleton(extras) {
    _reporterNs.report("BaseSingleton", "../../Patten/Singleton/BaseSingleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyMath(extras) {
    _reporterNs.report("MyMath", "../../Plug/MyMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCryptoES(extras) {
    _reporterNs.report("CryptoES", "crypto-es", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../Contorll/Api/GPGAPI/RequestGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "./PublicData", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
      dynamicAtlasManager = _cc.dynamicAtlasManager;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseSingleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      MyMath = _unresolved_3.default;
    }, function (_cryptoEs) {
      CryptoES = _cryptoEs.default;
    }, function (_unresolved_4) {
      PublicData = _unresolved_4.default;
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
          var worldPoint = moveToNode.parent.getComponent(UITransform).convertToWorldSpaceAR(moveToNode.position); // console.log(worldPoint);

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

          var orgPos = this.to2DConvertOtherNodeSpaceAR(targetNode, moveToNode);
          parent.addChild(moveToNode);
          moveToNode.position = orgPos;
        } // /**秒數時間轉換 */


        formatSecond(secs, isHR) {
          // if (isMilli) secs = this.convertMilliToSecond(secs);
          // let min = Math.floor(secs / 60).toString()
          // let sec = Math.floor((secs - (Number(min) * 60))).toString()
          // while (min.length < 2) min = "0" + min
          // while (sec.length < 2) sec = "0" + sec
          // return min + ":" + sec
          // const hours = isHR ? Math.floor(secs / 3600000) : 0;
          // const minutes = Math.floor((secs - hours * 3600000) / 60000);
          // const seconds = Math.floor(secs - hours * 3600000 - minutes * 60000);
          console.log(secs);
          secs = Math.floor(secs / 1000);
          var hours = isHR ? Math.floor(secs / 3600) : 0;
          var minutes = Math.floor((secs - hours * 3600) / 60);
          var seconds = Math.floor(secs - hours * 3600 - minutes * 60);
          var hrStr = isHR ? hours.toString().padStart(2, '0') + ':' : '';
          var minStr = minutes.toString().padStart(2, '0');
          var secStr = seconds.toString().padStart(2, '0');
          return hrStr + minStr + ':' + secStr;
        }

        formatMillisecond(millisecs, isHR) {
          var seconds = Math.floor(millisecs / 1000);
          var hours = isHR ? Math.floor(seconds / 3600) : 0;
          var minutes = Math.floor((seconds - hours * 3600) / 60);
          var remainingSeconds = seconds - hours * 3600 - minutes * 60;
          var hrStr = isHR ? hours.toString().padStart(2, '0') + ':' : '';
          var minStr = minutes.toString().padStart(2, '0');
          var secStr = remainingSeconds.toString().padStart(2, '0');
          return hrStr + minStr + ':' + secStr;
        }

        convertMilliToSecond(num) {
          return (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).divide(num, 1000);
        }
        /*
        *確認匿名條件式是否在數字、分數、箭頭、數學運算符號、技術符號以及字母符號的 Unicode 字元
        */


        checkNicknameCondition(str) {
          // let rex = /[\p{P}+\u2100-\u214F]/u
          var rules = /([\s]|[\u3000]|[\u260E-\u26FF]|[\u270A-\u270D]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/;
          return rules.test(str);
        }

        checkNameLen(name, len) {
          var word = name.split(/\w*/).filter(x => x != "");
          var notWord = name.split(/\W*/).filter(x => x != "");
          var countLen = word.length + Math.floor(notWord.length / 2); //英文數字兩個字元=1個中文字長度

          if (countLen > len) name = this.reName(name, len);
          return name;
        }
        /**確認名稱長度 */


        changeNameLen(name) {
          var word = name.split(/\w*/).filter(x => x != "");
          var notWord = name.split(/\W*/).filter(x => x != "");
          var countLen = word.length + Math.floor(notWord.length / 2); //英文數字兩個字元=1個中文字長度

          return countLen;
        }
        /** 將8位數之後的文字"..."化 */


        reName(name, len) {
          var count_name = '';
          var index = 0;
          var count = 0;
          var cut_name = name.split('');

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
          for (var key in _data) {
            if (Object.prototype.hasOwnProperty.call(_self, key)) {
              _self[key] = _data[key];
            }
          }
        }
        /**將,文字刪除 */


        filterNumberDot(num) {
          var getStrArr = num.toString().split("").filter(x => x != ",");
          var formatStr = "";

          for (var index = 0; index < getStrArr.length; index++) {
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
          var getBin = n.toString(2); // do getBin = "0" + getBin
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
          var getLast = count.toString().split("");
          getLast = getLast[getLast.length - 1];
          return Number(getLast);
        }
        /**
         * 
         * @param num 數字
         * @param digits 小數點位數 預設0
         * @returns string
         */


        changeKMB(num, digits) {
          if (digits === void 0) {
            digits = 0;
          }

          var suffixes = ['K', 'M', 'B', 'T', 'P', 'E'];
          if (!num || Number.isNaN(num)) return String(0);
          if (num < 10000) return num.toString();
          var exp = Math.floor(Math.log(num) / Math.log(1000));
          var format = (num / Math.pow(1000, exp)).toString();
          var decimalIndex = format.indexOf('.');
          if (decimalIndex !== -1 && decimalIndex + digits + 1 < format.length) format = format.slice(0, decimalIndex + digits + 1);

          if (format.endsWith('.')) {
            format = format.slice(0, -1);
          } // console.warn(format + suffixes[exp - 1]);


          return format + suffixes[exp - 1];
        }
        /**只能回傳num */


        getEnumValueFromString(str, enumObject) {
          var enumValues = Object.keys(enumObject).filter(k => typeof enumObject[k] === 'number');

          for (var value of enumValues) {
            if (value.toLowerCase() === str.toLowerCase()) {
              return enumObject[value];
            }
          }

          return undefined;
        }
        /*可回傳num與str(須測試) */


        getEnumValue(str, enumObject) {
          var enumValues = Object.keys(enumObject);

          for (var value of enumValues) {
            if (value.toLowerCase() === str.toLowerCase()) {
              return enumObject[value];
            }
          }

          return undefined;
        }

        openShader() {
          dynamicAtlasManager.enabled = false; //打開Shader合批(????)
        }

        convertSign(body, _class, isDelete) {
          if (isDelete === void 0) {
            isDelete = true;
          }

          var sign = new _class();
          PublicModel.getInstance.TwoClassCheckData(sign, body);
          if (isDelete) delete sign.sign;
          var dataWithApiKey = this.sortObj(sign, (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.gpgApiKey); // console.log(dataWithApiKey);
          // console.log(CryptoES.MD5(dataWithApiKey).toString());

          return (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).MD5(dataWithApiKey).toString();
        }

        convertMD5(str) {
          return (_crd && CryptoES === void 0 ? (_reportPossibleCrUseOfCryptoES({
            error: Error()
          }), CryptoES) : CryptoES).MD5(str).toString();
        }
        /**排序物件順序並且queryString */


        sortObj(obj, apiKey) {
          var keyA = Object.keys(obj).sort();
          var querystring = "";

          for (var index = 0; index < keyA.length; index++) {
            querystring += keyA[index] + "=" + obj[keyA[index]];

            if (index != keyA.length - 1) {
              querystring += "&";
            }
          } // for (var i in keyA) {
          //encodeURIComponent是ASCII轉換\，但是@也會被轉換所以不使用此方式
          //     // sortObj[keyA[i]] = encodeURIComponent(obj[keyA[i]])
          // }


          querystring += apiKey;
          return querystring;
        }

        convertDateDay(str) {
          // 將字串轉換為Date物件
          var dateObj = new Date(str); // 取得日期資訊

          var year = this.convertToROC(dateObj.getFullYear());
          var month = dateObj.getMonth() + 1; // 月份是從0開始的，所以要加1

          var day = dateObj.getDate();
          var daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
          var dayOfWeek = daysOfWeek[dateObj.getDay()]; // 格式化日期

          return year + "/" + month + "/" + day + " (" + dayOfWeek + ")";
        }

        convertDateTime(str) {
          // 將字串轉換為Date物件
          var dateObj = new Date(str);
          var sec = dateObj.getSeconds();
          var min = dateObj.getMinutes();
          var hours = dateObj.getHours(); // 格式化日期

          return hours + ":" + min + ":" + sec;
        }
        /**轉換國立 */


        convertToROC(yearAD) {
          var ROC_OFFSET = 1911;

          var isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

          var yearROC = yearAD - ROC_OFFSET + (isLeapYear(yearAD) ? 1 : 0);
          return yearROC;
        }

        checkStringNull(str) {
          return str == "" || str == null || str == undefined ? true : false;
        }

        convertDateDiff(_date, offsetDay) {
          // sDate1 和 sDate2 是 2016-06-18 格式
          var oDate1 = new Date(_date);
          return new Date(oDate1.setDate(oDate1.getDate() + offsetDay));
        }

        getMonthAllDay(day) {
          var getDay = new Date(day);
          return new Date(getDay.getFullYear(), getDay.getMonth() + 1, 0).getDate();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PublicModel.js.map