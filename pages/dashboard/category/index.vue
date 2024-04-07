<script setup>
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

</script>

<template>
    <div class="pt-[20px] h-screen space-y-6">
        <BackendBreadcrumb :breadcrumbs="breadcrumbs" />

        <div class="box w-full p-3 border border-green-500">
            <div class="flex justify-between items-center">
                <h2 class="capitalize text-gray-500 ">category List</h2>
                <button class="capitalize bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 duration-150">Add new</button>
            </div>
        </div>
    </div>
</template>