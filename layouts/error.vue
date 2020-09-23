<template>
  <div>
    <div v-if="error.statusCode === 404">
      PAGE NOT FOUND
    </div>
    <div v-else>
      CONGRATS, YOU BROKE THE INTERWEBS
    </div>
    <img
      :src="require('@/assets/error.jpg')"
    >
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>

<style scoped>

</style>
