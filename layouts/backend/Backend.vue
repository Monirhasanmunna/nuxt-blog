<script setup>
    useHead({
        script:[{src:"/js/dashboard.js", body: true}]
    })
</script>

<template>
    <div id="mainBody" class="w-full min-h-screen bg-gray-200">
            <BackendHeader/>
        <div class="w-full flex min-h-screen bg-green-300">
            <BackendSidebar/>
            <div id="body" class="w-full bg-gray-100 pt-[55px] pr-[15px] pl-[15px] md:pl-[250px] ">
                <slot></slot>   
            </div>
        </div>
    </div>
</template>

<style scoped>
#body {
    transition: padding-left 0.3s; /* Optional: Add a smooth transition effect */
}
</style>