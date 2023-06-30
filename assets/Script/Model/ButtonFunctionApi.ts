import { Component, Node } from "cc";

/**
 * 避免循環引用問題(優化在推波後在刪除)
 */
export default class ButtonFunctionApi {
    target: Component
    targetNode: Node;
    targetClassName: string;
    callback: string;
    callbackValue: string;
}