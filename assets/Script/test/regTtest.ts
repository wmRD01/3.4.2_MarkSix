import { Component, _decorator } from "cc";
import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import BaseSingletonComponent from "../../Patten/Singleton/BaseSingletonComponent";
import EventMng from "../Manager/EventMng";
import extentTest from "./extentTest";

const { ccclass, property } = _decorator;
@ccclass('regTtest')
// 插件(Xregexp)(未使用)
// https://xregexp.com/plugins/
//測試網站
// https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%2B%21-%23%25-*%2C-%2F%5C%3A%3B%3F%40%5C%5B-%5C%5D_%5C%7B%5C%7D%5Cu2200-%5Cu22FF%5Cu00A1%5Cu00A7%5Cu00AB%5Cu00B6%5Cu00B7%5Cu00BB%5Cu00BF%5Cu037E%5Cu0387%5Cu055A-%5Cu055F%5Cu0589%5Cu058A%5Cu05BE%5Cu05C0%5Cu05C3%5Cu05C6%5Cu05F3%5Cu05F4%5Cu0609%5Cu060A%5Cu060C%5Cu060D%5Cu061B%5Cu061D-%5Cu061F%5Cu066A-%5Cu066D%5Cu06D4%5Cu0700-%5Cu070D%5Cu07F7-%5Cu07F9%5Cu0830-%5Cu083E%5Cu085E%5Cu0964%5Cu0965%5Cu0970%5Cu09FD%5Cu0A76%5Cu0AF0%5Cu0C77%5Cu0C84%5Cu0DF4%5Cu0E4F%5Cu0E5A%5Cu0E5B%5Cu0F04-%5Cu0F12%5Cu0F14%5Cu0F3A-%5Cu0F3D%5Cu0F85%5Cu0FD0-%5Cu0FD4%5Cu0FD9%5Cu0FDA%5Cu104A-%5Cu104F%5Cu10FB%5Cu1360-%5Cu1368%5Cu1400%5Cu166E%5Cu169B%5Cu169C%5Cu16EB-%5Cu16ED%5Cu1735%5Cu1736%5Cu17D4-%5Cu17D6%5Cu17D8-%5Cu17DA%5Cu1800-%5Cu180A%5Cu1944%5Cu1945%5Cu1A1E%5Cu1A1F%5Cu1AA0-%5Cu1AA6%5Cu1AA8-%5Cu1AAD%5Cu1B5A-%5Cu1B60%5Cu1B7D%5Cu1B7E%5Cu1BFC-%5Cu1BFF%5Cu1C3B-%5Cu1C3F%5Cu1C7E%5Cu1C7F%5Cu1CC0-%5Cu1CC7%5Cu1CD3%5Cu2010-%5Cu2027%5Cu2030-%5Cu2043%5Cu2045-%5Cu2051%5Cu2053-%5Cu205E%5Cu207D%5Cu207E%5Cu208D%5Cu208E%5Cu2308-%5Cu230B%5Cu2329%5Cu232A%5Cu2768-%5Cu2775%5Cu27C5%5Cu27C6%5Cu27E6-%5Cu27EF%5Cu2983-%5Cu2998%5Cu29D8-%5Cu29DB%5Cu29FC%5Cu29FD%5Cu2CF9-%5Cu2CFC%5Cu2CFE%5Cu2CFF%5Cu2D70%5Cu2E00-%5Cu2E2E%5Cu2E30-%5Cu2E4F%5Cu2E52-%5Cu2E5D%5Cu3001-%5Cu3003%5Cu3008-%5Cu3011%5Cu3014-%5Cu301F%5Cu3030%5Cu303D%5Cu30A0%5Cu30FB%5CuA4FE%5CuA4FF%5CuA60D-%5CuA60F%5CuA673%5CuA67E%5CuA6F2-%5CuA6F7%5CuA874-%5CuA877%5CuA8CE%5CuA8CF%5CuA8F8-%5CuA8FA%5CuA8FC%5CuA92E%5CuA92F%5CuA95F%5CuA9C1-%5CuA9CD%5CuA9DE%5CuA9DF%5CuAA5C-%5CuAA5F%5CuAADE%5CuAADF%5CuAAF0%5CuAAF1%5CuABEB%5CuFD3E%5CuFD3F%5CuFE10-%5CuFE19%5CuFE30-%5CuFE52%5CuFE54-%5CuFE61%5CuFE63%5CuFE68%5CuFE6A%5CuFE6B%5CuFF01-%5CuFF03%5CuFF05-%5CuFF0A%5CuFF0C-%5CuFF0F%5CuFF1A%5CuFF1B%5CuFF1F%5CuFF20%5CuFF3B-%5CuFF3D%5CuFF3F%5CuFF5B%5CuFF5D%5CuFF5F-%5CuFF65%5CU00010100-%5CU00010102%5CU0001039F%5CU000103D0%5CU0001056F%5CU00010857%5CU0001091F%5CU0001093F%5CU00010A50-%5CU00010A58%5CU00010A7F%5CU00010AF0-%5CU00010AF6%5CU00010B39-%5CU00010B3F%5CU00010B99-%5CU00010B9C%5CU00010EAD%5CU00010F55-%5CU00010F59%5CU00010F86-%5CU00010F89%5CU00011047-%5CU0001104D%5CU000110BB%5CU000110BC%5CU000110BE-%5CU000110C1%5CU00011140-%5CU00011143%5CU00011174%5CU00011175%5CU000111C5-%5CU000111C8%5CU000111CD%5CU000111DB%5CU000111DD-%5CU000111DF%5CU00011238-%5CU0001123D%5CU000112A9%5CU0001144B-%5CU0001144F%5CU0001145A%5CU0001145B%5CU0001145D%5CU000114C6%5CU000115C1-%5CU000115D7%5CU00011641-%5CU00011643%5CU00011660-%5CU0001166C%5CU000116B9%5CU0001173C-%5CU0001173E%5CU0001183B%5CU00011944-%5CU00011946%5CU000119E2%5CU00011A3F-%5CU00011A46%5CU00011A9A-%5CU00011A9C%5CU00011A9E-%5CU00011AA2%5CU00011B00-%5CU00011B09%5CU00011C41-%5CU00011C45%5CU00011C70%5CU00011C71%5CU00011EF7%5CU00011EF8%5CU00011F43-%5CU00011F4F%5CU00011FFF%5CU00012470-%5CU00012474%5CU00012FF1%5CU00012FF2%5CU00016A6E%5CU00016A6F%5CU00016AF5%5CU00016B37-%5CU00016B3B%5CU00016B44%5CU00016E97-%5CU00016E9A%5CU00016FE2%5CU0001BC9F%5CU0001DA87-%5CU0001DA8B%5CU0001E95E%5CU0001E95F%5D&abb=on&c=on&ucd=on&esc=on&g=&i=
//來源
// https://stackoverflow.com/questions/280712/how-can-i-use-unicode-aware-regular-expressions-in-javascript
//額外詳細表
// https://www.twblogs.net/a/5d013a0ebd9eee14644f9866
// https://keqingrong.cn/blog/2020-01-29-regexp-unicode-property-escapes/
export default class regTtest extends extentTest {
    onLoad() {
        console.log(this.testfun1.prototype);

        // EventMng.getInstance.eventMng.on("test", this.testfun1, this)
        // EventMng.getInstance.eventMng.on("test", this.testfun2, this)
        let str = "123HLKAD"
        // str = str.replace(/[\u2200-\u22FF]/, "")
        // str = str.replace(/^[0-9]*$/, "")
        // console.log(str);
        console.log(/\p{Alphabetic}/u.test(str));
        if (/\p{Alphabetic}/u.test(str) && /\p{Number}/u.test(str))
            console.log("包含英數");

        console.log(/[\p{Alphabetic}&&\p{Number}]/u.test(str));
        let spesil = "1234!@#$%^&*()_+我WHDOQW15"
        console.log(/\p{P}/u.test(spesil));
        console.log(/\p{P}/u.test(str));

        let rex = /[\p{P}+\u2100-\u214F]/u
        console.log(rex.test(spesil));

        // console.log(/\p{Special}/u.test(str));
        // console.log(/^[0-9]*$/.test(str));
        // console.log(str.match(/^[0-9]*$/));

    }
    start() {
        // EventMng.getInstance.eventMng.emit("test")
        // EventMng.getInstance.eventMng.removeAll("test");
        // EventMng.getInstance.eventMng.off("test", this.testfun1,this)
        // EventMng.getInstance.eventMng.emit("test")
    }
    testfun1() {
        console.log("11");
    }
    testfun2() {
        console.log("22");
    }
}