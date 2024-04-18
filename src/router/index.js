// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/About',
    name: 'AboutPage',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
