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

const store = useCategoryStore();
onMounted(()=> {
    store.getCategories()
});

// console.log(store.categories);

const headers = [
      { text: "Name", value: "name" },
      { text: "Slug", value: "slug" },
      { text: "Status", value: "status" },
    ];

const items = [
      { "name": "Curry", "height": 178, "weight": 77, "age": 20, "number": 1771501865 },
      { "name": "James", "height": 180, "weight": 75, "age": 21 },
      { "name": "Jordan", "height": 181, "weight": 73, "age": 22 }
    ];

    
    const auth = useStore();
</script>

<template>
    <div class="pt-[20px] h-screen space-y-6">
        <BackendBreadcrumb :breadcrumbs="breadcrumbs" />

        {{ auth.isLogedIn }}
        {{ auth.authUser.token }}

        <BackendBox class="space-y-5">
            <div class="flex justify-between items-center">
                <h2 class="capitalize text-gray-500 ">category List</h2>
                <button class="capitalize bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 duration-150">Add new</button>
            </div>
            
            <BackendBox class="border-none">
                <DataTable v-if="!store.isLoading" :headers="headers" :items="items" />
            </BackendBox>
        </BackendBox>
    </div>
</template>