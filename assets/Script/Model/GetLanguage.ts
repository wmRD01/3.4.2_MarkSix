import { sys } from "cc";
import PublicModel from "./PublicModel";

export default class GetLanguage {

    get() {
        let lang = ''
        let isApp = PublicModel.getInstance.checkApp()
        if (window.GameServerSocket != null) {
            lang = window.lang
        }
        else if (isApp) {
            lang = sys.localStorage.getItem('Language');
        }
        else {
            try {
                //@ts-ignore
                lang = PublicModel.getInstance.handleURLData(window.location.href).lang
            } catch (error) {
                lang = 'NTD'
            }
        }
        if (PublicModel.getInstance.checkStringNull(lang)) lang = 'NTD'
        if (isApp) sys.localStorage.setItem('Language', lang)
        return lang
    }
}