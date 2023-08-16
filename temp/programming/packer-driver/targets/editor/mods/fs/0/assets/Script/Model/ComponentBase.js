System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, UIOpacity, Vec3, NotificationType, GameEvent, EventMng, PublicData, PublicModel, _dec, _class, _temp, _crd, ccclass, property, BaseComponent;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "./PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "./PublicModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      NotificationType = _unresolved_2.NotificationType;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      PublicData = _unresolved_5.default;
    }, function (_unresolved_6) {
      PublicModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1687c1huW9I/a4J27+tPFEL", "ComponentBase", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BaseComponent = (_dec = ccclass('BaseComponent'), _dec(_class = (_temp = class BaseComponent extends Component {
        constructor(...any) {
          super();

          _defineProperty(this, "inter", void 0);

          _defineProperty(this, "delayTime", void 0);

          _defineProperty(this, "zIndex", void 0);
        }

        onLoad() {
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.arr_ComponentBaseClass.push(this);
          if (this.getComponent(UIOpacity)) this.getComponent(UIOpacity).opacity = 255;
        }

        start() {}

        setZIndex() {
          this.node.setSiblingIndex(this.zIndex);
        }

        setLanguage() {
          this.deletEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SetLanguage, this.setLanguage);
        }

        personalComputerInit() {
          this.node.setPosition(Vec3.ZERO);
          this.node.setScale(Vec3.ONE);
        }

        phoneInit() {
          this.node.setPosition(0, -130, 0);
          this.node.setScale((_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.oneSclaeVec3(1.25));
        }

        viewInit(...any) {}

        update(dt) {}

        setEvent(name, callback) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Pulic).on(name, callback, this);
        }

        eventEmit(name, ...any) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Pulic).emit(name, ...any);
        }

        deletEvent(name, callback) {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Pulic).off(name, callback, this);
        }

        show(...any) {
          this.node.active = true;
        }

        hide() {
          this.node.active = false;
        }

        reProcessing(any) {}

        startDelay() {
          this.delayTime = 0;
          this.inter = setInterval(() => {
            this.delayTime += 0.016;
          }, 0.016);
        }

        stopDelay() {
          clearInterval(this.inter);
          return this.delayTime;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ComponentBase.js.map