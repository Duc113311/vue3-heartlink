import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IntroductionView from "@/views/dashboard/introduce/index.vue";
import PackageView from "@/views/dashboard/packages/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "introduction-view",
    component: IntroductionView,
  },
  {
    path: "/package",
    name: "package-view",
    component: PackageView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
console.log("history", process.env.BASE_URL)

export default router;
