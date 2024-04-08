import { defineStore } from 'pinia'
import { useStore } from './auth';

export const useCategoryStore = defineStore('category', ()=>{
    const isLoading     = ref(false);
    const categories    = ref(null);
    const store         = useStore();
    const authToken     = computed(() => store.authUser.token);
    


   async function getCategories(){
        isLoading.value = true;
        const data = await $fetch("http://blogapi.test/api/category",{
            method: 'Get',
            headers: {
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        })

        
        categories.value = data.data
        isLoading.value = false;
    }

    return {
        categories,
        getCategories,
        isLoading
    }
});