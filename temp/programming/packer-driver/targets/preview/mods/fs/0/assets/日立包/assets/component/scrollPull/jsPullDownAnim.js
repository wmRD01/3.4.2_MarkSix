System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          cc.Class({
            extends: cc.Component,
            properties: {
              radioList: [cc.Node]
            },

            onLoad() {
              this.posCount = null;
              this.cleanScale();
            },

            pulldownUpdate(count) {
              if (this.posCount == null) {
                this.cleanScale();
                this.posCount = count;
              }

              this.node.opacity = 255;
              var dicUp = count - this.posCount;
              var radioList = this.radioList;
              var scale0 = 0.5 + dicUp / 100;
              var scale1 = 0.5 + dicUp / 200;
              var scale2 = 0.5 + dicUp / 300;
              radioList[0].scale = scale0 > 1.2 ? 1.2 : scale0 < 0.5 ? 0.5 : scale0;
              radioList[1].scale = scale1 > 0.9 ? 0.9 : scale1 < 0.5 ? 0.5 : scale1;
              radioList[2].scale = scale2 > 0.7 ? 0.7 : scale2 < 0.5 ? 0.5 : scale2;
            },

            loosenAnim(callback) {
              this.radioList.forEach(radio => {
                var scl = radio.scale;
                var seq = cc.sequence(cc.spawn(cc.scaleTo(0.2, scl + 0.2), cc.fadeTo(0.2, 200)), cc.spawn(cc.scaleTo(0.2, 1), cc.fadeOut(0.2)), cc.callFunc(() => {
                  this.cleanScale();

                  if (callback) {
                    callback();
                  }
                }));
                radio.runAction(seq);
              });
            },

            cleanScale() {
              this.radioList.forEach(radio => {
                radio.stopAllActions();
                radio.scale = 0.5;
                radio.opacity = 255;
              });
              this.node.opacity = 0;
              this.posCount = null;
            },

            hide() {
              if (this.node) {
                this.node.active = false;
              }
            },

            show() {
              if (this.node) {
                this.node.active = true;
              }
            }

          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=jsPullDownAnim.js.map