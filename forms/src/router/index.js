import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var index;

index = r => require.ensure([], () => r(require('@/pages/index')), 'index')//首页


var routes= [
  {path: '/',name: 'index',component: index},
]

export default new Router({
  mode:'history',
  routes:routes
})
