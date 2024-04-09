<script setup>
import {useCategoryStore} from '~/stores/category'
import {useStore} from '~/stores/auth'


definePageMeta({
    layout: 'backend',
});


useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Category` : 'Category';
    }
});


const breadcrumbs = [
    {
        label: 'Category',
        link: '/dashboard/category'
    },
]


const store = useCategoryStore();
const items = ref([]);

onMounted(async ()=> {
    await store.getCategories();
    items.value = store.categories;
});

const formInput = reactive({
    name: ''
});

async function submitForm(){
  await store.storeCategory(formInput);
}


</script>

<template>
    <div class="pt-[20px] h-screen space-y-6">
        <BackendBreadcrumb :breadcrumbs="breadcrumbs" />
        <BackendBox class="space-y-5">
            <div class="flex justify-between items-center">
                <h2 class="capitalize text-gray-500 ">category List</h2>
                <button data-hs-overlay="#categoryStore" class="capitalize flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 duration-150"><Icon class="text-[18px]" name="heroicons:plus-circle-16-solid" /> Add new</button>
            </div>
            
            <BackendTableSakeleton v-if="store.isLoading || !store.categories"/>
            <div v-else class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-700 border" >
                    <thead class="">
                        <tr>
                            <td width="10%" class="pl-3 py-2 text-start text-[13px] font-medium text-gray-500 dark:text-gray-400 capitalize">
                                SL
                            </td>
                            <td class="text-start text-[13px] font-medium text-gray-500 dark:text-gray-400 capitalize">
                                Name
                            </td>
                            <td class="text-start text-[13px] font-medium text-gray-500 dark:text-gray-400 capitalize">
                                Status
                            </td>
                            <td width="10%" class="text-center text-[13px] font-medium text-gray-500 dark:text-gray-400 capitalize ">
                                Action
                            </td>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-300 dark:divide-gray-700 ">
                        <tr v-for="(item, index) in items" :key="index">
                            <td class="py-2 pl-3 whitespace-nowrap text-[13px] font-medium text-gray-800 dark:text-gray-400"> {{ index+1 }}</td>
                            
                            <td class="py-2  whitespace-nowrap text-[13px] font-medium text-gray-800 dark:text-gray-200">
                                {{ item.name }}
                            </td>

                            <td class="py-2 whitespace-nowrap text-[13px] text-gray-800 dark:text-gray-200">
                                {{ item.status}}
                            </td>

                            <td class="p-1 whitespace-nowrap flex items-center text-[13px] font-medium space-x-3">
                                <button class="bg-green-500 hover:bg-green-600 text-center px-3 py-1 rounded text-white flex items-center gap-1"><Icon name="material-symbols:box-edit" class="text-[17px]"/> Edit</button>
                                <button class="bg-red-500 hover:bg-red-600 text-center px-3 py-1 rounded text-white flex items-center gap-1"><Icon name="material-symbols:delete-outline" class="text-[17px]"/> Delete</button>
                            </td>
                        </tr>

                        <tr v-if="!items.length > 0">
                            <td class="text-gray-600 dark:text-gray-100 text-center text-[13px] py-3" colspan="8">No data found</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            
            <div id="categoryStore" class="hs-overlay hidden  size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                <div class="hs-overlay-open:mt-7  hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                    <div class="w-full flex flex-col bg-white border border-green-500 shadow-sm  rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div class="flex justify-end items-center pt-3 px-4">
                            <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700" data-hs-overlay="#categoryStore">
                            <span class="sr-only">Close</span>
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                            </button>
                        </div>
                        <form @submit.prevent="submitForm">
                            <div class="p-4 overflow-y-auto space-y-1">
                                <label for="name">Name</label>
                                <input v-model="formInput.name" type="text" id="name" class="w-full px-3 py-1 border border-green-500 focus:border-red-600 rounded" placeholder="Enter name">
                                <h6 v-if="store.errors?.name" class="text-red-600 text-sm">{{ store.errors?.name }}</h6>
                            </div>
                            <div class="flex justify-end items-center gap-x-2 pb-3 px-4">
                                <button v-if="!store.btnLoading" type="submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Submit
                                </button>

                                <button v-else type="button" disabled class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700  disabled:pointer-events-none">
                                    <div class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-green-400 rounded-full" role="status" aria-label="loading"></div>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </BackendBox>
    </div>
</template>