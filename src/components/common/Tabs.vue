<template>
  <div class="tabs">
    <el-tabs
      v-model="TabsValue"
      type="card"
      closable 
      @edit="handleTabsEdit"
      @tab-click="handleTabsClick"
      @tab-remove="handleRemoveTab"
      size="mini"
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
    };
  },
  computed: {
    ...mapGetters(["tabsArr"])
  },
  watch: {
    //监听路由
    $route(newValue, oldValue) {
      this.TabsValue = newValue.name;
      this.setTabs(newValue);
    },
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
    //点击某一个tab
    handleTabsClick(tab) {
      console.log('tab',tab.name)   //name  与路由相同
      this.$router.replace(`/${tab.name}`)
    },
    //删除某一个
    handleRemoveTab(targetName) {
      let tabs = this.TabsList
      let activeName = this.TabsValue;
      if (targetName == activeName) {
        
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            
            if (nextTab) {
              this.$router.push(nextTab.path);
              activeName = nextTab.name;
            }
          }
        });
      }
      this.TabsValue = activeName;
      this.TabsList = tabs.filter(tab => tab.name !== targetName);
      if(this.TabsList.length==0){
        this.$router.push('/')
        return
      }

        this.setTabsList( this.TabsList)

    }
  },
  created() {
    this.setTabs(this.$route);
    this.TabsValue = this.$route.name;
  },
  mounted() {}
};
</script>

<style scoped>
</style>
<style>
.tabs{
  
}
.tabs .is-top{
  height: 34px;
  line-height: 34px;
   margin: 0;
}

</style>
