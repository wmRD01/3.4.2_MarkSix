System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, view, ResolutionPolicy, find, UITransformComponent, screen, macro, size, sys, game, DelayTime, _dec, _class, _class2, _temp, _crd, ccclass, property, testAuto;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDelayTime(extras) {
    _reporterNs.report("DelayTime", "../../../Plug/DelayTime", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
      find = _cc.find;
      UITransformComponent = _cc.UITransformComponent;
      screen = _cc.screen;
      macro = _cc.macro;
      size = _cc.size;
      sys = _cc.sys;
      game = _cc.game;
    }, function (_unresolved_2) {
      DelayTime = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d772Ob0vRIBpcqMdFW8sEL", "testauto", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", testAuto = (_dec = ccclass('testAuto'), _dec(_class = (_temp = _class2 = class testAuto {
        /**
         * 
         * @param type as macro ORIENTATION;
         * @param 1 = Portrait;
         * @param 2 = LANDSCAPE;
         * @param 3 = Auto(暫時用不到?);
         */
        static SetConfigAdjustView(type, delayTime) {
          var _this = this;

          switch (type) {
            case 1:
              if (sys.os == sys.OS.ANDROID) jsb.reflection.callStaticMethod('com.cocos.game/AppActivity', 'setOrientation', '(Ljava/lang/String;)V', "V");
              this.adjustFunction = this.AdjustViewPortrait;
              break;

            case 2:
              if (sys.os == sys.OS.ANDROID) jsb.reflection.callStaticMethod('com.cocos.game/AppActivity', 'setOrientation', '(Ljava/lang/String;)V', "L");
              this.adjustFunction = this.AdjustViewLandscape;
              break;
          }

          this.adjustFunction();
          window.addEventListener("resize", /*#__PURE__*/_asyncToGenerator(function* () {
            if (_this.isCanUpdata) {
              _this.isCanUpdata = false;
              yield (_crd && DelayTime === void 0 ? (_reportPossibleCrUseOfDelayTime({
                error: Error()
              }), DelayTime) : DelayTime).getInstance.StartDT_NotClear(delayTime);

              _this.adjustFunction();

              _this.isCanUpdata = true;
            } else console.error("等待刷新......");
          }));
          if (window.jsb) //手动调用触发 Wdiget 组件重新布局
            game.emit('resize', true);
        }

        static AdjustViewPortrait() {
          var canvasSize = this.getWinSize();
          if (!this.curDR) this.curDR = view.getDesignResolutionSize();
          var cvs = find('Canvas').getComponent(UITransformComponent);

          if (canvasSize.width >= this.curDR.width || canvasSize.height / canvasSize.width <= this.curDR.height / this.curDR.width) {
            var width = canvasSize.width * (this.curDR.height / canvasSize.height);
            view.setDesignResolutionSize(width, this.curDR.height, ResolutionPolicy.FIXED_HEIGHT);
          } else {
            var height = canvasSize.height * (this.curDR.width / canvasSize.width);
            view.setDesignResolutionSize(this.curDR.width, height, ResolutionPolicy.FIXED_HEIGHT);
          }
        }

        static AdjustViewLandscape() {
          var canvasSize = this.getWinSize();
          if (!this.curDR) this.curDR = view.getDesignResolutionSize();
          var cvs = find('Canvas').getComponent(UITransformComponent);

          if (canvasSize.height >= this.curDR.width || canvasSize.width / canvasSize.height <= this.curDR.height / this.curDR.width) {
            var width = canvasSize.height * (this.curDR.height / canvasSize.width);
            view.setDesignResolutionSize(1280, width, ResolutionPolicy.FIXED_WIDTH);
          } else {
            var height = canvasSize.width * (this.curDR.width / canvasSize.height);
            view.setDesignResolutionSize(height, this.curDR.height, ResolutionPolicy.FIXED_WIDTH);
          }
        }

        static AdjustView() {
          var windowSize = screen.windowSize;
          if (!this.curDR) this.curDR = view.getDesignResolutionSize();

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
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        }

        static checkWindowOrientation() {
          if (window.innerHeight > window.innerWidth) return 1;else return 2;
        }

      }, _defineProperty(_class2, "curDR", null), _defineProperty(_class2, "isCanUpdata", true), _defineProperty(_class2, "adjustFunction", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=testauto.js.map