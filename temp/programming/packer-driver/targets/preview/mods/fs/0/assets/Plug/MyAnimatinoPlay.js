System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AnimationClip, AnimationPlay, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      AnimationClip = _cc.AnimationClip;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00e386PGWRIG5aCVa+ODwvp", "MyAnimatinoPlay", undefined);

      AnimationPlay = class AnimationPlay {
        play(_Component, name, isloop) {
          _Component.getState(name).wrapMode = isloop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;
          name ? _Component.play(name) : _Component.play();
          setTimeout(() => {
            name ? _Component.play(name) : _Component.play();
          }, 16);
        }

      };

      _export("default", new AnimationPlay());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MyAnimatinoPlay.js.map