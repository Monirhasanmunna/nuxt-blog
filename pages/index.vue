<script setup>
definePageMeta({ layout: 'frontend' });

import {useStore} from '../stores/auth'
const store = useStore();
</script>

<template>
    <div>
        <div class="w-full border border-gray-400">
            <!-- header start -->
            <div class="w-full md:w-[1000px] mx-auto px-3 flex justify-between items-center">
                <!-- left side -->
                <div class="flex items-center">
                    <!-- logo text -->
                    <div class="h-auto w-auto border-r border-gray-200 p-2">
                        <h1 class="text-[22px] text-green-600 uppercase">Dev Blog</h1>
                    </div>

                    <div class=" h-full flex flex-start items-center gap-4 px-3">
                        <NuxtLink class="text-gray-600 text-[14px] font-montserrat font-semibold capitalize">News</NuxtLink>
                        <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">Popular</NuxtLink>
                        <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">Web Design</NuxtLink>
                        <NuxtLink class="text-gray-600 text-[14px] font-montserrat capitalize">javaScript</NuxtLink>
                    </div>
                </div>
                <!-- right side -->
                <div class="w-[100px] flex items-center justify-between">
                    <UIcon name="i-heroicons-bars-3-solid" class="text-[20px]" />
                    <UIcon name="i-heroicons-magnifying-glass-20-solid" class="text-[20px]" />
                </div>
            </div>
            <!-- header end -->

            
        </div>
    </div>
</template>