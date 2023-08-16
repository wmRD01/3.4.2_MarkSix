import { Component, EditBox, EventHandler, js, Node } from "cc";
import { LisnerEditBox } from "../Enum/LisnerEditBox";

class MyEditBox {
    public addEvent(componentTrget: Component, callBack: string, editboxTarget: EditBox, type: LisnerEditBox, callbackValue?: string) {
        if (this.findEvent(editboxTarget, callBack, type)) this.removeEvent(editboxTarget, callBack, type)
        let event = new EventHandler();
        event.target = componentTrget.node;
        event.component = js.getClassName(componentTrget);
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue
        this.retrunTypeArr(editboxTarget, type).push(event)
    }
    public findEvent(editboxTarget: EditBox, callBack: string, type: LisnerEditBox) {
        let isFind = false;
        let eventArr = this.retrunTypeArr(editboxTarget, type)
        for (let index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return isFind = true
        }
        return isFind;
    }
    public checkEvent(editboxTarget: EditBox, type: LisnerEditBox) {
        let isFind = false;
        let eventArr = this.retrunTypeArr(editboxTarget, type)
        if (eventArr.length > 0) return isFind = true
        else isFind
    }

    public removeEvent(editboxTarget: EditBox, callBack: string, type: LisnerEditBox) {
        let eventArr = this.retrunTypeArr(editboxTarget, type)
        for (let index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return eventArr.splice(index)
        }
    }
    public clearEvent(editboxTarget: EditBox, type: LisnerEditBox) {
        let eventArr = this.retrunTypeArr(editboxTarget, type)
        let count = eventArr.length - 1
        for (let index = count; 0 < eventArr.length; index++) {
            eventArr.splice(index)
        }
    }
    retrunTypeArr(editboxTarget: EditBox, type: LisnerEditBox) {
        switch (type) {
            case LisnerEditBox.EditBox_Start:
                return editboxTarget.editingDidBegan;
            case LisnerEditBox.EditBox_Editing:
                return editboxTarget.textChanged;
            case LisnerEditBox.EditBox_Return:
                return editboxTarget.editingReturn;
            case LisnerEditBox.EditBox_End:
                return editboxTarget.editingDidEnded;
        }
    }
}
export default new MyEditBox();