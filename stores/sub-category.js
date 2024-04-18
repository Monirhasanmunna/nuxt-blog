import { defineStore } from 'pinia'
import { useStore } from './auth';


export const useSubCategoryStore = defineStore('sub-category', ()=>{
    const { $toast }    = useNuxtApp()

    const options       = {
        "theme": "colored",
        "autoClose": 2000,
    }

    const isLoading     = ref(false);
    const btnLoading    = ref(false);
    const subCategories = ref([]);
    const categories    = ref(null);
    const store         = useStore();
    const authToken     = computed(() => store.authUser.token);
    const errors        = ref([]);

    const editData      = reactive({
        id: '',
        name: '',
        category_id: ''
    });

   async function getSubCategories(){
        isLoading.value = true;
        const data = await $fetch("http://blogapi.test/api/sub-category",{
            method: 'Get',
            headers: {
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        })

        subCategories.value = data.data
        categories.value = data.categories
        isLoading.value = false;
    }


    async function storeSubCategory(formData){
        btnLoading.value = true;
        const data = await $fetch("http://blogapi.test/api/sub-category/store",{
            method: 'post',
            body: formData,
            headers:{
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        })


        if(data.status == 200){
            btnLoading.value = false;
            subCategories.value.unshift(data.data)
            HSOverlay.close('#subCategoryStore')
            $toast.success('Sub Category created',options)
            formData.name = '',
            formData.category = ''
        }

        if(data.status == 422){
            errors.value = data.errors
            HSOverlay.open('#subCategoryStore')
            btnLoading.value = false;
        }

    }


   async function editSubCategory(id){
        const data = await $fetch(`http://blogapi.test/api/sub-category/edit/${id}`,{
            headers:{
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        });

        if(data.status == 200){
            console.log(data)
            editData.name = data.data.name
            editData.id = data.data.id
            editData.category_id = data.data.category_id
            HSOverlay.open('#subCategoryEdit')
        }
    }


    async function updateSubCategory(){
        btnLoading.value = true;
        const data = await $fetch(`http://blogapi.test/api/sub-category/update/${editData.id}`,{
            method: "PUT",
            body: editData,
            headers:{
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        });


        if(data.status == 200){
            btnLoading.value = false;
            const getIndex = subCategories.value.findIndex(item => item.id == data.data.id)
            subCategories.value[getIndex] = data.data
            HSOverlay.close('#subCategoryEdit')
            $toast.success('Sub Category Updated',options)
        }
    }


    async function deleteSubCategory(id){
        const data = await $fetch(`http://blogapi.test/api/sub-category/delete/${id}`,{
            method: "Delete",
            headers:{
                'Content-Type'  : 'application/json',
                'authorization' : `Bearer ${authToken.value}`,
            }
        });

        if(data.status == 200){
            const Index = subCategories.value.findIndex(item => item.id == id)
            subCategories.value.splice(Index, 1)
            $toast.success('Sub Category Deleted',options)
        }
    }

    
    return {
        subCategories,
        categories,
        getSubCategories,
        isLoading,
        storeSubCategory,
        btnLoading,
        errors,
        editSubCategory,
        editData,
        updateSubCategory,
        deleteSubCategory
    }
});