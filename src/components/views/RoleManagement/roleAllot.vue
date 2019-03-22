<template>
  <div>
    <div class="rj-header">
      <div :z-depth="0" title="修剪图片">
        <button flat @click="cancle" color="primary" slot="left">取消</button>
        <button flat @click="confirm" color="primary" slot="right">确定</button>
      </div>
    </div>
    <div class="cropper-content">
      <div class="cropper" style="height:300px;width:300px;">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="true"
          :full="option.full"
          :canScale="true"
          :centerBox="true"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixedNumber="option.fixedNumber"
          :fixed="option.fixed"
          :fixedBox="option.fixedBox"
        ></vueCropper>
      </div>
    </div>
    <div style="height:300px;width:300px;float:right">
      <img height:300px width:300px :src="modelsrc" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "role-allot",

  data() {
    return {
      modelsrc: "",
      crap: false,
      previews: {},
      option: {
        img: require("../../../assets/logo.png"),
        size: 1,
        full: false,
        outputType: "png",
        canMove: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: 120,
        autoCropHeight: 90,
        fixedNumber: [4, 3],
        fixed: true,
        downImg: "#"
      }
    };
  },
  methods: {
    cancle() {
      this.$router.replace("/my");
    },
    confirm() {
      let that = this;
      // 获取截图的blob数据
      this.$refs.cropper.getCropBlob(data => {
          console.log(data)
        let that = this;
       
        // let reader = new FileReader()
        // reader.readAsDataURL(data)
        // reader.onload = e =>{
        //      that.modelsrc = e.target.result;
        // }

        let windowURL = window.URL || window.webkitURL;
        this.modelsrc = windowURL.createObjectURL(data);
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
</style>
