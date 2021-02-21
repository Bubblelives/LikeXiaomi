import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import("@/views/Home");
const Display = () => import("@/views/Display");
const NotFound = () => import("@/views/NotFound");

const routes = [
    {
        path: '/',
        redirect: '/home/display'
    }, {
        path: '/home',
        component: Home,
        children: [{
            path: 'display',
            component: Display
        }]
    }, {
        path: '*',
        component: NotFound
    }
];
const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.noPublic && !Vuex.state.token) {
        return next(false);
    }
    next()
})

export default router;