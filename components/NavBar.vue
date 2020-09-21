<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <!--
          TODO: Add the workshop app logo
          TODO: Also link it to the index page. Replace the div below to do so (but keep the classes for later)
          -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/">
              <img
                  class="h-8 w-auto"
                  alt="Workshop App logo"
                  :src="logo"
              >
            </NuxtLink>
          </div>
          <div class="flex space-x-8 ml-2 lg:ml-6">
            <NuxtLink
                to="/artists"
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out "
                active-class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
                exact-active-class="border-indigo-500 text-gray-900 focus:border-indigo-700"
            >Artists</NuxtLink>
            <!--
            TODO: Here should be the Nuxt Links
            base classes: inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out
            additional classes when active: border-indigo-500 text-gray-900 focus:border-indigo-700
            additional classes when not active: border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300
            -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      logo: require('@/assets/logo.png'),
      links: [
        {label: 'Artists', uri: '/artists'}
      ]
      // Could we maybe add something here? 🤔
    }
  }
}
</script>
