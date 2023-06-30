System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, cc, Image, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      cc = _cc;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f19dLugBBPAbsBD6+2g7pM", "Image", undefined);

      _export("default", Image = class Image {
        static transformTextureToSpriteAtlas(plist, imageAsset) {
          var info = plist["_nativeAsset"]["metadata"];
          var frames = plist["_nativeAsset"]["frames"];
          var atlas = new cc.SpriteAtlas(); // console.log(atlas);

          var spriteFrames = atlas["spriteFrames"]; // cc.log(plist);

          for (var key in frames) {
            var texture = new cc.Texture2D();
            texture.image = imageAsset;
            var frame = frames[key];
            var rotated = false,
                sourceSize = void 0,
                offsetStr = void 0,
                textureRect = void 0;

            if (info.format === 0) {
              rotated = false;
              sourceSize = "{" + frame.originalWidth + "," + frame.originalHeight + "}";
              offsetStr = "{" + frame.offsetX + "," + frame.offsetY + "}";
              textureRect = "{{" + frame.x + "," + frame.y + "},{" + frame.width + "," + frame.height + "}}";
            } else if (info.format === 1 || info.format === 2) {
              rotated = frame.rotated;
              sourceSize = frame.sourceSize;
              offsetStr = frame.offset;
              textureRect = frame.frame;
            } else if (info.format === 3) {
              rotated = frame.textureRotated;
              sourceSize = frame.spriteSourceSize;
              offsetStr = frame.spriteOffset;
              textureRect = frame.textureRect;
            }

            var sprite = new cc.SpriteFrame(); // console.log(sprite);

            sprite.reset({
              originalSize: this.parseSize(sourceSize),
              rect: this.parseRect(textureRect),
              offset: this.parseVec2(offsetStr),
              isRotate: !!rotated,
              texture: texture
            });

            if (frame.triangles) {
              var vertices = this.parseVertices(frame.vertices);
              var verticesUV = this.parseVertices(frame.verticesUV); //@ts-ignore

              sprite["vertices"] = {
                triangles: this.parseTriangles(frame.triangles),
                x: [],
                y: [],
                u: [],
                v: []
              };

              for (var i = 0; i < vertices.length; i += 2) {
                sprite["vertices"].x.push(vertices[i]);
                sprite["vertices"].y.push(vertices[i + 1]);
              }

              for (var _i = 0; _i < verticesUV.length; _i += 2) {
                sprite["vertices"].u.push(verticesUV[_i]);
                sprite["vertices"].v.push(verticesUV[_i + 1]);
              }
            }

            var name = cc.path.mainFileName(key);
            sprite.name = name;
            spriteFrames[name] = sprite;
          }

          return atlas;
        }

        static parseRect(rectStr) {
          rectStr = rectStr.replace(this.BRACE_REGEX, '');
          var arr = rectStr.split(',');
          return new cc.Rect(parseFloat(arr[0] || 0), parseFloat(arr[1] || 0), parseFloat(arr[2] || 0), parseFloat(arr[3] || 0));
        }

        static parseSize(sizeStr) {
          sizeStr = sizeStr.slice(1, -1);
          var arr = sizeStr.split(',');
          var width = parseFloat(arr[0]);
          var height = parseFloat(arr[1]);
          return new cc.Size(width, height);
        }

        static parseVec2(vec2Str) {
          vec2Str = vec2Str.slice(1, -1);
          var arr = vec2Str.split(',');
          var x = parseFloat(arr[0]);
          var y = parseFloat(arr[1]);
          return new cc.Vec2(x, y);
        }

        static parseTriangles(trianglesStr) {
          return trianglesStr.split(' ').map(parseFloat);
        }

        static parseVertices(verticesStr) {
          return verticesStr.split(' ').map(parseFloat);
        }

      });

      _defineProperty(Image, "BRACE_REGEX", /[\{\}]/g);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Image.js.map