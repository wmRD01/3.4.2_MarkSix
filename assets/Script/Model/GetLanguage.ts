import { sys } from "cc";
import { GetLanguageTarget } from "../Enum/GetLanguageTarget";
import PublicModel from "./PublicModel";

export default class GetLanguage {
    target: GetLanguageTarget
    constructor(_target: GetLanguageTarget) {
        this.target = _target
    }
    get() {
        let lang = ''
        switch (this.target) {
            case GetLanguageTarget.移動裝置:
                lang = sys.localStorage.getItem('Language');
                break;
            case GetLanguageTarget.風哥:
                lang = window.lang
                break;
            case GetLanguageTarget.網址:
                //@ts-ignore
                lang = PublicModel.getInstance.handleURLData(window.location.href).lang
                break;
        }
        if (PublicModel.getInstance.checkStringNull(lang)) lang = 'NTD'
        if (this.target == GetLanguageTarget.移動裝置) sys.localStorage.setItem('Language', lang)
        return lang
    }
}