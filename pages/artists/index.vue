<template>
  <div>
    <nav-bar />
    <artist-preview v-for="artist of artists" :key="artist.id" :artist="artist" />
  </div>
</template>

<script>
import fakeData from '@/assets/fakeData'
export default {
name: "index",
  data() {
    return {
      artists: fakeData
    }
  }
}
</script>

<style scoped>

</style>
