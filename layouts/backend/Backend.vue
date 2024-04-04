<script setup>
    useHead({
        script:[{src:"js/dashboard.js", body: true}]
    })
</script>

<template>
    <div>
        <div class="w-full min-h-screen bg-gray-200">
            <BackendHeader/>
            <div class="w-full flex min-h-screen bg-green-300">
                <BackendSidebar/>
                <div class="w-full bg-gray-100 pt-[55px] px-[15px]">
                 <slot></slot>    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#sidebar {
    transition: min-width 0.3s; /* Optional: Add a smooth transition effect */
  }

  #bodyCard {
    transition: margin-left 0.3s; /* Optional: Add a smooth transition effect */
  }
</style>