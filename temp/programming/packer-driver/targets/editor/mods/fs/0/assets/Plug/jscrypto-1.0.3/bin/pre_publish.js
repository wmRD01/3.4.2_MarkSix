System.register(["path", "fs", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _req, _req2, _req3, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_path) {
      _req = _path.__cjsMetaURL;
    }, function (_fs) {
      _req2 = _fs.__cjsMetaURL;
    }, function (_unresolved_) {
      _req3 = _unresolved_.__cjsMetaURL;
    }, function (_unresolved_2) {
      _loader = _unresolved_2.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        let require = _loader.createRequireWithReqMap({
          "path": _req,
          "fs": _req2,
          "../package.json": _req3
        }, _require);

        (function () {
          const path = require("path");

          const fs = require("fs");

          const packageJson = require("../package.json");

          const distDir = path.join(__dirname, "..", "dist");

          const copyFileToPublish = fileName => {
            const srcPath = path.join(__dirname, "..", fileName);
            const destPath = path.join(distDir, fileName);

            if (fs.existsSync(srcPath)) {
              fs.copyFileSync(srcPath, destPath);
            }
          };

          copyFileToPublish("README.md");
          copyFileToPublish("API.md");
          copyFileToPublish("REFERENCE.md");
          copyFileToPublish("LICENSE");
          if (typeof packageJson.dependencies !== "undefined") delete packageJson.dependencies;
          if (typeof packageJson.devDependencies !== "undefined") delete packageJson.devDependencies;
          if (typeof packageJson.scripts !== "undefined") delete packageJson.scripts;
          fs.writeFileSync(path.join(distDir, "package.json"), JSON.stringify(packageJson, null, 2));
          const srcBinFile = path.join(__dirname, "..", "bin", "cli.js");
          const distBinDir = path.join(distDir, "bin");
          const distBinFile = path.join(distDir, "bin", "cli.js");

          if (fs.existsSync(distBinDir)) {
            fs.rmdirSync(distBinDir, {
              recursive: true
            });
          }

          fs.mkdirSync(distBinDir);
          fs.copyFileSync(srcBinFile, distBinFile);
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=pre_publish.js.map