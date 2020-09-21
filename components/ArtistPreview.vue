<template>
  <div class="flex justify-center">
    <div class="w-48">
      <!-- Link the image to the artist's detail page here based on it's id -->
      <img class="w-48 h-48" :src="artist.thumb" :alt="artist.name">

      <!--
       Replace the h2 with a NuxtLink that also points to the artist's detail page
       Please also set these CSS classes (for later): font-semibold block text-gray-800 hover:underline mt-2"
       -->
      <NuxtLink class="font-semibold block text-gray-800 hover:underline mt-2" :to="linkTo">
        {{ artist.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    artist: {
      type: Object,
      required: true,
      default () {
        return {
          id: null,
          type: '',
          master_id: null,
          master_url: null,
          uri: '',
          title: '',
          thumb: '',
          cover_image: '',
          resource_url: ''
        }
      }
    }
  },
  computed: {
    linkTo () {
      return `artists/${this.artist.id}`
    }
  }
  // Hint: You can use a computed prop for the link's "to" value"
}
</script>
