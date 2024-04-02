<script setup>
definePageMeta({ layout: 'frontend' });

import {useStore} from '../stores/auth'
const store = useStore();
</script>

<template>
        <div class="main w-full md:max-w-[1000px] mx-auto px-3">
            <!-- banner start -->
            <div class="w-full space-y-5 md:space-y-0 md:flex md:gap-6">
                <div class="w-full md:w-6/12 h-[250px] md:h-[300px] overlay bg-cover bg-no-repeat " style="background-image: url('/image/post-1.jpg.webp')">
                    <div class="w-full h-full flex flex-col justify-end gap-2 p-4">
                        <div class="w-full flex gap-4">
                            <div class="bg-[#EF8207] px-3 text-white rounded-sm text-sm">
                                <h3>Javascript</h3>
                            </div>

                            <div class="">
                                <h3 class="text-[13px] text-gray-100 font-semibold">March 27, 2018</h3>
                            </div>
                        </div>

                        <div class="title w-full">
                            <NuxtLink class="text-gray-50 text-[20px] font-semibold ">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-6/12 h-[250px] md:h-[300px] overlay bg-cover p-4 bg-no-repeat" style="background-image: url('/image/post-1.jpg.webp')">
                    <div class="w-full h-full flex flex-col justify-end gap-2 ">
                        <div class="w-full flex gap-4">
                            <div class="bg-[#EF8207] px-3 text-white rounded-sm text-sm">
                                <h3>Javascript</h3>
                            </div>

                            <div class="">
                                <h3 class="text-[13px] text-gray-100 font-semibold">March 27, 2018</h3>
                            </div>
                        </div>

                        <div class="title w-full">
                            <NuxtLink class="text-gray-50 text-[20px] font-semibold ">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- banner end -->

            <!-- recent post start -->
            <div class="w-full mt-[30px] space-y-8">
                <div class="title w-full">
                    <h1 class="text-gray-800 text-[30px] font-semibold">Recent Posts</h1>
                </div>

                <div class="w-full md:grid grid-cols-3 gap-7 space-y-10 md:space-y-0">
                    <!-- post starts -->
                    <div class="w-full ">
                        <div class="w-full overlay  overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="w-full overlay overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="w-full overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="w-full overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="w-full overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="w-full overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- recent post ends -->
        </div>

        <!-- featured post start -->
        <div class="main w-full mx-auto px-3 border">
            <div class="w-full md:max-w-[1000px] mx-auto bg-[#FBFBFD] pt-[30px] pb-[50px]">
                <div class="w-full pb-[30px]">
                    <h2 class="text-center text-[28px] font-semibold">Featured Posts</h2>
                </div>

                <div class="w-full md:grid grid-cols-3 gap-7 space-y-10 md:space-y-0">
                    <!-- posts -->
                    <div class="w-full">
                        <div class="w-full overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="w-full overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="w-full overlay bg-cover bg-no-repeat h-[300px] md:h-[200px]" style="background-image: url('/image/post-1.jpg.webp')"></div>
                        <div class="w-full mt-4 space-y-3">
                            <div class="flex gap-4">
                                <div class="bg-green-700 px-2 text-white rounded-sm flex items-center">
                                    <h2 class="uppercase text-[13px]">web design</h2>
                                </div>
                                <div>
                                    <h2 class="text-[11px] font-semibold">March 27, 2018</h2>
                                </div>
                            </div>
                            <div class="title w-full">
                                <h3 class="text-[16px] font-semibold">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</h3>
                            </div>
                        </div>
                    </div>
                    <!-- posts -->
                </div>
            </div>
        </div>
        <!-- featured post ends -->


        
        <div class="w-full md:max-w-[1000px] px-3 mx-auto pb-[30px]">
            <!-- most read start -->
            <div class="w-full pb-[30px]">
                <h2 class="text-[28px] font-semibold">Most Read</h2>
            </div>

            <div class="w-full md:flex gap-6 space-y-10 md:space-y-0">
                <div class="left w-full md:w-8/12 space-y-6">
                    <div class="card w-full md:flex gap-6 space-y-5 md:space-y-0 ">
                        <div class="image overlay bg-cover bg-no-repeat h-[170px] md:w-5/12" style="background-image: url('/image/post-4.jpg.webp')"></div>
                        <div class="info w-full md:w-7/12 space-y-3">
                            <div class="w-full flex gap-4">
                                <div class="bg-[#EF8207] px-3 text-white rounded-sm text-sm">
                                    <h3>Javascript</h3>
                                </div>

                                <div class="">
                                    <h3 class="text-[12px] text-gray-900">March 27, 2018</h3>
                                </div>
                            </div>
                            <!-- title -->
                            <div class="title w-full">
                                <NuxtLink class="text-gray-900 text-[18px] font-semibold ">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</NuxtLink>
                            </div>

                            <!-- description -->
                            <div class="description w-full">
                                <h2 class="text-gray-900 text-[13px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</h2>
                            </div>
                        </div>
                    </div>

                    <div class="card w-full md:flex gap-6 space-y-5 md:space-y-0 ">
                        <div class="image overlay bg-cover bg-no-repeat h-[170px] md:w-5/12" style="background-image: url('/image/post-4.jpg.webp')"></div>
                        <div class="info w-full md:w-7/12 space-y-3">
                            <div class="w-full flex gap-4">
                                <div class="bg-[#EF8207] px-3 text-white rounded-sm text-sm">
                                    <h3>Javascript</h3>
                                </div>

                                <div class="">
                                    <h3 class="text-[12px] text-gray-900">March 27, 2018</h3>
                                </div>
                            </div>
                            <!-- title -->
                            <div class="title w-full">
                                <NuxtLink class="text-gray-900 text-[18px] font-semibold ">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</NuxtLink>
                            </div>

                            <!-- description -->
                            <div class="description w-full">
                                <h2 class="text-gray-900 text-[13px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</h2>
                            </div>
                        </div>
                    </div>

                    <div class="card w-full md:flex gap-6 space-y-5 md:space-y-0 ">
                        <div class="image overlay bg-cover bg-no-repeat h-[170px] md:w-5/12" style="background-image: url('/image/post-4.jpg.webp')"></div>
                        <div class="info w-full md:w-7/12 space-y-3">
                            <div class="w-full flex gap-4">
                                <div class="bg-[#EF8207] px-3 text-white rounded-sm text-sm">
                                    <h3>Javascript</h3>
                                </div>

                                <div class="">
                                    <h3 class="text-[12px] text-gray-900">March 27, 2018</h3>
                                </div>
                            </div>
                            <!-- title -->
                            <div class="title w-full">
                                <NuxtLink class="text-gray-900 text-[18px] font-semibold ">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</NuxtLink>
                            </div>

                            <!-- description -->
                            <div class="description w-full">
                                <h2 class="text-gray-900 text-[13px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</h2>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex justify-center items-center pt-[40px]">
                        <button class="bg-black px-3 py-2 text-white rounded-md">Load More</button>
                    </div>
                </div>

                <div class="right w-full md:w-4/12">
                    <div class="w-full pb-[30px]">
                        <h2 class="text-[26px] font-semibold">Catagories</h2>
                    </div>

                    <div class="space-y-4">
                        <div class="w-full flex justify-between border-b pb-3">
                            <h1>Web Design</h1>
                            <div class="bg-green-500 text-white font-semibold px-1 rounded-md">
                                <span class="">340</span>
                            </div>
                        </div>
                        <div class="w-full flex justify-between border-b pb-3">
                            <h1>Web Design</h1>
                            <div class="bg-green-500 text-white font-semibold px-1 rounded-md">
                                <span class="">340</span>
                            </div>
                        </div>
                        <div class="w-full flex justify-between border-b pb-3">
                            <h1>Web Design</h1>
                            <div class="bg-green-500 text-white font-semibold px-1 rounded-md">
                                <span class="">340</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- most read end -->

        </div>
</template>

<style scoped>
    .overlay {
    position: relative;
}

.overlay::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(142, 142, 142, 0); /* Adjust opacity here */
    transition: background-color 0.3s ease; /* Smooth transition */
}

.overlay:hover::before {
    background-color: rgba(150, 150, 150, 0.274); /* Adjust opacity here */
}
</style>