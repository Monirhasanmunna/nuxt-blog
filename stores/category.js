import { defineStore } from 'pinia'
import { useStore } from './auth';


export const useCategoryStore = defineStore('category', ()=>{
    const { $toast }    = useNuxtApp()
    const options       = {
        "theme": "colored",
        "autoClose": 2000,
    }
    const isLoading     = ref(false);
    const btnLoading    = ref(false);
    const categories    = ref(null);
    const store         = useStore();
    const authToken     = computed(() => store.authUser.token);
    const errors        = ref([]);
    const editData      = reactive({
        id: '',
        name: ''
    });

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


        if(data.status == 200){
            btnLoading.value = false;
            categories.value.unshift(data.data)
            HSOverlay.close('#categoryStore')
            $toast.success('Category created',options)
            formData.name = ''
        }

        if(data.status == 422){
            errors.value = data.errors
            HSOverlay.open('#categoryStore')
            btnLoading.value = false;
        }

    }


   async function editCategory(id){
        const data = await $fetch(`http://blogapi.test/api/category/edit/${id}`,{
            headers:{
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        });

        if(data.status == 200){
            editData.name = data.data.name
            editData.id = data.data.id
            HSOverlay.open('#categoryEdit')
        }
    }


    async function updateData(){
        btnLoading.value = true;
        const data = await $fetch(`http://blogapi.test/api/category/update/${editData.id}`,{
            method: "PUT",
            body: editData,
            headers:{
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        });


        if(data.status == 200){
            btnLoading.value = false;
            const getIndex = categories.value.findIndex(item => item.id == data.data.id)
            categories.value[getIndex] = data.data
            HSOverlay.close('#categoryEdit')
            $toast.success('Category Updated',options)
        }
    }


    async function deleteData(id){
        const data = await $fetch(`http://blogapi.test/api/category/delete/${id}`,{
            method: "Delete",
            headers:{
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        });

        if(data.status == 200){
            const Index = categories.value.findIndex(item => item.id == id)
            categories.value.splice(Index, 1)
            $toast.success('Category Deleted',options)
        }
    }

    
    return {
        categories,
        getCategories,
        isLoading,
        storeCategory,
        btnLoading,
        errors,
        editCategory,
        editData,
        updateData,
        deleteData
    }
});