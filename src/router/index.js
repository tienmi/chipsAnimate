import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue')
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export default router;
