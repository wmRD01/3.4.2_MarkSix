System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, instantiate, isValid, macro, UITransform, _decorator, PullScrollView, ListViewItemNew, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ListViewNew;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPullScrollView(extras) {
    _reporterNs.report("PullScrollView", "../scrollPull/PullScrollView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewItemNew(extras) {
    _reporterNs.report("ListViewItemNew", "./ListViewItemNew", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      macro = _cc.macro;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PullScrollView = _unresolved_2.default;
    }, function (_unresolved_3) {
      ListViewItemNew = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "58eccd9M2RMXL7ibH3t+Mya", "ListViewNew", undefined);

      /**
       * 仅调用一次
       * @param content 錨點需要設置為0.5；
       * @param item 需要繼承ListViewItemNew；
       */
      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ListViewNew = (_dec = ccclass('PaenlFunctionButton'), _dec2 = property({
        type: Boolean,
        tooltip: "是否打开上拉、下拉刷新"
      }), _dec3 = property({
        type: EventHandler,
        tooltip: "顶部下拉刷新回调事件，不传默认关闭下拉刷新",
        visible: () => {
          return (void 0).isPullUpdate;
        }
      }), _dec4 = property({
        type: EventHandler,
        tooltip: "底部上拉刷新回调事件，不传默认关闭上拉刷新",
        visible: () => {
          return (void 0).isPullUpdate;
        }
      }), _dec(_class = (_class2 = (_temp = class ListViewNew extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "scrollView", void 0);

          _defineProperty(this, "itemPrefab", void 0);

          _defineProperty(this, "direction", 1);

          _defineProperty(this, "spawnCount", 0);

          _defineProperty(this, "spacingY", 0);

          _defineProperty(this, "spacingX", 0);

          _defineProperty(this, "itemHeight", 0);

          _defineProperty(this, "itemWidth", 0);

          _defineProperty(this, "colNum", 1);

          _defineProperty(this, "rowNum", 1);

          _initializerDefineProperty(this, "isPullUpdate", _descriptor, this);

          _initializerDefineProperty(this, "topUpdateCallback", _descriptor2, this);

          _initializerDefineProperty(this, "downUpdateCallback", _descriptor3, this);

          _defineProperty(this, "DirectionVertical", 1);

          _defineProperty(this, "initialled", false);

          _defineProperty(this, "obj", void 0);

          _defineProperty(this, "dataList", []);

          _defineProperty(this, "totalCount", void 0);

          _defineProperty(this, "itemList", []);

          _defineProperty(this, "content", void 0);

          _defineProperty(this, "updateTimer", 0);

          _defineProperty(this, "updateInterval", 0.05);

          _defineProperty(this, "lastContentPosY", 0);

          _defineProperty(this, "lastContentPosX", 0);

          _defineProperty(this, "lastContentPosyPageLoad", 0);

          _defineProperty(this, "bufferZoneY", void 0);

          _defineProperty(this, "bufferZoneX", void 0);

          _defineProperty(this, "callBack", void 0);

          _defineProperty(this, "jsPullScroll", void 0);

          _defineProperty(this, "contentUI", void 0);
        }

        /**
        * 仅调用一次
        * @param list 列表数据
        * @param obj 额外数据
        */
        init(list, obj) {
          if (this.initialled) {
            return;
          }

          this.DirectionVertical = 1; //1為豎屏 其他為橫屏

          this.initialled = false;
          this.obj = obj;
          this.dataList = list || [];
          this.totalCount = this.dataList.length;
          this.itemList = []; // 存储实际创建的项数组

          this.content = this.scrollView.content;
          this.contentUI = this.content.getComponent(UITransform);
          this.updateTimer = 0;
          this.updateInterval = 0.05;
          this.lastContentPosY = 0; // 使用这个变量来判断滚动操作是向上还是向下

          this.lastContentPosX = 0;
          this.lastContentPosyPageLoad = 0; //这个属性是特殊场景上用，加载更多的最后恢复的位置（在上拉过程中会重置lastContentPosY，所有不准确）
          // 设定缓冲矩形的大小为实际创建项的高度累加，当某项超出缓冲矩形时，则更新该项的显示内容

          this.bufferZoneY = Math.ceil(this.spawnCount / this.colNum) * (this.itemHeight + this.spacingY) / 2; // 设定缓冲矩形的大小为实际创建项的宽度累加，当某项超出缓冲矩形时，则更新该项的显示内容

          this.bufferZoneX = Math.ceil(this.spawnCount / this.rowNum) * (this.itemWidth + this.spacingX) / 2;
          this.initialize();
          this.initialled = true;
          this.callBack = null;
          this.addPullScrollComp();
        } // 添加上下拉刷新组件


        addPullScrollComp() {
          if (this.isPullUpdate) {
            // let PullScrollView = require("PullScrollView");
            this.jsPullScroll = this.node.addComponent(_crd && PullScrollView === void 0 ? (_reportPossibleCrUseOfPullScrollView({
              error: Error()
            }), PullScrollView) : PullScrollView);
            this.jsPullScroll.initForListView(this);
          }
        } // 高度改变时更新上下拉的高度


        refreshPullUpdate() {
          if (this.jsPullScroll) {
            this.jsPullScroll.refreshView( //@ts-ignore
            () => {
              this.topUpdateCallback.emit();
            }, //@ts-ignore
            () => {
              this.downUpdateCallback.emit();
            });
          }
        }

        removeAllItems() {
          for (const key in this.itemList) {
            if (this.itemList[key]) {
              this.itemList[key] = null;
            }
          }

          this.itemList = [];

          if (this.content) {
            this.content.removeAllChildren();
          }
        } // 列表初始化


        initialize() {
          // 获取整个列表的高度
          if (this.direction == this.DirectionVertical) {
            this.contentUI.height = Math.ceil(this.totalCount / this.colNum) * (this.itemHeight + this.spacingY) + this.spacingY;

            for (let i = 0; i < this.spawnCount; ++i) {
              // spawn items, we only need to do this once
              let item = instantiate(this.itemPrefab);
              this.content.addChild(item);
              item.active = true; //设置该item的坐标（注意父节点content的Anchor坐标是(0.5, 1)，所以item的y坐标总是负值）

              let row = Math.floor(i / this.colNum);
              let col = i % this.colNum;
              let x = (this.itemWidth + this.spacingX) * (-(this.colNum - 1) * 0.5 + col);
              item.setPosition(x, -this.itemHeight * (0.5 + row) - this.spacingY * (row + 1));
              item.getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                error: Error()
              }), ListViewItemNew) : ListViewItemNew).index = i;
              item.getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                error: Error()
              }), ListViewItemNew) : ListViewItemNew).updateItem(i, this.dataList[i], this.obj);
              this.itemList.push(item);
            }
          } else {
            this.contentUI.width = Math.ceil(this.totalCount / this.rowNum) * (this.itemWidth + this.spacingX) + this.spacingX;

            for (let i = 0; i < this.spawnCount; ++i) {
              // spawn items, we only need to do this once
              let item = instantiate(this.itemPrefab);
              this.content.addChild(item);
              item.active = true; // 设置该item的坐标（注意父节点content的Anchor坐标是(0, 0.5)，所以item的x坐标总是正值）

              let col = Math.floor(i / this.rowNum);
              let row = i % this.rowNum;
              let y = (this.itemHeight + this.spacingY) * ((this.rowNum - 1) * 0.5 - row);
              item.setPosition(this.itemWidth * (0.5 + col) + this.spacingX * (col + 1), y);
              item.getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                error: Error()
              }), ListViewItemNew) : ListViewItemNew).index = i;
              item.getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                error: Error()
              }), ListViewItemNew) : ListViewItemNew).updateItem(i, this.dataList[i], this.obj);
              this.itemList.push(item);
            }
          }
        } // 返回item在ScrollView空间的坐标值


        getPositionInView(item) {
          if (isValid(item) && isValid(item.parent)) {
            let worldPos = item.parent.convertToWorldSpaceAR(item.position);
            let viewPos = this.scrollView.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            return viewPos;
          }
        } // 每帧调用一次。根据滚动位置动态更新item的坐标和显示(所以spawnCount可以比totalCount少很多)


        update(dt) {
          if (!this.initialled) {
            return;
          }

          this.updateTimer += dt;

          if (this.updateTimer < this.updateInterval || this.itemList && this.itemList.length <= 0) {
            // console.log("updateTimer ========return");
            return; // 我们不需要每帧都做计算
          }

          this.updateTimer = 0;
          let items = this.itemList;

          if (this.direction == this.DirectionVertical) {
            // 如果当前content的y坐标小于上次记录值，则代表往下滚动，否则往上。
            let isDown = this.content.position.y < this.lastContentPosY; // 实际创建项占了多高（即它们的高度累加）

            let offset = (this.itemHeight + this.spacingY) * Math.ceil(this.spawnCount / this.colNum);
            let newY = 0; // 遍历数组，更新item的位置和显示

            for (let i = 0; i < items.length; ++i) {
              let viewPos = this.getPositionInView(items[i]);

              if (isDown) {
                // 提前计算出该item的新的y坐标
                newY = items[i].y + offset; // 如果往下滚动时item已经超出缓冲矩形，且newY未超出content上边界，
                // 则更新item的坐标（即上移了一个offset的位置），同时更新item的显示内容

                if (viewPos.y < -this.bufferZoneY && newY < 0) {
                  items[i].y = newY;
                  let itemComp = items[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                    error: Error()
                  }), ListViewItemNew) : ListViewItemNew);
                  let index = itemComp.index - items.length; // 更新index及数据下标

                  itemComp.index = index;
                  itemComp.updateItem(index, this.dataList[index], this.obj);
                }
              } else {
                // 提前计算出该item的新的y坐标
                newY = items[i].y - offset; // 如果往上滚动时item已经超出缓冲矩形，且newY未超出content下边界，
                // 则更新item的坐标（即下移了一个offset的位置），同时更新item的显示内容

                if (viewPos.y > this.bufferZoneY && newY > -this.contentUI.height) {
                  items[i].y = newY;
                  let itemComp = items[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                    error: Error()
                  }), ListViewItemNew) : ListViewItemNew);
                  let index = itemComp.index + items.length; // 更新index及数据下标

                  itemComp.index = index;
                  itemComp.updateItem(index, this.dataList[index], this.obj);
                  this.lastContentPosyPageLoad = this.content.position.y;
                }
              }
            } // 更新lastContentPosY和总项数显示


            this.lastContentPosY = this.content.position.y;
          } else {
            // 如果当前content的x坐标小于上次记录值，则代表往左滚动，否则往右。
            let isLeft = this.content.position.x < this.lastContentPosX; // 实际创建项占了多高（即它们的宽度累加）

            let offset = (this.itemWidth + this.spacingX) * Math.ceil(this.spawnCount / this.rowNum);
            let newX = 0; // 遍历数组，更新item的位置和显示

            for (let i = 0; i < items.length; ++i) {
              let viewPos = this.getPositionInView(items[i]);

              if (isLeft) {
                // 提前计算出该item的新的y坐标
                newX = items[i].x + offset; // 如果往左滚动时item已经超出缓冲矩形，且newX未超出content右边界，
                // 则更新item的坐标（即右移了一个offset的位置），同时更新item的显示内容

                if (viewPos.x < -this.bufferZoneX && newX < this.contentUI.width) {
                  items[i].x = newX;
                  let itemComp = items[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                    error: Error()
                  }), ListViewItemNew) : ListViewItemNew);
                  let index = itemComp.index + items.length; // 更新index及数据下标

                  itemComp.index = index;
                  itemComp.updateItem(index, this.dataList[index], this.obj);
                }
              } else {
                // 提前计算出该item的新的y坐标
                newX = items[i].x - offset; // 如果往右滚动时item已经超出缓冲矩形，且newY未超出content左边界，
                // 则更新item的坐标（即左移了一个offset的位置），同时更新item的显示内容

                if (viewPos.x > this.bufferZoneX && newX > 0) {
                  items[i].x = newX;
                  let itemComp = items[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                    error: Error()
                  }), ListViewItemNew) : ListViewItemNew);
                  let index = itemComp.index - items.length; // 更新index及数据下标

                  itemComp.index = index;
                  itemComp.updateItem(index, this.dataList[index], this.obj);
                }
              }
            } // 更新lastContentPosY和总项数显示


            this.lastContentPosX = this.content.position.x;
          }
        } //更新列表内数据


        updateData(list, isSplitLoad, notScrollToTop) {
          this.dataList = list;
          let NotScrollToTop = this.dataList && this.dataList.length > this.spawnCount;
          this.scrollView.stopAutoScroll();

          if (isSplitLoad) {
            this.updateDataAndSplitLoad(this.dataList);
            return;
          } // 


          if (this.direction == this.DirectionVertical) {
            if (!notScrollToTop || !NotScrollToTop) this.scrollView.scrollToTop();

            for (let i = 0; i < this.itemList.length; i++) {
              let row = Math.floor(i / this.colNum);
              this.itemList[i].y = -this.itemHeight * (0.5 + row) - this.spacingY * (row + 1);
              let itemComp = this.itemList[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                error: Error()
              }), ListViewItemNew) : ListViewItemNew);
              let data = this.dataList[i];
              itemComp.index = i;
              itemComp.updateItem(i, data, this.obj);
            }

            this.contentUI.height = Math.ceil(this.dataList.length / this.colNum) * (this.itemHeight + this.spacingY) + this.spacingY;
          } else {
            if (!notScrollToTop || !NotScrollToTop) this.scrollView.scrollToLeft();

            for (let i = 0; i < this.itemList.length; i++) {
              let col = Math.floor(i / this.rowNum);
              this.itemList[i].x = this.itemWidth * (0.5 + col) + this.spacingX * (col + 1);
              let itemComp = this.itemList[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                error: Error()
              }), ListViewItemNew) : ListViewItemNew);
              let data = this.dataList[i];
              itemComp.index = i;
              itemComp.updateItem(i, data, this.obj);
            }

            this.contentUI.width = Math.ceil(this.dataList.length / this.rowNum) * (this.itemWidth + this.spacingX) + this.spacingX;
          }

          this.updateHeightForData();
        }

        updateDataNoChangeIndex(list) {
          if (!list || list.length <= 0) {
            //@ts-ignore
            this.dataList.content.x = 0;
            return;
          }

          this.dataList = list;

          for (let i = 0; i < this.itemList.length; i++) {
            let itemComp = this.itemList[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
              error: Error()
            }), ListViewItemNew) : ListViewItemNew);
            let data = this.dataList[itemComp.index];
            itemComp.updateItem(itemComp.index, data, list);
          }

          this.contentUI.width = Math.ceil(this.dataList.length / this.rowNum) * (this.itemWidth + this.spacingX) + this.spacingX;
        } // 更新列表内数据,分帧加载。


        updateDataAndSplitLoad(list) {
          this.initialled = false;
          this.dataList = list;
          this.scrollView.stopAutoScroll();

          if (this.callBack) {
            this.unschedule(this.callBack);
          }

          if (this.direction == this.DirectionVertical) {
            let i = 0;
            this.scrollView.scrollToTop();
            this.contentUI.height = 0;

            this.callBack = () => {
              if (i >= this.itemList.length || !isValid(this.content)) {
                this.unschedule(this.callBack);
                this.callBack = null;
                this.initialled = true;
                if (this.content) this.contentUI.height = Math.ceil(this.dataList.length / this.colNum) * (this.itemHeight + this.spacingY) + this.spacingY;
                return;
              }

              let row = Math.floor(i / this.colNum);
              this.itemList[i].y = -this.itemHeight * (0.5 + row) - this.spacingY * (row + 1);
              let itemComp = this.itemList[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                error: Error()
              }), ListViewItemNew) : ListViewItemNew);
              let data = this.dataList[i];
              itemComp.index = i;
              itemComp.updateItem(i, data, this.obj);
              i++;
            };
          } else {
            let i = 0;
            this.scrollView.scrollToLeft();
            this.contentUI.width = 0;

            this.callBack = () => {
              if (i >= this.itemList.length || !isValid(this.content)) {
                this.unschedule(this.callBack);
                this.callBack = null;
                this.initialled = true;
                if (this.content) this.contentUI.width = Math.ceil(this.dataList.length / this.rowNum) * (this.itemWidth + this.spacingX) + this.spacingX;
                return;
              }

              let col = Math.floor(i / this.rowNum);
              this.itemList[i].x = this.itemWidth * (0.5 + col) + this.spacingX * (col + 1);
              let itemComp = this.itemList[i].getComponent(_crd && ListViewItemNew === void 0 ? (_reportPossibleCrUseOfListViewItemNew({
                error: Error()
              }), ListViewItemNew) : ListViewItemNew);
              itemComp.index = i;
              let data = this.dataList[i];
              itemComp.updateItem(i, data, this.obj);
              i++;
            };
          }

          this.schedule(this.callBack, 0.02, macro.REPEAT_FOREVER);
        }

        updateHeightForData(data) {
          if (data) {
            this.dataList = data;
          }

          if (this.dataList) {
            let length = this.dataList.length;

            if (this.direction == this.DirectionVertical) {
              // 计算真实高度
              this.contentUI.height = Math.ceil(length / this.colNum) * (this.itemHeight + this.spacingY) + this.spacingY; // 设置最小高度，使其能滚动

              let viewHeight = this.content.parent.getComponent(UITransform).height;

              if (this.contentUI.height < viewHeight) {
                this.contentUI.height = viewHeight;
              }
            } else {
              // 计算真实宽度
              this.contentUI.width = Math.ceil(length / this.rowNum) * (this.itemWidth + this.spacingX) + this.spacingX; // 设置最小宽度，使其能滚动

              let viewWidth = this.content.parent.getComponent(UITransform).width;

              if (this.contentUI.width < viewWidth) {
                this.contentUI.width = viewWidth;
              }
            }
          }

          this.refreshPullUpdate();
        }

        onDestroy() {//clearInterval(this.IntervalId);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isPullUpdate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "topUpdateCallback", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "downUpdateCallback", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ListViewNew.js.map