<script setup>
    const isOpen = ref(false);
</script>

<template>
    <div>
        <div class="w-full border border-gray-200">
            <!-- header start -->
            <div class="w-full md:max-w-[1000px]  mx-auto px-3 flex justify-between items-center">
                <!-- left side -->
                <div class="flex items-center">
                    <!-- logo text -->
                    <div class="h-auto w-auto md:border-r border-gray-200 py-2 pr-2">
                       <NuxtLink to="/"><h1 class="text-[22px] text-green-600 uppercase">Dev Blog</h1></NuxtLink> 
                    </div>

                    <div class="hidden h-full md:flex flex-start items-center gap-4 px-3">
                        <NuxtLink class="text-gray-600 text-[14px] font-montserrat font-semibold capitalize">News</NuxtLink>
                        <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">Popular</NuxtLink>
                        <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">Web Design</NuxtLink>
                        <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">javaScript</NuxtLink>
                    </div>
                </div>
                <!-- right side -->
                <div class="w-[100px] flex items-center justify-end">
                    <UIcon @click="isOpen = true" name="i-heroicons-bars-3-solid" class="text-[20px] sm:hidden" />
                    <UIcon name="i-heroicons-magnifying-glass-20-solid" class="text-[20px]" />
                </div>
            </div>
            <!-- header end -->

            <!-- mobile navbar -->
                <USlideover v-if="isOpen" v-model="isOpen" prevent-close class="h-[300px]">
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
    </div>
</template>