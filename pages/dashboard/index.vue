<script setup>
    definePageMeta({
        'layout' : 'backend',
        middleware:['auth']
    });

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - Dashboard` : 'Dashboard';
        }
     })
</script>

<template>   
    <!-- body start -->
    <div>
        <h2 class="text-[20px]">Hello World</h2>
    </div>
    <!-- body ends -->
</template>

<style scoped>

</style>