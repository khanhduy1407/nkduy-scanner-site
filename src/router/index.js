import { createWebHistory, createRouter } from "kdu-router";
import HomeView from "../views/HomeView.kdu";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
