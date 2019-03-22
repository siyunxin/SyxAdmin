import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/Home'], resolve),
      redirect: '/main',
      children:[
        {
          path: '/main',
          name: 'main',
          component: resolve => require(['@/components/views/Main'], resolve),
          meta: { title: '系统首页' }
        },
        {
          path: '/dzzbrowse',
          name: 'dzzbrowse',
          component: resolve => require(['@/components/views/RoleManagement/dzzBrowse'], resolve),
          meta: { title: '党组织查看' }
        },
        {
          path: '/dzzuserbrowse',
          name: 'dzzuserbrowse',
          component: resolve => require(['@/components/views/RoleManagement/dzzUserBrowse'], resolve),
          meta: { title: '党组织用户查看' }
        },
        {
          path: '/roleallot',
          name: 'roleallot',
          component: resolve => require(['@/components/views/RoleManagement/roleAllot'], resolve),
          meta: { title: '角色分配' }
        },
        {
          path: '/zxglyfb',
          name:'zxglyfb',
          component: resolve => require(['@/components/views/informationManage/publisher'], resolve),
          meta: { title: '信息管理与发布' }
        }
      ]
    }
  ]
})
