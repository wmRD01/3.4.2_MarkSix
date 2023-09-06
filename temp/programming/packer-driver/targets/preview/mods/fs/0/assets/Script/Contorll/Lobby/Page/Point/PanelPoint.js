System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, ScrollView, Vec3, _decorator, BaseComponent, PointItemData, AssetType, AssetMng, RequestGPG, Player, PublicModel, PanelLoading, PublicData, LobbyStateEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, PanelPoint;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPointItemData(extras) {
    _reporterNs.report("PointItemData", "../../../../Model/PointItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../../../Api/GPGAPI/RequestGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../../../../Model/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponseGPG(extras) {
    _reporterNs.report("ResponseGPG", "../../../Api/GPGAPI/ResponseGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../../../NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../../../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PointItemData = _unresolved_3.default;
    }, function (_unresolved_4) {
      AssetType = _unresolved_4.AssetType;
    }, function (_unresolved_5) {
      AssetMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      RequestGPG = _unresolved_6.RequestGPG;
    }, function (_unresolved_7) {
      Player = _unresolved_7.default;
    }, function (_unresolved_8) {
      PublicModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      PanelLoading = _unresolved_9.default;
    }, function (_unresolved_10) {
      PublicData = _unresolved_10.default;
    }, function (_unresolved_11) {
      LobbyStateEvent = _unresolved_11.LobbyStateEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "303d6kw07NO1aiI+BpqSgPM", "PanelPoint", undefined);

      ({
        ccclass,
        property
      } = _decorator); //TODO 優化如果未選號，自動縮欄位

      _export("default", PanelPoint = (_dec = ccclass('PanelPoint'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(ScrollView), _dec(_class2 = (_class3 = (_temp = class PanelPoint extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "item", _descriptor, this);

          _initializerDefineProperty(this, "layoutContent", _descriptor2, this);

          _initializerDefineProperty(this, "labelContent", _descriptor3, this);

          _initializerDefineProperty(this, "outlineContent", _descriptor4, this);

          _initializerDefineProperty(this, "buttonBGContent", _descriptor5, this);

          _defineProperty(this, "maxCount", 30);

          _defineProperty(this, "pageCount", 10);

          _defineProperty(this, "currentCount", 0);

          _initializerDefineProperty(this, "scrollview", _descriptor6, this);

          _defineProperty(this, "isAsync", void 0);

          _defineProperty(this, "isDateMax", void 0);

          _defineProperty(this, "mapDate", new Map());
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
              error: Error()
            }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
              error: Error()
            }), AssetType) : AssetType).Sprite);

            _this.layoutContent.removeAllChildren();

            _this.scrollview.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, _this.onViewBottom, _this);

            _this.setEvent((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
              error: Error()
            }), LobbyStateEvent) : LobbyStateEvent).NextIssueID, _this.reset);
          })();
        }

        onEnable() {
          if (this.layoutContent.children.length > this.maxCount) this.returnFunction();

          if (this.layoutContent.children.length == 0) {
            this.onViewBottom();
          } else this.returnFunction();
        }

        reset() {
          this.layoutContent.removeAllChildren();

          if (this.node.active) {
            this.onViewBottom();
          }
        } //#region History


        requestHistory(count) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(function* (resolve, reject) {
                var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.DrawHistory();
                body.top = count.toString(); //目前固定10筆

                body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
                  error: Error()
                }), PublicModel) : PublicModel).getInstance.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.DrawHistory);
                var convert = new URLSearchParams(body).toString();
                yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                  error: Error()
                }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.gpgUrlPlayApi + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).API.DrawHistory + "?" + convert, _this2.responseDrawHistory.bind(_this2));
                resolve();
              });

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            }());
          })();
        }

        responseDrawHistory(response) {
          console.log("開獎紀錄", response);

          if (this.currentCount == response.data.length) {
            this.isDateMax = true;
            return;
          }

          for (var index = this.currentCount; index < response.data.length; index++) {
            if (this.layoutContent.children.length > this.maxCount) break;
            this.mapDate.set(Number(response.data[index].issueID), this.ClientData(response.data[index]));
          }

          this.currentCount = response.data.length;
        }

        ClientData(data) {
          var _node = instantiate(this.item);

          var _class = _node.getComponent(_crd && PointItemData === void 0 ? (_reportPossibleCrUseOfPointItemData({
            error: Error()
          }), PointItemData) : PointItemData);

          _node.setPosition(Vec3.ZERO);

          this.layoutContent.addChild(_node);

          _class.setLabelContent(this.labelContent).setOutlineContent(this.outlineContent).setButtonBGContent(this.buttonBGContent).setDayData(data.openDate, Number(data.issueID)).setOpenNumber(data.drawCode).init();

          return _class;
        } //#endregion
        //#region Betlog


        requesBetlog(count) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(function* (resolve, reject) {
                var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.Betlog();
                var getDate = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
                  error: Error()
                }), PublicModel) : PublicModel).getInstance.convertDateDiff((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.today, -count);
                body.sDate = getDate.getFullYear() + "-" + (getDate.getMonth() + 1) + "-" + getDate.getDate();
                body.eDate = (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.today.split("T")[0];
                body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
                  error: Error()
                }), PublicModel) : PublicModel).getInstance.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.Betlog);
                var convert = new URLSearchParams(body).toString();
                yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                  error: Error()
                }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.gpgUrlPlayApi + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).API.Betlog + "?" + convert, _this3.responseBetlog.bind(_this3));
                resolve();
              });

              return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
              };
            }());
          })();
        }

        responseBetlog(response) {
          console.log("玩家紀錄", response);
          console.log(this.mapDate);

          for (var index = 0; index < response.data.length; index++) {
            if (!this.mapDate.has(Number(response.data[index].issueID))) continue;
            this.mapDate.get(Number(response.data[index].issueID)).setSelfNumber(response.data[index].betCode);
            this.mapDate.get(Number(response.data[index].issueID)).setScore(response.data[index].score);
          }
        } //#endregion


        onViewBottom(_scrollview) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (_this4.currentCount >= _this4.maxCount) _this4.returnFunction();
            if (_this4.isDateMax) _this4.returnFunction();
            if (_this4.isAsync) _this4.returnFunction();
            _this4.isAsync = true;
            /**新增請求筆數 */

            var tryGet = _this4.currentCount + _this4.pageCount;
            yield _this4.requestHistory(tryGet);
            yield _this4.requesBetlog(tryGet); // console.error("超過會走這?", this.currentCount);

            (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading();
            _this4.isAsync = false;
          })();
        }

        returnFunction() {
          (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
            error: Error()
          }), PanelLoading) : PanelLoading).instance.closeLoading();
          return;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "layoutContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "labelContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "outlineContent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "buttonBGContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "scrollview", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelPoint.js.map