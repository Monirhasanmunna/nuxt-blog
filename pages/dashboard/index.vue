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
    <div>
        <h2 class="text-[20px]">Hello World</h2>
    </div>
</template>

<style scoped>

</style>