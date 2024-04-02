import { defineStore } from 'pinia'

export const useStore = defineStore('auth', ()=>{
    const isLogedIn = ref(false);
    const authUser = ref(null);
    
   async function login(credencials){
        const {data} = await useFetch("http://blogapi.test/api/login",{
            method:"POST",
            body:credencials,
            headers:{
                "Content-Type" : "application/json"
            }
        });

        if(data.value.status == 200 && data.value.token && data.value.user){
            isLogedIn.value = true
            authUser.value = data.value.user
            navigateTo('/dashboard')
        }
    }


    function logout(){
        isLogedIn.value = false;
        authUser.value = null;
        navigateTo('/login')
    }

    return {
        login,
        isLogedIn,
        authUser,
        logout
    }
},
{
    persist: {storage: persistedState.localStorage}
}
);