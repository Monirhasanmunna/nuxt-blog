<script setup>
import {useStore} from '~/stores/auth';
const store = useStore();

</script>

<template>
    <!-- header start -->
    <div class="w-full h-[50px] flex bg-green-500 fixed text-white">
        <div class="min-w-[230px] hidden h-full sm:flex justify-center items-center text-white  bg-green-600 border-r">
            <h2 class="text-[20px]">Dashboard</h2>
        </div>
                
        <div class="w-full flex justify-between items-center relative px-3">
            <div class="absolute left-2"><Icon id="toggleButton"class="text-[23px]" data-hs-overlay="#nav_manu_canvas" name="i-heroicons-bars-3-solid" /></div>
            <div></div>

            <BackendAvatarDropdown/>
        </div>
    </div>
    <!-- header end -->
</template>