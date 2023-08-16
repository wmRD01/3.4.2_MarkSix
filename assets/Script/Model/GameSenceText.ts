import { LangType } from "../Enum/LangType";
import { ServerGameSenceType } from "../Enum/ServerGameSenceType";
import SocketSetting from "../Socket/SocketSetting";
import RoomData from "./RoomData";

export default class GameSenceText {
    change(cmd: ServerGameSenceType | string) {
        switch (cmd) {
            case ServerGameSenceType.gs1:
                switch (RoomData.getInstance.roomStatus) {
                    case 0:
                    case 1:
                        return SocketSetting.t("029", LangType.Game)
                    case 2:
                        return SocketSetting.t("030", LangType.Game)
                }
            case ServerGameSenceType.gs8:
                return SocketSetting.t("010", LangType.Game)
            case ServerGameSenceType.gs9:
                return SocketSetting.t("011", LangType.Game)
            case ServerGameSenceType.gs10:
                return SocketSetting.t("012", LangType.Game)
            case ServerGameSenceType.gs11:
                return SocketSetting.t("013", LangType.Game)
            case ServerGameSenceType.gs12:
                return SocketSetting.t("014", LangType.Game)
            case ServerGameSenceType.gs13:
                return SocketSetting.t("015", LangType.Game)
            case ServerGameSenceType.gs14:
                return SocketSetting.t("016", LangType.Game)
            case ServerGameSenceType.gs15:
                return SocketSetting.t("017", LangType.Game)
            case ServerGameSenceType.gs16:
                return SocketSetting.t("018", LangType.Game)
            case ServerGameSenceType.gs17:
                return SocketSetting.t("019", LangType.Game)
            case ServerGameSenceType.gs18:
                return SocketSetting.t("020", LangType.Game)
            case ServerGameSenceType.gs19:
                return SocketSetting.t("021", LangType.Game)
            case ServerGameSenceType.gs20:
                return SocketSetting.t("022", LangType.Game)
            case ServerGameSenceType.gs21:
                return SocketSetting.t("023", LangType.Game)
            case ServerGameSenceType.gs22:
                return SocketSetting.t("024", LangType.Game)
            case ServerGameSenceType.gs23:
                return SocketSetting.t("025", LangType.Game)
            case ServerGameSenceType.gs24:
                return SocketSetting.t("026", LangType.Game)
            case ServerGameSenceType.gs25:
                return SocketSetting.t("027", LangType.Game)
            case ServerGameSenceType.gs30:
                return SocketSetting.t("028", LangType.Game)
        }
    }
}