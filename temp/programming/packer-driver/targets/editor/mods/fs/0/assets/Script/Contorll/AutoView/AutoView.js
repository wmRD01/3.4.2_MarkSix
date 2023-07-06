System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, view, ResolutionPolicy, find, UITransform, DelayTime, PublicData, _dec, _class, _temp, _crd, ccclass, property, AutoView;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDelayTime(extras) {
    _reporterNs.report("DelayTime", "../../../Plug/DelayTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../Model/PublicData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
      find = _cc.find;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      DelayTime = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicData = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02ccadWhrFMrru0B8V26hNI", "AutoView", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", AutoView = (_dec = ccclass('AutoView'), _dec(_class = (_temp = class AutoView extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "curDR", null);

          _defineProperty(this, "isCanUpdata", true);
        }

        start() {
          // if (sys.os == sys.OS.ANDROID) return
          this.AdjustView();
          window.addEventListener("resize", async () => {
            if (this.isCanUpdata) {
              this.isCanUpdata = false;
              await (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
                error: Error()
              }), DelayTime) : DelayTime).getInstance.StartDT_NotClear(.5);
              this.AdjustView();
              this.isCanUpdata = true;
            } // else
            // console.error("等待刷新......");

          }); // view.on('canvas-resize', this.resize, this);
          // director.on(Director.EVENT_AFTER_SCENE_LAUNCH, this.AdjustView, this);
        }

        AdjustView() {
          // console.log(view.getDesignResolutionSize().height);
          // console.log(view.getDesignResolutionSize().x);
          let canvasSize = this.getWinSize();
          if (!this.curDR) this.curDR = view.getDesignResolutionSize();
          console.log(canvasSize);
          let cvs = find('Canvas').getComponent(UITransform);

          if (canvasSize.width >= (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.BaseViewWidth || canvasSize.height / canvasSize.width <= (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.BaseViewHeight / (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.BaseViewWidth) {
            var width = canvasSize.width * ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.BaseViewHeight / canvasSize.height);
            view.setDesignResolutionSize(width, (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.BaseViewHeight, ResolutionPolicy.FIXED_HEIGHT); // console.log(width);
            // cvs.width = width;
            // cvs.height = 1280;
          } else {
            var height = canvasSize.height * ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.BaseViewWidth / canvasSize.width);
            if (height > (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.BaseViewHeight) height = (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.BaseViewHeight;
            view.setDesignResolutionSize((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.BaseViewWidth, height, ResolutionPolicy.FIXED_HEIGHT);
          }

          let str = `window寬:${canvasSize.width}\n\rwindow高:${canvasSize.height}\n\rcocos寬:${this.curDR.width}\n\rcocos高:${this.curDR.height}`; // find("資訊", cvs.node).getComponent(Label).string = str;
          // if (canvasSize.height / canvasSize.width <= 16 / 9) {
          // } else {
          //     // if (canvasSize.height / canvasSize.width > 16 / 9 && canvasSize.height / canvasSize.width <= 19.5 / 9) {
          //     //     view.setDesignResolutionSize(720, 1500, ResolutionPolicy.FIXED_WIDTH)
          //     // } else {
          //     //     view.setDesignResolutionSize(720, 1500, ResolutionPolicy.FIXED_HEIGHT)
          //     // }
          //     cvs.width = 720;
          //     cvs.height = 1500;
          // }
          // console.error("HIHI");
          // if ((screen.windowSize.width) >= (720) || (screen.windowSize.height / screen.windowSize.width) <= (1280 / 720)) {
          //     //宽度超出
          //     var width = screen.windowSize.width * (1280 / screen.windowSize.height);
          //     view.setDesignResolutionSize(width, 1280, ResolutionPolicy.FIXED_HEIGHT);
          // } else {
          //     //高度超出
          //     var height = screen.windowSize.height * (720 / screen.windowSize.width);
          //     view.setDesignResolutionSize(720, height, ResolutionPolicy.FIXED_WIDTH);
          // }
        }

        AdjustView_Old() {
          let canvasSize = this.getWinSize();
          if (!this.curDR) this.curDR = view.getDesignResolutionSize(); // console.log(canvasSize);

          let cvs = find('Canvas').getComponent(UITransform);

          if (canvasSize.width >= 720 || canvasSize.height / canvasSize.width <= 1280 / 720) {
            var width = canvasSize.width * (1280 / canvasSize.height);
            view.setDesignResolutionSize(width, 1280, ResolutionPolicy.FIXED_HEIGHT); // console.log(width);
            // cvs.width = width;
            // cvs.height = 1280;
          } else {
            var height = canvasSize.height * (720 / canvasSize.width);
            view.setDesignResolutionSize(720, height, ResolutionPolicy.FIXED_HEIGHT); // console.log(height);
            // cvs.width = 720;
            // cvs.height = height;
          }

          let str = `window寬:${canvasSize.width}\n\rwindow高:${canvasSize.height}\n\rcocos寬:${this.curDR.width}\n\rcocos高:${this.curDR.height}`; // find("資訊", cvs.node).getComponent(Label).string = str;
          // if (canvasSize.height / canvasSize.width <= 16 / 9) {
          // } else {
          //     // if (canvasSize.height / canvasSize.width > 16 / 9 && canvasSize.height / canvasSize.width <= 19.5 / 9) {
          //     //     view.setDesignResolutionSize(720, 1500, ResolutionPolicy.FIXED_WIDTH)
          //     // } else {
          //     //     view.setDesignResolutionSize(720, 1500, ResolutionPolicy.FIXED_HEIGHT)
          //     // }
          //     cvs.width = 720;
          //     cvs.height = 1500;
          // }
          // console.error("HIHI");
          // if ((screen.windowSize.width) >= (720) || (screen.windowSize.height / screen.windowSize.width) <= (1280 / 720)) {
          //     //宽度超出
          //     var width = screen.windowSize.width * (1280 / screen.windowSize.height);
          //     view.setDesignResolutionSize(width, 1280, ResolutionPolicy.FIXED_HEIGHT);
          // } else {
          //     //高度超出
          //     var height = screen.windowSize.height * (720 / screen.windowSize.width);
          //     view.setDesignResolutionSize(720, height, ResolutionPolicy.FIXED_WIDTH);
          // }
        } // debounce(func: Function) {
        //     let timer;
        //     return function (event) {
        //         if (timer) clearTimeout(timer);
        //         timer = setTimeout(func, 300, event);
        //     };
        // }


        resize() {
          //根据屏幕大小决定适配策略
          //想明白原理，请阅读本文 https://blog.csdn.net/qq_36720848/article/details/89742451
          let cvs = find('Canvas').getComponent(UITransform);
          if (!this.curDR) this.curDR = view.getDesignResolutionSize(); // console.log(screen);

          var s = view.getFrameSize(); // console.log(dr);
          // console.log(s);

          var rw = s.width;
          var rh = s.height;
          var finalW = rw;
          var finalH = rh;

          if (rw / rh > this.curDR.width / this.curDR.height) {
            //!#zh: 是否优先将设计分辨率高度撑满视图高度。 */
            //cvs.fitHeight = true;
            //如果更长，则用定高
            finalH = this.curDR.height;
            finalW = finalH * rw / rh;
          } else {
            /*!#zh: 是否优先将设计分辨率宽度撑满视图宽度。 */
            //cvs.fitWidth = true;
            //如果更短，则用定宽
            finalW = this.curDR.width;
            finalH = rh / rw * finalW;
          }

          view.setDesignResolutionSize(finalW, finalH, ResolutionPolicy.UNKNOWN);
          cvs.width = finalW;
          cvs.height = finalH;
        }

        getWinSize() {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AutoView.js.map