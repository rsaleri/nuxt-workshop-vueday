<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-24 gap-x-8 place-content-around mt-8">
      <artist-preview v-for="artist of artists" :key="artist.id" :artist="artist" />
    </div>
  </div>
</template>

<script>
import fakeData from '@/assets/fakeData'
export default {
  name: 'Index',
  data () {
    return {
      artists: fakeData
    }
  }
}
</script>

<style scoped>

</style>
