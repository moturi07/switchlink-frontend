import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

Vue.use(Router)

const routes=[
    {path: '/', name:'home', component: Home},
    {path: '/dashboard', name:'dashboard', component: Dashboard, meta: {requiresAuth: true}},
    {path: '/login', name:'login', component: Login},
    {path: '/register', name:'register', component: Register}
]

const router= new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next)=>{
    const requiresAuth=to.matched.some(record=>record.meta.requiresAuth);
    const isAuthenticated=firebase.auth().currentUser;
    if(requiresAuth && !isAuthenticated){
        next("/login");
    }else{
        next();
    }
})
export default router