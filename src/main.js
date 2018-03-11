// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

import './common/stylus/index.styl';

import Axios from 'axios'
Vue.prototype.$ajax = Axios

Vue.config.productionTip = false

Vue.use(VueRouter)

let router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/goods'
        },
        {
            path: '/goods',
            component: goods
        },
        {
            path: '/seller',
            component: seller
        },
        {
            path: '/ratings',
            component: ratings
        }
    ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
