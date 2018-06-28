import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const Clips = () => import('./views/Clips.vue');
const Goods = () => import('./views/Goods.vue');
const Members = () => import('./views/Members.vue');
const Rankings = () => import('./views/Rankings.vue');
const DashBoard = () => import('./views/DashBoard.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/clips',
      name: 'clips',
      component: Clips,
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: Rankings,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
    },
  ],
});
