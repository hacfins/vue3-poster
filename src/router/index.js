import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
const poster = () => import(/* webpackChunkName: "index-main" */ '@/pages/poster/children/poster')
const routes = [
    {
        path     : '/',
        component: poster,
        name     : ''
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});


export default router;

