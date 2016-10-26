import Vue from 'vue'
// import App from './App'
import Router from 'vue-router'
/* eslint-disable no-new */

Vue.use(Router)
// 开启debug模式
Vue.config.debug = true
/* var app = new Vue({
  el: 'body',
  components: { App }
})
app.use(VueRouter) */
var App = Vue.extend({})

var router = new Router()

router.map({
  '/': {
    name: 'index',
    component: function (resolve) {
      require(['./App.vue'], resolve)
    }
  },
  '/active': {
    name: 'active',
    component: function (resolve) {
      require(['./App.vue'], resolve)
    }
  },
  '/completed': {
    name: 'completed',
    component: function (resolve) {
      require(['./App.vue'], resolve)
    }
  }
})
router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
})

router.start(App, '#app')
