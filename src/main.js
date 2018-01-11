// 入口文件
import Vue from 'vue';
import Layout from './components/layout';
import VueRouter from 'vue-router';
import mock from './mock/mock';
import indexPage from './pages/index';

Vue.use(VueRouter);

let router = new VueRouter({
  // 使用html5的history模式
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
});
