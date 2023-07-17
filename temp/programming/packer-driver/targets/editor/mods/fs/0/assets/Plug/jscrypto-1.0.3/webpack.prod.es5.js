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
        let require = _loader.createRequireWithReqMap({
          "./webpack.common": _req
        }, _require);

        (function () {
          const {
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

          module.exports = [{ ...baseConfig("production"),
            entry: { ...mainEntry()
            },
            output: { ...mainOutput("production")
            }
          }, { ...baseConfig("production"),
            entry: { ...modeModuleEntry()
            },
            output: { ...modeModuleOutput("production")
            }
          }, { ...baseConfig("production"),
            entry: { ...padModuleEntry()
            },
            output: { ...padModuleOutput("production")
            }
          }, { ...baseConfig("production"),
            entry: { ...formatterModuleEntry()
            },
            output: { ...formatterModuleOutput("production")
            }
          }];
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=webpack.prod.es5.js.map