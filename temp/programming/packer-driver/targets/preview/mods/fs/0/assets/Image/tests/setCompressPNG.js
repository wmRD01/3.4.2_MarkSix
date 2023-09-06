System.register(["fs", "path", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _req, _req2, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_fs) {
      _req = _fs.__cjsMetaURL;
    }, function (_path) {
      _req2 = _path.__cjsMetaURL;
    }, function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "fs": _req,
          "path": _req2
        }, _require);

        (function () {
          var fs = require('fs');

          var path = require('path');

          var _compressSettings = [// 0 一般貼圖
          {
            "useCompressTexture": true,
            "presetId": "abLY678v5Dj7wdrAbDORxV"
          }, // 1 3D貼圖
          {
            "useCompressTexture": true,
            "presetId": "02g2e6zdBE7byIWrLpKBEv"
          }];
          var sourcePath = process.argv[2];
          var isCompress = parseInt(process.argv[3]);

          var lookupDir = function lookupDir(url, bo3D) {
            if (!fs.existsSync(url)) {
              return;
            }

            fs.readdir(url, (err, files) => {
              if (err) {
                console.error(err);
                return;
              }

              files.forEach(file => {
                var curPath = path.join(url, file);
                var stat = fs.statSync(curPath);

                if (stat.isDirectory()) {
                  var pathHas3D = bo3D || curPath.indexOf('3D') >= 0 || curPath.indexOf('FBX') >= 0 || curPath.indexOf('GLTF') >= 0;
                  lookupDir(curPath, pathHas3D); // 找尋所有目錄
                } else {
                  if (file.indexOf('.meta') >= 0) {
                    fs.readFile(curPath, (err, data) => {
                      if (err) {
                        console.error(err);
                        return;
                      }

                      var obj = JSON.parse(data);

                      if (obj && obj.importer && obj.importer === 'image' && obj.userData) {
                        var wrdata;
                        obj.userData.compressSettings = _compressSettings[bo3D ? 1 : 0]; // 設定壓縮材質

                        wrdata = JSON.stringify(obj, null, 2); //                            if (obj.userData.compressSettings) {
                        //                                obj.userData.compressSettings = undefined;								// 清除壓縮材質
                        //                                wrdata = JSON.stringify(obj, null, 2);
                        //                            }

                        if (wrdata) {
                          fs.writeFile(curPath, wrdata, err => {
                            if (err) {
                              console.error(err);
                              return;
                            } else {
                              console.log(curPath + ' success!!');
                            }
                          });
                        }
                      }
                    });
                  }
                }
              });
            });
          };

          if (!path.isAbsolute(sourcePath)) {
            sourcePath = path.join(__dirname, sourcePath);
          }

          lookupDir(sourcePath);
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=setCompressPNG.js.map