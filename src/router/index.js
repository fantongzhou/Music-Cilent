import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Index from '../pages/index'
import List from '../pages/list'
import Play from '../pages/play'
import Rank from '../views/rank'
import Shouye from '../views/shouye'
import My from '../views/my'
import Yinyueguan from '../views/yinyueguan'
import Singer from '../views/singer'
import Singerdetail from '../pages/singerdetail'
import Register from '../pages/register'
import Searchlist from '../pages/searchlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      redirect: '/yinyueguan/shouye',
      children: [
        {
          path: '/yinyueguan',
          component: Yinyueguan,
          redirect: '/yinyueguan/shouye',
          children: [
            {
              path: '/yinyueguan/shouye',
              component: Shouye
            },
            {
              path: '/yinyueguan/rank',
              component: Rank
            },
            {
              path: '/yinyueguan/singer',
              component: Singer
            }
          ]
        },
        {
          path: '/my',
          component: My,
          meta: {
            loginRequest: true
          }
        }
      ]
    },
    {
      path: '/play/:picurl/:songurl',
      component: Play,
      name:'play'
    },
    {
      path: '/list/:listid/:listname/:picurl',
      component: List,
      name:'list'
    },
    {
      path: '/singerdetail/:singername/:picurl/:singerintro',
      component: Singerdetail,
      name:'singerdetail'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/searchlist',
      component: Searchlist
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
