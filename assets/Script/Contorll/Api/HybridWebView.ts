// Standard methods for HybridWebView

export default class HybridWebView {
    static SendRawMessageToDotNet = (message: string) => {
        this.SendMessageToDotNet(0, message);
    };

    static SendInvokeMessageToDotNet = (methodName: string, paramValues: string[]) => {
        if (typeof paramValues !== "undefined") {
            if (!Array.isArray(paramValues)) {
                paramValues = [paramValues];
            }
            for (let i = 0; i < paramValues.length; i++) {
                paramValues[i] = JSON.stringify(paramValues[i]);
            }
        }

        this.SendMessageToDotNet(1, JSON.stringify({ MethodName: methodName, ParamValues: paramValues }));
    };

    static SendMessageToDotNet = function (messageType: number, messageContent: string) {
        const message = JSON.stringify({ MessageType: messageType, MessageContent: messageContent });

        if ((window as any).chrome && (window as any).chrome.webview) {
            // Windows WebView2
            (window as any).chrome.webview.postMessage(message);
        } else if (
            (window as any).webkit &&
            (window as any).webkit.messageHandlers &&
            (window as any).webkit.messageHandlers.webwindowinterop
        ) {
            // iOS and MacCatalyst WKWebView
            (window as any).webkit.messageHandlers.webwindowinterop.postMessage(message);
        } else {
            // Android WebView
            (window as any).hybridWebViewHost.sendMessage(message);
        }
    };
}
