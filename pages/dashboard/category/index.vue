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
        label: 'App Center',
        icon: 'material-symbols:app-registration',
        link: '/dashboard/category'
    },
    {
        label: 'Application',
        link: '/dashboard/category',
    },
    {
        label: 'Create',
        icon: 'material-symbols:add-box-outline-rounded',
        link: '/dashboard/category/create'
    },
]

const headers = [
    { text: "Name", value: "name" },
    { text: "Slug", value: "slug" },
    { text: "Status", value: "status" },
];


const store = useCategoryStore();
const items = ref([]);

onMounted(async ()=> {
    await store.getCategories();
    items.value = store.categories;
});

</script>

<template>
    <div class="pt-[20px] h-screen space-y-6">
        <BackendBreadcrumb :breadcrumbs="breadcrumbs" />

        <BackendBox class="space-y-5">
            <div class="flex justify-between items-center">
                <h2 class="capitalize text-gray-500 ">category List</h2>
                <button class="capitalize bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 duration-150">Add new</button>
            </div>
            
            <BackendTableSakeleton v-if="store.isLoading || !store.categories"/>
            <DataTable v-else :headers="headers" :items="items" /> 
            
        </BackendBox>
    </div>
</template>