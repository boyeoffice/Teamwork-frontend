import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/Dashboard/Dashboard.vue'),
        name: 'Dashboard',
        meta: { onlyAuthUser: true }
    },
    {
        path: '/login',
        component: () => import('../views/Auth/Login'),
        name: 'Login'
    },
    {
        path: '/employee',
        component: () => import('../views/Employee/Employee'),
        name: 'Employee',
        meta: { onlyAuthUser: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkExactActiveClass: 'active'
})

export default router
