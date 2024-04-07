<script setup>
    const props = defineProps({
        breadcrumbs: {Array}
    });
    
    const totalIndex = props.breadcrumbs.length;
</script>

<template>
        <div class="flex justify-end ">
            <ol class="flex items-center whitespace-nowrap">
                <li class="inline-flex items-center">
                    <NuxtLink to="/dashboard" class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" >
                    <svg class="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Home
                    </NuxtLink>
                    <svg class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </li>
                <li class="inline-flex items-center" v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                    <NuxtLink :to="breadcrumb.link" class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500">
                    <div class="flex gap-2 items-center">
                        <Icon v-if="breadcrumb.icon" :name="breadcrumb.icon" class="text-[18px]" />
                        {{ breadcrumb.label }}
                    </div>
                    <svg v-if="index != (totalIndex - 1)" class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    </NuxtLink>
                </li>
            </ol>
        </div>
</template>