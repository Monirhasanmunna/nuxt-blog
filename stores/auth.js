import { defineStore } from 'pinia'

export const useStore = defineStore('auth', ()=>{
    const authUser = useCookie('user',{
        maxAge: 60 * 60 * 24 * 7,
    });
    
   async function login(credencials){
        const data = await $fetch("http://blogapi.test/api/login",{
            method:"POST",
            body:credencials,
            headers:{
                "Content-Type" : "application/json"
            }
        });


        if(data.status == 200 && data.token && data.user){
            authUser.value = data
            navigateTo('/dashboard')
        }
    }


    function logout(){
        authUser.value = '';
        if(!authUser.value){
           navigateTo('/login') 
        }
        
    }

    return {
        login,
        authUser,
        logout
    }
});