<script setup>
    definePageMeta({
        'layout' : 'backend',
        middleware:['auth']
    });

    import {useStore} from '~/stores/auth';
    const store = useStore();
</script>

<template>
    <div>
        <button @click="store.logout" class="bg-black px-3 py-2 text-white rounded-md">Logout</button>
    </div>
</template>