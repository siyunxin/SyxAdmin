<template>
  <div class="header">
    <el-row>
      <el-col :span="6">
        <div class="grid-content  bg-purple-light">
            <div class="admin_name">
                国寿先锋管理系统
            </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple-light">
            <div class="user_identity">
                你现在的身份: 中共中国人寿保险(集团)公司委员会 全集团党委管理员
            </div>
            <div class="user_change_identity">
                切换身份
            </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light user_info">
            <div class="user_headpic">
               <img :src="userHeadImg" alt="">
            </div>
            <div>
                <div>
                    欢迎
                    司云昕
                </div>
            </div>
            <div class="down_icon">

            </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "homeheader",
  components: {},
  data() {
    return {
        userHeadImg:require('@/assets/HomeImages/headerImg.jpg')
    };
  },
  methods:{

  },
  mounted(){

  }
 
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;   
  color: #fff; 
}
.admin_name{
    text-align: left;
    text-indent: 36px;
}
.bg-purple-light {
  background: rgb(201, 3, 3);
}
.grid-content {
  min-height: 50px;
}
.user_identity{
  display: inline-block; 
}
.user_change_identity{
  display: inline-block; 

}
.user_info{
    display: flex;
    justify-content: space-around;
    align-items: center

}
.user_headpic{
    width: 40px;
    height: 40px;
    border-radius: 50%
}
.user_headpic img{
    width: 100%;
    height: 100%;
     border-radius: 50%
}
.down_icon{
    width: 0;
    height: 0;
    vertical-align: middle;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #000;    
}
</style>
