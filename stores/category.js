import { defineStore } from 'pinia'
import { useStore } from './auth';


export const useCategoryStore = defineStore('category', ()=>{
    const isLoading     = ref(false);
    const btnLoading    = ref(false);
    const categories    = ref(null);
    const store         = useStore();
    const authToken     = computed(() => store.authUser.token);
    const errors        = ref([]);

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


    async function storeCategory(formData){
        btnLoading.value = true;
        const data = await $fetch("http://blogapi.test/api/category/store",{
            method: 'post',
            body: formData,
            headers:{
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        })

        console.log(data);
        if(data.status == 200){
            btnLoading.value = false;
            categories.value.unshift(data.data)
            HSOverlay.close('#categoryStore')
            formData.name = ''
        }

        if(data.status == 422){
            errors.value = data.errors
            HSOverlay.open('#categoryStore')
            btnLoading.value = false;
        }

    }

    return {
        categories,
        getCategories,
        isLoading,
        storeCategory,
        btnLoading,
        errors
    }
});