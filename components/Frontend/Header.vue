<script setup>
    const isOpen = ref(false);
</script>

<template>
    <div class="w-full border border-gray-200">
        <div class="w-full md:max-w-[1000px] mx-auto px-3 flex justify-between items-center">
            <div class="flex items-center">
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
            <ClientOnly>
            <div class="w-[100px] flex items-center justify-end gap-4">
                <div><Icon  name="i-heroicons-magnifying-glass-20-solid" class="text-[20px]" /></div>
                <div class="sm:hidden"><Icon class="text-[20px]" data-hs-overlay="#nav_manu_canvas" name="i-heroicons-bars-3-solid" /></div>
            </div>
            </ClientOnly>
        </div>
        <ClientOnly>
        <div id="nav_manu_canvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform  h-auto w-full  z-[80] bg-white border-e dark:bg-gray-800 dark:border-gray-700" tabindex="-1">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                <h1 class="text-[22px] text-green-600 uppercase">Dev Blog</h1>
                <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700" data-hs-overlay="#nav_manu_canvas">
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="p-4">
                <div class="h-full flex flex-col items-center gap-4 px-3">
                    <NuxtLink class="text-gray-600 text-[14px] font-montserrat font-semibold capitalize">News</NuxtLink>
                    <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">Popular</NuxtLink>
                    <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">Web Design</NuxtLink>
                    <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">javaScript</NuxtLink>
                </div>
            </div>
        </div>
        </ClientOnly>
    </div>
</template>