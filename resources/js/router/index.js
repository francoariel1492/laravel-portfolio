import {createRouter, createWebHistory} from "vue-router";

import homeAdminIndex from '../components/admin/home/index.vue'

import homePageIndex from '../components/pages/home/index.vue'

import login from '../components/auth/login.vue'

import notFound from '../components/notFound.vue'


const routes = [
    {
        path:'/admin/home',
        name: 'adminHome',
        component: homeAdminIndex,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/',
        name: 'Home',
        component: homePageIndex,
        meta:{
            requiresAuth: false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta:{
            requiresAuth: false
        }

    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound,
        meta:{
            requiresAuth: false
        }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) =>{
    if(to.meta.requiresAuth && !localStorage.getItem('token')){
        return { name: 'Login'}
    }

    if(to.meta.requiresAuth == false && localStorage.getItem('token')){
        return {name: 'adminHome'}
    }
})
export default router