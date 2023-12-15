System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseComponent, PublicData, PublicModel, HybridWebView, SendData, _dec, _class, _temp, _crd, ccclass, property, ItemLink, WebUrlType, NativeUrlType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../../../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHybridWebView(extras) {
    _reporterNs.report("HybridWebView", "../../../Api/HybridWebView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PublicData = _unresolved_3.default;
    }, function (_unresolved_4) {
      PublicModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      HybridWebView = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2953dynh9ZPQ6E03zvrjYUr", "ItemLink", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ItemLink = (_dec = ccclass('ItemLink'), _dec(_class = (_temp = class ItemLink extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "url", void 0);
        }

        init() {
          if ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isApp == '1') {
            // 創建一個新的 script 元素
            var script = document.createElement('script'); // 設置 script 元素的屬性，例如 src、type、內容等

            script.src = '_hwv/HybridWebView.js'; // 設置 JavaScript 文件的路徑

            script.type = 'text/javascript'; // 設置 script 的類型
            // 將 script 元素添加到 head 標籤中

            document.head.appendChild(script);
            this.url = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.getEnumValue(this.node.name.split("Link")[0], NativeUrlType);
          } else this.url = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.getEnumValue(this.node.name.split("Link")[0], WebUrlType);
        }

        onOpenWindow(e, customEventData) {
          if ((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.isApp == '1') {
            if (this.url == NativeUrlType.Official) window.location.href = this.url;else (_crd && HybridWebView === void 0 ? (_reportPossibleCrUseOfHybridWebView({
              error: Error()
            }), HybridWebView) : HybridWebView).SendRawMessageToDotNet(this.url);
          } else window.open(this.url); // console.log(this.url);
          // let _data = new SendData()
          // _data.name = this.node.name.split("Link")[0]
          // PublicData.getInstance.markSixMsg.send(MarkSixCommandType.contact, _data)
          // window.open(this.url)
        }

      }, _temp)) || _class));

      (function (WebUrlType) {
        WebUrlType["Official"] = "https://godplay.app/";
        WebUrlType["FaceBook"] = "https://www.facebook.com/GodPlayGameFun/";
        WebUrlType["Instagram"] = "https://www.instagram.com/explore/tags/gpg/";
      })(WebUrlType || (WebUrlType = {}));

      (function (NativeUrlType) {
        NativeUrlType["Official"] = "../index.html";
        NativeUrlType["FaceBook"] = "https://www.facebook.com/GodPlayGameFun/";
        NativeUrlType["Instagram"] = "https://www.instagram.com/explore/tags/gpg/";
      })(NativeUrlType || (NativeUrlType = {}));

      SendData = class SendData {
        constructor() {
          _defineProperty(this, "name", void 0);
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemLink.js.map