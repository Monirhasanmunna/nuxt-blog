<script setup>
    
</script>

<template>
    <!-- sidebar start -->
    <div id="sidebar" class="w-[0px] pt-[40px] sm:min-w-[230px] min-h-screen border-r border-green-300 bg-blue-100 overflow-hidden">
        <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul class="space-y-1.5">
      <li>
        <a class="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Dashboard
        </a>
      </li>

      <li class="hs-accordion" id="users-accordion">
        <button type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-gray-800 hs-accordion-active:hover:bg-transparent text-sm text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Users

          <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>

          <svg class="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div id="users-accordion-child" class="hs-accordion-content text-[13px] w-full bg-blue-200 mt-[5px] rounded-lg overflow-hidden transition-[height] duration-300 hidden">
          <ul class="hs-accordion-group p-2" data-hs-accordion-always-open>
            <li class="hs-accordion hover:bg-green-300 p-[8px] rounded-md" id="users-accordion-sub-1">
                <a href="">Sub Menu 1</a>
            </li>

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

  #bodyCard {
    transition: margin-left 0.3s; /* Optional: Add a smooth transition effect */
  }
</style>