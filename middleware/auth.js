import {useStore} from '~/stores/auth';

export default defineNuxtRouteMiddleware((to,from)=>{
    
    const store = useStore();
    
    if(store.authUser?.token && to.path === '/login'){
        return navigateTo('/dashboard')
    }

    if(!store.authUser?.token && to.path === '/dashboard'){
        return navigateTo('/login')
    }
})