// import { _decorator, Component, Enum, Color, log, RenderComponent, Sprite } from "cc";
// // 枚举定义, 因为GRID_TYPE放在了GridView中, 这里为了保证当前脚本运行, 单独列出
// export enum GRID_TYPE {
//     GRID_HORIZONTAL,
//     GRID_VERTICAL
// }
// const { ccclass, property, executeInEditMode } = _decorator;
// export default class VertexGradient extends Component {
//     @property({ tooltip: '是否反向' })
//     set invert(v) {
//         if (this._bInvert != v) {
//             this._bInvert = v;
//             this.markColorDirty();
//         }
//     }
//     get invert() {
//         return this._bInvert;
//     }
//     @property
//     _bInvert: boolean = false;
//     @property({ type: Enum(GRID_TYPE) })
//     set dir(v) {
//         if (this._dir != v) {
//             this._dir = v;
//             this.markColorDirty();
//         }
//     }
//     get dir() {
//         return this._dir;
//     }
//     @property({ type: Enum(GRID_TYPE) })
//     _dir: GRID_TYPE = GRID_TYPE.GRID_VERTICAL;
//     @property(Color)
//     set downColor(value) {
//         if (!this._downColor.equals(value)) {
//             this._downColor.set(value);
//             this.markColorDirty();
//         }
//     }
//     get downColor() {
//         return this._downColor.clone();
//     }
//     @property(Color)
//     private _downColor: Color = Color.WHITE;
//     @property(Color)
//     set upColor(value) {
//         if (!this._upColor.equals(value)) {
//             this._upColor.set(value);
//             this.markColorDirty();
//         }
//     }
//     get upColor() {
//         return this._upColor.clone();
//     }
//     @property(Color)
//     private _upColor: Color = Color.WHITE;
//     onLoad() {
//         let render = this.getComponent(RenderComponent);
//         render["_updateColor"] = this._updateColor.bind(this);
//         this.markColorDirty();
//     }
//     markColorDirty() {
//         let render = this.getComponent(RenderComponent);
//         render.node["_renderFlag"] |= (cc as any).RenderFlow.FLAG_COLOR | (cc as any).RenderFlow.FLAG_OPACITY;
//     }
//     _updateColor() {
//         let colors = [];
//         switch (this.dir) {
//             case GRID_TYPE.GRID_VERTICAL:
//                 {
//                     colors = [this.upColor, this.upColor, this.downColor, this.downColor];
//                 }
//                 break;
//             case GRID_TYPE.GRID_HORIZONTAL:
//                 {
//                     colors = [this.downColor, this.upColor, this.downColor, this.upColor];
//                 }
//                 break;
//         }
//         if (this.invert) {
//             colors = colors.reverse();
//         }
//         const cmp = this.getComponent(RenderComponent);
//         if (!cmp) return;
//         const _assembler = cmp['_assembler'];
//         if (!(_assembler instanceof cc['Assembler2D'])) return;
//         const uintVerts = _assembler._renderData.uintVDatas[0];
//         if (!uintVerts) return;
//         const color = this.node.getComponent(Sprite).color;
//         const floatsPerVert = _assembler.floatsPerVert;
//         const colorOffset = _assembler.colorOffset;
//         let count = 0;
//         for (let i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
//             uintVerts[i] = (colors[count++] || color)['_val'];
//         }
//         cmp.setVertsDirty();
//     }
// }
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06b28l+B+BGQaWBpg95rQby", "moreColor", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=moreColor.js.map