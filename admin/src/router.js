import Vue from 'vue';
import Router from 'vue-router';

import Main from './views/Main.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      component: () => import('@/components/StarBackground'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
      meta: { isPublic: true },
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          component: () => import('@/echarts/MainCharts'),
        },
        // 分类路由
        {
          path: '/categories/create',
          component: () => import('@/views/CategoryEdit'),
        },
        {
          path: '/categories/list',
          component: () => import('@/views/CategoryList'),
        },
        {
          path: '/categories/edit/:id',
          component: () => import('@/views/CategoryEdit'),
          props: true,
        },

        // 物品
        { path: '/items/create', component: () => import('@/views/ItemEdit') },
        { path: '/items/list', component: () => import('@/views/ItemList') },
        {
          path: '/items/edit/:id',
          component: () => import('@/views/ItemEdit'),
          props: true,
        },

        // 英雄
        { path: '/heroes/create', component: () => import('@/views/HeroEdit') },
        { path: '/heroes/list', component: () => import('@/views/HeroList') },
        {
          path: '/heroes/edit/:id',
          component: () => import('@/views/HeroEdit'),
          props: true,
        },

        // 文章
        {
          path: '/articles/create',
          component: () => import('@/views/ArticleEdit'),
        },
        {
          path: '/articles/list',
          component: () => import('@/views/ArticleList'),
        },
        {
          path: '/articles/edit/:id',
          component: () => import('@/views/ArticleEdit'),
          props: true,
        },

        // 广告位
        { path: '/ads/create', component: () => import('@/views/AdEdit') },
        { path: '/ads/list', component: () => import('@/views/AdList') },
        {
          path: '/ads/edit/:id',
          component: () => import('@/views/AdEdit'),
          props: true,
        },

        // 管理员
        {
          path: '/admin_users/create',
          component: () => import('@/views/AdminUserEdit'),
        },
        {
          path: '/admin_users/list',
          component: () => import('@/views/AdminUserList'),
        },
        {
          path: '/admin_users/edit/:id',
          component: () => import('@/views/AdminUserEdit'),
          props: true,
        },

        // 视频
        {
          path: '/videoes/create',
          component: () => import('@/views/VideoEdit'),
        },
        { path: '/videoes/list', component: () => import('@/views/VideoList') },
        {
          path: '/videoes/edit/:id',
          component: () => import('@/views/VideoEdit'),
          props: true,
        },

        // 图文攻略
        {
          path: '/strategies/create',
          component: () => import('@/views/StrategyEdit'),
        },
        {
          path: '/strategies/list',
          component: () => import('@/views/StrategyList'),
        },
        {
          path: '/strategies/edit/:id',
          component: () => import('@/views/StrategyEdit'),
          props: true,
        },

        // 热门资讯
        {
          path: '/echarts/hot',
          component: () => import('@/echarts/HotContainer'),
        },
      ],
    },
  ],
});

// 全局前置守卫：进行客户端路由限制
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login');
  }
  next();
});

// router.beforeEach(async(to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title + ' - ' + Config.title
//   }
//   NProgress.start()
//   if (store.getters.token) {
//     // 已登录且要跳转的页面是登录页
//     if (to.path === '/login') {
//       // next({ path: '/login' })
//       store.commit('SET_TOKEN', '')
//       localStorage.removeItem('token')
//       NProgress.done()
//       next()
//     } else {
//       if (store.getters.roles.length === 0) {
//         // 判断当前用户是否已拉取完user_info信息
//         const res = await store.dispatch('GetInfo').catch(async(err) => {
//           await store.dispatch('LogOut')
//           location.reload() // 为了重新实例化vue-router对象 避免bug
//         })
//         if (res) {
//           await loadMenus(next, to)
//         }
//         // 登录时未拉取 菜单，在此处拉取
//       } else if (store.getters.loadMenus) {
//         // 修改成false，防止死循环
//         store.commit('SET_LOAD_MENUS', false)
//         await loadMenus(next, to)
//       } else {
//         next()
//       }
//     }
//   } else {
//     /* has no token*/
//     if (whiteList.indexOf(to.path) !== -1) {
//       // 在免登录白名单，直接进入
//       next()
//     } else {
//       // next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
//       next('/login')
//     }
//   }

export default router;
