import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { RequestGPG } from "../Contorll/Api/GPGAPI/RequestGPG";
import { GameSceneName } from "../Enum/GameSenceName";
import CheckLoading from "./CheckLoading";
export default class PublicData extends BaseSingleton<PublicData>() {
    arr_ComponentBaseClass: Array<ComponentBase> = new Array
    BaseViewWidth: number = 720;
    BaseViewHeight: number = 1280;
    gameVersion: string = "1.1v";
    onlineVersion: string = "1.1v";
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
    curIssueID: string;

    gpgApiKey: RequestGPG.GPGAPIKey = RequestGPG.GPGAPIKey.QA;

    gpgUrlPlayApi = RequestGPG.APIUrl.QA_playAPI;
    gpgUrlids = RequestGPG.APIUrl.QA_ids;
    gpgSecret = RequestGPG.SecretKey.QA;


    isChageOnline() {
        this.gpgApiKey = RequestGPG.GPGAPIKey.Online;
        this.gpgUrlPlayApi = RequestGPG.APIUrl.playAPI
        this.gpgUrlids = RequestGPG.APIUrl.ids
        this.gpgSecret = RequestGPG.SecretKey.Online
    }
}