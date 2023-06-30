import { Button, Component, EventHandler, js, Node } from "cc";

class MyButton {

    public addEvent(componentTrget: Component, callBack: string, buttonTarget: Button, callbackValue?: string) {
        if (this.findEvent(buttonTarget, callBack)) this.removeEvent(buttonTarget, callBack)
        let event = new EventHandler();
        event.target = componentTrget.node;
        event.component = js.getClassName(componentTrget);
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue
        buttonTarget.clickEvents.push(event)

        // console.log(event);

    }
    public findEvent(buttonTarget: Button, callBack: string) {
        let isFind = false;
        let eventArr = buttonTarget.clickEvents
        for (let index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return isFind = true
        }
        return isFind;
    }
    public checkEvent(buttonTarget: Button) {
        let isFind = false;
        let eventArr = buttonTarget.clickEvents
        if (eventArr.length > 0) return isFind = true
        else isFind
    }

    public removeEvent(buttonTarget: Button, callBack: string) {
        let eventArr = buttonTarget.clickEvents
        for (let index = 0; index < eventArr.length; index++) {
            if (eventArr[index].handler == callBack)
                return eventArr.splice(index)
        }
    }
    public clearEvent(buttonTarget: Button) {
        let eventArr = buttonTarget.clickEvents
        let count = eventArr.length - 1
        for (let index = count; 0 < eventArr.length; index++) {
            eventArr.splice(index)
        }
    }

}
export default new MyButton();