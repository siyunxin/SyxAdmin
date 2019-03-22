<template>
  <div>
    <div>
      <input type="file" ref="myInput" accept="image/*" @change="handleChangeImage">
    </div>
    <div style="width:100px; height:100px; border:1px solid #000">
      <img style="width:100%; height:100%;" :src="mySrc">
    </div>

    <div class="flex_box">
        <div ref="div1" class="div1">

        </div>
        <div class="div2">

        </div>
    </div>
    <div @click="dis">
        消失
    </div>
  </div>
</template>

<script>
export default {
  name: "publisher",
  data() {
    return {
      mySrc: require("../../../assets/logo.png")
    };
  },
  methods: {
    handleChangeImage(v) {
      let that = this  
      let file = v.target.files[0];
      let reader = new FileReader();
       //获得一个http格式的url路径:mozilla(firefox)||webkit or chrome
       
        //createObjectURL创建一个指向该参数对象(图片)的URL
    
      let windowURL = window.URL || window.webkitURL;
      this.mySrc = windowURL.createObjectURL(file);

      reader.readAsDataURL(file); //读取文件,保存为base64 格式
       
    //   reader.onload = e => {    
    //     let imageString = e.target.result;
       
    //     that.mySrc = dataURL;
    //   };
    },
    dis(){
        this.$refs.div1.style.display="none"
    }
  },
  mounted() {}
};
</script>

<style>
.flex_box{
    
    width: 600px;
    height:200px;
    display: flex;
    border: 1px solid yellow;
    box-sizing: border-box;
}
.div1{
    width: 30%;
    height: 100%;
    border: 1px solid red
}
.div2{
    flex: 1;
    height: 100%;
    border: 1px solid green
}
</style>
