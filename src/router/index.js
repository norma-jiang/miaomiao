import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/movie'
  },
  {
    path: '/cinema',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cinema')
  },
  {
    path: '/movie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie'),
    children:[
      {
        path: '/movie/city',
        component: ()=> import('@/components/City')
      },
      {
        path:'/movie/nowplaying',
        component:()=> import('@/components/NowPlaying')
      },
      {
        path:'/movie/comingsoon',
        component:()=>import('@/components/ComingSoon')
      },
      {
        path:'/movie/search',
        component:()=>import('@/components/Search')
      },
      {
        path:"/",
        redirect:'/movie/nowplaying',
        // component:()=>import('../views/Movie')
      }

    ]
  },
  {
    path: '/mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
