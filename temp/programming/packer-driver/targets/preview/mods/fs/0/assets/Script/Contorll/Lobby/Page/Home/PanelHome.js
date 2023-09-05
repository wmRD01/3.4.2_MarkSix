System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, instantiate, Label, Node, Prefab, UITransform, _decorator, NotificationType, LobbyStateEvent, PageAction, EventMng, BaseComponent, PublicModel, RequestGPG, Player, PublicData, PanelLoading, BallData, PanelSystemMessage, SocketSetting, LangType, DEV, Marquee, Timer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _temp, _crd, ccclass, property, PanelHome;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNotificationType(extras) {
    _reporterNs.report("NotificationType", "../../../../Enum/NotificationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyStateEvent(extras) {
    _reporterNs.report("LobbyStateEvent", "../../../../Enum/LobbyStateEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageAction(extras) {
    _reporterNs.report("PageAction", "../../../../Enum/PageAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../../../../Manager/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../../../Api/GPGAPI/RequestGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../../../../Model/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponseGPG(extras) {
    _reporterNs.report("ResponseGPG", "../../../Api/GPGAPI/ResponseGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../../../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelLoading(extras) {
    _reporterNs.report("PanelLoading", "../../../NoClearNode/PanelLoading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfURLVlaue(extras) {
    _reporterNs.report("URLVlaue", "../../../Api/SendCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallData(extras) {
    _reporterNs.report("BallData", "../../../../Model/BallData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelSystemMessage(extras) {
    _reporterNs.report("PanelSystemMessage", "../../../NoClearNode/PanelSystemMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketSetting(extras) {
    _reporterNs.report("SocketSetting", "../../../../Socket/SocketSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangType(extras) {
    _reporterNs.report("LangType", "../../../../Enum/LangType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      NotificationType = _unresolved_2.NotificationType;
    }, function (_unresolved_3) {
      LobbyStateEvent = _unresolved_3.LobbyStateEvent;
    }, function (_unresolved_4) {
      PageAction = _unresolved_4.PageAction;
    }, function (_unresolved_5) {
      EventMng = _unresolved_5.default;
    }, function (_unresolved_6) {
      BaseComponent = _unresolved_6.default;
    }, function (_unresolved_7) {
      PublicModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      RequestGPG = _unresolved_8.RequestGPG;
    }, function (_unresolved_9) {
      Player = _unresolved_9.default;
    }, function (_unresolved_10) {
      PublicData = _unresolved_10.default;
    }, function (_unresolved_11) {
      PanelLoading = _unresolved_11.default;
    }, function (_unresolved_12) {
      BallData = _unresolved_12.default;
    }, function (_unresolved_13) {
      PanelSystemMessage = _unresolved_13.default;
    }, function (_unresolved_14) {
      SocketSetting = _unresolved_14.default;
    }, function (_unresolved_15) {
      LangType = _unresolved_15.LangType;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8492+r6GtLBIfPM9astol5", "PanelHome", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelHome = (_dec = ccclass('PanelHome'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(Button), _dec21 = property(Node), _dec(_class2 = (_class3 = (_temp = class PanelHome extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lastDrawCodeLayout", _descriptor, this);

          _initializerDefineProperty(this, "labelContent", _descriptor2, this);

          _initializerDefineProperty(this, "timeBG", _descriptor3, this);

          _initializerDefineProperty(this, "ballItem", _descriptor4, this);

          _initializerDefineProperty(this, "labelTime", _descriptor5, this);

          _initializerDefineProperty(this, "labelCurrentTitle", _descriptor6, this);

          _initializerDefineProperty(this, "labelCurrentDrawIssueID", _descriptor7, this);

          _initializerDefineProperty(this, "labelLastDrawIssueID", _descriptor8, this);

          _initializerDefineProperty(this, "labelLastDrawDay", _descriptor9, this);

          _initializerDefineProperty(this, "labelMarquee", _descriptor10, this);

          _initializerDefineProperty(this, "labelMonth", _descriptor11, this);

          _initializerDefineProperty(this, "labelPointTitle", _descriptor12, this);

          _initializerDefineProperty(this, "labelMyPoint", _descriptor13, this);

          _initializerDefineProperty(this, "labelDetail", _descriptor14, this);

          _initializerDefineProperty(this, "labelGiftTitle1", _descriptor15, this);

          _initializerDefineProperty(this, "labelGiftTitle2", _descriptor16, this);

          _initializerDefineProperty(this, "btnMoreDraw", _descriptor17, this);

          _initializerDefineProperty(this, "btnPointDetail", _descriptor18, this);

          _initializerDefineProperty(this, "btnGoChooese", _descriptor19, this);

          _initializerDefineProperty(this, "specialBallItem", _descriptor20, this);

          _defineProperty(this, "marquee", void 0);

          _defineProperty(this, "timer", void 0);

          _defineProperty(this, "isChangeIssueID", void 0);

          _defineProperty(this, "currentIssueID", void 0);

          _defineProperty(this, "loopTimer", void 0);

          _defineProperty(this, "testtotoel", 0);

          _defineProperty(this, "loopTime", 60);
        }

        onLoad() {
          this.marquee = this.labelMarquee.addComponent(Marquee);
          this.timer = this.labelTime.addComponent(Timer);
          this.timer.setBGNode(this.timeBG);
          /**取TOKEN */

          (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).getInstance.gpgToken = this.handleURLData(window.location.href).token;
          this.setEvent((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).NextIssueID, this.reset);
        }

        onEnable() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.reset();
          })();
        }

        start() {// this.marquee.startMarque("HIHIHI")
          // this.timer.setTime(100)
        }

        onDisable() {}

        reset() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (_this2.isChangeIssueID) {
              (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
                error: Error()
              }), PanelLoading) : PanelLoading).instance.closeLoading();
              return;
            }

            yield _this2.requestMyInfo();
            yield _this2.requestDrawHistory();
            yield _this2.requestDrawUpcoming();
            yield _this2.requesMyScore();
            (_crd && PanelLoading === void 0 ? (_reportPossibleCrUseOfPanelLoading({
              error: Error()
            }), PanelLoading) : PanelLoading).instance.closeLoading();

            if (_this2.isChangeIssueID) {
              _this2.testtotoel = 0;
              _this2.loopTimer = setInterval(_this2.requestDrawUpcomingLoop.bind(_this2), _this2.loopTime * 1000);
            }
          })();
        } //#region  DrawHistory


        requestDrawHistory() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(function* (resolve, reject) {
                var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.DrawHistory();
                body.top = "1";
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
                }), RequestGPG) : RequestGPG).API.DrawHistory + "?" + convert, _this3.responseDrawHistory.bind(_this3));
                resolve();
              });

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            }());
          })();
        }

        responseDrawHistory(response) {
          if (response.data) {
            // this.lastDrawCodeLayout.removeAllChildren()
            var count = this.lastDrawCodeLayout.children.length - 1;

            for (var index = count; index >= 0; index--) {
              this.lastDrawCodeLayout.children[index].destroy();
            }

            var getDate = response.data[0];
            this.labelLastDrawIssueID.string = "\u7B2C" + getDate.issueID + "\u671F";
            /**不需要week日 */
            // console.log(PublicModel.getInstance.convertDate(getDate.openDate).split("(")[0]);

            var getday = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertDateDay(getDate.openDate).split("(")[0];
            this.labelLastDrawDay.string = getday + "\u958B\u734E\u7D50\u679C";

            for (var _index = 0; _index < getDate.drawCode.length; _index++) {
              var _node = void 0;

              var isResetPos = true;

              if (_index == 6) {
                _node = this.specialBallItem;
                isResetPos = false;
              } else {
                _node = instantiate(this.ballItem);
                this.lastDrawCodeLayout.addChild(_node);
              }

              var _class = _node.getComponent(_crd && BallData === void 0 ? (_reportPossibleCrUseOfBallData({
                error: Error()
              }), BallData) : BallData);

              _class.init(Number(getDate.drawCode[_index]), isResetPos).cancel();

              this.labelContent.addChild(_class.label.node);
            }
          }
        } //#endregion
        //#region  DrawUpcoming


        requestDrawUpcoming() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(function* (resolve, reject) {
                var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.DrawUpcoming();
                body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
                  error: Error()
                }), PublicModel) : PublicModel).getInstance.convertMD5((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.gpgApiKey);
                var convert = new URLSearchParams(body).toString();
                yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                  error: Error()
                }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.gpgUrlPlayApi + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).API.DrawUpcoming + "?" + convert, _this4.responseDrawUpcoming.bind(_this4));
                resolve();
              });

              return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
              };
            }());
          })();
        }

        responseDrawUpcoming(response) {
          var getDate = response.data[0];
          (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.today = getDate.openDate;
          this.labelCurrentDrawIssueID.string = "\u7B2C" + getDate.issueID + "\u671F";
          this.currentIssueID = Number(getDate.issueID); // this.timer.setTimeNoTimer(PublicModel.getInstance.convertDateTime(getDate.openDate))
          // console.log(getDate.serverNowTime);

          var Date_A = new Date(getDate.openDate);
          var Date_B = 0;
          if (DEV) //@ts-ignore
            Date_B = new Date(getDate.serverNowTime);else //@ts-ignore
            Date_B = new Date(getDate.serverNowTime); //@ts-ignore

          var countTime = Date_A - Date_B;
          var Date_C = new Date(countTime);
          console.log(countTime);
          console.log(Date_C); //TODO 如果時間到了該怎處理?

          this.timer.setTimer(Date_C.getTime());

          if (countTime < 0) {
            console.error("時間到了，該開始搓報API");
            this.isChangeIssueID = true;
            return;
          }
        } //#endregion
        //#region MyScore


        requesMyScore() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator(function* (resolve, reject) {
                var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.MyScore();
                var getDate = new Date((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.today);
                body.sDate = getDate.getFullYear() + "-" + (getDate.getMonth() + 1) + "-01";
                body.eDate = getDate.getFullYear() + "-" + (getDate.getMonth() + 1) + "-" + (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
                  error: Error()
                }), PublicModel) : PublicModel).getInstance.getMonthAllDay((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.today);
                body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
                  error: Error()
                }), PublicModel) : PublicModel).getInstance.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.MyScore);
                var convert = new URLSearchParams(body).toString();
                yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                  error: Error()
                }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.gpgUrlPlayApi + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).API.My_Score + "?" + convert, _this5.responseMyScore.bind(_this5));
                resolve();
              });

              return function (_x5, _x6) {
                return _ref3.apply(this, arguments);
              };
            }());
          })();
        }

        responseMyScore(response) {
          var getDate = new Date((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.today);
          this.labelMonth.string = "(" + (getDate.getMonth() + 1) + "/1~" + (getDate.getMonth() + 1) + "/" + (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
            error: Error()
          }), PublicModel) : PublicModel).getInstance.getMonthAllDay((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
            error: Error()
          }), PublicData) : PublicData).getInstance.today) + ")";

          if (response.data) {
            console.log("玩家紀錄", response);
            this.labelMyPoint.string = response.data.totalScore.toString();
          } else {
            this.labelMyPoint.string = "0";
          }
        } //#endregion
        //#region  MyInfo


        requestMyInfo() {
          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator(function* (resolve, reject) {
                var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Body.NeedToken.MyInfo();
                body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
                  error: Error()
                }), PublicModel) : PublicModel).getInstance.convertMD5((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.gpgApiKey);
                var convert = new URLSearchParams(body).toString();
                yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                  error: Error()
                }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
                  error: Error()
                }), PublicData) : PublicData).getInstance.gpgUrlPlayApi + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
                  error: Error()
                }), RequestGPG) : RequestGPG).API.MyInfo + "?" + convert, response => {
                  console.log("MyInfo", response);
                  console.log("確認玩家token登入無異常");

                  if (!response || !response.data) {
                    (_crd && PanelSystemMessage === void 0 ? (_reportPossibleCrUseOfPanelSystemMessage({
                      error: Error()
                    }), PanelSystemMessage) : PanelSystemMessage).instance.showSingleConfirm((_crd && SocketSetting === void 0 ? (_reportPossibleCrUseOfSocketSetting({
                      error: Error()
                    }), SocketSetting) : SocketSetting).t("E_0007", (_crd && LangType === void 0 ? (_reportPossibleCrUseOfLangType({
                      error: Error()
                    }), LangType) : LangType).Game));
                  } else resolve();
                });
              });

              return function (_x7, _x8) {
                return _ref4.apply(this, arguments);
              };
            }());
          })();
        } //#endregion
        //#region 


        requestDrawUpcomingLoop() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.DrawUpcoming();
            body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertMD5((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgApiKey);
            var convert = new URLSearchParams(body).toString();
            yield new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).fetchData("" + (_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgUrlPlayApi + (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.DrawUpcoming + "?" + convert, _this6.checkIssueID.bind(_this6));
          })();
        }

        checkIssueID(response) {
          console.log("打拉打拉");
          console.log(DEV);
          console.log(this.testtotoel);

          if (DEV) {
            this.testtotoel++;

            if (this.testtotoel == 3) {
              console.error("終於換天拉!!!!");
              this.isChangeIssueID = false;
              clearInterval(this.loopTimer);
              this.eventEmit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
                error: Error()
              }), LobbyStateEvent) : LobbyStateEvent).NextIssueID);
            }

            return;
          }

          if (this.currentIssueID != Number(response.data[0].issueID)) {
            console.error("終於換天拉!!!!");
            this.isChangeIssueID = false;
            clearInterval(this.loopTimer);
            this.eventEmit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
              error: Error()
            }), LobbyStateEvent) : LobbyStateEvent).NextIssueID);
          }
        } //#endregion


        onGoPage(e, customEventData) {
          var split = customEventData.split('-');
          if (isNaN(Number(split[0]))) console.error("錯誤啦!!!是不是忘記設定");
          this.eventEmit((_crd && LobbyStateEvent === void 0 ? (_reportPossibleCrUseOfLobbyStateEvent({
            error: Error()
          }), LobbyStateEvent) : LobbyStateEvent).ChangePointPage, null, split[1]);
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).getInstance.mapEvnet.get((_crd && NotificationType === void 0 ? (_reportPossibleCrUseOfNotificationType({
            error: Error()
          }), NotificationType) : NotificationType).Page).emit((_crd && PageAction === void 0 ? (_reportPossibleCrUseOfPageAction({
            error: Error()
          }), PageAction) : PageAction).ChangeTo, Number(split[0]));
        }

        handleURLData(_url) {
          //  _url = "https://play1.godplay.app/10001/index.html?loginType=web&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0aW1lIjoxNjY4NzYyMjcwMDQ1LCJ1aWQiOiJYUGpST1oiLCJkYyI6IkdQRyIsImFnZW50SWQiOiJ0ckUzeW1XaURMYjIiLCJicmFuZElkIjoiR1BHIiwiYnJhbmRUaXRsZSI6IkdQRyIsImdhbWVJZCI6IjEwMDAxIiwiaWF0IjoxNjY4NzYyMjcwLCJleHAiOjE2Njg3NjU4NzB9.k_GVGPiQCjWxhFG3SGM2zoSy_ggN2cZXuUQ5GvqZib_0TCJ2ul9K5xbTKkgwm7OUw7nMCWLWlwERHc0MMF586SgjuQe9W7SoRSMaBtw_AkiKNn4S1NMvhemgNAdIyjL7I1Gg5xyT-x110RF73lF-yt-n6KKTP3TGkd7wR9_fPz8&record=https://backendsystem.godplay.app/wList&dc=GPG&agentId=trE3ymWiDLb2&GGID=1&lang=tw&forceExchange=true&providerlogo=true"
          // console.log(_url.split("?")[1].split("&"));
          // console.log(_url.split("?")[1]);
          if (_url.split("?")[1] == undefined) return undefined;

          var arr = _url.split("?")[1].split("&");

          var obj = new Object();

          for (var index = 0; index < arr.length; index++) {
            var cut = arr[index].split("=");
            obj[cut[0]] = cut[1];
          } // console.log(obj);


          return obj;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "lastDrawCodeLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "labelContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "timeBG", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "ballItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "labelTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "labelCurrentTitle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "labelCurrentDrawIssueID", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "labelLastDrawIssueID", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "labelLastDrawDay", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "labelMarquee", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class3.prototype, "labelMonth", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class3.prototype, "labelPointTitle", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class3.prototype, "labelMyPoint", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class3.prototype, "labelDetail", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class3.prototype, "labelGiftTitle1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class3.prototype, "labelGiftTitle2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class3.prototype, "btnMoreDraw", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class3.prototype, "btnPointDetail", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class3.prototype, "btnGoChooese", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class3.prototype, "specialBallItem", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));

      Marquee = class Marquee extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "bindLabel", void 0);

          _defineProperty(this, "leftBorder", void 0);

          _defineProperty(this, "rightBorder", void 0);

          _defineProperty(this, "isAction", void 0);

          _defineProperty(this, "speed", 100);
        }

        onLoad() {
          this.bindLabel = this.node.getComponent(Label);
          this.rightBorder = this.bindLabel.node.parent.getComponent(UITransform).width + 10; //額外預留
        }

        startMarque(message) {
          this.bindLabel.string = message;
          this.bindLabel.updateRenderData(true);
          this.leftBorder = -(this.bindLabel.getComponent(UITransform).width + 10);
          this.resetPos();
          this.isAction = true;
        }

        update(dt) {
          if (this.isAction) {
            var currentPos = this.bindLabel.node.getPosition();

            if (currentPos.x < this.leftBorder) {
              this.resetPos();
              currentPos = this.bindLabel.node.getPosition();
            } // console.log(currentPos.x);
            // console.log(currentPos.x - (dt * this.speed));
            // 


            this.bindLabel.node.setPosition(currentPos.x - dt * this.speed, currentPos.y, currentPos.z);
          }
        }

        resetPos() {
          var currentPos = this.bindLabel.node.getPosition();
          this.bindLabel.node.setPosition(this.rightBorder, currentPos.y, currentPos.z);
        }

      };
      Timer = class Timer extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "bindLabel", void 0);

          _defineProperty(this, "countTime", void 0);

          _defineProperty(this, "isAction", void 0);

          _defineProperty(this, "bg", void 0);
        }

        onLoad() {
          this.bindLabel = this.node.getComponent(Label);
          this.bindLabel.string = "";
        }

        reset() {
          this.countTime = 0;
          this.isAction = false;
          this.bg.active = true;
        }

        setTimeNoTimer(str) {
          this.bindLabel.string = str;
        }

        setTimer(num) {
          this.reset();
          this.countTime = num;
          this.isAction = true;
        }

        setBGNode(_node) {
          this.bg = _node;
        }

        timeUp() {
          this.reset();
          this.bindLabel.string = "開獎中...";
          this.bg.active = false;
        }

        update(dt) {
          if (this.isAction) {
            this.countTime -= dt * 1000;

            if (this.countTime < 0) {
              this.timeUp();
              return;
            }

            this.bindLabel.string = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.formatMillisecond(this.countTime, true);
          }
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PanelHome.js.map