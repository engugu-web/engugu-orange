import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/Services.vue"),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
});

export default router;
