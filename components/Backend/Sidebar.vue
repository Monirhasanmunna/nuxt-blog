<script setup>
    const route = useRoute();
  
    // console.log(route)
</script>

<template>
    <!-- sidebar start -->
    <div id="sidebar" class="w-[0px] sm:min-w-[230px] fixed left-0 bottom-0 top-[50px] min-h-screen border-r border-green-300 bg-blue-100 overflow-hidden">
        <nav class="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul class="space-y-1.5">
            <li>
              <NuxtLink to="/dashboard" class="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600" >
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Dashboard
              </NuxtLink>
            </li>

            <li class="hs-accordion" id="users-accordion">
              <button type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-gray-800 hs-accordion-active:hover:bg-transparent text-sm text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
                <Icon name="bx:category" class="text-[19px]"/>
                Categories
                <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                <svg class="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div id="users-accordion-child" class="hs-accordion-content text-[13px] w-full bg-blue-200 mt-[5px] rounded-lg overflow-hidden transition-[height] duration-300 hidden">
                <ul class="hs-accordion-group p-2" data-hs-accordion-always-open>
                  <NuxtLink to="/dashboard/category">
                    <li class="hs-accordion hover:bg-blue-100  p-[8px] rounded-md" id="users-accordion-sub-1">
                        Category List
                    </li>
                  </NuxtLink>
                </ul>
              </div>
            </li>

            <li class="hs-accordion" id="users-accordion">
              <button type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-gray-800 hs-accordion-active:hover:bg-transparent text-sm text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
                <Icon name="bx:category-alt" class="text-[19px]"/>
                Sub Categories
                <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                <svg class="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div id="users-accordion-child" class="hs-accordion-content text-[13px] w-full bg-blue-200 mt-[5px] rounded-lg overflow-hidden transition-[height] duration-300 hidden">
                <ul class="hs-accordion-group p-2" data-hs-accordion-always-open>
                  <NuxtLink to="/dashboard/sub-category">
                    <li class="hs-accordion hover:bg-blue-100  p-[8px] rounded-md" id="users-accordion-sub-1">
                        Sub Category List
                    </li>
                  </NuxtLink>
                </ul>
              </div>
            </li>


          </ul>
        </nav>
    </div>
    <!-- sidebar end -->
</template>

<style scoped>
#sidebar {
    transition: min-width 0.3s; /* Optional: Add a smooth transition effect */
  }
</style>