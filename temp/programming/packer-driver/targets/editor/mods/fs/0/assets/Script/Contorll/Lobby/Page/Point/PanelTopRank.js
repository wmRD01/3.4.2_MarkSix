System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, _decorator, AssetType, AssetMng, BaseComponent, AutoFollow, RankItmeData, RequestGPG, PublicModel, PublicData, Player, _dec, _dec2, _dec3, _dec4, _dec5, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, PanelTopRank;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../../../Enum/AssetType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetMng(extras) {
    _reporterNs.report("AssetMng", "../../../../Manager/AssetMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../Model/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoFollow(extras) {
    _reporterNs.report("AutoFollow", "../../../../Model/AutoFollow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankItmeData(extras) {
    _reporterNs.report("RankItmeData", "../../../../Model/RankItmeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestGPG(extras) {
    _reporterNs.report("RequestGPG", "../../../Api/GPGAPI/RequestGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicModel(extras) {
    _reporterNs.report("PublicModel", "../../../../Model/PublicModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicData(extras) {
    _reporterNs.report("PublicData", "../../../../Model/PublicData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponseGPG(extras) {
    _reporterNs.report("ResponseGPG", "../../../Api/GPGAPI/ResponseGPG", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../../../../Model/Player", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AssetType = _unresolved_2.AssetType;
    }, function (_unresolved_3) {
      AssetMng = _unresolved_3.default;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.default;
    }, function (_unresolved_5) {
      AutoFollow = _unresolved_5.default;
    }, function (_unresolved_6) {
      RankItmeData = _unresolved_6.default;
    }, function (_unresolved_7) {
      RequestGPG = _unresolved_7.RequestGPG;
    }, function (_unresolved_8) {
      PublicModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      PublicData = _unresolved_9.default;
    }, function (_unresolved_10) {
      Player = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73704RjTHxM6LQ5ZmAl9E7m", "PanelTopRank", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PanelTopRank = (_dec = ccclass('PanelTopRank'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class2 = (_class3 = (_temp = class PanelTopRank extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefabRankItem", _descriptor, this);

          _initializerDefineProperty(this, "layoutRank", _descriptor2, this);

          _initializerDefineProperty(this, "labelContent", _descriptor3, this);

          _initializerDefineProperty(this, "spriteBGContent", _descriptor4, this);
        }

        async start() {
          await (_crd && AssetMng === void 0 ? (_reportPossibleCrUseOfAssetMng({
            error: Error()
          }), AssetMng) : AssetMng).waitStateCheck((_crd && AssetType === void 0 ? (_reportPossibleCrUseOfAssetType({
            error: Error()
          }), AssetType) : AssetType).Sprite);
          this.layoutRank.removeAllChildren();
          await this.requesTopScore();
        }

        async requesTopScore() {
          return new Promise(async (resolve, reject) => {
            const body = new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.TopScore();
            const todayDate = new Date((_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.today);
            body.sDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-1`;
            body.eDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
            body.sign = (_crd && PublicModel === void 0 ? (_reportPossibleCrUseOfPublicModel({
              error: Error()
            }), PublicModel) : PublicModel).getInstance.convertSign(body, (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Body.NeedToken.TopScore);
            let convert = new URLSearchParams(body).toString();
            console.log(body);
            console.log(convert);
            await new (_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).Request().setToken((_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).getInstance.gpgToken).fetchData(`${(_crd && PublicData === void 0 ? (_reportPossibleCrUseOfPublicData({
              error: Error()
            }), PublicData) : PublicData).getInstance.gpgUrlPlayApi}${(_crd && RequestGPG === void 0 ? (_reportPossibleCrUseOfRequestGPG({
              error: Error()
            }), RequestGPG) : RequestGPG).API.TopScore}?${convert}`, this.responseTopScore.bind(this));
            resolve();
          });
        }

        responseTopScore(response) {
          console.log("排行榜", response);

          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].totalScore == 0) continue;
            if (this.layoutRank.children.length >= 100) break;

            let _node = instantiate(this.prefabRankItem);

            let _class = _node.getComponent(_crd && RankItmeData === void 0 ? (_reportPossibleCrUseOfRankItmeData({
              error: Error()
            }), RankItmeData) : RankItmeData);

            _class.init(response.data[index]);

            _class.labelName.addComponent(_crd && AutoFollow === void 0 ? (_reportPossibleCrUseOfAutoFollow({
              error: Error()
            }), AutoFollow) : AutoFollow).createNewTarget();

            _class.labelPointCount.addComponent(_crd && AutoFollow === void 0 ? (_reportPossibleCrUseOfAutoFollow({
              error: Error()
            }), AutoFollow) : AutoFollow).createNewTarget();

            _class.spriteBG.addComponent(_crd && AutoFollow === void 0 ? (_reportPossibleCrUseOfAutoFollow({
              error: Error()
            }), AutoFollow) : AutoFollow).setTarget(_node);

            this.labelContent.addChild(_class.labelName.node);
            this.labelContent.addChild(_class.labelPointCount.node);
            this.spriteBGContent.addChild(_class.spriteBG.node);
            this.layoutRank.addChild(_node);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "prefabRankItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "layoutRank", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "labelContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "spriteBGContent", [_dec5], {
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
//# sourceMappingURL=PanelTopRank.js.map