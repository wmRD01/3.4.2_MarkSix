import { director, dynamicAtlasManager, Node, UITransform, Vec2, Vec3, _decorator } from "cc";
import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import MyMath from "../../Plug/MyMath";
import CryptoES from 'crypto-es';
import { RequestGPG } from "../Contorll/Api/GPGAPI/RequestGPG";
import PublicData from "./PublicData";
export default class PublicModel extends BaseSingleton<PublicModel>() {
    /**
     * @param targetNode 需要移動的物件
     * @param moveToNode 移動的目的地
     * @returns 
     */
    to2DConvertOtherNodeSpaceAR(targetNode: Node, moveToNode: Node) {
        // console.log(pos);
        //轉成世界座標
        let worldPoint = moveToNode.parent.getComponent(UITransform).convertToWorldSpaceAR(moveToNode.position);
        // console.log(worldPoint);
        return targetNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPoint);
    }
    convertVec2ToVec3(vec2: Vec2) {
        return new Vec3(vec2.x, vec2.y, 0)
    }
    convertVec3ToVec2(vec3: Vec3) {
        return new Vec2(vec3.x, vec3.y)
    }
    oneSclaeVec3(num: number) {
        return new Vec3(num, num, num)
    }


    changParent(moveToNode: Node, targetNode: Node, parent: Node) {
        // console.log(node.parent);
        if (moveToNode.parent == null || moveToNode.parent == undefined)
            director.getScene().getChildByName("Canvas").addChild(moveToNode)
        // console.log(node.parent);

        let orgPos = this.to2DConvertOtherNodeSpaceAR(targetNode, moveToNode)
        parent.addChild(moveToNode)
        moveToNode.position = orgPos
    }
    /**秒數時間轉換 */
    formatSecond(secs: number, isHR?: boolean) {
        // if (isMilli) secs = this.convertMilliToSecond(secs);
        // let min = Math.floor(secs / 60).toString()
        // let sec = Math.floor((secs - (Number(min) * 60))).toString()
        // while (min.length < 2) min = "0" + min
        // while (sec.length < 2) sec = "0" + sec
        // return min + ":" + sec
        const hours = isHR ? Math.floor(secs / 3600) : 0;
        const minutes = Math.floor((secs - hours * 3600) / 60);
        const seconds = Math.floor(secs - hours * 3600 - minutes * 60);

        const hrStr = isHR ? hours.toString().padStart(2, '0') + ':' : '';
        const minStr = minutes.toString().padStart(2, '0');
        const secStr = seconds.toString().padStart(2, '0');

        return hrStr + minStr + ':' + secStr;
    }
    convertMilliToSecond(num: number) {
        return MyMath.divide(num, 1000)
    }
    /*
    *確認匿名條件式是否在數字、分數、箭頭、數學運算符號、技術符號以及字母符號的 Unicode 字元
    */
    checkNicknameCondition(str: string) {
        let rex = /[\p{P}+\u2100-\u214F]/u
        return rex.test(str)
    }
    checkNameLen(name: string, len: number) {
        let word = name.split(/\w*/).filter(x => x != "")
        let notWord = name.split(/\W*/).filter(x => x != "")
        let countLen = word.length + (Math.floor(notWord.length / 2))//英文數字兩個字元=1個中文字長度
        if (countLen > len)
            name = this.reName(name, len);
        return name

    }
    /**確認名稱長度 */
    changeNameLen(name: string) {
        let word = name.split(/\w*/).filter(x => x != "")
        let notWord = name.split(/\W*/).filter(x => x != "")
        let countLen = word.length + (Math.floor(notWord.length / 2))//英文數字兩個字元=1個中文字長度
        return countLen
    }
    /** 將8位數之後的文字"..."化 */
    private reName(name: string, len: number) {
        let count_name = ''
        let index = 0
        let count = 0
        let cut_name = name.split('');
        while (count < len) {
            count_name = count_name + cut_name[index]
            if (/\w/.test(cut_name[index])) //如果遇到英文 只+0.5
                count += 0.5
            else
                count++
            index++
        }
        name = count_name + "..."
        return name
    }
    /**封包整合，自身封包如果與傳遞的封包有相同Key值，自身封包會更新制最新Value 
     * @param _self 需整合封包
     * @param _data 傳遞封包
     */
    TwoClassCheckData(_self: Object, _data: Object) {
        // console.log(_self);
        // console.log(_data);

        for (const key in _data) {
            if (Object.prototype.hasOwnProperty.call(_self, key)) {
                _self[key] = _data[key];
            }
        }
    }
    /**將,文字刪除 */
    filterNumberDot(num: number | string) {
        let getStrArr = num.toString().split("").filter(x => x != ",");
        let formatStr = ""
        for (let index = 0; index < getStrArr.length; index++) {
            if (/^[0-9]*$/.test(getStrArr[index]))
                formatStr += getStrArr[index]
        }
        return formatStr
    }
    /**將Server傳遞封包轉換成Byte */
    _base64ToBytes(base64: string) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }

        return bytes;
    }
    /**將Byte轉換成Binary */
    convertByteToBinary(n: number) {
        let getBin = n.toString(2)
        // do getBin = "0" + getBin
        // while (getBin.length < 8)
        return getBin
    }
    /**從52號碼變換成撲克13 */
    pokerNumberChange(num: number) {
        return num = num % 13 == 0 ? 13 : num % 13

    }
    /**百家規則9之後就是0，因此不會計算*/
    baccaratCount(count: number, num: number) {
        num > 9 ? count += 0 : count += num
        let getLast: string | string[] = count.toString().split("")
        getLast = getLast[getLast.length - 1]

        return Number(getLast)
    }
    /**
     * 
     * @param num 數字
     * @param digits 小數點位數 預設0
     * @returns string
     */
    changeKMB(num: number, digits: number = 0): string {
        const suffixes = ['K', 'M', 'B', 'T', 'P', 'E'];
        if (!num || Number.isNaN(num))
            return String(0);
        if (num < 10000)
            return num.toString();
        const exp = Math.floor(Math.log(num) / Math.log(1000));
        let format = (num / Math.pow(1000, exp)).toString();
        const decimalIndex = format.indexOf('.');
        if (decimalIndex !== -1 && decimalIndex + digits + 1 < format.length)
            format = format.slice(0, decimalIndex + digits + 1);
        if (format.endsWith('.')) {
            format = format.slice(0, -1);
        }
        // console.warn(format + suffixes[exp - 1]);
        return format + suffixes[exp - 1]
    }
    /**只能回傳num */
    getEnumValueFromString<T>(str: string, enumObject: T): T[keyof T] | undefined {
        const enumValues = Object.keys(enumObject).filter(k => typeof enumObject[k as keyof T] === 'number');
        for (const value of enumValues) {
            if (value.toLowerCase() === str.toLowerCase()) {
                return enumObject[value as keyof T];
            }
        }
        return undefined;
    }
    /*可回傳num與str(須測試) */
    getEnumValue<T>(str: string, enumObject: T): T[keyof T] | undefined {
        const enumValues = Object.keys(enumObject);
        for (const value of enumValues) {
            if (value.toLowerCase() === str.toLowerCase()) {
                return enumObject[value as keyof T];
            }
        }
        return undefined;
    }
    openShader() {
        dynamicAtlasManager.enabled = false//打開Shader合批(????)
    }
    convertSign<T extends RequestGPG.Body.NeedToken.base>(body: Object, _class: { new(): T }, isDelete: boolean = true) {
        let sign = new _class();
        PublicModel.getInstance.TwoClassCheckData(sign, body)
        if (isDelete)
            delete sign.sign
        const dataWithApiKey = this.sortObj(sign, PublicData.getInstance.gpgApi);
        // console.log(dataWithApiKey);
        // console.log(CryptoES.MD5(dataWithApiKey).toString());
        return CryptoES.MD5(dataWithApiKey).toString()
    }
    convertMD5(str: string) {
        return CryptoES.MD5(str).toString()
    }
    /**排序物件順序並且queryString */
    private sortObj<T>(obj: T, apiKey: string) {
        var keyA = Object.keys(obj).sort();
        var querystring = ""
        for (let index = 0; index < keyA.length; index++) {
            querystring += `${keyA[index]}=${obj[keyA[index]]}`
            if (index != keyA.length - 1) {
                querystring += "&"
            }
        }
        // for (var i in keyA) {
        //encodeURIComponent是ASCII轉換\，但是@也會被轉換所以不使用此方式
        //     // sortObj[keyA[i]] = encodeURIComponent(obj[keyA[i]])

        // }
        querystring += apiKey
        return querystring
    }
    convertDateDay(str: string) {
        // 將字串轉換為Date物件
        const dateObj = new Date(str);

        // 取得日期資訊
        const year = this.convertToROC(dateObj.getFullYear());
        const month = dateObj.getMonth() + 1; // 月份是從0開始的，所以要加1
        const day = dateObj.getDate();
        const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
        const dayOfWeek = daysOfWeek[dateObj.getDay()];
        // 格式化日期
        return `${year}/${month}/${day} (${dayOfWeek})`;

    }
    convertDateTime(str: string) {
        // 將字串轉換為Date物件
        const dateObj = new Date(str);
        const sec = dateObj.getSeconds()
        const min = dateObj.getMinutes()
        const hours = dateObj.getHours()

        // 格式化日期
        return `${hours}:${min}:${sec}`;

    }
    /**轉換國立 */
    convertToROC(yearAD) {
        const ROC_OFFSET = 1911;
        const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        const yearROC = yearAD - ROC_OFFSET + (isLeapYear(yearAD) ? 1 : 0);
        return yearROC;
    }
    checkStringNull(str: string) {
        return str == "" || str == null || str == undefined ? true : false
    }
    convertDateDiff(_date: string, offsetDay: number) { // sDate1 和 sDate2 是 2016-06-18 格式
        var oDate1 = new Date(_date)
        return new Date(oDate1.setDate(oDate1.getDate() + offsetDay));
    };
    getMonthAllDay(day:string){
        const getDay = new Date(day)
        return new Date(getDay.getFullYear(),getDay.getMonth()+1,0).getDate()
    }
}

