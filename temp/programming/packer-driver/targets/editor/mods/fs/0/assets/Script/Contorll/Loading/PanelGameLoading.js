System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, find, Label, ProgressBar, Sprite, UIOpacity, _decorator, MyMath, GameEvent, GameSceneName, BaseComponent, RequestGPG, _dec, _class, _temp, _crd, ccclass, property, PanelGameLoading;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyMath(extras) {
    _reporterNs.report("MyMath", "../../../Plug/MyMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneName(extras) {
    _reporterNs.report("GameSceneName", "../../Enum/GameSenceName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../Api/GPGAPI/RequestGPG", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
      find = _cc.find;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      MyMath = _unresolved_2.default;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      GameSceneName = _unresolved_4.GameSceneName;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      RequestGPG = _unresolved_6.RequestGPG;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34f87bopNJCO4WF0VXsOQ6/", "PanelGameLoading", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelGameLoading = (_dec = ccclass('PanelGameLoading'), _dec(_class = (_temp = class PanelGameLoading extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

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
          }), GameEvent) : GameEvent).CloseGameLoad, this.closeGameLoadAction);
          director.preloadScene((_crd && GameSceneName === void 0 ? (_reportPossibleCrUseOfGameSceneName({
            error: Error()
          }), GameSceneName) : GameSceneName).Lobby, this.eventProgress.bind(this), () => {
            /**確認資源加載完成，要如何確認呢? */
          });
          this.show();
        }

        setProgressText(str) {
          this.label_progress.string = str;
        }

        setLogo(_sprite) {
          let getUI = this.sprite_Logo.getComponent(UIOpacity);
          getUI.opacity = 255;
          this.sprite_Logo.spriteFrame = _sprite;
          let getOrg = this.sprite_Logo.node.position; // tween(getUI)
          //     .to(.5, { opacity: 255 })
          //     .start()
          // let action = tween()
          //     .to(1, { position: v3(getOrg.x, getOrg.y + 30, getOrg.z) })
          //     .to(1, { position: v3(getOrg.x, getOrg.y - 30, getOrg.z) })
          // tween(this.sprite_Logo.node)
          //     .set({ position: v3(getOrg.x, getOrg.y - 30, getOrg.z) })
          //     .then(action)
          //     .union()
          //     .repeatForever()
          //     .start()
        }

        closeGameLoadAction() {
          /**停止Loading */

          /**顯示登入介面 */
        }

        eventVerificationClient() {
          /**送出驗證 */
          const url = "https://a1-gpg.ceis.tw/Token/ValidateContactInfo";
          const request = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Request();
          request.method = (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Method.POST;
          const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
            error: Error()
          }), RequestGPG) : RequestGPG).Body.NotNeedToken.ValidateContactInfo();
          body.Phone = `+886999999999`;
          request.body = JSON.stringify(body);
          fetch(url, request).then(this.我轉資料).then(this.我拿資料囉);
          console.log("你會等我?");
        }

        eventProgress(completedCount, totaleCount, item) {
          // console.log(completedCount, totaleCount);
          // console.log(MyMath.divide(completedCount, totaleCount));
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

        我轉資料(response) {
          return response.json();
        }

        我拿資料囉(response) {
          console.log("哈哈哈宋拉", response);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelGameLoading.js.map