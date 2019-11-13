import Vue from 'vue'
import App from './App.vue'

import HelloWorld from './components/HelloWorld'
import Tasks from './components/Tasks'


import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/tasks', component: Tasks },
    { path: '/user/:id', component: Tasks }
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
