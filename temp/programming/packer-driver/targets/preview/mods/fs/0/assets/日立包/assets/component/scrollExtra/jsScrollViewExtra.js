System.register(["ListViewNew", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _req, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_ListViewNew) {
      _req = _ListViewNew.__cjsMetaURL;
    }, function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "ListViewNew": _req
        }, _require);

        (function () {
          /* jshint esversion:6 */

          /**
           * 2022/9/15
           * Created by yyg
           */
          var ListViewNew = require("ListViewNew");

          cc.Class({
            extends: cc.Component,
            properties: {
              scrollView: cc.ScrollView,
              listViewExtra: ListViewNew
            },

            onLoad() {
              this.nowOffsetY = 0;
              this.selectChildren = [];
              this.selectChildIndex = 0;
              this.listViewExtra.init([], this);
              var data = [];

              for (var i = 0; i < 30; i++) {
                var time = '2022/' + i;
                data.push(time);
              }

              this.init(data);
            },

            init(_listData) {
              this.listData = _listData;
              this.listData.unshift(" ");
              this.listData.unshift(" ");
              this.listData.push(" ");
              this.listData.push(" "); // 初始化

              this.addScrollChildIndex();
            },

            newEventHandler(target, component, handler) {
              var e = new cc.Component.EventHandler();
              e.target = target;
              e.component = component;
              e.handler = handler;
              return e;
            },

            /** 增加scroll子节点区间功能 */
            addScrollChildIndex() {
              /** 禁用鼠标滚轮，滚轮在移动区间时ScrollEvent返回很怪异，没有SCROLL_ENDED事件回调 */
              this.node.off(cc.Node.EventType.MOUSE_WHEEL);
              var scroll = this.scrollView;
              /** scroll事件监听 */

              scroll.node.on("scrolling", () => {
                this.scrolling(scroll);
              }, this);
              scroll.node.on("scroll-ended", () => {
                this.scrollToOffset(scroll);
              }, this);
              this.nowOffsetY = scroll.getScrollOffset().y;
              /** 加载listView子节点 */

              this.listViewExtra.updateData(this.listData);
              this.updateListSelectChildren();
              this.setSelectChildIndex(0);
            },

            // 刷新复用后的item列表
            updateListSelectChildren() {
              var height = this.listViewExtra.itemHeight;
              var index = 0;
              this.selectChildren = [];
              this.listViewExtra.itemList.forEach((itemNode, i) => {
                var jsItem = itemNode.getComponent("ListViewItemNew");
                var itemPos = this.listViewExtra.getPositionInView(itemNode);
                var absY = Math.abs(itemPos.y);

                if (jsItem.labNum.string != " ") {
                  this.selectChildren[index] = itemNode;
                  itemNode.scale = (600 - absY) / 600;

                  if (absY <= height / 2) {
                    itemNode.opacity = 120 + (height / 2 - absY) * 7;
                    this.selectChildIndex = index;
                  } else {
                    itemNode.opacity = 120;
                  }

                  index++;
                }
              });
            },

            getScrollChildOffset(scroll) {
              this.updateListSelectChildren();
              /** 每个子节点高度，用来计算区间 */

              var height = this.listViewExtra.itemHeight;
              var maxoffset = scroll.getMaxScrollOffset().y;
              var offset = scroll.getScrollOffset().y;

              if (offset < 0) {
                this.selectChildIndex = 0;
                return 0;
              } else if (offset > maxoffset) {
                return maxoffset;
              }

              var o = 0;
              var o2 = height;
              var i = 0;

              while (true) {
                if (Math.abs(o - offset) < Math.abs(o2 - offset)) {
                  return o;
                }

                o += height;
                o2 += height;
                i++;
              }
            },

            setSelectChildIndex(idx) {
              for (var i = 0; i < this.selectChildren.length; i++) {
                this.selectChildren[i].opacity = i == idx ? 255 : 120;
              } // 这里回调，传出选择结果


              console.log(">>> 选择结果:", idx);
            },

            scrolling(scroll) {
              this.updateListSelectChildren();
              /** 每个子节点高度，用来计算区间 */

              var maxoffset = scroll.getMaxScrollOffset().y;
              var offset = scroll.getScrollOffset().y;
              /** 惯性速度低于X后停止滚动 */

              if (this.contentY) {
                var sudo = scroll.content.y - this.contentY;

                if (Math.abs(sudo) <= 5) {
                  scroll.stopAutoScroll();
                }
              }

              this.contentY = scroll.content.y;

              if (offset <= 0) {
                this.selectChildIndex = 0;
                return;
              } else if (offset >= maxoffset) {
                return;
              }
            },

            scrollToOffset(scroll) {
              var offset = this.getScrollChildOffset(scroll);
              var scrollOffset = scroll.getScrollOffset();
              if (Math.abs(this.nowOffsetY - scrollOffset.y) < 0.01) return this.setSelectChildIndex(this.selectChildIndex);
              this.nowOffsetY = offset;
              scroll.scrollToOffset(cc.v2(scrollOffset.x, this.nowOffsetY), 0.5);
            }

          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=jsScrollViewExtra.js.map