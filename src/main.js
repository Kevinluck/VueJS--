// 入口文件
import Vue from 'vue';
import Layout from './components/layout';
import VueRouter from 'vue-router';
import VueSessionStorage from 'vue-sessionstorage';
import mock from './mock/mock';
import indexPage from './pages/index';
import detailPage from './pages/detail';
import analysisPage from './pages/detail/analysis';
import countPage from './pages/detail/count';
import forecastPage from './pages/detail/forecast';
import publishPage from './pages/detail/publish';
import orderListPage from './pages/orderList';
import store from './store/index';

Vue.use(VueRouter);
Vue.use(VueSessionStorage);

let router = new VueRouter({
  // 使用html5的history模式
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/orderList',
      component: orderListPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/count',
      // 配置子路由
      children: [
        {
          path: 'analysis',
          component: analysisPage
        },
        {
          path: 'count',
          component: countPage
        },
        {
          path: 'forecast',
          component: forecastPage
        },
        {
          path: 'publish',
          component: publishPage
        }
      ]
    }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
});
