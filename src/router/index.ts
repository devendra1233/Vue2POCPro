import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
Vue.use(VueRouter);

function guardMyroute(to: any, from: any, next: any) {
  let isAuthenticated = false;
  if (localStorage.getItem('LoggedUser'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  }
  else {
    alert("please login to access Dashboard")
    next('/'); // go to '/login';
  }
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    // beforeEnter: guardMyroute,
    component: () => import('../views/Home.vue')
  },
  {
    path: '/book',
    name: 'Book',
    // beforeEnter: guardMyroute,
    component: () => import('../views/Book.vue')
  },
  {
    path: '/historybook',
    name: 'HistoryBook',
    // beforeEnter: guardMyroute,
    component: () => import('../views/HBook.vue')
  },
  {
    path: '/sciencebook',
    name: 'ScienceBook',
    // beforeEnter: guardMyroute,
    component: () => import('../views/SBook.vue')
  },
  {
    path: '/mythologybook',
    name: 'Mythologybook',
    // beforeEnter: guardMyroute,
    component: () => import('../views/MBook.vue')
  },
  {
    path: '/fusionbook',
    name: 'Fusionbook',
    // beforeEnter: guardMyroute,
    component: () => import('../views/FBook.vue')
  },
  {
    path: '/enquiry',
    name: 'Enquiry',
    // beforeEnter: guardMyroute,
    component: () => import('../views/Enquiry.vue')
  },
  {
    path: '/line',
    name: 'Line',
    beforeEnter: guardMyroute,
    component: () => import('../views/Line.vue')
  },
  {
    path: '/bar',
    name: 'Bar',
    beforeEnter: guardMyroute,
    component: () => import('../views/Bar.vue')
  },
  {
    path: '/doughnut',
    name: 'Doughnut',
    beforeEnter: guardMyroute,
    component: () => import('../views/Doughnut.vue')
  },

]
// scrollBehavior(to,from, savepostion )
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
