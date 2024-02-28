import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/home.vue") },
  { path: "/login", component: () => import("@/views/singIn.vue") },
  { path: "/register", component: () => import("@/views/register.vue") },
  { path: "/search", component: () => import("@/views/search.vue") },
  { path: "/company_profile", component: () => import("@/views/CompanyProfile.vue") },
  { path : "/public_profile", component: () => import("@/views/PublicProfile.vue")}



];
 const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;