import { createRouter, createWebHistory } from "vue-router";


import HomeView from "../views/HomeView.vue";
import SermonsView from '../views/SermonsView.vue';


const routes = [
  { path: "/", component: HomeView },
  { path: "/page", component: SermonsView },

  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
