import BaseSingleton from "../../Patten/Singleton/BaseSingleton";
import { CASTAPI } from "../Contorll/Api/CASTAPI";
import { GameSceneName } from "../Enum/GameSenceName";
import CheckLoading from "./CheckLoading";
export default class PublicData extends BaseSingleton<PublicData>() {
    arr_ComponentBaseClass: Array<ComponentBase> = new Array
    BaseViewWidth: number = 720;
    BaseViewHeight: number = 1280;
    gameVersion: string = "0.0.2";
    onlineVersion: string = "0.0.2"
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

    castAPI: CASTAPI;
}