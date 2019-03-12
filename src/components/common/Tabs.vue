<template>
  <div class="tabs">
    <el-tabs
      v-model="TabsValue"
      type="card"
      editable
      @edit="handleTabsEdit"
      @tab-click="handleTabsClick"
      @tab-remove="handleRemoveTab"
    >
      <el-tab-pane
        v-for="(item) in TabsList"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "tabs",
  data() {
    return {
      TabsValue: "",
      TabsList: []
      // tabIndex: 2
    };
  },
  computed:{
    ...mapGetters(['tabsArr'])
  },
  watch: {
    //监听路由
    $route(newValue, oldValue) {
      this.TabsValue = newValue.name;
      this.setTabs(newValue);
    }
  },
  methods: {
    ...mapActions(["setTabsList"]),
    handleTabsEdit() {},
    //设置 tabs数组
    setTabs(route) {
      //检验路由数组中是否已经存在了 当前的路由
      let routeExist = this.TabsList.some(item => {
        return item.path === route.fullPath;
      });
      if (!routeExist) {
        //如果不存在
        this.TabsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name
        });
        this.setTabsList(this.TabsList);
      }
    },
    handleTabsClick() {},
    handleRemoveTab(targetName) {
     
      let tabNow = this.TabsValue;
      let activeName = targetName;
      if (tabNow == activeName) {
       console.log(tabNow) 
         this.TabsList.forEach((tab, index) => {
            if (tab.name === targetName) {
              console.log(tab.name)
              let nextTab = this.TabsList[index + 1] || this.TabsList[index - 1];
              if (nextTab) {
                  activeName = nextTab.name;
              }
            }
          });
      }
    }
  },
  created() {
    // this.TabsList = this.tabsArr
  },
  mounted() {}
};
</script>

<style scoped>
</style>
<style>
.tabs .el-tabs__header {
  margin: 0;
}
</style>
