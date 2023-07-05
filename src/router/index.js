import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/boys",
            name: "boys",
            component: () => import("../views/boys/OverallsView.vue"),
        },
        // {
        //     path: "/girls",
        //     name: "girls",
        //     component: () => import("../views/GirlsView.vue"),
        // },
        // {
        //     path: "/baby-girls",
        //     name: "girls",
        //     component: () => import("../views/BabyGirlsView.vue"),
        // },

        // {
        //     path: "/baby-boys",
        //     name: "baby-boys",
        //     component: () => import("../views/BabyBoysView.vue"),
        // },
    ],
});

export default router;