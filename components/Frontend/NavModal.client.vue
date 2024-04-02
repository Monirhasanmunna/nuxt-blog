<script setup>
   
</script>

<template>
    <div>
    <!-- mobile navbar -->
    <USlideover v-model="isOpen" prevent-close class="h-[300px]">
        <UCard class="flex flex-col flex-1 " :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base text-[22px] text-green-600 uppercase font-semibold leading-6 dark:text-white">
                        Dev Blog
                    </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                </div>
            </template>

                <div class="flex flex-start flex-col items-center gap-4 px-3">
                    <NuxtLink class="text-gray-600 text-[14px] font-montserrat font-semibold capitalize">News</NuxtLink>
                    <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">Popular</NuxtLink>
                    <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">Web Design</NuxtLink>
                    <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">javaScript</NuxtLink>
                </div>
        </UCard>
        </USlideover>
        <!-- mobile navbar -->
    </div>
</template>