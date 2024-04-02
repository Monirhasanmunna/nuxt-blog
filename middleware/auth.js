import {useStore} from '~/stores/auth';

export default defineNuxtRouteMiddleware((to,from)=>{
    const store = useStore();
    if(store.isLogedIn === true && to.path === '/login'){
        return navigateTo('/dashboard')
    }

    if(store.isLogedIn === false && to.path === '/dashboard'){
        return navigateTo('/login')
    }
})