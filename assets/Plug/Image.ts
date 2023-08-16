import * as cc from "cc";

export default class Image {

    private static BRACE_REGEX = /[\{\}]/g;

    static transformTextureToSpriteAtlas(plist: cc.Asset, imageAsset: cc.ImageAsset): cc.SpriteAtlas {
        let info = plist["_nativeAsset"]["metadata"];
        let frames = plist["_nativeAsset"]["frames"];

        let atlas = new cc.SpriteAtlas();
        // console.log(atlas);

        let spriteFrames = atlas["spriteFrames"];

        // cc.log(plist);

        for (let key in frames) {
            let texture = new cc.Texture2D()
            texture.image = imageAsset
            let frame = frames[key];
            let rotated = false, sourceSize, offsetStr, textureRect;
            if (info.format === 0) {
                rotated = false;
                sourceSize = `{${frame.originalWidth},${frame.originalHeight}}`;
                offsetStr = `{${frame.offsetX},${frame.offsetY}}`;
                textureRect = `{{${frame.x},${frame.y}},{${frame.width},${frame.height}}}`;
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

            var sprite = new cc.SpriteFrame();
            // console.log(sprite);

            sprite.reset({
                originalSize: this.parseSize(sourceSize),
                rect: this.parseRect(textureRect),
                offset: this.parseVec2(offsetStr),
                isRotate: !!rotated,
                texture: texture,
            });
            if (frame.triangles) {
                let vertices = this.parseVertices(frame.vertices);
                let verticesUV = this.parseVertices(frame.verticesUV);
                //@ts-ignore
                sprite["vertices"] = {
                    triangles: this.parseTriangles(frame.triangles),
                    x: [],
                    y: [],
                    u: [],
                    v: []
                };

                for (let i = 0; i < vertices.length; i += 2) {
                    sprite["vertices"].x.push(vertices[i]);
                    sprite["vertices"].y.push(vertices[i + 1]);
                }
                for (let i = 0; i < verticesUV.length; i += 2) {
                    sprite["vertices"].u.push(verticesUV[i]);
                    sprite["vertices"].v.push(verticesUV[i + 1]);
                }
            }
            let name = cc.path.mainFileName(key);
            sprite.name = name

            spriteFrames[name] = sprite;
        }
        return atlas;
    }

    private static parseRect(rectStr) {
        rectStr = rectStr.replace(this.BRACE_REGEX, '');
        let arr = rectStr.split(',');
        return new cc.Rect(
            parseFloat(arr[0] || 0),
            parseFloat(arr[1] || 0),
            parseFloat(arr[2] || 0),
            parseFloat(arr[3] || 0),
        );
    }

    private static parseSize(sizeStr) {
        sizeStr = sizeStr.slice(1, -1);
        let arr = sizeStr.split(',');
        let width = parseFloat(arr[0]);
        let height = parseFloat(arr[1]);
        return new cc.Size(width, height);
    }

    private static parseVec2(vec2Str) {
        vec2Str = vec2Str.slice(1, -1);
        var arr = vec2Str.split(',');
        var x = parseFloat(arr[0]);
        var y = parseFloat(arr[1]);
        return new cc.Vec2(x, y);
    }

    private static parseTriangles(trianglesStr) {
        return trianglesStr.split(' ').map(parseFloat);
    }

    private static parseVertices(verticesStr) {
        return verticesStr.split(' ').map(parseFloat);
    }
}
