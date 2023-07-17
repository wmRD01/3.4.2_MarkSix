System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _req, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _req = _unresolved_.__cjsMetaURL;
    }, function (_unresolved_2) {
      _loader = _unresolved_2.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "./webpack.common": _req
        }, _require);

        (function () {
          function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

          var {
            baseConfig,
            mainEntry,
            mainOutput,
            modeModuleEntry,
            modeModuleOutput,
            padModuleEntry,
            padModuleOutput,
            formatterModuleEntry,
            formatterModuleOutput
          } = require("./webpack.common");

          module.exports = [_extends({}, baseConfig(), {
            entry: _extends({}, mainEntry()),
            output: _extends({}, mainOutput())
          }), _extends({}, baseConfig(), {
            entry: _extends({}, modeModuleEntry()),
            output: _extends({}, modeModuleOutput())
          }), _extends({}, baseConfig(), {
            entry: _extends({}, padModuleEntry()),
            output: _extends({}, padModuleOutput())
          }), _extends({}, baseConfig(), {
            entry: _extends({}, formatterModuleEntry()),
            output: _extends({}, formatterModuleOutput())
          })];
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=webpack.dev.js.map