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
          /*jshint esversion: 6 */
          if (CC_EDITOR) {
            cc.internal.SpineSkeleton.prototype.update = null;
            cc.game.once(cc.Game.EVENT_ENGINE_INITED, function () {
              cc.js.mixin(cc.internal.SpineSkeleton.prototype, {
                update(dt) {
                  // if (this.paused) return;
                  dt *= this._timeScale * 1.0;

                  if (this.isAnimationCached()) {
                    // Cache mode and has animation queue.
                    if (this._isAniComplete) {
                      if (this._animationQueue.length === 0 && !this._headAniInfo) {
                        var frameCache = this._frameCache;

                        if (frameCache && frameCache.isInvalid()) {
                          frameCache.updateToFrame();
                          var frames = frameCache.frames;
                          this._curFrame = frames[frames.length - 1];
                        }

                        return;
                      }

                      if (!this._headAniInfo) {
                        this._headAniInfo = this._animationQueue.shift();
                      }

                      this._accTime += dt;

                      if (this._accTime > this._headAniInfo.delay) {
                        var aniInfo = this._headAniInfo;
                        this._headAniInfo = null;
                        this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
                      }

                      return;
                    }

                    this._updateCache(dt);
                  } else {
                    this._updateRealtime(dt);
                  }
                }

              });
            });
          }
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=EditSpine.js.map