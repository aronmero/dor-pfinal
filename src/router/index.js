import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/home.vue") },
  { path: "/login", component: () => import("@/views/singIn.vue") },
  { path: "/register", component: () => import("@/views/register.vue") },
  { path: "/search", component: () => import("@/views/search.vue") },
<<<<<<< HEAD
  { path: "/company_profile", component: () => import("@/views/CompanyProfile.vue") },

=======
>>>>>>> c872cf8e1b8612dd76e36bcf75abc32d3baa702d
];
 const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;