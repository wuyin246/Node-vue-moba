import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Strategy from './views/Strategy.vue'
import GameCenter from './views/GameCenter.vue'
import Main from './views/Main.vue'
import Article from './views/Article.vue'
import Hero from './views/Hero.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                { path: '/', name: 'home', component: Home },
                { path: '/strategy', name: 'strategy', component: Strategy },
                { path: '/gamecenter', name: 'gamecenter', component: GameCenter },
                { path: '/articles/:id', name: 'article', component: Article, props: true }

            ]
        },
        {
            path: '/heros/:id',
            name: 'hero',
            component: Hero,
            props: true
        },
        {
            path: '/videoes/:id',
            name: 'Video',
            component: Hero,
            props: true
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
