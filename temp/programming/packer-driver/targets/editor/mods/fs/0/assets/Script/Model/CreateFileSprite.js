System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ImageAsset, Size, SpriteFrame, Texture2D, CreateFileSprite, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      ImageAsset = _cc.ImageAsset;
      Size = _cc.Size;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ce80GHeNJCNbhjmODjKEMC", "CreateFileSprite", undefined);

      _export("default", CreateFileSprite = class CreateFileSprite {
        constructor(_callback) {
          _defineProperty(this, "AcceptImgFormat", ['image/gif', 'image/jpeg', 'image/png', 'image/bmp']);

          _defineProperty(this, "callback", void 0);

          _defineProperty(this, "file", void 0);

          this.callback = _callback;

          if (document.getElementById('inputfile') != null) {
            document.getElementById('inputfile').remove();
          }

          let input = document.createElement('input');
          input.type = "file";
          input.accept = "image/*";
          input.id = "inputfile";
          input.click();
          input.addEventListener("change", this.checkSpriteData.bind(this), false);
          document.head.appendChild(input);
        }

        checkSpriteData(e) {
          this.file = e.target.files[0];

          if (this.AcceptImgFormat.indexOf(this.file.type) == -1) {
            return console.error(`代表類型不正確`);
          }

          if (!this.file) {
            return console.error(`無檔案`);
          }

          ;
          /**開一條支線傳給後端 */

          const reader = new FileReader();
          reader.onload = this.readerOnload.bind(this);
          reader.readAsDataURL(this.file);
        }

        readerOnload(e) {
          let limitSize = 2 * 1024 * 1024;
          const image = new Image();
          let data = e.target.result;
          image.src = data; // let _base64 = data.split(",")[1]

          image.onload = () => {
            let imgAsset = new ImageAsset(); //重置此图像资源使用的原始图像源

            imgAsset.reset(image);
            let texture = new Texture2D();
            texture.image = imgAsset;
            const sp = new SpriteFrame(); //sprite 图片

            sp.texture = texture; // console.log(this.file);

            this.callback(sp, this.file);
            return;
          };
        }
        /**以下暫時用不到，如果需要進一步處理圖片才需要 */

        /**以下暫時用不到，如果需要進一步處理圖片才需要 */

        /**以下暫時用不到，如果需要進一步處理圖片才需要 */

        /**以下暫時用不到，如果需要進一步處理圖片才需要 */

        /**以下暫時用不到，如果需要進一步處理圖片才需要 */

        /**以下暫時用不到，如果需要進一步處理圖片才需要 */

        /**以下暫時用不到，如果需要進一步處理圖片才需要 */


        dataURLtoFile(dataurl, filename) {
          //將base64轉換為檔案
          var arr = dataurl.split(','),
              mime = arr[0].match(/:(.*?);/),
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          } // return new File([u8arr], filename, {
          //     type: mime
          // });

        }

        compress(img) {
          // 用於壓縮圖片的canvas
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d'); // 瓦片canvas

          var tCanvas = document.createElement('canvas');
          var tctx = tCanvas.getContext('2d');
          let initSize = img.src.length; // 獲取父元素寬高

          let wid = 207;
          let hei = 207; // let parentWh = $('.creater_class .files');
          // let wid = parentWh.width();
          // let hei = parentWh.height();
          //console.log("父親:"+wid+'...'+hei)

          console.log("原始圖片:" + img.width + '...' + img.height); // 等比壓縮圖片

          let spec = this.AutoSize(img, wid, hei);
          var width = spec.width;
          var height = spec.height;
          console.log("變小圖片:" + width + '...' + height); // 如果圖片大於四百萬畫素，計算壓縮比並將大小壓至400萬以下

          var ratio;

          if ((ratio = width * height / 4000000) > 1) {
            ratio = Math.sqrt(ratio);
            width /= ratio;
            height /= ratio;
          } else {
            ratio = 1;
          }

          canvas.width = width;
          canvas.height = height; // 鋪底色

          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, canvas.width, canvas.height); // 如果圖片畫素大於100萬則使用瓦片繪製

          var count;

          if ((count = width * height / 1000000) > 1) {
            count = ~~(Math.sqrt(count) + 1); // 計算要分成多少塊瓦片
            // 計算每塊瓦片的寬和高

            var nw = ~~(width / count);
            var nh = ~~(height / count);
            tCanvas.width = nw;
            tCanvas.height = nh;

            for (let i = 0; i < count; i++) {
              for (let j = 0; j < count; j++) {
                tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
              }
            }
          } else {
            ctx.drawImage(img, 0, 0, width, height);
          } // 進行最小壓縮0.1
          //var ndata = canvas.toDataURL('image/jpeg', 0.5);


          var ndata = canvas.toDataURL(); // console.log('壓縮前：' + initSize)
          // console.log('壓縮後：' + ndata.length)
          // console.log('壓縮率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%")
          //tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

          return ndata;
        }

        AutoSize(image, maxWidth, maxHeight) {
          // 等比壓縮圖片
          let spec = new Size(); // 當圖片比圖片框小時不做任何改變

          if (image.width < maxWidth && image.height < maxHeight) {
            //原圖片寬高比例 大於 圖片框寬高比例
            //寬大於高
            if (image.width >= image.height) {
              spec.width = maxWidth;
              spec.height = image.height * (maxWidth / image.width);
            } //高大於寬
            else {
                spec.width = image.width * (maxHeight / image.height);
                spec.height = maxHeight;
              } // spec.width = image.width;
            // spec.height = image.height;

          } else {
            //原圖片寬高比例 大於 圖片框寬高比例,則以框的寬為標準縮放，反之以框的高為標準縮放
            if (maxWidth / maxHeight <= image.width / image.height) {
              spec.width = maxWidth; //以框的寬度為標準

              spec.height = maxWidth * (image.height / image.width);
            } else {
              spec.width = maxHeight * (image.width / image.height);
              spec.height = maxHeight; //以框的高度為標準
            }
          }

          return spec;
        }

      }); // _doChangePhoto() {
      //     // 取得選取的檔案
      //     const selectedFile = document.getElementById('inputfile').files[0];
      //     // 檢查檔案格式
      //     if (!ShareControll.AllShare_Controll.publicSetUp.AcceptImgFormat.includes(selectedFile.type)) {
      //         ShareControll.AllShare_Controll.MessageBox.showConfirm(this, 0, ShareControll.AllShare_Controll.publicSetUp.Lng_UploadFileFormat);
      //         return false;
      //     }
      //     // 檢查檔案大小
      //     if (selectedFile.size > ShareControll.AllShare_Controll.publicSetUp.FileSizeLimit * 1024 * 1024) {
      //         ShareControll.AllShare_Controll.MessageBox.showConfirm(this, 0, ShareControll.AllShare_Controll.publicSetUp.Lng_ExceedFileSize);
      //         return false;
      //     }
      //     // 讀取檔案內容
      //     const reader = new FileReader();
      //     reader.onload = function (event) {
      //         // 建立圖片物件
      //         const image = new Image();
      //         // 設定圖片來源
      //         image.src = event.target.result;
      //         // 圖片載入後，執行下列程式碼
      //         image.onload = function () {
      //             // 檢查檔案大小是否超過限制
      //             if (image.width > ShareControll.AllShare_Controll.publicSetUp.ImageWidthLimit || image.height > ShareControll.AllShare_Controll.publicSetUp.ImageHeightLimit) {
      //                 ShareControll.AllShare_Controll.MessageBox.showConfirm(this, 0, ShareControll.AllShare_Controll.publicSetUp.Lng_ImageSizeExceed);
      //                 return false;
      //             }
      //             // 壓縮圖片
      //             const compressedImage = LobbyShareFuntion.compress(image);
      //             // 將壓縮後的圖片儲存到檔案
      //             const newFile = LobbyShareFuntion.dataURLtoFile(compressedImage, '1.png');
      //             // 顯示圖片
      //             LobbyShareFuntion.PreviewPhoto(image, compressedImage);
      //         };
      //     };
      //     // 讀取檔案內容
      //     reader.readAsDataURL(selectedFile);
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CreateFileSprite.js.map