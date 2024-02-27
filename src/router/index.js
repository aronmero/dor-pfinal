import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/home.vue") },
  { path: "/login", component: () => import("@/views/singIn.vue") },
];
 const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;