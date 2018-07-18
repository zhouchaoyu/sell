import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';

Vue.use(Router);

let routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '*',
    component: goods
  }
];
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  linkActiveClass: 'active',
  routes
});

router.push('/goods');
export default router;
