<template>
  <div class="hello">
    <home-header></home-header>
    <div class="content_box">
      <div>
        <slide-bar></slide-bar>
      </div>
      <div class="content">
        <tabs></tabs>
        <div style="height:100%">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeHeader from "@/components/common/Header.vue";
import slideBar from "@/components/common/SlideBar";
import Tabs from "@/components/common/Tabs";
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  components: {
    homeHeader,
    slideBar,
    Tabs
  },

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      widthStyle: false,
      transitionName: "slide-left",
    };
  },
  computed: {
    ...mapGetters(["isCollapse"])
  },
  watch: {
    isCollapse: function() {
      this.widthStyle = this.isCollapse;
    }
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    if (toDepth < fromDepth) {
      console.log("?");
    }
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    next();
  },
  created() {
    this.widthStyle = this.isCollapse;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.hello {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
.el-header {
  padding: 0;
  height: 50px !important;
}
.el-main {
  padding: 0;
}

.el-container > header {
}
.content_box {
  height: 100%;
  display: flex;
  /* display: inline-block; */
  vertical-align: top;
}
.content {
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
}
</style>
