System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assetManager, find, instantiate, Prefab, _decorator, PanelData, _dec, _class2, _temp, _crd, ccclass, property, PanelMng;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Model/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      assetManager = _cc.assetManager;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db734i1119A25fC+b+7hLjv", "PanelMng", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PanelMng", PanelMng = (_dec = ccclass('PanelMng'), _dec(_class2 = (_temp = class PanelMng {
        constructor() {
          _defineProperty(this, "mapPanel", new Map());

          _defineProperty(this, "tempBase", []);

          _defineProperty(this, "parent", void 0);
        }

        async initPanel(_node, bundleName) {
          if (this.parent != _node) this.parent = _node;
          return new Promise((resolve, reject) => {
            // console.error(bundleName);
            assetManager.loadBundle(bundleName, (err, bundle) => {
              bundle.loadDir("", Prefab, (err, data) => {
                // console.log(data);
                data.forEach(_prefab => {
                  let _panel = instantiate(_prefab);

                  this.parent.addChild(_panel);
                });
                bundle.release("");
                resolve();
              });
            });
          });
        }

        setPanel(str) {
          let _class = find(str, this.parent).getComponent(str);

          this.mapPanel.set(str, _class);
          this.tempBase.push(_class);
          return this;
        }

        getPanel(str) {
          return this.mapPanel.get(str);
        }

        initSetting() {
          let len = this.tempBase.length; //排序

          for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
              // 如果當前元素大於下一個元素，則交換它們
              if (this.tempBase[j].zIndex > this.tempBase[j + 1].zIndex) {
                let temp = this.tempBase[j];
                this.tempBase[j] = this.tempBase[j + 1];
                this.tempBase[j + 1] = temp;
              }
            }
          }

          for (let index = 0; index < this.tempBase.length; index++) {
            this.tempBase[index].setZIndex();
          }

          return this;
        }

      }, _temp)) || _class2));

      PanelData = class PanelData {
        constructor() {
          _defineProperty(this, "comp", void 0);

          _defineProperty(this, "compName", void 0);
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelMng.js.map