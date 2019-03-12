<template>
<!--  @open="handleOpen"
      @close="handleClose" -->
  <div class="slidebar">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#F2F2F2"
      text-color="#999"
      active-text-color="#266CAD"
      unique-opened 
      router
    >
    <template v-for="item in menuList">
                <template v-if="item.submenu">
                    <el-submenu :index="item.index" :key="item.index" :route="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.submenu">
                            <!-- <el-submenu :index="subItem.subindex" :key="subItem.subindex">
                                <template slot="title">{{ subItem.subtitle }}</template>
                            </el-submenu> -->
                            <el-menu-item  :index="subItem.subindex" :key="subItem.subindex">
                                {{ subItem.subtitle }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "slidebar",
  components: {},
  data() {
    return {
      menuList: [
        {
          icon: "el-icon-syxzhuye",  
          title: "首页",
          index: "main"
        },
        {
          icon: "el-icon-syxjiaoseguanli",    
          title: "角色管理",
          index: "rolemanagement",
          submenu: [
            {

              subtitle: "党组织查看",
              subindex: "/dzzbrowse"
            },
            {
              subtitle: "党组织用户查看",
              subindex: "/dzzuserbrowse"
            },
            {
              subtitle: "角色分配",
              subindex: "/roleallot"
            }
          ]
        },
        {
          icon: "el-icon-syxxinxi",    
          title: "信息管理与发布",
          index: "information",
          submenu: [
            {
              subtitle: "咨询管理与发布",
              subindex: "/zxglyfb"
            },
            {
              subtitle: "学习管理与发布",
              subindex: "/xxglyfb"
            },
            {
              subtitle: "发布审核",
              subindex: "/fbsh"
            },
            {
              subtitle: "置顶管理",
              subindex: "/zdgl"
            },
            {
              subtitle: "收藏与点赞",
              subindex: "/scydz"
            }
          ]
        },
        {
          icon: "el-icon-syxrenwu",    
          title: "任务管理",
          index: "mission",
          submenu: [
            {
              subtitle: "通知公告",
              subindex: "/tzgg"
            },
            {
              subtitle: "任务待办",
              subindex: "/rwdb"
            },
            {
              subtitle: "会议管理",
              subindex: "/hygl"
            },
            {
              subtitle: "组织生活管理",
              subindex: "/zzshgl"
            },
            {
              subtitle: "调查问卷",
              subindex: "/dcwj"
            },
            {
              subtitle: "在线答题",
              subindex: "/zxdt"
            },
            {
              subtitle: "积分情况查看",
              subindex: "/jfqkck"
            },
            {
              subtitle: "学时情况查看",
              subindex: "/xsqkck"
            }
          ]
        },
        {
          icon: "el-icon-syxxitong",    
          title: "系统管理",
          index: "system",
          submenu: [
            {
              subtitle: "主题管理",
              subindex: "/ztgl"
            },
            {
              subtitle: "帮助",
              subindex: "/help"
            },
            {
              subtitle: "意见反馈",
              subindex: "/yjfk"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
    .slidebar{
        color: #999;
    }
    .el-menu{
        text-align: left
    }
    .el-submenu__title{
        text-align: left
    }
    
   

</style>
<style>
    .el-submenu:hover{
        color: red;
    }
</style>
