
import { _decorator, view, ResolutionPolicy, find, UITransform, screen, Size, macro, size, sys, game, } from 'cc';
import DelayTime from '../../../Plug/DelayTime';
const { ccclass, property } = _decorator;

@ccclass('testAuto')
export default class testAuto {
    static curDR: Size = null;
    static isCanUpdata: boolean = true
    static adjustFunction: Function;

    /**
     * 
     * @param type as macro ORIENTATION;
     * @param 1 = Portrait;
     * @param 2 = LANDSCAPE;
     * @param 3 = Auto(暫時用不到?);
     */
    static SetConfigAdjustView(type: number, delayTime: number) {
        switch (type) {
            case 1:
                if (sys.os == sys.OS.ANDROID)
                    jsb.reflection.callStaticMethod('com.cocos.game/AppActivity', 'setOrientation', '(Ljava/lang/String;)V', "V")
                this.adjustFunction = this.AdjustViewPortrait;
                break;
            case 2:
                if (sys.os == sys.OS.ANDROID)
                    jsb.reflection.callStaticMethod('com.cocos.game/AppActivity', 'setOrientation', '(Ljava/lang/String;)V', "L")
                this.adjustFunction = this.AdjustViewLandscape;
                break;
        }
        this.adjustFunction();
        window.addEventListener("resize", (async () => {
            if (this.isCanUpdata) {
                this.isCanUpdata = false
                await DelayTime.getInstance.StartDT_NotClear(delayTime)
                this.adjustFunction()
                this.isCanUpdata = true
            }
            else
                console.error("等待刷新......");
        }))
        if (window.jsb) //手动调用触发 Wdiget 组件重新布局
            game.emit('resize', true)
    }
    static AdjustViewPortrait() {
        let canvasSize = this.getWinSize();
        if (!this.curDR)
            this.curDR = view.getDesignResolutionSize()
        let cvs = find('Canvas').getComponent(UITransform);

        if (canvasSize.width >= this.curDR.width || canvasSize.height / canvasSize.width <= (this.curDR.height / this.curDR.width)) {
            var width = canvasSize.width * (this.curDR.height / canvasSize.height);
            view.setDesignResolutionSize(width, this.curDR.height, ResolutionPolicy.FIXED_HEIGHT);
        }
        else {
            var height = canvasSize.height * (this.curDR.width / canvasSize.width);
            view.setDesignResolutionSize(this.curDR.width, height, ResolutionPolicy.FIXED_HEIGHT)
        }

    }
    static AdjustViewLandscape() {
        let canvasSize = this.getWinSize();
        if (!this.curDR)
            this.curDR = view.getDesignResolutionSize()
        let cvs = find('Canvas').getComponent(UITransform);
        if (canvasSize.height >= this.curDR.width || canvasSize.width / canvasSize.height <= (this.curDR.height / this.curDR.width)) {
            var width = canvasSize.height * (this.curDR.height / canvasSize.width);
            view.setDesignResolutionSize(1280, width, ResolutionPolicy.FIXED_WIDTH);

        }
        else {
            var height = canvasSize.width * (this.curDR.width / canvasSize.height);
            view.setDesignResolutionSize(height, this.curDR.height, ResolutionPolicy.FIXED_WIDTH)
        }

    }


    static AdjustView() {

        let windowSize = screen.windowSize;
        if (!this.curDR)
            this.curDR = view.getDesignResolutionSize()
        if (this.checkWindowOrientation() == macro.ORIENTATION_LANDSCAPE) {
            view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            if (windowSize.height > windowSize.width) {
                screen.windowSize = size(windowSize.width, windowSize.height);
            }
            view.setDesignResolutionSize(this.curDR.height, this.curDR.width, ResolutionPolicy.FIXED_WIDTH);
        } else {
            view.setOrientation(macro.ORIENTATION_PORTRAIT);
            if (windowSize.width > windowSize.height) {
                screen.windowSize = size(windowSize.height, windowSize.width);
            }
            view.setDesignResolutionSize(this.curDR.width, this.curDR.height, ResolutionPolicy.FIXED_HEIGHT);
        }

    }
    static getWinSize() {
        return { width: window.innerWidth, height: window.innerHeight };
    }
    static checkWindowOrientation() {
        if (window.innerHeight > window.innerWidth)
            return 1
        else
            return 2
    }
}

