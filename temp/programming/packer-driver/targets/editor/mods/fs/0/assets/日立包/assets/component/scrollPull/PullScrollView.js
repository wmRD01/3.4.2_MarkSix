System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, instantiate, loader, Prefab, ScrollView, UITransform, Vec3, _decorator, _dec, _class, _temp, _crd, ccclass, property, PullScrollView;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfListViewNew(extras) {
    _reporterNs.report("ListViewNew", "../listView/ListViewNew", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd60484PA9DR5AP52BgjPNX", "PullScrollView", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PullScrollView = (_dec = ccclass('PullScrollView'), _dec(_class = (_temp = class PullScrollView extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "scrollView", void 0);

          _defineProperty(this, "content", void 0);

          _defineProperty(this, "jsListView", void 0);

          _defineProperty(this, "topLoading", void 0);

          _defineProperty(this, "downLoading", void 0);

          _defineProperty(this, "pullTopAnim", void 0);

          _defineProperty(this, "jsPullTopAnim", void 0);

          _defineProperty(this, "pullAnim", void 0);

          _defineProperty(this, "jsPullDownAnim", void 0);

          _defineProperty(this, "topPullCallFunc", void 0);

          _defineProperty(this, "downPullCallFunc", void 0);

          _defineProperty(this, "startContentHeight", void 0);

          _defineProperty(this, "startContentY", void 0);

          _defineProperty(this, "showAction", void 0);

          _defineProperty(this, "playing", void 0);
        }

        onLoad() {
          this.scrollView = this.node.getComponent(ScrollView);

          if (this.scrollView) {
            this.content = this.scrollView.content;
          }
        } // 兼容ListViewNew时初始化执行


        initForListView(jsListView) {
          this.jsListView = jsListView;
          this.scrollView = jsListView.scrollView;
          this.content = jsListView.scrollView.content;
        }

        initAnim(_topPull, _downPull) {
          if (_topPull && !this.topLoading) {
            this.topLoading = true;
            loader.loadRes("pfPullTopAnim", Prefab, (errorMessage, prefab) => {
              let pullTopAnim = instantiate(prefab);
              this.content.parent.addChild(pullTopAnim);
              pullTopAnim.setSiblingIndex(0);
              let jsPullTopAnim = pullTopAnim.getComponent("jsPullTopAnim");
              this.pullTopAnim = pullTopAnim;
              this.jsPullTopAnim = jsPullTopAnim;
            });
          }

          if (_downPull && !this.downLoading) {
            this.downLoading = true;
            loader.loadRes("pfPullDownAnim", Prefab, (errorMessage, prefab) => {
              let pullAnim = instantiate(prefab);
              this.content.parent.addChild(pullAnim);
              pullAnim.setSiblingIndex(this.content.parent.children.length);
              let jsPullDownAnim = pullAnim.getComponent("jsPullDownAnim");
              this.pullAnim = pullAnim;
              this.jsPullDownAnim = jsPullDownAnim;
            });
          }
        }

        refreshView(_topPullCallFunc, _downPullCallFunc) {
          this.initAnim(_topPullCallFunc, _downPullCallFunc);
          this.topPullCallFunc = _topPullCallFunc;
          this.downPullCallFunc = _downPullCallFunc; // this.scheduleOnce(()=>{ // 延迟一帧让Widget对齐

          this.startContentHeight = this.content.getComponent(UITransform).height;
          this.startContentY = this.startContentY || this.content.position.y; // } 1/30);
        }

        downPullUpdate() {
          if (this.downPullCallFunc) {
            this.downPullCallFunc();
          }
        }

        topPullUpdate() {
          if (this.topPullCallFunc) {
            this.topPullCallFunc();
          }
        }

        update() {
          if (!this.scrollView || !this.startContentHeight) {
            return;
          }

          let offsetY = this.scrollView.getScrollOffset().y;
          let viewHeight = this.content.parent.getComponent(UITransform).height;
          let contentHeight = this.content.getComponent(UITransform).height;
          let topPullH = offsetY + viewHeight - contentHeight;
          let isTouching = this.scrollView.isScrolling();

          if (this.pullTopAnim && Math.ceil(offsetY) < 0) {
            if (isTouching) {
              this.showAction = Math.abs(offsetY) > 100;
            } else {
              if (this.showAction) {
                this.scrollView.stopAutoScroll();
                this.showAction = false;
                this.playing = true;
                this.pullTopAnim.y = viewHeight / 2 - 45;
                this.jsPullTopAnim.show();
                this.jsPullTopAnim.play(() => {
                  this.playing = false;
                  this.jsPullTopAnim.hide();
                  this.scrollView.scrollToTop();
                  this.topPullUpdate();
                });
              } else if (!this.playing) {
                this.jsPullTopAnim.hide();
              } else if (this.playing) {
                this.scrollView.stopAutoScroll();
                this.content.position = new Vec3(this.content.position.x, this.startContentY - 100, this.content.position.z);
              }
            }
          } else if (this.pullAnim && topPullH >= 0) {
            if (isTouching) {
              this.pullAnim.y = topPullH > 60 ? -viewHeight / 2 + 60 - 30 : -viewHeight / 2 + topPullH - 30;
              this.showAction = topPullH > 120;

              if (topPullH > 60) {
                this.jsPullDownAnim.pulldownUpdate(topPullH);
              }
            } else {
              if (this.showAction) {
                this.showAction = false;
                this.playing = true;
                this.content.getComponent(UITransform).height = this.startContentHeight + 90;
                this.setListViewUpdate(false);
                this.scrollView.stopAutoScroll();
                this.scrollView.scrollToBottom(0);
                this.jsPullDownAnim.loosenAnim(() => {
                  this.playing = false;
                  this.content.getComponent(UITransform).height = this.startContentHeight;
                  this.scrollView.stopAutoScroll();
                  this.scrollView.scrollToBottom(0);
                  this.setListViewUpdate(true);
                  this.downPullUpdate();
                });
              } else if (!this.playing) {
                this.jsPullDownAnim.cleanScale();
                this.pullAnim.y = -viewHeight / 2 + topPullH - 30;
              }
            }
          }
        }

        setListViewUpdate(switchKey) {
          if (this.jsListView) {
            this.jsListView.initialled = switchKey;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PullScrollView.js.map