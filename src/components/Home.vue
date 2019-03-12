<template>
  <div class="hello">
    <el-container>
      <el-header>
        <home-header></home-header>
      </el-header>
      <el-container>
        <el-aside width="189px">
          <slide-bar></slide-bar>
        </el-aside>
        <el-main>
          <tabs></tabs>
          <keep-alive>
            <router-view>

            </router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import homeHeader from "@/components/common/Header.vue";
import slideBar from "@/components/common/SlideBar";
import Tabs from '@/components/common/Tabs'
export default {
  name: "HelloWorld",
  components: {
    homeHeader,
    slideBar,
    Tabs
  },

  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created(){
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-header{
  padding: 0;
  height: 50px !important;
  
}
.el-main{
  padding:0;
}

.el-container >header{

}
</style>
