<!--
 * @Description: 上传图片组件
 * @Author: chenxiaofan
 * @Date: 2020-05-13 15:40:02
 * @LastEditors: chenxiaofan
 * @LastEditTime: 2020-05-15 09:53:06
 * @FilePath: \NN_FE\src\components\common\Upload.vue
 -->
<template>
  <div class="c-upload">
    <div class="img-box">
      <img :src="value" id="CUploadImg">
    </div>
    <el-upload
        v-if="!config.isCropper"
        :action="config.action"
        :limit="config.limit || 1"
        :show-file-list="config.showFileList"
        :before-upload="hanlderBeforeUpload"
        :http-request="uploadAvatarHttpRequest"
        class="upload"
      >
        <span class="upload-btn">{{$t(config.btnText) || "点击上传"}}</span>
    </el-upload>
  </div>
</template>

<script>
import Cropper from "cropperjs";
import http from "@/utils/HttpClient";
export default {
  props: {
    value: {
      required: true,
      type: String,
      default: ""
    },
    config: {
      type: Object,
      default: () => {
        return {};
      }
    },
    initParams: {
      type: Function
    }
  },
  data() {
    return {
      imgUrl: "",
      cropper: null
    }
  },
  created() {
    this.value && (this.imgUrl = this.value);
    if (this.config.isCropper) this.initCropper();
  },
  methods: {
    /**
     * 初始化图片裁剪工具
     */
    initCropper() {
      const self = this;
      this.$nextTick(() => {
        this.cropper = new Cropper(document.getElementById('CUploadImg'), {
            aspectRatio: 1,
            crop() {
              self.cropperImg = self.cropper.getCroppedCanvas().toDataURL().toString();
            },
        });
      });
    },
    /**
     * 上传前
     */
    hanlderBeforeUpload(file) {
      const size = this.config.size || 1;
      const isLt = file.size / 1024 / 1024 > size;
      if (isLt) {
        let msg = this.$t("comm.uploadMaxSizeTip").toString();
        this.$message(msg || "上传的图片不能大于" + size + "M");
        return false;
      }
      return true;
    },
    /**
     * 自定义请求
     */
    async uploadAvatarHttpRequest(d) {
      let params = {};
      let base64 = ""
      if (this.config.isBase64) {
        base64 = await this.getBase64(d.file);
      }
      if (typeof this.initParams === 'function') {
        params = this.initParams(d, base64);
      }
      http.post(this.config.action, params).then(({ data }) => {
        if (typeof this.success === 'function') {
          this.success(data);
        } else {
          this.$emit("update:value", process.env.VUE_APP_IMG_URL + data.file_path);
        }
      })
    },
    getBase64(file) {
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function() {
          imgResult = reader.result;
        };
        reader.onerror = function(err) {
          reject(err);
        };
        reader.onloadend = function() {
          resolve(imgResult);
        };
      });
    }
  }
}
</script>
<style lang="less" scoped>
.c-upload{
  overflow: hidden;
  display: flex;
  align-items: center;
}
.img-box,
.upload {
  float: left;
}
.img-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-right: 27px;
  img{
    width: 100%;
  }
}
.upload {
  text-align: center;
  width: 90px;
  height: 34px;
  line-height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 14px\9\0;
}
</style>