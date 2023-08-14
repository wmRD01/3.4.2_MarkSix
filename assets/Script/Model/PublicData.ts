import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { GameSceneName } from "../Enum/GameSenceName";
import CheckLoading from "./CheckLoading";
export default class PublicData extends BaseSingleton<PublicData>() {
    arr_ComponentBaseClass: Array<ComponentBase> = new Array
    BaseViewWidth: number = 720;
    BaseViewHeight: number = 1280;
    gameVersion: string = "0.2.1";
    onlineVersion: string = "0.2.1";
    checkLoading = new CheckLoading();
    /**畫面重製 */
    isResetView: boolean;
    /**過程重製 */
    isResetProcessing: boolean;
    /**心跳秒數，每n秒回傳給Server */
    heartTime: number = 15;
    currentScene: GameSceneName = GameSceneName.Loading
    /**快速入房參數 */
    recodeUrl: string;
    backHomeUrl: string;
    staoredValueUrl: string;
    language: string;
    isLandscape: boolean = false
    isClickScreen: boolean = false

    today: string;
    gpgApi: GPGAPI = GPGAPI.QA;

    gpgUrlPlayApi = APIUrl.QA_playAPI;
    gpgUrlids = APIUrl.QA_ids;


    isChageOnline() {
        this.gpgApi = GPGAPI.Online;
        this.gpgUrlPlayApi = APIUrl.playAPI
        this.gpgUrlids = APIUrl.ids
    }
}

enum GPGAPI {
    QA = "5gh394D",
    Online = "4fypra!c!?",
}
enum APIUrl {
    playAPI = "https://play-api.godplay.app",
    ids = "https://ids.godplay.app",
    QA_playAPI = "https://play-api.ceis.tw",
    QA_ids = "https://ids.ceis.tw",
}