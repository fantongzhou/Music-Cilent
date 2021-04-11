// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
//全局引入轮播图的样式
import 'swiper/css/swiper.min.css'
//全局引入轮播图js
import 'swiper/js/swiper.min.js'
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$axios = axios
//我觉得用router也可以实现一下功能
router.beforeEach((to, from, next) => {
  if (to.meta.loginRequest) {//如果路由中meta的loginrequest为true，进行拦截
    if (sessionStorage.getItem('user')) {
      next()//如果已经登录 则直接进入预设页面
    } else {//否则跳转到登录页
      next({
        path: '/login',
        query: {
          redirect: to.fullPath//把要跳转的页面路径传到登录页面以方便跳转
        }
      })
    }
  } else {//直接进入页面
    next()
  }
})

// router.beforeEach((to, from, next) => {　} 三个参数：
//    to：即将要进入的目标 路由对象
//    from：当前导航正要离开的路由
//    next：(function函数) 调用next() 进行管道中的下一个钩子
//    next() 无参 进行 下一个钩子函数
//    next({ path:’/xxx’ , query:{}}) 携带参数跳到xxx页面
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//key value 值相等时 可以简写（此处本应写成router:router）
  components: { App },//组件 此处App表达方式同上条
  template: '<App/>',//模板，优先级高于html
})
