import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 *  加载模块
 */
Vue.use(VueRouter)
/**
 *  路由配置
 */
const router = new VueRouter({
  base: __dirname,
  likActiveClass: 'link-active',
  routes: [
    {
      path: '/init',
      name: 'init',
      component: resolve => require(['../components/init.vue'], resolve),
      children: [
        {
          path: 'home',
          name: 'home',
          component: resolve => require(['../components/home.vue'], resolve),
          meta: {title: '主页'}
        },
        {
          path: 'personal/userInfo',
          name: 'userInfo',
          component: resolve => require(['../components/personal/userInfo.vue'], resolve),
          meta: {title: '个人信息'}
        },
        {
          path: 'personal/healthInfo',
          name: 'healthInfo',
          component: resolve => require(['../components/personal/healthInfo.vue'], resolve),
          meta: {title: '身体健康信息'}
        },
        {
          path: 'personal/childenInfo',
          name: 'childenInfo',
          component: resolve => require(['../components/personal/childenInfo.vue'], resolve),
          meta: {title: '孩子个人信息'}
        },
        {
          path: 'personal/setting',
          name: 'setting',
          component: resolve => require(['../components/personal/setting.vue'], resolve),
          meta: {title: '设置'}
        },
        {
          path: 'personal/bindChilden',
          name: 'bindChilden',
          component: resolve => require(['../components/personal/bindChilden.vue'], resolve),
          meta: {title: '绑定宝宝'}
        },
        {
          path: 'personal/course',
          name: 'course',
          component: resolve => require(['../components/course/course.vue'], resolve),
          meta: {title: '課程'}
        },
        {
          path: 'personal/courseInfo',
          name: 'course',
          component: resolve => require(['../components/course/courseInfo.vue'], resolve),
          meta: {title: '课程详情'}
        },
      ]
    },
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/login.vue'], resolve),
      meta: {title: '登录'}
    }
  ]
})

/**
 *  路由出口
 */
export default router
