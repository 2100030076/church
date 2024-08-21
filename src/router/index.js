import { createRouter, createWebHistory } from "vue-router";


import HomeView from "../views/HomeView.vue";
import SermonsView from '../views/SermonsView.vue';
import ContactView from '../views/ContactView.vue';
import GiveView from '../views/GiveView.vue';


const routes = [
  { path: "/", component: HomeView },
  { path: "/page", component: SermonsView },
  { path: "/contact", component: ContactView },
  { path: "/give", component: GiveView },

  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
