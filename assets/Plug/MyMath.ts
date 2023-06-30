
class MyMath {
    /**
    * 加法
    */
    add(value1: number, value2: number, lenght?: number) {
        return Math.round(value1 * 1000 + value2 * 1000) / 1000
    }
    /**
   * 減法
   */
    minus(value1: number, value2: number, lenght?: number) {

        return ((value1 * 1000) - (value2 * 1000)) / 1000
    }
    /**
   * 乘法
   */
    multiply(value1: number, value2: number, lenght?: number) {
        return Math.round(value1 * 1000 * (value2 * 1000)) / Math.pow(1000, 2)
    }
    /**
   * 除法
   */
    divide(value1: number, value2: number, lenght?: number) {
        return (value1 * 1000) / (value2 * 1000)
    }
    /**
     * 四捨五入法
     * @param value 
     * @param length 
     * @returns 
     */
    round(value: number, length: number = 4): number {

        let val = value

        let split = val.toString().split('.')

        if (split.length > 1 && split[1].length > length) {
            return Number(val.toPrecision(split[0].length + length));
        }
        else return value
    }
    formatAdd00(val: string | number): string {
        if (typeof val != "string") val = val.toString();
        let getPoint = val.split('.')
        let random = 0;
        let addNum = "";
        if (getPoint.length > 1)//代表有小數點
        {
            let getlen = getPoint[1].length
            if (getlen == 1) {
                // random = Math.floor(Math.random() * 10);
                addNum = "0";
                return val + addNum
            }
            else return val
        }
        else {//沒有小數點
            // random = Math.floor(Math.random() * 100);
            addNum = ".00";
            return val + addNum
        }

    }
}
export default new MyMath();