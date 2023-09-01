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
        let require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          cc.Class({
            extends: cc.Component,
            properties: {
              animNode: cc.Node
            },

            onLoad() {
              this.topAnim = this.animNode.getComponent(cc.Animation);
              this.hide();
            },

            hide() {
              this.node.active = false;
            },

            show() {
              this.node.active = true;
            },

            play(callback) {
              this.topAnim.play('refreshClip');
              this.unscheduleAllCallbacks();
              this.scheduleOnce(() => {
                if (callback) {
                  callback();
                }
              }, 1);
            }

          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=jsPullTopAnim.js.map