System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, Label, ProgressBar, Sprite, tween, UIOpacityComponent, v3, GameEvent, MyMath, BaseComponent, PanelGameLoading, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyMath(extras) {
    _reporterNs.report("MyMath", "../../../Plug/MyMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacityComponent = _cc.UIOpacityComponent;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GameEvent = _unresolved_2.GameEvent;
    }, function (_unresolved_3) {
      MyMath = _unresolved_3.default;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "312baMt34BG0ZzY2gSc9FPX", "%E6%9A%AB%E6%99%82%E4%B8%8D%E7%94%A8_PanelGameLoading", undefined);

      _export("default", PanelGameLoading = class PanelGameLoading extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "progressBar", void 0);

          _defineProperty(this, "label_progress", void 0);

          _defineProperty(this, "sprite_Logo", void 0);
        }

        onLoad() {
          this.progressBar = find("ProgressBar", this.node).getComponent(ProgressBar);
          this.sprite_Logo = find("sprite_Logo", this.node).getComponent(Sprite);
          this.label_progress = find("con_Text/label_progress", this.node).getComponent(Label);
          this.label_progress.string = "0%";
          this.progressBar.progress = 0;
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SetLogo, this.setLogo);
          this.setEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CloseGameLoad, this.closeGameLoadAction); // director.preloadScene("MainGame", this.onProgress.bind(this), () => {
          //     CheckLoading.getInstance.changeState(CheckLoadingType.isGameSence, true)
          //     if (CheckLoading.getInstance.checkAllEnd())
          //         this.eventEmit(WebSocketEvent.Login, CommandType.ln)
          // })

          super.viewInit();
          this.show();
        }

        setLogo(_sprite) {
          var getUI = this.sprite_Logo.getComponent(UIOpacityComponent);
          getUI.opacity = 0;
          this.sprite_Logo.spriteFrame = _sprite;
          var getOrg = this.sprite_Logo.node.position;
          tween(getUI).to(.5, {
            opacity: 255
          }).start();
          var action = tween().to(1, {
            position: v3(getOrg.x, getOrg.y + 30, getOrg.z)
          }).to(1, {
            position: v3(getOrg.x, getOrg.y - 30, getOrg.z)
          });
          tween(this.sprite_Logo.node).set({
            position: v3(getOrg.x, getOrg.y - 30, getOrg.z)
          }).then(action).union().repeatForever().start();
        }

        closeGameLoadAction() {
          tween(this.node).delay(1).call(() => {
            this.node.destroy();
          }).start();
        }

        onProgress(completedCount, totaleCount, item) {
          console.log(completedCount, totaleCount); // console.log(MyMath.divide(completedCount, totaleCount));
          // console.log(this.progressBar);

          this.progressBar.progress = (_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).divide(completedCount, totaleCount);
          this.label_progress.string = Math.floor((_crd && MyMath === void 0 ? (_reportPossibleCrUseOfMyMath({
            error: Error()
          }), MyMath) : MyMath).divide(completedCount, totaleCount) * 100).toString() + "%";

          if (this.progressBar.progress >= 1) {
            this.label_progress.string = "wait other data";
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=暫時不用_PanelGameLoading.js.map