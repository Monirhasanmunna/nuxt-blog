<script setup>
    import {useStore} from '~/stores/auth'
    definePageMeta({ 
        layout: 'frontend-login',
        middleware:['auth']
     })

     useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - Login` : 'Login';
        }
     })
    
    const store = useStore();

    const credencials = reactive({
        email: '',
        password: ''
    });

    function submit(){
        store.login(credencials)
    }
</script>

<template>
    <div>
        <div class="main w-full md:max-w-[1000px] mx-auto px-3">
            <div class="flex justify-center items-center w-full h-[400px]">
                <div class="w-4/12 border border-gray-400 p-4 space-y-5">
                    <div class="w-full border-b pb-3">
                        <h3 class="text-gray-600 text-[20px] font-semibold">Login</h3>
                    </div>
                    <form @submit.prevent="submit" class="w-full space-y-3">
                        <div class="w-full">
                            <label for="">
                                Email
                                <input type="email" v-model="credencials.email" class="w-full border border-gray-400 p-1 px-2 rounded focus:border-0" placeholder="Enter Email"/>
                            </label>
                        </div>

                        <div class="w-full">
                            <label for="">
                                Password
                                <input type="password" v-model="credencials.password" class="w-full border border-gray-400  p-1 px-2 rounded focus:border-green-400" placeholder="*********"/>
                            </label>
                        </div>

                        <div class="w-full">
                            <button type="submit" class="bg-green-600 px-3 py-1 text-white rounded">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>